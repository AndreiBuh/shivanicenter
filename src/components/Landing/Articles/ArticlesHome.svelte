<script>
  import { onMount } from "svelte";
  import { Tabs, Tab, TabList, TabPanel } from "svelte-tabs";
  import ArticleHomeItem from "./ArticleHomeItem.svelte";
  import Pagination from "../../Global/Pagination.svelte";
  import Heading from "../../UI/Heading.svelte";

  //fetch articles
  const apiUrl = process.env.SAPPER_APP_API_URL;
  let articles = [];
  onMount(async () => {
    const res = await fetch(`${apiUrl}/articles`);
    const json = await res.json();
    articles = json;
  });

  let categories = [];
  onMount(async () => {
    const res = await fetch(`${apiUrl}/categories`);
    const json = await res.json();
    categories = json;
  });
</script>

<style>
  main {
    padding: 30px;
    border-radius: 10px;
    margin: 30px auto;
  }

  :global(.svelte-tabs li) {
    font-size: 16px;
    color: #000 !important;
    margin: 0 5px;
    font-family: "Oswald" !important;
    outline: none !important;
  }

  :global(.svelte-tabs ul) {
    border: none !important;
  }

  :global(.svelte-tabs__tab-list) {
    text-align: center !important;
  }

  :global(.svelte-tabs li.svelte-tabs__selected) {
    font-weight: 700;
    border-bottom: 2px solid #000;
  }
</style>

<main class="container">
  <Heading title="Articole" />
  <Tabs>
    <TabList>
      {#each categories as category}
        <Tab>{category.title.toUpperCase()}</Tab>
      {/each}
    </TabList>
    {#each categories as category}
      <TabPanel>
        <div class="row mt-5">
          {#each articles as article, index (article.id)}
            {#if category.title === article.category.title}
              <div class="col-md-4">
                <ArticleHomeItem {article} />
              </div>
            {/if}
          {/each}
        </div>
      </TabPanel>
    {/each}

  </Tabs>
  <Pagination />
</main>
