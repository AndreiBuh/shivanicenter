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
  const { title, category_slug, slug, image, excerpt } = article[0];
</script>

<ArticlesSlugs {article} />
<div
  class="fb-share-button"
  data-href="https://www.shivanicenter.ro/articole/{category_slug}/{slug}"
  data-layout="button_count" />

<svelte:head>
  <title>{title}</title>
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content="https://www.shivanicenter.ro/articole/{category_slug}/{slug}" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={excerpt} />
  <meta property="og:image" content={image.url} />
</svelte:head>
