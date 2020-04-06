<script>
  import ArticlesSidebar from "./ArticlesSidebar.svelte";
  import ShareSocialIcons from "../Global/ShareSocialIcons.svelte";

  export let article;

  let {
    title,
    image,
    avatar,
    author,
    published,
    content,
    category,
    slug,
    likes,
    category_slug,
    id
  } = article[0];

  let y;
</script>

<style>
  h3 {
    font-family: var(--font-main), cursive;
  }

  .card-img-top {
    width: 100%;
    border-radius: calc(0.25rem - 1px);
  }

  .avatar {
    display: block;
    width: 120px;
    margin-top: -60px;
    overflow: hidden;
  }

  .avatar img {
    width: 100%;
    background: none repeat scroll 0 0 #fff;
    border: 5px solid #fff;
  }

  .details {
    color: var(--main-bg-color);
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: var(--font-main), sans-serif;
  }

  a.category-link {
    text-decoration: none;
    font-size: 12px;
    color: var(--category-color);
    font-family: var(--font-main);
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  /* Articole pages style START */

  .article-card-body :global(p) {
    font-family: var(--font-text), sans-serif;
    font-size: 18px;
  }

  .article-card-body :global(h1, h2, h3, h4, h5, h6, h7) {
    font-family: var(--font-main), sans-serif;
  }

  .article-card-body :global(div) {
    padding: 10px;
  }

  .article-card-body :global(li) {
    margin: 0px 10px 10px 15px;
    font-size: 20px;
    font-family: var(--font-text), sans-serif;
  }

  /* Articole pages style END */
</style>

<div class="container">
  <div class="row">
    <div class="col-md-8 mb-3">
      <div class="card">
        <h3 class="text-center p-3 my-0">{title}</h3>
        <div class="card-content">
          <div class="view view-cascade overlay">
            <img class="card-img-top" src={image.url} alt="Educatie fete" />
          </div>
          <div class="avatar mx-auto white">
            <img
              src={avatar.url}
              class="rounded-circle img-fluid"
              alt="First sample avatar image" />
          </div>
          <div class="text-center">
            <div class="details">{author} | {published}</div>
            <div class="category">
              <a href="/articole/{category_slug}" class="category-link">
                {category.title}
              </a>
            </div>
            <ShareSocialIcons
              {likes}
              {id}
              {category_slug}
              {slug}
              on:like
              {image} />
          </div>
        </div>
        <div class="card-body article-card-body">
          {@html content}
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <ArticlesSidebar />
    </div>
  </div>
</div>
