<script lang="ts">
    /** @type {import('./$types').PageData} */  
    import Game from '$lib/components/game.svelte';
    import type GameData from '$lib/types/game-data';

    export let data: GameData;
</script>

<div class="play-container">
    <Game gameData={data} />
</div>

<style lang="scss">
    .play-container {
        height: 100%;
        width: 100%;
        background-image: linear-gradient(to right top,
            rgba(30, 200, 220, .95),
            rgba(0, 209, 198, .9),
            rgba(45, 214, 161, .85),
            rgba(115, 216, 115, .8),
            rgba(174, 212, 65, .75),
            rgba(174, 218, 80, .7),
            rgba(175, 224, 94, .7),
            rgba(176, 230, 108, .75),
            rgba(135, 243, 179, .8),
            rgba(137, 247, 233, .85),
            rgba(184, 246, 255, .9),
            rgba(233, 245, 253, .95)),
            url('https://dillendapp.eu/mosar/background_pattern.png');
    }
</style>