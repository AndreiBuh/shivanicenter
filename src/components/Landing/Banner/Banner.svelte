<script>
  import Icon from "fa-svelte";
  import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
  export let title;

  const apiUrl = process.env.SAPPER_APP_API_URL;
  let email = "";
  let placeholder = "";

  let isLoading = false;

  const addContactMessage = async () => {
    let newMessage = {
      email
    };
    isLoading = true;
    const response = await fetch(`${apiUrl}/subscribes`, {
      method: "POST",
      body: JSON.stringify(newMessage),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    isLoading = false;
    email = "";

    placeholder =
      "Te-ai abonat cu succes la newsletterul nostru. In fiecare saptamana vei primi informatii legate de noile articole.";

    if (!response.ok) throw Error(response.message);
    try {
      const data = await response.json();
      return data;
    } catch (err) {
      isLoading = false;
      throw err;
    }
  };
</script>

<style>
  #loading {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(204, 181, 181, 0.3);
    border-radius: 50%;
    border-top-color: #dfa974;
    animation: spin 3s ease-in-out infinite;
    -webkit-animation: spin 3s ease-in-out infinite;
  }

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
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
  [class^="flaticon-"]:after {
    font-family: Flaticon;
    font-size: 30px;
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

  .banner-title {
    font-family: "Playball", sans-serif;
  }

  .text-elegant {
    color: #dfa974;
  }

  i,
  h2 {
    color: #dfa974;
    font-family: "Playball", sans-serif;
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
    color: #b5b5bf;
    font-family: "Josefin Sans", sans-serif;
    font-size: 14px;
  }
  .banner-item {
    border-radius: 6px;
  }

  .centered {
    display: flex;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    .fn-form {
      width: 80%;
    }

    .banner-title {
      font-size: 2em;
    }
  }
</style>

{#if title == 'Cine suntem?'}
  <div class="banner mt-3 pt-4 pb-0">
    <div class="banner-content container">
      <h1 class="banner-title mb-3 text-elegant">{title}</h1>
      <div class="row centered">
        <div class="col-md-3 px-3 pt-3 banner-item">
          <h2 class="p-2">Misiune</h2>
          <i class="flaticon-mission" />
          <p class="p-2">
            Shivani Center ofera o paleta larga de servicii psihologice de
            calitate, intr-un cadru securizant si confidential.
          </p>
        </div>
        <div class="col-md-3 px-3 p-3 banner-item">
          <h2 class="p-2">Viziune</h2>
          <i class="flaticon-eye" />
          <p class="p-2">
            Viziunea noastra holistica imbina in mod organic metodele de
            vindecare orientale cu psihoterapiile suportive occidentale.
          </p>
        </div>
        <div class="col-md-3 px-3 p-3 banner-item">
          <h2 class="p-2">Scop</h2>
          <i class="flaticon-goal" />
          <p class="p-2">
            Va invitam sa exploram impreuna conexiunea dintre minte, corp si
            spirit, astfel incat sa gasiti solutiile potrivite pentru o viata
            echilibrata.
          </p>
        </div>
        <div class="col-md-3 px-3 p-3 banner-item">
          <h2 class="p-2">Abordare</h2>
          <i class="flaticon-buddhism" />
          <p class="p-2">
            Abordarea holistică este centrată pe analiza de simbol, dezvoltare
            personală şi autoschimbare prin intermediul improvizaţiei şi
            meditaţiei.
          </p>
        </div>
      </div>
    </div>
  </div>
{:else}
  <div class="banner mb-5 py-5">
    <div class="banner-content text-center">
      {#if placeholder}
        <h2 class="banner-title text-elegant">{placeholder}</h2>
      {:else}
        <h3 class="banner-title text-elegant title mb-4">{title}</h3>
        <div class="d-flex justify-content-center">
          <form class="fn-form" on:submit|preventDefault={addContactMessage}>
            <input
              type="email"
              placeholder="Email"
              aria-label="email"
              bind:value={email}
              required />
            <button type="submit" aria-label="Trimite">
              <Icon icon={faEnvelope} />
              {#if isLoading}
                <div id="loading" />
              {/if}
            </button>
          </form>
        </div>
      {/if}
    </div>
  </div>
{/if}
