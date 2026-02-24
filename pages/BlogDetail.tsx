
import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import { getPostBySlug } from '../data/blogPosts';

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
      {/* Hero */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-slate-900/50" />
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
