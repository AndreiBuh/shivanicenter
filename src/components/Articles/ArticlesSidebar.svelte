<script>
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import ArticlesTop from "./ArticlesTop.svelte";
  import Social from "../Global/Social.svelte";
  import InstagramSidebar from "./InstagramSidebar.svelte";
  import FacebookSidebar from "./FacebookSidebar.svelte";
  import { categories } from "../../helpers/constants.js";

  const apiUrl = process.env.SAPPER_APP_API_URL;
</script>

<style>
  ul {
    list-style: none;
  }

  ul li.category-item {
    font-family: var(--font-main), sans-serif;
    border-top: 1px solid #e8e8e8;
    padding: 12px 0;
    text-align: left;
    position: relative;
    line-height: 18px;
    font-size: 14px;
  }

  .category-title {
    margin-bottom: 10px;
    color: #222736;
    text-transform: uppercase;
    font-family: var(--font-main), sans-serif;
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

<div style="position: sticky; top: 0;">
  <div class="card" in:fly={{ x: 200, duration: 2000 }}>
    <h5 class="text-center p-3 my-0">Cele mai citite articole</h5>
  </div>
  <div class="card" in:fly={{ x: 200, duration: 2000 }}>
    <div class="card-content text-center p-4">
      <ArticlesTop />
    </div>
  </div>

  <div class="card mt-5">
    <h5 class="text-center p-3 my-0">Social media</h5>
  </div>
  <div class="card">
    <div class="card-content text-center p-4">
      <Social />
    </div>
  </div>
  <div class="card mt-5">
    <div class="card-content p-4">
      <h6 class="category-title">Categorii</h6>
      <ul>
        {#each categories as { title, slug }, i}
          <li class="category-item">
            <a href="articole/{slug}" rel="prefetch">{title}</a>
          </li>
        {/each}
      </ul>
    </div>
  </div>

  <InstagramSidebar />
  <FacebookSidebar />
</div>
