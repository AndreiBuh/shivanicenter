<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(
      `articole/dezvoltare-personala/${params.slug}.json`
    );
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import ArticlesSidebar from "../../../components/Articles/ArticlesSidebar.svelte";
  export let post;
</script>

<style>
  h3 {
    font-family: "Oswald";
  }
  .article-title,
  .article-text {
    font-family: "Josefin Sans";
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
    letter-spacing: 1px;
    font-weight: 700;
    text-transform: uppercase;
    color: #d79c74;
  }

  .article-card-body :global(p) {
    font-family: "Josefin Sans", serif;
    font-size: 16px;
  }

  .article-card-body :global(h1, h2, h3, h4, h5, h6, h7) {
    font-family: "Josefin Sans", serif;
    margin: 30px 0px;
  }

  .article-card-body :global(div) {
    padding: 10px;
  }

  .article-card-body :global(li) {
    margin: 0px 0px 20px 30px;
    font-weight: bold;
    font-size: 20px;
    font-family: "Montserrat";
  }

  .article-card-body :global(ol) {
    margin-bottom: 70px;
  }
</style>

<div class="container">
  <div class="row">
    <div class="col-md-8 my-5 my-md-0">
      <div class="card">
        <h3 class="text-center p-3 my-0">{post.title}</h3>
        <div class="card-content">
          <div class="view view-cascade overlay">
            <img
              class="card-img-top"
              src="educatie-fete.png"
              alt="Franghie atasament" />
            <div class="mask rgba-white-slight" />
          </div>
          <div class="avatar mx-auto white">
            <img
              src={post.avatar}
              class="rounded-circle img-fluid"
              alt="First sample avatar image" />
          </div>
          <div class="text-center">
            <div class="author">{post.author}</div>
            <div class="date">{post.date}</div>
            <div class="category">
              <a href="" class="category-link">{post.category}</a>
            </div>
          </div>
        </div>
        <div class="card-body article-card-body">
          {@html post.html}
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <ArticlesSidebar />
    </div>
  </div>
</div>
