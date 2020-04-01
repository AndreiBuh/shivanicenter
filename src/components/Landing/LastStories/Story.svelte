<script>
  import { scale } from "svelte/transition";

  export let title;
  export let published;
  export let excerpt;
  export let image;
  export let category;
  export let category_slug;
  export let slug;
  export let author;
</script>

<style>
  a {
    text-decoration: none;
  }
  .card {
    border: none;
    border-bottom: 1px solid #f0f0f0;
  }
  .post-overlay {
    transition: 0.5s opacity ease-in-out;
    border-radius: 8px;
  }
  .post-categories a {
    font-size: 12px;
    color: var(--category-color);
    font-family: "Averta";
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .post-categories a:hover {
    color: #ea8928;
  }
  .post-title h5 {
    font-family: var(--font-text), sans-serif;
    color: #505050;
  }

  .post-title h5:hover {
    color: var(--main-bg-color);
  }

  .post-content {
    font-size: 15px;
    font-family: var(--font-text), sans-serif;
    color: #616161;
  }

  .post-meta span {
    font-size: 13px;
    color: #8d8d8d;
    font-family: var(--font-main);
    letter-spacing: 1px;
  }

  .card {
    height: auto;
    border: none;
  }

  .card {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .card:hover {
    box-shadow: 0 0px 8px rgba(0, 0, 0, 0.25), 0 4px 6px rgba(0, 0, 0, 0.22);
  }
</style>

<div class="card p-3 m-2" in:scale>
  <a rel="prefetch" href="articole/{category_slug}/{slug}">
    <img src={image.url} alt="image" class="post-overlay" />
  </a>
  <div class="post-categories mt-md-4 mt-0">
    <a rel="prefetch" href="articole/{category_slug}" class="font-weight-bold">
      {category.title}
    </a>
  </div>
  <div class="post-title">
    <a
      rel="prefetch"
      href="articole/{category_slug}/{slug}"
      class="font-weight-bold">
      <h5 class="font-weight-bold my-1">{title}</h5>
    </a>
  </div>
  <div class="post-content">
    {@html excerpt}
  </div>
  <div class="post-meta">
    <span>{author} | {published}</span>
  </div>
</div>
