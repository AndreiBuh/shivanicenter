<script>
  import ArticlesSidebar from "./ArticlesSidebar.svelte";
  export let articles;
  export let category;
  export let slug;
</script>

<style>
  a {
    text-decoration: none;
    color: #222736;
  }
  h5 {
    font-family: "Oswald", sans-serif;
  }
  .article-title,
  .article-text {
    font-family: "Robot Slab", "Josefin Sans", sans-serif;
  }

  .card-content {
    background-color: #fbfbfb;
  }
  .card.card-cascade.wider {
    background-color: transparent;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .card.card-cascade.wider .view.view-cascade {
    z-index: 2;
  }
  .card,
  .card.card-cascade .view.view-cascade {
    border-radius: 0.5rem;
    -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
  }

  img {
    width: 100%;
    border-radius: 0.5rem;
  }

  .card.card-cascade.wider.reverse .card-body.card-body-cascade {
    z-index: 3;
    margin-top: -3rem;
    border-radius: 0.25rem;
    -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
  }
  .card.card-cascade.wider .card-body.card-body-cascade {
    z-index: 1;
    margin-right: 4%;
    margin-left: 4%;
    background: #fff;
    border-radius: 0 0 0.25rem 0.25rem;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }

  .articles-list .card:first-child {
    display: none;
  }
</style>

<div class="container">
  <div class="row">
    <div class="col-md-8 my-5 my-md-0">
      <div class="card">
        <h5 class="text-center p-3 my-0">{category}</h5>
      </div>
      <div class="card left-section">
        <div class="card-content p-4">
          <div class="card card-cascade wider reverse border-0">
            <div class="view view-cascade overlay">
              <img
                class="card-img-top"
                src={articles[0].image.url}
                alt="Educatie fete" />
            </div>
            <div class="card-body card-body-cascade text-center p-2">
              <h4 class="font-weight-bold article-title">
                <a rel="prefetch" href={`articole/${slug}/${articles[0].slug}`}>
                  {articles[0].title}
                </a>
              </h4>
              <p class="article-text text-justify">
                {@html articles[0].excerpt}
              </p>
            </div>
            <div class="card-content">
              <div class="articles-list mt-5">
                {#each articles as article}
                  <div class="card my-3">
                    <div class="row">
                      <div class="col-lg-5 col-md-12 mb-lg-0 mb-4">
                        <div class="mb-lg-0">
                          <img
                            class="img-fluid"
                            src={article.image.url}
                            alt="Sample image" />
                        </div>
                      </div>
                      <div class="col-lg-7 col-md-6 mb-md-0 px-4 py-3">
                        <h5 class="font-weight-bold article-title">
                          <a
                            rel="prefetch"
                            href="articole/{slug}/{article.slug}">
                            {article.title}
                          </a>
                        </h5>
                        <p class="article-text text-justify">
                          {@html article.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                {/each}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <ArticlesSidebar />
    </div>
  </div>
</div>
