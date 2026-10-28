import type { Product } from '../types';

export const categories = ['가구', '조명', '패브릭', '주방', '수납', '생활용품'];

const img = (_keyword: string, id: number) => `/images/p${id}.jpg`;

export const products: Product[] = [
  {
    id: 1, name: '원목 4인 식탁', brand: '모던하우스', price: 289000, discountRate: 20, category: '가구',
    image: img('dining,table', 1),
    options: ['내추럴', '월넛'],
    description: '단단한 고무나무 원목으로 만든 4인 식탁입니다. 모서리를 둥글게 마감해 가족 모두가 안전하게 사용할 수 있어요.',
    specs: [
      { label: '소재', value: '고무나무 원목, 친환경 오일 마감' },
      { label: '크기', value: '가로 1200 × 세로 750 × 높이 740mm' },
      { label: '제조국', value: '대한민국' },
      { label: '조립', value: '직접 조립 (공구 포함)' },
    ],
  },
  {
    id: 2, name: '패브릭 3인 소파', brand: '리빙플러스', price: 459000, discountRate: 15, category: '가구',
    image: img('sofa', 2),
    options: ['베이지', '그레이', '네이비'],
    description: '푹신한 쿠션과 탄탄한 프레임으로 오래 앉아도 편안한 3인 소파입니다. 커버는 분리 세탁이 가능해요.',
    specs: [
      { label: '소재', value: '폴리에스터 패브릭, 우레탄 폼' },
      { label: '크기', value: '가로 1900 × 세로 850 × 높이 800mm' },
      { label: '제조국', value: '중국' },
      { label: '조립', value: '다리만 조립' },
    ],
  },
  {
    id: 3, name: '스탠드 무드등', brand: '루미', price: 39000, discountRate: 30, category: '조명',
    image: img('lamp', 3),
    options: ['화이트', '블랙'],
    description: '은은한 전구색 조명으로 방 분위기를 포근하게 만들어 주는 스탠드입니다. 3단계 밝기 조절을 지원해요.',
    specs: [
      { label: '소재', value: '철제, 패브릭 갓' },
      { label: '크기', value: '지름 280 × 높이 1250mm' },
      { label: '전원', value: 'AC 220V, E26 소켓' },
      { label: '제조국', value: '중국' },
    ],
  },
  {
    id: 4, name: 'LED 거실 조명', brand: '루미', price: 89000, discountRate: 10, category: '조명',
    image: img('chandelier', 4),
    options: ['주백색', '전구색'],
    description: '눈부심을 줄인 확산형 LED 거실등입니다. 설치가 간단하고 전기료 부담이 적어요.',
    specs: [
      { label: '소재', value: 'ABS, 아크릴 확산판' },
      { label: '크기', value: '지름 600mm' },
      { label: '소비전력', value: '50W' },
      { label: '제조국', value: '대한민국' },
    ],
  },
  {
    id: 5, name: '순면 침구 세트', brand: '데이슬립', price: 79000, discountRate: 25, category: '패브릭',
    image: img('bedding', 5),
    options: ['아이보리 / Q', '그레이 / Q', '아이보리 / K'],
    description: '부드러운 순면 100% 원단으로 만든 이불 커버 세트입니다. 세탁 후에도 촉감이 유지돼요.',
    specs: [
      { label: '소재', value: '면 100%' },
      { label: '구성', value: '이불 커버 1, 베개 커버 2, 침대 커버 1' },
      { label: '세탁', value: '30도 이하 단독 세탁' },
      { label: '제조국', value: '베트남' },
    ],
  },
  {
    id: 6, name: '벨벳 쿠션 커버', brand: '데이슬립', price: 15000, discountRate: 0, category: '패브릭',
    image: img('cushion', 6),
    options: ['머스타드', '그린', '핑크'],
    description: '고급스러운 벨벳 질감의 쿠션 커버입니다. 지퍼형이라 커버만 쉽게 교체할 수 있어요.',
    specs: [
      { label: '소재', value: '폴리에스터 벨벳' },
      { label: '크기', value: '45 × 45cm (솜 별도)' },
      { label: '세탁', value: '손세탁 권장' },
      { label: '제조국', value: '중국' },
    ],
  },
  {
    id: 7, name: '스테인리스 냄비 세트', brand: '쿡앤쿡', price: 129000, discountRate: 35, category: '주방',
    image: img('cookware', 7),
    options: ['5종 세트', '7종 세트'],
    description: '열전도율이 높은 3중 바닥 스테인리스 냄비 세트입니다. 인덕션과 가스레인지 모두 사용할 수 있어요.',
    specs: [
      { label: '소재', value: '스테인리스 304' },
      { label: '구성', value: '냄비 3종, 프라이팬 1, 뚜껑 포함' },
      { label: '사용 가능', value: '가스, 인덕션, 하이라이트' },
      { label: '제조국', value: '대한민국' },
    ],
  },
  {
    id: 8, name: '도자기 그릇 6종', brand: '쿡앤쿡', price: 56000, discountRate: 12, category: '주방',
    image: img('ceramic,plate', 8),
    options: ['화이트', '그레이'],
    description: '매일 쓰기 좋은 심플한 디자인의 도자기 식기 세트입니다. 전자레인지와 식기세척기 사용이 가능해요.',
    specs: [
      { label: '소재', value: '도자기' },
      { label: '구성', value: '공기 2, 대접 2, 접시 2' },
      { label: '사용 가능', value: '전자레인지, 식기세척기' },
      { label: '제조국', value: '대한민국' },
    ],
  },
  {
    id: 9, name: '3단 틈새 수납장', brand: '정리왕', price: 34000, discountRate: 18, category: '수납',
    image: img('shelf', 9),
    options: ['화이트', '블랙'],
    description: '좁은 틈새에 쏙 들어가는 슬림형 수납장입니다. 바퀴가 달려 있어 이동이 편해요.',
    specs: [
      { label: '소재', value: '플라스틱 PP' },
      { label: '크기', value: '가로 180 × 세로 400 × 높이 800mm' },
      { label: '하중', value: '단당 최대 5kg' },
      { label: '제조국', value: '대한민국' },
    ],
  },
  {
    id: 10, name: '리빙박스 대형 3개입', brand: '정리왕', price: 27000, discountRate: 0, category: '수납',
    image: img('storage,box', 10),
    options: ['투명', '그레이'],
    description: '계절 옷과 이불을 보관하기 좋은 대형 리빙박스입니다. 겹쳐 쌓을 수 있는 구조예요.',
    specs: [
      { label: '소재', value: '플라스틱 PP' },
      { label: '크기', value: '가로 600 × 세로 400 × 높이 300mm' },
      { label: '구성', value: '3개입' },
      { label: '제조국', value: '대한민국' },
    ],
  },
  {
    id: 11, name: '대나무 욕실 매트', brand: '데일리', price: 19000, discountRate: 5, category: '생활용품',
    image: img('bathroom,mat', 11),
    options: ['소 (40×60)', '대 (50×80)'],
    description: '물기를 잘 말려주는 천연 대나무 욕실 매트입니다. 미끄럼 방지 패드가 부착되어 있어요.',
    specs: [
      { label: '소재', value: '대나무, 실리콘 패드' },
      { label: '관리', value: '사용 후 세워서 건조' },
      { label: '제조국', value: '중국' },
    ],
  },
  {
    id: 12, name: '스텐 휴지통 12L', brand: '데일리', price: 24000, discountRate: 22, category: '생활용품',
    image: img('trash,can', 12),
    options: ['실버', '블랙'],
    description: '페달을 밟으면 열리는 스테인리스 휴지통입니다. 소음이 적은 소프트 클로징 방식이에요.',
    specs: [
      { label: '소재', value: '스테인리스, ABS' },
      { label: '용량', value: '12L' },
      { label: '크기', value: '지름 230 × 높이 300mm' },
      { label: '제조국', value: '중국' },
    ],
  },
];

export const getSalePrice = (p: Product) =>
  Math.round(p.price * (1 - p.discountRate / 100));