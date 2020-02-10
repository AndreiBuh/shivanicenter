<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`articole/meditatie-yoga.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import ArticlesSidebar from "../../../components/Articles/ArticlesSidebar.svelte";

  let categories = [
    "Familie",
    "Relatie de cuplu",
    "Sanatate",
    "Meditatie/Yoga",
    "Dezvoltare personala",
    "Sexualitate",
    "Stiinta"
  ];

  export let posts;
</script>

<style>
  a {
    text-decoration: none;
    color: #222736;
  }
  h5 {
    font-family: "Oswald";
  }
  .article-title,
  .article-text {
    font-family: "Josefin Sans";
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
  .card.card-cascade .view.view-cascade {
    border-radius: 0.25rem;
    -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
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

  .category-title {
    margin-bottom: 10px;
    color: #222736;
    text-transform: uppercase;
    font-family: "Oswald", sans-serif;
    letter-spacing: 0;
    font-size: 14px;
  }

  ul {
    list-style: none;
  }

  ul li.category-item {
    font-family: "Oswald", sans-serif;
    border-top: 1px solid #e8e8e8;
    padding: 12px 0;
    text-align: left;
    position: relative;
    line-height: 22px;
    font-size: 14px;
  }

  ul li.category-item a {
    color: #8c8c8c;
    text-decoration: none !important;
  }

  ul li.category-item a:hover {
    color: #dfa974;
  }
</style>

<div class="container">
  <div class="row">
    <div class="col-md-8 my-5 my-md-0">
      <div class="card">
        <h5 class="text-center p-3 my-0">Meditatie/Yoga</h5>
      </div>
      <div class="card left-section">
        <div class="card-content p-4">
          <div class="card card-cascade wider reverse border-0">
            <div class="view view-cascade overlay">
              <img
                class="card-img-top"
                src="meditatie1.png"
                alt="Franghie atasament" />
            </div>
            <div class="card-body card-body-cascade text-center p-4">
              <h4 class="font-weight-bold article-title">
                <a>Mediteaza zilnic</a>
              </h4>
              <p class="article-text">
                Atașamentul reprezintă o legătură emoțională puternică, bazată
                pe instinct. Ea apare încă din copilărie, între bebeluș și
                persoana cea mai apropiată acestuia.
              </p>
            </div>
            <div class="card-content">
              <div class="articles-list mt-5">
                {#each posts as post}
                  <div class="card my-3">
                    <div class="row">
                      <div class="col-lg-5 col-md-12 mb-lg-0 mb-4">
                        <div
                          class="view overlay rounded z-depth-1 mb-lg-0 mb-4">
                          <img
                            class="img-fluid"
                            src="https://mdbootstrap.com/img/Photos/Others/images/52.jpg"
                            alt="Sample image" />
                        </div>
                      </div>
                      <div class="col-lg-7 col-md-6 mb-md-0 mb-4 mt-xl-4 px-5">
                        <h5 class="font-weight-bold article-title">
                          <a
                            rel="prefetch"
                            href="articole/dezvoltare-personala/{post.slug}">
                            {post.title}
                          </a>
                        </h5>
                        <p class="article-text">
                          Option as can distributors. And to suppliers, given a
                          copy the horrible arrange yes, we had hundreds leave
                          was more.
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
