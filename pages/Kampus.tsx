
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogPosts';
import AnimatedHero from '../components/AnimatedHero';
import { HERO_IMAGES } from '../data/heroImages';

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};

const Kampus: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <AnimatedHero
        title="Trendmax Kampüs"
        subtitle="E-ticaret operasyonunuzu geliştirmenize yardımcı olacak rehberler, uygulama önerileri ve eğitim içerikleri."
        breadcrumb={[{ label: 'Kampüs' }]}
        icon={BookOpen}
        badge="Bilgi Merkezi"
        image={HERO_IMAGES.seo}
        imagePosition="center"
        primaryAction={{ label: 'Yardım Merkezine Gidin', to: '/sss' }}
        secondaryActionLabel="İçerikleri Keşfedin"
      />

      {/* Blog Grid */}
      <section id="icerik" className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 hover:shadow-xl hover:border-orange-100 transition-all duration-300"
              >
                <Link to={`/kampus/${post.slug}`} className="block">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 lg:p-8">
                    <span className="inline-block text-xs font-bold text-orange-600 uppercase tracking-wider mb-3">
                      {post.category}
                    </span>
                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-500 text-sm mb-6 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-400">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-orange-600 font-semibold group-hover:gap-2 transition-all">
                        Oku <ArrowRight className="w-4 h-4" />
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
            Sorularınız mı var?
          </h3>
          <p className="text-gray-500 mb-6">
            SSS sayfamızdan sıkça sorulan sorulara ulaşabilir veya bizimle iletişime geçebilirsiniz.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/sss"
              className="inline-flex items-center gap-2 bg-orange-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-orange-700 transition-colors"
            >
              SSS&apos;e Git <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kampus;
