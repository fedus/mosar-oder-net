<script lang="ts">
    import Mosavatar from '$lib/components/mosavatar.svelte';
    import aperol from "$lib/assets/mosavatars/aperol.png";

    import { gameStateStore } from '$lib/stores/game-state';

    const { score, rounds } = gameStateStore;

    $: mosavatar_index = $score == 0 ? 0 : $score - 1;
</script>

<div class="score-container">
    <div class="score-text">
        Däi Score si {$score} Spritz!
    </div>

    <div class="mosavatar-score-container">
        <div class="score-aperol">
            {#each [...Array(5).keys()] as idx}
                <img src={aperol} class={`score-${idx + 1}`} class:inactive={idx + 1 > $score} alt="Aperol Spritz">
            {/each}
        </div>
        <Mosavatar mainSrc={`/mosavatars/m_score_${mosavatar_index}.png`} />
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
                img {
                    width: 100px;
                }

                .score-1 {
                    transform: translate(-20px, 80px) rotate(-40deg);
                }

                .score-2 {
                    transform: translate(-20px, 20px) rotate(-20deg);
                }

                .score-4 {
                    transform: translate(20px, 15px) rotate(20deg);
                }

                .score-5 {
                    transform: translate(20px, 70px) rotate(40deg);
                }

                .inactive {
                    filter: grayscale(100%);
                }
            }
        }
    }
</style>