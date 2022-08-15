<script lang="ts">
    import Skewer from "$lib/components/skewer.svelte";

    let skewerOpen = false;
</script>

<div class="main">
    <Skewer bind:open={skewerOpen}/>
    <div class="button-container main-buttons bottom">
        <button class="button button-play" on:click={() => {
            skewerOpen = true;
            console.log("open")}}>Spillen</button>
    </div>
</div>

<style lang="scss">
    :global(html) {
      font-family: 'Raleway', sans-serif;
    }

    :global(body) {
        height: 100vh;
    }

    .main {
        position: relative;
        height: 100%;
        width: 100%;
        background-color: white;
        overflow: hidden;

        .button-container.main-buttons {
            position: absolute;

            &.bottom {
                bottom: 30%;
                left: 50%;
                transform: translateX(-50%);
            }
        }

        .button {
            font-family: Arial, Helvetica, sans-serif;
            padding: 10px 20px;

            background-color: #1ec1d5;
            border-radius: 30px;
            text-transform: uppercase;
            border: 2px solid white;
            color: white;
            font-weight: 900;
            box-shadow: 1px 1px 21px 8px rgba(255, 255, 255,0.5);

            &.button-play {

            }
        }
    }
</style>