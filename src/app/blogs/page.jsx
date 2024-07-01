import Link from "next/link";
import React from "react";

const BlogsPage = () => {
  return (
    <div>
      <h2>This is blogs page</h2>
      {blogs.map((blog) => (
        <div className="border border-green-400 p-4" key={blog.slug}>
          <h2>{blog.title}</h2>
          <p>{blog.description}</p>
          <Link href={`/blogs/${blog.slug}`}>
            <button className="p-3 bg-green-500 mt-2 rounded-lg">
              Blog Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};
const blogs = [
  {
    slug: "nextjs-intro",
    title: "Introduction to Next.js",
    description:
      "A beginner's guide to getting started with Next.js, a popular React framework for building server-side rendered applications.",
  },
  {
    slug: "css-tricks",
    title: "CSS Tricks for Modern Web Design",
    description:
      "Explore some of the best CSS techniques and tricks to enhance your web design skills and create stunning websites.",
  },
  {
    slug: "js-es6-features",
    title: "Essential ES6 Features for JavaScript Developers",
    description:
      "Learn about the most important ES6 features every JavaScript developer should know to write clean and efficient code.",
  },
  {
    slug: "react-hooks",
    title: "Understanding React Hooks",
    description:
      "An in-depth look at React Hooks, how they work, and how to use them effectively in your React applications.",
  },
  {
    slug: "web-performance",
    title: "Boosting Web Performance",
    description:
      "Tips and techniques to improve the performance of your web applications, ensuring a fast and smooth user experience.",
  },
];

export default BlogsPage;
