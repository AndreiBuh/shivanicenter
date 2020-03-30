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

  const onLikeHandler = async event => {
    const { likes, id } = event.detail;

    let updatedArticle = {
      likes
    };
    console.log(updatedArticle);
    const response = await fetch(`${apiUrl}/articles/${id}`, {
      method: "PUT",
      body: JSON.stringify(updatedArticle),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) throw Error(response.message);
    try {
      const data = await response.json();
      return data;
    } catch (err) {
      throw err;
    }
  };
</script>

<ArticlesSlugs {article} on:like={onLikeHandler} />
