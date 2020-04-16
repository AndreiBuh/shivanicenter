<script>
  import { onMount } from "svelte";
  import Story from "./Story.svelte";
  import Heading from "../../UI/Heading.svelte";
  import LoadingSpinner from "../../UI/LoadingSpinner.svelte";
  import Lazy from "svelte-lazy";

  let isLoading = true;

  onMount(async () => {
    isLoading = false;
  });

  export let filteredArticles;
</script>

<style>
  @media (max-width: 992px) {
    .card-columns {
      column-count: 2;
    }
  }

  @media (max-width: 768px) {
    .card-columns {
      column-count: 1;
    }
  }
</style>

<Lazy offset="50">
  <div class="container">
    <Heading title="Ultimele postari" />
    {#if isLoading}
      <div class="loading">
        <LoadingSpinner />
      </div>
    {:else}
      <div class="card-columns">
        {#each filteredArticles as article (article.id)}
          <Story {...article} />
        {/each}
      </div>
    {/if}
  </div>
</Lazy>
