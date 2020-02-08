<script>
  import Banner from "../components/Landing/Banner.svelte";
  import Servicii from "../components/Landing/Servicii.svelte";
  import HomeCarousel from "../components/Carousel/HomeCarousel.svelte";
  import ArticlesHome from "../components/Landing/ArticlesHome.svelte";
  import PostsHome from "../components/Landing/PostsHome.svelte";
</script>

<svelte:head>
  <title>Shivani center</title>
</svelte:head>
<HomeCarousel />
<PostsHome />
<Banner title="Cine suntem?" />
<ArticlesHome />
<Servicii />
<Banner title="Iti plac articolele noastre? Aboneaza-te la newsletter!" />
