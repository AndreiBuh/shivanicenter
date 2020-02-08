<script>
  import { fade, fly } from "svelte/transition";
  import SearchBar from "./SearchBar.svelte";
  import ArticlesTop from "./ArticlesTop.svelte";

  let categories = [
    {
      name: "Familie",
      slug: "familie"
    },
    {
      name: "Relatie de cuplu",
      slug: "relatie-de-cuplu"
    },
    {
      name: "Sanatate",
      slug: "sanatate"
    },
    {
      name: "Meditatie/Yoga",
      slug: "meditatie-yoga"
    },
    {
      name: "Dezvoltare personala",
      slug: "dezvoltare-personala"
    },
    {
      name: "Sexualitate",
      slug: "sexualitate"
    },
    {
      name: "Stiinta",
      slug: "stiinta"
    }
  ];
</script>

<style>
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

  .category-title {
    margin-bottom: 10px;
    color: #222736;
    text-transform: uppercase;
    font-family: "Oswald", sans-serif;
    letter-spacing: 0;
    font-size: 14px;
  }

  ul li.category-item a {
    color: #8c8c8c;
    text-decoration: none;
  }

  ul li.category-item a:hover {
    color: #dfa974;
  }
</style>

<div class="card" in:fly={{ x: 200, duration: 2000 }}>
  <h5 class="text-center p-3 mb-0">Cele mai citite articole</h5>
</div>
<div class="card" in:fly={{ x: 200, duration: 2000 }}>
  <div class="card-content text-center p-4">
    <ArticlesTop />
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
      {#each categories as { name, slug }, i}
        <li class="category-item">
          <a href="articole/{slug}" rel="prefetch">{name}</a>
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
    <h1>asdas</h1>
  </div>
</div>
