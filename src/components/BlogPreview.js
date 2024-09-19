import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';

const BlogPreview = () => {
  const { t } = useTranslation();

  const posts = [
    { title: t('blog.post1.title'), excerpt: t('blog.post1.excerpt') },
    { title: t('blog.post2.title'), excerpt: t('blog.post2.excerpt') },
    { title: t('blog.post3.title'), excerpt: t('blog.post3.excerpt') },
  ];

  return (
    <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">{t('blog.title')}</h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">{t('blog.subtitle')}</p>
        </div>
        <div className="mt-12 grid gap-16 pt-12 lg:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post, index) => (
            <div key={index}>
              <div>
                <a href="#" className="inline-block">
                  <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-primary text-white">
                    {t('blog.category')}
                  </span>
                </a>
              </div>
              <a href="#" className="block mt-4">
                <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
              </a>
              <div className="mt-6 flex items-center">
                <div className="flex-shrink-0">
                  <span className="sr-only">{t('blog.authorName')}</span>
                  <img className="h-10 w-10 rounded-full" src="/api/placeholder/40/40" alt="" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {t('blog.authorName')}
                  </p>
                  <div className="flex space-x-1 text-sm text-gray-500">
                    <time dateTime="2020-03-16">{t('blog.publishDate')}</time>
                    <span aria-hidden="true">&middot;</span>
                    <span>{t('blog.readTime')}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPreview;