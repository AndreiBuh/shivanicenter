<script>
  import { fade, fly } from "svelte/transition";
  import Carousel from "./Carousel.svelte";

  let slides = [
    {
      name: "Psiholog Roxana Alecu",
      src: "slider1",
      text:
        "Timpul, oamenii, evenimentele, gândurile și acțiunile mi-au revelat întotdeauna ceva nou despre mine. Mă prezint în fața voastră mai intâi ca ființă umană, cu emoții, cu probleme, cu o mulțime de întrebări, dar mereu cu putere de a depăși momentele grele ce îmi provoacă suferință...",
      slug: "roxana-alecu",
      quote:
        '"Poți face multe descoperiri, dar cea mai mare descoperire ești chiar tu!"'
    },

    {
      src: "alexandra2",
      name: "Psiholog Alexandra Tatu",
      text:
        "La fel ca şi tine, şi eu am o poveste în spatele numelui meu. De fapt, cu toţii suntem protagoniştii vieţilor noastre. Mă numesc Tatu Alexandra şi dacă vreau să îmi descriu povestea în câteva cuvinte, acestea sunt: căutare, efort, obstacole, apreciere, imaginaţie, sinceritate, pasiune...",
      slug: "people/alexandra-tatu",
      quote:
        '"Mereu vor fi lucruri frumoase în lumea în care trăim, atâta timp cât știm unde și cum să privim."'
    },

    {
      src: "phone2",
      name: "Shivani Center",
      text:
        "Suport psihologic GRATUIT pentru persoanele aflate în izolare sau afectate de criza generată de răspândirea virusului COVID-19.",
      slug: "",
      quote: ""
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
    font-family: var(--font-main);
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

  .text-white,
  .quote {
    font-family: var(--font-main);
    font-size: 16px;
    letter-spacing: 1px;
  }

  .quote {
    font-size: 18px;
  }

  .control :global(svg) {
    width: 100%;
    height: 100%;
    color: white;
    border-radius: 32px;
  }
  i {
    color: white;
    font-size: 24px;
  }
</style>

<div in:fade={{ duration: 1000 }} class="mb-5">
  <Carousel perPage={1} loop autoplay={6000}>
    <span class="control" slot="left-control">
      <i class="fa fa-chevron-left" />
    </span>
    {#each slides as { src, text, name, slug, quote }}
      <div class="slide-content row">
        <div class="pr-0 col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
          <img src="images/people/{src}.jpg" alt={name} />
        </div>
        <div
          class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 slide-text p-5
          text-center">
          <h3 class="pb-3 text-white">{name}</h3>
          <p class="mb-4 text-elegant quote">{`${quote}`}</p>
          <p class="text-white">{text}</p>
          <div class="p-4">
            <a href="despre-noi/{slug}">
              <button class="btn btn-outline py-2 px-4" aria-label="Citeste">
                <span class="text-white">CITEȘTE MAI MULT</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    {/each}
    <span class="control" slot="right-control">
      <i class="fa fa-chevron-right" />
    </span>
  </Carousel>
</div>
