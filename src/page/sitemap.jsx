import React, { useState, useEffect } from 'react';

const Sitemap = () => {
  const [sitemapContent, setSitemapContent] = useState(null);

  useEffect(() => {
    const fetchSitemap = async () => {
      try {
        const response = await fetch('https://haweb-api.onrender.com/sitemap.xml');
        const sitemapData = await response.text();
        setSitemapContent(sitemapData);
      } catch (error) {
        console.error('Error fetching sitemap:', error);
      }
    };

    fetchSitemap();
  }, []);

  return (
    <div>
      {sitemapContent ? (
        // Render the sitemap content directly as HTML
        <div dangerouslySetInnerHTML={{ __html: sitemapContent }} />
      ) : (
        <p>Loading sitemap content...</p>
      )}
    </div>
  );
};

export default Sitemap;