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
  import ArticlesPages from "../../../components/Articles/ArticlesPages.svelte";
  export let articles;
  var filteredArticles = articles.filter(
    a => a.category_slug === "dezvoltare-personala"
  );

  console.log(articles);
</script>

<svelte:head>
  <title>Articole</title>
</svelte:head>

<ArticlesPages
  articles={filteredArticles}
  category="Dezvoltare personala"
  slug="dezvoltare-personala" />
