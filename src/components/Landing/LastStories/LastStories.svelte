<script>
  import { onMount } from "svelte";
  import Story from "./Story.svelte";
  import Heading from "../../UI/Heading.svelte";

  const apiUrl = process.env.SAPPER_APP_API_URL;
  let articles = [];

  onMount(async () => {
    const res = await fetch(`${apiUrl}/articles?_limit=7`);
    const json = await res.json();
    articles = json;
    console.log(articles);
  });
</script>

<style>
  .card {
    height: auto;
    border: none;
  }

  .card-columns .card {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .card-columns .card:hover {
    box-shadow: 0 0px 8px rgba(0, 0, 0, 0.25), 0 4px 6px rgba(0, 0, 0, 0.22);
  }
</style>

<div class="container">
  <Heading title="Ultimele postari" />
  <div class="card-columns">
    {#each articles as { title, excerpt, image, categories, category_slug, author, published, slug }, id}
      <div class="card p-3 m-2">
        <Story
          {title}
          {excerpt}
          {image}
          {categories}
          {author}
          {published}
          {category_slug}
          {slug} />
      </div>
    {/each}
  </div>
</div>
