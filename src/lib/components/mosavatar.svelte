<script lang="ts">
    export let mainSrc: string;
    export let secondarySrc: string = "";
</script>

<div class="mosar-pic center">
    <img class="main-pic" src={mainSrc} alt="Stylised Mosar">
    {#if secondarySrc}
        <img class="secondary-pic" src={secondarySrc} alt="Drink accessory for Mosar">
    {/if}
</div>

<style lang="scss">
    .mosar-pic {
        display: flex;
        width: min-content;
        height: min-content;

        .main-pic {
            width: 300px;
        }

        .secondary-pic {
            position: fixed;
            bottom: 0;
            margin-bottom: -10px;
            width: 175px;
        }
    }

    .center {
        margin-left: auto;
        margin-right: auto;
    }
</style>
