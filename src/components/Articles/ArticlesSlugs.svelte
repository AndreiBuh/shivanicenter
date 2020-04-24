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
    category,
    slug,
    likes,
    category_slug,
    id,
    excerpt
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
    width: 100px;
    margin-top: -60px;
    overflow: hidden;
  }

  .avatar img {
    width: 100%;
    background: none repeat scroll 0 0 #fff;
    border: 2px solid #fff;
  }

  .details {
    color: var(--main-bg-color);
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-family: var(--font-main), sans-serif;
  }

  a {
    text-decoration: none;
    font-size: 12px;
    color: var(--category-color);
    font-family: var(--font-main);
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  /* Articole pages style START */
  .article-card-body {
    width: 90%;
    margin: 0 auto;
  }

  .article-card-body :global(p, li) {
    font-family: var(--font-text), sans-serif;
    font-size: 18px;
    line-height: 22px;
  }

  .article-card-body :global(h1, h2, h3, h4, h5, h6, h7) {
    font-family: var(--font-main), sans-serif;
  }

  .article-card-body :global(div) {
    padding: 10px;
  }

  :global(.iframe) {
    height: 450px;
    width: 95%;
  }

  /* social share */
  ul {
    display: flex;
    justify-content: center;
    height: 50px;
  }
  ul li {
    list-style: none;
  }
  ul li a {
    display: block;
    width: 50px;
    height: 50px;
    line-height: 50px;
    color: #fff;
    margin: 0 2px;
    border-radius: 50%;
    font-size: 18px;
    transition: 1s;
  }
  ul li:nth-child(1) a {
    background: #3b5999;
  }
  ul li:nth-child(2) a {
    background: #0077b5;
  }
  ul li:nth-child(3) a {
    background: #25d366;
  }

  ul li a:hover {
    transform: translateY(-5px);
    transition: 0.4s ease-out;
  }

  /* Social share inside end */

  @media screen and (max-width: 768px) {
    .article-card-body {
      width: 95%;
    }

    .article-card-body :global(p, li) {
      font-size: 16px;
      line-height: 20px;
    }

    :global(.iframe) {
      height: 200px;
    }

    .whatsapp-desktop {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    .whatsapp-mobile {
      display: none;
    }
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
            <div class="article-share mt-3">
              <ul>
                <li>
                  <div
                    class="fb-share-button"
                    data-href="https://www.shivanicenter.ro/articole/{category_slug}/{slug}"
                    data-layout="button_count"
                    data-size="small">
                    <a
                      target="_blank"
                      href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.shivanicenter.ro%2Farticole%2F{category_slug}%2F{slug}&amp;src=sdkpreparse"
                      class="fb-xfbml-parse-ignore">
                      <i class="fa fa-facebook" aria-hidden="true" />
                    </a>
                  </div>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.shivanicenter.ro/articole/{category_slug}/{slug}&title=Create
                    LinkedIn Share button on Website
                    Webpages&summary=chillyfacts.com&source=Chillyfacts"
                    onclick="window.open(this.href, 'mywin',
                    'left=20,top=20,width=500,height=500,toolbar=1,resizable=0');
                    return false;">
                    <i class="fa fa-linkedin" aria-hidden="true" />
                  </a>
                </li>
                <li class="whatsapp-desktop">
                  <a
                    target="_blank"
                    href="https://web.whatsapp.com/send?text=https://www.shivanicenter.ro/articole/{category_slug}/{slug}"
                    data-action="share/whatsapp/share">
                    <i class="fa fa-whatsapp" aria-hidden="true" />
                  </a>
                </li>
                <li class="whatsapp-mobile">
                  <a
                    target="_blank"
                    href="whatsapp://send?text=https://www.shivanicenter.ro/articole/{category_slug}/{slug}"
                    data-action="share/whatsapp/share">
                    <i class="fa fa-whatsapp" aria-hidden="true" />
                  </a>
                </li>
              </ul>
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

<svelte:head>
  <meta property="og:title" content={title} />
  <meta
    property="og:url"
    content="https://www.shivanicenter.ro/articole/{category_slug}/{slug}" />
  <meta property="og:description" content={excerpt} />
  <meta property="og:image" content={image.url} />
</svelte:head>
