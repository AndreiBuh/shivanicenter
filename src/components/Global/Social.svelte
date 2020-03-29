<script>
  export let facebook = "https://www.facebook.com/PsihologRoxanaAlecu/";
  export let instagram = "https://www.instagram.com/psiholog.roxana.alecu/";
  export let linkedin = "https://www.instagram.com/psiholog.roxana.alecu/";
</script>

<style>
  a {
    text-decoration: none;
  }
  .post-readmore {
    white-space: nowrap;
    line-height: 1.7;
    color: #dfa974;
  }
  .jssocials-share {
    width: 45px;
    height: 45px;
    border: 1px solid #d7d6d6;
    display: inline-block;
    transition: 0.3s all ease-in-out;
    border-radius: 8px;
  }

  .jssocials-share-link {
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    color: #212529;
  }

  .jssocials-share-logo {
    font-size: 18px;
    width: 1em;
    vertical-align: middle;
  }
  .jssocials-share:hover {
    box-shadow: 0px 3px 6px 1px rgba(0, 0, 0, 0.07);
  }
</style>

<div class="post-readmore">
  <div class="jssocials-share jssocials-share-facebook mx-2">
    <a target="_blank" href={facebook} class="jssocials-share-link">
      <i class="fa fa-facebook jssocials-share-logo" />
    </a>
  </div>
  <div class="jssocials-share jssocials-share-pinterest mx-2">
    <a target="_blank" href={instagram} class="jssocials-share-link">
      <i class="fa fa-instagram jssocials-share-logo" />
    </a>
  </div>
  <div class="jssocials-share jssocials-share-whatsapp mx-2">
    <a target="blank" href={linkedin} class="jssocials-share-link">
      <i class="fa fa-linkedin jssocials-share-logo" />
    </a>
  </div>

</div>
