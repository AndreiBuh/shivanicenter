<script context="module">
  const apiUrl = process.env.SAPPER_APP_API_URL;

  export function preload({ params, query }) {
    return this.fetch(`${apiUrl}/blogs`)
      .then(res => res.json())
      .then(blogs => {
        return { blogs };
      });
  }
</script>

<script>
  import BlogItem from "../../components/Blog/BlogItem.svelte";
  import Heading from "../../components/UI/Heading.svelte";
  export let blogs;
</script>

<style>

</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>
<div class="container">
  <Heading title="Blog" />
  <div class="row">
    {#each blogs as blog}
      <div class="col-md-6">
        <BlogItem {blog} />
      </div>
    {/each}
  </div>
</div>
