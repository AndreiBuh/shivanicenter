<script>
  import Icon from "fa-svelte";
  import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
  export let title;
</script>

<style>
  @font-face {
    font-family: "Flaticon";
    src: url("./Flaticon.eot");
    src: url("./Flaticon.eot?#iefix") format("embedded-opentype"),
      url("./Flaticon.woff2") format("woff2"),
      url("./Flaticon.woff") format("woff"),
      url("./Flaticon.ttf") format("truetype"),
      url("./Flaticon.svg#Flaticon") format("svg");
    font-weight: normal;
    font-style: normal;
  }

  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    @font-face {
      font-family: "Flaticon";
      src: url("./Flaticon.svg#Flaticon") format("svg");
    }
  }

  [class^="flaticon-"]:before,
  [class*=" flaticon-"]:before,
  [class^="flaticon-"]:after,
  [class*=" flaticon-"]:after {
    font-family: Flaticon;
    font-size: 30px;
    font-style: normal;
    margin-left: 20px;
  }

  .flaticon-mission:before {
    content: "\f100";
  }
  .flaticon-eye:before {
    content: "\f101";
  }
  .flaticon-goal:before {
    content: "\f102";
  }

  .flaticon-buddhism:before {
    content: "\f10d";
  }
  .banner {
    display: flex;
    align-items: center;
    height: auto;
    text-align: center;
    box-shadow: 2px 2px 4px #666;
    margin-bottom: 30px;
    background: #222736;
    bottom: 0;
    width: 100%;
  }
  .banner-content {
    width: 70%;
    margin: 0 auto;
  }

  .banner-text {
    font-size: 18px;
    color: #aaaab3;
  }

  .banner-title {
    font-family: "Montserrat", sans-serif;
  }

  .text-elegant {
    color: #dfa974;
  }

  .fn-form {
    position: relative;
    width: 40%;
  }
  .fn-form input {
    width: 100%;
    height: 50px;
    border-radius: 2px;
    background: #393d4a;
    border: none;
    padding-left: 20px;
    font-size: 16px;
    color: white;
  }
  .fn-form button {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 16px;
    background: #dfa974;
    color: #ffffff;
    padding: 0 16px;
    height: 50px;
    border: none;
    border-radius: 0 2px 2px 0;
  }
  p {
    color: #aaaab3;
    font-family: "Montserrat";
    font-size: 14px;
  }
  .banner-item {
    border-radius: 6px;
  }

  .centered {
    display: flex;
    justify-content: center;
  }
</style>

{#if title == 'Cine suntem?'}
  <div class="banner mt-3 pt-4 pb-0">
    <div class="banner-content container">
      <h2 class="banner-title text-elegant mb-3">{title}</h2>
      <div class="row centered">
        <div class="col-md-3 px-3 pt-3 banner-item">
          <h5 class="p-2 text-elegant">Misiunea noastra</h5>
          <i class="flaticon-mission text-elegant" />
          <p class="p-2">
            Shivani Center ofera o paleta larga de servicii psihologice de
            calitate, intr-un cadru securizant si confidential.
          </p>
        </div>
        <div class="col-md-3 px-3 p-3 banner-item">
          <h5 class="p-2 text-elegant">Viziunea noastra</h5>
          <i class="flaticon-eye text-elegant" />
          <p class="p-2">
            Viziunea noastra holistica imbina in mod organic metodele de
            vindecare orientale cu psihoterapiile suportive occidentale.
          </p>
        </div>
        <div class="col-md-3 px-3 p-3 banner-item">
          <h5 class="p-2 text-elegant">Scopul nostru</h5>
          <i class="flaticon-goal text-elegant" />
          <p class="p-2">
            Va invitam sa exploram impreuna conexiunea dintre minte, corp si
            spirit, astfel incat sa gasiti solutiile potrivite pentru o viata
            echilibrata.
          </p>
        </div>
        <div class="col-md-3 px-3 p-3 banner-item">
          <h5 class="p-2 text-elegant">Abordarea noastra</h5>
          <i class="flaticon-buddhism text-elegant" />
          <p class="p-2">
            Va invitam sa exploram impreuna conexiunea dintre minte, corp si
            spirit, astfel incat sa gasiti solutiile potrivite pentru o viata
            echilibrata.
          </p>
        </div>
      </div>
    </div>
  </div>
{:else}
  <div class="banner mb-5 py-5">
    <div class="banner-content text-center">
      <h3 class="banner-title text-elegant title mb-4">{title}</h3>
      <div class="d-flex justify-content-center">
        <form class="fn-form">
          <input type="text" placeholder="Email" />
          <button type="submit">
            <Icon icon={faEnvelope} />
          </button>
        </form>
      </div>
    </div>
  </div>
{/if}
