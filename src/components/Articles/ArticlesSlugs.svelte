<script>
  import ArticlesSidebar from "./ArticlesSidebar.svelte";
  export let article;

  let {
    title,
    image,
    avatar,
    author,
    published,
    content,
    categories
  } = article[0];
</script>

<style>
  h3 {
    font-family: "Oswald";
  }
  .overlay .mask {
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
  .view .mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-attachment: fixed;
  }
  .waves-effect {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
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

  .author {
    font-size: 11px;
  }

  .date {
    color: #8c8c8c;
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-family: "Oswald", sans-serif;
  }

  a.category-link {
    text-decoration: none;
    font-size: 9px;
    font-family: "Noto Sans", sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    color: #d79c74;
  }
  /* Articole pages style START */

  .article-card-body :global(p) {
    font-family: "Josefin Sans", serif;
    font-size: 16px;
  }

  .article-card-body :global(h1, h2, h3, h4, h5, h6, h7) {
    font-family: "Josefin Sans", serif;
  }

  .article-card-body :global(div) {
    padding: 10px;
  }

  .article-card-body :global(li) {
    margin: 0px 10px 10px 15px;
    font-weight: bold;
    font-size: 14px;
    font-family: "Montserrat";
  }

  /* Articole pages style END */
</style>

<div class="container">
  <div class="row">
    <div class="col-md-8 my-5 my-md-0">
      <div class="card">
        <h3 class="text-center p-3 my-0">{title}</h3>
        <div class="card-content">
          <div class="view view-cascade overlay">
            <img class="card-img-top" src={image.name} alt="Educatie fete" />
          </div>
          <div class="avatar mx-auto white">
            <img
              src={avatar.name}
              class="rounded-circle img-fluid"
              alt="First sample avatar image" />
          </div>
          <div class="text-center">
            <div class="author">{author}</div>
            <div class="date">{published}</div>
            <div class="category">
              <a href="" class="category-link">
                {categories.map(category => category.name)}
              </a>
            </div>
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
