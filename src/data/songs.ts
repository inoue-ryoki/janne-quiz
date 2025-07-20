export type Song = {
  id: string;
  title: string;
  description: string;
  matchTags: string[];
};

export const songs: Song[] = [
  {
    id: "dolls",
    title: "DOLLS",
    description: "切なく美しいバラード。歌詞もメロディも秀逸。",
    matchTags: [
      "emotional",
      "lyrics",
      "ballad",
      "slow",
      "life",
      "late",
      "calm",
    ],
  },
  {
    id: "vampire",
    title: "ヴァンパイア",
    description: "攻撃的なギターとテンポでテンションMAX。",
    matchTags: [
      "energetic",
      "melody",
      "fast",
      "guitar-heavy",
      "cool",
      "late",
      "live",
    ],
  },
  {
    id: "kasumi",
    title: "霞ゆく空背にして",
    description: "壮大なバラード。余韻が深く染み渡る。",
    matchTags: [
      "emotional",
      "lyrics",
      "ballad",
      "slow",
      "early",
      "calm",
      "life",
    ],
  },
  {
    id: "shining",
    title: "Shining ray",
    description: "明るく爽やかなメロディ。元気が出る！",
    matchTags: [
      "bright",
      "melody",
      "fast",
      "early",
      "popular",
      "love",
      "energetic",
    ],
  },
  {
    id: "gekka",
    title: "月光花",
    description: "重厚なメロディと歌詞が心を打つ代表曲。",
    matchTags: ["emotional", "lyrics", "ballad", "late", "dark", "popular"],
  },
  {
    id: "heaven",
    title: "Heaven",
    description: "ライブ定番！爆発的な盛り上がりを見せる曲。",
    matchTags: ["energetic", "fast", "live", "guitar-heavy", "cool", "late"],
  },
  {
    id: "dry",
    title: "Dry?",
    description: "哲学的で独特な歌詞世界。",
    matchTags: ["life", "dark", "lyrics", "early", "deep"],
  },
  {
    id: "neo",
    title: "Neo Venus",
    description: "近未来的でクールな一曲。ノリも良し。",
    matchTags: ["cool", "melody", "fast", "late", "guitar-heavy"],
  },
  {
    id: "feel",
    title: "feel the wind",
    description: "風のように軽やかな曲。明るく前向き。",
    matchTags: ["bright", "melody", "early", "love", "popular"],
  },
  {
    id: "heavens",
    title: "Heavens Place",
    description: "静かな曲調のなかに深い想いが込められている。",
    matchTags: ["ballad", "slow", "lyrics", "life", "dark", "calm", "deep"],
  },
];
