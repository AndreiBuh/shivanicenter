<script>
  import { onMount } from "svelte";
  import LoadingSpinner from "../UI/LoadingSpinner.svelte";

  const apiUrl = process.env.SAPPER_APP_API_URL;

  let isLoading = true;
  let articles = [];
  onMount(async () => {
    const res = await fetch(`${apiUrl}/articles?_limit=3`);
    const json = await res.json();
    articles = json;
    isLoading = false;
  });
</script>

<style>
  a {
    text-decoration: none;
  }
  ol {
    list-style: none;
    counter-reset: my-awesome-counter;
    flex-wrap: wrap;
  }
  ol li.most-read-list-item {
    border-bottom: 1px solid #e8e8e8;
    padding: 12px 0;
    text-align: left;
    position: relative;
    line-height: 18px;
    font-size: 14px;
    font-weight: 400;
    color: #8c8c8c;
    counter-increment: my-awesome-counter;
  }

  a.category-link {
    font-size: 12px;
    color: var(--category-color);
    font-family: var(--font-main), cursive;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  a.category-link:hover {
    color: #8c8c8c;
  }

  a.article-title {
    text-decoration: none;
    color: #8c8c8c;
    font-family: var(--font-main), sans-serif;
    font-size: 14px;
  }

  a.article-title:hover,
  a.category-link:hover {
    color: #ea8928;
  }
  a.article-title:hover {
    color: var(--main-bg-color);
  }

  .text-holder::before {
    content: "0" counter(my-awesome-counter);
    font-weight: bold;
    font-size: 2rem;
    margin-right: 0.5rem;
    font-family: "Abril Fatface", serif;
  }
</style>

{#if isLoading}
  <div class="loading">
    <LoadingSpinner />
  </div>
{:else}
  <ol class="most-read-list">
    {#each articles as { title, slug, category, category_slug, image, published, author }, i}
      <li class="most-read-list-item row">
        <div class="text-holder col-6">
          <div class="category">
            <a
              rel="prefetch"
              href="articole/{category_slug}"
              class="category-link">
              {category.title}
            </a>
          </div>
          <a
            rel="prefetch"
            href="articole/{category_slug}/{slug}"
            class="article-title">
            {title}
          </a>
        </div>
        <a
          rel="prefetch"
          href="articole/{category_slug}/{slug}"
          class="image-holder col-6">
          <img src={image.url} alt={title} class="rounded" />
        </a>
      </li>
    {/each}
  </ol>
{/if}
