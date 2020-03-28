<script>
  import { onMount } from "svelte";
  import Banner from "../components/Landing/Banner/Banner.svelte";
  import Servicii from "../components/Landing/Services/Servicii.svelte";
  import HomeCarousel from "../components/Carousel/HomeCarousel.svelte";
  import ArticlesHome from "../components/Landing/Articles/ArticlesHome.svelte";
  import LastStories from "../components/Landing/LastStories/LastStories.svelte";
  import Blog from "../components/Landing/Blog/Blog.svelte";
  import TestimonialsHome from "../components/Landing/Testimonials/TestimonialsHome.svelte";

  // let HomeCarousel;

  // onMount(async () => {
  //   const carousel = await import("../components/Carousel/HomeCarousel.svelte");
  //   HomeCarousel = carousel.default;
  // });
</script>

<svelte:head>
  <title>Shivani Center</title>
</svelte:head>
<!-- <svelte:component this={HomeCarousel} /> -->
<HomeCarousel />
<LastStories />
<Banner title="Cine suntem?" />
<ArticlesHome />
<Servicii />
<Blog />
<Banner title="Iti plac articolele noastre? Aboneaza-te la newsletter!" />
<TestimonialsHome />
