<script lang="ts">
    import { blur } from 'svelte/transition';
    import { onMount } from 'svelte';

    import { page } from '$app/stores';
    import Skewer from "$lib/components/skewer.svelte";

    let skewerOpen = false;
    let ready = false;

    $: skewerOpen = !!$page.routeId;

    onMount(() => ready = true);
</script>

<div class="main">
    <slot></slot>
    <Skewer bind:open={skewerOpen}/>
    {#if ready && !skewerOpen}
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

        .button {
            font-family: Arial, Helvetica, sans-serif;
            text-decoration: none;
            padding: 10px 20px;

            border-radius: 30px;
            text-transform: uppercase;
            border: 2px solid white;
            color: white;
            font-weight: 900;
            box-shadow: 1px 1px 21px 8px rgba(255, 255, 255,0.5);

            font-size: 1.5rem;

            &.button-play {
                background-color: #1ec1d5;
            }

            &.button-help {
                background-color: rgb(255,195,0);;
            }
        }
    }
</style>