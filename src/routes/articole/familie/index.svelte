<script context="module">
  const apiUrl = process.env.SAPPER_APP_API_URL;

  export function preload({ params, query }) {
    return this.fetch(`${apiUrl}/articles?category_slug=familie`)
      .then(res => res.json())
      .then(articles => {
        return { articles };
      });
  }
</script>

<script>
  import ArticlesPages from "../../../components/Articles/ArticlesPages.svelte";
  export let articles;
</script>

<svelte:head>
  <title>Articole</title>
</svelte:head>

<ArticlesPages {articles} category="Familie" slug="familie" />
