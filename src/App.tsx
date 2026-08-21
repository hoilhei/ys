import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  Heart, 
  Users, 
  Sparkles, 
  MapPin, 
  Clock, 
  Menu, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Leaf, 
  Wind, 
  ArrowRight, 
  UserPlus, 
  MonitorPlay, 
  Church, 
  Youtube, 
  Instagram, 
  Facebook, 
  MessageSquare, 
  Phone, 
  Copy, 
  Check, 
  GraduationCap, 
  Music,
  Camera,
  Upload,
  Send,
  History,
  Calendar,
  Train,
  Bus,
  BookOpen,
  Cross,
  Search,
  Download,
  Tag,
  Plus,
  FileText,
  ChevronDown,
  Image as ImageIcon,
  Smile,
  User
} from 'lucide-react';
import React, { useState, useEffect, useRef } from 'react';

const IconLogo = ({ size = 30 }: { size?: number }) => {
  const dots = [
    [0, 1, 0, 0],
    [1, 1, 1, 1],
    [0, 1, 0, 0],
    [0, 1, 0, 0],
  ];

  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:scale-110">
      {dots.map((row, y) => 
        row.map((active, x) => (
          <circle 
            key={`${x}-${y}`} 
            cx={15 + x * 23} 
            cy={15 + y * 23} 
            r="10" 
            fill={active ? "#8E9775" : "#E2C799"} 
          />
        ))
      )}
    </svg>
  );
};

// Data for 이웃사랑 subpage components
const neighborItems = [
  {
    title: "사랑나눔박스",
    sub: "하나님 사랑을 성도와 이웃에게 전합니다.",
    target: "지역 사회 내 소외된 이웃 및 독거어르신 가정",
    time: "매주 목요일 오전 10:00",
    location: "교회 본당 로비 사역팀 미팅룸",
    motto: "하나님 사랑을 성도와 이웃에게 전합니다. 영신교회가 동행하는 사랑나눔은 한 사람을 찾아갑니다.",
    desc: "하나님 사랑을 성도와 이웃에게 전합니다. 영신교회가 동행하는 사랑나눔은 한 사람을 찾아갑니다.",
    details: [
      "독거 어르신과 1인 청년세대 섬김: 신정4동 주민센터와 연계하여 연 2회 사랑나눔박스를 만들어 독거 어르신과 1인 청년세대를 섬깁니다.(이웃사랑)",
      "교회내 성도 섬김: 교회내 성도의 어려움을 찾고 도우며 섬깁니다.(성도사랑)",
      "구제사역: 매월 2째주 사랑 나눔 헌금을 통해 구제사역을 멈추지 않고 예수님의 몸된 교회를 사랑합니다.(교회사랑)"
    ],
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2574&auto=format&fit=crop",
    alt: "Volunteering donation box and sharing with the local community"
  },
  {
    title: "뮤직아카데미",
    sub: "Music Academy",
    target: "다양한 아카데미를 희망하는 전 연령대 성도 및 주민",
    time: "매주 토요일 오후 01:00 ~ 04:00",
    location: "본당 및 기쁨홀",
    motto: "새 노래로 그를 노래하며 즐거운 소리로 아름답게 연주할지어다 (시편 33:3)",
    desc: "영신교회는 지역 주민과 성도를 위해 다양한 아카데미와 클래스를 열어 교회와 지역사회의 연결을 지향합니다.",
    details: [
      "뮤직 아카데미: - (실용)드럼, 어쿠스틱기타, 베이스기타, 일렉기타\n- (클래식)바이올린, 플룻, 클라리넷",
      "평생교육 아카데미: - 발성 및 스피치\n- 영어회화\n- 중국어회화(예정)\n- 쿠키클래스\n- 원데이 클래스(꽃다발, 친환경 생활용품 등)"
    ],
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2680&auto=format&fit=crop",
    alt: "Violin, instruments and sheets of music representing the academy"
  },
  {
    title: "행복한대학",
    sub: "Happy College for Seniors",
    target: "65세 이상 누구나",
    time: "목요일 오전 10시 30분 (학기제 운영)",
    location: "지하 1층 기쁨홀",
    motto: "늙어도 여전히 결실하며 진액이 풍족하고 빛이 청청하니 (시편 92:14)",
    desc: "65세 이상의 어르신들을 위한 행복한 여정을 위한 교육",
    details: [
      "다채로운 아카데미 학과: 스마트폰 및 키오스크 주문 정복, 한글 서예, 생활 미술/도예, 관절 타이치 체조, 아시안 가곡 및 시 낭송 반.",
      "무상 건강 스크리닝 및 맛있는 점심 식사: 성가 임상 간호 사역자들과 협력하여 혈압/체성분 검사 등 주간 건강 체크 후 정성이 듬뿍 담긴 제철 영양 점심 뷔페 대접.",
      "힐링 소풍 및 기념 촬영: 봄과 가을에는 꽃빛 고운 수목원이나 교외 숲길로 수학여행 같은 소풍을 다녀오며, 매 종강 시 독사진 영정 및 액자 촬영 선물 제공."
    ],
    image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=2680&auto=format&fit=crop",
    alt: "Happy senior Asian community laughing and holding tea mugs under warm light"
  },
  {
    title: "결혼예비학교",
    sub: "Marriage Preparation School",
    target: "결혼을 앞둔 예비 신혼부부 및 미혼 청년 커플",
    time: "매학기 (상반기 4-5월, 하반기 10-11월) 토요일 오후 05:00",
    location: "교육관 3층 세미나홀",
    motto: "하나님이 짝지어 주신 것을 사람이 나누지 못할지니라 (마태복음 19:6)",
    desc: "하나님 뜻 안에 있는 행복한 결혼과 가정을 위한 성경적 기반을 토대로 한 교육",
    details: [
      "가정사역 권위자 주관 세미나: MBTI 성격 유형 분석을 바탕으로 남녀의 성향과 심리적 차이를 통찰하고, 대화의 기술 및 건강한 다툼 해결 원칙 습득.",
      "크리스천 가정 재량 재정 관리 특강: 세속적인 지출 가치를 극복하고 십일조와 이웃 구제, 저축과 지극히 상식적인 예산 집행을 설계하는 주님의 재정 청지기 훈련.",
      "커플 전야 서약 세리머니: 서로를 위해 정성껏 써 내려간 고백 편지를 낭독하고 기쁨으로 무릎 꿇으며 프로포즈 반지를 정식 교환하는 감동과 눈물의 패밀리 축제."
    ],
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2670&auto=format&fit=crop",
    alt: "Table setup with warm candlelight in building trust and warmth in relationships"
  }
];

function NeighborAppForm({ ministryName, hideTypeSelection }: { ministryName: string; hideTypeSelection?: boolean }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [type, setType] = useState('참가 신청');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (ministryName !== '뮤직아카데미' && (!name.trim() || !phone.trim())) {
      return;
    }
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 rounded-2xl bg-brand-sage/5 border border-brand-sage/20 text-center space-y-4"
      >
        <div className="w-12 h-12 bg-brand-sage text-white rounded-full flex items-center justify-center mx-auto shadow-md">
          <Check className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h4 className="font-serif font-bold text-lg text-brand-brown">
            {ministryName === '뮤직아카데미' ? '문의가 정상 접수되었습니다!' : '신청이 정상 접수되었습니다!'}
          </h4>
          <p className="text-xs text-brand-brown/65 leading-relaxed max-w-sm mx-auto">
            {ministryName === '뮤직아카데미' 
              ? `남겨주신 소중한 문의 내용은 ${ministryName} 담당 사역팀에 안전하게 전달되었습니다. 순차적으로 개별 연락드리겠습니다.`
              : `남겨주신 소중한 마음과 정보는 ${ministryName} 담당 사역팀에 안전하게 전달되었습니다. 순차적으로 개별 연락드리겠습니다.`
            }
          </p>
        </div>
        <button 
          onClick={() => {
            setIsSubmitted(false);
            setName('');
            setPhone('');
            setMessage('');
          }}
          className="px-4 py-1.5 border border-brand-sage text-brand-sage hover:bg-brand-sage hover:text-white transition-all text-xs font-semibold rounded-full bg-white cursor-pointer"
        >
          추가 문의하기
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {ministryName !== '뮤직아카데미' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-brand-brown mb-1.5">신청자 성함 *</label>
            <input 
              type="text" 
              placeholder="예시: 홍길동"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-brand-gold/25 focus:ring-2 focus:ring-brand-sage/30 focus:border-brand-sage bg-brand-cream/10 text-sm text-brand-brown"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-brand-brown mb-1.5">연락처 *</label>
            <input 
              type="tel" 
              placeholder="예시: 010-1234-5678"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-brand-gold/25 focus:ring-2 focus:ring-brand-sage/30 focus:border-brand-sage bg-brand-cream/10 text-sm text-brand-brown"
              required
            />
          </div>
        </div>
      )}

      {!hideTypeSelection && (
        <div>
          <label className="block text-xs font-semibold text-brand-brown mb-1.5">참여 구분 (택일)</label>
          <div className="grid grid-cols-3 gap-2">
            {['참가 신청', '봉사 동참', '물품/재정 후원'].map((opt) => {
              const isSelected = type === opt;
              return (
                <button
                  type="button"
                  key={opt}
                  onClick={() => setType(opt)}
                  className={`py-2 px-3 border rounded-xl text-xs font-medium text-center transition-all cursor-pointer ${
                    isSelected 
                      ? "bg-brand-sage border-brand-sage text-white font-bold shadow-sm" 
                      : "bg-white border-brand-gold/15 text-brand-brown/70 hover:bg-brand-cream/20"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      )}

      <div>
        <label className="block text-xs font-semibold text-brand-brown mb-1.5">문의 및 하고 싶으신 말씀</label>
        <textarea 
          rows={3}
          placeholder="함께 참여하시거나 사역에 동참하며 원하시는 문의 내용을 자유롭게 작성해 주세요."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-4 py-2.5 rounded-xl border border-brand-gold/25 focus:ring-2 focus:ring-brand-sage/30 focus:border-brand-sage bg-brand-cream/10 text-sm text-brand-brown placeholder-brand-brown/40"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-brand-brown text-brand-cream hover:bg-brand-sage font-medium text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-1.5 cursor-pointer mt-2"
      >
        <span>{ministryName === '뮤직아카데미' ? '뮤직 아카데미 문의 전송' : `${ministryName} 신청서 전송`}</span>
        <Send className="w-4 h-4" />
      </button>
    </form>
  );
}

const sundayFridaySermons = [
  {
    title: "주일 설교: 복음, 그 가슴 뛰는 부르심",
    sermonTitle: "복음, 그 가슴 뛰는 부르심",
    type: "주일 대예배",
    date: "2026. 05. 17",
    passage: "로마서 1:16-17",
    embedUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
    imageUrl: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=800"
  },
  {
    title: "금요 기도회: 끝까지 견디는 믿음의 소망",
    sermonTitle: "끝까지 견디는 믿음의 소망",
    type: "금요 기도회",
    date: "2026. 05. 15",
    passage: "히브리서 11:1-3",
    embedUrl: "https://www.youtube.com/embed/coBId_Pehig",
    imageUrl: "https://images.unsplash.com/photo-1510563800743-aed236490d08?q=80&w=800"
  },
  {
    title: "주일 설교: 네 길을 여호와께 맡기라",
    sermonTitle: "네 길을 여호와께 맡기라",
    type: "주일 대예배",
    date: "2026. 05. 10",
    passage: "시편 37:5-6",
    embedUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
    imageUrl: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?q=80&w=800"
  },
  {
    title: "금요 기도회: 성령의 불로 새롭게 하소서",
    sermonTitle: "성령의 불로 새롭게 하소서",
    type: "금요 기도회",
    date: "2026. 05. 08",
    passage: "사도행전 2:1-4",
    embedUrl: "https://www.youtube.com/embed/coBId_Pehig",
    imageUrl: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?q=80&w=800"
  },
  {
    title: "주일 설교: 사랑은 오래 참고 온유하며",
    sermonTitle: "사랑은 오래 참고 온유하며",
    type: "주일 대예배",
    date: "2026. 05. 03",
    passage: "고린도전서 13:4-7",
    embedUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
    imageUrl: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=800"
  },
  {
    title: "주일 설교: 여호와는 나의 목자시니",
    sermonTitle: "여호와는 나의 목자시니",
    type: "주일 대예배",
    date: "2026. 04. 26",
    passage: "시편 23:1-3",
    embedUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
    imageUrl: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?q=80&w=800"
  },
  {
    title: "금요 기도회: 기도의 골방으로 들어가라",
    sermonTitle: "기도의 골방으로 들어가라",
    type: "금요 기도회",
    date: "2026. 04. 24",
    passage: "마태복음 6:6",
    embedUrl: "https://www.youtube.com/embed/coBId_Pehig",
    imageUrl: "https://images.unsplash.com/photo-1445445290350-18a3b86e0b5a?q=80&w=800"
  },
  {
    title: "주일 설교: 기뻐하고 기도하며 감사하라",
    sermonTitle: "기뻐하고 기도하며 감사하라",
    type: "주일 대예배",
    date: "2026. 04. 19",
    passage: "데살로니가전서 5:16-18",
    embedUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=800"
  },
  {
    title: "주일 설교: 너희는 세상의 소금과 빛이라",
    sermonTitle: "너희는 세상의 소금과 빛이라",
    type: "주일 대예배",
    date: "2026. 04. 12",
    passage: "마태복음 5:13-16",
    embedUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800"
  }
];

const wednesdaySpecialSermons = [
  {
    title: "수요 예배: 주의 법도를 따르는 기쁨",
    sermonTitle: "주의 법도를 따르는 기쁨",
    type: "수요예배",
    date: "2026. 05. 20",
    passage: "시편 119:9-16",
    embedUrl: "https://www.youtube.com/embed/coBId_Pehig",
    imageUrl: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800"
  },
  {
    title: "특별 세미나: 새 일을 행하시는 여호와",
    sermonTitle: "새 일을 행하시는 여호와",
    type: "특별 집회",
    date: "2026. 05. 13",
    passage: "이사야 43:18-21",
    embedUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
    imageUrl: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?q=80&w=800"
  },
  {
    title: "수요 예배: 참된 지혜와 여호와 경외",
    sermonTitle: "참된 지혜와 여호와 경외",
    type: "수요예배",
    date: "2026. 05. 06",
    passage: "잠언 1:7",
    embedUrl: "https://www.youtube.com/embed/coBId_Pehig",
    imageUrl: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=800"
  },
  {
    title: "특별 집회: 치유와 회복의 특별 예배",
    sermonTitle: "치유와 회복의 특별 예배",
    type: "특별 집회",
    date: "2026. 04. 29",
    passage: "야고보서 5:14-16",
    embedUrl: "https://www.youtube.com/embed/coBId_Pehig",
    imageUrl: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800"
  },
  {
    title: "수요 예배: 마음을 지키는 성도",
    sermonTitle: "마음을 지키는 성도",
    type: "수요예배",
    date: "2026. 04. 22",
    passage: "잠언 4:23",
    embedUrl: "https://www.youtube.com/embed/coBId_Pehig",
    imageUrl: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800"
  },
  {
    title: "특별 세미나: 새롭게 태어나는 선교 세미나",
    sermonTitle: "새롭게 태어나는 선교 세미나",
    type: "특별 집회",
    date: "2026. 04. 15",
    passage: "마태복음 28:18-20",
    embedUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
    imageUrl: "https://images.unsplash.com/photo-1444724414565-550caecefc31?q=80&w=800"
  },
  {
    title: "수요 예배: 환난 날에 나를 부르라",
    sermonTitle: "환난 날에 나를 부르라",
    type: "수요예배",
    date: "2026. 04. 08",
    passage: "시편 50:15",
    embedUrl: "https://www.youtube.com/embed/coBId_Pehig",
    imageUrl: "https://images.unsplash.com/photo-1469571486090-7d99c43d74a1?q=80&w=800"
  },
  {
    title: "특별 집회: 화평케 하는 자의 축복",
    sermonTitle: "화평케 하는 자의 축복",
    type: "특별 집회",
    date: "2026. 04. 02",
    passage: "마태복음 5:9",
    embedUrl: "https://www.youtube.com/embed/5qap5aO4i9A",
    imageUrl: "https://images.unsplash.com/photo-1508847154043-be12a2673a5a?q=80&w=800"
  }
];

const sitemapData = [
  {
    title: '교회소개',
    items: [
      { name: '영신교회', href: '#영신교회' },
      { name: '예배안내', href: '#예배안내' },
      { name: '오시는길', href: '#오시는길' }
    ]
  },
  {
    title: '설교',
    items: [
      { name: '주일/금요 설교', href: '#설교말씀/주일금요' },
      { name: '수요/특별 설교', href: '#설교말씀/수요특별' }
    ]
  },
  {
    title: '공동체',
    items: [
      {
        name: '다음세대',
        href: '#다음세대',
        subItems: ['유아부', '유치부', '초등부', '청소년부', '청년부']
      },
      { name: '작은교회', href: '#작은교회' },
      { name: '새가족안내', href: '#새가족안내' }
    ]
  },
  {
    title: '사역과양육',
    items: [
      {
        name: '하나님사랑',
        href: '#하나님사랑',
        subItems: ['제자반/사역반', '성경대학', '온라인 독서모임', '마더와이즈/파더와이즈']
      },
      {
        name: '이웃사랑',
        href: '#이웃사랑',
        subItems: ['사랑나눔박스', '뮤직아카데미', '행복한대학', '결혼예비학교']
      }
    ]
  },
  {
    title: '교회소식',
    items: [
      { name: '공지사항', href: '#공지사항' },
      { name: '사역게시판', href: '#사역게시판' }
    ]
  }
];

const recommendedBooks = [
  {
    title: "순전한 기독교",
    author: "C. S. 루이스",
    category: "기독교 입문",
    description: "기독교 신앙의 핵심을 논리적이고 따뜻한 언어로 만나는 고전입니다.",
    cover: "#69725A",
    image: "./images/new-family/books/mere_christianity.jfif",
    accent: "#E7D2A5"
  },
  {
    title: "탕부 하나님",
    author: "팀 켈러",
    category: "복음",
    description: "탕자의 비유를 통해 조건 없이 우리를 맞아 주시는 하나님의 사랑을 발견합니다.",
    cover: "#7C5E4E",
    image: "./images/new-family/books/the_prodigal_god.jfif",
    accent: "#F0DDB8"
  },
  {
    title: "목적이 이끄는 삶",
    author: "릭 워렌",
    category: "신앙생활",
    description: "하나님 안에서 삶의 목적을 찾고 매일의 믿음을 세우도록 돕는 안내서입니다.",
    cover: "#526B70",
    image: "./images/new-family/books/the_purpose_driven_life.jfif",
    accent: "#D6C59A"
  },
  {
    title: "내가 만든 신",
    author: "팀 켈러",
    category: "영적 성장",
    description: "우리 마음이 붙드는 우상을 돌아보고 복음 안의 참된 자유로 나아가게 합니다.",
    cover: "#6D6275",
    image: "./images/new-family/books/counterfeit_gods.jfif",
    accent: "#E6D4B2"
  },
  {
    title: "그리스도를 본받아",
    author: "토마스 아 켐피스",
    category: "영성 고전",
    description: "예수님의 겸손과 사랑을 일상의 태도로 살아내도록 초대하는 묵상 고전입니다.",
    cover: "#8A6B51",
    image: "./images/new-family/books/the_imatation_of_christ.jfif",
    accent: "#F1DEB6"
  }
];

const DEFAULT_NOTICE_POSTS = [
  {
    id: 1,
    title: "영신교회 2026년 6월 3주차 주간 공동체 주보",
    category: "주보",
    date: "2026-06-21",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
    desc: "예수님의 보혈과 성도의 따뜻한 교제가 가득한 영신교회 주간 소식지입니다.",
    downloads: 34
  },
  {
    id: 2,
    title: "여름 힐링 전교인 말씀 사경회 포스터",
    category: "포스터",
    date: "2026-06-15",
    img: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=800&auto=format&fit=crop",
    desc: "‘말씀 속에 거하는 진정한 안식’ - 전 성도가 주일에 모여 뜨거운 말씀과 찬양으로 거듭나는 은혜의 시간입니다.",
    downloads: 82
  },
  {
    id: 3,
    title: "영신 뮤직아카데미 정기 가을 발표회 포스터",
    category: "포스터",
    date: "2026-06-12",
    img: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800&auto=format&fit=crop",
    desc: "음악으로 성도와 소통하고 세상을 위로하는 축제에 온 가족을 정성껏 초대합니다.",
    downloads: 51
  },
  {
    id: 4,
    title: "영신교회 2026년 6월 2주차 주간 공동체 주보",
    category: "주보",
    date: "2026-06-14",
    img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop",
    desc: "은혜와 진리 가운데 하나님의 축복 속에서 동행하는 복된 한 주 되시길 기원합니다.",
    downloads: 29
  },
  {
    id: 5,
    title: "국내 미자립교회 단기 선교대원 모집 안내 포스터",
    category: "포스터",
    date: "2026-06-08",
    img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
    desc: "산간 및 농어촌 지역의 복음과 사랑 전파 사역에 동참하실 우리 은혜의 선교대원을 정성을 다해 모집합니다.",
    downloads: 65
  },
  {
    id: 6,
    title: "2026년 5월 성령강림절 연합 주일 예배 주보",
    category: "주보",
    date: "2026-05-31",
    img: "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=800&auto=format&fit=crop",
    desc: "성령의 임재하심과 뜨거워진 가슴으로 주님 앞에 엎드리는 거룩한 영신 예배 소식.",
    downloads: 42
  },
  {
    id: 7,
    title: "영신교회 2026년 5월 4주차 주간 공동체 주보",
    category: "주보",
    date: "2026-05-24",
    img: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop",
    desc: "믿음의 가정, 소망의 걸음마다 하나님의 가없는 평강이 넘쳐나길 간절히 소망합니다.",
    downloads: 38
  },
  {
    id: 8,
    title: "영신교회 가을 한마음 체육대회 안내 포스터",
    category: "포스터",
    date: "2026-05-20",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop",
    desc: "‘주 안에서 하나 되는 기쁨!’ 전교인이 함께 땀 흘리고 웃으며 한 몸 됨을 누리는 한마음 축제입니다.",
    downloads: 74
  },
  {
    id: 9,
    title: "영신교회 2026년 5월 3주차 주간 공동체 주보",
    category: "주보",
    date: "2026-05-17",
    img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop",
    desc: "예배받기 합당하신 주님을 기쁨으로 소리 높여 찬송하는 복된 공동체 주간 주보입니다.",
    downloads: 27
  },
  {
    id: 10,
    title: "제12회 전교인 말씀 영성 부흥 사경회 포스터",
    category: "포스터",
    date: "2026-05-11",
    img: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=800&auto=format&fit=crop",
    desc: "내 영혼을 향한 하나님의 생명수를 공급받는 3일간의 놀라운 말씀 부흥 집회로 오십시오.",
    downloads: 91
  },
  {
    id: 11,
    title: "영신교회 2026년 5월 2주차 주간 공동체 주보",
    category: "주보",
    date: "2026-05-10",
    img: "https://images.unsplash.com/photo-1507692049790-de58290a4334?q=80&w=800&auto=format&fit=crop",
    desc: "하늘로부터 내려오는 신령한 복과 평안이 성도님의 예배와 삶 가운데 함께하시길 기원합니다.",
    downloads: 31
  },
  {
    id: 12,
    title: "태신자 초청 가을 새생명 축제 포스터",
    category: "포스터",
    date: "2026-04-25",
    img: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800&auto=format&fit=crop",
    desc: "한 영혼을 가슴에 품고 기도로 눈물 흘린 이들이 기쁨으로 거두는 새생명 전도 잔치에 초대합니다.",
    downloads: 58
  }
];

const DEFAULT_MINISTRY_POSTS = [
  { id: 1, title: "사랑의 나눔 쌀 배달 의정 봉사", category: "사랑나눔", date: "2026-06-18", img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600&auto=format&fit=crop", desc: "이웃 어르신 댁을 직접 찾아가 쌀을 전하며 영의 온기를 나누었습니다." },
  { id: 2, title: "청소년부 워십 찬양 축제 '예드림'", category: "다음세대", date: "2026-06-14", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop", desc: "악기 선율과 깊은 말씀, 그리고 청소년들의 진심 어린 찬양이 가득했습니다." },
  { id: 3, title: "교회 로비 봄꽃 화단 손수 정비 사역", category: "주민사랑", date: "2026-06-11", img: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop", desc: "성도들이 힘을 모아 교회 로비를 화사한 봄꽃 화단으로 손수 가꾸며, 방문하는 이웃과 교우들에게 봄의 활력과 은혜를 전하는 따뜻한 봉사 활동입니다." },
  { id: 5, title: "제자반 제5기 뜨거운 말씀 수련 캠프", category: "교육/양육", date: "2026-06-04", img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop", desc: "깊이 있는 말씀 교제와 삶의 회복을 통한 그리스도의 전인적 자녀 양육." },
  { id: 6, title: "뮤직아카데미 정기 예술 피아노 독주", category: "문화/양육", date: "2026-05-28", img: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=600&auto=format&fit=crop", desc: "수료 어린이들과 청년들의 정갈한 피아노와 첼로 선율이 울려퍼진 오후." },
  { id: 7, title: "마더와이즈 소그룹 숲속 정원 다과회", category: "교육/양육", date: "2026-05-22", img: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop", desc: "가정의 아내이자 어머니들이 다정하게 수다 떨며 기도로 무장하는 치유 모임." },
  { id: 8, title: "국내 농어촌 미자립교회 연합 비전 캠프", category: "선교", date: "2026-05-17", img: "https://images.unsplash.com/photo-1526976721720-6fe210946884?q=80&w=600&auto=format&fit=crop", desc: "농어촌 미자립교회의 어린이들을 위한 성경학교 지원과 연합 비전 소그룹 캠프를 통해 복음의 기쁨과 따뜻한 사랑을 전하고 돌아왔습니다." },
  { id: 9, title: "어린이날 기념 에어바운스 새싹 잔치", category: "다음세대", date: "2026-05-05", img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop", desc: "아이들이 안전하고 유쾌하게 뒹굴며 야외 간식거리를 만끽한 사랑 가득 행사." },
  { id: 10, title: "이웃 사랑나눔박스 생필품 정성 포장", category: "사랑나눔", date: "2026-04-28", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=600&auto=format&fit=crop", desc: "미포함 사각지대에 거하는 소외층 100가정을 도울 양념, 고추장 등의 수포장." },
  { id: 11, title: "성경 아카데미 영적 고전 야외 낭독회", category: "교육/양육", date: "2026-04-20", img: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?q=80&w=600&auto=format&fit=crop", desc: "바람 아래 기독 철학을 음미하고 서로 필독서를 도란도란 읊은 풍요로운 일정." },
  { id: 12, title: "청년부 한마음 한강 벚꽃 피크닉", category: "다음세대", date: "2026-04-12", img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop", desc: "신앙 친구들과 웃고 음식을 맛보며 청년의 비전을 돈독하게 나누고 격려했습니다." },
  { id: 13, title: "결혼 예비학교 건실 부부 수료 예식", category: "교육/양육", date: "2026-04-05", img: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop", desc: "가정의 소명을 깨닫고 함께 성경적 결혼의 다짐을 축복 속에 맺은 신랑신부단." },
  { id: 14, title: "예배실 로비 봄꽃 화단 손수 정비", category: "주민사랑", date: "2026-03-29", img: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=600&auto=format&fit=crop", desc: "화사하고 그윽한 카네이션, 튤립을 심어 오가는 교민들의 향을 향기롭게 한 사역." },
  { id: 15, title: "찬양대 영성 및 칸타타 저녁 세미나", category: "찬양", date: "2026-03-22", img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=600&auto=format&fit=crop", desc: "화음에 사랑의 호흡을 담기 위해 호흡을 맞춘 성가대 파트별 영적 집중 일과." },
  { id: 16, title: "어르신 스마트폰 작동 일대일 나눔", category: "주민사랑", date: "2026-03-15", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop", desc: "소통의 단절을 해결하기 위해 카카오톡 문자, 사진 촬영을 쉽게 배운 행복 한때." }
];

const getMinistryImages = (post: any): string[] => {
  const primary = post.img || "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600&auto=format&fit=crop";
  const categoryGalleries: Record<string, string[]> = {
    "사랑나눔": [
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518398046578-8cca57782e17?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541802645635-11f2286a7482?q=80&w=600&auto=format&fit=crop"
    ],
    "다음세대": [
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600&auto=format&fit=crop"
    ],
    "문화/양육": [
      "https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=600&auto=format&fit=crop"
    ],
    "주민사랑": [
      "https://images.unsplash.com/photo-1530587191325-3db32d826c18?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=600&auto=format&fit=crop"
    ],
    "교육/양육": [
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop"
    ],
    "선교": [
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=600&auto=format&fit=crop"
    ],
    "찬양": [
      "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=600&auto=format&fit=crop"
    ]
  };

  const extra = categoryGalleries[post.category || "사랑나눔"] || categoryGalleries["사랑나눔"];
  const images = [primary, ...extra.filter(img => img !== primary)].slice(0, 4);
  return images;
};

export default function App() {
  const [isSitemapOpen, setIsSitemapOpen] = useState(false);

  // New states for Notices (공지사항) and Ministries (사역게시판)
  const [noticePosts, setNoticePosts] = useState<typeof DEFAULT_NOTICE_POSTS>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('yungshin_notice_posts');
        if (saved) {
          let parsed = JSON.parse(saved);
          const needsMigration = parsed.some((p: any) => p.title === "태국 단기 의료선교 대원 모집 안내 포스터");
          if (needsMigration) {
            parsed = parsed.map((p: any) => {
              if (p.title === "태국 단기 의료선교 대원 모집 안내 포스터") {
                return {
                  id: p.id,
                  title: "국내 미자립교회 단기 선교대원 모집 안내 포스터",
                  category: "포스터",
                  date: "2026-06-08",
                  img: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop",
                  desc: "산간 및 농어촌 지역의 복음과 사랑 전파 사역에 동참하실 우리 은혜의 선교대원을 정성을 다해 모집합니다.",
                  downloads: p.downloads || 65
                };
              }
              return p;
            });
          }
          // Supplement missing default notices
          const existingTitles = new Set(parsed.map((p: any) => p.title));
          const missingDefaults = DEFAULT_NOTICE_POSTS.filter((p: any) => !existingTitles.has(p.title));
          if (missingDefaults.length > 0) {
            parsed = [...parsed, ...missingDefaults];
          }
          localStorage.setItem('yungshin_notice_posts', JSON.stringify(parsed));
          return parsed;
        }
        return DEFAULT_NOTICE_POSTS;
      } catch {
        return DEFAULT_NOTICE_POSTS;
      }
    }
    return DEFAULT_NOTICE_POSTS;
  });

  const [ministryPosts, setMinistryPosts] = useState<typeof DEFAULT_MINISTRY_POSTS>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('yungshin_ministry_posts');
        if (saved) {
          const parsed = JSON.parse(saved);
          const needsMigration = parsed.some((p: any) => p.title === "태국 산간마을 해외 단기 의료 파송" || p.title === "몽골 울란바토르 아동 비전 캠프 파송");
          if (needsMigration) {
            const migrated = parsed.map((p: any) => {
              if (p.title === "태국 산간마을 해외 단기 의료 파송" || p.title === "몽골 울란바토르 아동 비전 캠프 파송") {
                return {
                  id: p.id,
                  title: "국내 농어촌 미자립교회 연합 비전 캠프",
                  category: "선교",
                  date: "2026-05-17",
                  img: "https://images.unsplash.com/photo-1526976721720-6fe210946884?q=80&w=600&auto=format&fit=crop",
                  desc: "농어촌 미자립교회의 어린이들을 위한 성경학교 지원과 연합 비전 소그룹 캠프를 통해 복음의 기쁨과 따뜻한 사랑을 전하고 돌아왔습니다."
                };
              }
              return p;
            });
            localStorage.setItem('yungshin_ministry_posts', JSON.stringify(migrated));
            return migrated;
          }
          return parsed;
        }
        return DEFAULT_MINISTRY_POSTS;
      } catch {
        return DEFAULT_MINISTRY_POSTS;
      }
    }
    return DEFAULT_MINISTRY_POSTS;
  });

  const [customStaffPhotos, setCustomStaffPhotos] = useState<Record<number, string>>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('yungshin_nextgen_staff_photos');
        return saved ? JSON.parse(saved) : {};
      } catch {
        return {};
      }
    }
    return {};
  });

  const handleStaffPhotoUpload = (subpageId: number, file: File) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Data = reader.result as string;
      const newPhotos = { ...customStaffPhotos, [subpageId]: base64Data };
      setCustomStaffPhotos(newPhotos);
      localStorage.setItem('yungshin_nextgen_staff_photos', JSON.stringify(newPhotos));
    };
    reader.readAsDataURL(file);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isPrayerModalOpen, setIsPrayerModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<{ title: string; embedUrl: string } | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [prayerName, setPrayerName] = useState('');
  const [prayerContact, setPrayerContact] = useState('');
  const [prayerTopic, setPrayerTopic] = useState('영적 성장 및 믿음');
  const [prayerContent, setPrayerContent] = useState('');
  const [copied, setCopied] = useState(false);
  const [activeCoreValue, setActiveCoreValue] = useState(0);
  const [nextGenIndex, setNextGenIndex] = useState(0);
  const [selectedNextGen, setSelectedNextGen] = useState<number | null>(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [currentHash, setCurrentHash] = useState(typeof window !== 'undefined' ? decodeURIComponent(window.location.hash) : '');
  const [sermonTab, setSermonTab] = useState<'주일_금요' | '수요_특별'>(() => {
    if (typeof window !== 'undefined') {
      const hash = decodeURIComponent(window.location.hash);
      if (hash.startsWith('#설교말씀/수요특별')) {
        return '수요_특별';
      }
    }
    return '주일_금요';
  });
  const [sundaySermonLimit, setSundaySermonLimit] = useState(6);
  const [wednesdaySermonLimit, setWednesdaySermonLimit] = useState(6);
  const [activeStaffMobileIdx, setActiveStaffMobileIdx] = useState<number | null>(null);

  const [bookSlideIndex, setBookSlideIndex] = useState(0);

  // Notice & Ministry Board states
  const [noticeSearch, setNoticeSearch] = useState('');
  const [noticeFilter, setNoticeFilter] = useState('전체');
  const [isAddNoticeOpen, setIsAddNoticeOpen] = useState(false);
  const [selectedNoticeId, setSelectedNoticeId] = useState<number | null>(null);
  const [noticeDownloadStatus, setNoticeDownloadStatus] = useState<Record<number, string>>({});

  // Notice form fields
  const [noticeFormTitle, setNoticeFormTitle] = useState('');
  const [noticeFormCategory, setNoticeFormCategory] = useState('주보');
  const [noticeFormDesc, setNoticeFormDesc] = useState('');
  const [noticeFormImg, setNoticeFormImg] = useState('https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop');

  // Ministry board states
  const [selectedMinistryId, setSelectedMinistryId] = useState<number | null>(null);
  const [activeMinistryImgIdx, setActiveMinistryImgIdx] = useState<number>(0);
  const [ministryLikeCount, setMinistryLikeCount] = useState<Record<number, number>>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('yungshin_ministry_likes');
        return saved ? JSON.parse(saved) : {};
      } catch {
        return {};
      }
    }
    return {};
  });
  const [isAddMinistryOpen, setIsAddMinistryOpen] = useState(false);
  const [visibleMinistryCount, setVisibleMinistryCount] = useState(12);
  const [hasExpandedMinistry, setHasExpandedMinistry] = useState(false);
  const [visibleNoticeCount, setVisibleNoticeCount] = useState(6);
  
  // Ministry form fields
  const [ministryFormTitle, setMinistryFormTitle] = useState('');
  const [ministryFormCategory, setMinistryFormCategory] = useState('사랑나눔');
  const [ministryFormDesc, setMinistryFormDesc] = useState('');
  const [ministryFormImg, setMinistryFormImg] = useState('https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600&auto=format&fit=crop');
  const neighborSubpageMatch = currentHash.match(/^#이웃사랑(?:\/(\d+))?/);
  const isNeighborActive = neighborSubpageMatch !== null;
  const neighborSubpageId = neighborSubpageMatch && neighborSubpageMatch[1] ? parseInt(neighborSubpageMatch[1], 10) : 0;

  const godsLoveSubpageMatch = currentHash.match(/^#하나님사랑(?:\/(\d+))?/);
  const isGodsLoveActive = godsLoveSubpageMatch !== null;
  const godsLoveSubpageId = godsLoveSubpageMatch && godsLoveSubpageMatch[1] ? parseInt(godsLoveSubpageMatch[1], 10) : 0;

  const isChurchIntroActive = currentHash === '#영신교회';
  const isWorshipGuideActive = currentHash === '#예배안내';
  const isDirectionsActive = currentHash === '#오시는길';
  const isSmallChurchActive = currentHash === '#작은교회';
  const isNewFamilyActive = currentHash === '#새가족안내';
  const isNoticeActive = currentHash === '#공지사항';
  const ministryDetailMatch = currentHash.match(/^#사역게시판\/(\d+)/);
  const isMinistryDetailActive = ministryDetailMatch !== null;
  const ministryDetailId = ministryDetailMatch ? parseInt(ministryDetailMatch[1], 10) : null;
  const isMinistryBoardActive = currentHash.startsWith('#사역게시판');
  const isSermonsActive = currentHash.startsWith('#설교말씀');

  useEffect(() => {
    const handleHashChange = () => {
      const decodedHash = decodeURIComponent(window.location.hash);
      setCurrentHash(decodedHash);
      if (decodedHash.startsWith('#설교말씀')) {
        if (decodedHash.endsWith('수요특별')) {
          setSermonTab('수요_특별');
        } else {
          setSermonTab('주일_금요');
        }
      }
      const match = decodedHash.match(/^#nextgen\/(\d+)/);
      const neighborMatch = decodedHash.match(/^#이웃사랑(?:\/(\d+))?/);
      const godsLoveMatch = decodedHash.match(/^#하나님사랑(?:\/(\d+))?/);
      if (
        match || neighborMatch || godsLoveMatch || 
        decodedHash === '#영신교회' || decodedHash === '#예배안내' || 
        decodedHash === '#오시는길' || decodedHash === '#작은교회' || 
        decodedHash === '#새가족안내' || decodedHash === '#공지사항' || 
        decodedHash.startsWith('#사역게시판') || decodedHash.startsWith('#설교말씀')
      ) {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVisibleCount = () => {
    if (windowWidth < 640) return 1;
    if (windowWidth < 1024) return 2;
    return 3;
  };

  const visibleCount = getVisibleCount();
  const bookVisibleCount = windowWidth < 640 ? 1 : windowWidth < 1024 ? 2 : 3;
  const maxBookSlideIndex = Math.max(0, recommendedBooks.length - bookVisibleCount);

  useEffect(() => {
    setBookSlideIndex((previous) => Math.min(previous, maxBookSlideIndex));
  }, [maxBookSlideIndex]);

  const isMobile = windowWidth < 640;
  const currentVisibleMinistryCount = (isMobile && !hasExpandedMinistry) ? 5 : visibleMinistryCount;

  const nextGenItems = [
    {
      title: "유아부",
      sub: "Yes Toddler of Grace",
      target: "돌~4세",
      time: "주일 오전 11:30",
      location: "3층 유아부실",
      desc: "하나님의 기쁨인 어린이들이 놀이와 신나는 예배를 통해 기쁘게 하나님과 친해지는 보금자리입니다.",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=2640&auto=format&fit=crop",
      alt: "Happy toddlers playing and laughing during communion"
    },
    {
      title: "유치부",
      sub: "Rejoices in God",
      target: "5세~7세",
      time: "주일 오전 11시 30분",
      location: "1층 푸른풀밭",
      desc: "예수님의 사랑 안에서 마음껏 찬양하고 기쁘게 주님을 알아가며, 매 예배가 행복과 은혜로 충만한 영신교회 유치부입니다.",
      image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2640&auto=format&fit=crop",
      alt: "Happy children playing with shimmering soap bubbles in the beautiful green park under warm natural sunshine"
    },
    {
      title: "초등부",
      sub: "Yes Disciples of Jesus",
      target: "8~13세(초등학생)",
      time: "주일 오전 11시 30분",
      location: "1층 쉴만한 물가",
      desc: "“하나님이 좋아요!” “교회가 좋아요!” 하나님에 대한 배움, 함께하는 즐거움이 가득한 영신교회 초등부 입니다.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
      alt: "Happy elementary school children smiling and learning together in a bright, warm classroom"
    },
    {
      title: "청소년부",
      sub: "Living in the gospel.",
      target: "14~19세 (중·고등학생)",
      time: "주일 오전 11시 30분",
      location: "기쁨홀 (지하 1층)",
      desc: "예수 그리스도의 십자가만을 자랑하며, 복음의 선명한 가치로 세상을 온전히 변혁하고 믿음으로 살아가는 역동적인 청소년 공동체입니다.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2680&auto=format&fit=crop",
      alt: "Happy teenage friends enjoying discussions in warm setting"
    },
    {
      title: "청년부",
      sub: "Yes Lights of Grace",
      target: "20세 이상 싱글 청년",
      time: "주일 오후 02:30",
      location: "본당 2층",
      desc: "학업과 청년 실업 등 다양한 고민과 일정을 마주한 세대들이 뜨거운 예배와 따스한 소통의 교제를 빌어 삶의 가치를 세웁니다.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2670&auto=format&fit=crop",
      alt: "Wholesome group of young college students laughing and working"
    }
  ];

  const nextGenDetails = [
    {
      motto: "마땅히 행할 길을 아이에게 가르치라 그리하면 늙어도 그것을 떠나지 아니하리라 (잠언 22:6)",
      schedule: [
        { time: "10:30 ~ 10:50", activity: "영접 및 찬양 율동", detail: "신나는 찬양과 율동으로 예수님의 마음을 열어요" },
        { time: "10:50 ~ 11:15", activity: "말씀 선포 및 예배", detail: "그림성경과 동화를 활용하여 쉽게 하나님의 말씀을 배워요" },
        { time: "11:15 ~ 11:45", activity: "분반 성경 공부 및 크래프트 활동", detail: "오늘 전해진 말씀을 다양한 오감 공작 활동으로 기억해요" },
        { time: "11:45 ~ 12:00", activity: "기도와 간식 나눔", detail: "다정하게 선생님, 친구들과 주님의 사랑을 나눠요" }
      ],
      calendar: [
        { month: "2월", title: "겨울 유아 성경학교", desc: "온 가족이 함께하는 일일 성경체험 캠프" },
        { month: "5월", title: "어린이날 페스티벌", desc: "꿈 가득 야외 포토존 및 선물 가득 풍성한 패밀리 데이" },
        { month: "7월", title: "여름 유아 성경학교", desc: "워터 슬라이드와 오감 말씀 풍덩 놀이 캠프" },
        { month: "12월", title: "성탄 축하 발표회", desc: "귀여운 찬양 율동 피날레로 예수님을 축하해요" }
      ],
      staff: "박혜연 디렉터"
    },
    {
      motto: "아이와 같이 자기가 낮추는 사람이 천국에서 큰 자니라 (마태복음 18:4)",
      schedule: [
        { time: "10:35 ~ 10:55", activity: "신나는 율동 & 구연 예배 준비", detail: "오늘 배울 핵심 말씀을 몸과 신체 율동으로 기쁘게 익혀요" },
        { time: "10:55 ~ 11:20", activity: "시청각 입체 예배", detail: "인형극, 연극극 및 다양한 애니메이션으로 핵심 성경을 이해해요" },
        { time: "11:20 ~ 11:45", activity: "생각 쑥쑥 미술 공작소", detail: "창의적인 미술 크래프트 키트로 고사리손으로 소품 만들기" },
        { time: "11:45 ~ 12:00", activity: "달콤 상콤 다과회", detail: "친구들과 맛있는 간식 타임을 가지며 우정을 가꿔요" }
      ],
      calendar: [
        { month: "3월", title: "봄맞이 인형극 페스티벌", desc: "유치부 전용 대형 입체 인형극 초청 공연" },
        { month: "6월", title: "그레이스 패밀리 골든벨", desc: "유치부 아이들의 말씀 퀴즈 서바이벌 게임과 선물 가득" },
        { month: "8월", title: "여름 키즈 영성 서머캠프", desc: "야외 수영장 물총축제와 성경 탐험 말씀 어드벤처" },
        { month: "12월", title: "아기 천사들의 해피 캐롤 워십", desc: "성탄 이브 주일, 아름다운 율동 찬양 발표 무대 구경" }
      ],
      staff: "김진영 전도사"
    },
    {
      motto: "예수는 지혜와 키가 자라가며 하나님과 사람에게 더욱 사랑스러워 가시더라 (누가복음 2:52)",
      schedule: [
        { time: "10:30 ~ 10:50", activity: "준비 찬양 및 마음맞이 교제", detail: "기분 좋은 주일 아침을 함께 준비해요" },
        { time: "10:50 ~ 11:25", activity: "찬양 드림 및 대표 예배", detail: "스스로 마음을 담은 찬양과 고백의 주일 대예배" },
        { time: "11:25 ~ 11:45", activity: "소그룹 반별 성경 공부", detail: "생각하는 질문을 나누고 생활 속 적용 과제 찾기" },
        { time: "11:45 ~ 12:00", activity: "주간 어워즈 및 소식 알림", detail: "가득한 웃음 속 주간 말씀 퀴즈와 시상 나눔" }
      ],
      calendar: [
        { month: "1월", title: "새학년 축사 웰컴 데이", desc: "새 친구 환영회 및 찬양 축제 교류 게임" },
        { month: "2월", title: "신앙 독서 캠프", desc: "하나님을 만나는 성경 독서 습관 홈스테이 클래스" },
        { month: "7월", title: "여름 연합 성경학교", desc: "말씀 탐험대 신나는 그레이스 풀빌라 영성 캠프" },
        { month: "12월", title: "성탄 율동 워십 & 달란트 시장", desc: "은혜의 찬양 및 친구 축하 다과, 풍성한 달란트 마켓" }
      ],
      staff: "김호준 목사"
    },
    {
      motto: "그러나 내게는 우리 주 예수 그리스도의 십자가 외에 결코 자랑할 것이 없으니 그리스도로 말미암아 세상이 나를 대하여 십자가에 못 박히고 내가 또한 세상을 대하여 그러하니라 (갈라디아서 6:14)",
      schedule: [
        { time: "10:40 ~ 11:00", activity: "SFC 찬양 오프닝 예배", detail: "인도자 및 풀밴드 라이브 예배 연주" },
        { time: "11:00 ~ 11:40", activity: "본 예배 및 설교 말씀 선포", detail: "청소년들의 고민에 귀 기울이는 소통형 메세지 강해" },
        { time: "11:40 ~ 12:10", activity: "소모임 말씀 나눔 및 티타임", detail: "진로, 학업, 신앙 소통을 다듬는 따듯한 사랑방 시간" },
        { time: "12:10 ~ 12:30", activity: "SFC 탁구 및 악기 동아리 모임", detail: "교실 밖 건강하고 유쾌한 동역자 체육 친교 활동" }
      ],
      calendar: [
        { month: "1월", title: "SFC 전국 대학 연합 수련회", desc: "뜨거운 기도와 헌신을 다짐하는 전국대회 참석" },
        { month: "4월", title: "시험 기간 비전 푸드 박스", desc: "학업과 멘토링 결합, 따뜻한 응원의 손길 배달" },
        { month: "7월", title: "여름 수련회 & 신앙 특강 캠핑", desc: "산과 바다 속 진정한 신앙과 비전을 찾아가는 캠프" },
        { month: "11월", title: "수험생 기도회 & 수능 힐링나잇", desc: "고3 격려와 깊은 성령의 따뜻한 평안 교류 집회" }
      ],
      staff: "손창성 전도사"
    },
    {
      motto: "청년이 무엇으로 그의 행실을 깨끗하게 하리이까 주의 말씀만 지킬 따름이니이다 (시편 119:9)",
      schedule: [
        { time: "14:15 ~ 14:30", activity: "그레이스 워십 찬양 선포", detail: "예배 준비 및 싱어롱 온 영혼의 고백" },
        { time: "14:30 ~ 15:30", activity: "청년부 메인 열린 예배", detail: "삶과 신앙의 균형을 세우는 역동적인 장년형 성경 강해" },
        { time: "15:30 ~ 16:30", activity: "소그룹 사랑방 말씀 삶 나눔", detail: "서로의 주간 응원 및 진실된 기도를 조별로 나누는 소통" },
        { time: "16:30 ~ 18:00", activity: "셀 그룹 문화 및 취미 소모임", detail: "독서 모임, 볼링, 찬양 밴드 교제 및 교구 봉사 활동" }
      ],
      calendar: [
        { month: "2월", title: "신년 동계 힐링 MT 및 청년 수련회", desc: "새해 말씀 비전 선포 및 공동체 리트릿 야외 수련회" },
        { month: "5월", title: "오픈하우스 청년 페스티벌", desc: "이웃 친구 초청 힐링 음악 콘서트와 라이프 토크" },
        { month: "8월", title: "여름 선교 봉사 & 비전 캠프", desc: "국내 미자립교회 여름 수련회 지원 및 단기 선교 집회" },
        { month: "12월", title: "청년 사랑방 종강 파티 및 동역자의 밤", desc: "서로의 동역을 기리는 훈훈한 시상과 리더 감사 나잇" }
      ],
      staff: "김상호 담임목사"
    }
  ];

  const maxNextGenIndex = Math.max(0, nextGenItems.length - visibleCount);

  const handleNextGenSlide = () => {
    setNextGenIndex((prev) => (prev >= maxNextGenIndex ? 0 : prev + 1));
  };

  const handlePrevGenSlide = () => {
    setNextGenIndex((prev) => (prev <= 0 ? maxNextGenIndex : prev - 1));
  };

  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState(0);
  const isDragging = useRef(false);
  const hasDragged = useRef(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    setDragStartX(e.touches[0].clientX);
    isDragging.current = true;
    hasDragged.current = false;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current || dragStartX === null) return;
    const currentX = e.touches[0].clientX;
    const offset = currentX - dragStartX;
    setDragOffset(offset);
    if (Math.abs(offset) > 10) {
      hasDragged.current = true;
    }
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setDragStartX(null);
    
    const threshold = 50;
    if (dragOffset < -threshold) {
      handleNextGenSlide();
    } else if (dragOffset > threshold) {
      handlePrevGenSlide();
    }
    setDragOffset(0);
    setTimeout(() => {
      hasDragged.current = false;
    }, 50);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return;
    setDragStartX(e.clientX);
    isDragging.current = true;
    hasDragged.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || dragStartX === null) return;
    const offset = e.clientX - dragStartX;
    setDragOffset(offset);
    if (Math.abs(offset) > 10) {
      hasDragged.current = true;
    }
  };

  const handleMouseUpOrLeave = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    setDragStartX(null);
    
    const threshold = 50;
    if (dragOffset < -threshold) {
      handleNextGenSlide();
    } else if (dragOffset > threshold) {
      handlePrevGenSlide();
    }
    setDragOffset(0);
    setTimeout(() => {
      hasDragged.current = false;
    }, 50);
  };

  const coreValues = [
    { 
      title: "행복한대학", 
      desc: "배움과 웃음이 가득한 시니어들을 위한 선교 공동체입니다.", 
      icon: <GraduationCap className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=2680&auto=format&fit=crop",
      alt: "8명의 아시안 남녀 노인들이 테이블에 마주 앉아 다정하게 손을 맞잡고, 따스한 온기의 주황빛 햇살 아래 깊은 미소와 정감 가득한 이야기꽃을 피우며 차를 즐기는 일상 속 행복한 동양 시니어 공동체의 모습"
    },
    { 
      title: "뮤직아카데미", 
      desc: "음악을 통해 재능을 나누며 영혼의 치유와 성장을 이룹니다.", 
      icon: <Music className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=2680&auto=format&fit=crop",
      alt: "Violin, instruments and sheets of music representing the academy"
    },
    { 
      title: "사랑나눔박스", 
      desc: "영신교회가 동행하는 사랑나눔은 한사람을 찾아갑니다.", 
      icon: <Heart className="w-6 h-6" />,
      image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2574&auto=format&fit=crop",
      alt: "Volunteering donation box and sharing with the local community"
    }
  ];

  const coreValueRoutes = ["#이웃사랑/2", "#이웃사랑/1", "#이웃사랑/0"];

  const handleCopyAddress = () => {
    navigator.clipboard.writeText("서울특별시 양천구 목동로 19길 28");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  const opacity = useTransform(heroScrollProgress, [0, 0.85, 1], [1, 1, 0]);
  const scale = useTransform(heroScrollProgress, [0, 0.85, 1], [1, 1, 0.95]);

  const handlePrayerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      isAnonymous,
      name: isAnonymous ? '익명' : prayerName,
      contact: prayerContact,
      topic: prayerTopic,
      content: prayerContent
    });
    setIsSubmitted(true);
    setPrayerName('');
    setPrayerContact('');
    setPrayerTopic('영적 성장 및 믿음');
    setPrayerContent('');
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isPrayerModalOpen || activeVideo) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isPrayerModalOpen, activeVideo]);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const staggerContainer = {
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const heroSlides = [
    {
      subtitle: "Welcome to church",
      title: <>예수께서 이르시되 내가 곧 길이요 진리요 생명이니 <br /> 나로 말미암지 않고는 <br /> 아버지께로 올 자가 없느니라 </>,
      description: <>예수께서 이르시되 내가 곧 길이요 진리요 생명이니 <br className="hidden md:inline" /> 나로 말미암지 않고는 아버지게로 올 자가 없느니라</>,
      image: `${import.meta.env.BASE_URL}images/night.png`,
      primaryText: "처음 오셨나요?",
      secondaryText: "교회소개",
      primaryAction: () => { window.location.hash = '#새가족안내'; },
      secondaryAction: () => { window.location.hash = '#영신교회'; }
    },
    {
      subtitle: "YOUNGSHIN CHURCH",
      title: <>하나님을 기쁘시게 <br /> 사람을 행복하게</>,
      description: <>영신교회는 복음의 기쁨을 누리고 <br className="md:hidden" /> 따뜻한 공동체를 세워가는 <br className="hidden md:inline" /> 축복의 통로입니다.</>,
      image: `${import.meta.env.BASE_URL}images/cross.png`,
      primaryText: "예배시간안내",
      secondaryText: "실시간 예배 참여",
      primaryAction: () => { window.location.hash = '#새가족안내'; },
      secondaryAction: () => {
        setActiveVideo({
          title: "주일 설교: 복음, 그 가슴 뛰는 부르심",
          embedUrl: "https://www.youtube.com/embed/5qap5aO4i9A"
        });
      }
    },
    {
      subtitle: "WORSHIP & PRAISE",
      title: <>예배의 감격이 살아있고 <br /> 찬양이 넘치는 교회</>,
      description: <>신령과 진정으로 드리는 예배를 통해 <br className="md:hidden" /> 하나님의 살아 계심과 <br className="hidden md:inline" /> 하늘의 큰 평안을 누립니다.</>,
      image: `${import.meta.env.BASE_URL}images/main_2.jpg`,
      primaryText: "다음세대 보기",
      secondaryText: "지난 설교 보기",
      primaryAction: () => { window.location.hash = '#다음세대'; },
      secondaryAction: () => { window.location.hash = '#설교말씀/주일금요'; }
    },
    // {
    //   subtitle: "NEXT GENERATION",
    //   title: <>믿음의 다음세대를 <br /> 사랑으로 세워가는 교회</>,
    //   description: <>어린이부터 청소년, 귀한 청년들까지 <br className="md:hidden" /> 하나님의 꿈과 비전 속에서 <br className="hidden md:inline" /> 아름답게 동역하며 기쁨으로 자라납니다.</>,
    //   image: "./images/hug.jpg",
    //   primaryText: "다음세대 안내",
    //   secondaryText: "청년 공동체 보기",
    //   primaryAction: () => { window.location.hash = '#다음세대'; },
    //   secondaryAction: () => { window.location.hash = '#nextgen/4'; }
    // }
  ];

  const [heroTouchStartX, setHeroTouchStartX] = useState<number | null>(null);
  const [heroTouchStartY, setHeroTouchStartY] = useState<number | null>(null);

  const handleHeroTouchStart = (e: React.TouchEvent) => {
    setHeroTouchStartX(e.touches[0].clientX);
    setHeroTouchStartY(e.touches[0].clientY);
  };

  const handleHeroTouchEnd = (e: React.TouchEvent) => {
    if (heroTouchStartX === null || heroTouchStartY === null) return;
    
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    
    const diffX = touchEndX - heroTouchStartX;
    const diffY = touchEndY - heroTouchStartY;
    
    if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 40) {
      if (diffX < 0) {
        setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
      } else {
        setCurrentHeroSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
      }
    }
    
    setHeroTouchStartX(null);
    setHeroTouchStartY(null);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextGenSubpageMatch = currentHash.match(/^#nextgen\/(\d+)/);
  const nextGenSubpageId = nextGenSubpageMatch ? parseInt(nextGenSubpageMatch[1], 10) : null;
  const isNextGenActive = nextGenSubpageId !== null && nextGenSubpageId >= 0 && nextGenSubpageId < nextGenItems.length;

  const activeSubpageItem = isNextGenActive ? nextGenItems[nextGenSubpageId!] : null;
  const activeSubpageDetails = isNextGenActive ? nextGenDetails[nextGenSubpageId!] : null;

  useEffect(() => {
    if (!currentHash) return;
    const targetId = currentHash.replace('#', '');
    if (!targetId) return;

    // Check if the current hash refers to an active full-screen subpage
    const isSubpageActive =
      isNextGenActive ||
      isNeighborActive ||
      isGodsLoveActive ||
      isChurchIntroActive ||
      isWorshipGuideActive ||
      isDirectionsActive ||
      isSmallChurchActive ||
      isNewFamilyActive ||
      isNoticeActive ||
      isMinistryBoardActive ||
      isSermonsActive;

    if (!isSubpageActive) {
      const attemptScroll = () => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return true;
        }
        return false;
      };

      // Try immediately
      if (!attemptScroll()) {
        let count = 0;
        const interval = setInterval(() => {
          count++;
          if (attemptScroll() || count > 20) {
            clearInterval(interval);
          }
        }, 50);
        return () => clearInterval(interval);
      }
    }
  }, [
    currentHash,
    isNextGenActive,
    isNeighborActive,
    isGodsLoveActive,
    isChurchIntroActive,
    isWorshipGuideActive,
    isDirectionsActive,
    isSmallChurchActive,
    isNewFamilyActive,
    isNoticeActive,
    isMinistryBoardActive,
    isSermonsActive
  ]);

  return (
    <div className="min-h-screen selection:bg-brand-gold selection:text-brand-brown">
      {/* Navigation */}
      <nav 
        id="navbar"
        onMouseEnter={() => setIsSitemapOpen(true)}
        onMouseLeave={() => setIsSitemapOpen(false)}
        className={`fixed w-full z-50 transition-all duration-500 ${
          isNextGenActive || isNeighborActive || isGodsLoveActive || isChurchIntroActive || isWorshipGuideActive || isDirectionsActive || isSmallChurchActive || isNewFamilyActive || isNoticeActive || isMinistryBoardActive || isSermonsActive || isSitemapOpen || isScrolled 
            ? 'bg-brand-cream/95 backdrop-blur-md py-4 border-b border-brand-gold/20 shadow-lg' 
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          <div className="flex items-center gap-1.5 group cursor-pointer" id="logo" onClick={() => { window.location.hash = ''; }}>
            <IconLogo size={30} />
            <div className="flex items-baseline gap-2">
              <span className={`font-serif text-[28px] font-semibold tracking-tight transition-colors duration-300 mt-1 ${
                isNextGenActive || isNeighborActive || isGodsLoveActive || isChurchIntroActive || isWorshipGuideActive || isDirectionsActive || isSmallChurchActive || isNewFamilyActive || isNoticeActive || isMinistryBoardActive || isSermonsActive || isSitemapOpen || isScrolled 
                  ? 'text-brand-brown' 
                  : 'text-brand-gold'
              }`}>영신교회</span>
              <span className={`hidden sm:inline-block md:hidden lg:inline-block text-[14px] font-medium tracking-tight whitespace-nowrap transition-colors duration-300 ${
                isNextGenActive || isNeighborActive || isGodsLoveActive || isChurchIntroActive || isWorshipGuideActive || isDirectionsActive || isSmallChurchActive || isNewFamilyActive || isNoticeActive || isMinistryBoardActive || isSermonsActive || isSitemapOpen || isScrolled 
                  ? 'text-brand-brown/50' 
                  : 'text-[#B5A795]'
              }`}>하나님을 기쁘시게, 사람을 행복하게</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center md:gap-4 lg:gap-8 xl:gap-10">
            {sitemapData.map((category) => (
              <button 
                key={category.title} 
                onClick={(e) => {
                  e.preventDefault();
                  setIsSitemapOpen(true);
                }}
                className={`text-[16px] font-medium transition-colors relative group whitespace-nowrap py-2 cursor-pointer ${
                  isNextGenActive || isNeighborActive || isGodsLoveActive || isChurchIntroActive || isWorshipGuideActive || isDirectionsActive || isSmallChurchActive || isNewFamilyActive || isNoticeActive || isMinistryBoardActive || isSermonsActive || isSitemapOpen || isScrolled 
                    ? 'text-brand-brown/85 hover:text-brand-sage' 
                    : 'text-[#D3C7B5] hover:text-brand-gold'
                }`}
              >
                {category.title}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full ${
                  isNextGenActive || isNeighborActive || isGodsLoveActive || isChurchIntroActive || isWorshipGuideActive || isDirectionsActive || isSmallChurchActive || isNewFamilyActive || isNoticeActive || isMinistryBoardActive || isSermonsActive || isSitemapOpen || isScrolled 
                    ? 'bg-brand-sage' 
                    : 'bg-brand-gold'
                }`}></span>
              </button>
            ))}
            <button
              onClick={() => { window.location.hash = '#새가족안내'; }}
              className="bg-brand-brown text-brand-cream md:px-4 md:py-2 lg:px-6 lg:py-2.5 rounded-full text-[16px] font-medium hover:bg-brand-sage transition-all hover:shadow-lg whitespace-nowrap ml-2 cursor-pointer"
            >
              새가족 안내
            </button>
          </div>

          <button className={`md:hidden p-2 transition-colors duration-300 ${
            isNextGenActive || isNeighborActive || isGodsLoveActive || isChurchIntroActive || isWorshipGuideActive || isDirectionsActive || isSmallChurchActive || isNewFamilyActive || isNoticeActive || isMinistryBoardActive || isSermonsActive || isSitemapOpen || isScrolled 
              ? 'text-brand-brown' 
              : 'text-brand-gold'
          }`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Full Sitemap Dropdown Mega Menu (Desktop) */}
        <AnimatePresence>
          {isSitemapOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="absolute top-full left-0 w-full bg-brand-cream/98 backdrop-blur-md border-b border-brand-gold/15 shadow-2xl overflow-hidden hidden md:block"
            >
              <div className="max-w-7xl mx-auto px-8 py-10 grid grid-cols-5 gap-6 text-left">
                {sitemapData.map((category) => (
                  <div key={category.title} className="flex flex-col gap-4">
                    <h4 className="font-serif text-[18.75px] font-bold text-brand-brown border-b border-brand-gold/25 pb-2 mb-1">
                      {category.title}
                    </h4>
                    <ul className="flex flex-col gap-3">
                      {category.items.map((item) => (
                        <li key={item.name} className="flex flex-col">
                          <a 
                            href={item.href}
                            onClick={() => setIsSitemapOpen(false)}
                            className="text-[14.73px] lg:text-[16.48px] font-semibold text-brand-brown/95 hover:text-brand-sage transition-colors leading-normal"
                          >
                            {item.name}
                          </a>
                          
                          {/* 3rd Level Menu items under 다음세대, 하나님사랑, 이웃사랑 */}
                          {item.subItems && item.subItems.length > 0 && (
                            <ul className="pl-2 border-l border-brand-gold/15 flex flex-col gap-1.5 mt-1.5 mb-1">
                              {item.subItems.map((sub) => {
                                const isNextGenSub = category.title === '공동체' && item.name === '다음세대';
                                const isNeighborSub = category.title === '사역과양육' && item.name === '이웃사랑';
                                const isGodsLoveSub = category.title === '사역과양육' && item.name === '하나님사랑';

                                const idxMap: Record<string, number> = {
                                  '유아부': 0, '유치부': 1, '초등부': 2, '청소년부': 3, '청년부': 4
                                };
                                const neighborIdxMap: Record<string, number> = {
                                  '사랑나눔박스': 0, '뮤직아카데미': 1, '행복한대학': 2, '결혼예비학교': 3
                                };
                                const godsLoveIdxMap: Record<string, number> = {
                                  '제자반/사역반': 0, '성경대학': 1, '온라인 독서모임': 2, '마더와이즈/파더와이즈': 3
                                };

                                const subHref = isNextGenSub && idxMap[sub] !== undefined 
                                  ? `#nextgen/${idxMap[sub]}` 
                                  : isNeighborSub && neighborIdxMap[sub] !== undefined
                                  ? `#이웃사랑/${neighborIdxMap[sub]}`
                                  : isGodsLoveSub && godsLoveIdxMap[sub] !== undefined
                                  ? `#하나님사랑/${godsLoveIdxMap[sub]}`
                                  : item.href;

                                return (
                                  <li key={sub}>
                                    <a 
                                      href={subHref}
                                      onClick={() => {
                                        setIsSitemapOpen(false);
                                        if (isNextGenSub && idxMap[sub] !== undefined) {
                                          setSelectedNextGen(idxMap[sub]);
                                          setNextGenIndex(idxMap[sub]);
                                        }
                                      }}
                                      className="text-[13.6px] text-brand-brown/80 hover:text-brand-sage transition-colors block leading-tight font-normal"
                                    >
                                      • {sub}
                                    </a>
                                  </li>
                                );
                              })}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Nav (With structured sitemap) */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-brand-cream border-b border-brand-gold/20 py-6 px-6 md:hidden flex flex-col gap-4 shadow-xl overflow-y-auto max-h-[85vh] text-left"
            >
              {sitemapData.map((category) => (
                <div key={category.title} className="flex flex-col gap-2 border-b border-brand-gold/10 pb-3 last:border-b-0">
                  <span className="text-[20.85px] font-serif font-bold text-brand-brown">
                    {category.title}
                  </span>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-3 mt-1 pl-2">
                    {category.items.map((item) => (
                      <div key={item.name} className="flex flex-col gap-1">
                        {category.title === '공동체' && item.name === '다음세대' ? (
                          <span className="text-[15.64px] font-semibold text-brand-brown/80">
                            {item.name}
                          </span>
                        ) : (
                          <a 
                            href={item.href} 
                            onClick={() => setIsMenuOpen(false)} 
                            className="text-[15.64px] font-semibold text-brand-brown/80 active:text-brand-sage hover:text-brand-sage"
                          >
                            {item.name}
                          </a>
                        )}
                        {item.subItems && (
                          <div className="flex flex-wrap gap-1.5 mt-1 text-[13.03px] text-brand-brown/50 pl-1.5 border-l border-brand-gold/20 leading-tight">
                            {item.subItems.map((sub, sIdx) => {
                              const isNextGenSub = category.title === '공동체' && item.name === '다음세대';
                              const isNeighborSub = category.title === '사역과양육' && item.name === '이웃사랑';
                              const isGodsLoveSub = category.title === '사역과양육' && item.name === '하나님사랑';

                              const idxMap: Record<string, number> = {
                                '유아부': 0, '유치부': 1, '초등부': 2, '청소년부': 3, '청년부': 4
                              };
                              const neighborIdxMap: Record<string, number> = {
                                '사랑나눔박스': 0, '뮤직아카데미': 1, '행복한대학': 2, '결혼예비학교': 3
                              };
                              const godsLoveIdxMap: Record<string, number> = {
                                '제자반/사역반': 0, '성경대학': 1, '온라인 독서모임': 2, '마더와이즈/파더와이즈': 3
                              };

                              const subHref = isNextGenSub && idxMap[sub] !== undefined 
                                ? `#nextgen/${idxMap[sub]}` 
                                : isNeighborSub && neighborIdxMap[sub] !== undefined
                                ? `#이웃사랑/${neighborIdxMap[sub]}`
                                : isGodsLoveSub && godsLoveIdxMap[sub] !== undefined
                                ? `#하나님사랑/${godsLoveIdxMap[sub]}`
                                : item.href;

                              return (
                                <a 
                                  key={sub}
                                  href={subHref}
                                  onClick={() => {
                                    setIsMenuOpen(false);
                                    if (isNextGenSub && idxMap[sub] !== undefined) {
                                      setSelectedNextGen(idxMap[sub]);
                                      setNextGenIndex(idxMap[sub]);
                                    }
                                  }}
                                  className="text-[13.03px] text-brand-brown/65 active:text-brand-sage hover:text-brand-sage underline decoration-brand-gold/20"
                                >
                                  {sub}
                                </a>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <button 
                onClick={() => {
                  setIsMenuOpen(false);
                  window.location.hash = '#새가족안내';
                }}
                className="bg-brand-brown text-brand-cream w-full py-3.5 rounded-full text-[17.71px] font-semibold hover:bg-brand-sage transition-all mt-2"
              >
                새가족 안내
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {isChurchIntroActive ? (
        <div className="min-h-screen bg-brand-cream/40 font-sans pb-16 pt-[88px] md:pt-[100px] subpage-shell">
          <style dangerouslySetInnerHTML={{ __html: `
            @media (max-width: 767px) {
              .church-intro-scale .text-xs { font-size: calc(0.75rem * 1.08) !important; }
              .church-intro-scale .text-sm { font-size: calc(0.875rem * 1.08) !important; }
              .church-intro-scale .text-base { font-size: calc(1rem * 1.08) !important; }
              .church-intro-scale .text-lg { font-size: calc(1.125rem * 1.08) !important; }
              .church-intro-scale .text-xl { font-size: calc(1.25rem * 1.08) !important; }
              .church-intro-scale .text-2xl { font-size: calc(1.5rem * 1.08) !important; }
              .church-intro-scale .text-3xl { font-size: calc(1.875rem * 1.08) !important; }
              .church-intro-scale [class*="text-[11px]"] { font-size: calc(11px * 1.08) !important; }
              .church-intro-scale [class*="text-[13.2px]"] { font-size: calc(13.2px * 1.08) !important; }
              .church-intro-scale [class*="text-[13.8px]"] { font-size: calc(13.8px * 1.08) !important; }
              .church-intro-scale [class*="text-[14.4px]"] { font-size: calc(14.4px * 1.08) !important; }
              .church-intro-scale [class*="text-[15.8px]"] { font-size: calc(15.8px * 1.08) !important; }
              .church-intro-scale [class*="text-[16.8px]"] { font-size: calc(16.8px * 1.08) !important; }
              .church-intro-scale [class*="text-[18px]"] { font-size: calc(18px * 1.08) !important; }
              .church-intro-scale [class*="text-[20px]"] { font-size: calc(20px * 1.08) !important; }
              .church-intro-scale [class*="text-[21.6px]"] { font-size: calc(21.6px * 1.08) !important; }
              .church-intro-scale [class*="text-[24px]"] { font-size: calc(24px * 1.08) !important; }
            }
            @media (min-width: 768px) {
              .church-intro-scale .text-xs { font-size: calc(0.75rem * 1.10) !important; }
              .church-intro-scale .text-sm { font-size: calc(0.875rem * 1.10) !important; }
              .church-intro-scale .text-base { font-size: calc(1rem * 1.10) !important; }
              .church-intro-scale .text-lg:not(h3):not(h2) { font-size: calc(1.125rem * 1.10) !important; }
              .church-intro-scale [class*="text-[11px]"] { font-size: calc(11px * 1.10) !important; }
              .church-intro-scale [class*="text-[12px]"] { font-size: calc(12px * 1.10) !important; }
              .church-intro-scale [class*="text-[12.65px]"] { font-size: calc(12.65px * 1.10) !important; }
              .church-intro-scale [class*="text-[13.2px]"] { font-size: calc(13.2px * 1.10) !important; }
              .church-intro-scale [class*="text-[13.8px]"] { font-size: calc(13.8px * 1.10) !important; }
              .church-intro-scale [class*="text-[14.4px]"] { font-size: calc(14.4px * 1.10) !important; }
              .church-intro-scale [class*="text-[15px]"]:not(h3):not(h2) { font-size: calc(15px * 1.10) !important; }
              .church-intro-scale [class*="text-[15.8px]"]:not(h3):not(h2) { font-size: calc(15.8px * 1.10) !important; }
              .church-intro-scale [class*="text-[16px]"]:not(h3):not(h2) { font-size: calc(16px * 1.10) !important; }
              .church-intro-scale [class*="text-[16.8px]"]:not(h3):not(h2):not(button):not(a) { font-size: calc(16.8px * 1.10) !important; }
              .church-intro-scale [class*="text-[17.2px]"]:not(h3):not(h2) { font-size: calc(17.2px * 1.10) !important; }
              .church-intro-scale .intro-body-text { font-size: calc(0.875rem * 1.10) !important; }
            }
          `}} />
          {/* Hero Section Container */}
          <div className="subpage-hero relative h-[45vh] md:h-[30vh] w-full overflow-hidden">
            <img 
              src="./images/tree.png" 
              alt="tree" 
              className="w-full h-full object-cover brightness-[0.7]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end">
              <div className="max-w-7xl mx-auto w-full px-6 pb-8 md:pb-12 flex justify-between items-end">
                <div className="text-left">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-brand-sage text-white text-[13.2px] font-bold tracking-wider mb-2">
                    ABOUT OUR CHURCH
                  </span>
                  <h1 className="text-3xl md:text-5xl font-serif text-white font-bold leading-tight mb-2">
                    영신교회 소개
                  </h1>
                  <p className="hidden md:block text-white/85 text-[15.8px] md:text-[18.5px] font-light max-w-[1200px] leading-relaxed w-full">
                    하나님의 말씀을 중심으로 예배하고 양육하며 지역과 세대를 함께 세우는 은혜의 공동체입니다.
                  </p>
                </div>
                <button 
                  onClick={() => { window.location.hash = ''; }}
                  className="md:hidden flex items-center gap-1 text-white/90 hover:text-white text-[13.8px] font-medium shrink-0 mb-1 pb-1 border-b border-white/20 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 shrink-0" />
                  <span>뒤로 가기</span>
                </button>
              </div>
            </div>
          </div>

          {/* Subpage Contents Grid */}
          <div className="max-w-7xl mx-auto px-6 mt-10 md:mt-12">
            {/* Back button and Breadcrumb */}
            <div className="hidden md:flex mb-6 md:mb-6 flex-wrap items-center justify-between gap-x-4 gap-y-1.5 md:gap-4">
              <button 
                onClick={() => { window.location.hash = ''; }}
                className="text-brand-sage hover:text-brand-brown text-sm font-medium inline-flex items-center gap-1 cursor-pointer overflow-hidden leading-none border-none bg-transparent py-1 px-0"
              >
                <ChevronLeft className="w-4 h-4 shrink-0" />
                <span>메인 화면으로 돌아가기</span>
              </button>
              
              <div className="text-[13.2px] text-brand-brown/50 font-medium">
                교회소개 &gt; <span className="text-brand-sage">영신교회</span>
              </div>
            </div>

            {/* Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Quick Navigation Links or sidebar info card */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-transparent md:bg-white p-0 md:p-6 rounded-[2rem] border-none md:border border-brand-gold/15 shadow-none md:shadow-sm text-left">
                  <div className="flex md:flex-col gap-1 md:gap-2 p-1.5 md:p-0 bg-brand-cream/80 md:bg-transparent border border-brand-gold/15 md:border-none rounded-2xl md:rounded-none shadow-sm md:shadow-none w-full overflow-x-auto pb-1.5 md:pb-0">
                    <button
                      onClick={() => { window.location.hash = '#영신교회'; }}
                      className="flex-1 md:w-full text-center md:text-left py-3 md:py-2.5 px-4 rounded-xl text-[13.8px] md:text-[13.8px] sm:text-sm font-semibold md:font-medium transition-all cursor-pointer whitespace-nowrap bg-brand-sage text-white shadow-md shadow-brand-sage/20 border border-brand-sage"
                    >
                      영신교회
                    </button>
                    <button
                      onClick={() => { window.location.hash = '#예배안내'; }}
                      className="flex-1 md:w-full text-center md:text-left py-3 md:py-2.5 px-4 rounded-xl text-[13.8px] md:text-[13.8px] sm:text-sm font-semibold md:font-medium transition-all cursor-pointer whitespace-nowrap text-brand-brown/80 hover:text-brand-sage hover:bg-brand-sage/5 bg-transparent border-none md:bg-brand-cream/10 md:text-brand-brown md:border md:border-brand-gold/10 md:hover:border-brand-sage md:hover:bg-brand-cream/30 md:shadow-none"
                    >
                      예배안내
                    </button>
                    <button
                      onClick={() => { window.location.hash = '#오시는길'; }}
                      className="flex-1 md:w-full text-center md:text-left py-3 md:py-2.5 px-4 rounded-xl text-[13.8px] md:text-[13.8px] sm:text-sm font-semibold md:font-medium transition-all cursor-pointer whitespace-nowrap text-brand-brown/80 hover:text-brand-sage hover:bg-brand-sage/5 bg-transparent border-none md:bg-brand-cream/10 md:text-brand-brown md:border md:border-brand-gold/10 md:hover:border-brand-sage md:hover:bg-brand-cream/30 md:shadow-none"
                    >
                      오시는 길
                    </button>
                  </div>
                </div>

              </div>

              {/* Right Column: Key Church Info (Pastor greeting, Intro, Vision, History) */}
              <div className="lg:col-span-8 space-y-6">
                {/* 담임목사 인사말 Card */}
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-brand-gold/15 shadow-sm text-left hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-brand-sage/10 text-brand-sage rounded-2xl">
                      <Heart className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-brown">담임목사 인사말</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    {/* 왼편: 목사님 사진 */}
                    <div className="md:col-span-4 flex flex-col items-center">
                      <div className="w-full aspect-[3/4] rounded-2xl overflow-hidden border border-brand-gold/15 shadow-sm">
                        <img 
                          src="./images/0.jpg" 
                          alt="영신교회 담임목사 김상호" 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="mt-3 text-center">
                        <p className="font-serif text-[15px] font-bold text-brand-brown">김상호 담임목사</p>
                        <p className="text-[12.65px] md:text-[11px] text-brand-brown/50">영신교회 담임목사</p>
                      </div>
                    </div>
                    
                    {/* 오른편: 인사말 */}
                    <div className="md:col-span-8 space-y-4">
                      <h4 className="font-serif text-[16px] md:text-lg font-bold text-brand-brown leading-snug">
                        "하나님의 평화와 축복이 여러분의 삶과 가정에 <br />
                        늘 가득하시기를 소망합니다."
                      </h4>
                      <p className="text-xs md:text-sm text-brand-brown/85 font-light leading-relaxed whitespace-pre-line intro-body-text">
                        영신교회는 믿음의 길을 걸어가는 교회입니다. 같은 말, 같은 마음, 같은 뜻으로 기성세대들이 걸어가는 믿음의 길을 따라 가는 다음세대들에게 예수님만이 진리이며 결론임을 증명하려 힘쓰는 교회입니다. 우리의 행동지침은“복음”을 쉬지 않고 전하는 교회,“성장”을 멈추지 않는 교회,“가치”를 알고, 행동하는 교회가 되는 것입니다. 사람을 행복하게 함으로 하나님을 기쁘시게 하는 것이 우리들의 사명이요. 꿈입니다. 이것이 영신교회의 존재 이유입니다. 예수님을 알아감으로 예수님을 닮아감으로 하나님을 사랑하고, 사람을 사랑하여 하나님을 감동시켜 드리는 것. 즉, 사람을 행복하게 함으로 하나님을 사랑하는 것입니다. 이를 위해, 지역을 섬기고, 가정과 다음 세대를 세우는 일에 최우선으로 할 것입니다.
                      </p>
                      <p className="text-right font-serif text-xs md:text-sm text-brand-brown font-semibold mt-4">
                        영신교회 담임목사 <span className="text-[15px] font-bold text-brand-brown">김상호</span> 드림
                      </p>
                    </div>
                  </div>
                </div>

                {/* 1. 교회 소개 Card */}
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-brand-gold/15 shadow-sm text-left hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-brand-sage/10 text-brand-sage rounded-2xl">
                      <Church className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-brown">교회 소개</h3>
                  </div>
                  <p className="text-xs md:text-sm text-brand-brown/85 font-light leading-relaxed whitespace-pre-line intro-body-text">
                    영신교회는 하나님의 말씀을 중심으로 예배하고, 양육하고, 섬기는 공동체입니다. 예배와 교육, 교제와 봉사를 통해 지역과 세대를 세우는 교회가 되기를 지향합니다.
                  </p>
                </div>

                {/* 1.5 교역자 소개 Card */}
                <div className="bg-transparent md:bg-white p-0 md:p-8 rounded-[2rem] border-none md:border md:border-brand-gold/15 shadow-none md:shadow-sm text-left md:hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-brand-sage/10 text-brand-sage rounded-2xl">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-brown">교역자 소개</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                    {(() => {
                      const staffMembers = [
                        { name: "김성호 목사", role: "협동목사", dept: "교육총괄 / 뮤직아카데미", img: "./images/0-0.jpg", href: "#이웃사랑/1" },
                        { name: "조은찬 목사", role: "부목사", dept: "행정 / 교구", img: "./images/1.jpg", href: "#작은교회" },
                        { name: "김호준 목사", role: "부목사", dept: "초등부 / 행복한대학 / 교구", img: "./images/2.jpg", href: "#nextgen/2", nextGenIdx: 2 },
                        { name: "손창성 전도사", role: "교육전도사", dept: "중고등부", img: "./images/3.jpg", href: "#nextgen/3", nextGenIdx: 3 },
                        { name: "김진영 전도사", role: "교육전도사", dept: "유치부", img: "./images/4.jpg", href: "#nextgen/1", nextGenIdx: 1 },
                        { name: "허승욱 전도사", role: "교육전도사", dept: "새가족 / 중보기도", img: "./images/5.jpg", href: "#새가족안내" },
                        { name: "김혜민 전도사", role: "찬양전도사", dept: "예배부", img: "./images/6.jpg" },
                        { name: "박혜연 디렉터", role: "디렉터", dept: "유아부 / 영상", img: "./images/7.jpg", href: "#nextgen/0", nextGenIdx: 0 },
                        { name: "차민경 디렉터", role: "디렉터", dept: "카페쉼 / 디자인", img: "./images/1.jpg" }
                      ];

                      return staffMembers.map((staff, idx) => {
                        const isLink = !!staff.href;

                        return (
                          <div key={idx} className="flex flex-col items-center bg-brand-cream/10 p-3 rounded-2xl border border-brand-gold/10 hover:border-brand-sage/30 transition-all text-center">
                            {isLink ? (
                              <a 
                                href={staff.href}
                                onClick={(e) => {
                                  if (windowWidth < 768) {
                                    if (activeStaffMobileIdx !== idx) {
                                      e.preventDefault();
                                      setActiveStaffMobileIdx(idx);
                                    } else {
                                      if (staff.nextGenIdx !== undefined) {
                                        setSelectedNextGen(staff.nextGenIdx);
                                        setNextGenIndex(staff.nextGenIdx);
                                      }
                                      setActiveStaffMobileIdx(null);
                                    }
                                  } else {
                                    if (staff.nextGenIdx !== undefined) {
                                      setSelectedNextGen(staff.nextGenIdx);
                                      setNextGenIndex(staff.nextGenIdx);
                                    }
                                  }
                                }}
                                className="w-[115%] md:w-full aspect-[3/4] rounded-xl overflow-hidden border border-brand-gold/15 mb-3 bg-brand-cream/20 relative group block cursor-pointer"
                              >
                                {staff.img ? (
                                  <img 
                                    src={staff.img} 
                                    alt={staff.name} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    referrerPolicy="no-referrer"
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center text-brand-brown/30 bg-brand-cream/30">
                                    <Users className="w-8 h-8 stroke-[1]" />
                                  </div>
                                )}
                                <div className={`absolute inset-0 bg-black/55 flex items-center justify-center transition-opacity duration-300 ${
                                  activeStaffMobileIdx === idx ? 'opacity-100' : 'opacity-0 md:group-hover:opacity-100'
                                }`}>
                                  <span className="text-white text-[11px] font-semibold text-center leading-tight px-2 py-1 bg-brand-sage rounded shadow-sm">
                                    담당 사역 이동
                                  </span>
                                </div>
                              </a>
                            ) : (
                              <div className="w-[115%] md:w-full aspect-[3/4] rounded-xl overflow-hidden border border-brand-gold/15 mb-3 bg-brand-cream/20 relative">
                                {staff.img ? (
                                  <img 
                                    src={staff.img} 
                                    alt={staff.name} 
                                    className="w-full h-full object-cover"
                                    referrerPolicy="no-referrer"
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center text-brand-brown/30 bg-brand-cream/30">
                                    <Users className="w-8 h-8 stroke-[1]" />
                                  </div>
                                )}
                              </div>
                            )}
                            <p className="font-serif text-[17.2px] font-bold text-brand-brown leading-tight">{staff.name}</p>
                            <p className="text-[13.2px] text-brand-sage font-semibold mt-1">{staff.role}</p>
                            <p className="text-[12px] text-brand-brown/50 mt-0.5">{staff.dept}</p>
                          </div>
                        );
                      });
                    })()}
                  </div>
                </div>

                {/* 2. 교회 비전 Card */}
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-brand-gold/15 shadow-sm text-left hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-2xl">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-brown">교회 비전 및 철학</h3>
                  </div>
                  <ul className="space-y-4">
                    <li className="flex gap-4 items-start">
                      <span className="w-6 h-6 rounded-full bg-brand-sage/10 text-brand-sage flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
                      <div>
                        <h4 className="text-[13.2px] md:text-[15.4px] font-semibold text-brand-brown">복음으로 사는 교회</h4>
                        <p className="text-[12px] md:text-[13.2px] text-brand-brown/70 leading-relaxed mt-0.5">영신교회는 “복음”을 쉬지 않고 전하는 교회, “성장”을 멈추지 않는 교회, “가치”를 발견하고, “행동”하는 교회, “소통”하는 교회가 되어, 하나님께 영광 돌려드리는 것입니다. 이 일을 위해 예배, 양육, 전파, 교제에 대한 사역을 통해 “하나님”을 사랑하고, 하나님이 가장 사랑한 “사람”을 사랑하는 것이 영신교회의 비전입니다. 이를 위해 지역을 섬기고, 건강하고 행복한 가정, 다음 세대를 세우는 일에 힘을 쏟는 교회입니다.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="w-6 h-6 rounded-full bg-brand-sage/10 text-brand-sage flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
                      <div>
                        <h4 className="text-[13.2px] md:text-[15.4px] font-semibold text-brand-brown">다음 세대를 세우는 교회</h4>
                        <p className="text-[12px] md:text-[13.2px] text-brand-brown/70 leading-relaxed mt-0.5">우리는 복음으로 인해 바른 믿음을 세워감으로써 하나님의 사람이라는 정체성과 옳은 것에 대한 분별력을 갖고, 하나님 나라의 비전을 품을 수 있도록 돕겠습니다.하나님의 마음으로 양육하고 돌보겠습니다.

[골1:28-29]”우리가 그를 전파하여 각 사람을 권하고 모든 지혜로 각 사람을 가르침은 각 사람을 그리스도 안에서 완전한 자로 세우려 함이니, 이를 위하여 나도 내 속에서 능력으로 역사하시는 이의 역사를 따라 힘을 다하여 수고하노라”</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="w-6 h-6 rounded-full bg-brand-sage/10 text-brand-sage flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
                      <div>
                        <h4 className="text-[13.2px] md:text-[15.4px] font-semibold text-brand-brown">건강한 가정을 세우는 교회</h4>
                        <p className="text-[12px] md:text-[13.2px] text-brand-brown/70 leading-relaxed mt-0.5">우리는 가정이 하나님이 주신 가장 귀한 선물임을 확신합니다. 건강한 가정을 위해서는 소통의 마음과 배움의 애씀이 있어야 합니다. 복음 안에서 나와 너를 이해할 때, 건강한 가정을 이룰 수 있습니다. 하나님이 함께 하시는 건강한 가정이 세워지기를 소망합니다.</p>
                      </div>
                    </li>
                  </ul>
                </div>

              </div>

            </div>
          </div>
        </div>
      ) : isWorshipGuideActive ? (
         <div className="min-h-screen bg-brand-cream/40 font-sans pb-16 pt-[88px] md:pt-[100px] subpage-shell">
          <style dangerouslySetInnerHTML={{ __html: `
            @media (max-width: 767px) {
              .worship-guide-scale .text-xs { font-size: calc(0.75rem * 1.15) !important; }
              .worship-guide-scale .text-sm { font-size: calc(0.875rem * 1.15) !important; }
              .worship-guide-scale .text-base { font-size: calc(1rem * 1.15) !important; }
              .worship-guide-scale .text-lg { font-size: calc(1.125rem * 1.15) !important; }
              .worship-guide-scale .text-xl { font-size: calc(1.25rem * 1.15) !important; }
              .worship-guide-scale .text-2xl { font-size: calc(1.5rem * 1.15) !important; }
              .worship-guide-scale .text-3xl { font-size: calc(1.875rem * 1.15) !important; }
              .worship-guide-scale [class*="text-[11px]"] { font-size: calc(11px * 1.15) !important; }
              .worship-guide-scale [class*="text-[13.2px]"] { font-size: calc(13.2px * 1.15) !important; }
              .worship-guide-scale [class*="text-[13.8px]"] { font-size: calc(13.8px * 1.15) !important; }
              .worship-guide-scale [class*="text-[12.65px]"] { font-size: calc(12.65px * 1.15) !important; }
              .worship-guide-scale [class*="text-[14.4px]"] { font-size: calc(14.4px * 1.15) !important; }
            }
            @media (min-width: 768px) {
              .worship-guide-scale .text-xs { font-size: calc(0.75rem * 1.10) !important; }
              .worship-guide-scale .text-sm { font-size: calc(0.875rem * 1.10) !important; }
              .worship-guide-scale .text-base { font-size: calc(1rem * 1.10) !important; }
              .worship-guide-scale .text-lg:not(h3):not(h2) { font-size: calc(1.125rem * 1.10) !important; }
              .worship-guide-scale [class*="text-[11px]"] { font-size: calc(11px * 1.10) !important; }
              .worship-guide-scale [class*="text-[12px]"] { font-size: calc(12px * 1.10) !important; }
              .worship-guide-scale [class*="text-[12.65px]"] { font-size: calc(12.65px * 1.10) !important; }
              .worship-guide-scale [class*="text-[13.2px]"] { font-size: calc(13.2px * 1.10) !important; }
              .worship-guide-scale [class*="text-[13.8px]"] { font-size: calc(13.8px * 1.10) !important; }
              .worship-guide-scale [class*="text-[14.4px]"] { font-size: calc(14.4px * 1.10) !important; }
              .worship-guide-scale [class*="text-[15.4px]"]:not(h3):not(h2) { font-size: calc(15.4px * 1.10) !important; }
            }
          `}} />
          {/* Hero Section Container */}
          <div className="subpage-hero relative h-[45vh] md:h-[30vh] w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2640&auto=format&fit=crop" 
              alt="예배당 내부와 촛불 조명, 성스럽고 차분한 분위기" 
              className="w-full h-full object-cover brightness-[0.7]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end">
              <div className="max-w-7xl mx-auto w-full px-6 pb-8 md:pb-12 flex justify-between items-end">
                <div className="text-left">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-brand-gold text-brand-brown text-[11px] font-bold tracking-wider mb-2 font-sans">
                    WORSHIP GUIDE
                  </span>
                  <h1 className="text-3xl md:text-5xl font-serif text-white font-bold leading-tight mb-2">
                    예배 안내
                  </h1>
                  <p className="hidden md:block text-white/85 text-[13.2px] md:text-[15.4px] font-light max-w-[1200px] leading-relaxed w-full">
                    영신교회는 언제나 열려있습니다. 기쁨과 은총이 넘치는 주님의 성전으로 여러분을 초대합니다.
                  </p>
                </div>
                <button 
                  onClick={() => { window.location.hash = ''; }}
                  className="md:hidden flex items-center gap-1 text-white/90 hover:text-white text-[13.8px] font-medium shrink-0 mb-1 pb-1 border-b border-white/20 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 shrink-0" />
                  <span>뒤로 가기</span>
                </button>
              </div>
            </div>
          </div>

          {/* Subpage Contents Grid */}
          <div className="max-w-7xl mx-auto px-6 mt-10 md:mt-12">
            {/* Back button and Breadcrumb */}
            <div className="hidden md:flex mb-6 md:mb-6 flex-wrap items-center justify-between gap-x-4 gap-y-1.5 md:gap-4">
              <button 
                onClick={() => { window.location.hash = ''; }}
                className="text-brand-sage hover:text-brand-brown text-sm font-medium inline-flex items-center gap-1 cursor-pointer overflow-hidden leading-none border-none bg-transparent py-1 px-0"
              >
                <ChevronLeft className="w-4 h-4 shrink-0" />
                <span>메인 화면으로 돌아가기</span>
              </button>
              
              <div className="text-[13.2px] text-brand-brown/50 font-medium font-sans">
                교회소개 &gt; <span className="text-brand-sage">예배안내</span>
              </div>
            </div>

            {/* Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Quick Navigation Links or sidebar info card */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-transparent md:bg-white p-0 md:p-6 rounded-[2rem] border-none md:border border-brand-gold/15 shadow-none md:shadow-sm text-left">
                  <div className="flex md:flex-col gap-1 md:gap-2 p-1.5 md:p-0 bg-brand-cream/80 md:bg-transparent border border-brand-gold/15 md:border-none rounded-2xl md:rounded-none shadow-sm md:shadow-none w-full overflow-x-auto pb-1.5 md:pb-0">
                    <button
                      onClick={() => { window.location.hash = '#영신교회'; }}
                      className="flex-1 md:w-full text-center md:text-left py-3 md:py-2.5 px-4 rounded-xl text-[13.8px] md:text-[13.8px] sm:text-sm font-semibold md:font-medium transition-all cursor-pointer whitespace-nowrap text-brand-brown/80 hover:text-brand-sage hover:bg-brand-sage/5 bg-transparent border-none md:bg-brand-cream/10 md:text-brand-brown md:border md:border-brand-gold/10 md:hover:border-brand-sage md:hover:bg-brand-cream/30 md:shadow-none"
                    >
                      영신교회
                    </button>
                    <button
                      onClick={() => { window.location.hash = '#예배안내'; }}
                      className="flex-1 md:w-full text-center md:text-left py-3 md:py-2.5 px-4 rounded-xl text-[13.8px] md:text-[13.8px] sm:text-sm font-semibold md:font-medium transition-all cursor-pointer whitespace-nowrap bg-brand-sage text-white shadow-md shadow-brand-sage/20 border border-brand-sage"
                    >
                      예배안내
                    </button>
                    <button
                      onClick={() => { window.location.hash = '#오시는길'; }}
                      className="flex-1 md:w-full text-center md:text-left py-3 md:py-2.5 px-4 rounded-xl text-[13.8px] md:text-[13.8px] sm:text-sm font-semibold md:font-medium transition-all cursor-pointer whitespace-nowrap text-brand-brown/80 hover:text-brand-sage hover:bg-brand-sage/5 bg-transparent border-none md:bg-brand-cream/10 md:text-brand-brown md:border md:border-brand-gold/10 md:hover:border-brand-sage md:hover:bg-brand-cream/30 md:shadow-none"
                    >
                      오시는 길
                    </button>
                  </div>
                </div>


              </div>

              {/* Right Column: Worship Schedules */}
              <div className="lg:col-span-8 space-y-6">
                {/* 1. 주일 예배 Card */}
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-brand-gold/15 shadow-sm text-left hover:shadow-md transition-all">
                  <div className="flex items-center justify-between gap-3 mb-4 w-full">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-brand-sage/10 text-brand-sage rounded-2xl">
                        <Calendar className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-brown">주일 예배</h3>
                    </div>
                    <div className="flex items-center gap-1 text-brand-brown/60">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span className="text-[12.65px] md:text-[14.4px] font-sans font-medium">교회2층 본당</span>
                    </div>
                  </div>
                  
                  <div className="divide-y divide-brand-gold/10 font-sans">
                    <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center justify-between sm:justify-start gap-3 w-full sm:w-auto">
                        <div className="flex items-center gap-3">
                          <span className="px-2.5 py-1 text-xs font-semibold rounded bg-brand-sage/10 text-brand-sage shrink-0">1부 예배</span>
                          <span className="text-sm md:text-base font-semibold text-brand-brown">주일 오전 예배</span>
                        </div>
                        <span className="sm:hidden text-xs font-bold bg-brand-cream px-2 py-1 rounded text-brand-brown/85 whitespace-nowrap">오전 9:30분</span>
                      </div>
                      <div className="hidden sm:flex items-center text-brand-brown/85">
                        <span className="text-xs md:text-sm font-bold bg-brand-cream px-2 py-1 rounded">오전 9:30분</span>
                      </div>
                    </div>
                    
                    <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center justify-between sm:justify-start gap-3 w-full sm:w-auto">
                        <div className="flex items-center gap-3">
                          <span className="px-2.5 py-1 text-xs font-semibold rounded bg-brand-gold/10 text-brand-gold shrink-0">2부 예배</span>
                          <span className="text-sm md:text-base font-semibold text-brand-brown">주일 오전 예배</span>
                        </div>
                        <span className="sm:hidden text-xs font-bold bg-brand-cream px-2 py-1 rounded text-brand-brown/85 whitespace-nowrap">오전 11:30분</span>
                      </div>
                      <div className="hidden sm:flex items-center text-brand-brown/85">
                        <span className="text-xs md:text-sm font-bold bg-brand-cream px-2 py-1 rounded">오전 11:30분</span>
                      </div>
                    </div>

                    <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center justify-between sm:justify-start gap-3 w-full sm:w-auto">
                        <div className="flex items-center gap-3">
                          <span className="px-2.5 py-1 text-xs font-semibold rounded bg-brand-sage/10 text-brand-sage shrink-0">청년부</span>
                          <span className="text-sm md:text-base font-semibold text-brand-brown">주일 오후 모임</span>
                        </div>
                        <span className="sm:hidden text-xs font-bold bg-brand-cream px-2 py-1 rounded text-brand-brown/85 whitespace-nowrap">오후 1:30분</span>
                      </div>
                      <div className="hidden sm:flex items-center text-brand-brown/85">
                        <span className="text-xs md:text-sm font-bold bg-brand-cream px-2 py-1 rounded">오후 1:30분</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. 주중 예배 Card */}
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-brand-gold/15 shadow-sm text-left hover:shadow-md transition-all">
                  <div className="flex items-center justify-between gap-2 mb-4 w-full">
                    <div className="flex items-center gap-2 min-w-0">
                      <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-2xl shrink-0">
                        <Clock className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-brown whitespace-nowrap">주중 예배</h3>
                    </div>
                    <div className="flex items-center gap-1 text-brand-brown/60 shrink-0">
                      <MapPin className="w-3.5 h-3.5 shrink-0" />
                      <span className="text-[12.65px] md:text-[14.4px] font-sans font-medium whitespace-nowrap">교회2층 본당</span>
                    </div>
                  </div>
                  
                  <div className="divide-y divide-brand-gold/10 font-sans">
                    <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center justify-start gap-3 w-full sm:w-auto">
                        <div className="flex items-center gap-3">
                          <span className="min-w-[84px] px-2.5 py-0.5 text-center text-[13.8px] md:text-xs font-semibold rounded bg-brand-brown/5 text-brand-brown/80 shrink-0 whitespace-nowrap">새벽기도회</span>
                          <span className="hidden sm:inline text-sm font-semibold text-brand-brown">매일 새벽 하늘 창을 여는 성회</span>
                        </div>
                        <span className="sm:hidden text-xs font-bold bg-brand-cream/80 px-2 py-1 rounded text-brand-sage whitespace-nowrap">매일 오전 5:30</span>
                      </div>
                      <div className="hidden sm:flex items-center text-brand-brown/85">
                        <span className="text-xs md:text-sm font-bold bg-brand-cream/80 px-2 py-1 rounded text-brand-sage">매일 오전 5:30</span>
                      </div>
                    </div>

                    <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center justify-start gap-3 w-full sm:w-auto">
                        <div className="flex items-center gap-3">
                          <span className="min-w-[84px] px-2.5 py-0.5 text-center text-[13.8px] md:text-xs font-semibold rounded bg-brand-brown/5 text-brand-brown/80 shrink-0 whitespace-nowrap">수요예배</span>
                          <span className="hidden sm:inline text-sm font-semibold text-brand-brown">삼일 묵상과 말씀 강해</span>
                        </div>
                        <span className="sm:hidden text-xs font-bold bg-brand-cream/80 px-2 py-1 rounded text-brand-sage whitespace-nowrap">수요일 오후 7:30</span>
                      </div>
                      <div className="hidden sm:flex items-center text-brand-brown/85">
                        <span className="text-xs md:text-sm font-bold bg-brand-cream/80 px-2 py-1 rounded text-brand-sage">수요일 오후 7:30</span>
                      </div>
                    </div>

                    <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div className="flex items-center justify-start gap-3 w-full sm:w-auto">
                        <div className="flex items-center gap-3">
                          <span className="min-w-[84px] px-2.5 py-0.5 text-center text-[13.8px] md:text-xs font-semibold rounded bg-brand-brown/5 text-brand-brown/80 shrink-0 whitespace-nowrap">금요기도회</span>
                          <span className="hidden sm:inline text-sm font-semibold text-brand-brown">찬양과 통성, 은혜와 성령의 밤</span>
                        </div>
                        <span className="sm:hidden text-xs font-bold bg-brand-cream/80 px-2 py-1 rounded text-brand-sage whitespace-nowrap">금요일 오후 8:30</span>
                      </div>
                      <div className="hidden sm:flex items-center text-brand-brown/85">
                        <span className="text-xs md:text-sm font-bold bg-brand-cream/80 px-2 py-1 rounded text-brand-sage">금요일 오후 8:30</span>
                      </div>
                    </div>
                  </div>
                </div>


              </div>

            </div>
          </div>
        </div>
      ) : isDirectionsActive ? (
        <div className="min-h-screen bg-brand-cream/40 font-sans pb-16 pt-[88px] md:pt-[100px] subpage-shell">
          <style dangerouslySetInnerHTML={{ __html: `
            @media (max-width: 767px) {
              .directions-scale .text-xs { font-size: calc(0.75rem * 1.08) !important; }
              .directions-scale .text-sm { font-size: calc(0.875rem * 1.08) !important; }
              .directions-scale .text-base { font-size: calc(1rem * 1.08) !important; }
              .directions-scale [class*="text-[11px]"] { font-size: calc(11px * 1.08) !important; }
              .directions-scale [class*="text-[13.2px]"] { font-size: calc(13.2px * 1.08) !important; }
              .directions-scale [class*="text-[13.8px]"] { font-size: calc(13.8px * 1.08) !important; }
              .directions-scale [class*="text-[14.4px]"] { font-size: calc(14.4px * 1.08) !important; }
            }
            @media (min-width: 768px) {
              .directions-scale .text-xs { font-size: calc(0.75rem * 1.10) !important; }
              .directions-scale .text-sm { font-size: calc(0.875rem * 1.10) !important; }
              .directions-scale .text-base { font-size: calc(1rem * 1.10) !important; }
              .directions-scale .text-lg:not(h3):not(h2) { font-size: calc(1.125rem * 1.10) !important; }
              .directions-scale [class*="text-[11px]"] { font-size: calc(11px * 1.10) !important; }
              .directions-scale [class*="text-[13.2px]"] { font-size: calc(13.2px * 1.10) !important; }
              .directions-scale [class*="text-[13.8px]"] { font-size: calc(13.8px * 1.10) !important; }
              .directions-scale [class*="text-[14.4px]"] { font-size: calc(14.4px * 1.10) !important; }
              .directions-scale .directions-address { font-size: calc(0.875rem * 1.12) !important; }
            }
          `}} />
          {/* Hero Section Container */}
          <div className="subpage-hero relative h-[45vh] md:h-[30vh] w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2640&auto=format&fit=crop" 
              alt="지도로 표현한 듯한 따스하고 길을 찾는 아늑한 가로수길 풍경" 
              className="w-full h-full object-cover brightness-[0.7]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end">
              <div className="max-w-7xl mx-auto w-full px-6 pb-8 md:pb-12 flex justify-between items-end">
                <div className="text-left">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-brand-sage text-white text-[11px] font-bold tracking-wider mb-2 font-sans">
                    LOCATION &amp; DIRECTIONS
                  </span>
                  <h1 className="text-3xl md:text-5xl font-serif text-white font-bold leading-tight mb-2">
                    오시는 길
                  </h1>
                  <p className="hidden md:block text-white/85 text-[13.2px] md:text-[15.4px] font-light max-w-[1200px] leading-relaxed w-full">
                    지역 주민과 성도님 누구나 편안하게 방문하실 수 있도록 자세히 안내합니다.
                  </p>
                </div>
                <button 
                  onClick={() => { window.location.hash = ''; }}
                  className="md:hidden flex items-center gap-1 text-white/90 hover:text-white text-[13.8px] font-medium shrink-0 mb-1 pb-1 border-b border-white/20 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 shrink-0" />
                  <span>뒤로 가기</span>
                </button>
              </div>
            </div>
          </div>

          {/* Subpage Contents Grid */}
          <div className="max-w-7xl mx-auto px-6 mt-10 md:mt-12">
            {/* Back button and Breadcrumb */}
            <div className="hidden md:flex mb-6 md:mb-6 flex-wrap items-center justify-between gap-x-4 gap-y-1.5 md:gap-4">
              <button 
                onClick={() => { window.location.hash = ''; }}
                className="text-brand-sage hover:text-brand-brown text-sm font-medium inline-flex items-center gap-1 cursor-pointer overflow-hidden leading-none border-none bg-transparent py-1 px-0"
              >
                <ChevronLeft className="w-4 h-4 shrink-0" />
                <span>메인 화면으로 돌아가기</span>
              </button>
              
              <div className="text-[13.2px] text-brand-brown/50 font-medium font-sans">
                교회소개 &gt; <span className="text-brand-sage">오시는 길</span>
              </div>
            </div>

            {/* Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Quick Navigation Links or sidebar info card */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-transparent md:bg-white p-0 md:p-6 rounded-[2rem] border-none md:border border-brand-gold/15 shadow-none md:shadow-sm text-left">
                  <div className="flex md:flex-col gap-1 md:gap-2 p-1.5 md:p-0 bg-brand-cream/80 md:bg-transparent border border-brand-gold/15 md:border-none rounded-2xl md:rounded-none shadow-sm md:shadow-none w-full overflow-x-auto pb-1.5 md:pb-0">
                    <button
                      onClick={() => { window.location.hash = '#영신교회'; }}
                      className="flex-1 md:w-full text-center md:text-left py-3 md:py-2.5 px-4 rounded-xl text-[13.8px] md:text-[13.8px] sm:text-sm font-semibold md:font-medium transition-all cursor-pointer whitespace-nowrap text-brand-brown/80 hover:text-brand-sage hover:bg-brand-sage/5 bg-transparent border-none md:bg-brand-cream/10 md:text-brand-brown md:border md:border-brand-gold/10 md:hover:border-brand-sage md:hover:bg-brand-cream/30 md:shadow-none"
                    >
                      영신교회
                    </button>
                    <button
                      onClick={() => { window.location.hash = '#예배안내'; }}
                      className="flex-1 md:w-full text-center md:text-left py-3 md:py-2.5 px-4 rounded-xl text-[13.8px] md:text-[13.8px] sm:text-sm font-semibold md:font-medium transition-all cursor-pointer whitespace-nowrap text-brand-brown/80 hover:text-brand-sage hover:bg-brand-sage/5 bg-transparent border-none md:bg-brand-cream/10 md:text-brand-brown md:border md:border-brand-gold/10 md:hover:border-brand-sage md:hover:bg-brand-cream/30 md:shadow-none"
                    >
                      예배안내
                    </button>
                    <button
                      onClick={() => { window.location.hash = '#오시는길'; }}
                      className="flex-1 md:w-full text-center md:text-left py-3 md:py-2.5 px-4 rounded-xl text-[13.8px] md:text-[13.8px] sm:text-sm font-semibold md:font-medium transition-all cursor-pointer whitespace-nowrap bg-brand-sage text-white shadow-md shadow-brand-sage/20 border border-brand-sage"
                    >
                      오시는 길
                    </button>
                  </div>
                </div>

                {/* Info block */}
                <div className="bg-[#8E9775] text-white p-6 rounded-[2rem] shadow-md text-left">
                  <Church className="w-8 h-8 mb-4 text-[#E2C799]" />
                  <h4 className="font-serif text-xl font-bold mb-2">교무행정실 연락처</h4>
                  <p className="text-[13.2px] md:text-xs text-white/95 leading-relaxed font-light">
                    전화 : 02-123-4567 <br />
                    방문 및 차량 등록, 장소 대여 안내 등 상세 내용은 행정실로 연락 주시기 바랍니다.
                  </p>
                </div>
              </div>

              {/* Right Column: Directions details */}
              <div className="lg:col-span-8 space-y-6">
                {/* 1. 교회 위치 Map Area (At the top as "상단 지도 영역") */}
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-brand-gold/15 shadow-sm text-left hover:shadow-md transition-all">
                  <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-brand-sage/10 text-brand-sage rounded-2xl">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-brown">교회위치</h3>
                    </div>

                    <button
                      onClick={handleCopyAddress}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-xl bg-brand-cream hover:bg-brand-sage hover:text-white text-brand-brown transition-all border border-brand-gold/20 active:scale-95 cursor-pointer"
                      title="주소 복사"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-brand-sage" />
                          <span>주소 복사 완료</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>주소 복사하기</span>
                        </>
                      )}
                    </button>
                  </div>

                  <div className="mb-4">
                    <p className="directions-address text-xs md:text-sm text-brand-brown font-medium">📍 서울특별시 양천구 목동로 19길 28 (영신교회)</p>
                  </div>

                  {/* Google maps interactive embedded iframe */}
                  <div className="w-full aspect-[16/9] bg-gray-100 rounded-2xl overflow-hidden border border-brand-gold/10 shadow-inner">
                    <iframe 
                      src="https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%96%91%EC%B2%9C%EA%B5%AC%20%EB%AA%A9%EB%8F%99%EB%A1%9C%2019%EA%B8%B8%2028&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                      className="w-full h-full border-0" 
                      allowFullScreen 
                      loading="lazy" 
                      title="영신교회 상세지도"
                      referrerPolicy="no-referrer"
                    ></iframe>
                  </div>
                </div>

                {/* 3. 대중교통 안내 Card */}
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-brand-gold/15 shadow-sm text-left hover:shadow-md transition-all">
                  <style dangerouslySetInnerHTML={{ __html: `
                    @media (max-width: 767px) {
                      .directions-transit-scale .text-xs { font-size: calc(0.75rem * 1.10) !important; }
                      .directions-transit-scale .text-sm { font-size: calc(0.875rem * 1.10) !important; }
                      .directions-transit-scale .text-base { font-size: calc(1rem * 1.10) !important; }
                      .directions-transit-scale .text-lg { font-size: calc(1.125rem * 1.10) !important; }
                      .directions-transit-scale [class*="text-[13.8px]"] { font-size: calc(13.8px * 1.10) !important; }
                      .directions-transit-scale [class*="text-[12.65px]"] { font-size: calc(12.65px * 1.10) !important; }
                    }
                    @media (min-width: 768px) {
                      .directions-transit-scale .text-xs { font-size: calc(0.75rem * 1.10) !important; }
                      .directions-transit-scale .text-sm { font-size: calc(0.875rem * 1.10) !important; }
                      .directions-transit-scale .text-base { font-size: calc(1rem * 1.10) !important; }
                      .directions-transit-scale .text-lg { font-size: calc(1.125rem * 1.10) !important; }
                      .directions-transit-scale [class*="text-[13.8px]"] { font-size: calc(13.8px * 1.10) !important; }
                      .directions-transit-scale [class*="text-[12.65px]"] { font-size: calc(12.65px * 1.10) !important; }
                    }
                  `}} />
                  <h4 className="font-serif text-lg font-bold text-brand-brown mb-4 border-b border-brand-gold/5 pb-2">대중교통 안내</h4>
                  
                  <div className="space-y-4 font-sans">
                    <div className="flex gap-4 items-start">
                      <div className="p-2 bg-brand-sage/10 text-brand-sage rounded-xl shrink-0">
                        <Train className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="text-[13.8px] md:text-sm font-semibold text-brand-brown">지하철</h5>
                        <p className="text-[12.65px] md:text-xs text-brand-brown/70 leading-relaxed mt-0.5">인근 역 하차 후 도보 이동</p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="p-2 bg-brand-gold/10 text-brand-gold rounded-xl shrink-0">
                        <Bus className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="text-[13.8px] md:text-sm font-semibold text-brand-brown">버스</h5>
                        <p className="text-[12.65px] md:text-xs text-brand-brown/70 leading-relaxed mt-0.5">목동로 주요 정류장 하차</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-brand-cream/30 rounded-xl border border-brand-gold/10 text-[12.65px] md:text-xs text-brand-brown/70 leading-relaxed">
                    💡 상세 주소와 지도는 상단 지도 영역에서 확인하실 수 있습니다.
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      ) : isSmallChurchActive ? (
        <div className="min-h-screen bg-brand-cream/40 font-sans pb-16 pt-[88px] md:pt-[100px] subpage-shell">
          <style dangerouslySetInnerHTML={{ __html: `
            @media (min-width: 768px) {
              /* 각 페이지 이동 메뉴 텍스트 10% 키우기 */
              .small-church-scale .navigation-menu-btn { font-size: calc(13.8px * 1.10) !important; }
              
              /* 작은교회 활동 밑에 있는 텍스트 10% 키우기 */
              .small-church-scale .activity-card h4 { font-size: calc(16.8px * 1.10) !important; }
              .small-church-scale .activity-card p { font-size: calc(14.4px * 1.10) !important; }
              
              /* 참여안내 밑에 있는 텍스트 10% 키우기 */
              .small-church-scale .participation-list h4 { font-size: calc(16.8px * 1.10) !important; }
              .small-church-scale .participation-list p { font-size: calc(14.4px * 1.10) !important; }
              .small-church-scale .participation-list span { font-size: calc(14.4px * 1.10) !important; }
            }
          `}} />
          {/* Hero Section Container */}
          <div className="subpage-hero relative h-[45vh] md:h-[30vh] w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2640&auto=format&fit=crop" 
              alt="가정같이 따뜻하고 다정하게 이야기를 나누는 소그룹 작은교회 공동체 모임" 
              className="w-full h-full object-cover brightness-[0.7]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end">
              <div className="max-w-7xl mx-auto w-full px-6 pb-8 md:pb-12 flex justify-between items-end">
                <div className="text-left">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-brand-sage text-white text-[13.2px] font-bold tracking-wider mb-2 font-sans">
                    COMMUNITY
                  </span>
                  <h1 className="text-3xl md:text-5xl font-serif text-white font-bold leading-tight mb-2">
                    작은교회(교구)
                  </h1>
                  <p className="hidden md:block text-white/85 text-[15.8px] md:text-[18.5px] font-light max-w-[1200px] leading-relaxed w-full">
                    소그룹의 따뜻한 모임 속에서 역사하시는 예수 그리스도의 생명을 함께 나눕니다
                  </p>
                </div>
                <button 
                  onClick={() => { window.location.hash = ''; }}
                  className="md:hidden flex items-center gap-1 text-white/90 hover:text-white text-[13.8px] font-medium shrink-0 mb-1 pb-1 border-b border-white/20 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 shrink-0" />
                  <span>뒤로 가기</span>
                </button>
              </div>
            </div>
          </div>

          {/* Subpage Contents Grid */}
          <div className="max-w-7xl mx-auto px-6 mt-3 md:mt-12">
            {/* Back button and Breadcrumb */}
            <div className="hidden md:flex mb-2.5 md:mb-6 flex-wrap items-center justify-between gap-x-4 gap-y-1.5 md:gap-4">
              <button 
                onClick={() => { window.location.hash = ''; }}
                className="text-brand-sage hover:text-brand-brown text-[16.8px] font-medium inline-flex items-center gap-1 cursor-pointer overflow-hidden leading-none border-none bg-transparent py-1 px-0"
              >
                <ChevronLeft className="w-4 h-4 shrink-0" />
                <span>메인 화면으로 돌아가기</span>
              </button>
              
              <div className="text-[15.8px] text-brand-brown/50 font-medium font-sans">
                공동체 &gt; <span className="text-brand-sage">작은교회</span>
              </div>
            </div>

            {/* Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Quick Navigation Links or sidebar info card */}
              <div className="lg:col-span-4 space-y-6">
                <div className="hidden lg:block bg-transparent md:bg-white p-0 md:p-6 rounded-[2rem] border-none md:border border-brand-gold/15 shadow-none md:shadow-sm text-left">
                  <div className="flex md:flex-col gap-1 md:gap-2 p-1.5 md:p-0 bg-brand-cream/80 md:bg-transparent border border-brand-gold/15 md:border-none rounded-2xl md:rounded-none shadow-sm md:shadow-none w-full overflow-x-auto pb-1.5 md:pb-0">
                    <button
                      onClick={() => { window.location.hash = '#영신교회'; }}
                      className="navigation-menu-btn flex-1 md:w-full text-center md:text-left py-3 md:py-2.5 px-4 rounded-xl text-[13.8px] md:text-[13.8px] sm:text-sm font-semibold md:font-medium transition-all cursor-pointer whitespace-nowrap text-brand-brown/80 hover:text-brand-sage hover:bg-brand-sage/5 bg-transparent border-none md:bg-brand-cream/10 md:text-brand-brown md:border md:border-brand-gold/10 md:hover:border-brand-sage md:hover:bg-brand-cream/30 md:shadow-none"
                    >
                      영신교회
                    </button>
                    <button
                      onClick={() => { window.location.hash = '#예배안내'; }}
                      className="navigation-menu-btn flex-1 md:w-full text-center md:text-left py-3 md:py-2.5 px-4 rounded-xl text-[13.8px] md:text-[13.8px] sm:text-sm font-semibold md:font-medium transition-all cursor-pointer whitespace-nowrap text-brand-brown/80 hover:text-brand-sage hover:bg-brand-sage/5 bg-transparent border-none md:bg-brand-cream/10 md:text-brand-brown md:border md:border-brand-gold/10 md:hover:border-brand-sage md:hover:bg-brand-cream/30 md:shadow-none"
                    >
                      예배안내
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Main Content */}
              <div className="lg:col-span-8 space-y-3 md:space-y-6">
                {/* 1. 작은교회란? Card (Combined with 두세 사람이 모인 곳에) */}
                <div className="bg-[#8E9775] text-white p-6 md:p-8 rounded-[2rem] border border-[#8E9775]/10 shadow-sm text-left hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-white/10 text-[#E2C799] rounded-2xl">
                      <Users className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-[24px] md:text-[28.8px] font-bold text-white">작은교회란?</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-[14.4px] md:text-[16.8px] text-white/90 font-light leading-relaxed whitespace-pre-line">
                      각 교구내에 소그룹(작은교회)으로 운영되고 있습니다. 함께 모여 말씀을 나누며, 서로의 삶을 돌보는 진정한 교제와 영적성장을 이루어나갑니다.
                    </p>
                    <div className="border-t border-white/20 pt-4 mt-4">
                      <div className="hidden md:block">
                        <h4 className="font-serif text-[18.2px] md:text-[20.5px] font-bold text-[#E2C799] leading-relaxed break-keep">
                          1교구 : 65세 이상 / 2교구 : 50대 / 3교구 : 40대 / 4교구 : 40대이하 젊은 부부
                        </h4>
                      </div>
                      <div className="block md:hidden">
                        <ul className="space-y-2 text-[15.8px] font-bold text-[#E2C799] font-sans text-left">
                          <li>• 1교구 : 65세 이상</li>
                          <li>• 2교구 : 50대</li>
                          <li>• 3교구 : 40대</li>
                          <li>• 4교구 : 40대이하 젊은 부부</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. 작은교회 활동 Cards Grid */}
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-brand-gold/15 shadow-sm text-left hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-2xl">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-[24px] md:text-[28.8px] font-bold text-brand-brown">작은교회 활동</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 md:gap-6 font-sans">
                    <div className="activity-card bg-brand-cream/20 py-2 px-5 md:p-5 rounded-2xl border border-brand-gold/5 flex flex-col items-start text-left">
                      <div className="flex items-center gap-3 mb-2 md:mb-3">
                        <div className="p-2 bg-brand-sage/10 text-brand-sage rounded-xl">
                          <MessageSquare className="w-5 h-5" />
                        </div>
                        <h4 className="text-[17.28px] md:text-[16.8px] font-semibold text-brand-brown">말씀 나눔</h4>
                      </div>
                      <p className="text-[15.84px] md:text-[14.4px] text-brand-brown/70 leading-relaxed font-light">
                        주일 설교 말씀을 함께 묵상하고 나눕니다.
                      </p>
                    </div>

                    <div className="activity-card bg-brand-cream/20 py-2 px-5 md:p-5 rounded-2xl border border-brand-gold/5 flex flex-col items-start text-left">
                      <div className="flex items-center gap-3 mb-2 md:mb-3">
                        <div className="p-2 bg-brand-gold/10 text-brand-gold rounded-xl">
                          <Heart className="w-5 h-5" />
                        </div>
                        <h4 className="text-[17.28px] md:text-[16.8px] font-semibold text-brand-brown">기도 모임</h4>
                      </div>
                      <p className="text-[15.84px] md:text-[14.4px] text-brand-brown/70 leading-relaxed font-light">
                        서로를 위해 함께 기도하며 중보합니다.
                      </p>
                    </div>

                    <div className="activity-card bg-brand-cream/20 py-2 px-5 md:p-5 rounded-2xl border border-brand-gold/5 flex flex-col items-start text-left">
                      <div className="flex items-center gap-3 mb-2 md:mb-3">
                        <div className="p-2 bg-brand-sage/10 text-brand-sage rounded-xl">
                          <Leaf className="w-5 h-5" />
                        </div>
                        <h4 className="text-[17.28px] md:text-[16.8px] font-semibold text-brand-brown">삶의 나눔</h4>
                      </div>
                      <p className="text-[15.84px] md:text-[14.4px] text-brand-brown/70 leading-relaxed font-light">
                        일상의 기쁨과 어려움을 함께 나눕니다.
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3. 참여 안내 Card */}
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-brand-gold/15 shadow-sm text-left hover:shadow-md transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-brand-sage/10 text-brand-sage rounded-2xl">
                      <Check className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-[24px] md:text-[28.8px] font-bold text-brand-brown">참여 안내</h3>
                  </div>

                  <ul className="participation-list space-y-4 font-sans text-left">
                    <li className="flex gap-4 items-start">
                      <span className="w-6 h-6 rounded-full bg-brand-sage/10 text-brand-sage flex items-center justify-center text-[14.4px] font-bold shrink-0 mt-0.5">A</span>
                      <div>
                        <h4 className="text-[14.4px] md:text-[16.8px] font-semibold text-brand-brown">지역별 편성</h4>
                        <p className="text-[13.2px] md:text-[14.4px] text-brand-brown/70 leading-relaxed mt-0.5">작은교회는 지역별로 편성되어 있습니다.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="w-6 h-6 rounded-full bg-brand-sage/10 text-brand-sage flex items-center justify-center text-[14.4px] font-bold shrink-0 mt-0.5">B</span>
                      <div>
                        <h4 className="text-[14.4px] md:text-[16.8px] font-semibold text-brand-brown">모임 시간</h4>
                        <p className="text-[13.2px] md:text-[14.4px] text-brand-brown/70 leading-relaxed mt-0.5">주중 저녁 또는 주말에 모입니다.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="w-6 h-6 rounded-full bg-brand-sage/10 text-brand-sage flex items-center justify-center text-[14.4px] font-bold shrink-0 mt-0.5">C</span>
                      <div>
                        <h4 className="text-[14.4px] md:text-[16.8px] font-semibold text-brand-brown">문의처</h4>
                        <p className="text-[13.2px] md:text-[14.4px] text-brand-brown/70 leading-relaxed mt-0.5">참여를 원하시면 교회 사무실 또는 담당 목사님께 문의해 주세요.</p>
                      </div>
                    </li>
                    <li className="flex gap-4 items-start">
                      <span className="w-6 h-6 rounded-full bg-brand-sage/10 text-brand-sage flex items-center justify-center text-[14.4px] font-bold shrink-0 mt-0.5 font-sans">D</span>
                      <div>
                        <h4 className="text-[14.4px] md:text-[16.8px] font-semibold text-brand-brown font-serif">새가족 배정</h4>
                        <p className="text-[13.2px] md:text-[14.4px] text-brand-brown/70 leading-relaxed mt-0.5">새가족은 새가족반 수료 후 배정됩니다.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      ) : isGodsLoveActive ? (
        <div className="min-h-screen bg-brand-cream/40 font-sans pb-16 pt-[88px] md:pt-[100px] subpage-shell">
          {/* Hero Section Container */}
          <div className="subpage-hero relative h-[45vh] md:h-[30vh] w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=2574&auto=format&fit=crop" 
              alt="성경책과 일기장이 있는 깊은 묵상을 위한 평화롭고 정돈된 신앙 공동체 예배당의 책상" 
              className="w-full h-full object-cover brightness-[0.7]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end">
              <div className="max-w-7xl mx-auto w-full px-6 pb-8 md:pb-12 flex justify-between items-end">
                <div className="text-left">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#8E9775] text-white text-[13.2px] font-bold tracking-wider mb-2 font-sans">
                    MINISTRY & DISCIPLESHIP
                  </span>
                  <h1 className="text-3xl md:text-5xl font-serif text-white font-bold leading-tight mb-2">
                    사역과 양육
                  </h1>
                  <p className="hidden md:block text-white/85 text-[15.8px] md:text-[18.5px] font-light max-w-[1200px] leading-relaxed w-full">
                    영신교회는 하나님을 깊이 사랑하는 성도를 세우기 위해 다양한 신앙 훈련 프로그램을 운영합니다. 새벽기도, 성경공부, 구역예배를 통해 말씀과 기도로 하나님과 더 가까워지는 삶을 추구합니다.
                  </p>
                </div>
                <button 
                  onClick={() => { window.location.hash = ''; }}
                  className="md:hidden flex items-center gap-1 text-white/90 hover:text-white text-[13.8px] font-medium shrink-0 mb-1 pb-1 border-b border-white/20 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 shrink-0" />
                  <span>뒤로 가기</span>
                </button>
              </div>
            </div>
          </div>

          {/* Subpage Contents Grid */}
          <div className="max-w-7xl mx-auto px-6 mt-3 md:mt-12">
            {/* Back button and Breadcrumb */}
            <div className="hidden md:flex mb-2.5 md:mb-6 flex-wrap items-center justify-between gap-x-4 gap-y-1.5 md:gap-4">
              <button 
                onClick={() => { window.location.hash = ''; }}
                className="text-brand-sage hover:text-brand-brown text-[16.8px] font-medium inline-flex items-center gap-1 cursor-pointer overflow-hidden leading-none border-none bg-transparent py-1 px-0"
              >
                <ChevronLeft className="w-4 h-4 shrink-0" />
                <span>메인 화면으로 돌아가기</span>
              </button>
              
              <div className="text-[15.8px] text-brand-brown/50 font-medium font-sans">
                사역과양육 &gt; 하나님사랑 &gt; <span className="text-brand-sage">{
                  godsLoveSubpageId >= 0 && godsLoveSubpageId < 4 ? ['제자반/사역반', '성경대학', '온라인 독서모임', '마더와이즈/파더와이즈'][godsLoveSubpageId] : '훈련 프로그램'
                }</span>
              </div>
            </div>

            {/* Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Vertical Links or Sidebar */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white p-6 rounded-[2.5rem] border border-brand-gold/15 shadow-sm text-left">
                  <h3 className="font-serif text-[21.6px] font-bold text-brand-brown mb-4 border-b border-brand-gold/10 pb-2">
                    하나님사랑 훈련목록
                  </h3>
                  <div className="flex flex-col gap-2 font-sans">
                    {[
                      { name: '제자반/사역반', idx: 0 },
                      { name: '성경대학', idx: 1 },
                      { name: '온라인 독서모임', idx: 2 },
                      { name: '마더와이즈/파더와이즈', idx: 3 }
                    ].map((item) => {
                      const isActive = godsLoveSubpageId === item.idx;
                      return (
                        <button
                          key={item.idx}
                          onClick={() => { window.location.hash = `#하나님사랑/${item.idx}`; }}
                          className={`w-full text-left py-3 px-4 rounded-2xl text-[14.4px] sm:text-[16.8px] font-medium transition-all border cursor-pointer ${
                            isActive
                              ? 'bg-[#8E9775] text-white border-[#8E9775] shadow-sm font-semibold'
                              : 'bg-white border-brand-gold/15 text-brand-brown hover:bg-brand-cream/30 hover:border-brand-sage'
                          }`}
                        >
                          {item.name}
                        </button>
                      );
                    })}
                  </div>
                </div>


              </div>

              {/* Right Column: Dynamic Section Details */}
              <div className="lg:col-span-8">
                {godsLoveSubpageId >= 0 && godsLoveSubpageId < 4 ? (
                  <motion.div
                    key={godsLoveSubpageId}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`bg-transparent border-none shadow-none md:bg-white p-0 md:p-10 md:rounded-[2.5rem] md:border md:border-brand-gold/15 md:shadow-sm text-left space-y-8 mx-auto md:w-full ${godsLoveSubpageId === 3 ? 'w-[90%]' : 'w-[85%]'}`}
                  >
                    {/* Header Details */}
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="p-3 bg-brand-sage/10 text-brand-sage rounded-2xl">
                          {godsLoveSubpageId === 0 ? <Users className="w-6 h-6" /> : 
                           godsLoveSubpageId === 1 ? <BookOpen className="w-6 h-6" /> :
                           godsLoveSubpageId === 2 ? <Sparkles className="w-6 h-6" /> :
                                                     <Heart className="w-6 h-6" />}
                        </div>
                        <h2 className="font-serif text-[28.8px] md:text-[36px] font-bold text-brand-brown">
                          {godsLoveSubpageId === 3 ? (
                            <>
                              <span className="hidden md:inline">마더와이즈 / 파더와이즈</span>
                              <span className="inline md:hidden">마더/파더 와이즈</span>
                            </>
                          ) : (
                            ['제자반 / 사역반', '성경대학', '온라인 독서모임', ''][godsLoveSubpageId]
                          )}
                        </h2>
                      </div>
                      <p className="text-brand-sage text-[16.8px] md:text-[19.2px] font-medium font-sans mb-3 select-none">
                        {['말씀으로 세워지는 제자, 사역으로 성장하는 일꾼', 
                          '말씀을 깊이 배우고 삶에 적용하는 시간', 
                          '함께 읽고 나누는 신앙 독서 공동체', 
                          '지혜로운 어머니와 아버지를 세우는 성경적 양육 프로그램'][godsLoveSubpageId]}
                      </p>
                    </div>

                    {/* Section intro block */}
                    <div className="bg-[#FAF7F0] p-5 rounded-2xl border border-brand-gold/15 text-[14.4px] md:text-[16.8px] text-brand-brown/85 font-light leading-relaxed font-sans">
                      {['제자반은 신앙의 기초를 다지고 그리스도의 제자로 세워지는 훈련 과정입니다. 사역반은 제자반 수료 후 교회 사역자로 실제 사역에 참여하며 성장하는 과정입니다. 두 과정을 통해 말씀과 삶이 하나 되는 성도를 세워갑니다.',
                        '성경공부는 하나님의 말씀을 체계적으로 배우고 삶에 적용하는 모임입니다. 교역자의 인도 아래 함께 성경을 읽고 나누며 신앙의 깊이를 더해갑니다.',
                        '온라인 독서모임은 신앙 서적과 기독교 고전을 함께 읽고 온라인으로 나누는 모임입니다. 장소에 구애받지 않고 참여할 수 있어 바쁜 일상 속에서도 말씀과 신앙 훈련을 이어갈 수 있습니다.',
                        '마더와이즈와 파더와이즈는 성경적인 원리를 바탕으로 여성과 남성의 정체성을 바로 세우고, 가정과 자녀를 지혜롭게 양육하도록 돕는 소그룹 양육 프로그램입니다.'][godsLoveSubpageId]}
                    </div>

                    {/* Left Column Description list */}
                    <div className="space-y-4">
                      <h3 className="font-serif text-[21.6px] font-bold text-brand-brown border-b border-brand-gold/10 pb-2">
                        모임 및 등록 안내
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {godsLoveSubpageId === 0 && (
                          <>
                            <div className="bg-brand-cream/10 p-5 rounded-2xl border border-brand-gold/10">
                              <span className="text-[13.2px] font-bold text-brand-sage block mb-1">모임 방식</span>
                              <span className="text-[14.4px] md:text-[16.8px] text-brand-brown font-medium">교회 내 소그룹 편성 후 기수제 운영</span>
                            </div>
                            <div className="bg-brand-cream/10 p-5 rounded-2xl border border-brand-gold/10">
                              <span className="text-[13.2px] font-bold text-brand-sage block mb-1">수강 신청</span>
                              <span className="text-[14.4px] md:text-[16.8px] text-brand-brown font-medium">수강 신청 및 일정 문의는 교회 사무실로 연락해 주세요.</span>
                            </div>
                          </>
                        )}
                        {godsLoveSubpageId === 1 && (
                          <>
                            <div className="bg-brand-cream/10 p-4 rounded-2xl border border-brand-gold/10">
                              <span className="text-[13.2px] font-bold text-brand-sage block mb-1">시간</span>
                              <span className="text-[14.4px] md:text-[16.8px] text-brand-brown font-medium">화요일 오전 10:00</span>
                            </div>
                            <div className="bg-brand-cream/10 p-4 rounded-2xl border border-brand-gold/10">
                              <span className="text-[13.2px] font-bold text-brand-sage block mb-1">장소</span>
                              <span className="text-[14.4px] md:text-[16.8px] text-brand-brown font-medium">교육관</span>
                            </div>
                            <div className="bg-brand-cream/10 p-4 rounded-2xl border border-brand-gold/10 md:col-span-2">
                              <span className="text-[13.2px] font-bold text-brand-sage block mb-1">비고</span>
                              <span className="text-[14.4px] md:text-[16.8px] text-brand-brown font-medium">사전 등록 후 참여</span>
                            </div>
                          </>
                        )}
                        {godsLoveSubpageId === 2 && (
                          <>
                            <div className="bg-brand-cream/10 p-5 rounded-2xl border border-brand-gold/10">
                              <span className="text-[13.2px] font-bold text-brand-sage block mb-1">방식/매체</span>
                              <span className="text-[14.4px] md:text-[16.8px] text-brand-brown font-medium">Zoom 온라인 소모임 지원</span>
                            </div>
                            <div className="bg-brand-cream/10 p-5 rounded-2xl border border-brand-gold/15">
                              <span className="text-[13.2px] font-bold text-brand-sage block mb-1">참여 안내</span>
                              <span className="text-[14.4px] md:text-[16.8px] text-brand-brown font-medium">참여 신청 및 교재 안내는 교회 사무실 또는 담당 사역자에게 문의해 주세요.</span>
                            </div>
                          </>
                        )}
                        {godsLoveSubpageId === 3 && (
                          <>
                            <div className="bg-brand-cream/10 p-5 rounded-2xl border border-brand-gold/10">
                              <span className="text-[13.2px] font-bold text-brand-sage block mb-1">운영 주기</span>
                              <span className="text-[14.4px] md:text-[16.8px] text-brand-brown font-medium">학기별 기수제 운영 (주중 8주~10주 과정)</span>
                            </div>
                            <div className="bg-brand-cream/10 p-5 rounded-2xl border border-brand-gold/10">
                              <span className="text-[13.2px] font-bold text-brand-sage block mb-1">신청 및 개강</span>
                              <span className="text-[14.4px] md:text-[16.8px] text-brand-brown font-medium">개강 및 모집 일정은 매 학기별 교회 광고를 참조해 주세요.</span>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Features list */}
                    <div className="space-y-4 pt-2">
                      <h3 className="font-serif text-[21.6px] font-bold text-brand-brown border-b border-brand-gold/10 pb-2">
                        사역 핵심 목표 및 특징
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-sans">
                        {[
                          [
                            { t: "체계적인 제자 훈련", d: "우리의 중심 가치인 기독교 세계관과 제자도를 바로 배워 교회의 거둥목이 됩니다." },
                            { t: "삶과 사역의 균형", d: "배움에 머물지 않고 능동적으로 서로 교제하고 직접 소그룹의 교사가 되는 실천을 지향합니다." }
                          ],
                          [
                            { t: "말씀 탐구와 학업", d: "쉽고 정갈한 커리큘럼을 통해 하나님의 말씀을 체계적으로 연구하고 마음판에 세웁니다." },
                            { t: "영성과 지성의 조화", d: "지식 축적이 아닌 신령과 진정의 예배자들을 만드는 전인격적 성경 아카데미입니다." }
                          ],
                          [
                            { t: "시공간을 초월한 나눔", d: "바쁜 일정과 일상 속에서도 거리에 구애받지 않고 유기적으로 신앙 교제를 넓힙니다." },
                            { t: "다채로운 영적 도서 선정", d: "엄선된 대작และ 기독교 고전들을 함께 풍성하게 해석하며 삶을 봅니다." }
                          ],
                          [
                            { t: "성경적 가족 가치 정립", d: "한 사람의 신앙적 정체성을 세워, 가문과 부모의 거룩한 도리를 바로 세웁니다." },
                            { t: "마음의 교감 소그룹", d: "따뜻한 치유와 중보의 기도를 나누며 어머니와 아버지가 은혜로 단단해지는 보금자리입니다." }
                          ]
                        ][godsLoveSubpageId].map((feat, idx) => (
                          <div key={idx} className="border border-brand-gold/10 p-5 rounded-2xl bg-white hover:border-brand-sage transition-colors text-left flex gap-3 items-start">
                            <span className="p-1 rounded-lg bg-brand-sage/10 text-brand-sage text-[13.2px] font-bold shrink-0">
                              0{idx + 1}
                            </span>
                            <div>
                              <h4 className="text-[14.4px] md:text-[16.8px] font-semibold text-brand-brown mb-1">{feat.t}</h4>
                              <p className="text-[13.2px] md:text-[14.4px] text-brand-brown/70 leading-relaxed font-light">{feat.d}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <div className="bg-white p-8 rounded-2xl text-center text-brand-brown/50 font-sans text-[19.2px]">
                    프로그램 상세를 로딩하고 있습니다.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : isNewFamilyActive ? (
        <main className="min-h-screen bg-brand-cream font-sans pb-20 pt-[88px] md:pt-[100px]">
          <header className="subpage-hero relative h-[48vh] min-h-[360px] md:h-[46vh] md:min-h-[420px] w-full overflow-hidden">
            <img
              src="images/light.png"
              alt="따뜻한 대화를 나누며 서로를 환영하는 공동체"
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#352f29]/90 via-[#4c443b]/65 to-[#4c443b]/10" />
            <div className="relative max-w-7xl mx-auto h-full px-6 flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-2xl text-left text-white"
              >
                <span className="inline-flex items-center gap-2 text-brand-gold text-xs md:text-sm font-semibold tracking-[0.22em] mb-5">
                  <span className="w-8 h-px bg-brand-gold" />
                  WELCOME HOME
                </span>
                <h1 className="text-4xl md:text-6xl font-serif font-light leading-[1.15] mb-5">첫 걸음이실 때</h1>
                <p className="text-base md:text-xl text-white/85 font-light leading-relaxed max-w-xl">
                  예수님을 알아가는 첫걸음부터 교회에 방문하는 순간까지, 영신교회가 따뜻하게 동행하겠습니다.
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                  <button
                    type="button"
                    onClick={() => document.getElementById('first-visit-guide')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                    className="inline-flex items-center gap-2 bg-brand-gold text-brand-brown px-5 py-3 rounded-full text-sm font-semibold hover:bg-white transition-colors cursor-pointer"
                  >
                    첫 방문 준비하기 <ArrowRight className="w-4 h-4" />
                  </button>
                  <button onClick={() => { window.location.hash = ''; }} className="inline-flex items-center gap-2 border border-white/35 text-white px-5 py-3 rounded-full text-sm font-medium hover:bg-white/10 transition-colors cursor-pointer">
                    <ChevronLeft className="w-4 h-4" /> 메인으로
                  </button>
                </div>
              </motion.div>
            </div>
          </header>

          {/* 1. 예수님은 누구신가 */}
          <section className="relative py-20 md:py-28 px-6 overflow-hidden" aria-labelledby="who-is-jesus-title">
            <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-brand-gold/10" />
            <div className="max-w-7xl mx-auto relative">
              <motion.div {...fadeIn} className="flex flex-col gap-12">
                <div className="text-center max-w-3xl mx-auto">
                  <h3 id="who-is-jesus-title" className="font-serif text-2xl md:text-4xl font-bold text-brand-brown mt-10 mb-5">예수님을 알아가는 것</h3>
                  <p className="text-brand-brown/70 text-base md:text-lg leading-[1.9] font-light">
                    예수님은 우리를 멀리서 바라보는 분이 아니라, 사랑으로 찾아오신 하나님의 아들이십니다. 우리의 아픔과 질문을 아시고 십자가와 부활로 새로운 삶의 길을 여셨습니다.
                  </p>
                  <blockquote className="mt-8 pt-5 border-t border-brand-gold/60 text-brand-brown font-serif text-lg md:text-xl leading-relaxed">
                    “내가 곧 길이요 진리요 생명이니”
                    <cite className="block mt-2 text-sm text-brand-brown/50 not-italic font-sans">요한복음 14:6</cite>
                  </blockquote>
                </div>
                <div className="w-full grid sm:grid-cols-3 gap-6 lg:gap-8">
                  {[
                    {
                      icon: <Sparkles className="w-7 h-7" />,
                      title: "그분은 하나님이십니다.",
                      desc: "예수님은 자신을 하나님과 하나라고 말씀하셨습니다. 세상을 만드신 하나님이 사람의 몸을 입고 우리의 삶과 고통 가운데 찾아오셨기에, 우리를 가장 깊이 아시고 위로하실 수 있는 분입니다."
                    },
                    {
                      icon: <Heart className="w-7 h-7" />,
                      title: "그분은 부활하셨습니다.",
                      desc: "부활은 신화가 아닙니다. 예수님의 십자가 죽음은 역사적 사실이며, 제자들은 부활하신 예수님을 만난 뒤 목숨을 걸고 이 소식을 전했습니다. 예수님의 부활은 죽음 너머에도 삶이 있다는 소망을 보여 줍니다."
                    },
                    {
                      icon: <Users className="w-7 h-7" />,
                      title: "그분은 유일한 길이십니다.",
                      desc: "사람들은 저마다 하나님께 이르는 길이 있다고 말합니다. 그러나 기독교는 사람이 하나님께 올라가는 길이 아니라, 하나님이 우리에게 내려오셨다고 말합니다. 예수님은 하나님과 우리를 이어 주시는 유일한 길이 되셨습니다."
                    }
                  ].map((item, index) => (
                    <motion.article
                      key={item.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.12 }}
                      className="bg-white rounded-[2rem] border border-brand-gold/15 overflow-hidden min-h-[230px] flex flex-col shadow-sm"
                    >
                      <div className="aspect-[4/3] w-full overflow-hidden bg-brand-cream">
                        <img
                          src={`./images/new-family/jesus-${index + 1}.png`}
                          alt={`${item.title} 관련 이미지`}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="mt-6 px-6 pb-6 md:px-7 md:pb-7 text-left">
                        <h3 className="font-serif text-xl font-bold text-brand-brown mb-3">{item.title}</h3>
                        <p className="jesus-topic-description text-[16px] text-brand-brown/65 leading-relaxed">{item.desc}</p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* 2. 첫 방문 가이드 */}
          <section id="first-visit-guide" className="py-20 md:py-28 px-6 bg-[#F4F0E7] scroll-mt-24" aria-labelledby="first-visit-title">
            <div className="max-w-7xl mx-auto">
              <motion.div {...fadeIn} className="text-center max-w-2xl mx-auto mb-14">
                <span className="text-brand-sage text-sm font-bold tracking-[0.18em]">02 · FIRST VISIT</span>
                <h2 id="first-visit-title" className="font-serif text-3xl md:text-5xl font-normal text-brand-brown mt-4 mb-5">첫방문 가이드</h2>
                <p className="text-brand-brown/65 leading-relaxed">낯설지 않도록, 도착부터 예배 후 교제까지
                < br/>
                    차근차근 안내해 드립니다.</p>
              </motion.div>

              <div className="relative grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-5">
                <div className="hidden md:block absolute top-12 left-[12.5%] right-[12.5%] h-px bg-brand-gold/45" />
                {[
                  { icon: <MapPin className="w-6 h-6" />, image: undefined, title: "교회 도착", desc: "주일 예배 15분 전, 1층 안내 데스크로 오세요.", meta: "서울 양천구 목동로19길 28" },
                  { icon: <UserPlus className="w-6 h-6" />, image: undefined, title: "환영 안내", desc: "새가족 도우미가 예배실과 필요한 공간을 안내합니다.", meta: "부담 없는 간단한 안내" },
                  { icon: <Church className="w-6 h-6" />, image: undefined, title: "함께 예배", desc: "원하는 자리에 편하게 앉아 예배에 참여하시면 됩니다.", meta: "1부 09:30 · 2부 11:30" },
                  { icon: <MessageSquare className="w-6 h-6" />, image: undefined, title: "차 한잔 교제", desc: "예배 후 새가족실에서 교회를 소개하고 이야기를 나눕니다.", meta: "등록은 천천히 결정하세요" },
                  { image: "./images/new-family/step_5.png", title: "등록을 결심하셨다면", desc: "담당 교역자의 심방을 받게 됩니다.", meta: "STEP 5 · 등록 상담" },
                  { image: "./images/new-family/step_6.png", title: "새가족 소그룹(6-7주)", desc: "소그룹을 거쳐 공동체에 배정됩니다.", meta: "STEP 6 · 소그룹 배정" },
                  { image: "./images/new-family/step_7.png", title: "정식 등록교인이 되기까지", desc: "담임목사와의 만남과 새가족교육(7주) 프로그램을 수료하면 정식으로 등록교인이 됩니다.", meta: "STEP 7 · 공동체에 정착" }
                ].map((step, index) => (
                  <motion.article
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative text-left ${
                      index < 4
                        ? 'col-span-full md:col-span-3 bg-white rounded-[2rem] p-[20px] md:p-6 md:pt-7 border border-brand-gold/15 shadow-sm'
                        : 'col-span-full md:col-span-4 flex flex-col gap-4 py-8 md:py-12'
                    }`}
                  >
                    {step.image ? (
                      <div className={index < 4 ? '-mx-[20px] -mt-[20px] md:-mx-6 md:-mt-7 mb-4 md:mb-6 overflow-hidden bg-brand-cream' : 'w-full aspect-[4/3] overflow-hidden bg-brand-cream'}>
                        <img src={step.image} alt={`${step.title} 안내 이미지`} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    ) : (
                      null
                    )}
                    <div className={index >= 4 ? 'flex flex-col justify-center' : ''}>
                      <span className="text-xs font-bold text-brand-sage tracking-[0.15em]">STEP {index + 1}</span>
                      <h3 className="first-visit-step-title font-serif text-xl font-bold text-brand-brown mt-1 mb-2 md:mt-2 md:mb-3">{step.title}</h3>
                      <p className="first-visit-step-description text-[16px] text-brand-brown/65 leading-relaxed min-h-0 md:min-h-[66px]">{step.desc}</p>
                      <p className={`first-visit-step-meta mt-3 pt-2 md:mt-5 md:pt-4 text-xs font-medium text-brand-brown/55 ${index < 4 ? 'border-t border-brand-gold/15' : ''}`}>{step.meta}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
              
            </div>
          </section>

          {/* 3. 추천도서 슬라이드 */}
          <section className="py-20 md:py-28 px-6 bg-brand-brown/90 text-brand-cream overflow-hidden" aria-labelledby="recommended-books-title">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-7 mb-12">
                <motion.div {...fadeIn} className="text-left max-w-2xl">
                  <span className="text-brand-gold text-sm font-bold tracking-[0.18em]">03 · RECOMMENDED BOOKS</span>
                  <h2 id="recommended-books-title" className="font-serif text-3xl md:text-5xl font-normal mt-4 mb-5">처음 믿음을 위한 추천도서</h2>
                  <p className="text-brand-cream/65 leading-relaxed">신앙의 질문을 천천히 풀어가며 예수님을 더 깊이 알아가도록 돕는 책들입니다.</p>
                </motion.div>
                <div className="flex gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={() => setBookSlideIndex((previous) => Math.max(0, previous - 1))}
                    disabled={bookSlideIndex === 0}
                    aria-label="이전 추천도서 보기"
                    className="w-12 h-12 rounded-full border border-brand-cream/25 flex items-center justify-center hover:bg-brand-cream hover:text-brand-brown disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-inherit transition-colors cursor-pointer disabled:cursor-default"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookSlideIndex((previous) => Math.min(maxBookSlideIndex, previous + 1))}
                    disabled={bookSlideIndex === maxBookSlideIndex}
                    aria-label="다음 추천도서 보기"
                    className="w-12 h-12 rounded-full border border-brand-cream/25 flex items-center justify-center hover:bg-brand-cream hover:text-brand-brown disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-inherit transition-colors cursor-pointer disabled:cursor-default"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div
                className="overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-[2rem]"
                tabIndex={0}
                role="region"
                aria-label="추천도서 슬라이드"
                onKeyDown={(event) => {
                  if (event.key === 'ArrowLeft') setBookSlideIndex((previous) => Math.max(0, previous - 1));
                  if (event.key === 'ArrowRight') setBookSlideIndex((previous) => Math.min(maxBookSlideIndex, previous + 1));
                }}
              >
                <motion.div
                  className="flex -mx-3"
                  animate={{ x: `-${bookSlideIndex * (100 / bookVisibleCount)}%` }}
                  transition={{ type: "spring", stiffness: 240, damping: 28 }}
                >
                  {recommendedBooks.map((book, index) => (
                    <article key={book.title} className="shrink-0 px-3" style={{ width: `${100 / bookVisibleCount}%` }}>
                      <div className="h-full bg-white/[0.07] border border-white/10 rounded-[2rem] p-6 md:p-7 flex gap-6 items-center hover:bg-white/10 transition-colors">
                        <div
                          className="relative w-[118px] sm:w-[132px] aspect-[2/3] rounded-r-md rounded-l-sm shrink-0 shadow-[12px_16px_28px_rgba(0,0,0,0.28)] overflow-hidden text-left"
                          style={{ backgroundColor: book.cover, color: book.accent }}
                        >
                          <img
                            src={book.image}
                            alt={`${book.title} 표지`}
                            className="absolute inset-0 z-10 w-full h-full object-cover"
                            loading="lazy"
                            onError={(event) => {
                              event.currentTarget.style.display = 'none';
                            }}
                          />
                          <div className="absolute inset-y-0 left-0 w-3 bg-black/15 border-r border-white/10" />
                          <div className="h-full pl-6 pr-4 py-5 flex flex-col">
                            <span className="text-[8px] tracking-[0.2em] opacity-75">YOUNGSHIN SELECT</span>
                            <BookOpen className="w-5 h-5 mt-6 opacity-80" />
                            <strong className="font-serif text-base sm:text-lg leading-snug mt-3 break-keep">{book.title}</strong>
                            <span className="mt-auto text-[9px] opacity-80">{book.author}</span>
                          </div>
                        </div>
                        <div className="text-left min-w-0">
                          <span className="inline-block text-[11px] font-bold tracking-wider text-brand-gold mb-3">{book.category}</span>
                          <h3 className="font-serif text-xl md:text-2xl font-bold text-white leading-snug mb-3 break-keep">{book.title}</h3>
                          <p className="text-xs text-brand-cream/45 mb-4">{book.author}</p>
                          <p className="hidden sm:block text-sm text-brand-cream/65 leading-relaxed">{book.description}</p>
                          <span className="block mt-5 text-xs text-brand-gold/65">0{index + 1} / 0{recommendedBooks.length}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </motion.div>
              </div>

              <div className="flex justify-center gap-2 mt-8" aria-label="추천도서 슬라이드 위치">
                {Array.from({ length: maxBookSlideIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setBookSlideIndex(index)}
                    aria-label={`${index + 1}번째 도서 묶음 보기`}
                    aria-current={bookSlideIndex === index ? 'true' : undefined}
                    className={`h-1.5 rounded-full transition-all cursor-pointer ${bookSlideIndex === index ? 'w-8 bg-brand-gold' : 'w-1.5 bg-brand-cream/25 hover:bg-brand-cream/50'}`}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>
      ) : isNoticeActive ? (
        <div className="min-h-screen bg-brand-cream/40 font-sans pb-16 pt-[88px] md:pt-[100px] subpage-shell">
          {/* Notice Hero Section */}
          <div className="subpage-hero relative h-[25vh] md:h-[23vh] w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1516880711640-ef7db81be3e1?q=80&w=2000&auto=format&fit=crop" 
              alt="성경구절 기록 및 메모장" 
              className="w-full h-full object-cover brightness-[0.7]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end">
              <div className="max-w-7xl mx-auto w-full px-6 pb-6 md:pb-8 flex justify-between items-end">
                <div className="text-left">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#E4C59E] text-brand-brown text-[13.2px] font-bold tracking-wider mb-2">
                    CHURCH NEWS & BULLETIN
                  </span>
                  <h1 className="text-3xl md:text-5xl font-serif text-white font-bold leading-tight mb-2">
                    공지사항 & 주보
                  </h1>
                  <p className="hidden md:block text-white/80 text-[15.8px] md:text-[18.5px] font-light max-w-[1200px] mt-1 leading-relaxed">
                    매주 발행되는 영신교회 소식지와 성경 공부, 사역모임 포스터를 한눈에 모아보세요.
                  </p>
                </div>
                <button 
                  onClick={() => { window.location.hash = ''; }}
                  className="md:hidden flex items-center gap-1 text-white/90 hover:text-white text-[13.8px] font-medium shrink-0 mb-1 pb-1 border-b border-white/20 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 shrink-0" />
                  <span>뒤로 가기</span>
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 mt-8">
            {/* Filter and Search header Bar */}
            <div className="bg-white p-4 md:p-6 rounded-2xl border border-brand-gold/15 shadow-sm flex flex-col md:flex-row gap-4 justify-between items-center">
              {/* Category selector */}
              <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
                {['전체', '주보', '포스터'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setNoticeFilter(cat)}
                    className={`px-4 py-1.5 rounded-full text-[13.6px] font-medium transition-all whitespace-nowrap cursor-pointer ${
                      noticeFilter === cat 
                        ? 'bg-brand-sage text-white shadow-sm' 
                        : 'bg-brand-cream/55 text-brand-brown/70 hover:bg-brand-cream'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search bar */}
              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-brand-brown/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="제목이나 소식 검색..."
                  value={noticeSearch}
                  onChange={(e) => setNoticeSearch(e.target.value)}
                  className="w-full text-[13.6px] pl-9 pr-4 py-2 border border-brand-gold/25 focus:border-brand-sage rounded-full outline-none bg-brand-cream/10 text-brand-brown transition-colors"
                />
                {noticeSearch && (
                  <button 
                    onClick={() => setNoticeSearch('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[13.6px] text-brand-brown/40 hover:text-brand-brown"
                  >
                    초기화
                  </button>
                )}
              </div>
            </div>

            {/* Collapsible New Notice Placement form */}
            <AnimatePresence>
              {isAddNoticeOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden mt-4"
                >
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!noticeFormTitle.trim()) return;
                      const nextId = noticePosts.length > 0 ? Math.max(...noticePosts.map(p => p.id)) + 1 : 1;
                      const newNotice = {
                        id: nextId,
                        title: noticeFormTitle,
                        category: noticeFormCategory,
                        date: new Date().toISOString().split('T')[0],
                        img: noticeFormImg,
                        desc: noticeFormDesc || `${noticeFormCategory} 관련 상세 공지 내용입니다.`,
                        downloads: 0
                      };
                      const updated = [newNotice, ...noticePosts];
                      setNoticePosts(updated);
                      localStorage.setItem('yungshin_notice_posts', JSON.stringify(updated));
                      // Reset and Close
                      setNoticeFormTitle('');
                      setNoticeFormDesc('');
                      setIsAddNoticeOpen(false);
                    }}
                    className="bg-white p-6 rounded-2xl border border-brand-gold/15 shadow-sm space-y-4 text-left"
                  >
                    <h3 className="font-serif text-[18px] font-bold text-brand-brown flex items-center gap-2">
                      <FileText className="w-4 h-4 text-brand-sage" /> 새로운 공지 등록하기
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13.6px] font-semibold text-brand-brown/85 mb-1">제목 <span className="text-brand-sage">*</span></label>
                        <input
                          type="text"
                          required
                          value={noticeFormTitle}
                          onChange={(e) => setNoticeFormTitle(e.target.value)}
                          placeholder="예: 2026년 여름 전교인 수련회 안내"
                          className="w-full text-[13.6px] px-3 py-2 border border-brand-gold/20 hover:border-brand-sage focus:border-brand-sage rounded-xl outline-none text-brand-brown bg-brand-cream/5"
                        />
                      </div>
                      <div>
                        <label className="block text-[13.6px] font-semibold text-brand-brown/85 mb-1">분류</label>
                        <select
                          value={noticeFormCategory}
                          onChange={(e) => setNoticeFormCategory(e.target.value)}
                          className="w-full text-[13.6px] px-3 py-2 border border-brand-gold/20 hover:border-brand-sage rounded-xl outline-none text-brand-brown bg-brand-cream/5"
                        >
                          <option value="주보">주보 (Weekly Bulletin)</option>
                          <option value="포스터">포스터 (Ministry Poster)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13.6px] font-semibold text-brand-brown/85 mb-1">상세 설명 / 내용</label>
                      <textarea
                        value={noticeFormDesc}
                        onChange={(e) => setNoticeFormDesc(e.target.value)}
                        placeholder="공지사항의 상세한 내용을 입력해 주세요."
                        rows={3}
                        className="w-full text-[13.6px] px-3 py-2 border border-brand-gold/20 hover:border-brand-sage rounded-xl outline-none text-brand-brown bg-brand-cream/5"
                      />
                    </div>

                    <div>
                      <label className="block text-[13.6px] font-semibold text-brand-brown/85 mb-1.5">대표 세련된 디자인 (프리셋 선택)</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          { name: '대예배 주보형', img: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?q=80&w=800&auto=format&fit=crop' },
                          { name: '말씀 사경회형', img: 'https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=800&auto=format&fit=crop' },
                          { name: '음악 찬양회형', img: 'https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800&auto=format&fit=crop' },
                          { name: '성경 공부용', img: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop' }
                        ].map((preset) => (
                          <button
                            type="button"
                            key={preset.name}
                            onClick={() => setNoticeFormImg(preset.img)}
                            className={`p-1 rounded-xl border text-left transition-all ${
                              noticeFormImg === preset.img 
                                ? 'border-brand-sage bg-brand-sage/5 shadow-sm' 
                                : 'border-brand-gold/10 hover:border-brand-sage/40'
                            }`}
                          >
                            <img src={preset.img} alt="" className="w-full h-12 object-cover rounded-lg mb-1" referrerPolicy="no-referrer" />
                            <span className="text-[11.3px] text-brand-brown font-medium block text-center truncate">{preset.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setIsAddNoticeOpen(false)}
                        className="px-4 py-2 border border-brand-gold/20 hover:bg-brand-cream text-brand-brown text-[13.6px] rounded-xl"
                      >
                        취소
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 bg-brand-sage text-white text-[13.6px] font-semibold rounded-xl hover:bg-brand-brown transition-colors shadow-sm"
                      >
                        등록하기
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Gallery list for Bulletins / Posters */}
            {(() => {
              const filtered = noticePosts.filter(notice => {
                const matchesSearch = notice.title.toLowerCase().includes(noticeSearch.toLowerCase()) || 
                                     notice.desc.toLowerCase().includes(noticeSearch.toLowerCase());
                if (noticeFilter === '전체') return matchesSearch;
                return notice.category === noticeFilter && matchesSearch;
              });

              if (filtered.length === 0) {
                return (
                  <div className="bg-white p-12 rounded-3xl border border-brand-gold/15 mt-8 text-center text-brand-brown/50">
                    <FileText className="w-10 h-10 text-brand-gold/30 mx-auto mb-2" />
                    <p className="text-[15.8px] font-medium">검색 결과에 맞는 공지사항이나 주보가 없습니다.</p>
                    <p className="text-[13.6px] text-brand-brown/40 mt-1">다른 검색어를 입력해 보시거나 필터를 변경해 보세요.</p>
                  </div>
                );
              }

              return (
                <div className="flex flex-col gap-10 mt-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.slice(0, visibleNoticeCount).map((item) => (
                      <motion.div
                        layout
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        key={item.id}
                        className="bg-white rounded-3xl overflow-hidden border border-brand-gold/15 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-left"
                      >
                        <div>
                          {/* Card Image */}
                          <div className="relative h-48 w-full overflow-hidden bg-brand-cream/20">
                            <img 
                              src={item.img} 
                              alt={item.title} 
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute top-3 left-3 flex gap-1">
                              <span className={`px-2 py-1 text-[10.2px] font-bold rounded-lg text-white ${
                                item.category === '주보' ? 'bg-brand-sage' : 'bg-brand-gold'
                              }`}>
                                {item.category}
                              </span>
                              <span className="bg-black/40 backdrop-blur-md px-2 py-1 text-[10.2px] font-medium text-white rounded-lg">
                                {item.date}
                              </span>
                            </div>
                          </div>

                          {/* Card Body */}
                          <div className="p-5">
                            <h3 className="font-serif text-[15.8px] font-bold text-brand-brown leading-snug line-clamp-2 hover:text-brand-sage transition-colors">
                              {item.title}
                            </h3>
                            <p className="text-brand-brown/70 text-[12.4px] font-light mt-2 leading-relaxed line-clamp-3">
                              {item.desc}
                            </p>
                          </div>
                        </div>

                        {/* Card Action footer */}
                        <div className="px-5 pb-5 pt-2 border-t border-brand-gold/10 flex items-center justify-between">
                          <span className="text-[11.3px] text-brand-brown/40 font-mono">
                            조회/다운: {item.downloads}회
                          </span>
                          
                          <div className="flex gap-2">
                            <button
                              onClick={() => {
                                // Simulate Document Download with user feedback
                                setNoticeDownloadStatus(prev => ({ ...prev, [item.id]: '준비중...' }));
                                setTimeout(() => {
                                  // Increment download count
                                  const updated = noticePosts.map(p => {
                                    if (p.id === item.id) {
                                      return { ...p, downloads: p.downloads + 1 };
                                    }
                                    return p;
                                  });
                                  setNoticePosts(updated);
                                  localStorage.setItem('yungshin_notice_posts', JSON.stringify(updated));
                                  setNoticeDownloadStatus(prev => ({ ...prev, [item.id]: '완료 ✓' }));
                                  
                                  // Reset status text after 2 seconds
                                  setTimeout(() => {
                                    setNoticeDownloadStatus(prev => {
                                      const next = { ...prev };
                                      delete next[item.id];
                                      return next;
                                    });
                                  }, 2000);
                                }, 1100);
                              }}
                              className="flex items-center gap-1 bg-brand-cream hover:bg-brand-sage hover:text-white border border-brand-gold/15 py-1.5 px-3 rounded-lg text-[11.3px] font-semibold text-brand-brown transition-all cursor-pointer"
                            >
                              <Download className="w-3 h-3" />
                              {noticeDownloadStatus[item.id] || 'PDF 저장'}
                            </button>

                            <button
                              onClick={() => setSelectedNoticeId(item.id)}
                              className="flex items-center gap-1 bg-brand-brown hover:bg-brand-sage text-white py-1.5 px-3 rounded-lg text-[11.3px] font-semibold transition-all cursor-pointer"
                            >
                              <Search className="w-3 h-3" />
                              공지 확인
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Load More Button */}
                  {filtered.length > visibleNoticeCount && (
                    <div className="flex justify-center mt-2">
                      <button
                        type="button"
                        onClick={() => setVisibleNoticeCount(prev => prev + 6)}
                        className="flex items-center gap-1.5 px-6 py-2.5 bg-white border border-brand-gold/20 hover:border-brand-sage hover:bg-brand-sage/5 text-brand-brown hover:text-brand-sage text-[13.6px] font-semibold rounded-full shadow-sm transition-all duration-200 cursor-pointer"
                      >
                        공지사항 및 주보 더보기 <ChevronDown className="w-4 h-4 animate-bounce" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })()}
          </div>

          {/* Modal overlay for detailed Notice view */}
          {selectedNoticeId !== null && (() => {
            const currentItem = noticePosts.find(n => n.id === selectedNoticeId);
            if (!currentItem) return null;
            return (
              <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-brand-cream max-w-2xl w-full rounded-2xl overflow-hidden border border-brand-gold/25 shadow-2xl relative text-left max-h-[90vh] flex flex-col"
                >
                  <button
                    onClick={() => setSelectedNoticeId(null)}
                    className="absolute top-3 right-3 p-2 bg-black/60 hover:bg-black/80 rounded-full text-white transition-colors cursor-pointer z-20"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="overflow-y-auto flex-1">
                    <div className="relative h-60 bg-black">
                      <img 
                        src={currentItem.img} 
                        alt={currentItem.title} 
                        className="w-full h-full object-cover opacity-80"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                        <span className="inline-block px-2.5 py-1 bg-brand-sage text-white self-start text-[10.2px] font-bold rounded mb-1">{currentItem.category}</span>
                        <h2 className="text-[20.3px] md:text-[22.6px] font-serif font-bold text-white leading-normal">{currentItem.title}</h2>
                        <p className="text-white/70 text-[11.3px] mt-1 font-mono">발행일자: {currentItem.date}</p>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      <div>
                        <h4 className="text-[13.6px] font-semibold text-brand-brown/50">상세 안내 사항</h4>
                        <p className="text-[13.6px] md:text-[15.8px] text-brand-brown/85 mt-2 leading-relaxed whitespace-pre-line font-light">
                          {currentItem.desc}
                        </p>
                      </div>

                      {currentItem.img && (
                        <div className="space-y-2">
                          <h4 className="text-[13.6px] font-semibold text-brand-brown/50">안내 포스터</h4>
                          <div className="bg-black/5 p-2 rounded-xl border border-brand-gold/10 flex justify-center">
                            <img 
                              src={currentItem.img} 
                              alt={`${currentItem.title} 포스터`}
                              className="max-h-[380px] md:max-h-[500px] w-auto object-contain rounded-lg shadow-sm"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        </div>
                      )}

                      <div className="p-4 bg-white rounded-xl border border-brand-gold/10 space-y-2">
                        <h4 className="text-[11.3px] font-bold text-brand-sage font-mono">Simulated PDF Attachment</h4>
                        <div className="flex items-center justify-between text-[13.6px]">
                          <span className="text-brand-brown/70 truncate flex items-center gap-1">
                            <FileText className="w-4 h-4 text-[#A81E1E]" /> {currentItem.title.slice(0,18)}..._Bulletin.pdf
                          </span>
                          <button
                            onClick={() => {
                              // Show simulated download alert on the detail modal itself
                              setNoticeDownloadStatus(prev => ({ ...prev, [currentItem.id]: '저장완료' }));
                              setTimeout(() => {
                                setNoticeDownloadStatus(prev => {
                                  const next = { ...prev };
                                  delete next[currentItem.id];
                                  return next;
                                });
                              }, 1500);
                            }}
                            className="text-[11.3px] text-brand-brown bg-brand-cream border border-brand-gold/20 hover:bg-brand-sage hover:text-white px-2 py-1 rounded-lg transition-colors cursor-pointer"
                          >
                            {noticeDownloadStatus[currentItem.id] || '다운로드'}
                          </button>
                        </div>
                      </div>

                      <div className="flex justify-end pt-2">
                        <button
                          onClick={() => setSelectedNoticeId(null)}
                          className="px-5 py-2 bg-brand-brown hover:bg-brand-sage text-white text-[13.6px] font-semibold rounded-xl transition-all cursor-pointer"
                        >
                          문서 확인완료
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })()}
        </div>
      ) : isMinistryBoardActive ? (
        <div className="min-h-screen bg-brand-cream/40 font-sans pb-16 pt-[88px] md:pt-[100px] subpage-shell">
          {isMinistryDetailActive && ministryDetailId !== null ? (() => {
            const currentDetailPost = ministryPosts.find(p => p.id === ministryDetailId);
            if (!currentDetailPost) {
              return (
                <div className="max-w-[1280px] mx-auto px-6 py-20 text-center">
                  <h2 className="font-serif text-2xl text-brand-brown font-bold mb-4">해당 사역 글을 찾을 수 없습니다.</h2>
                  <button 
                    type="button"
                    onClick={() => { window.location.hash = '#사역게시판'; }} 
                    className="px-5 py-2.5 bg-brand-brown text-white rounded-xl font-semibold hover:bg-brand-sage transition-all"
                  >
                    사역갤러리 목록으로 돌아가기
                  </button>
                </div>
              );
            }
            const baseImg = currentDetailPost.img;
            const categoryImages: Record<string, string[]> = {
              "사랑나눔": [
                "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=600&auto=format&fit=crop"
              ],
              "다음세대": [
                "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=600&auto=format&fit=crop"
              ],
              "문화/양육": [
                "https://images.unsplash.com/photo-1511067007398-7e4b90a6155e?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=800&auto=format&fit=crop"
              ],
              "주민사랑": [
                "https://images.unsplash.com/photo-1532996127006-29141084ca39?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1504159506876-f8338247a14a?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1464226184884-fa280b87c3a9?q=80&w=600&auto=format&fit=crop"
              ],
              "교육/양육": [
                "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=600&auto=format&fit=crop"
              ],
              "선교": [
                "https://images.unsplash.com/photo-1526976721720-6fe210946884?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=600&auto=format&fit=crop"
              ],
              "찬양": [
                "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=600&auto=format&fit=crop",
                "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?q=80&w=600&auto=format&fit=crop"
              ]
            };
            const extraImgs = categoryImages[currentDetailPost.category] || categoryImages["사랑나눔"];
            const postImages = Array.from(new Set([baseImg, ...extraImgs])).slice(0, 3);
            const likes = ministryLikeCount[currentDetailPost.id] || 0;

            return (
              <div className="max-w-[1280px] mx-auto px-6 py-6 md:py-10">
                {/* Back button above post */}
                <div className="mb-6 flex items-center justify-between">
                  <button 
                    type="button"
                    onClick={() => { window.location.hash = '#사역게시판'; }}
                    className="inline-flex text-brand-sage hover:text-brand-brown text-sm font-semibold items-center gap-1 cursor-pointer font-sans"
                  >
                    <ChevronLeft className="w-4 h-4 shrink-0" />
                    <span>목록으로 돌아가기</span>
                  </button>
                  <span className="text-[13px] text-brand-brown/40 font-mono">영신 공동체 소식</span>
                </div>

                <div className="bg-white p-6 sm:p-10 md:p-14 rounded-3xl border border-brand-gold/10 shadow-sm text-left font-sans">
                  {/* Category */}
                  <span className="inline-block text-brand-sage text-[13.6px] font-bold tracking-wider mb-3">
                    {currentDetailPost.category} 사역
                  </span>
                  
                  {/* Main Title */}
                  <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-brand-brown leading-tight tracking-tight mb-5">
                    {currentDetailPost.title}
                  </h1>

                  {/* Metadata Row */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[13.6px] text-brand-brown/50 font-mono mb-8 border-b border-brand-gold/15 pb-6">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-brand-gold" /> {currentDetailPost.date}
                    </span>
                    <span className="hidden sm:inline text-brand-gold/40">•</span>
                    <span>영신교회 동정</span>
                  </div>

                  {/* Image 1 (Hero Photo, no border, no overlaid tags) */}
                  <div className="mb-8 overflow-hidden rounded-2xl shadow-sm">
                    <img 
                      src={postImages[0]} 
                      alt={currentDetailPost.title} 
                      className="w-full h-auto max-h-[500px] object-cover hover:scale-101 transition-transform duration-500" 
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Paragraph 1 */}
                  <p className="text-[16px] sm:text-[17.5px] text-brand-brown/85 leading-relaxed mb-8 whitespace-pre-line font-light break-keep">
                    {currentDetailPost.desc}
                  </p>

                  <h3 className="font-serif text-[19px] sm:text-[21px] font-bold text-brand-brown mt-12 mb-4 leading-snug">
                    나눔의 기쁨이 싹트는 은혜로운 순간들
                  </h3>

                  <p className="text-[15.2px] sm:text-[16.5px] text-brand-brown/75 leading-relaxed mb-8 font-light break-keep">
                    영신교회 공동체 성도들의 기쁜 동참 속에 진행된 이번 사역은 일회성의 섬김을 넘어, 주님의 사랑을 삶의 자리에서 성실하게 구현하는 소중한 시간이었습니다. 우리의 작은 섬김이 씨앗이 되어 영과 육의 회복을 일구고, 마침내 풍성한 하늘의 열매들을 거둘 수 있기를 고대합니다.
                  </p>

                  {/* Image 2 (Detail Photo, no border, no overlaid tags) */}
                  {postImages[1] && (
                    <div className="my-10 overflow-hidden rounded-2xl shadow-sm">
                      <img 
                        src={postImages[1]} 
                        alt="사역 현장 상세 모습" 
                        className="w-full h-auto max-h-[450px] object-cover hover:scale-101 transition-transform duration-500" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  <p className="text-[15.2px] sm:text-[16.5px] text-brand-brown/75 leading-relaxed mb-8 font-light break-keep">
                    각 파트에서 보이지 않는 곳까지 수고해주신 모든 봉사자분들의 손길 위에 하늘의 위로와 기쁨이 충만하게 머무시길 기원합니다. 영신교회는 언제나 이웃을 사랑하며 영생의 소망을 나누는 따뜻한 소통의 사역을 멈추지 않고 이어가겠습니다.
                  </p>

                  {/* Image 3 (Sketch Photo, no border, no overlaid tags) */}
                  {postImages[2] && (
                    <div className="my-10 overflow-hidden rounded-2xl shadow-sm">
                      <img 
                        src={postImages[2]} 
                        alt="사역 현장 스케치 모습" 
                        className="w-full h-auto max-h-[450px] object-cover hover:scale-101 transition-transform duration-500" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}

                  {/* Highlight callout block */}
                  <div className="bg-brand-cream/30 p-6 sm:p-8 rounded-2xl border border-brand-gold/10 my-12 text-center">
                    <p className="font-serif italic text-[15.8px] sm:text-[18px] text-brand-brown/80 leading-relaxed mb-2 break-keep">
                      "서로 사랑하며 격려하고, 선한 일에 더욱 열심을 내는 복된 성도의 삶이 되기를 축복합니다."
                    </p>
                    <span className="text-[11.3px] text-brand-gold font-mono tracking-wider">영신교회 교우 일동</span>
                  </div>

                  {/* Bottom interactions */}
                  <div className="pt-8 border-t border-brand-gold/15 flex flex-col sm:flex-row items-center justify-between gap-4 mt-12 font-sans">
                    <button
                      type="button"
                      onClick={() => {
                        const updatedLikes = { ...ministryLikeCount, [currentDetailPost.id]: likes + 1 };
                        setMinistryLikeCount(updatedLikes);
                        localStorage.setItem('yungshin_ministry_likes', JSON.stringify(updatedLikes));
                      }}
                      className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-red-50/50 border border-brand-gold/15 hover:border-red-200 rounded-2xl text-[14.4px] font-semibold text-brand-brown active:scale-95 transition-all cursor-pointer group shadow-sm font-sans"
                    >
                      <Heart className="w-4.5 h-4.5 text-red-500 fill-red-500 group-hover:scale-125 transition-transform" />
                      <span>은혜감사 격려하기 (+{likes + 1})</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => { window.location.hash = '#사역게시판'; }}
                      className="w-full sm:w-auto px-6 py-3 bg-brand-brown hover:bg-brand-sage text-white text-[14.4px] font-semibold rounded-2xl text-center transition-all cursor-pointer shadow-md font-sans"
                    >
                      사역갤러리 목록으로
                    </button>
                  </div>

                </div>
              </div>
            );
          })() : (
            <>
              {/* Ministry Board Hero Section */}
              <div className="subpage-hero relative h-[25vh] md:h-[23vh] w-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2000&auto=format&fit=crop" 
              alt="성도들이 환하게 웃으며 함께 힘을 모으는 봉사와 찬양의 현장 소식" 
              className="w-full h-full object-cover brightness-[0.7]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end">
              <div className="max-w-7xl mx-auto w-full px-6 pb-6 md:pb-8 flex justify-between items-end">
                <div className="text-left">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-brand-sage text-white text-[13.2px] font-bold tracking-wider mb-2 font-sans">
                    MINISTRY PHOTO GALLERY
                  </span>
                  <h1 className="text-3xl md:text-5xl font-serif text-white font-bold leading-tight mb-2">
                    사역 활동 게시판
                  </h1>
                  <p className="hidden md:block text-white/80 text-[15.8px] md:text-[18.5px] font-light max-w-[1200px] mt-1 leading-relaxed">
                    지역사회를 축복하며 아름답게 섬기는 성도들의 나눔·봉사 활동 스냅샷입니다.
                  </p>
                </div>
                <button 
                  onClick={() => { window.location.hash = ''; }}
                  className="md:hidden flex items-center gap-1 text-white/90 hover:text-white text-[13.8px] font-medium shrink-0 mb-1 pb-1 border-b border-white/20 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 shrink-0" />
                  <span>뒤로 가기</span>
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 mt-8">
            {/* Header and action trigger */}
            <div className="bg-white p-4 md:p-6 rounded-2xl border border-brand-gold/15 shadow-sm text-left">
              <h2 className="font-serif text-[18px] md:text-[20.3px] font-bold text-brand-brown">사역과 섬김의 모습을 남겨주세요.</h2>
              <p className="text-brand-brown/60 text-[13.6px] font-light mt-0.5">영신 공동체가 뿌린 기쁨과 소망의 열매들을 함께 살펴보며 은혜를 경험하세요.</p>
            </div>

            {/* Collapsible New Ministry Photo Form */}
            <AnimatePresence>
              {isAddMinistryOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden mt-4"
                >
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (!ministryFormTitle.trim()) return;
                      const nextId = ministryPosts.length > 0 ? Math.max(...ministryPosts.map(p => p.id)) + 1 : 1;
                      const newMinistry = {
                        id: nextId,
                        title: ministryFormTitle,
                        category: ministryFormCategory,
                        date: new Date().toISOString().split('T')[0],
                        img: ministryFormImg,
                        desc: ministryFormDesc || `${ministryFormCategory} 사역의 귀중하고 희망 찬 현장 발자취입니다.`
                      };
                      const updated = [newMinistry, ...ministryPosts];
                      setMinistryPosts(updated);
                      localStorage.setItem('yungshin_ministry_posts', JSON.stringify(updated));
                      // Reset and Close
                      setMinistryFormTitle('');
                      setMinistryFormDesc('');
                      setIsAddMinistryOpen(false);
                    }}
                    className="bg-white p-6 rounded-2xl border border-brand-gold/15 shadow-sm space-y-4 text-left"
                  >
                    <h3 className="font-serif text-[18px] font-bold text-brand-brown flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-brand-gold" /> 새로운 사역 스냅샷 등록
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13.6px] font-semibold text-brand-brown/85 mb-1">활동 제목 <span className="text-brand-sage">*</span></label>
                        <input
                          type="text"
                          required
                          value={ministryFormTitle}
                          onChange={(e) => setMinistryFormTitle(e.target.value)}
                          placeholder="예: 2026 사랑의 경로잔치 대성황"
                          className="w-full text-[13.6px] px-3 py-2 border border-brand-gold/20 hover:border-brand-sage focus:border-brand-sage rounded-xl outline-none text-brand-brown bg-brand-cream/5"
                        />
                      </div>
                      <div>
                        <label className="block text-[13.6px] font-semibold text-brand-brown/85 mb-1">분류</label>
                        <select
                          value={ministryFormCategory}
                          onChange={(e) => setMinistryFormCategory(e.target.value)}
                          className="w-full text-[13.6px] px-3 py-2 border border-brand-gold/20 hover:border-brand-sage rounded-xl outline-none text-brand-brown bg-brand-cream/5"
                        >
                          <option value="사랑나눔">사랑나눔 사역</option>
                          <option value="다음세대">다음세대 공동체</option>
                          <option value="문화/양육">문화 및 성도 양육</option>
                          <option value="주민사랑">주민 & 지역사회 섬김</option>
                          <option value="선교">해외 및 지역 국내 선교</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13.6px] font-semibold text-brand-brown/85 mb-1">활동 내용 및 성도 감상평</label>
                      <textarea
                        value={ministryFormDesc}
                        onChange={(e) => setMinistryFormDesc(e.target.value)}
                        placeholder="이루어진 아름다운 은혜를 짧게 기록해 주세요."
                        rows={3}
                        className="w-full text-[13.6px] px-3 py-2 border border-brand-gold/20 hover:border-brand-sage rounded-xl outline-none text-brand-brown bg-brand-cream/5"
                      />
                    </div>

                    <div>
                      <label className="block text-[13.6px] font-semibold text-brand-brown/85 mb-1.5">사진 활동 대표 프리셋 (선택)</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {[
                          { name: '사랑나눔', img: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=600&auto=format&fit=crop' },
                          { name: '찬양워십', img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=600&auto=format&fit=crop' },
                          { name: '공동체 다배움', img: 'https://images.unsplash.com/photo-1511067007398-7e4b90a6155e?q=80&w=600&auto=format&fit=crop' },
                          { name: '정원 꽃가꾸기', img: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=600&auto=format&fit=crop' }
                        ].map((preset) => (
                          <button
                            type="button"
                            key={preset.name}
                            onClick={() => setMinistryFormImg(preset.img)}
                            className={`p-1 rounded-xl border text-left transition-all ${
                              ministryFormImg === preset.img 
                                ? 'border-brand-sage bg-brand-sage/5 shadow-sm' 
                                : 'border-brand-gold/10 hover:border-brand-sage/40'
                            }`}
                          >
                            <img src={preset.img} alt="" className="w-full h-12 object-cover rounded-lg mb-1" referrerPolicy="no-referrer" />
                            <span className="text-[11.3px] text-brand-brown font-medium block text-center truncate">{preset.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex justify-end gap-2">
                      <button
                        type="button"
                        onClick={() => setIsAddMinistryOpen(false)}
                        className="px-4 py-2 border border-brand-gold/20 hover:bg-brand-cream text-brand-brown text-[13.6px] rounded-xl"
                      >
                        취소
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 bg-brand-sage text-white text-[13.6px] font-semibold rounded-xl hover:bg-brand-brown transition-colors shadow-sm"
                      >
                        등록하기
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Structured 4x4 Grid - (4 items per row on large screen screens) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {ministryPosts.slice(0, currentVisibleMinistryCount).map((post, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: Math.min(index * 0.04, 0.4) }}
                  key={post.id}
                  onClick={() => {
                    window.location.hash = `#사역게시판/${post.id}`;
                  }}
                  className="group bg-white rounded-2xl overflow-hidden border border-brand-gold/15 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer text-left"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-brand-cream/10">
                    <img 
                      src={post.img} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 flex gap-1">
                      <span className="bg-brand-brown/70 backdrop-blur-md text-white text-[10.2px] font-semibold px-2 py-1 rounded-lg">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-4 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-1 text-[11.3px] text-brand-brown/50 mb-1.5 font-mono">
                        <Calendar className="w-3 h-3 text-brand-gold" /> {post.date}
                      </div>

                      <h3 className="font-serif text-[15.8px] font-bold text-brand-brown group-hover:text-brand-sage transition-colors leading-snug line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-[12.4px] text-brand-brown/65 leading-relaxed mt-1.5 font-light line-clamp-2">
                        {post.desc}
                      </p>
                    </div>

                    <div className="pt-3 mt-2 border-t border-brand-gold/10 flex items-center justify-between text-[11.3px] text-brand-brown/40 font-mono">
                      <span>영신교회 동정</span>
                      <span className="group-hover:text-brand-sage transition-colors flex items-center gap-0.5 font-sans font-medium text-brand-brown/50">
                        귀하게 동참 <Heart className="w-3 h-3 inline text-red-500 fill-red-500" /> +{ministryLikeCount[post.id] || 0}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Load More Button */}
            {ministryPosts.length > currentVisibleMinistryCount && (
              <div className="flex justify-center mt-10">
                <button
                  type="button"
                  onClick={() => {
                    if (isMobile && !hasExpandedMinistry) {
                      setHasExpandedMinistry(true);
                      setVisibleMinistryCount(10);
                    } else {
                      setVisibleMinistryCount(prev => prev + (isMobile ? 5 : 12));
                    }
                  }}
                  className="flex items-center gap-1.5 px-6 py-2.5 bg-white border border-brand-gold/20 hover:border-brand-sage hover:bg-brand-sage/5 text-brand-brown hover:text-brand-sage text-[13.6px] font-semibold rounded-full shadow-sm transition-all duration-200 cursor-pointer"
                >
                  사역과 섬김의 모습 더보기 <ChevronDown className="w-4 h-4 animate-bounce" />
                </button>
              </div>
            )}
          </div>

            </>
          )}
        </div>
      ) : isNextGenActive && activeSubpageItem && activeSubpageDetails ? (
        <div className="min-h-screen bg-brand-cream/40 font-sans pb-16 pt-[88px] md:pt-[100px] subpage-shell">
          {/* Hero Section Container */}
          <div className="subpage-hero relative h-[45vh] md:h-[30vh] w-full overflow-hidden">
            <img 
              src={activeSubpageItem.image} 
              alt={activeSubpageItem.alt} 
              className="w-full h-full object-cover brightness-[0.7]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end">
              <div className="max-w-7xl mx-auto w-full px-6 pb-8 md:pb-12 flex justify-between items-end">
                <div className="text-left">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-brand-sage text-white text-[13.2px] font-bold tracking-wider mb-2">
                    {activeSubpageItem.sub}
                  </span>
                  <h1 className="text-3xl md:text-5xl font-serif text-white font-bold leading-tight mb-2">
                    {activeSubpageItem.title}
                  </h1>
                  {nextGenSubpageId !== 4 && (
                    <p className="hidden md:block text-white/85 text-[15.8px] md:text-[18.5px] font-light max-w-[1200px] leading-relaxed border-none break-keep">
                      {activeSubpageItem.desc}
                    </p>
                  )}
                </div>
                <button 
                  onClick={() => { window.location.hash = '#다음세대'; }}
                  className="md:hidden flex items-center gap-1 text-white/90 hover:text-white text-[13.8px] font-medium shrink-0 mb-1 pb-1 border-b border-white/20 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 shrink-0" />
                  <span>뒤로 가기</span>
                </button>
              </div>
            </div>
          </div>

          {/* Subpage Contents Grid */}
          <div className="max-w-7xl mx-auto px-6 mt-3 md:mt-12">
            {/* Back button link in content context */}
            <div className="h-6 md:h-auto mb-4 md:mb-6 flex items-center gap-2">
              <button 
                onClick={() => { window.location.hash = '#다음세대'; }}
                className="hidden md:inline-flex text-brand-sage hover:text-brand-brown text-sm font-medium items-center gap-1 cursor-pointer overflow-hidden leading-none animate-fade-in"
              >
                <ChevronLeft className="w-4 h-4 shrink-0" />
                <span>이전 페이지로 돌아가기</span>
              </button>
            </div>

            {/* Next Gen Department Segmented Control */}
            <div className="flex flex-col md:flex-row md:justify-center mb-8 md:mb-12 items-center gap-2">
              {/* Mobile View: 3 on top, 2 on bottom */}
              <div className="flex md:hidden flex-col gap-1.5 w-full">
                <div className="grid grid-cols-3 gap-1.5 p-1 bg-brand-cream/80 border border-brand-gold/15 rounded-xl shadow-sm">
                  {[
                    { name: '유아부', id: 0 },
                    { name: '유치부', id: 1 },
                    { name: '초등부', id: 2 },
                  ].map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => {
                        window.location.hash = `#nextgen/${dept.id}`;
                      }}
                      className={`text-center whitespace-nowrap py-2.5 rounded-lg text-[13.2px] font-semibold transition-all cursor-pointer ${
                        nextGenSubpageId === dept.id
                          ? 'bg-brand-sage text-white shadow-md shadow-brand-sage/20 border border-brand-sage'
                          : 'text-brand-brown/80 hover:text-brand-sage hover:bg-brand-sage/5 border border-transparent'
                      }`}
                    >
                      {dept.name}
                    </button>
                  ))}
                </div>
                <div className="flex justify-center w-full">
                  <div className="grid grid-cols-2 gap-1.5 p-1 bg-brand-cream/80 border border-brand-gold/15 rounded-xl shadow-sm w-[66.6%]">
                    {[
                      { name: '청소년부', id: 3 },
                      { name: '청년부', id: 4 },
                    ].map((dept) => (
                      <button
                        key={dept.id}
                        onClick={() => {
                          window.location.hash = `#nextgen/${dept.id}`;
                        }}
                        className={`text-center whitespace-nowrap py-2.5 rounded-lg text-[13.2px] font-semibold transition-all cursor-pointer ${
                          nextGenSubpageId === dept.id
                            ? 'bg-brand-sage text-white shadow-md shadow-brand-sage/20 border border-brand-sage'
                            : 'text-brand-brown/80 hover:text-brand-sage hover:bg-brand-sage/5 border border-transparent'
                        }`}
                      >
                        {dept.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop View */}
              <div className="hidden md:inline-flex p-1.5 bg-brand-cream/80 border border-brand-gold/15 rounded-2xl shadow-sm md:w-auto gap-1 md:gap-0">
                {[
                  { name: '유아부', id: 0 },
                  { name: '유치부', id: 1 },
                  { name: '초등부', id: 2 },
                  { name: '청소년부', id: 3 },
                  { name: '청년부', id: 4 },
                ].map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => {
                      window.location.hash = `#nextgen/${dept.id}`;
                    }}
                    className={`flex-initial text-center whitespace-nowrap px-8 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                      nextGenSubpageId === dept.id
                        ? 'bg-brand-sage text-white shadow-md shadow-brand-sage/20 border border-brand-sage'
                        : 'text-brand-brown/80 hover:text-brand-sage hover:bg-brand-sage/5 border border-transparent'
                    }`}
                  >
                    {dept.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-10 gap-8 items-stretch">
              {/* Left Column: Vision & Educational Target */}
              <div className="md:col-span-3 space-y-6 md:flex md:h-full md:flex-col">
                {/* Educational Leader / Staff Photo Card */}
                <div className="bg-white md:bg-transparent lg:bg-white p-6 md:p-0 lg:p-8 rounded-[2rem] border border-brand-gold/15 md:border-none lg:border shadow-sm md:shadow-none lg:shadow-sm text-left md:h-full md:flex md:flex-col">
                  {/* PC Version of Staff Info (Renders ABOVE the photo, replacing "교육담당자 소개") */}
                  <div className="hidden md:block space-y-2 text-left mb-5">
                    {nextGenSubpageId !== 0 && nextGenSubpageId !== 1 && nextGenSubpageId !== 2 && nextGenSubpageId !== 3 && nextGenSubpageId !== 4 && (
                      <div className="text-xs uppercase tracking-wider font-bold text-brand-sage font-mono">
                        {activeSubpageItem.title} 사역 지기
                      </div>
                    )}
                    {activeSubpageDetails.staff.split(' | ').map((line, idx) => {
                      const isMainLeader = idx === 0;
                      return (
                        <p 
                          key={idx} 
                          className={`leading-relaxed text-brand-brown/85 ${
                            isMainLeader ? 'font-bold text-brand-brown text-lg md:text-xl flex items-center gap-1.5' : 'font-normal text-sm md:text-[0.95rem] text-brand-brown/70'
                          }`}
                        >
                          {isMainLeader && <Sparkles className="w-4.5 h-4.5 text-brand-gold shrink-0 animate-pulse" />}
                          {isMainLeader ? '' : '• '} {line}
                        </p>
                      );
                    })}
                  </div>

                  {/* Mobile Version Header */}
                  <div className="flex md:hidden items-center gap-3 mb-4">
                    <span className="inline-block p-2 rounded-full bg-brand-sage/10 text-brand-sage">
                      <Users className="w-5 h-5" />
                    </span>
                    <h3 className="font-serif text-xl font-bold text-brand-brown">교육담당자 소개</h3>
                  </div>
                  
                  {/* Photo container (Static) */}
                  <div className="relative w-full h-[480px] min-h-[480px] max-h-[480px] md:h-auto md:min-h-0 md:max-h-none md:flex-1 rounded-2xl overflow-hidden bg-brand-cream/35 border border-brand-gold/20 mb-4 md:mb-0 shadow-sm">
                    <img 
                      src={
                        customStaffPhotos[nextGenSubpageId!] || 
                        {
                          0: "./images/7.jpg",
                          1: "./images/4.jpg",
                          2: "./images/2.jpg",
                          3: "./images/3.jpg",
                          4: "./images/0.jpg"
                        }[nextGenSubpageId!] || "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop"
                      } 
                      alt="교육담당자 사진" 
                      className="w-full h-full object-cover grayscale-[10%] contrast-[105%] hover:grayscale-0 transition-all duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Mobile Version of Staff Info (Renders BELOW the photo) */}
                  <div className="block md:hidden space-y-2 text-center">
                    {nextGenSubpageId !== 0 && nextGenSubpageId !== 1 && nextGenSubpageId !== 2 && nextGenSubpageId !== 3 && nextGenSubpageId !== 4 && (
                      <div className="text-xs uppercase tracking-wider font-bold text-brand-sage font-mono">
                        {activeSubpageItem.title} 사역 지기
                      </div>
                    )}
                    {activeSubpageDetails.staff.split(' | ').map((line, idx) => {
                      const isMainLeader = idx === 0;
                      return (
                        <p 
                          key={idx} 
                          className={`leading-relaxed text-brand-brown/85 ${
                            isMainLeader ? 'font-bold text-brand-brown text-lg md:text-xl flex items-center justify-center gap-1.5' : 'font-normal text-sm md:text-[0.95rem] text-brand-brown/70'
                          }`}
                        >
                          {isMainLeader && <Sparkles className="w-4.5 h-4.5 text-brand-gold shrink-0 animate-pulse" />}
                          {isMainLeader ? '' : '• '} {line}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Right Column: Weekly Schedule & Yearly Plan */}
              <div className="md:col-span-7 space-y-6">

                {/* Ministry Introduction Card for 유아부 */}
                {nextGenSubpageId === 0 && (
                  <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-brand-gold/15 shadow-sm text-left">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-block p-2 rounded-full bg-brand-sage/10 text-brand-sage">
                        <BookOpen className="w-5 h-5" />
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-brown">사역소개</h3>
                    </div>
                    <p className="text-base md:text-lg text-brand-brown/80 font-normal leading-relaxed">
                      유아부는 아이들의 눈높이에 맞춰 말씀을 나누고, 아기음악회와 다양한 말씀 중심의 활동을 통해 하나님을 경험하며 스스로 예배하는 힘을 키워가는 공동체입니다.
                    </p>
                  </div>
                )}

                {/* Ministry Introduction Card for 유치부 */}
                {nextGenSubpageId === 1 && (
                  <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-brand-gold/15 shadow-sm text-left">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-block p-2 rounded-full bg-brand-sage/10 text-brand-sage">
                        <BookOpen className="w-5 h-5" />
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-brown">사역소개</h3>
                    </div>
                    <p className="text-base md:text-lg text-brand-brown/80 font-normal leading-relaxed break-keep">
                      찬양과 율동을 즐겁게 배우고 매 주 성경이야기를 들으며 공과로 적용합니다. 암송과 챈트로 성경을 익히는 유치부는 좋은 선생님들과 다양한 절기 교육이 있습니다.
                    </p>
                  </div>
                )}

                {/* Ministry Introduction Card for 초등부 */}
                {nextGenSubpageId === 2 && (
                  <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-brand-gold/15 shadow-sm text-left">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-block p-2 rounded-full bg-brand-sage/10 text-brand-sage">
                        <BookOpen className="w-5 h-5" />
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-brown">사역소개</h3>
                    </div>
                    <p className="text-base md:text-lg text-brand-brown/80 font-normal leading-relaxed break-keep">
                      찬양과 율동을 즐겁게 배우고 매 주 성경이야기를 들으며 공과로 적용합니다. 암송과 챈트로 성경을 익히는 유치부는 좋은 선생님들과 다양한 절기 교육이 있습니다.
                    </p>
                  </div>
                )}


                {/* Ministry Introduction Card for 청소년부 */}
                {nextGenSubpageId === 3 && (
                  <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-brand-gold/15 shadow-sm text-left">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-block p-2 rounded-full bg-brand-sage/10 text-brand-sage">
                        <BookOpen className="w-5 h-5" />
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-brown">사역소개</h3>
                    </div>
                    <p className="text-base md:text-lg text-brand-brown/80 font-normal leading-relaxed break-keep">
                      "그러나 내게는 우리 주 예수 그리스도의 십자가 외에 결코 자랑할 것이 없으니 그리스도로 말미암아 세상이 나를 대하여 십자가에 못 박히고 내가 또한 세상을 대하여 그러하니라 (갈라디아서6:14)
                    </p>
                    {/* <div className="space-y-3">
                      <p className="text-base md:text-lg text-brand-brown font-semibold leading-relaxed break-keep">
                        복음으로 세상을 살아가는 청소년
                      </p>
                      <p className="text-sm md:hidden text-brand-brown/70 font-normal leading-relaxed break-keep border-l-2 border-brand-gold/30 pl-3 italic">
                        "그러나 내게는 우리 주 예수 그리스도의 십자가 외에 결코 자랑할 것이 없으니 그리스도로 말미암아 세상이 나를 대하여 십자가에 못 박히고 내가 또한 세상을 대하여 그러하니라 (갈라디아서6:14)"
                      </p>
                    </div> */}
                  </div>
                )}

                {/* Ministry Introduction Card for 청년부 */}
                {nextGenSubpageId === 4 && (
                  <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-brand-gold/15 shadow-sm text-left">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="inline-block p-2 rounded-full bg-brand-sage/10 text-brand-sage">
                        <BookOpen className="w-5 h-5" />
                      </span>
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-brown">사역소개</h3>
                    </div>
                    <p className="text-base md:text-lg text-brand-brown/80 font-normal leading-relaxed break-keep">
                      영신교회 청년부는 하나님이 주신 말씀을 신뢰합니다. 청년의 시기는 우리 삶이 나아가야 할
지향점을 확보하고(말씀), 그 목표를 향해 달려나가는 훈련의 기간입니다. 말씀으로 단단하게 무장되어 세상으로 나아가 하나님이 원하시는 삶을 살아내는 것을 최종목적으로 합니다.
                    </p>
                  </div>
                )}

                {/* Worship Info Card */}
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-brand-gold/15 shadow-sm text-left">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-block p-2 rounded-full bg-brand-gold/10 text-brand-gold">
                      <Clock className="w-5 h-5" />
                    </span>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-brown">모임안내</h3>
                  </div>
                  <div className="space-y-4 text-base md:text-lg">
                    <div className="flex items-center gap-3">
                      <span className="w-20 shrink-0 text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-sage bg-brand-sage/10 px-2.5 py-1 rounded text-center">대상</span>
                      <span className="text-brand-brown/80 font-medium">{activeSubpageItem.target}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-20 shrink-0 text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded text-center">시간</span>
                      <span className="text-brand-brown/80 font-medium">{activeSubpageItem.time}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-20 shrink-0 text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-brown bg-brand-brown/10 px-2.5 py-1 rounded text-center font-bold">장소</span>
                      <span className="text-brand-brown/80 font-semibold">{activeSubpageItem.location}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="w-20 shrink-0 text-xs md:text-sm font-semibold uppercase tracking-wider text-brand-sage/80 bg-brand-sage/5 px-2.5 py-1 rounded text-center">담당</span>
                      <span className="text-brand-brown/85 font-semibold leading-relaxed">{activeSubpageDetails.staff}</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Bottom Section: Yearly Activities & Join Guide */}
            <div className="mt-8 space-y-6">
              {/* Yearly Activities */}
              <div className="bg-transparent border-none shadow-none p-0 w-[95%] mx-auto md:bg-white md:p-8 md:rounded-[2rem] md:border md:border-brand-gold/15 md:shadow-sm text-left md:w-full">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-brown mb-6 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-brand-gold" />
                    <span>연간 주요 사역 및 활동</span>
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {activeSubpageDetails.calendar.map((event, eIdx) => (
                      <div 
                        key={eIdx}
                        className="p-5 rounded-2xl border border-brand-gold/10 hover:border-brand-sage/30 hover:bg-brand-cream/10 transition-all flex gap-4"
                      >
                        <div className="w-12 h-12 shrink-0 rounded-full bg-brand-sage/10 text-brand-sage flex items-center justify-center font-serif font-extrabold text-base">
                          {event.month}
                        </div>
                        <div className="space-y-1.5">
                          <h4 className="text-base md:text-lg font-bold text-brand-brown leading-tight">
                            {event.title}
                          </h4>
                          <p className="text-xs md:text-[0.95rem] text-brand-brown/70 font-normal leading-relaxed">
                            {event.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Join Guide Card */}
                {nextGenSubpageId !== 3 && nextGenSubpageId !== 4 && (
                  <div className="bg-brand-sage/10 p-6 md:p-8 rounded-[2rem] border border-brand-sage/20 text-left relative overflow-hidden">
                    <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-brand-sage/10 rounded-full blur-2xl"></div>
                    <h3 className="font-serif text-[17px] md:text-xl font-bold text-brand-brown mb-3">처음 방문하는 어린이를 환영합니다!</h3>
                    <p className="text-xs md:text-sm text-brand-brown/80 font-light leading-relaxed mb-4">
                      영신교회 다음세대는 새로운 아이를 따듯하게 초대하며 환대합니다. 주일날 시간과 장소에 맞춰 방문해 주시거나 본당 로비 안전 데스크 또는 교무 행정실로 알려주시면 자세한 안내 및 소그룹 매칭을 도와드립니다.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <button 
                        onClick={() => { window.location.hash = '#예배안내'; }}
                        className="px-4 py-2 bg-brand-sage text-white font-medium text-xs rounded-full hover:bg-brand-brown transition-colors cursor-pointer"
                      >
                        오시는 길 자세히 보기
                      </button>
                      {nextGenSubpageId !== 0 && nextGenSubpageId !== 1 && nextGenSubpageId !== 2 && (
                        <button 
                          onClick={() => { window.location.hash = '#다음세대'; }}
                          className="px-4 py-2 border border-brand-sage/30 text-brand-sage font-medium text-xs rounded-full bg-white hover:bg-brand-sage hover:text-white transition-all cursor-pointer"
                        >
                          부서 다른 카드 목록
                        </button>
                      )}
                    </div>
                  </div>
                )}
            </div>
            
          </div>
        </div>
      ) : isNeighborActive ? (
        <div className="min-h-screen bg-brand-cream/40 font-sans pb-16 pt-[88px] md:pt-[100px] subpage-shell">
          {/* Hero Section Container */}
          <div className="subpage-hero relative h-[45vh] md:h-[30vh] w-full overflow-hidden">
            <img 
              src={neighborItems[neighborSubpageId].image} 
              alt={neighborItems[neighborSubpageId].alt} 
              className="w-full h-full object-cover brightness-[0.7]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end">
              <div className="max-w-7xl mx-auto w-full px-6 pb-8 md:pb-12 flex justify-between items-end">
                <div className="text-left">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-brand-gold text-brand-brown text-[13.2px] font-bold tracking-wider mb-2 uppercase">
                    {neighborItems[neighborSubpageId].sub}
                  </span>
                  <h1 className="text-3xl md:text-5xl font-serif text-white font-bold leading-tight mb-2">
                    이웃사랑 - {neighborItems[neighborSubpageId].title}
                  </h1>
                  <p className="hidden md:block text-white/85 text-[15.8px] md:text-[18.5px] font-light max-w-[1200px] leading-relaxed">
                    {neighborItems[neighborSubpageId].desc}
                  </p>
                </div>
                <button 
                  onClick={() => { window.location.hash = '#핵심사역'; }}
                  className="md:hidden flex items-center gap-1 text-white/90 hover:text-white text-[13.8px] font-medium shrink-0 mb-1 pb-1 border-b border-white/20 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 shrink-0" />
                  <span>뒤로 가기</span>
                </button>
              </div>
            </div>
          </div>

          {/* Subpage Contents Grid */}
          <div className="max-w-7xl mx-auto px-6 mt-3 md:mt-12">
            {/* Back button and Breadcrumb */}
            <div className="hidden md:flex mb-2.5 md:mb-6 flex-wrap items-center justify-between gap-x-4 gap-y-1.5 md:gap-4">
              <button 
                onClick={() => { window.location.hash = '#핵심사역'; }}
                className="text-brand-sage hover:text-brand-brown text-[16.8px] font-medium inline-flex items-center gap-1 cursor-pointer overflow-hidden leading-none"
              >
                <ChevronLeft className="w-4 h-4 shrink-0" />
                <span>메인 화면으로 돌아가기</span>
              </button>
              
              <div className="text-[15.8px] text-brand-brown/50 font-medium">
                사역과양육 &gt; 이웃사랑 &gt; <span className="text-brand-sage">{neighborItems[neighborSubpageId].title}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Vertical Tabs selecting neighbor pages */}
              <div className="lg:col-span-4 space-y-6">
                <div className="bg-white p-6 rounded-[2rem] border border-brand-gold/15 shadow-sm text-left">
                  <h3 className="font-serif text-[21.6px] font-bold text-brand-brown mb-4 border-b border-brand-gold/10 pb-2">
                    이웃사랑 사역목록
                  </h3>
                  <div className="flex flex-col gap-2">
                    {neighborItems.map((item, idx) => {
                      const isActive = neighborSubpageId === idx;
                      return (
                        <button
                          key={item.title}
                          onClick={() => {
                            window.location.hash = `#이웃사랑/${idx}`;
                          }}
                          className={`w-full py-3 px-4 rounded-xl text-left font-serif transition-all flex items-center justify-between ${
                            isActive
                              ? "bg-brand-sage text-white shadow-md font-semibold scale-[1.01]"
                              : "bg-brand-cream/20 hover:bg-brand-cream/50 text-brand-brown border border-brand-gold/5"
                          } cursor-pointer`}
                        >
                          <span>{item.title}</span>
                          <ChevronRight className={`w-4 h-4 transition-transform ${isActive ? "translate-x-0.5" : "text-brand-brown/40"}`} />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Subpage Info Quick Card */}
                {neighborSubpageId !== 0 && neighborSubpageId !== 1 && neighborSubpageId !== 2 && neighborSubpageId !== 3 && (
                  <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-brand-gold/15 shadow-sm text-left">
                    <span className="inline-block p-2 rounded-full bg-brand-gold/10 text-brand-gold mb-4">
                      <Clock className="w-5 h-5" />
                    </span>
                    <h3 className="font-serif text-[24px] font-bold text-brand-brown mb-4">모임 안내</h3>
                    <div className="space-y-4 text-[16.8px]">
                      <div className="flex items-start gap-2.5">
                        <span className="w-16 shrink-0 text-[14.4px] font-semibold tracking-wider text-brand-sage bg-brand-sage/10 px-2.5 py-1 rounded text-center">대상</span>
                        <span className="text-brand-brown/80 text-[14.4px] sm:text-[16.8px]">{neighborItems[neighborSubpageId].target}</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="w-16 shrink-0 text-[14.4px] font-semibold tracking-wider text-brand-gold bg-brand-gold/10 px-2.5 py-1 rounded text-center">시간</span>
                        <span className="text-brand-brown/80 text-[14.4px] sm:text-[16.8px]">{neighborItems[neighborSubpageId].time}</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <span className="w-16 shrink-0 text-[14.4px] font-semibold tracking-wider text-brand-brown bg-brand-brown/10 px-2.5 py-1 rounded text-center font-bold">장소</span>
                        <span className="text-brand-brown/80 text-[14.4px] sm:text-[16.8px]">{neighborItems[neighborSubpageId].location}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Column: Descriptions & Details and Live Application Form */}
              <div className="lg:col-span-8 space-y-6">
                {/* Content Details Block */}
                <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-brand-gold/15 shadow-sm text-left">
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-brand-sage/10 text-brand-sage rounded-full text-[14.4px] font-semibold mb-4">
                    사역소개
                  </span>
                  
                  <blockquote className="border-l-4 border-brand-sage pl-4 py-1 my-4 italic text-brand-brown/85 font-serif text-[19.2px] leading-relaxed">
                    "{neighborItems[neighborSubpageId].desc}"
                  </blockquote>

                  {/* Worship/Group Info placement below Ministry Introduction */}
                  {(neighborSubpageId === 1 || neighborSubpageId === 2 || neighborSubpageId === 3) && (
                    <div className="mt-4 mb-8 p-5 rounded-2xl bg-brand-cream/20 border border-brand-gold/15 text-left">
                      <h4 className="font-serif text-[18px] font-bold text-brand-brown mb-3 flex items-center gap-1.5">
                        <Clock className="w-4.5 h-4.5 text-brand-sage" />
                        <span>모임 안내</span>
                      </h4>
                      <div className="flex flex-col gap-3 text-[14.4px] md:text-[16.8px]">
                        <div className="flex items-start gap-2">
                          <span className="shrink-0 px-2 py-0.5 rounded bg-brand-sage/10 text-brand-sage font-semibold text-[13.2px] tracking-wide">대상</span>
                          <span className="text-brand-brown/80 leading-snug text-[14.4px] md:text-[16.8px]">{neighborItems[neighborSubpageId].target}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="shrink-0 px-2 py-0.5 rounded bg-brand-gold/15 text-brand-gold/90 font-semibold text-[13.2px] tracking-wide">시간</span>
                          <span className="text-brand-brown/80 leading-snug text-[14.4px] md:text-[16.8px]">{neighborItems[neighborSubpageId].time}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="shrink-0 px-2 py-0.5 rounded bg-brand-brown/10 text-brand-brown font-bold text-[13.2px] tracking-wide">장소</span>
                          <span className="text-brand-brown/80 leading-snug text-[14.4px] md:text-[16.8px]">{neighborItems[neighborSubpageId].location}</span>
                        </div>
                        {neighborSubpageId === 1 && (
                          <div className="flex items-start gap-2">
                            <span className="shrink-0 px-2 py-0.5 rounded bg-brand-sage/10 text-brand-sage font-semibold text-[13.2px] tracking-wide">문의</span>
                            <span className="text-brand-brown/80 leading-snug font-medium text-[14.4px] md:text-[16.8px]">사무실 : 02-2602-8002</span>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  <h3 className="font-serif text-[21.6px] font-bold text-brand-brown mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-brand-sage" />
                    <span>주요 활동 및 프로그램 안내</span>
                  </h3>
                  <div className="space-y-4">
                    {neighborItems[neighborSubpageId].details.map((detailText, dIdx) => {
                      const [title, desc] = detailText.split(": ");
                      return (
                        <div 
                          key={dIdx} 
                          className="p-4 rounded-2xl bg-brand-cream/20 border border-brand-gold/5 flex gap-3 hover:bg-brand-cream/35 transition-colors"
                        >
                          <div className="w-6 h-6 shrink-0 rounded-full bg-brand-sage text-white flex items-center justify-center font-bold text-[14.4px] mt-0.5">
                            {dIdx + 1}
                          </div>
                          <div>
                            <h4 className="text-[16.8px] font-semibold text-brand-brown mb-1">{title}</h4>
                            <p className="text-[14.4px] md:text-[16.8px] text-brand-brown/70 leading-relaxed font-light whitespace-pre-line">{desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Interactive Application Form for Service/Volunteering */}
                {neighborSubpageId !== 2 && neighborSubpageId !== 3 && (
                  <div className="bg-white p-6 md:p-8 rounded-[2rem] border border-brand-gold/15 shadow-sm text-left relative overflow-hidden">
                    <div className="absolute right-0 top-0 w-32 h-32 bg-brand-sage/5 rounded-full blur-2xl pointer-events-none"></div>
                    <h3 className="font-serif text-[24px] font-bold text-brand-brown mb-2 flex items-center gap-2">
                      <Send className="w-5 h-5 text-brand-sage" />
                      <span>{neighborSubpageId === 1 ? '아카데미 참여 신청' : '참여 및 후원 신청'}</span>
                    </h3>
                    <p className="text-[14.4px] md:text-[16.8px] text-brand-brown/65 font-light leading-relaxed mb-6">
                      {neighborSubpageId === 1 
                        ? `${neighborItems[neighborSubpageId].title}에 참가(등록)하여 수강생으로 함께 배우실 분은 아래 정보를 남겨주시면 담당 파트에서 정성을 다해 연락을 드리겠습니다.`
                        : `${neighborItems[neighborSubpageId].title}에 참가(등록)하시거나 봉사 및 물품 후원으로 뜻깊게 동참하고 싶으신 분은 아래 정보를 남겨주시면 담당 파트에서 정성을 다해 연락을 드리겠습니다.`
                      }
                    </p>

                    {neighborSubpageId === 1 && (
                      <div className="mb-6 p-4 rounded-2xl bg-brand-cream/50 border border-brand-gold/25 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-sm text-left">
                        <div className="text-[14.4px] md:text-[16.8px] text-brand-brown">
                          <span className="font-bold">세부 안내 및 신청 링크 : </span>
                          <a 
                            href="https://forms.gle/13j7yMGbBd6Kc6g88" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="text-brand-sage hover:underline font-semibold break-all inline-flex items-center gap-1"
                          >
                            https://forms.gle/13j7yMGbBd6Kc6g88
                          </a>
                        </div>
                        <a 
                          href="https://forms.gle/13j7yMGbBd6Kc6g88" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="shrink-0 px-4 py-2 bg-brand-sage text-white font-medium text-[14.4px] rounded-full hover:bg-brand-brown transition-all text-center flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <span>신청 링크 열기</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    )}

                    <NeighborAppForm 
                      ministryName={neighborItems[neighborSubpageId].title} 
                      hideTypeSelection={neighborSubpageId === 1}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : isSermonsActive ? (
        <div className="min-h-screen bg-brand-cream/40 font-sans pb-16 pt-[88px] md:pt-[100px] subpage-shell">
          {/* Sermons Hero */}
          <div className="subpage-hero relative h-[45vh] md:h-[30vh] w-full overflow-hidden">
            <img 
              src={`${import.meta.env.BASE_URL}images/sea.png`}
              alt="성경책과 은은한 빛, 은혜로운 예배와 평강" 
              className="w-full h-full object-cover brightness-[0.7]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-end">
              <div className="max-w-7xl mx-auto w-full px-6 pb-8 md:pb-12 flex justify-between items-end">
                <div className="text-left">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-brand-gold text-brand-brown text-[13.2px] font-bold tracking-wider mb-2 font-sans">
                    SERMONS
                  </span>
                  <h1 className="text-3xl md:text-5xl font-serif text-white font-bold leading-tight mb-2">
                    설교
                  </h1>
                  <p className="hidden md:block text-white/85 text-[15.8px] md:text-[18.5px] font-light max-w-[1200px] leading-relaxed w-full">
                    선포되는 보배로운 하나님의 말씀을 통해 세상을 이길 지혜와 하늘의 신령한 평정을 누리시길 기도합니다.
                  </p>
                </div>
                <button 
                  onClick={() => { window.location.hash = ''; }}
                  className="md:hidden flex items-center gap-1 text-white/90 hover:text-white text-[13.8px] font-medium shrink-0 mb-1 pb-1 border-b border-white/20 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 shrink-0" />
                  <span>뒤로 가기</span>
                </button>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-6 mt-10 md:mt-12 text-left">
            {/* Back button and Breadcrumb */}
            <div className="hidden md:flex mb-3 md:mb-8 flex-wrap items-center justify-between gap-x-4 gap-y-1.5 md:gap-4">
              <button 
                onClick={() => { window.location.hash = ''; }}
                className="text-brand-sage hover:text-brand-brown text-sm font-medium inline-flex items-center gap-1 cursor-pointer overflow-hidden leading-none border-none bg-transparent py-1 px-0"
              >
                <ChevronLeft className="w-4 h-4 shrink-0" />
                <span>메인 화면으로 돌아가기</span>
              </button>
              
              <div className="text-[13.2px] text-brand-brown/50 font-medium font-sans">
                설교 &gt; <span className="text-brand-sage">{sermonTab === '주일_금요' ? '주일/금요 설교' : '수요/특별 설교'}</span>
              </div>
            </div>

            {/* Modern Tab Segmented Control */}
            <div className="flex md:justify-center mb-8 md:mb-12">
              <div className="flex md:inline-flex p-1.5 bg-brand-cream/80 border border-brand-gold/15 rounded-2xl shadow-sm w-full md:w-auto overflow-x-auto pb-1.5 md:pb-0 gap-1 md:gap-0">
                <button
                  onClick={() => {
                    window.location.hash = '#설교말씀/주일금요';
                    setSermonTab('주일_금요');
                  }}
                  className={`flex-1 md:flex-initial text-center whitespace-nowrap px-4 md:px-8 py-3 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                    sermonTab === '주일_금요' 
                      ? 'bg-brand-sage text-white shadow-md shadow-brand-sage/20 border border-brand-sage' 
                      : 'text-brand-brown/80 hover:text-brand-sage hover:bg-brand-sage/5 border border-transparent'
                  }`}
                >
                  주일/금요 설교
                </button>
                <button
                  onClick={() => {
                    window.location.hash = '#설교말씀/수요특별';
                    setSermonTab('수요_특별');
                  }}
                  className={`flex-1 md:flex-initial text-center whitespace-nowrap px-4 md:px-8 py-3 rounded-xl text-xs md:text-sm font-semibold transition-all cursor-pointer ${
                    sermonTab === '수요_특별' 
                      ? 'bg-brand-sage text-white shadow-md shadow-brand-sage/20 border border-brand-sage' 
                      : 'text-brand-brown/80 hover:text-brand-sage hover:bg-brand-sage/5 border border-transparent'
                  }`}
                >
                  수요/특별 설교
                </button>
              </div>
            </div>

            {/* Tab content cards */}
            {sermonTab === '주일_금요' ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {sundayFridaySermons.slice(0, sundaySermonLimit).map((sermon, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(0.05 + (idx % 6) * 0.05, 0.4) }} 
                      className="group cursor-pointer text-left bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-md transition-shadow"
                      onClick={() => setActiveVideo({
                        title: sermon.title,
                        embedUrl: sermon.embedUrl
                      })}
                    >
                      <div className="relative aspect-video rounded-[1.5rem] overflow-hidden mb-2 md:mb-4">
                        <img 
                           src={sermon.imageUrl} 
                           alt={sermon.sermonTitle} 
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                           referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                          <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-500">
                            <div className={`w-11 h-11 ${sermon.type.includes('주일') ? 'bg-brand-gold' : 'bg-brand-sage'} rounded-full flex items-center justify-center shadow-md`}>
                              <MonitorPlay className="w-5 h-5 fill-current" />
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 px-3 py-1 bg-brand-brown/85 backdrop-blur-sm text-brand-cream text-[9px] uppercase tracking-wider rounded-full font-medium">
                          {sermon.type}
                        </div>
                      </div>
                      <div className="px-1">
                        <h3 className="text-[17px] md:text-lg font-serif text-brand-brown font-bold mb-1 md:mb-2 group-hover:text-brand-sage transition-colors leading-snug line-clamp-1">
                          {sermon.sermonTitle}
                        </h3>
                        <div className="flex items-center gap-3 text-brand-brown/65 text-xs">
                          <span className="flex items-center gap-1 font-medium"><Clock className="w-3.5 h-3.5" /> {sermon.date}</span>
                          <span className="w-px h-2.5 bg-brand-gold/40"></span>
                          <span className="font-semibold text-brand-sage">{sermon.passage}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Show More Button */}
                {sundaySermonLimit < sundayFridaySermons.length && (
                  <div className="flex justify-center mt-12 mb-6">
                    <button
                      onClick={() => setSundaySermonLimit(prev => prev + 6)}
                      className="px-8 py-3.5 rounded-xl bg-brand-sage text-white font-semibold text-xs md:text-sm hover:bg-brand-brown transition-all shadow-md flex items-center gap-2 cursor-pointer border-none"
                    >
                      <span>설교 더보기</span>
                      <ChevronDown className="w-4 h-4 shrink-0 animate-bounce" />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {wednesdaySpecialSermons.slice(0, wednesdaySermonLimit).map((sermon, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: Math.min(0.05 + (idx % 6) * 0.05, 0.4) }} 
                      className="group cursor-pointer text-left bg-white rounded-[2rem] p-4 shadow-sm hover:shadow-md transition-shadow"
                      onClick={() => setActiveVideo({
                        title: sermon.title,
                        embedUrl: sermon.embedUrl
                      })}
                    >
                      <div className="relative aspect-video rounded-[1.5rem] overflow-hidden mb-2 md:mb-4">
                        <img 
                           src={sermon.imageUrl} 
                           alt={sermon.sermonTitle} 
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                           referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                          <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-500">
                            <div className={`w-11 h-11 ${sermon.type.includes('특별') ? 'bg-brand-gold' : 'bg-brand-sage'} rounded-full flex items-center justify-center shadow-md`}>
                              <MonitorPlay className="w-5 h-5 fill-current" />
                            </div>
                          </div>
                        </div>
                        <div className="absolute bottom-4 left-4 px-3 py-1 bg-brand-brown/85 backdrop-blur-sm text-brand-cream text-[9px] uppercase tracking-wider rounded-full font-medium">
                          {sermon.type}
                        </div>
                      </div>
                      <div className="px-1">
                        <h3 className="text-[17px] md:text-lg font-serif text-brand-brown font-bold mb-1 md:mb-2 group-hover:text-brand-sage transition-colors leading-snug line-clamp-1">
                          {sermon.sermonTitle}
                        </h3>
                        <div className="flex items-center gap-3 text-brand-brown/65 text-xs">
                          <span className="flex items-center gap-1 font-medium"><Clock className="w-3.5 h-3.5" /> {sermon.date}</span>
                          <span className="w-px h-2.5 bg-brand-gold/40"></span>
                          <span className="font-semibold text-brand-sage">{sermon.passage}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Show More Button */}
                {wednesdaySermonLimit < wednesdaySpecialSermons.length && (
                  <div className="flex justify-center mt-12 mb-6">
                    <button
                      onClick={() => setWednesdaySermonLimit(prev => prev + 6)}
                      className="px-8 py-3.5 rounded-xl bg-brand-sage text-white font-semibold text-xs md:text-sm hover:bg-brand-brown transition-all shadow-md flex items-center gap-2 cursor-pointer border-none"
                    >
                      <span>설교 더보기</span>
                      <ChevronDown className="w-4 h-4 shrink-0 animate-bounce" />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      ) : (
        <>
          <style dangerouslySetInnerHTML={{ __html: `
            @media (width: 820px) {
              .ipad-air-hero {
                height: ${isScrolled ? '52.9vh' : '60.8vh'} !important;
              }
            }
            @media (width: 820px) and (height: 1180px) {
              .ipad-air-hero {
                height: ${isScrolled ? '52.9vh' : '60.8vh'} !important;
              }
            }
            @media (width: 1180px) and (height: 820px) {
              .ipad-air-hero {
                height: ${isScrolled ? '52.9vh' : '60.8vh'} !important;
              }
            }
            @media (width: 768px) {
              .ipad-air-hero {
                height: ${isScrolled ? '57.6vh' : '66.2vh'} !important;
              }
            }
            @media (width: 768px) and (height: 1024px) {
              .ipad-air-hero {
                height: ${isScrolled ? '57.6vh' : '66.2vh'} !important;
              }
            }
            @media (width: 1024px) and (height: 768px) {
              .ipad-air-hero {
                height: ${isScrolled ? '57.6vh' : '66.2vh'} !important;
              }
            }
            @media (width: 1024px) {
              .ipad-air-hero {
                height: ${isScrolled ? '63.75vh' : '82.5vh'} !important;
              }
            }
            @media (width: 1024px) and (height: 1366px) {
              .ipad-air-hero {
                height: ${isScrolled ? '63.75vh' : '82.5vh'} !important;
              }
            }
            @media (width: 1366px) and (height: 1024px) {
              .ipad-air-hero {
                height: ${isScrolled ? '63.75vh' : '82.5vh'} !important;
              }
            }
          `}} />
          {/* Hero Section */}
          <section 
            ref={heroRef}
            onTouchStart={handleHeroTouchStart}
            onTouchEnd={handleHeroTouchEnd}
            className={`ipad-air-hero relative flex items-center justify-center overflow-hidden transition-all duration-700 ease-out ${
              isScrolled ? 'h-[85vh] sm:h-[95vh] md:h-[40vh] lg:h-[110vh]' : 'h-[110vh] md:h-[46vh] lg:h-[110vh]'
            }`}
          >
        {/* State-driven Animated Background */}
        <motion.div
          style={{ opacity }}
          className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.div
                key={currentHeroSlide}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1.02 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="absolute inset-0 overflow-hidden"
              >
              <img
                src={heroSlides[currentHeroSlide].image}
                alt="Church Slide Image"
                className={`block w-full h-full min-w-full min-h-full object-cover brightness-75 ${
                  currentHeroSlide === 1
                    ? 'object-[40%_center] md:object-center'
                    : 'object-center'
                }`}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-brand-brown/40 via-transparent to-brand-cream"></div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Slide Content */}
        <div className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-700 ease-out ${
          isScrolled ? '-translate-y-16 sm:-translate-y-10 lg:translate-y-0' : 'translate-y-0'
        }`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentHeroSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h1 className={`font-serif text-white leading-[1.12] mb-4 md:mb-8 drop-shadow-lg ${
                  currentHeroSlide === 0
                    ? 'text-[1.65rem] md:text-[41px] lg:text-[50px]'
                    : 'text-[2rem] md:text-[41px] lg:text-[61px]'
                }`}
              > {heroSlides[currentHeroSlide].title}
              </h1>
          
              {currentHeroSlide !== 0 && (
                <p className={`text-white/90 text-sm md:text-base lg:text-xl font-light max-w-2xl mx-auto leading-relaxed transition-all duration-700 ease-out ${
                  isScrolled ? 'mb-6 sm:mb-8 md:mb-12' : 'mb-12'
                }`}>
                  {heroSlides[currentHeroSlide].description}
                </p>
              )}
          
              <div className={`flex justify-center items-center ${
                    currentHeroSlide === 0 ? 'mt-6 md:mt-8' : ''
                  }`}
                >
                <button onClick={heroSlides[currentHeroSlide].primaryAction}
                  className={`px-8 py-4 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded-full text-lg md:text-sm lg:text-lg font-medium transition-all shadow-xl hover:-translate-y-1 cursor-pointer ${
                    currentHeroSlide === 0
                      ? 'bg-white/75 text-brand-brown backdrop-blur-md border border-white/50 hover:bg-white'
                      : 'bg-white text-brand-brown hover:bg-white/85'
                  }`}
                >
                  {heroSlides[currentHeroSlide].primaryText}
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Left/Right Slide Arrows overlay */}
        <div className="absolute inset-y-0 left-0 z-20 flex items-center pl-4 md:pl-8 pointer-events-none lg:left-1/2 lg:-translate-x-[500px] lg:pl-0">
          <button
            onClick={() => setCurrentHeroSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/15 hover:bg-black/45 border border-white/10 hover:border-white/20 text-white flex items-center justify-center transition-all hover:scale-105 pointer-events-auto cursor-pointer"
            aria-label="이전 슬라이드"
          >
            <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 z-20 flex items-center pr-4 md:pr-8 pointer-events-none lg:right-1/2 lg:translate-x-[500px] lg:pr-0">
          <button
            onClick={() => setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length)}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/15 hover:bg-black/45 border border-white/10 hover:border-white/20 text-white flex items-center justify-center transition-all hover:scale-105 pointer-events-auto cursor-pointer"
            aria-label="다음 슬라이드"
          >
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="absolute bottom-36 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentHeroSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentHeroSlide === idx 
                  ? 'w-8 bg-brand-gold' 
                  : 'w-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`${idx + 1}번째 슬라이드로 이동`}
            />
          ))}
        </div>

        {/* Decorative Curve */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-brand-cream curve-top z-10"></div>
      </section>

      {/* Quick Links Section */}
      <section className={`relative z-20 px-6 pt-[100px] pb-[50px] transition-all duration-700 ease-out ${
        isScrolled ? '-mt-24 sm:-mt-16 lg:-mt-24' : '-mt-16'
      } md:-mt-16 lg:-mt-24`}>
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-8">
          {[
            { 
              title: "예배안내", 
              desc: "예배시간과 다양한 예배를 안내합니다.", 
              icon: <Church className="w-12 h-12" />, 
              color: "text-brand-gold",
              hash: "#예배안내"
            },
            { 
              title: "오시는길", 
              desc: "영신교회로 오시는 길을 상세히 안내합니다.", 
              icon: <MapPin className="w-12 h-12" />, 
              color: "text-brand-gold",
              hash: "#오시는길"
            },
            { 
              title: "새가족안내", 
              desc: "영신교회의 새가족이 되신 것을 환영합니다.", 
              icon: <UserPlus className="w-12 h-12" />, 
              color: "text-brand-gold",
              hash: "#새가족안내"
            },
            { 
              title: "온라인예배", 
              desc: "언제 어디서나 함께 드리는 온라인 예배입니다.", 
              icon: <MonitorPlay className="w-12 h-12" />, 
              color: "text-brand-brown",
              hash: "#설교말씀/주일금요"
            }
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              whileTap={{ y: -8 }}
              onClick={() => { window.location.hash = item.hash; }}
              className="bg-white p-4 md:p-5 lg:p-8 rounded-[2.5rem] shadow-xl flex flex-col items-center justify-between text-center group transition-all border border-brand-gold/10 min-h-[160px] sm:min-h-[168px] md:min-h-[158px] lg:min-h-[240px] cursor-pointer"
            >
              <div className="flex flex-col items-center gap-1 sm:gap-2 flex-1 w-full">
                <div className={`transition-transform group-hover:scale-110 group-active:scale-110 duration-500 flex-shrink-0 ${item.color} mb-1 sm:mb-4 md:mb-1.5 lg:mb-4`}>
                  <div className="scale-75 sm:scale-100">{item.icon}</div>
                </div>
                
                <div className="flex flex-col justify-center items-center w-full">
                  <h3 className="font-serif text-[16.33px] sm:text-[19.44px] md:text-[19.44px] lg:text-[25.92px] font-bold text-brand-brown mb-0.5 sm:mb-2 md:mb-0 lg:mb-2 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="hidden sm:block md:hidden lg:block text-brand-brown/50 text-[10.8px] sm:text-[12.96px] lg:text-[15.12px] leading-tight whitespace-pre-line px-2">
                    {item.desc}
                  </p>
                </div>
              </div>

              <div className="mt-2 sm:mt-4 md:mt-2 lg:mt-4">
                <div className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-brand-gold rounded-full flex items-center justify-center text-white shadow-lg transition-all group-hover:bg-brand-sage group-hover:shadow-brand-sage/20 group-hover:scale-110 group-active:bg-brand-sage group-active:shadow-brand-sage/20 group-active:scale-110">
                  <ArrowRight className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Sermons Section */}
      <section id="설교말씀" className="pt-[36px] md:pt-[72px] pb-[36px] bg-white overflow-hidden">
         <div className="max-w-7xl mx-auto px-6">
          <div className="mb-4 md:mb-6">
            <motion.div {...fadeIn} className="text-left">
              <div className="flex items-center gap-2 text-brand-sage font-medium mb-4">
                <MonitorPlay className="w-5 h-5" />
                <span>설교 말씀</span>
              </div>
              <div className="flex items-center justify-between gap-4 mb-4">
                <h2 className="text-3xl md:text-3xl lg:text-5xl font-serif text-brand-brown">말씀의 은혜</h2>
                <a 
                  href="#설교말씀/주일금요"
                  className="flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 bg-brand-cream border border-brand-gold/20 text-brand-brown rounded-full hover:bg-brand-brown hover:text-brand-cream transition-all group font-medium shadow-sm text-xs mt-1 cursor-pointer"
                >
                  설교 말씀 더보기 <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 landscape:lg:gap-16">
            {/* Sunday Sermon */}
            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.1 }} 
              className="group cursor-pointer"
              onClick={() => setActiveVideo({
                title: "주일 설교: 복음, 그 가슴 뛰는 부르심",
                embedUrl: "https://www.youtube.com/embed/5qap5aO4i9A"
              })}
            >
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-4 md:mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=2671&auto=format&fit=crop" 
                  alt="Sunday Sermon Thumbnail" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-500">
                    <div className="w-16 h-16 bg-brand-gold rounded-full flex items-center justify-center shadow-lg">
                      <MonitorPlay className="w-8 h-8 fill-current" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 px-4 py-2 bg-brand-brown/80 backdrop-blur-sm text-brand-cream text-[10px] uppercase tracking-widest rounded-full">
                  이번주 주일 설교
                </div>
              </div>
              <h3 className="text-2xl md:text-base lg:text-3xl font-serif text-brand-brown mb-1.5 md:mb-3 group-hover:text-brand-sage transition-colors leading-tight">
                복음, 그 가슴 뛰는 부르심
              </h3>
              <div className="flex items-center gap-4 text-brand-brown/50 text-sm">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 2026. 05. 17</span>
                <span className="w-px h-3 bg-brand-gold/30"></span>
                <span>로마서 1:16-17</span>
              </div>
            </motion.div>

            {/* Friday Sermon */}
            <motion.div 
              {...fadeIn} 
              transition={{ delay: 0.2 }} 
              className="hidden md:block group cursor-pointer"
              onClick={() => setActiveVideo({
                title: "금요 기도회: 끝까지 견디는 믿음의 소망",
                embedUrl: "https://www.youtube.com/embed/coBId_Pehig"
              })}
            >
              <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-4 md:mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?q=80&w=800" 
                  alt="Friday Prayer Thumbnail" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white scale-90 group-hover:scale-100 transition-transform duration-500">
                    <div className="w-16 h-16 bg-brand-sage rounded-full flex items-center justify-center shadow-lg">
                      <MonitorPlay className="w-8 h-8 fill-current" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 px-4 py-2 bg-brand-brown/80 backdrop-blur-sm text-brand-cream text-[10px] uppercase tracking-widest rounded-full">
                  금요 기도회
                </div>
              </div>
              <h3 className="text-2xl md:text-base lg:text-3xl font-serif text-brand-brown mb-1.5 md:mb-3 group-hover:text-brand-sage transition-colors leading-tight">
                끝까지 견디는 믿음의 소망
              </h3>
              <div className="flex items-center gap-4 text-brand-brown/50 text-sm">
                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 2026. 05. 15</span>
                <span className="w-px h-3 bg-brand-gold/30"></span>
                <span>히브리서 11:1-3</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section id="핵심사역" className="hidden md:block h-[700px] py-16 bg-brand-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 text-brand-sage font-medium mb-4">
              <Leaf className="w-5 h-5" />
              <span>영신교회의 핵심 사역</span>
            </div>
            <h2 className="text-[22px] md:text-[22px] lg:text-[31px] font-serif mb-4 text-brand-brown leading-tight">
              따뜻한 환대와 <br className="md:hidden" /> 깊이 있는 영적 성장
            </h2>
            <p className="text-[13px] text-brand-brown/80 leading-relaxed italic">
              "세상의 차가운 그늘 아래 있는 이들에게 <br className="md:hidden" /> 하나님의 따뜻한 빛을 전합니다."
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 items-stretch md:h-[400px]">
            <motion.div {...fadeIn} className="relative h-[400px]">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-sage/10 rounded-full blur-3xl"></div>
              <a 
                href={activeCoreValue === 0 ? "#이웃사랑/2" : activeCoreValue === 1 ? "#이웃사랑/1" : "#이웃사랑/0"}
                className="relative z-10 rounded-[4rem] overflow-hidden shadow-2xl h-full w-full block group hover:shadow-brand-sage/20 hover:shadow-2xl transition-all duration-300"
              >
                {/* Active Core Value Image */}
                <motion.img 
                  key={activeCoreValue}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  src={coreValues[activeCoreValue].image} 
                  alt={coreValues[activeCoreValue].alt} 
                  className="h-full w-full object-cover aspect-[4/3] group-hover:scale-[1.03] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  id="core-value-active-img"
                />
                
                {/* Elegant Overlay Layer */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/55 via-black/20 to-transparent flex flex-col justify-start p-8 md:p-10">
                  <motion.div
                    key={`${activeCoreValue}-overlay`}
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="text-white text-left"
                  >
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-[10px] md:text-sm font-semibold tracking-wider mb-2 border border-white/10 shadow-sm" id="overlay-badge">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
                      CORE SERVICE
                    </span>
                    <h3 className="font-serif text-2xl md:text-4xl font-medium tracking-tight mb-2 drop-shadow-md text-white group-hover:text-brand-gold transition-colors" id="overlay-title">
                      {coreValues[activeCoreValue].title}
                    </h3>
                    <p className="text-white/85 text-sm md:text-base font-light max-w-xs md:max-w-md leading-relaxed drop-shadow-md" id="overlay-description">
                      {coreValues[activeCoreValue].desc}
                    </p>
                  </motion.div>
                </div>
              </a>
            </motion.div>
            <motion.div {...fadeIn} transition={{ delay: 0.1 }} className="flex flex-col justify-center h-full">
              <div className="grid grid-cols-1 grid-rows-3 gap-3 h-full">
                {coreValues.map((item, idx) => {
                  const isActive = activeCoreValue === idx;
                  return (
                    <button
                      key={item.title}
                      onClick={() => {
                        setActiveCoreValue(idx);
                        window.location.hash = coreValueRoutes[idx];
                      }}
                      className={`flex h-full items-center justify-between gap-4 py-4 px-5 text-left rounded-3xl transition-all duration-300 border ${
                        isActive 
                          ? "bg-brand-sage border-brand-sage text-white shadow-lg scale-[1.02]" 
                          : "bg-white border-transparent hover:border-brand-gold/30 shadow-sm hover:shadow-md text-brand-brown hover:scale-[1.01]"
                      } cursor-pointer outline-none`}
                      id={`core-value-btn-${idx}`}
                    >
                      <div className={isActive ? "text-white" : "text-brand-sage"}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-serif text-[22px] mb-1 ${isActive ? "text-white" : "text-brand-brown"}`}>{item.title}</h4>
                        <p className={`text-[17px] leading-relaxed ${isActive ? "text-white/80" : "text-brand-brown/70"}`}>{item.desc}</p>
                      </div>
                      <ChevronRight className={`w-6 h-6 shrink-0 ${isActive ? "text-white" : "text-brand-sage"}`} />
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Canaan Section (Special Section for Non-attenders) */}
      <section id="가나안쉼터" className="h-[700px] pt-[38px] pb-[76px] md:py-[76px] relative overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2000&auto=format&fit=crop" 
            alt="Warm rest space" 
            className="w-full h-full object-cover opacity-25 scale-150 md:scale-[1.8] origin-center"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="max-w-[1280px] mx-auto px-6 relative z-10 text-center">
          <motion.div {...fadeIn}>
            <div className="inline-flex items-center gap-1 sm:gap-2 px-2.5 py-1 sm:px-4 sm:py-2 bg-brand-gold/10 text-brand-sage rounded-full text-[10px] sm:text-sm font-medium mb-3 sm:mb-6">
              <Wind className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>당신의 쉼을 위한 공간</span>
            </div>
            <h2 className="text-[23px] sm:text-[28px] md:text-[27px] lg:text-[38px] font-serif text-brand-brown mb-6 leading-tight">
              언제나 찾아오셔도 좋습니다. <br />
              당신의 영혼이 잠시 <br className="md:hidden" /> 머물 수 있는 곳이기를.
            </h2>
            <p className="hidden sm:block text-base text-brand-brown/70 mb-10 leading-relaxed max-w-2xl mx-auto">
              신앙이 고민될 때, 혹은 제도적 교회에 지쳤을 때 <br />
              부담 없이 오셔서 차 한 잔 마시며 책을 읽거나 <br />
              조용히 기도의 시간을 가질 수 있는 열린 공간입니다.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-brand-gold/20 hover:border-brand-sage transition-all group">
                <div className="w-12 h-12 mb-4 rounded-full bg-brand-gold/10 text-brand-gold flex items-center justify-center group-hover:bg-brand-gold group-hover:text-white transition-colors">
                  <Church className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-[14px] md:text-xl mb-3 group-hover:text-brand-sage transition-colors">기도의 집</h3>
                <p className="text-[11.9px] md:text-[17px] text-brand-brown/70 mb-4 font-light">익명으로 기도를 부탁하시거나, 마음의 짐을 털어놓으세요. 저희가 함께 마음을 모으겠습니다.</p>
                <button 
                  onClick={() => {
                    setIsPrayerModalOpen(true);
                    setIsSubmitted(false);
                  }}
                  className="text-brand-sage flex items-center gap-2 font-medium text-[9.8px] md:text-sm hover:underline cursor-pointer"
                >
                  기명/무기명 기도요청 <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-brand-gold/20 hover:border-brand-sage transition-all group">
                <div className="w-12 h-12 mb-4 rounded-full bg-brand-sage/10 text-brand-sage flex items-center justify-center group-hover:bg-brand-sage group-hover:text-white transition-colors">
                  <Cross className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-[14px] md:text-xl mb-3 group-hover:text-brand-sage transition-colors">예수님은 누구이신가</h3>
                <p className="text-[11.9px] md:text-[17px] text-brand-brown/70 mb-4 font-light">예수님이 누구신지, 그분이 우리에게 어떤 의미인지 쉽고 따뜻하게 알아볼 수 있습니다.</p>
                <button
                  onClick={() => { window.location.hash = '#새가족안내'; }}
                  className="text-brand-sage flex items-center gap-2 font-medium text-[9.8px] md:text-sm cursor-pointer"
                >
                  더 알아보기 <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Generation Section */}
      <section id="다음세대" className="h-[700px] pt-[38px] pb-[19px] md:pt-[76px] md:pb-[19px] lg:pb-[38px] bg-brand-cream/40 relative overflow-hidden border-t border-brand-gold/10">
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-sage/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-gold/5 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-2 md:mb-4 lg:mb-8">
            <motion.div {...fadeIn} className="text-left">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-sage/10 text-brand-sage rounded-full text-xs font-semibold tracking-wide mb-3" id="nextgen-section-badge">
                <Heart className="w-3.5 h-3.5" />
                <span>영신교회 다음세대</span>
              </span>
              <h2 className="text-[22px] md:text-[30px] font-serif text-brand-brown leading-tight animate-fade-in">
                아이들의 꿈이 자라고, <br className="sm:hidden" /> 믿음이 깊어지는 품
              </h2>
            </motion.div>
            
            {/* Slide Arrows */}
            <motion.div {...fadeIn} className="flex gap-2.5 mt-4 md:mt-0" id="nextgen-arrows">
              <button 
                onClick={handlePrevGenSlide}
                className="w-11 h-11 rounded-full border border-brand-gold/30 hover:border-brand-sage bg-white flex items-center justify-center text-brand-brown hover:text-brand-sage transition-all shadow-sm hover:shadow active:scale-90 cursor-pointer"
                aria-label="이전 부서"
                id="nextgen-prev-arrow"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNextGenSlide}
                className="w-11 h-11 rounded-full bg-brand-sage flex items-center justify-center text-white hover:bg-brand-brown transition-all shadow-md active:scale-90 cursor-pointer"
                aria-label="다음 부서"
                id="nextgen-next-arrow"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>

          {/* Slider Container with absolute sizing */}
          <div className="relative overflow-hidden pt-2 pb-4 md:pt-4 md:pb-2 lg:py-4 -mx-3 px-3">
            <motion.div 
              className={`flex select-none ${isDragging.current ? 'cursor-grabbing' : 'cursor-grab'}`}
              style={{ 
                transform: `translateX(calc(-${nextGenIndex * (100 / visibleCount)}% + ${dragOffset}px))`,
                transition: isDragging.current ? 'none' : 'transform 500ms cubic-bezier(0.25, 1, 0.5, 1)'
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              id="nextgen-slider-tray"
            >
              {nextGenItems.map((item, idx) => {
                const isSelected = selectedNextGen === idx;
                return (
                  <div 
                    key={item.title} 
                    className="w-full sm:w-1/2 lg:w-1/3 shrink-0 p-3"
                    id={`nextgen-slide-col-${idx}`}
                  >
                    <button
                      onClick={(e) => {
                        if (hasDragged.current) {
                          e.preventDefault();
                          return;
                        }
                        setSelectedNextGen(idx);
                        window.location.hash = `#nextgen/${idx}`;
                      }}
                      className={`w-full text-left rounded-[2rem] overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 border-2 flex flex-col h-full group ${
                        isSelected 
                          ? "border-brand-sage ring-4 ring-brand-sage/10" 
                          : "border-transparent hover:border-brand-gold/30"
                      } cursor-pointer outline-none`}
                      id={`nextgen-card-btn-${idx}`}
                    >
                      {/* Image Button with Zoom Effect */}
                      <div className="relative aspect-[4/3] md:aspect-[16/10] w-full overflow-hidden select-none pointer-events-none">
                        <img 
                          src={item.image} 
                          alt={item.alt} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          draggable="false"
                          referrerPolicy="no-referrer"
                          loading="lazy"
                        />
                      </div>

                      {/* Content Panel */}
                      <div className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="font-serif text-[19.8px] md:text-lg text-brand-brown mb-1 md:mb-2 group-hover:text-brand-sage transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-[14.4px] text-brand-brown/75 leading-relaxed font-light mb-4 line-clamp-2 hidden md:block">
                            {item.desc}
                          </p>
                        </div>

                        {/* Quick Spec Badge */}
                        <div className="pt-2 md:pt-4 border-t border-brand-gold/10 space-y-1.5 text-left">
                          <div className="flex items-center gap-2 text-[14.52px] md:text-[13.2px] text-brand-brown/65">
                            <span className="font-semibold text-brand-sage shrink-0 bg-brand-sage/10 px-1.5 py-0.5 rounded">대상</span>
                            <span className="truncate">{item.target}</span>
                          </div>
                          <div className="flex items-center gap-2 text-[14.52px] md:text-[13.2px] text-brand-brown/65">
                            <span className="font-semibold text-brand-gold/90 shrink-0 bg-brand-gold/10 px-1.5 py-0.5 rounded">시간</span>
                            <span className="truncate">{item.time}</span>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Worship Info */}
      <section id="예배안내" className="h-[800px] pt-[42px] pb-12 md:pt-[110px] lg:pt-[138px] md:pb-12 bg-brand-brown text-brand-cream relative overflow-hidden">
        {/* Curvy background effect */}
        <div className="absolute top-0 left-0 w-full h-6 md:h-24 bg-brand-cream curve-bottom"></div>
        
        <div className="max-w-7xl mx-auto px-6 pt-[18px] md:pt-[46px] lg:pt-[58px]">
          <motion.div {...fadeIn} className="text-center mb-4 md:mb-8">
            <h2 className="text-4xl md:text-4xl lg:text-5xl font-serif mb-2 md:mb-4">예배 시간 및 장소</h2>
            <p className="text-brand-gold/80 font-light tracking-widest uppercase block md:block lg:block text-xs md:text-[10px] lg:text-xs">Worship Schedule</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-8 items-stretch mt-5">
            {/* Left Column: 찾아오시는 길 */}
            <div id="오시는길" className="md:col-span-3 lg:col-span-3 order-2 md:order-1 lg:order-1 bg-white p-6 md:p-6 lg:p-10 rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] text-brand-brown shadow-2xl flex flex-col justify-between md:h-[430px] lg:h-[430px]">
              <div>
                <h3 className="font-serif text-xl md:text-lg lg:text-2xl mb-4 md:mb-2 lg:mb-4 text-brand-brown text-left">찾아오시는 길</h3>
                <div className="space-y-3 md:space-y-1.5 mb-6 md:mb-3 lg:mb-6 text-left">
                  <div className="flex items-start gap-2.5 text-brand-brown/85 text-[15.4px] md:text-xs lg:text-base font-normal leading-relaxed">
                    <MapPin className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 text-brand-sage shrink-0 mt-1" id="directions-map-icon" />
                    <span className="flex items-center flex-wrap gap-2">
                       <span>주소 : 서울특별시 양천구 목동로 19길 28</span>
                       <button
                        onClick={handleCopyAddress}
                        className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium rounded-md bg-brand-cream hover:bg-brand-sage hover:text-white text-brand-brown/80 transition-all border border-brand-gold/20 active:scale-95 cursor-pointer shrink-0 ml-1"
                        title="주소 복사"
                        id="copy-address-btn"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3 h-3 text-brand-sage" />
                            <span className="text-[11px]">복사완료</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span className="text-[11px]">복사</span>
                          </>
                        )}
                      </button>
                    </span>
                  </div>
                  <div className="flex items-start gap-2.5 text-brand-brown/85 text-[15.4px] md:text-xs lg:text-base font-normal leading-relaxed">
                    <Phone className="w-4 h-4 md:w-4 md:h-4 lg:w-5 lg:h-5 text-brand-sage shrink-0 mt-1" id="directions-phone-icon" />
                    <span>연락처 : 02-123-4567</span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="w-full aspect-[4/3] md:flex-1 md:aspect-auto lg:aspect-auto lg:flex-1 lg:min-h-[160px] bg-gray-100 rounded-[1.5rem] md:rounded-[1.8rem] lg:rounded-[2rem] overflow-hidden border border-brand-gold/10 shadow-inner">
                <iframe 
                  src="https://maps.google.com/maps?q=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EC%96%91%EC%B2%9C%EA%B5%AC%20%EB%AA%A9%EB%8F%99%EB%A1%9C%2019%EA%B8%B8%2028&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                  className="w-full h-full border-0" 
                  allowFullScreen 
                  loading="lazy" 
                  title="영신교회 지도"
                  referrerPolicy="no-referrer"
                  id="google-maps-iframe"
                ></iframe>
              </div>
            </div>

            {/* Right Column: 예배시간 정보 리스트 */}
            <div className="md:col-span-2 lg:col-span-2 order-1 md:order-2 lg:order-2 grid grid-cols-2 md:grid-cols-1 md:grid-rows-5 lg:grid-cols-1 gap-3 md:gap-1.5 lg:gap-3 lg:justify-center justify-between md:self-center md:h-[430px] lg:h-[430px]">
              {[
                { type: "주일 1부 예배", time: "09:30", place: "교회 2층 본당" },
                { type: "주일 2부 예배", time: "11:30", place: "교회 2층 본당" },
                { type: "주일 청년부 예배", time: "14:30", place: "교회 2층 본당" },
                { type: "금요 기도회", time: "20:30", place: "교회 2층 본당" },
                { type: "수요 성경 대학", time: "19:30", place: "교회 2층 본당" }
              ].map((item, idx) => (
                <motion.div 
                   key={idx}
                   whileHover={{ scale: 1.02 }}
                   className={`bg-white/5 backdrop-blur-sm px-4 md:px-4 lg:px-6 py-2.5 md:py-0.5 lg:py-4 rounded-xl md:rounded-xl lg:rounded-2xl border border-white/10 hover:bg-white/15 transition-all items-center justify-between md:justify-between lg:justify-between h-[58px] sm:h-[62px] md:h-full lg:h-full md:min-h-0 lg:min-h-0 ${
                     idx === 4 ? 'hidden md:flex' : 'flex'
                   } flex-row md:flex-row lg:flex-row md:gap-0 lg:gap-0`}
                   id={`worship-schedule-item-${idx}`}
                >
                  {/* PC Version Layout (Hidden on Mobile) */}
                  <div className="hidden md:flex flex-row items-center justify-between text-left gap-4 w-full">
                    {/* Left: Worship Type */}
                    <div className="text-brand-gold/60 text-[16.94px] md:text-[14.52px] xl:text-[14.52px] min-[1400px]:text-[16.94px] lg:text-[16.94px] uppercase tracking-widest font-semibold leading-none whitespace-nowrap">
                      <span className="hidden lg:inline">{item.type}</span>
                      <span className="lg:hidden">
                        {item.type === "주일 1부 예배" ? "1부예배" :
                         item.type === "주일 2부 예배" ? "2부예배" :
                         item.type === "주일 청년부 예배" ? "청년부" :
                         item.type === "수요 성경 대학" ? "성경대학" : item.type}
                      </span>
                    </div>
                    {/* Right: Place & Time side by side */}
                    <div className="flex flex-row items-center gap-4 whitespace-nowrap">
                      {/* Place */}
                      <div className="flex text-white/40 items-center gap-1 text-[13.2px] leading-none">
                        <MapPin className="w-3.5 h-3.5 text-brand-gold/40 shrink-0" />
                        <span>
                          <span className="hidden lg:inline">{item.place}</span>
                          <span className="lg:hidden">
                            {item.place === "교회 2층 본당" ? "2층 본당" : item.place}
                          </span>
                        </span>
                      </div>
                      {/* Time */}
                      <div className="text-xl md:text-lg xl:text-lg min-[1400px]:text-[22px] lg:text-2xl font-mono tracking-tight text-brand-gold font-light leading-none">
                        {item.time}
                      </div>
                    </div>
                  </div>

                  {/* Mobile Version Layout (Hidden on PC) */}
                  <div className="flex md:hidden items-center justify-between w-full h-full gap-2">
                    <div className="flex flex-col text-left gap-1">
                      <div className="text-brand-gold/60 text-[14.64px] sm:text-[15.97px] uppercase tracking-widest font-semibold leading-none">
                        {item.type === "주일 1부 예배" ? "1부예배" :
                         item.type === "주일 2부 예배" ? "2부예배" :
                         item.type === "주일 청년부 예배" ? "청년부" :
                         item.type === "금요 기도회" ? "금요기도" :
                         item.type === "수요 성경 대학" ? "성경대학" : item.type}
                      </div>
                      <div className="flex text-white/40 items-center gap-1 text-[10.89px] sm:text-[14.52px] leading-none">
                        <MapPin className="w-2.5 h-2.5 text-brand-gold/40 shrink-0" />
                        <span>{item.place === "교회 2층 본당" ? "2층 본당" : item.place}</span>
                      </div>
                    </div>
                    <div className="text-right flex items-center shrink-0">
                      <div className="text-[16.94px] sm:text-[19.36px] font-mono tracking-tight text-brand-gold font-light leading-none">
                        {item.time}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      </>
      )}

      {/* Footer */}
      <footer className="py-16 bg-brand-cream border-t border-brand-gold/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center justify-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-1.5" id="logo-footer">
              <div className="md:hidden block">
                <IconLogo size={33} />
              </div>
              <div className="hidden md:block">
                <IconLogo size={30} />
              </div>
              <span className="font-serif text-[24.2px] md:text-[26px] font-semibold tracking-tight text-brand-brown leading-none mt-[3px]">영신교회</span>
            </div>
            <p className="text-[13.2px] md:text-sm text-brand-gold font-medium tracking-wider">하나님을 기쁘시게 사람을 행복하게</p>
          </div>
          <p className="text-[15.4px] md:text-lg text-brand-brown/50 mb-8 max-w-xl mx-auto leading-relaxed">
            영신교회는 하나님을 향한 바른 예배와<br className="md:hidden" /> 이웃을 향한 사랑의 실천을<br className="hidden md:inline" /> 추구하는<br className="md:hidden" /> 믿음의 공동체입니다.
          </p>
          <div className="flex justify-center gap-6 mb-12">
            {[
              { name: 'Instagram', icon: <Instagram className="w-[24.2px] h-[24.2px] md:w-[22px] md:h-[22px]" /> },
              { name: 'YouTube', icon: <Youtube className="w-[24.2px] h-[24.2px] md:w-[22px] md:h-[22px]" /> },
              { name: 'Facebook', icon: <Facebook className="w-[24.2px] h-[24.2px] md:w-[22px] md:h-[22px]" /> },
              { name: 'Kakao', icon: <MessageSquare className="w-[24.2px] h-[24.2px] md:w-[22px] md:h-[22px]" /> }
            ].map(s => (
              <a 
                key={s.name} 
                href="#" 
                className="w-[48.4px] h-[48.4px] md:w-11 md:h-11 flex items-center justify-center rounded-full bg-brand-gold/10 text-brand-brown/60 hover:bg-brand-sage hover:text-brand-cream transition-all duration-300 shadow-sm"
                aria-label={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>
          <div className="text-[11px] md:text-[10px] uppercase tracking-tighter text-brand-brown/30">
            © 2026 YOUNGSHIN CHURCH. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

      {/* Prayer Request Modal */}
      <AnimatePresence>
        {isPrayerModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPrayerModalOpen(false)}
              className="absolute inset-0 bg-brand-brown/65 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-brand-cream w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden border border-brand-gold/20 flex flex-col max-h-[90vh] z-10"
            >
              {/* Header */}
              <div className="p-6 pb-4 border-b border-brand-gold/10 flex items-center justify-between bg-white">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-brand-brown">기도의 집</h3>
                  <p className="text-xs text-brand-brown/50">마음의 기도 제목을 보내주시면 함께 기도하겠습니다.</p>
                </div>
                <button 
                  onClick={() => setIsPrayerModalOpen(false)}
                  className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center text-brand-brown hover:bg-brand-sage hover:text-white transition-all shadow-sm"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-6 overflow-y-auto flex-1">
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12 px-4 flex flex-col items-center"
                  >
                    <div className="w-16 h-16 bg-brand-sage/10 text-brand-sage rounded-full flex items-center justify-center mb-6">
                      <Heart className="w-8 h-8 fill-brand-sage text-brand-sage" />
                    </div>
                    <h4 className="font-serif text-2xl font-bold text-brand-brown mb-3">소중한 기도가 접수되었습니다</h4>
                    <p className="text-brand-brown/70 text-sm leading-relaxed max-w-xs mx-auto mb-8">
                      익명 또는 남겨주신 마음 그대로, 영신교회 교역자들이 소중히 마음을 모아 기도하겠습니다.
                    </p>
                    <button 
                      onClick={() => {
                        setIsPrayerModalOpen(false);
                        setIsSubmitted(false);
                      }}
                      className="bg-brand-brown text-white hover:bg-brand-sage px-8 py-3 rounded-full text-sm font-medium transition-all shadow-lg active:scale-95"
                    >
                      닫기
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handlePrayerSubmit} className="space-y-5">
                    {/* Anonymous Toggle */}
                    <div>
                      <label className="text-[11px] font-semibold text-brand-brown/70 block mb-2">작성 방식</label>
                      <div className="grid grid-cols-2 gap-2 bg-brand-gold/10 p-1.5 rounded-2xl">
                        <button
                          type="button"
                          onClick={() => setIsAnonymous(true)}
                          className={`py-2.5 px-4 rounded-xl text-xs font-semibold transition-all ${
                            isAnonymous 
                              ? 'bg-brand-brown text-white shadow-md' 
                              : 'text-brand-brown/60 hover:text-brand-brown'
                          }`}
                        >
                          무기명 (익명 기재)
                        </button>
                        <button
                          type="button"
                          onClick={() => setIsAnonymous(false)}
                          className={`py-2.5 px-4 rounded-xl text-xs font-semibold transition-all ${
                            !isAnonymous 
                              ? 'bg-brand-brown text-white shadow-md' 
                              : 'text-brand-brown/60 hover:text-brand-brown'
                          }`}
                        >
                          기명 (이름 기재)
                        </button>
                      </div>
                    </div>

                    {/* Name field (conditional) */}
                    {!isAnonymous && (
                      <motion.div 
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-1.5"
                      >
                        <label className="text-[11px] font-semibold text-brand-brown/70 block">이름</label>
                        <input 
                          type="text" 
                          required={!isAnonymous}
                          value={prayerName}
                          onChange={(e) => setPrayerName(e.target.value)}
                          placeholder="기도요청자 성함을 입력해 주세요"
                          className="w-full bg-white border border-brand-gold/20 rounded-2xl px-4 py-3 text-sm text-brand-brown focus:outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage/20 transition-all placeholder:text-brand-brown/30"
                        />
                      </motion.div>
                    )}

                    {/* Contact field */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-brand-brown/70 block flex justify-between">
                        <span>연락처</span>
                        <span className="text-brand-brown/40 font-normal text-[10px]">답변이나 기도가 필요한 경우 기재</span>
                      </label>
                      <input 
                        type="tel" 
                        value={prayerContact}
                        onChange={(e) => setPrayerContact(e.target.value)}
                        placeholder="예: 010-1234-5678"
                        className="w-full bg-white border border-brand-gold/20 rounded-2xl px-4 py-3 text-sm text-brand-brown focus:outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage/20 transition-all placeholder:text-brand-brown/30"
                      />
                    </div>

                    {/* Prayer Topic Selector */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-brand-brown/70 block">기도 분야</label>
                      <select 
                        value={prayerTopic}
                        onChange={(e) => setPrayerTopic(e.target.value)}
                        className="w-full bg-white border border-brand-gold/20 rounded-2xl px-4 py-3 text-sm text-brand-brown focus:outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage/20 transition-all cursor-pointer"
                      >
                        <option value="영적 성장 및 믿음">영적 성장 및 믿음</option>
                        <option value="가정과 자녀">가정과 자녀</option>
                        <option value="건강 및 치유">건강 및 치유</option>
                        <option value="직장과 사업/진로">직장과 사업/진로</option>
                        <option value="기타 기도제목">기타 기도제목</option>
                      </select>
                    </div>

                    {/* Prayer Content */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-semibold text-brand-brown/70 block">기도 내용</label>
                      <textarea 
                        required
                        rows={4}
                        value={prayerContent}
                        onChange={(e) => setPrayerContent(e.target.value)}
                        placeholder="함께 기도가 필요한 고충이나 소중한 기도제목을 적어주세요. 저희 동역자들이 함께 간절히 기도하겠습니다."
                        className="w-full bg-white border border-brand-gold/20 rounded-2xl px-4 py-3 text-sm text-brand-brown focus:outline-none focus:border-brand-sage focus:ring-1 focus:ring-brand-sage/20 transition-all resize-none placeholder:text-brand-brown/30 text-xs sm:text-sm"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-brand-brown hover:bg-brand-sage text-white rounded-2xl text-sm font-semibold transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0 mt-2 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Heart className="w-4 h-4 fill-white text-white" />
                      기도 요청하기
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Video Play Modal */}
      <AnimatePresence>
        {activeVideo && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideo(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-zinc-950 w-full max-w-4xl rounded-[2rem] shadow-2xl overflow-hidden border border-white/15 flex flex-col z-10 m-auto"
            >
              {/* Header */}
              <div className="p-4 md:p-6 border-b border-white/5 flex items-center justify-between bg-zinc-900/50 backdrop-blur-md">
                <h3 className="font-serif text-base md:text-xl font-bold text-white truncate pr-4">
                  {activeVideo.title}
                </h3>
                <button 
                  onClick={() => setActiveVideo(null)}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all shadow-sm shrink-0 cursor-pointer"
                  aria-label="닫기"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Video Content */}
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={`${activeVideo.embedUrl}?autoplay=1&rel=0`}
                  title={activeVideo.title}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
