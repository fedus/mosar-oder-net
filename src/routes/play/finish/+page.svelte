<script lang="ts">
    import { onMount } from 'svelte';
    import Mosavatar from '$lib/components/mosavatar.svelte';
    import aperol from "$lib/assets/mosavatars/aperol.png";

    import { gameStateStore } from '$lib/stores/game-state';

    const { score, rounds } = gameStateStore;

    let ready = false;

    $: mosavatar_index = $score == 0 ? 0 : $score - 1;

    onMount(() => ready = true);
</script>

<div class="score-container">
    <div class="score-text">
        Däi Score si {$score} Spritz!
    </div>

    <div class="mosavatar-score-container">
        <div class="score-aperol">
            {#each [...Array(5).keys()] as idx}
                {@const className = `score-${idx + 1}`}
                <img src={aperol} class={`aperol ${ready ? className : ''}`} class:inactive={idx + 1 > $score} alt="Aperol Spritz">
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

        background: #FFC300;
        background: radial-gradient(circle at bottom, #FFC300, #1FC2D5);

        .score-text {
            font-weight: 900;
            font-size: 8vh;
        }

        .mosavatar-score-container {
            position: absolute;
            bottom: 0;

            .score-aperol {
                .aperol {
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%) translateY(50px);
                    width: 100px;

                    transition: transform 1s;
                }

                .score-1 {
                    transform: translateX(-250%) translateY(-100px) rotate(-40deg);
                }

                .score-2 {
                    transform: translateX(-150%) translateY(-150px) rotate(-20deg);
                    transition-delay: .3s;
                }

                .score-3 {
                    transform: translateX(-50%) translateY(-170px);
                    transition-delay: .6s;
                }

                .score-4 {
                    transform: translateX(50%) translateY(-155px) rotate(20deg);
                    transition-delay: .9s;
                }

                .score-5 {
                    transform: translateX(140%) translateY(-110px) rotate(40deg);
                    transition-delay: 1.2s;
                }

                .inactive {
                    filter: grayscale(100%);
                }
            }

            .mosavatar {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>