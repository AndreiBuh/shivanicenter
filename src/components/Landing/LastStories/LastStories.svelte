<script>
  import { onMount } from "svelte";
  import Story from "./Story.svelte";
  import Heading from "../../UI/Heading.svelte";
  import LoadingSpinner from "../../UI/LoadingSpinner.svelte";
  import Lazy from "svelte-lazy";

  const apiUrl = process.env.SAPPER_APP_API_URL;
  let articles = [];
  let isLoading = true;

  onMount(async () => {
    const res = await fetch(`${apiUrl}/articles?_limit=3&featured=true`);
    const json = await res.json();
    articles = json;
    isLoading = false;
  });
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

<div class="container">
  <Heading title="Ultimele postari" />
  {#if isLoading}
    <div class="loading">
      <LoadingSpinner />
    </div>
  {:else}
    <div class="card-columns">
      {#each articles as article (article.id)}
        <Lazy offset={150}>
          <Story {...article} />
        </Lazy>
      {/each}
    </div>
  {/if}
</div>
