<script>
  import Banner from "../components/Banner.svelte";
  import Servicii from "../components/Servicii.svelte";
  import HomeCarousel from "../components/HomeCarousel.svelte";
  import ArticlesHome from "../components/ArticlesHome.svelte";
  import PostsHome from "../components/PostsHome.svelte";
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
