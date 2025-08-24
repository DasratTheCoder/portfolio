// components/Blog.jsx
import React from "react";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const posts = [
  {
    title: "Getting Started with React",
    date: "Aug 2024",
    description:
      "A beginner-friendly guide to understanding React components, props, and hooks with practical examples.",
    link: "#",
  },
  {
    title: "Why Tailwind CSS is a Game-Changer",
    date: "Jul 2024",
    description:
      "Exploring how utility-first CSS speeds up development and improves design consistency.",
    link: "#",
  },
  {
    title: "Freelancing Tips for Developers",
    date: "Jun 2024",
    description:
      "Key lessons I’ve learned while working with international clients as a freelance developer.",
    link: "#",
  },
];

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-black text-white py-20 px-6 md:px-12 lg:px-20"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-green-500 text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Blog
      </motion.h2>

      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <motion.div
            key={index}
            className="bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-800 hover:border-green-500 transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="flex items-center gap-2 text-green-400 mb-2">
              <BookOpen className="w-5 h-5" />
              <span className="text-sm">{post.date}</span>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-3">
              {post.title}
            </h3>
            <p className="text-gray-300 mb-4">{post.description}</p>
            <a
              href={post.link}
              className="text-green-500 font-medium hover:underline"
            >
              Read More →
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
