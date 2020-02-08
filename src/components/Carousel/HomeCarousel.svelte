<script>
  import { fade, fly } from "svelte/transition";

  import Carousel from "./Carousel.svelte";
  import {
    ChevronLeftIcon,
    ChevronRightIcon,
    ArrowRightIcon
  } from "svelte-feather-icons";

  let slides = [
    {
      name: "Psiholog Roxana Alecu",
      src: "slider1.png",
      text:
        "Timpul, oamenii, evenimentele, gandurile si actiunile mele mi-au revelatmereu ceva nou despre mine. Acum, ma prezint in fata voastra mai intai cafiinta umana, cu emotii, cu probleme, cu o multime de intrebari, dar mereucu putere de a depasi momentele grele ce imi provoaca suferinta.",
      slug: "roxana-alecu"
    },

    {
      src: "alexandra2.jpg",
      name: "Psiholog Alexandra Tatu",
      text:
        "La fel ca şi tine, şi eu am o poveste în spatele numelui meu. De fapt, cu toţii suntem protagoniştii vieţilor noastre. Mă numesc Tatu Alexandra şi dacă vreau să îmi descriu povestea în câteva cuvinte, ele sunt acestea: căutare, efort, obstacole, apreciere, imaginaţie, sinceritate, pasiune.",
      slug: "alexandra-tatu"
    }
  ];
</script>

<style>
  .slide-text {
    background: #222736;
    color: white;
  }
  .btn:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
  .btn {
    border: 1px solid white !important;
    color: color;
    border-radius: 6px;
    font-size: 12px;
    font-family: "Montserrat";
    letter-spacing: 3px;
  }

  .btn:hover {
    color: white;
    border: 1px solid !important;
    background: #444c54 !important;
  }

  a {
    text-decoration: none;
  }

  .img-fluid {
    width: 100%;
    height: auto;
  }

  .text-white,
  .quote {
    font-family: "Oswald";
  }

  .control :global(svg) {
    width: 100%;
    height: 100%;
    color: white;
    border: 2px solid white;
    border-radius: 32px;
  }
</style>

<div in:fade={{ duration: 2000 }}>
  <Carousel perPage={1} loop autoplay={4000}>
    <!-- <span class="control" slot="left-control">
      <ChevronLeftIcon />
    </span> -->
    {#each slides as { src, text, name, slug }}
      <div class="slide-content row">
        <div class="pr-0 col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
          <img {src} alt="" class="img-fluid" />
        </div>
        <div
          class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 slide-text p-5
          text-center">
          <h3 class="pb-3 text-white ">{name}</h3>
          <p class="mb-5 text-elegant quote">
            “Two things are infinite: the universe and human stupidity; and I'm
            not sure about the universe.”
          </p>
          <p class="text-truncate text-white ">{text}</p>
          <div class="p-4">
            <button class="btn btn-outline py-2 px-4">
              <a href="despre-noi/{slug}">
                <span class="text-white">CITEȘTE</span>
              </a>
            </button>
          </div>

        </div>
      </div>
    {/each}
    <!-- <span class="control" slot="right-control">
      <ChevronRightIcon />
    </span> -->
  </Carousel>
</div>
