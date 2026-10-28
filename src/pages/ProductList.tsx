import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products, categories, getSalePrice } from '../data/products';

type SortKey = 'recommend' | 'priceAsc' | 'priceDesc' | 'discount';

const PAGE_SIZE = 8;

export default function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') ?? '전체';
  const [sort, setSort] = useState<SortKey>('recommend');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // 카테고리가 바뀌면 보이는 개수를 처음으로 되돌림
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [category]);

  const selectCategory = (c: string) => {
    if (c === '전체') {
      setSearchParams({});
    } else {
      setSearchParams({ category: c });
    }
  };

  const filtered = products.filter(
    (p) => category === '전체' || p.category === category
  );

  const sorted = [...filtered].sort((a, b) => {
    switch (sort) {
      case 'priceAsc':
        return getSalePrice(a) - getSalePrice(b);
      case 'priceDesc':
        return getSalePrice(b) - getSalePrice(a);
      case 'discount':
        return b.discountRate - a.discountRate;
      default:
        return a.id - b.id;
    }
  });

  const visible = sorted.slice(0, visibleCount);

  return (
    <div>
      <h2 className="page-title">스토어</h2>

      <div className="filter-bar">
        {['전체', ...categories].map((c) => (
          <button
            key={c}
            className={c === category ? 'chip active' : 'chip'}
            onClick={() => selectCategory(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="list-header">
        <span>상품 {sorted.length}개</span>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortKey)}
        >
          <option value="recommend">추천순</option>
          <option value="priceAsc">낮은 가격순</option>
          <option value="priceDesc">높은 가격순</option>
          <option value="discount">할인율순</option>
        </select>
      </div>

      {visible.length === 0 ? (
        <p className="empty">해당하는 상품이 없습니다.</p>
      ) : (
        <div className="product-grid">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}

      {visibleCount < sorted.length && (
        <div className="more-wrap">
          <button
            className="more-btn"
            onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
          >
            더보기
          </button>
        </div>
      )}
    </div>
  );
}
