<script lang="ts">
    import Skewer from "$lib/components/skewer.svelte";
</script>

<div class="main">
    <Skewer/>
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
    }
</style>