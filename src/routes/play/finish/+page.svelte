<script lang="ts">
    import { onMount } from 'svelte';
    import { writable } from 'svelte/store'; //debug
    import Mosavatar from '$lib/components/mosavatar.svelte';
    import aperol from "$lib/assets/mosavatars/aperol.png";

    import { gameStateStore } from '$lib/stores/game-state';

    //const { score, rounds } = gameStateStore;

    let score = writable(5); //debug
    let rounds = writable(5); //debug

    let animInterval = 300;

    let firstAnimCounter = 0;
    let secondAnimCounter = 0;
    let showMosar = false;

    $: maxMosavatarIndex = Math.min($score, secondAnimCounter);
    $: mosavatar_index = maxMosavatarIndex == 0 ? 0 : maxMosavatarIndex - 1;

    function advanceSecondAnimCounter() {
        secondAnimCounter++;

        if(secondAnimCounter < $rounds) {
            setTimeout(advanceSecondAnimCounter, animInterval);
        }
    }

    function advanceFirstAnimCounter() {
        firstAnimCounter++;

        if(firstAnimCounter >= $rounds) {
            setTimeout(advanceSecondAnimCounter, animInterval);
        } else {
            setTimeout(advanceFirstAnimCounter, animInterval);
        }
    }

    function doShowMosar() {
        showMosar = true;
        setTimeout(advanceFirstAnimCounter, 1000)
    }

    onMount(() => {
        setTimeout(doShowMosar, 3000)
    });
</script>

<div class="score-container">
    <div class="mosavatar-score-container" class:showMosar>
        <div class="score-aperol">
            {#each [...Array(5).keys()] as idx}
                {@const className = `score-${idx + 1}`}
                <div class="aperol-container" class:active={idx < secondAnimCounter && (idx + 1 <= $score)}>
                    <img src={aperol} class={`aperol ${idx < firstAnimCounter ? className : ''}`} alt="Aperol Spritz">
                </div>
            {/each}
        </div>
        <div class="mosavatar">
            <Mosavatar mainSrc={`/mosavatars/m_score_${mosavatar_index}.png`} />
        </div>
    </div>
</div>

<style lang="scss">
    .score-container {
        height: 100%;
        width: 100%;
        position: relative;

        display: flex;
        flex-direction: column;
        align-items: center;
        //justify-content: center;

        //background: #FFC300;
        //background: radial-gradient(circle at bottom, #FFC300, #1FC2D5);
        //background: rgb(30,200,220);
        //background: radial-gradient(ellipse at center bottom, rgba(30,200,220,1) 5%, rgba(30,100,110,1) 80%);
        background: rgb(255,195,0);
        background: rgb(0,0,0) radial-gradient(circle, rgb(255, 195, 0) 0%, rgb(176, 135, 0) 10%, rgb(61, 61, 61) 30%, rgb(26, 26, 26) 50%, rgb(0, 0, 0) 70%);
        background-size: 600% 600%;
        background-position: center center;
        background-repeat: no-repeat;

        .score-text {
            font-weight: 900;
            font-size: 8vh;
            color: rgb(255,195,0);
        }

        .mosavatar-score-container {
            position: absolute;
            bottom: -600px;
            z-index: 1;
            transition: bottom 1s;

            &.showMosar {
                bottom: 0;
            }

            .score-aperol {
                .aperol-container {
                    filter: grayscale(100%);
                    transition: filter .5s;

                    .aperol {
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%) translateY(50px);
                        width: 100px;

                        transition: transform .5s;
                    }

                    .score-1 {
                        transform: translateX(-250%) translateY(-100px) rotate(-40deg);
                        //transition-delay: 0s, 1.7s;
                    }

                    .score-2 {
                        transform: translateX(-150%) translateY(-150px) rotate(-20deg);
                        //transition-delay: .3s, 2s;
                    }

                    .score-3 {
                        transform: translateX(-50%) translateY(-170px);
                        //transition-delay: .6s, 2.3s;
                    }

                    .score-4 {
                        transform: translateX(50%) translateY(-155px) rotate(20deg);
                        //transition-delay: .9s, 2.6s;
                    }

                    .score-5 {
                        transform: translateX(140%) translateY(-110px) rotate(40deg);
                        //transition-delay: 1.2s, 2.9s;
                    }
                }


                @keyframes zoom-in-out {
                    0% {
                        transform: scale(1);
                    }

                    50% {
                        transform: scale(1.5);
                    }

                    100% {
                        transform: scale(1);
                    }
                }

                .active {
                    transform-origin: center center;
                    filter: unset;
                    animation: zoom-in-out .5s;
                }
            }

            .mosavatar {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>