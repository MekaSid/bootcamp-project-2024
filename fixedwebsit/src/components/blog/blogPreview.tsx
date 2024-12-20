import Link from "next/link";
import React from "react";
import style from "./blogPreview.module.css";
import Image from "next/image";
import Blog from "@/database/blogSchema";

export default function BlogPreview(props: Blog) {
  console.log(props.title);
  const formattedDate = new Date(props.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className={style.preview}>
      <h3>{props.title}</h3>
      <div className={style.imageWrapper}>
        <Image
          src={props.image}
          alt={props.imageAlt}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <Link href={`blogs/${props.slug}`}>
        <button className={style.button}>Read More</button>
      </Link>
      <p>{props.description}</p>
      <p>{formattedDate}</p>
    </div>
  );
}
