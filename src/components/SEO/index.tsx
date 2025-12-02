import { Helmet } from 'react-helmet-async';

/**
 * SEO Component - Manages meta tags for search engines and social media
 *
 * How it works:
 * 1. **Title**: Shows in browser tab and search results (50-60 chars recommended)
 * 2. **Description**: Shows in search results snippet (150-160 chars recommended)
 * 3. **Keywords**: Helps search engines understand content (5-10 keywords recommended)
 * 4. **Open Graph (og:)**: Controls how links appear when shared on Facebook/LinkedIn
 * 5. **Twitter Card**: Controls how links appear when shared on Twitter
 *
 * @example
 * ```tsx
 * <SEO
 *   title="Best Mining Equipment 2024"
 *   description="Discover top mining equipment with detailed reviews and comparisons"
 *   keywords={['mining', 'equipment', 'bitcoin', 'crypto']}
 *   author="John Doe"
 *   image="https://example.com/image.jpg"
 *   type="article"
 * />
 * ```
 */

type KeywordObject = {
  title: string;
  slug: string;
  description: string;
};

type SEOProps = {
  /** Page title (appears in browser tab and search results) */
  title: string;
  /** Brief description for search results and social sharing (150-160 chars) */
  description?: string;
  /** Keywords for SEO - can be string array or keyword objects */
  keywords?: string[] | KeywordObject[];
  /** Content author name */
  author?: string;
  /** Image URL for social media previews (recommended: 1200x630px) */
  image?: string;
  /** Current page URL (auto-detected if not provided) */
  url?: string;
  /** Content type: 'website' for pages, 'article' for blog posts */
  type?: 'website' | 'article' | 'product';
  /** Publication date for articles (ISO format) */
  publishedDate?: string;
  /** Canonical URL to prevent duplicate content issues */
  canonical?: string;
};

export function SEO({
  title,
  description,
  keywords = [],
  author,
  image,
  url,
  type = 'website',
  publishedDate,
  canonical,
}: SEOProps) {
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
  const canonicalUrl = canonical || currentUrl;

  // Convert keywords to string array if they're objects
  const keywordStrings = keywords.map((keyword) =>
    typeof keyword === 'string' ? keyword : keyword.title
  );

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      {description && <meta name="description" content={description} />}
      {keywordStrings.length > 0 && <meta name="keywords" content={keywordStrings.join(', ')} />}
      {author && <meta name="author" content={author} />}

      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {image && <meta property="og:image" content={image} />}

      {/* Twitter Card Meta Tags */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={title} />
      {description && <meta property="twitter:description" content={description} />}
      {image && <meta property="twitter:image" content={image} />}

      {/* Additional SEO Meta Tags */}
      {publishedDate && <meta name="publish_date" content={publishedDate} />}
      {type === 'article' && publishedDate && (
        <meta property="article:published_time" content={publishedDate} />
      )}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
}
