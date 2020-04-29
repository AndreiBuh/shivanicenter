<script context="module">
  const apiUrl = process.env.SAPPER_APP_API_URL;

  export async function preload({ params, query }) {
    return this.fetch(`${apiUrl}/blogs?slug=${params.slug}`)
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
  const {
    id,
    image,
    title,
    content,
    published,
    author,
    excerpt,
    slug
  } = blog[0];
</script>

<style>
  .card {
    background-color: #222736;
    border-radius: 10px;
    box-shadow: -0.5rem 0 0.5rem #222736;
    transition: 0.4s ease-out;
  }

  :global(.iframe) {
    height: 450px;
    width: 95%;
  }

  /* social share */
  ul {
    display: flex;
    justify-content: center;
    height: 50px;
  }
  ul li {
    list-style: none;
  }
  ul li a {
    display: block;
    width: 50px;
    height: 50px;
    line-height: 50px;
    color: #fff;
    margin: 0 2px;
    border-radius: 30%;
    font-size: 18px;
    transition: 1s;
  }
  ul li:nth-child(1) a {
    background: #3b5999;
  }
  ul li:nth-child(2) a {
    background: #0077b5;
  }
  ul li:nth-child(3) a {
    background: #25d366;
  }
  ul li:nth-child(4) a {
    background: #25d366;
  }

  ul li a:hover {
    transform: translateY(-5px);
    transition: 0.4s ease-out;
  }

  /* Social share inside end */

  @media screen and (max-width: 768px) {
    .container {
      margin-top: 90px;
    }

    .whatsapp-desktop {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    .whatsapp-mobile {
      display: none;
    }
  }
</style>

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
    <div class="article-share mt-3 text-center">
      <ul>
        <li>
          <div
            class="fb-share-button"
            data-href="https://www.shivanicenter.ro/blog/{slug}"
            data-layout="button_count"
            data-size="small">
            <a
              target="_blank"
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.shivanicenter.ro%2Fblog%2F{slug}&amp;src=sdkpreparse"
              class="fb-xfbml-parse-ignore">
              <i class="fa fa-facebook" aria-hidden="true" />
            </a>
          </div>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.shivanicenter.ro/blog/{slug}&title=Create
            LinkedIn Share button on Website
            Webpages&summary=chillyfacts.com&source=Chillyfacts"
            onclick="window.open(this.href, 'mywin',
            'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return
            false;">
            <i class="fa fa-linkedin" aria-hidden="true" />
          </a>
        </li>
        <li class="whatsapp-desktop">
          <a
            target="_blank"
            href="https://web.whatsapp.com/send?text=https://www.shivanicenter.ro/blog/{slug}"
            data-action="share/whatsapp/share">
            <i class="fa fa-whatsapp" aria-hidden="true" />
          </a>
        </li>
        <li class="whatsapp-mobile">
          <a
            target="_blank"
            href="whatsapp://send?text=https://www.shivanicenter.ro/blog/{slug}"
            data-action="share/whatsapp/share">
            <i class="fa fa-whatsapp" aria-hidden="true" />
          </a>
        </li>
      </ul>
    </div>
    <div class="p-2 text-white">
      <p class="paragraph-text">
        {@html content}
      </p>
    </div>
  </div>
</div>

<svelte:head>
  <title>{title}</title>
  <meta property="og:title" content={title} />
  <meta property="og:url" content="https://www.shivanicenter.ro/blog/{slug}" />
  <meta property="og:description" content={excerpt} />
  <meta property="og:image" content={image.url} />
</svelte:head>
