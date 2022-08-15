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

        .main-pic {
            width: 100%;
        }

        .secondary-pic {
            position: fixed;
            bottom: 0;
            margin-bottom: -10px;
            width: 50%;
        }
    }

    .center {
        margin-left: auto;
        margin-right: auto;
    }
</style>
