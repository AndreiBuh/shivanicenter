<script>
  export let title;
  export let content;
  export let src;
  export let category;
  export let author;
  export let date;
  export let read;
</script>

<style>
  .card {
    border: none;
    border-bottom: 1px solid #f0f0f0;
  }
  .post-overlay {
    transition: 0.5s opacity ease-in-out;
    border-radius: 8px;
  }
  .post-categories a {
    text-decoration: none;
    font-size: 12px;
    color: #d79c6a;
    font-family: "Montserrat";
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  .post-title h2 {
    font-size: 22px;
    line-height: 110% !important;
    margin-bottom: 5px;
    margin-top: 5px;
    font-family: "Josefin Sans";
    color: #505050;
  }

  .post-content {
    font-size: 14px;
    font-family: "Josefin Sans";
    color: #616161;
  }

  .post-meta span {
    font-size: 11px;
    color: #8d8d8d;
    font-family: "Montserrat";
  }
</style>

<div class="card">
  <img {src} alt="" class="post-overlay" />
  <div class="post-categories mt-md-4 mt-0">
    <a rel="prefetch" href="articole/{category}" class="font-weight-bold">
      {category}
    </a>
  </div>
  <div class="post-title">
    <h2 class="font-weight-bold">{title}</h2>
  </div>
  <div class="post-content">{content}</div>
  <div class="post-meta">
    <span>{author}, {date},</span>
    <span>{read}</span>
  </div>
</div>
