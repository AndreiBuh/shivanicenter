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
      title: "DESPRE MINE",
      name: "Psiholog Roxana Alecu",
      src: "slider1.png",
      text:
        "Timpul, oamenii, evenimentele, gandurile si actiunile mele mi-au revelatmereu ceva nou despre mine. Acum, ma prezint in fata voastra mai intai cafiinta umana, cu emotii, cu probleme, cu o multime de intrebari, dar mereucu putere de a depasi momentele grele ce imi provoaca suferinta."
    },
    {
      title: "DESPRE MINE",
      src: "consiliere-psihologica1.png",
      name: "Psiholog Roxana Alecu",
      text:
        "Timpul, oamenii, evenimentele, gandurile si actiunile mele mi-au revelatmereu ceva nou despre mine. Acum, ma prezint in fata voastra mai intai cafiinta umana, cu emotii, cu probleme, cu o multime de intrebari, dar mereucu putere de a depasi momentele grele ce imi provoaca suferinta."
    },
    {
      title: "DESPRE MINE",
      src: "alexandra2.jpg",
      name: "Psiholog Alexandra Tatu",
      text:
        "La fel ca şi tine, şi eu am o poveste în spatele numelui meu. De fapt, cu toţii suntem protagoniştii vieţilor noastre. Mă numesc Tatu Alexandra şi dacă vreau să îmi descriu povestea în câteva cuvinte, ele sunt acestea: căutare, efort, obstacole, apreciere, imaginaţie, sinceritate, pasiune."
    }
  ];
</script>

<style>
  @font-face {
    font-family: "Flaticon";
    src: url("./font/Flaticon.eot");
    src: url("./font/Flaticon.eot?#iefix") format("embedded-opentype"),
      url("./font/Flaticon.woff2") format("woff2"),
      url("./font/Flaticon.woff") format("woff"),
      url("./font/Flaticon.ttf") format("truetype"),
      url("./font/Flaticon.svg#Flaticon") format("svg");
    font-weight: normal;
    font-style: normal;
  }

  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    @font-face {
      font-family: "Flaticon";
      src: url("./font/Flaticon.svg#Flaticon") format("svg");
    }
  }

  [class^="flaticon-"]:before,
  [class^="flaticon-"]:after {
    font-family: Flaticon;
    font-size: 25px;
    font-style: normal;
    margin-left: 0;
  }
  .flaticon-back:before {
    content: "\f100";
  }
  .flaticon-next:before {
    content: "\f101";
  }

  .slide-text {
    background: #222736;
    color: white;
  }
  element {
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
    background: #dfa974 !important;
  }
  h7 {
    font-size: 12px;
  }
  a {
    text-decoration: none;
  }

  @media only screen and (max-width: 600px) {
    .slide-text {
      display: none;
    }
  }
</style>

<div in:fade={{ duration: 2000 }}>
  <Carousel perPage={1} loop autoplay={4000}>
    <span class="control" slot="left-control">
      <ChevronLeftIcon />
    </span>
    {#each slides as { title, src, text, name }}
      <div class="slide-content row">
        <div class="col-md-7 slide-image pr-0">
          <img {src} alt={title} class="image-fluid" />
        </div>
        <div class="col-md-5 slide-text p-5">
          <h7 class="text-white">{title}</h7>
          <h3 class="text-white pb-3">{name}</h3>

          <p class="text-white">{text}</p>
          <button class="btn btn-outline py-2 px-4">
            <a href="despre-noi/roxana-alecu">
              <span class="text-white">CITEȘTE</span>
            </a>
          </button>
        </div>
      </div>
    {/each}
    <span class="control" slot="right-control">
      <ChevronRightIcon />
    </span>
  </Carousel>
</div>
