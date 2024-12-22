"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./AddComment.module.css";

type AddCommentButtonProps = {
  params: Promise<{ slug: string }>; // Expect params as a Promise
};

export default function AddCommentButton({ params }: AddCommentButtonProps) {
  const [resolvedParams, setResolvedParams] = useState<{ slug: string } | null>(null);
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  // Resolve params asynchronously
  useEffect(() => {
    params.then(setResolvedParams).catch((err) => {
      console.error("Failed to resolve params:", err);
      setError("Failed to load data.");
    });
  }, [params]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      if (!resolvedParams) {
        throw new Error("Missing required data.");
      }

      const { slug } = resolvedParams;

      const response = await fetch(`/api/blogs/${slug}/comments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: username,
          content: message,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to submit comment.");
      }

      // Navigate back to the blog page
      router.push(`/blogs/${slug}`);
    } catch (err: unknown) {
      console.error("Error submitting comment:", err);

      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred.";
      setError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!resolvedParams) {
    return <p>Loading...</p>; // Handle loading state
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Add a Comment</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="username" className={styles.label}>
            Username:
          </label>
          <input
            id="username"
            type="text"
            className={styles.input}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="message" className={styles.label}>
            Message:
          </label>
          <textarea
            id="message"
            className={styles.textarea}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            disabled={isSubmitting}
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button
          type="submit"
          className={styles.submitButton}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
