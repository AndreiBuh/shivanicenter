<script>
  export let name;
  export let jobTitle;
  export let imageUrl;
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import { cubicIn } from "svelte/easing";
  let visible = false;

  onMount(() => {
    visible = true;
  });
</script>

<style>
  .shivani-wrapper {
    font-size: 18px;
    line-height: 1.8;
  }

  .card.card-cascade.wider {
    background-color: transparent;
    box-shadow: none;
    border: none;
  }

  .card.card-cascade.wider .view.view-cascade {
    z-index: 2;
  }
  .card.card-cascade .view.view-cascade {
    border-radius: 0.25rem;
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
  }
  .view {
    position: relative;
    overflow: hidden;
    cursor: default;
    max-height: 500px;
  }

  .card-img-top {
    width: 100%;
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
  }

  .overlay .mask:hover {
    opacity: 1;
  }
  .overlay .mask {
    opacity: 0;
    transition: all 0.4s ease-in-out;
  }
  .view .mask {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    width: 100%;
    height: 100%;
    background-attachment: fixed;
  }
  .rgba-white-slight,
  .rgba-white-slight::after {
    background-color: rgba(255, 255, 255, 0.1);
  }

  #cascading-cards .card.card-cascade.wider .card-body.card-body-cascade {
    border-bottom-right-radius: 0.25rem !important;
    border-bottom-left-radius: 0.25rem !important;
  }
  .card.card-cascade.wider .card-body.card-body-cascade {
    z-index: 1;
    margin-right: 4%;
    margin-left: 4%;
    background: #fff;
    border-radius: 0 0 0.25rem 0.25rem;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }

  .card.card-cascade.wider .card-body.card-body-cascade:hover {
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
  }

  .text-font {
    font-family: "Josefin Sans";
  }
  .elegant-text {
    color: #dfa974;
  }
</style>

{#if visible}
  <div class="shivani-wrapper text-justify" in:fade={{ duration: 2000 }}>
    <div class="mt-5 mb-3 row">
      <div class="card card-cascade wider ml-5">
        <div class="view view-cascade overlay">
          <img class="card-img-top" src={imageUrl} alt="Sample image" />
          <a href="#">
            <div class="mask rgba-white-slight" />
          </a>
        </div>
        <div class="card-body card-body-cascade text-center">
          <h4 class="card-title text-font">
            <strong>{name}</strong>
          </h4>
          <h6 class="pb-2 text-font elegant-text">{jobTitle}</h6>
        </div>
      </div>
    </div>
  </div>
{/if}
