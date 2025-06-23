// src/components/BlogPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: '1',
    title: 'Top 10 Ways to Save on Groceries in 2025',
    imageUrl: 'https://picsum.photos/id/1015/400/250',
    excerpt: 'Discover clever tips and tricks to cut down your grocery bills without compromising on quality or healthy eating. From smart shopping lists to using coupon apps, we cover it all.',
    date: 'June 20, 2025',
    author: 'Admin',
    category: 'Shopping Tips',
  },
  {
    id: '2',
    title: 'Seasonal Sales You Cannot Miss This Summer',
    imageUrl: 'https://picsum.photos/id/1016/400/250',
    excerpt: 'Summer brings amazing deals! Learn about the best times to shop for electronics, clothing, and home goods to maximize your savings.',
    date: 'June 15, 2025',
    author: 'Admin',
    category: 'Sales & Deals',
  },
  {
    id: '3',
    title: 'Decoding Coupon Terms & Conditions: A Simple Guide',
    imageUrl: 'https://picsum.photos/id/1018/400/250',
    excerpt: 'Confused by coupon fine print? Our guide breaks down common terms and conditions, helping you use your discounts effectively and avoid surprises.',
    date: 'June 10, 2025',
    author: 'Admin',
    category: 'Coupon Guide',
  },
  {
    id: '4',
    title: 'Smart Shopping for Electronics: Get the Best Deals',
    imageUrl: 'https://picsum.photos/id/1019/400/250',
    excerpt: 'Looking for a new gadget? We share expert advice on when and where to buy electronics to get the most bang for your buck, including Black Friday and Prime Day strategies.',
    date: 'June 5, 2025',
    author: 'Admin',
    category: 'Tech Deals',
  },
  {
    id: '5',
    title: 'Home Renovation on a Budget: DIY & Discount Tricks',
    imageUrl: 'https://picsum.photos/id/1020/400/250',
    excerpt: 'Dreaming of a home makeover but on a tight budget? Explore DIY tips, discount store finds, and coupon strategies to transform your living space affordably.',
    date: 'May 28, 2025',
    author: 'Admin',
    category: 'Home & Garden',
  },
];

const BlogPage = () => {
  return (
    <div className="pb-12 font-sans" style={{ backgroundColor: 'var(--page-bg)' }}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-6">
          <Link
            to="/"
            className="transition-colors duration-300"
            style={{ color: 'var(--text-muted)' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-accent-hover)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
          >
            Home
          </Link>
          <span className="mx-2" style={{ color: 'var(--breadcrumb-separator-color)' }}>&gt;</span>
          <span className="font-semibold" style={{ color: 'var(--main-heading-color)' }}>All Blogs</span>
        </nav>

        {/* Page Header */}
        <div
          className="p-6 sm:p-8 rounded-lg shadow-lg border mb-10 text-center"
          style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
        >
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 leading-tight" style={{ color: 'var(--main-heading-color)' }}>
            Our Latest Blog Posts
          </h1>
          <p className="text-base sm:text-lg" style={{ color: 'var(--text-muted)' }}>
            Stay updated with the best saving tips, deal guides, and shopping hacks from our experts.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border"
              style={{ backgroundColor: 'var(--card-bg)', borderColor: 'var(--card-border)' }}
            >
              <Link to={`/blog/${post.id}`}>
                <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
              </Link>
              <div className="p-5">
                <div className="text-xs font-semibold uppercase mb-2" style={{ color: 'var(--primary-orange)' }}>
                  <Link
                    to={`/blog/category/${post.category.toLowerCase().replace(/\s/g, '-')}`}
                    className="hover:underline"
                  >
                    {post.category}
                  </Link>
                </div>
                <h3 className="text-xl font-bold mb-3 leading-snug" style={{ color: 'var(--heading-color)' }}>
                  <Link
                    to={`/blog/${post.id}`}
                    className="transition-colors duration-300"
                    style={{ color: 'var(--heading-color)' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--text-accent-hover)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'var(--heading-color)'}
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm mb-4 line-clamp-3" style={{ color: 'var(--text-muted)' }}>{post.excerpt}</p>
                <div className="flex justify-between items-center text-xs" style={{ color: 'var(--text-muted)' }}>
                  <span>By {post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination (Dummy) */}
        <div className="flex justify-center mt-12">
          <nav className="flex space-x-2" aria-label="Pagination">
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200"
              style={{
                color: 'var(--text-muted)',
                backgroundColor: 'var(--neutral-white)',
                border: '1px solid var(--card-border)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--card-border)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--neutral-white)'}
            >
              Previous
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200"
              style={{
                color: 'var(--neutral-white)',
                backgroundColor: 'var(--primary-orange)',
                border: '1px solid var(--primary-orange)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--button-hover-orange)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--primary-orange)'}
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200"
              style={{
                color: 'var(--text-muted)',
                backgroundColor: 'var(--neutral-white)',
                border: '1px solid var(--card-border)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--card-border)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--neutral-white)'}
            >
              2
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200"
              style={{
                color: 'var(--text-muted)',
                backgroundColor: 'var(--neutral-white)',
                border: '1px solid var(--card-border)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--card-border)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--neutral-white)'}
            >
              3
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200"
              style={{
                color: 'var(--text-muted)',
                backgroundColor: 'var(--neutral-white)',
                border: '1px solid var(--card-border)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'var(--card-border)'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'var(--neutral-white)'}
            >
              Next
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;