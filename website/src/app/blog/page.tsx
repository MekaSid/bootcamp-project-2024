// app/blog/page.tsx
import React from 'react';
import styles from './blog.module.css';
import BlogCard from '../../components/blog/BlogCard';
import connectDB from '@/database/db';
import Blog from '@/database/blogSchema';

async function getBlogs(){
	await connectDB() // function from db.ts before

	try {
			// query for all blogs and sort by date
	    const blogs = await Blog.find().sort({ date: -1 }).orFail()
			// send a response as the blogs as the message
	    return blogs
	} catch (err) {
	    return []
	}
}

const BlogPage = async () => {
  const blogs = await getBlogs(); // Fetch here on the server

  return (
    <div className={styles.container}>
      <h1 className={styles.pageTitle}>Blog</h1>
      <div className={styles.cardContainer}>
        {blogs.map((post: any) => (
          <BlogCard
            key={post.slug}
            title={post.title}
            date={post.date}
            description={post.description}
            image={post.image}
            imageAlt={post.imageAlt}
            slug={post.slug}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
