<script>
  export let title;
  export let content;
</script>

<style>
  .card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border-radius: 0.25rem;
    border: none;
  }

  .card.card-cascade.wider .view.view-cascade {
    z-index: 2;
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
    border-radius: 6px;
  }
  .card-img,
  .card-img-top,
  .card-img-bottom {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    width: 100%;
  }
  .overlay .mask {
    opacity: 0;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }

  .view .mask {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-attachment: fixed;
  }
  .waves-effect {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
  }

  #cascading-cards .card.card-cascade.wider .card-body.card-body-cascade {
    border-bottom-right-radius: 0.25rem !important;
    border-bottom-left-radius: 0.25rem !important;
  }

  .card.card-cascade.wider .card-body.card-body-cascade {
    z-index: 1;
    margin-right: 4%;
    margin-left: 4%;
    background: #fff;
    border-radius: 0 0 0.25rem 0.25rem;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    border: none;
  }

  .elegant-text {
    color: #dfa974;
  }

  .card-title,
  .card-text {
    font-family: "Josefin Sans";
  }

  .card-text {
    font-size: 14px;
  }

  .hoverable:hover {
    -webkit-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-transition: all 0.55s ease-in-out;
    transition: all 0.55s ease-in-out;
  }
</style>

<div class="card card-cascade wider">
  <div class="view view-cascade overlay hoverable">
    <img class="card-img-top" src="rope.jpg" alt="Card image cap" />
    <a href="#!">
      <div class="mask rgba-white-slight" />
    </a>
  </div>
  <div class="card-body card-body-cascade hoverable">
    <div class="mb-3 elegant-text category text-left">Dezvoltare personala</div>
    <h5 class="card-title">{title}</h5>
    <h7 class="elegant-text pb-2" />
    <p class="card-text">{content}</p>
  </div>
</div>
