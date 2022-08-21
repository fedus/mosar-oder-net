<script lang="ts">
    import { blur } from 'svelte/transition';
    import Tweet from '$lib/components/tweet.svelte';
    import type GameData from '$lib/types/game-data';
    import AnswerOption from '$lib/types/answer-option';

    export let gameData: GameData = { tweets: [], answers: [] };
    const rounds = gameData.tweets.length;

    let displayTweet = true;

    let score = 0;
    let round = 1;

    $: gameRunning = round <= rounds;

    function getCurrentTweet() {
        return gameData.tweets[round - 1];
    }

    function getCurrentAnswer() {
        return gameData.answers.find(answer => answer.id === getCurrentTweet().id);
    }

    function answerIsCorrect(chosenAnswer: AnswerOption) {
        return getCurrentAnswer()?.answerOption === chosenAnswer;
    }

    function choose(answer: AnswerOption) {
        if(answerIsCorrect(answer)) {
            score = score + 1;
        }

        proceedGame();
    }

    function proceedGame() {
        round++;
    }
</script>

{#key round}
    {#if gameRunning}
        <div class="game-container" in:blur={{ delay: 500, amount: 500 }} out:blur={{ duration: 500, amount: 500 }}>
            <div class="tweet-container">
                {#if displayTweet}
                    <div class="tweet-animation-wrapper">
                        <Tweet tweet={getCurrentTweet()} />
                    </div>
                {/if}
            </div>
            <div class="button-container">
                <button class="mosar-button" on:click={() => choose(AnswerOption.MOSAR)}>MOSAR!</button>
                <button class="not-mosar-button" on:click={() => choose(AnswerOption.NOT_MOSAR)}>NOT MOSAR!</button>
                <div>Score: {score}</div>
            </div>
        </div>
    {/if}
{/key}

<style lang="scss">
    .game-container {
        height: 100%;
        width: 100%;

        .tweet-container {
            height: 50%;
            width: 100%;
            padding: 0 20px 20px 20px;
            position: relative;
            box-sizing: border-box;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: end;

            .tweet-animation-wrapper {
                position: absolute;
            }
        }

        .button-container {
            height: 50%;
            margin-left: auto;
            margin-right: auto;
            padding: 20px 20px 0 20px;
            box-sizing: border-box;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: start;
            
            max-width: 400px;

            button {
                width: 100%;
                margin: 20px;
            }

            .mosar-button {
                background-color: green;
            }

            .not-mosar-button {
                background-color: red;
            }
        }
    }
</style>