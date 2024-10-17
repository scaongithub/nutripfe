import React from 'react';
import BlogPreview from '../components/BlogPreview';
import HealthyHabitsBlogPost from '../components/HealthyHabitsBlogPost';

const BlogPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Blog</h1>

                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    {/* Sidebar with blog previews */}
                    <div className="hidden lg:block lg:col-span-4">
                        <div className="sticky top-6">
                            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Latest Posts</h2>
                            <BlogPreview />
                        </div>
                    </div>

                    {/* Main content area */}
                    <main className="lg:col-span-8">
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <HealthyHabitsBlogPost />
                        </div>
                    </main>
                </div>

                {/* Mobile view: Blog previews below the post */}
                <div className="mt-12 lg:hidden">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">More Posts</h2>
                    <BlogPreview />
                </div>
            </div>
        </div>
    );
};

export default BlogPage;