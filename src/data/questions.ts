export type Question = {
  id: string;
  question: string;
  options: { label: string; value: string }[];
};

export const questions: Question[] = [
  {
    id: "mood",
    question: "今の気分は？",
    options: [
      { label: "元気になりたい", value: "energetic" },
      { label: "切ない気分", value: "emotional" },
      { label: "クールな曲が聴きたい", value: "cool" },
    ],
  },
  {
    id: "focus",
    question: "歌詞とメロディ、どちらを重視する？",
    options: [
      { label: "歌詞", value: "lyrics" },
      { label: "メロディ", value: "melody" },
    ],
  },
  {
    id: "tempo",
    question: "テンポは？",
    options: [
      { label: "速いのが好き", value: "fast" },
      { label: "ゆったりが好き", value: "slow" },
    ],
  },
  {
    id: "ballad",
    question: "バラードは好き？",
    options: [
      { label: "好き", value: "yes" },
      { label: "苦手", value: "no" },
    ],
  },
  {
    id: "guitar",
    question: "ギターソロは？",
    options: [
      { label: "カッコいい方がいい", value: "guitar-heavy" },
      { label: "そこまで重視しない", value: "guitar-light" },
    ],
  },
  {
    id: "theme",
    question: "歌詞のテーマは？",
    options: [
      { label: "愛や恋", value: "love" },
      { label: "人生や哲学", value: "life" },
    ],
  },
  {
    id: "vibe",
    question: "全体の雰囲気は？",
    options: [
      { label: "明るめがいい", value: "bright" },
      { label: "暗めがいい", value: "dark" },
    ],
  },
  {
    id: "era",
    question: "どの時期の曲が好き？",
    options: [
      { label: "初期〜中期（〜2003）", value: "early" },
      { label: "後期（2004〜）", value: "late" },
    ],
  },
  {
    id: "live",
    question: "ライブで盛り上がる曲が好き？",
    options: [
      { label: "好き", value: "live" },
      { label: "静かに聴きたい", value: "calm" },
    ],
  },
  {
    id: "special",
    question: "ちょっとマニアックな曲もOK？",
    options: [
      { label: "もちろん！", value: "deep" },
      { label: "有名どころがいい", value: "popular" },
    ],
  },
];
