<script lang="ts">
    import Skewer from "$lib/components/skewer.svelte";
</script>

<div class="main">
    <Skewer/>
    <div class="button-container main-buttons bottom">
        <button class="button button-play">Spillen</button>
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

            border: 2px solid;

            &.button-play {

            }
        }
    }
</style>