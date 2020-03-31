<script>
  import { onMount } from "svelte";
  import { Tabs, Tab, TabList, TabPanel } from "svelte-tabs";
  import Pagination from "../../Global/Pagination.svelte";
  import Heading from "../../UI/Heading.svelte";
  import Story from "../LastStories/Story.svelte";

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
    padding: 20px;
    border-radius: 10px;
    margin: 20px auto;
  }

  :global(.svelte-tabs li) {
    font-size: 16px;
    color: var(--main-bg-color) !important;
    margin: 0 5px;
    font-family: var(--font-main) !important;
  }

  :global(.svelte-tabs__tab-list) {
    text-align: center !important;
    border: none !important;
    margin-bottom: 25px !important;
  }

  :global(.svelte-tabs li.svelte-tabs__selected) {
    font-weight: 700;
    border-bottom: 2px solid var(--main-bg-color);
  }

  .card {
    height: auto;
    border: none;
  }

  .card-columns .card {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .card-columns .card:hover {
    box-shadow: 0 0px 8px rgba(0, 0, 0, 0.25), 0 4px 6px rgba(0, 0, 0, 0.22);
  }

  @media (max-width: 992px) {
    .card-columns {
      column-count: 2;
    }
  }

  @media (max-width: 768px) {
    .card-columns {
      column-count: 1;
    }

    :global(.svelte-tabs li) {
      font-size: 14px;
    }
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
        <div class="card-columns">

          {#each articles as article, index (article.id)}
            {#if category.title === article.category.title}
              <div class="card p-3 m-2">
                <Story {...article} />
              </div>
            {/if}
          {/each}

        </div>

      </TabPanel>
    {/each}
  </Tabs>
  <Pagination />
</main>
