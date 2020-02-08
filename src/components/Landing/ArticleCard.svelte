<script>
  export let category;
</script>

<style>
  .card {
    border: 0;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
  .card.card-cascade.narrower .view.view-cascade {
    margin-top: -1.25rem;
    margin-right: 4%;
    margin-left: 4%;
  }
  .card.card-cascade .view.view-cascade {
    border-radius: 0.25rem;
    -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
  }
  .view {
    position: relative;
    overflow: hidden;
    cursor: default;
  }

  .view img,
  .view video {
    position: relative;
    display: block;
  }
  .card-img,
  .card-img-top {
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
  }
  .card-img,
  .card-img-top,
  .card-img-bottom {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
  }
  .card-body {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border-radius: 0 !important;
  }
</style>

<div class="card card-cascade narrower">
  <div class="view view-cascade overlay">
    <img
      class="card-img-top"
      src="https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).jpg"
      alt="Card image cap" />
    <a>
      <div class="mask rgba-white-slight" />
    </a>
  </div>
  <div class="card-body card-body-cascade">
    <h5 class="pink-text pb-2 pt-1">
      <i class="fas fa-utensils" />
      {category}
    </h5>
    <h4 class="font-weight-bold card-title">Cheat day inspirations</h4>
    <p class="card-text">
      Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
      suscipit laboriosam, nisi ut aliquid.
    </p>
  </div>
  <div class="card-footer text-muted text-center">2 days ago</div>

</div>
