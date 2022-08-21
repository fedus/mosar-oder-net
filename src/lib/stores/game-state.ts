import { derived, writable, get } from 'svelte/store';
import type { Writable } from 'svelte/store';
import type Answer from '$lib/types/answer';
import type GameData from '$lib/types/game-data';
import type AnswerOption from '$lib/types/answer-option';

class GameStateStore {
    constructor()
    constructor(gameData: Writable<GameData>)
    constructor(
        public gameData: Writable<GameData> = writable({ tweets: [], answers: [] }),
        public score: Writable<number> = writable(0),
        public round: Writable<number> = writable(1),
        public answers: Writable<Answer[]> = writable([]),
    ) { }

    get currentTweet() {
        return derived(
            [this.round, this.gameData],
            ([$round, $gameData]) => $round <= $gameData.tweets.length && $gameData.tweets[$round - 1]
        );
    }

    get rounds() {
        return derived(
            [this.gameData],
            ([$gameData]) => $gameData.tweets.length
        );
    }

    get gameRunning() {
        return derived(
            [this.round, this.rounds],
            ([$round, $rounds]) => $round <= $rounds
        );
    }

    reset() {
        this.score.set(0);
        this.round.set(1);
        this.answers.set([]);
    }

    setGameData(gameData: GameData) {
        this.gameData.set(gameData);
        this.reset();
    }

    getCurrentAnswer() {
        const gameData = get(this.gameData);
        const currentTweet = get(this.currentTweet);

        return  currentTweet && gameData.answers.find(answer => answer.id === currentTweet.id);
    }

    answerIsCorrect(chosenAnswer: AnswerOption) {
        const currentAnswer = this.getCurrentAnswer();

        return currentAnswer && currentAnswer.answerOption === chosenAnswer;
    }

    choose(answer: AnswerOption) {
        if(this.answerIsCorrect(answer)) {
            this.score.update(scr => scr + 1);
        }

        this.advanceGame();
    }

    advanceGame() {
        this.round.update(rnd => rnd + 1);
    }
}

export const gameStateStore = new GameStateStore();
