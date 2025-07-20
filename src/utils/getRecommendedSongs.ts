import { Song, songs } from "../data/songs";

export const getRecommendedSongs = (
  answers: Record<string, string>
): Song[] => {
  const answerValues = Object.values(answers);
  return songs
    .map((song) => {
      const matchCount = song.matchTags.filter((tag) =>
        answerValues.includes(tag)
      ).length;
      return { ...song, matchCount };
    })
    .sort((a, b) => b.matchCount - a.matchCount)
    .slice(0, 3);
};
