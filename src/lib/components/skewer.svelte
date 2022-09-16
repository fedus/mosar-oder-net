<script lang="ts">
    import Mosavatar from "$lib/components/mosavatar.svelte";
    import { gameStateStore } from '$lib/stores/game-state';

    import mosavatarOne from "$lib/assets/mosavatars/m1.png";
    import mosavatarTwo from "$lib/assets/mosavatars/m2.png";
    import aperol from "$lib/assets/mosavatars/aperol.png";

    export let open = false;
    export let scoreScreen = false;
    export let yellowWash = false;

    const { score } = gameStateStore;
</script>

<div class="skew-container" class:scoreScreen class:yellowWash class:disablePointerEvents={open}>
    <div class="skew top animate" class:open>
        {#if !scoreScreen}
            <div class="unskew-rotate-top mosavatar-desktop mosavatar-top">
                <Mosavatar mainSrc="{mosavatarTwo}" secondarySrc={aperol} />
            </div>
            <div class="top-text">Mosar</div>
        {:else}
            <div class="top-text">Däi Score</div>
        {/if}
    </div>
    <div class="skew bottom animate" class:open>
        {#if !scoreScreen}
            <div class="unskew-rotate-bottom mosavatar-desktop mosavatar-bottom">
                <Mosavatar mainSrc={mosavatarOne} />
            </div>
            <div class="bottom-text">oder net?</div>
        {:else}
            <div class="bottom-text">{$score} Aperols</div>
        {/if}
    </div>
</div>

{#if !scoreScreen}
    <div class="mosavatar-mobile mosavatar-top" class:in={!open} class:out={open}>
        <Mosavatar mainSrc={mosavatarOne} />
    </div>
    <div class="mosavatar-mobile mosavatar-bottom" class:in={!open} class:out={open}>
        <Mosavatar mainSrc="{mosavatarTwo}" secondarySrc={aperol} />
    </div>
{/if}


<style lang="scss">
    .skew-container {
        position: absolute;
        top: 50%;
        left: 50%;
        height: 4000px;
        width: 4000px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transform: translate(-50%,-50%);

        &.scoreScreen {
            transition: transform 1s;
            transition-delay: 3s;
            transform: translate(-50%,-60%);
        }

        &.yellowWash {
            transition: transform 1s, opacity .5s;
            transition-delay: 0s, 1s;
            transform: translate(-50%,-75%);
            opacity: 0;
        }

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

                &.animate {
                    transition: transform 1s;
                }
            }

            &.top {
                align-items: end;
                color: rgb(255,195,0);
                background: rgb(30,200,220);
                background: radial-gradient(ellipse at center bottom, rgba(30,200,220,1) 5%, rgba(30,100,110,1) 50%);

                &.open {
                    transform: /*skewY(11deg)*/ translateY(-75vh);
                }

                &.scoreScreen {
                    height: 30%;
                }
            }

            &.bottom {
                align-items: start;
                color: rgb(30,200,220);
                background: rgb(255,195,0);
                background: radial-gradient(ellipse at center top, rgba(255,195,0,1) 5%, rgba(176,135,0,1) 50%);

                &.open {
                    transform: /*skewY(11deg)*/ translateY(75vh);
                }

                &.scoreScreen {
                    height: 70%;
                }
            }

            .top-text, .bottom-text {
                text-transform: uppercase;
                transition: transform 1s;
            }

            @keyframes top-text-anim {
                from {
                    transform: translateY(200px);
                }

                to {
                    transform: translateY(0);
                }
            }

            @keyframes bottom-text-anim {
                from {
                    transform: translateY(-200px);
                }

                to {
                    transform: translateY(0);
                }
            }

            .top-text {
                animation: top-text-anim 2s;
                animation-delay: 1s;
                animation-fill-mode: both;
            }

            .bottom-text {
                animation: bottom-text-anim 2s;
                animation-delay: 1s;
                animation-fill-mode: both;
            }

            .unskew-rotate-top {
                position: absolute;
                bottom: 0;
                transform: skewY(11deg) rotate(-11deg);
                left: 35%;
            }

            .unskew-rotate-bottom {
                position: absolute;
                top: 0;
                transform: skewY(11deg) rotate(-191deg);
                right: 35%;
            }
        }
    }

    @keyframes mosavatar-desktop-top {
        from {
            left: 0;
        }

        to {
            left: 35%;
        }
    }

    @keyframes mosavatar-desktop-bottom {
        from {
            right: 0;
        }

        to {
            right: 35%;
        }
    }

    @keyframes mosavatar-mobile-top-in {
        from {
            right: -50%;
        }

        to {
            right: 50%;
        }
    }

    @keyframes mosavatar-mobile-bottom-in {
        from {
            left: -50%;
        }

        to {
            left: 50%;
        }
    }

    @keyframes mosavatar-mobile-top-out {
        from {
            right: 50%;
        }

        to {
            right: 150%;
        }
    }

    @keyframes mosavatar-mobile-bottom-out {
        from {
            left: 50%;
        }

        to {
            left: 150%;
        }
    }

    .mosavatar-desktop {
        width: 275px;
        display: none;

        &.mosavatar-top {
            animation: mosavatar-desktop-top 2s;
        }

        &.mosavatar-bottom {
            animation: mosavatar-desktop-bottom 2s;
        }

        @media (min-width: 1200px) {
            display: block;
        }
    }

    .mosavatar-mobile {
        width: 225px;
        position: absolute;
        transition: left 2s, right 2s;

        &.mosavatar-top {

            top: 0;
            transform: translateX(50%) rotate(180deg);

            &.in {
                animation: mosavatar-mobile-top-in 2s;
                right: 50%;
            }

            &.out {
                //animation: mosavatar-mobile-top-out 2s;
                right: 150%;
            }
        }

        &.mosavatar-bottom {

            bottom: 0;
            transform: translateX(-50%);

            &.in {
                animation: mosavatar-mobile-bottom-in 2s;
                left: 50%;
            }

            &.out {
                //animation: mosavatar-mobile-bottom-out 2s;
                left: 150%;
            }
        }

        @media (min-width: 1200px) {
            display: none;
        }
    }

    .disablePointerEvents {
        pointer-events: none;
    }
</style>
