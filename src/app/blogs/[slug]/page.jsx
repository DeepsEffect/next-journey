import React from "react";

const page = ({ params }) => {
  console.log(params.slug);
  const { title, description, slug } = blogs.find(
    (blog) => blog.slug === params.slug
  );
  return (
    <div className="p-10 bg-green-300 text-black">
      <h2>{slug}</h2>
      <p>{title}</p>
      <p>{description}</p>
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

export default page;
