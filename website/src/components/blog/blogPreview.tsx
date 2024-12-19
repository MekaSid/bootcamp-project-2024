import React from "react";
import style from "./blogPreview.module.css";
import { Blog } from "@/database/blogSchema";
import Link from "next/link";
import Image from "next/image";

export default function BlogPreview(props: Blog) {

  return (
    <div className={style.blogCard}>
      <Link href={`/blogs/${props.slug}`}>
          <h2 className={style.blogTitle}>{props.title}</h2>
      </Link>
      <div className={style.blogContent}>
        <div className={style.blogImage}>
          <Image
            src={props.image}
            alt={props.imageAlt}
            width={500}
            height={300}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className={style.blogInfo}>
          <p className={style.blogDescription}>{props.description}</p>
          <p className={style.blogDate}>{props.date.toDateString()}</p>
        </div>
      </div>
    </div>
  );
}