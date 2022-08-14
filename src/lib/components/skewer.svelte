<script lang="ts">
    import Mosavatar from "$lib/components/mosavatar.svelte";
    import { screenSize } from "$lib/stores/screen-size";

    import mosavatarOne from "$lib/assets/mosavatars/m1.png";
    import mosavatarTwo from "$lib/assets/mosavatars/m2.png";
    import aperol from "$lib/assets/mosavatars/aperol.png";
</script>

<div class="skew-container">
    <div class="skew top">
        {#if $screenSize.index >= 3}
            <div class="unskew-rotate-top mosavatar-desktop">
                <Mosavatar mainSrc="{mosavatarTwo}" secondarySrc={aperol} />
            </div>
        {/if}
        <div class="top-text">MOSAR</div>
    </div>
    <div class="skew bottom">
        {#if $screenSize.index >= 3}
            <div class="unskew-rotate-bottom mosavatar-desktop">
                <Mosavatar mainSrc={mosavatarOne} />
            </div>
        {/if}
        <div class="bottom-text">ODER NET?</div>
    </div>
</div>
{#if $screenSize.index < 3}
<div class="abs bottom mosavatar-mobile">
    <Mosavatar mainSrc="{mosavatarTwo}" secondarySrc={aperol} />
</div>
<div class="abs top mosavatar-mobile">
    <Mosavatar mainSrc={mosavatarOne} />
</div>
{/if}

<style lang="scss">
    .skew-container {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 3000px;
        width: 3000px;
        border: 3px solid red;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transform: translate(-50%,-50%);

        .skew {
            transform: skewY(-11deg);

            &.top, &.bottom {
                height: 50%;
                width: 100%;
                display: flex;
                justify-content: center;
                padding: 20px;
                overflow: hidden;

                font-size: 8vh;
                font-weight: 900;

                transition: transform 1s;
            }

            &.top {
                align-items: end;
                color: rgb(255,195,0);
                background: rgb(30,200,220);
                background: radial-gradient(ellipse at center bottom, rgba(30,200,220,1) 5%, rgba(30,100,110,1) 50%);
            }

            &.bottom {
                align-items: start;
                color: rgb(30,200,220);
                background: rgb(255,195,0);
                background: radial-gradient(ellipse at center top, rgba(255,195,0,1) 5%, rgba(176,135,0,1) 50%);
            }

            .top-text, .bottom-text {
                transition: transform 1s
            }

            .top-text {
                //transform: translateY(200px);
            }

            .bottom-text {
                //transform: translateY(-200px);
            }

            .unskew-rotate-top {
                position: absolute;
                bottom: 0;
                transform: skewY(11deg) rotate(-11deg) translateX(-120%);
            }

            .unskew-rotate-bottom {
                position: absolute;
                top: 0;
                transform: skewY(11deg) rotate(-191deg) translateX(-120%);
            }
        }
    }

    .abs {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);

        &.top {
            top: 0;
            transform: translateX(-50%) rotate(180deg);
        }

        &.bottom {
            bottom: 0;
        }
    }

    .mosavatar-desktop {
        width: 275px;
    }

    .mosavatar-mobile {
        width: 225px;
    }
</style>
