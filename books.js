// 你的書單：新增、刪除或修改下面的書，存檔後重新整理網頁就會更新。
// 欄位：title 書名（必填）、author 作者、publisher 出版社、
// status 狀態（done 已完成 / reading 閱讀中 / want 想讀 / paused 暫停）、
// stars 評分 1–5、cat 分類、note 心得、quote 名言（多句用 \n 分隔）
// 真實封面：cover 封面圖、spine 書背圖（放在 covers 資料夾），color 書的底色
window.BOOKS = [
  {title:'世界盡頭的咖啡館',author:'John Strelecky',publisher:'三采文化',cat:'自我成長',
   cover:'covers/cafe-cover.jpg',spine:'covers/cafe-spine.jpg',color:'#1d2b44'},
  {title:'原子習慣',author:'James Clear',publisher:'方智出版',status:'done',stars:5,cat:'自我成長',note:'建立習慣最重要的是「系統」而不是「目標」。',quote:'你並不是在達成目標時才改變，而是在建立系統時就已改變。'},
  {title:'人類大歷史',author:'Yuval Noah Harari',publisher:'天下文化',status:'reading',stars:4,cat:'歷史'},
  {title:'思考，快與慢',author:'Daniel Kahneman',publisher:'天下文化',status:'done',stars:4,cat:'心理學',quote:'我們對自己認識自己的能力，往往過於自信。'},
  {title:'挪威的森林',author:'村上春樹',publisher:'時報出版',status:'paused',stars:3,cat:'文學'},
  {title:'設計的法則',author:'William Lidwell',publisher:'原點',status:'want',cat:'設計'},
  {title:'窮查理的普通常識',author:'Charlie Munger',publisher:'商業周刊',status:'want',cat:'商業'},
  {title:'小王子',author:'Saint-Exupéry',status:'done',stars:5,cat:'文學'},
  {title:'被討厭的勇氣',author:'岸見一郎',status:'done',stars:4,cat:'心理學'},
  {title:'設計的心理學',author:'Don Norman',status:'reading',cat:'設計'},
  {title:'百年孤寂',author:'García Márquez',status:'want',cat:'文學'},
  {title:'致富心態',author:'Morgan Housel',status:'done',stars:4,cat:'投資理財'},
  {title:'宇宙',author:'Carl Sagan',status:'want',cat:'科學'},
  {title:'深度工作力',author:'Cal Newport',status:'done',stars:4,cat:'自我成長'},
  {title:'S, M, L, XL',author:'Rem Koolhaas',status:'want',cat:'設計'},
  {title:'夜間飛行',author:'Saint-Exupéry',status:'want',cat:'文學'},
  {title:'槍炮、病菌與鋼鐵',author:'Jared Diamond',status:'reading',cat:'歷史'},
];
