<script lang="ts">
    import Mosavatar from "$lib/components/mosavatar.svelte";

    import mosavatarOne from "$lib/assets/mosavatars/m1.png";
    import mosavatarTwo from "$lib/assets/mosavatars/m2.png";
    import aperol from "$lib/assets/mosavatars/aperol.png";

    export let open = false;
</script>

<div class="skew-container">
    <div class="skew top" class:open>
        <div class="unskew-rotate-top mosavatar-desktop mosavatar-top">
            <Mosavatar mainSrc="{mosavatarTwo}" secondarySrc={aperol} />
        </div>
        <div class="top-text">MOSAR</div>
    </div>
    <div class="skew bottom" class:open>
        <div class="unskew-rotate-bottom mosavatar-desktop mosavatar-bottom">
            <Mosavatar mainSrc={mosavatarOne} />
        </div>
        <div class="bottom-text">ODER NET?</div>
    </div>
</div>

<div class="abs bottom mosavatar-mobile mosavatar-top">
    <Mosavatar mainSrc="{mosavatarTwo}" secondarySrc={aperol} />
</div>
<div class="abs top mosavatar-mobile mosavatar-bottom">
    <Mosavatar mainSrc={mosavatarOne} />
</div>


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

                &.open {
                    transform: skewY(11deg) translateY(-75vh);
                }
            }

            &.bottom {
                align-items: start;
                color: rgb(30,200,220);
                background: rgb(255,195,0);
                background: radial-gradient(ellipse at center top, rgba(255,195,0,1) 5%, rgba(176,135,0,1) 50%);

                &.open {
                    transform: skewY(11deg) translateY(75vh);
                }
            }

            .top-text, .bottom-text {
                transition: transform 1s
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
            }

            .bottom-text {
                animation: bottom-text-anim 2s;
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

    .abs {
        position: absolute;

        &.top {
            right: 50%;
            transform: translateX(50%) rotate(180deg);
            top: 0;
        }

        &.bottom {
            left: 50%;
            transform: translateX(-50%);
            bottom: 0;
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

    @keyframes mosavatar-mobile-top {
        from {
            left: -50%;
        }

        to {
            left: 50%;
        }
    }

    @keyframes mosavatar-mobile-bottom {
        from {
            right: -50%;
        }

        to {
            right: 50%;
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

        &.mosavatar-top {
            animation: mosavatar-mobile-top 2s;
        }

        &.mosavatar-bottom {
            animation: mosavatar-mobile-bottom 2s;
        }

        @media (min-width: 1200px) {
            display: none;
        }
    }
</style>
