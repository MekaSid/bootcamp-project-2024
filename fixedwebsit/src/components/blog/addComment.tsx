"use client"; // Add this directive at the top

import { useRouter } from "next/navigation";
import style from "./addComment.module.css";

type Props = {
  slug: string;
};

export default function AddCommentButton({ slug }: Props) {
  const router = useRouter();

  const handleAddComment = () => {
    router.push(`/blogs/${slug}/add-comment`);
  };

  return (
    <button className={style.addCommentButton} onClick={handleAddComment}>
      Add Comment
    </button>
  );
}
