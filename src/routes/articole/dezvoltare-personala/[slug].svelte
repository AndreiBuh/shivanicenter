<script context="module">
  const apiUrl = process.env.SAPPER_APP_API_URL;

  export async function preload({ params, query }) {
    return this.fetch(`${apiUrl}/articles?slug=${params.slug}`)
      .then(res => res.json())
      .then(article => {
        return { article };
      });
    console.log(article);
  }
</script>

<script>
  import ArticlesSlugs from "../../../components/Articles/ArticlesSlugs.svelte";
  export let article;
</script>

<ArticlesSlugs {article} />
