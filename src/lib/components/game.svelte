<script lang="ts">
    import { goto } from '$app/navigation';
    import { blur } from 'svelte/transition';
    import { createEventDispatcher } from 'svelte';
    import { gameStateStore } from '$lib/stores/game-state';
    import Tweet from '$lib/components/tweet.svelte';
    import AnswerOption from '$lib/types/answer-option';
    import type GameData from '$lib/types/game-data';

    const dispatch = createEventDispatcher();

    export let gameData: GameData;

    gameStateStore.setGameData(gameData);

    const { round, currentTweet, gameRunning } = gameStateStore;

    let displayTweet = true;

    $: {
        if(!$gameRunning) {
            setTimeout(() => goto(`/play/finish`, { replaceState: false }), 500);
        }
    }

    $: $round && dispatch('transition');
</script>

{#key $round}
    {#if $gameRunning}
        <div class="game-container" in:blur={{ delay: 500, amount: 500 }} out:blur={{ duration: 500, amount: 500 }}>
            <div class="tweet-container">
                {#if displayTweet && $currentTweet}
                    <div class="tweet-animation-wrapper">
                        <Tweet tweet={$currentTweet} />
                    </div>
                {/if}
            </div>
            <div class="button-container">
                <button class="mosar-button" on:click={() => gameStateStore.choose(AnswerOption.MOSAR)}>
                    MOSAR!
                </button>
                <button class="not-mosar-button" on:click={() => gameStateStore.choose(AnswerOption.NOT_MOSAR)}>
                    NOT MOSAR!
                </button>
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