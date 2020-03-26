<script>
  export let article;
  const { title, image, user, slug, category_slug } = article;
</script>

<style>
  .card-cascade.narrower .view.view-cascade {
    margin-top: -1.25rem;
    margin-right: 4%;
    margin-left: 4%;
  }
  .card-cascade .view.view-cascade {
    border-radius: 0.25rem;
    -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
  }
  .view {
    position: relative;
    overflow: hidden;
    height: 200px;
  }

  .view img {
    position: relative;
    display: block;
    object-fit: cover;
    object-position: 50% 50%;
  }
  .card-img-top {
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
  }
  .card-img-top {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
  }
  .card-body {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-radius: 0 !important;
  }

  h6 {
    font-family: "Josefin Sans", sans-serif;
    letter-spacing: 2px;
  }

  .author {
    display: block;
    font-size: 15px;
    line-height: 25px;
    font-style: italic;
    margin: 0 0 10px;
    font-family: "Josefin Sans";
  }

  a {
    color: #000;
    font-weight: 700;
    text-decoration: none;
  }

  img:hover {
    transform: scale(1.1);
    transition: 0.5s;
  }

  a:hover,
  h6:hover {
    color: #444;
  }
</style>

<div class="card-cascade narrower mb-5">
  <div class="view view-cascade overlay">
    <a rel="prefetch" href="articole/{category_slug}/{slug}">
      <img class="card-img-top" src={image.name} alt="Card image cap" />
    </a>
  </div>
  <div class="card-body text-center">
    <a rel="prefetch" href="articole/{category_slug}/{slug}">
      <h6 class="font-weight-bold card-title">{title}</h6>
    </a>
    <span class="author">
      de
      <a href=".">{user.username}</a>
    </span>
  </div>
</div>
