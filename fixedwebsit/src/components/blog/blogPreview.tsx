import Link from "next/link";
import React from "react";
import style from "./blogPreview.module.css";
import Image from "next/image";
import {IBlog} from "@/database/blogSchema";

export default function BlogPreview(props: IBlog) {
  console.log(props.title);
  

  return (
    <div className={style.preview}>
      <h3>{props.title}</h3>
      <div className={style.imageWrapper}>
        <Image
          src={props.image}
          alt={props.imageAlt}
          fill
          priority
          sizes="100vw"

        />
      </div>
      <Link href={`blogs/${props.slug}`}>
        <button className={style.button}>Read More</button>
      </Link>
      <p>{props.description}</p>
    </div>
  );
}
