import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories } from '../data/products';

const banners = [
  { id: 1, title: '가을맞이 홈스타일링 특가', sub: '최대 35% 할인', color: '#35c5f0' },
  { id: 2, title: '새 집 필수템 모음전', sub: '수납·조명·패브릭', color: '#7c8cf8' },
  { id: 3, title: '오늘만 이 가격', sub: '매일 바뀌는 타임딜', color: '#f88c7c' },
];

const categoryIcons: Record<string, string> = {
  가구: '🛋️', 조명: '💡', 패브릭: '🛏️', 주방: '🍳', 수납: '🗄️', 생활용품: '🧺',
};

export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const banner = banners[current];
  const popular = products.slice(0, 8);

  return (
    <div>
      <section className="banner" style={{ background: banner.color }}>
        <h2>{banner.title}</h2>
        <p>{banner.sub}</p>
        <div className="banner-dots">
          {banners.map((b, i) => (
            <button
              key={b.id}
              className={i === current ? 'dot active' : 'dot'}
              onClick={() => setCurrent(i)}
              aria-label={`${i + 1}번 배너`}
            />
          ))}
        </div>
      </section>

      <section className="category-section">
        {categories.map((c) => (
          <Link key={c} to={`/products?category=${c}`} className="category-item">
            <span className="category-icon">{categoryIcons[c]}</span>
            <span>{c}</span>
          </Link>
        ))}
      </section>

      <section>
        <h3 className="section-title">오늘의 인기 상품</h3>
        <div className="product-grid">
          {popular.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}