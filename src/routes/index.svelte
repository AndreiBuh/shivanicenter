<script>
  import { onMount } from "svelte";
  import Banner from "../components/Landing/Banner/Banner.svelte";
  import Servicii from "../components/Landing/Services/Servicii.svelte";
  // import HomeCarousel from "../components/Carousel/HomeCarousel.svelte";
  import ArticlesHome from "../components/Landing/Articles/ArticlesHome.svelte";
  import LastStories from "../components/Landing/LastStories/LastStories.svelte";

  let HomeCarousel;

  onMount(async () => {
    const carousel = await import("../components/Carousel/HomeCarousel.svelte");
    HomeCarousel = carousel.default;
  });
</script>

<svelte:head>
  <title>Shivani center</title>
</svelte:head>
<svelte:component this={HomeCarousel} />
<LastStories />
<Banner title="Cine suntem?" />
<ArticlesHome />
<Servicii />
<Banner title="Iti plac articolele noastre? Aboneaza-te la newsletter!" />
