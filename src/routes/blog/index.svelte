<script>
  import SearchBar from "../../components/SearchBar.svelte";
  import ArticlesRead from "../../components/ArticlesRead.svelte";

  let categories = [
    "Familie",
    "Relatie de cuplu",
    "Sanatate",
    "Meditatie/Yoga",
    "Dezvoltare personala",
    "Sexualitate",
    "Stiinta"
  ];
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

  a.category-link {
    text-decoration: none;
    font-size: 9px;
    font-family: "Noto Sans", sans-serif;
    letter-spacing: 1px;
    font-weight: 700;
    text-transform: uppercase;
    color: #d79c74;
  }

  .content-title {
    color: #000;
    text-transform: uppercase;
    font-family: Oswald, sans-serif;
    letter-spacing: 0;
    font-size: 18px;
  }
</style>

<div class="container">
  <div class="row">
    <div class="col-md-8 px-0">
      <div class="card">
        <h3 class="text-center p-3 mb-0">
          10 greseli in educatia unei fete care ii pot strica viitorul
        </h3>
        <div class="card-content">
          <div class="view view-cascade overlay">
            <img
              class="card-img-top"
              src="educatie-fete.png"
              alt="Franghie atasament" />
            <a href="#!">
              <div class="mask rgba-white-slight" />
            </a>
          </div>
          <div class="avatar mx-auto white">
            <img
              src="shivani3.png"
              class="rounded-circle img-fluid"
              alt="First sample avatar image" />
          </div>

        </div>
        <div class="card-body">
          <div class="category">
            <a href="" class="category-link">Psihoterapie</a>
          </div>
          <h2 class="content-title mt-2">
            10 greseli in educatia unei fete care ii pot strica viitorul
          </h2>

        </div>
      </div>
    </div>

    <div class="col-md-4">

      <div class="card">
        <h5 class="text-center p-3 mb-0">Cele mai citite articole</h5>
      </div>
      <div class="card">
        <div class="card-content text-center p-4">
          <ArticlesRead />
        </div>
      </div>

      <div class="card mt-5">
        <div class="card-content text-center p-4">
          <SearchBar />
        </div>
      </div>

      <div class="card mt-5">
        <div class="card-content p-4">
          <h6 class="category-title">Categorii</h6>
          <ul>
            {#each categories as category, i}
              <li class="category-item">
                <a href=".">{category}</a>
              </li>
            {/each}
          </ul>
        </div>
      </div>

      <div class="card mt-5">
        <h5 class="text-center p-3 mb-0">Newsletter</h5>
      </div>
      <div class="card">
        <div class="card-content text-center p-4">
          <h1>asfas</h1>
        </div>
      </div>

      <div class="card mt-5">
        <h5 class="text-center p-3 mb-0">Instagram</h5>
      </div>
      <div class="card">
        <div class="card-content text-center p-4">
          <h1>asfas</h1>
        </div>
      </div>

    </div>

  </div>
</div>
