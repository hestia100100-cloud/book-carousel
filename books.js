// 你的書單：新增、刪除或修改下面的書，存檔後重新整理網頁就會更新。
// 欄位：title 書名（必填）、author 作者、publisher 出版社、
// status 狀態（done 已完成 / reading 閱讀中 / want 想讀 / paused 暫停）、
// stars 評分 1–5、cat 分類、note 心得、quote 名言（多句用 \n 分隔）
// pages 頁數（決定書背厚度）
// 真實封面：cover 封面圖、spine 書背圖（放在 covers 資料夾），color 書的底色
window.BOOKS = [
  {title:'世界盡頭的咖啡館',pages:212,author:'John Strelecky',publisher:'三采文化',cat:'自我成長',
   cover:'covers/cafe-cover.jpg',spine:'covers/cafe-spine.jpg',color:'#1d2b44'},
  {title:'原子習慣',pages:304,author:'James Clear',publisher:'方智出版',status:'done',stars:5,cat:'自我成長',note:'建立習慣最重要的是「系統」而不是「目標」。',quote:'你並不是在達成目標時才改變，而是在建立系統時就已改變。'},
  {title:'人類大歷史',pages:488,author:'Yuval Noah Harari',publisher:'天下文化',status:'reading',stars:4,cat:'歷史'},
  {title:'思考，快與慢',pages:576,author:'Daniel Kahneman',publisher:'天下文化',status:'done',stars:4,cat:'心理學',quote:'我們對自己認識自己的能力，往往過於自信。'},
  {title:'挪威的森林',pages:416,author:'村上春樹',publisher:'時報出版',status:'paused',stars:3,cat:'文學'},
  {title:'設計的法則',pages:216,author:'William Lidwell',publisher:'原點',status:'want',cat:'設計'},
  {title:'窮查理的普通常識',pages:480,author:'Charlie Munger',publisher:'商業周刊',status:'want',cat:'商業'},
  {title:'小王子',pages:176,author:'Saint-Exupéry',status:'done',stars:5,cat:'文學'},
  {title:'被討厭的勇氣',pages:301,author:'岸見一郎',status:'done',stars:4,cat:'心理學'},
  {title:'設計的心理學',pages:359,author:'Don Norman',status:'reading',cat:'設計'},
  {title:'百年孤寂',pages:399,author:'García Márquez',status:'want',cat:'文學'},
  {title:'致富心態',pages:320,author:'Morgan Housel',status:'done',stars:4,cat:'投資理財'},
  {title:'宇宙',pages:383,author:'Carl Sagan',status:'want',cat:'科學'},
  {title:'深度工作力',pages:324,author:'Cal Newport',status:'done',stars:4,cat:'自我成長'},
  {title:'S, M, L, XL',pages:1376,author:'Rem Koolhaas',status:'want',cat:'設計'},
  {title:'夜間飛行',pages:176,author:'Saint-Exupéry',status:'want',cat:'文學'},
  {title:'槍炮、病菌與鋼鐵',pages:482,author:'Jared Diamond',status:'reading',cat:'歷史'},
  // 哈利波特 1–7（皇冠 20 週年紀念版；3、4、6、7 集頁數為依全套總頁數推估）
  {title:'哈利波特1 神秘的魔法石',author:'J.K. 羅琳',publisher:'皇冠文化',cat:'奇幻',pages:352},
  {title:'哈利波特2 消失的密室',author:'J.K. 羅琳',publisher:'皇冠文化',cat:'奇幻',pages:400},
  {title:'哈利波特3 阿茲卡班的逃犯',author:'J.K. 羅琳',publisher:'皇冠文化',cat:'奇幻',pages:456},
  {title:'哈利波特4 火盃的考驗',author:'J.K. 羅琳',publisher:'皇冠文化',cat:'奇幻',pages:808},
  {title:'哈利波特5 鳳凰會的密令',author:'J.K. 羅琳',publisher:'皇冠文化',cat:'奇幻',pages:944},
  {title:'哈利波特6 混血王子的背叛',author:'J.K. 羅琳',publisher:'皇冠文化',cat:'奇幻',pages:720},
  {title:'哈利波特7 死神的聖物',author:'J.K. 羅琳',publisher:'皇冠文化',cat:'奇幻',pages:848},
  {title:'1984',author:'George Orwell',publisher:'遠流',cat:'文學',pages:352},
  {title:'晶片戰爭',author:'Chris Miller',publisher:'天下雜誌',cat:'商業',pages:468},
  {title:'納瓦爾寶典',author:'Eric Jorgenson',publisher:'天下雜誌',cat:'投資理財',pages:288},
  {title:'正向談判',author:'戚樹誠',publisher:'聯經',cat:'商業',pages:288},
];
