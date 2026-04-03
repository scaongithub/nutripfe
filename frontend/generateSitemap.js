const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');
const fs = require('fs');

// Define your website's URL
const baseUrl = 'https://www.todoenbalance.com';

// List all of your site's pages
const pages = [
    { url: '/', changefreq: 'daily', priority: 1 },
    { url: '/services', changefreq: 'weekly', priority: 0.8 },
    { url: '/about', changefreq: 'monthly', priority: 0.7 },
    { url: '/blog', changefreq: 'weekly', priority: 0.8 },
    { url: '/contact', changefreq: 'monthly', priority: 0.7 },
    { url: '/links', changefreq: 'monthly', priority: 0.6 },
    // Add any additional pages here
];

// Create a stream to write to
const stream = new SitemapStream({ hostname: baseUrl });

// Return a promise that resolves with your XML string
const sitemap = streamToPromise(Readable.from(pages).pipe(stream)).then((data) =>
    data.toString()
);

sitemap.then((xmlString) => {
    fs.writeFileSync('./public/sitemap.xml', xmlString);
    console.log('Sitemap generated successfully!');
});