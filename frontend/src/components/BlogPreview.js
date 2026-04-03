import React from 'react';
import { Link } from 'react-router-dom';

const BlogPreview = () => {
  const posts = [
    { id: 1, title: "Shaping Tomorrow's Health", excerpt: "The impact of childhood habits on adult health...", date: "April 15, 2024", icon: "🍎", bgColor: "bg-red-100" },
    { id: 2, title: "Nutrition Myths Debunked", excerpt: "Common misconceptions about diet and health...", date: "April 10, 2024", icon: "🥑", bgColor: "bg-green-100" },
    { id: 3, title: "The Power of Mindful Eating", excerpt: "How being present during meals can transform your relationship with food...", date: "April 5, 2024", icon: "🫐", bgColor: "bg-blue-100" },
  ];

  return (
      <div className="space-y-6">
        {posts.map((post) => (
            <div key={post.id} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className={`${post.bgColor} w-10 h-10 rounded-full flex items-center justify-center text-xl flex-shrink-0`}>
                  {post.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">{post.excerpt}</p>
                  <time className="text-gray-400 text-xs">{post.date}</time>
                </div>
              </div>
            </div>
        ))}
      </div>
  );
};

export default BlogPreview;