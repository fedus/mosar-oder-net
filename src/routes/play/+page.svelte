<script lang="ts">
    /** @type {import('./$types').PageData} */  
    import { fade } from 'svelte/transition';
    import Game from '$lib/components/game.svelte';
    import type GameData from '$lib/types/game-data';

    export let data: GameData;

    let variant = false;
</script>

<svelte:head>
    <link rel="preload" href="/mosavatars/m_score_0.png" as="image">
    <link rel="preload" href="/mosavatars/m_score_1.png" as="image">
    <link rel="preload" href="/mosavatars/m_score_2.png" as="image">
    <link rel="preload" href="/mosavatars/m_score_3.png" as="image">
    <link rel="preload" href="/mosavatars/m_score_4.png" as="image">
</svelte:head>

<div class="play-container">
    {#if false && variant}
        <div class="variant-background" transition:fade></div>
    {/if}
    <Game gameData={data} on:transition={() => variant = !variant} />
</div>

<style lang="scss">
    @keyframes background-anim {
        from {
            //background-size: 10% 10%;
            background-size: 110% 110%;
        }

        to {
            //background-size: 600% 600%;
            background-size: 100% 100%;
        }
    }

    .play-container {
        height: 100%;
        width: 100%;
        position: relative;
        background: url("/beach_background.png");
        background-size: 100% 100%;
        background-position: bottom right;
        //background: rgb(255,195,0);
        //background: rgb(0,0,0) radial-gradient(circle, rgb(255, 195, 0) 0%, rgb(176, 135, 0) 10%, rgb(61, 61, 61) 30%, rgb(26, 26, 26) 50%, rgb(0, 0, 0) 70%);
        //background-size: 600% 600%;
        //background-position: center center;
        //background-repeat: no-repeat;
        animation: background-anim 2s;

        .variant-background {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgb(0,0,0) radial-gradient(circle, rgb(30,200,220) 0%, rgb(30,100,110) 15%, rgb(61, 61, 61) 30%, rgb(26, 26, 26) 50%, rgb(0, 0, 0) 70%);
            background-size: 600% 600%;
            background-position: center center;
            background-repeat: no-repeat;
        }

        // background-image: linear-gradient(to right top,
        //     rgba(30, 200, 220, .95),
        //     rgba(0, 209, 198, .9),
        //     rgba(45, 214, 161, .85),
        //     rgba(115, 216, 115, .8),
        //     rgba(174, 212, 65, .75),
        //     rgba(174, 218, 80, .7),
        //     rgba(175, 224, 94, .7),
        //     rgba(176, 230, 108, .75),
        //     rgba(135, 243, 179, .8),
        //     rgba(137, 247, 233, .85),
        //     rgba(184, 246, 255, .9),
        //     rgba(233, 245, 253, .95)),
        //     url('https://dillendapp.eu/mosar/background_pattern.png');
    }
</style>