import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { products, getSalePrice } from "../data/products";
import { useCartStore } from "../stores/cartStore";

const tabs = ["상품정보", "리뷰", "문의"];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const addItem = useCartStore((s) => s.addItem);

  const [option, setOption] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [tab, setTab] = useState(tabs[0]);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="empty">
        <p>상품을 찾을 수 없습니다.</p>
        <Link to="/products">스토어로 돌아가기</Link>
      </div>
    );
  }

  const salePrice = getSalePrice(product);

  const handleAddToCart = () => {
    if (!option) {
      alert("옵션을 선택해주세요.");
      return false;
    }
    addItem(product, quantity);
    return true;
  };

  const handleAdd = () => {
    if (
      handleAddToCart() &&
      confirm("장바구니에 담았습니다. 장바구니로 이동할까요?")
    ) {
      navigate("/cart");
    }
  };

  const handleBuyNow = () => {
    if (handleAddToCart()) navigate("/cart");
  };

  return (
    <div>
      <div className="detail">
        <div className="detail-img">
          <img
            src={product.image}
            alt={product.name}
            onError={(e) => {
              e.currentTarget.src =
                "https://placehold.co/500x500?text=No+Image";
            }}
          />
        </div>

        <div className="detail-info">
          <p className="card-brand">{product.brand}</p>
          <h2 className="detail-name">{product.name}</h2>

          <div className="detail-price">
            {product.discountRate > 0 && (
              <>
                <span className="detail-origin">
                  {product.price.toLocaleString()}원
                </span>
                <span className="card-rate">{product.discountRate}%</span>
              </>
            )}
            <strong>{salePrice.toLocaleString()}원</strong>
          </div>

          <select
            className="detail-select"
            value={option}
            onChange={(e) => setOption(e.target.value)}
          >
            <option value="">옵션을 선택하세요</option>
            {product.options.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>

          <div className="qty">
            <span>수량</span>
            <div className="qty-box">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity((q) => q + 1)}>+</button>
            </div>
          </div>

          <div className="detail-total">
            <span>총 상품 금액</span>
            <strong>{(salePrice * quantity).toLocaleString()}원</strong>
          </div>

          <div className="detail-actions">
            <button className="btn-outline" onClick={handleAdd}>
              장바구니
            </button>
            <button className="btn-primary" onClick={handleBuyNow}>
              바로구매
            </button>
          </div>
        </div>
      </div>

      <div className="tabs">
        {tabs.map((t) => (
          <button
            key={t}
            className={t === tab ? "tab active" : "tab"}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {tab === "상품정보" && (
          <div>
            <p className="info-desc">{product.description}</p>

            <h4 className="info-title">상품 정보</h4>
            <table className="spec-table">
              <tbody>
                {product.specs.map((s) => (
                  <tr key={s.label}>
                    <th>{s.label}</th>
                    <td>{s.value}</td>
                  </tr>
                ))}
                <tr>
                  <th>브랜드</th>
                  <td>{product.brand}</td>
                </tr>
              </tbody>
            </table>

            <h4 className="info-title">배송 / 교환 / 환불 안내</h4>
            <ul className="info-notice">
              <li>
                5만 원 이상 구매 시 무료배송, 미만은 배송비 3,000원이
                부과됩니다.
              </li>
              <li>
                결제 완료 후 평균 2~3일 이내 출고됩니다. (주말·공휴일 제외)
              </li>
              <li>
                상품 수령 후 7일 이내 교환·환불이 가능합니다. (단순 변심 시 왕복
                배송비 고객 부담)
              </li>
              <li>
                사용 흔적이 있거나 포장이 훼손된 경우 교환·환불이 제한될 수
                있습니다.
              </li>
            </ul>
          </div>
        )}
        {tab === "리뷰" && <p>아직 등록된 리뷰가 없습니다.</p>}
        {tab === "문의" && <p>등록된 문의가 없습니다.</p>}
      </div>
    </div>
  );
}
