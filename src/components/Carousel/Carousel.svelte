<script>
  import Siema from "siema";
  import { onMount } from "svelte";

  export let perPage = 3;
  export let loop = true;
  export let autoplay = 0;

  let siema;
  let controller;
  let timer;

  $: pips = controller ? controller.innerElements : [];

  onMount(() => {
    controller = new Siema({
      selector: siema,
      perPage,
      loop,
      easing: "ease-out",
      duration: 1000
    });

    autoplay && setInterval(right, autoplay);

    return () => {
      autoplay && clearTimeout(timer);
      controller.destroy();
    };
  });

  function left() {
    controller.prev();
  }

  function right() {
    controller.next();
  }

  function go(index) {
    controller.goTo(index);
  }
</script>

<style>
  .carousel {
    position: relative;
    margin: auto;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    max-width: 1200px;
    width: 100%;
    height: auto;
  }

  button {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 50%;
    z-index: 50;
    margin-top: -20px;
    border: none;
    background-color: transparent;
  }

  button:focus {
    outline: none;
  }

  .left {
    left: 0vw;
  }

  .right {
    right: 0vw;
  }

  ul {
    list-style-type: none;
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: -30px;
    padding: 0;
  }

  ul li {
    margin: 6px;
    border-radius: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    height: 8px;
    width: 8px;
  }
  ul li:hover {
    background-color: rgba(255, 255, 255, 0.85);
  }

  .slides {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    border: 0;
  }
</style>

<div class="carousel">
  <button class="left" on:click={left} aria-label="left">
    <slot name="left-control" />
  </button>
  <div class="slides" bind:this={siema}>
    <slot />
  </div>
  <ul>
    {#each pips as pip, i}
      <li on:click={() => go(i)} />
    {/each}
  </ul>
  <button class="right" on:click={right} aria-label="right">
    <slot name="right-control" />
  </button>
</div>
