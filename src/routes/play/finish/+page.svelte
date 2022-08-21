<script lang="ts">
    import { gameStateStore } from '$lib/stores/game-state';

    const { score, rounds } = gameStateStore;
</script>

<div class="score-container">
    Your score is {$score} out of {$rounds}!
</div>

<style lang="scss">
    .score-container {
        height: 100%;
        width: 100%;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>