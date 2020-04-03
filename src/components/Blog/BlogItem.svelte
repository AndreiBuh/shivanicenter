<script>
  import { fade, fly, scale } from "svelte/transition";
  import Lazy from "svelte-lazy";
  export let blog;
</script>

<style>
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .box {
    position: relative;
    background: rgba(34, 39, 54);
    margin: 15px;
    box-sizing: border-box;
    overflow: hidden;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
    height: 75%;
  }

  .box .imgBox {
    position: relative;
  }

  .box .imgBox img {
    width: 100%;
    height: 100%;
    transition: 0.5s;
    object-fit: cover;
    object-position: 50% 50%;
  }

  .box:hover .imgBox img {
    transform: scale(1.1);
  }

  .box .content {
    background: rgba(34, 39, 54, 0.9);
    position: absolute;
    width: 100%;
    bottom: 0;
    z-index: 2;
    box-sizing: border-box;
    text-align: center;
  }
  .box .content .post-details {
    color: #8d8d8d;
    font-size: 13px;
    font-family: var(--font-main), sans-serif;
    letter-spacing: 1px;
  }

  h5 {
    color: #fff;
  }

  .box .content p {
    color: #fff;
    transition: 0.5s;
    display: none;
    font-family: var(--font-text);
  }

  .box:hover p {
    display: block;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s;
  }

  @media screen and (max-width: 768px) {
    h5 {
      font-size: 16px;
      margin: 0;
    }
    .box .content .post-details {
      font-size: 11px;
    }

    .box .content p {
      font-size: 14px;
    }

    .box {
      height: 80%;
    }
  }
</style>

<Lazy offset={150}>
  <div class="box" in:scale>
    <a rel="prefetch" href={`blog/${blog.slug}`}>
      <div class="imgBox">
        <img src={blog.image.url} alt="" />
      </div>
      <div class="content p-2 p-md-3">
        <h5>{blog.title}</h5>
        <span class="post-details">{blog.published} | {blog.author}</span>
        <p class="mt-2 text-truncate">
          {@html blog.excerpt}
        </p>
      </div>
    </a>
  </div>
</Lazy>
