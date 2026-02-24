
import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, User, ArrowRight } from 'lucide-react';
import { getPostBySlug, getRelatedPosts } from '../data/blogPosts';

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

const BlogDetail: React.FC = () => {
  const { slug } = useParams();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/kampus" replace />;
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero with featured image */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-slate-900/40" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <nav className="flex space-x-2 text-orange-400 text-sm font-bold mb-6 uppercase tracking-widest">
            <Link to="/" className="hover:text-white transition-colors">
              Ana Sayfa
            </Link>
            <span>/</span>
            <Link to="/kampus" className="hover:text-white transition-colors">
              Kampüs
            </Link>
            <span>/</span>
            <span className="text-white/60 truncate max-w-[200px]">{post.title}</span>
          </nav>
          <span className="inline-block text-xs font-bold text-orange-500 uppercase tracking-wider mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-slate-300 text-sm">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime} okuma
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured image */}
          <div className="rounded-2xl overflow-hidden shadow-xl mb-12 -mt-8 relative z-10 border-4 border-white">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto max-h-[400px] object-cover"
            />
          </div>
          <div
            className="blog-content text-gray-600 leading-relaxed [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-gray-900 [&_h3]:mt-8 [&_h3]:mb-4 [&_p]:mb-4 [&_ul]:my-6 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:my-1"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link
              to="/kampus"
              className="inline-flex items-center gap-2 text-orange-600 font-bold hover:text-orange-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Tüm Yazılara Dön
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 lg:py-20 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
            İlgili Yazılar
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {getRelatedPosts(post.slug).map((related) => (
              <article
                key={related.id}
                className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg hover:border-orange-100 transition-all duration-300"
              >
                <Link to={`/kampus/${related.slug}`} className="block">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 lg:p-5">
                    <span className="inline-block text-xs font-bold text-orange-600 uppercase tracking-wider mb-2">
                      {related.category}
                    </span>
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors line-clamp-2 text-sm lg:text-base">
                      {related.title}
                    </h3>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{formatDate(related.date)}</span>
                      <span className="flex items-center gap-1 text-orange-600 font-semibold group-hover:gap-2 transition-all">
                        Oku <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Daha fazla içerik için kampüsümüzü keşfedin
          </h3>
          <Link
            to="/kampus"
            className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-orange-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Kampüs&apos;e Dön
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
