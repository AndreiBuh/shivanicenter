<script context="module">
  const apiUrl = process.env.SAPPER_APP_API_URL;

  export async function preload({ params, query }) {
    return this.fetch(`${apiUrl}/articles?slug=${params.slug}`)
      .then(res => res.json())
      .then(article => {
        return { article };
      });
  }
</script>

<script>
  import ArticlesSlugs from "../../../components/Articles/ArticlesSlugs.svelte";
  export let article;
</script>

<ArticlesSlugs {article} />

<svelte:head>
  <meta
    property="og:image"
    content="https://res.cloudinary.com/www-shivanicenter-ro/image/upload/v1586183318/a9q26ghgydvw5pua1lu2.jpg" />
</svelte:head>
