<script lang="ts">
    export let mainSrc: string;
    export let secondarySrc: string = "";
</script>

<div class="mosar-pic">
    <img class="main-pic" src={mainSrc} alt="Stylised Mosar">
    {#if secondarySrc}
        <img class="secondary-pic" src={secondarySrc} alt="Drink accessory for Mosar">
    {/if}
</div>

<style lang="scss">
    .mosar-pic {
        //position: absolute;

        display: flex;
        //width: 10%;
        
        .main-pic {
            //width: 100%;
        }
        
        .secondary-pic {
            position: fixed;
            bottom: 0;
            margin-bottom: -10px;
            width: 50%;
        }
    }
</style>
