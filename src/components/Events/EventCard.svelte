<script>
  import {
    faChevronRight,
    faComments,
    faClock
  } from "@fortawesome/free-solid-svg-icons";
  import {
    faFacebook,
    faInstagram,
    faTwitter
  } from "@fortawesome/free-brands-svg-icons";
  import Icon from "fa-svelte";

  export let title;
  export let text;
  export let date;
</script>

<style>
  .card {
    border-radius: 10px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    border: 0;
  }

  .card-title,
  .card-text {
    font-family: "Josefin Sans";
  }

  .btn-floating {
    position: relative;
    z-index: 1;
    display: inline-block;
    padding: 0;
    overflow: hidden;
    vertical-align: middle;
    cursor: pointer;
    border-radius: 50%;
    -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    width: 47px;
    height: 47px;
    margin-top: -20px;
  }

  .card-img-top {
    border-radius: 10px 10px 0 0;
  }
  .card-color {
    background-color: #212529;
  }

  .btn-floating:hover {
    -webkit-box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
    box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  .icon-card {
    display: inline-block;
    color: #fff;
    text-align: center;
    font-size: 1.25rem;
    line-height: 40px;
  }

  .white-text {
    color: white;
  }
</style>

<div class="container">
  <div class="card">
    <div class="view overlay">
      <img class="card-img-top" src="meditatie1.png" alt="Card image cap" />
      <a>
        <div class="mask rgba-white-slight" />
      </a>
    </div>

    <a class="btn-floating btn-action ml-auto mr-4 card-color">
      <span class="icon-card pl-3">
        <Icon icon={faChevronRight} />
      </span>
    </a>
    <div class="card-body">
      <h4 class="card-title">{title}</h4>
      <hr />
      <p class="card-text">{text}</p>
    </div>
    <div class="rounded-bottom card-color text-center pt-3">
      <ul class="list-unstyled list-inline font-small">
        <li class="list-inline-item pr-2 white-text">
          <Icon icon={faClock} />
          {date}
        </li>
        <li class="list-inline-item pr-2">
          <a href="#" class="white-text">
            <Icon icon={faComments} />
            12
          </a>
        </li>
        <li class="list-inline-item pr-2">
          <a href="#" class="white-text">
            <Icon icon={faFacebook} />
            21
          </a>
        </li>
        <li class="list-inline-item">
          <a href="#" class="white-text">
            <Icon icon={faTwitter} />
            5
          </a>
        </li>
      </ul>
    </div>

  </div>
</div>
