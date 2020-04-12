<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import Nav from "../components/Global/Nav.svelte";
  import Footer from "../components/Global/Footer.svelte";
  import Gdpr from "../components/Global/GDPR/Gdpr.svelte";
  import GoogleAnalytics from "../components/GoogleAnalytics.svelte";
  import LoadingSpinner from "../components/UI/LoadingSpinner.svelte";

  export let segment;

  let scroll;
  let isLoading = true;

  onMount(() => {
    isLoading = false;
  });
</script>

<style>
  main {
    position: relative;
    margin: 0 auto;
    box-sizing: border-box;
  }

  .spinner {
    position: fixed;
    z-index: 1031;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .btn-scroll {
    display: inline-block;
    background-color: #fff;
    width: 50px;
    height: 50px;
    text-align: center;
    border-radius: 10px;
    position: fixed;
    bottom: 30px;
    right: 30px;
    transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
    z-index: 1000;
    border: none;
  }
  .btn-scroll::after {
    content: "\f077";
    font-family: FontAwesome;
    font-weight: normal;
    font-style: normal;
    font-size: 2em;
    line-height: 50px;
    color: #222736;
  }
  .btn-scroll:hover {
    cursor: pointer;
    background-color: #ddd;
  }
  /*  Servicii descriptions style START */
  :global(.service-title) {
    font-family: var(--font-main), sans-serif;
    color: #fff;
  }

  :global(.img-top) {
    width: 70%;
  }
  :global(.img-top, .img-middle) {
    border-radius: 10px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }

  :global(.paragraph-text, .paragraph-list-items) {
    font-family: var(--font-text);
    font-size: 20px;
    line-height: 24px;
    color: #fff;
  }

  :global(.paragraph-list-items) {
    font-size: 18px;
    line-height: 22px;
  }
  :global(.text-elegant) {
    color: var(--main-color);
  }

  /*  Servicii pages style END */

  /* Despre noi pages style START */
  :global(hr.style-hr) {
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(223, 169, 116, 0),
      rgba(223, 169, 116, 0.55),
      rgba(223, 169, 116, 0)
    ) !important;
  }
  :global(.signature) {
    font-family: var(--font-signature), cursive;
    font-size: 30px;
    color: #fff;
  }
  :global(.links) {
    text-decoration: none !important;
    color: #dfa974;
    opacity: 0.8;
  }

  /* container override css */

  @media screen and (min-width: 1200px) {
    :global(.container) {
      max-width: 1230px !important;
    }
  }

  @media screen and (max-width: 768px) {
    .btn-scroll {
      width: 30px;
      height: 30px;
      bottom: 10px;
      right: 20px;
      border-radius: 10px;
    }
    .btn-scroll::after {
      font-size: 15px;
      line-height: 30px;
    }
    :global(.img-top) {
      width: 100%;
    }

    :global(.service-title) {
      font-size: 24px !important;
    }

    :global(.paragraph-text) {
      font-size: 18px;
      line-height: 22px;
    }

    :global(.paragraph-list-items) {
      font-size: 16px;
      line-height: 20px;
    }
  }
</style>

<GoogleAnalytics />
<svelte:window bind:scrollY={scroll} id:slides />

{#if isLoading}
  <div class="spinner">
    <LoadingSpinner />
  </div>
{:else}
  <svelte:component this={Nav} {segment} />
  <main>
    <slot />
    {#if scroll > '800'}
      <button
        class="btn-scroll"
        aria-label="Top"
        on:click={() => (scroll = 0)}
        in:fly={{ y: 50, duration: 1000 }}
        out:fade />
    {/if}
  </main>
  <Footer />
  <Gdpr />
{/if}
