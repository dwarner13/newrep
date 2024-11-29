import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogPosts';
import CalculatorCTA from '../components/CalculatorCTA';

export default function Blog() {
  return (
    <>
      <SEO
        title="Blog | Edmonton Appliance Repair | Expert Tips & Guides"
        description="Expert appliance repair tips, maintenance guides, and industry insights from Edmonton's leading appliance repair professionals."
        keywords="appliance repair blog, Edmonton appliance tips, appliance maintenance guide, appliance troubleshooting, appliance care Edmonton"
        canonical="/blog"
      />
      <main className="bg-white">
        {/* Header */}
        <div className="bg-gray-50 py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Appliance Repair Blog
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Expert insights, maintenance tips, and guides for keeping your appliances running efficiently.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col bg-white rounded-xl shadow-sm overflow-hidden"
              >
                <div className="relative h-64">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 p-8">
                  <div className="flex items-center gap-x-4 text-xs mb-4">
                    <time dateTime={post.date} className="text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </time>
                    <span className="text-gray-500">{post.readTime}</span>
                  </div>
                  <div className="group">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      <Link
                        to={`/blog/${post.slug}`}
                        className="hover:text-blue-600"
                      >
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 line-clamp-3 mb-6">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-x-4">
                      <div className="text-sm">
                        <p className="font-semibold text-gray-900">{post.author}</p>
                        <p className="text-gray-500">{post.category}</p>
                      </div>
                    </div>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-500 font-semibold"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
                <div className="px-8 pb-8">
                  <div className="flex flex-wrap gap-2">
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
              </article>
            ))}
          </div>

          {/* Calculator CTA */}
          <div className="mt-24">
            <CalculatorCTA />
          </div>
        </div>
      </main>
    </>
  );
}