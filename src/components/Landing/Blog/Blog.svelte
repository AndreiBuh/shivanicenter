<script context="module">
  const apiUrl = process.env.SAPPER_APP_API_URL;

  export function preload({ params, query }) {
    return this.fetch(`${apiUrl}/blogs?_limit=2`)
      .then(res => res.json())
      .then(blogs => {
        return { blogs };
      });
  }
</script>

<script>
  import BlogItem from "../../Blog/BlogItem.svelte";
  import Heading from "../../UI/Heading.svelte";
  import LoadingSpinner from "../../UI/LoadingSpinner.svelte";

  export let blogs;
  let isLoading = true;

  onMount(() => (isLoading = false));
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
