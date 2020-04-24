<script>
  export let facebook = "https://www.facebook.com/PsihologRoxanaAlecu/";
  export let instagram = "https://www.instagram.com/psiholog.roxana.alecu/";
  export let linkedin =
    "https://www.linkedin.com/in/florentina-roxana-alecu-78a220186/";
</script>

<style>
  .middle {
    width: 100%;
    text-align: center;
  }

  .btn-share {
    display: inline-block;
    width: 60px;
    height: 60px;
    background: #f1f1f1;
    margin: 10px;
    border-radius: 30%;
    box-shadow: 0 5px 15px -5px #00000070;
    color: var(--main-bg-color);
    overflow: hidden;
    position: relative;
  }

  .btn-share i {
    line-height: 60px;
    font-size: 20px;
    transition: 0.2s linear;
  }

  .btn-share:hover i {
    transform: scale(1.3);
    color: #f1f1f1;
  }

  .btn-share::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 120%;
    /* background: #3498db; */
    transform: rotate(45deg);
    left: -110%;
    top: 90%;
  }

  .btn-share:nth-child(1)::before {
    background: #3b5999;
  }
  .btn-share:nth-child(2)::before {
    background: #dd2a7b;
  }
  .btn-share:nth-child(3)::before {
    background: #0077b5;
  }

  .btn-share:hover::before {
    animation: aaa 0.7s 1;
    top: -10%;
    left: -10%;
  }

  @keyframes aaa {
    0% {
      left: -110%;
      top: 90%;
    }
    50% {
      left: 10%;
      top: -30%;
    }
    100% {
      top: -10%;
      left: -10%;
    }
  }
</style>

<div class="middle">
  <a target="_blank" href={facebook} class="btn-share" rel="noopener">
    <i class="fa fa-facebook" />
  </a>
  <a target="_blank" href={instagram} class="btn-share" rel="noopener">
    <i class="fa fa-instagram" />
  </a>
  <a target="blank" href={linkedin} class="btn-share" rel="noopener">
    <i class="fa fa-linkedin" />
  </a>
</div>
