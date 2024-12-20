import Blog from "@/database/blogSchema";
import Image from "next/image";
import style from "./blogpage.module.css";
import Comment from "@/components/comments/Comment";

type Props = {
  params: { slug: string };
};

async function getBlog(slug: string) {
  try {
    const res = await fetch(`http://localhost:3000/api/blogs/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.log(`error: ${err}`);
    return null;
  }
}

export default async function BlogScreen({ params: { slug } }: Props) {
  const blog: Blog = await getBlog(slug);

  if (!blog) {
    return (
      <div>
        <h1 className="pageTitle">404 - Blog Not Found</h1>
      </div>
    );
  }

  return (
    <div className={style.body}>
      <h1 className={style.pageTitle}>{blog.title}</h1>
      <div className={style.blogImageWrapper}>
        <Image
          className={style.blogImage}
          src={blog.image}
          alt={blog.imageAlt}
          width={600} /* Adjusted for responsiveness */
          height={400} /* Adjusted for responsiveness */
        />
      </div>
      <div className={style.blogContainer}>
        <p className={style.blogContent}>{blog.content}</p>
      </div>

      <div className={style.blogComments}>
        <h3>Comments</h3>
        {blog.comments.length > 0 ? (
          blog.comments.map((comment: any, index: any) => (
            <div key={index} className={style.comment}>
              <p className={style.commentUser}>{comment.user}</p>
              <p className={style.commentContent}>{comment.content}</p>
            </div>
          ))
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>
    </div>
  );
}
