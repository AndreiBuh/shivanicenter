<script context="module">
  const apiUrl = process.env.SAPPER_APP_API_URL;

  export function preload({ params, query }) {
    return this.fetch(`${apiUrl}/articles`)
      .then(res => res.json())
      .then(articles => {
        return { articles };
      });
  }
</script>

<script>
  import Mission from "../components/Landing/Mission/Mission.svelte";
  import Servicii from "../components/Landing/Services/Servicii.svelte";
  import HomeCarousel from "../components/Carousel/HomeCarousel.svelte";
  import ArticlesHome from "../components/Landing/Articles/ArticlesHome.svelte";
  import LastStories from "../components/Landing/LastStories/LastStories.svelte";
  import Blog from "../components/Landing/Blog/Blog.svelte";
  import TestimonialsHome from "../components/Landing/Testimonials/TestimonialsHome.svelte";

  export let articles;

  var filteredArticles = articles.filter(a => a.featured === true);
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
  <LastStories {filteredArticles} />
  <Mission title="Cine suntem?" />
  <ArticlesHome {articles} />
  <Servicii />
  <Blog />
  <Mission title="Îți plac articolele noastre? Abonează-te la newsletter!" />
  <TestimonialsHome />
</main>
