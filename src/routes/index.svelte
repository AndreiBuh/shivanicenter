<script>
  import { onMount } from "svelte";
  import Banner from "../components/Landing/Banner/Banner.svelte";
  import Servicii from "../components/Landing/Services/Servicii.svelte";
  import HomeCarousel from "../components/Carousel/HomeCarousel.svelte";
  import ArticlesHome from "../components/Landing/Articles/ArticlesHome.svelte";
  import LastStories from "../components/Landing/LastStories/LastStories.svelte";
  import Blog from "../components/Landing/Blog/Blog.svelte";
  import TestimonialsHome from "../components/Landing/Testimonials/TestimonialsHome.svelte";
</script>

<style>
  @media screen and (max-width: 768px) {
    main {
      margin-top: 70px;
    }
  }
</style>

<svelte:head>
  <title>Shivani Center</title>
</svelte:head>
<main>
  <HomeCarousel />
  <LastStories />
  <Banner title="Cine suntem?" />
  <ArticlesHome />
  <Servicii />
  <Blog />
  <Banner title="Îți plac articolele noastre? Abonează-te la newsletter!" />
  <TestimonialsHome />
</main>
