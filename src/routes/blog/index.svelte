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

  import Pagination from "../../components/Global/Pagination.svelte";
</script>

<style>
  .flex {
    display: flex;
    flex-wrap: wrap;
  }

  .flex-item:not(:first-child) {
    flex: 1;
  }

  .flex-item:nth-child(1) {
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    .flex {
      flex-direction: column;
    }
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>
<div class="container">
  <Heading title="Blog" />
  <div class="flex">
    {#each blogs as blog}
      <div class="flex-item">
        <BlogItem {blog} />
      </div>
    {/each}
  </div>
</div>

<Pagination />
