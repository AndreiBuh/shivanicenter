<script>
  import BlogItem from "../../Blog/BlogItem.svelte";
  import Heading from "../../UI/Heading.svelte";
  import LoadingSpinner from "../../UI/LoadingSpinner.svelte";
  import { onMount } from "svelte";

  const apiUrl = process.env.SAPPER_APP_API_URL;
  let blogs = [];
  let isLoading = true;

  onMount(async () => {
    const res = await fetch(`${apiUrl}/blogs?_limit=2`);
    const json = await res.json();
    blogs = json;
    isLoading = false;
  });
</script>

<style>

</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

<div class="container my-5">
  <Heading title="Blog" />
  {#if isLoading}
    <div class="loading">
      <LoadingSpinner />
    </div>
  {:else}
    <div class="row">
      {#each blogs as blog}
        <div class="col-md-6">
          <BlogItem {blog} />
        </div>
      {/each}
    </div>
  {/if}
</div>
