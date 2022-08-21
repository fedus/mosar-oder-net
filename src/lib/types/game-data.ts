import type Tweet from '$lib/types/tweet';
import type Answer from '$lib/types/answer';

type GameData = {
    tweets: Tweet[];
    answers: Answer[];
};

export default GameData;
