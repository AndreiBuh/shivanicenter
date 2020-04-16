<script>
  import { onMount } from "svelte";
  import { Tabs, Tab, TabList, TabPanel } from "svelte-tabs";
  import Lazy from "svelte-lazy";
  import Heading from "../../UI/Heading.svelte";
  import Story from "../LastStories/Story.svelte";
  import LoadingSpinner from "../../UI/LoadingSpinner.svelte";

  import { categories } from "../../../helpers/constants.js";

  //fetch articles
  let isLoading = true;

  onMount(async () => {
    isLoading = false;
  });

  export let articles;
</script>

<style>
  main {
    padding: 20px;
    border-radius: 10px;
    margin: 20px auto;
  }

  :global(.svelte-tabs li) {
    font-size: 18px;
    color: var(--main-bg-color) !important;
    margin: 0 5px;
    font-family: var(--font-main) !important;
    outline: none !important;
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
    .container {
      margin-top: 0 !important;
    }
  }
</style>

<Lazy offset={300}>
  <main class="container">
    <Heading title="Articole" />
    {#if isLoading}
      <div class="loading">
        <LoadingSpinner />
      </div>
    {:else}
      <Tabs>
        <TabList>
          {#each categories as category (category.id)}
            <Tab>{category.title.toUpperCase()}</Tab>
          {/each}
        </TabList>
        {#each categories as category}
          <TabPanel>
            <div class="card-columns">
              {#each articles as article (article.id)}
                {#if category.title === article.category.title}
                  <Story {...article} />
                {/if}
              {/each}
            </div>
          </TabPanel>
        {/each}
      </Tabs>
    {/if}
  </main>
</Lazy>
