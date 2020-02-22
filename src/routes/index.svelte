<script>
  import Banner from "../components/Landing/Banner/Banner.svelte";
  import Servicii from "../components/Landing/Services/Servicii.svelte";
  import HomeCarousel from "../components/Carousel/HomeCarousel.svelte";
  import ArticlesHome from "../components/Landing/Articles/ArticlesHome.svelte";
  import LastStories from "../components/Landing/LastStories/LastStories.svelte";
</script>

<svelte:head>
  <title>Shivani center</title>
</svelte:head>
<HomeCarousel />
<LastStories />
<Banner title="Cine suntem?" />
<ArticlesHome />
<Servicii />
<Banner title="Iti plac articolele noastre? Aboneaza-te la newsletter!" />
