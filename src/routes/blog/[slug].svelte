<script context="module">
  const apiUrl = process.env.SAPPER_APP_API_URL;

  export async function preload({ params, query }) {
    return this.fetch(`${apiUrl}/blogs?slug=${params.slug}`, null)
      .then(res => res.json())
      .then(blog => {
        return { blog };
      });
  }
</script>

<script>
  import { fade, fly } from "svelte/transition";
  import BlogItem from "../../components/Blog/BlogItem.svelte";
  export let blog;
  const { id, image, title, content, published, author } = blog[0];
</script>

<style>
  .card {
    background-color: #222736;
    border-radius: 10px;
    box-shadow: -0.5rem 0 0.5rem #222736;
    transition: 0.4s ease-out;
  }

  @media screen and (max-width: 768px) {
    .container {
      margin-top: 90px;
    }
  }
</style>

<svelte:head>
  <title>{title}</title>
</svelte:head>

<div class="container">
  <div class="card p-2 p-md-5">
    <h1
      class="service-title my-4 pt-md-0 text-center"
      in:fly={{ x: -200, duration: 2000 }}>
      {title}
      <span class="text-elegant font-weight-bold">.</span>
    </h1>
    <div class="text-center" in:fade={{ duration: 2000 }}>
      <img
        src={image.url}
        alt="imagine psiholog alexandra tatu"
        class="img-top img-fluid" />
    </div>
    <div class="p-2 text-white">
      <p class="paragraph-text">
        {@html content}
      </p>
    </div>
  </div>
</div>
