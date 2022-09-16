<script lang="ts">
    import { blur } from 'svelte/transition';
    import { onMount } from 'svelte';

    import { page } from '$app/stores';
    import Skewer from "$lib/components/skewer.svelte";

    let skewerOpen = false;
    let scoreScreen = true;
    let yellowWash = false;
    let ready = false;

    $: {
        skewerOpen = !!$page.routeId && $page.routeId != 'play/finish' && $page.routeId != 'play/result';
        scoreScreen = $page.routeId === 'play/finish' || $page.routeId === 'play/result';
        yellowWash = $page.routeId === 'play/result';
    }


    onMount(() => ready = true);
</script>

<div class="main">
    <slot></slot>
    <Skewer bind:open={skewerOpen} bind:scoreScreen bind:yellowWash/>
    {#if ready && !scoreScreen && !skewerOpen}
        <div
            class="button-container main-buttons top"
            in:blur={{delay: 1000, duration: 500}}
            out:blur={{duration: 500}}
        >
            <a href="help" class="button button-help">Hëllef</a>
        </div>
        <div
            class="button-container main-buttons bottom"
            in:blur={{delay: 1000, duration: 500}}
            out:blur={{duration: 500}}
        >
            <a href="play" class="button button-play">Spillen</a>
        </div>
    {/if}
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

            &.top {
                top: 30%;
                left: 50%;
                transform: translateX(-50%);
            }
        }

        :global(.button), :global(button) {
            display: inline-block;
            font-family: Arial, Helvetica, sans-serif;
            text-decoration: none;
            padding: 10px 20px;
            cursor: pointer;

            border-radius: 30px;
            text-transform: uppercase;
            border: 2px solid white;
            color: white;
            font-weight: 900;
            box-shadow: 1px 1px 21px 8px rgba(255, 255, 255,0.5);

            font-size: 1.5rem;

            transform: scale(1);

            transition: transform 0.5s;

            @keyframes button-pulse {
                from {
                    transform: scale(1);
                }

                to {
                    transform: scale(1.5);
                }
            }

            &:hover {
                animation: button-pulse 0.5s infinite alternate;
            }
        }

        .button-play {
            background-color: #1ec1d5;
        }

        .button-help {
            background-color: rgb(255,195,0);
        }
    }
</style>