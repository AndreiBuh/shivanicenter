<script>
  import { onMount } from "svelte";
  const apiUrl = process.env.SAPPER_APP_API_URL;
  let articles = [];

  onMount(async () => {
    const res = await fetch(`${apiUrl}/articles?_limit=3`);
    const json = await res.json();
    articles = json;
    console.log(articles);
  });
</script>

<style>
  ol.most-read-list {
    list-style: none;
  }
  li.most-read-list-item {
    border-bottom: 1px solid #e8e8e8;
    padding: 12px 0;
    text-align: left;
    position: relative;
    line-height: 22px;
    font-size: 14px;
    font-weight: 400;
    color: #8c8c8c;
  }

  a.category-link {
    text-decoration: none;
    font-size: 8px;
    font-family: "Noto Sans", sans-serif;
    letter-spacing: 1px;
    font-weight: 700;
    text-transform: uppercase;
    color: #d79c74;
  }

  a.category-link:hover {
    color: #8c8c8c;
  }

  a.article-title {
    text-decoration: none;
    color: #8c8c8c;
    font-family: "Oswald", sans-serif;
    font-size: 14px;
  }

  a.article-title:hover,
  a.category-link:hover {
    color: #dfa974;
  }

  ol {
    counter-reset: my-awesome-counter;
    flex-wrap: wrap;
  }
  ol li {
    counter-increment: my-awesome-counter;
  }
  .text-holder::before {
    content: "0" counter(my-awesome-counter);
    font-weight: bold;
    font-size: 2rem;
    margin-right: 0.5rem;
    font-family: "Abril Fatface", serif;
    line-height: 1;
  }
</style>

<ol class="most-read-list">
  {#each articles as { title, slug, category, category_slug, image, published, author }, i}
    <li class="most-read-list-item row">
      <div class="text-holder col-md-6 col-6">
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
        class="image-holder col-md-6 col-6">
        <img src={image.name} alt={title} />
      </a>
    </li>
  {/each}
</ol>
