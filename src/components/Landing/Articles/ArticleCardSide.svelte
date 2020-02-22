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
    cursor: default;
  }

  .view img {
    position: relative;
    display: block;
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

  .author a {
    color: #000;
    font-weight: 700;
    font-style: normal;
  }

  p {
    font-family: "Josefin Sans";
  }
</style>

<div class="card-cascade narrower mb-5">
  <div class="view view-cascade overlay">
    <img class="card-img-top" src="ceai1.jpg" alt="Card image cap" />
  </div>
  <div class="card-body text-center">
    <h6 class="font-weight-bold card-title">CANA MEA DE CEAI</h6>
    <span class="author">
      de
      <a href=".">Roxana Alecu</a>
    </span>
  </div>
</div>
