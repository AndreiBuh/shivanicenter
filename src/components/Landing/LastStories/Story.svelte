<script>
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
    color: var(--main-color);
    font-family: "Oswald";
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .post-categories a:hover {
    color: #ea8928;
  }
  .post-title h2 {
    font-size: 22px;
    margin-bottom: 5px;
    margin-top: 5px;
    font-family: "Josefin Sans";
    color: #505050;
  }

  .post-title h2:hover {
    color: var(--main-bg-color);
  }

  .post-content {
    font-size: 14px;
    font-family: "Josefin Sans";
    color: #616161;
  }

  .post-meta span {
    font-size: 11px;
    color: #8d8d8d;
    font-family: "Oswald";
  }
</style>

<div class="card">
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
      <h2 class="font-weight-bold">{title}</h2>
    </a>
  </div>
  <div class="post-content">
    {@html excerpt}
  </div>
  <div class="post-meta">
    <span>{author}, {published}</span>
  </div>
</div>
