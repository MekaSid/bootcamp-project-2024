// app/blog/[slug]/page.tsx

import Image from "next/image";
import style from "./blogpage.module.css";
import AddCommentButton from "@/components/blog/addComment";

type Blog = {
  title: string;
  image: string;
  imageAlt: string;
  content: string;
  comments: Comment[];
  slug: string;
};

type Comment = {
  user: string;
  content: string;
};

interface BlogScreenProps {
  params: Promise<{ slug: string }>;
}

async function getBlog(slug: string): Promise<Blog | null> {
  try {
    const res = await fetch(`https://bootcamp-project-2024-sid-mekas-projects.vercel.app/api/blogs/${slug}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch blog");
    }

    return res.json();
  } catch (err: unknown) {
    console.error(`Error: ${err instanceof Error ? err.message : "Unknown error"}`);
    return null;
  }
}

const BlogScreen = async ({ params }: BlogScreenProps) => {
  // Await the params Promise to get the actual params object
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  console.log(`Fetching blog for slug: ${slug}`);

  const blog = await getBlog(slug);

  if (!blog) {
    return (
      <div>
        <h1 className={style.pageTitle}>404 - Blog Not Found</h1>
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
          width={600}
          height={400}
        />
      </div>
      <div className={style.blogContainer}>
        <p className={style.blogContent}>{blog.content}</p>
      </div>

      <div className={style.blogComments}>
        <h3>Comments</h3>
        {blog.comments.length > 0 ? (
          blog.comments.map((comment, index) => (
            <div key={index} className={style.comment}>
              <p className={style.commentUser}>{comment.user}</p>
              <p className={style.commentContent}>{comment.content}</p>
            </div>
          ))
        ) : (
          <p>No comments yet. Be the first to comment!</p>
        )}
      </div>

      <AddCommentButton slug={slug} />
    </div>
  );
};

export default BlogScreen;
