<script>
  export let title;
  export let image;
  export let user;
  export let published;
  export let excerpt;
  export let category;
  export let category_slug;
  export let slug;
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
    text-decoration: none;
    font-size: 12px;
    color: #d79c6a;
    font-family: "Montserrat";
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .post-title h2 {
    font-size: 22px;
    line-height: 110% !important;
    margin-bottom: 5px;
    margin-top: 5px;
    font-family: "Josefin Sans";
    color: #505050;
  }

  .post-content {
    font-size: 14px;
    font-family: "Josefin Sans";
    color: #616161;
  }

  .post-meta span {
    font-size: 11px;
    color: #8d8d8d;
    font-family: "Montserrat";
  }
</style>

<div class="card">
  <a rel="prefetch" href="articole/{category_slug}/{slug}">
    <img src={image.name} alt="" class="post-overlay" />
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
    <span>{user.username}, {published}</span>
  </div>
</div>
