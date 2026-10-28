import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../stores/cartStore";
import { getSalePrice } from "../data/products";

const FREE_SHIPPING_MIN = 50000;
const SHIPPING_FEE = 3000;

export default function Cart() {
  const { items, removeItem, changeQuantity } = useCartStore();
  const [selected, setSelected] = useState<number[]>([]);

  const allSelected = items.length > 0 && selected.length === items.length;

  const toggleAll = () => {
    setSelected(allSelected ? [] : items.map((i) => i.product.id));
  };

  const toggleOne = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
    );
  };

  const deleteSelected = () => {
    if (selected.length === 0) {
      alert("삭제할 상품을 선택해주세요.");
      return;
    }
    selected.forEach((id) => removeItem(id));
    setSelected([]);
  };

  const handleRemove = (id: number) => {
    removeItem(id);
    setSelected((prev) => prev.filter((x) => x !== id));
  };

  const selectedItems = items.filter((i) => selected.includes(i.product.id));
  const productTotal = selectedItems.reduce(
    (sum, i) => sum + getSalePrice(i.product) * i.quantity,
    0,
  );
  const shipping =
    productTotal === 0 || productTotal >= FREE_SHIPPING_MIN ? 0 : SHIPPING_FEE;
  const finalTotal = productTotal + shipping;

  const handleOrder = () => {
    if (selectedItems.length === 0) {
      alert("주문할 상품을 선택해주세요.");
      return;
    }
    alert("주문서 페이지는 아직 준비 중입니다.");
  };

  if (items.length === 0) {
    return (
      <div className="empty">
        <h2 className="page-title">장바구니</h2>
        <p>장바구니에 담긴 상품이 없습니다.</p>
        <Link
          to="/products"
          className="more-btn"
          style={{ display: "inline-block", marginTop: 16 }}
        >
          쇼핑하러 가기
        </Link>
      </div>
    );
  }

  return (
    <div>
      <h2 className="page-title">장바구니</h2>

      <div className="cart-layout">
        <div className="cart-list">
          <div className="cart-toolbar">
            <label>
              <input
                type="checkbox"
                checked={allSelected}
                onChange={toggleAll}
              />
              전체선택 ({selected.length}/{items.length})
            </label>
            <button className="text-btn" onClick={deleteSelected}>
              선택삭제
            </button>
          </div>

          {items.map(({ product, quantity }) => {
            const unit = getSalePrice(product);
            return (
              <div key={product.id} className="cart-item">
                <input
                  type="checkbox"
                  checked={selected.includes(product.id)}
                  onChange={() => toggleOne(product.id)}
                />
                <Link to={`/products/${product.id}`} className="cart-img">
                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://placehold.co/500x500?text=No+Image";
                    }}
                  />
                </Link>
                <div className="cart-info">
                  <p className="card-brand">{product.brand}</p>
                  <p className="card-name">{product.name}</p>
                  <p>{unit.toLocaleString()}원</p>
                </div>
                <div className="qty-box">
                  <button
                    onClick={() => changeQuantity(product.id, quantity - 1)}
                  >
                    -
                  </button>
                  <span>{quantity}</span>
                  <button
                    onClick={() => changeQuantity(product.id, quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <strong className="cart-line-total">
                  {(unit * quantity).toLocaleString()}원
                </strong>
                <button
                  className="text-btn"
                  onClick={() => handleRemove(product.id)}
                >
                  ✕
                </button>
              </div>
            );
          })}
        </div>

        <aside className="cart-summary">
          <h3>결제 금액</h3>
          <div className="summary-row">
            <span>상품 금액</span>
            <span>{productTotal.toLocaleString()}원</span>
          </div>
          <div className="summary-row">
            <span>배송비</span>
            <span>
              {shipping === 0 ? "무료" : `${shipping.toLocaleString()}원`}
            </span>
          </div>
          <p className="summary-note">
            {FREE_SHIPPING_MIN.toLocaleString()}원 이상 구매 시 배송비 무료
          </p>
          <div className="summary-row summary-total">
            <span>총 결제 금액</span>
            <strong>{finalTotal.toLocaleString()}원</strong>
          </div>
          <button className="btn-primary cart-order" onClick={handleOrder}>
            {selectedItems.length}개 상품 주문하기
          </button>
        </aside>
      </div>
    </div>
  );
}
