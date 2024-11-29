import { useParams, Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';
import CalculatorCTA from '../components/CalculatorCTA';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    if (!post) {
      navigate('/blog', { replace: true });
    }
  }, [post, navigate]);

  if (!post) {
    return null;
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .filter((p) => p.tags.some((tag) => post.tags.includes(tag)))
    .slice(0, 3);

  // Create a function to safely render HTML content with React components
  const renderContent = (content: string) => {
    return content.split('\n\n').map((paragraph, index) => (
      <p 
        key={index} 
        className="mb-6 text-gray-600"
        dangerouslySetInnerHTML={{ __html: paragraph.trim() }}
      />
    ));
  };

  return (
    <>
      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        keywords={post.metaKeywords}
        canonical={`/blog/${post.slug}`}
      />
      <main className="bg-white">
        <article>
          {/* Header */}
          <div className="bg-gray-50 py-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <div className="flex items-center justify-center gap-x-4 text-xs mb-4">
                  <time dateTime={post.date} className="text-gray-500">
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                  <span className="text-gray-500">{post.readTime}</span>
                </div>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  {post.title}
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  {post.excerpt}
                </p>
                <div className="mt-8">
                  <div className="flex items-center justify-center gap-x-4">
                    <div className="text-sm">
                      <p className="font-semibold text-gray-900">{post.author}</p>
                      <p className="text-gray-500">{post.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <div className="prose prose-lg max-w-none">
                {renderContent(post.content)}
              </div>

              {/* Tags */}
              <div className="mt-12 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Calculator CTA */}
        <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
          <CalculatorCTA />
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="bg-gray-50 py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-12">
                  Related Articles
                </h2>
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
                  {relatedPosts.map((relatedPost) => (
                    <div key={relatedPost.id} className="flex flex-col">
                      <div className="relative h-48 mb-6">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        <Link to={`/blog/${relatedPost.slug}`} className="hover:text-blue-600">
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 line-clamp-2 mb-4">
                        {relatedPost.excerpt}
                      </p>
                      <div className="mt-auto">
                        <Link
                          to={`/blog/${relatedPost.slug}`}
                          className="text-blue-600 hover:text-blue-500 font-semibold"
                        >
                          Read more →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}