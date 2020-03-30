<script>
  export let title;

  const apiUrl = process.env.SAPPER_APP_API_URL;
  let email = "";
  let placeholder = "";
  let isLoading = false;

  // Newsletter POST request
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
  // End Newsletter
</script>

<style>
  .banner {
    display: flex;
    align-items: center;
    height: auto;
    text-align: center;
    box-shadow: 2px 2px 4px #666;
    background: #222736;
    bottom: 0;
    width: 100%;
  }
  .banner-title {
    font-family: "Oswald", sans-serif;
  }

  h5.placeholder,
  h4 {
    color: #dfa974;
    font-family: "Josefin Sans", sans-serif;
    letter-spacing: 2px;
  }

  i {
    color: white;
  }

  .form {
    position: relative;
    width: 40%;
  }
  .form input {
    width: 100%;
    height: 50px;
    border-radius: 2px;
    background: #393d4a;
    border: none;
    padding-left: 20px;
    font-size: 16px;
    color: white;
  }
  .form button {
    position: absolute;
    right: 0;
    top: 0;
    font-size: 16px;
    background: var(--main-color);
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

  @media screen and (max-width: 768px) {
    .form {
      width: 80%;
    }
  }
</style>

{#if title == 'Cine suntem?'}
  <div class="banner pt-5 mt-5">
    <div class="container">
      <h1 class="banner-title mb-3 text-elegant">{title}</h1>
      <div class="row">
        <div class="col-md-3 px-3 pt-3 banner-item">
          <h4 class="p-2">Misiune</h4>
          <i class="flaticon-mission" />
          <p class="p-2">
            Shivani Center ofera o paleta larga de servicii psihologice de
            calitate, intr-un cadru securizant si confidential.
          </p>
        </div>
        <div class="col-md-3 px-3 p-3 banner-item">
          <h4 class="p-2">Viziune</h4>
          <i class="flaticon-eye" />
          <p class="p-2">
            Viziunea noastra holistica imbina in mod organic metodele de
            vindecare orientale cu psihoterapiile suportive occidentale.
          </p>
        </div>
        <div class="col-md-3 px-3 p-3 banner-item">
          <h4 class="p-2">Scop</h4>
          <i class="flaticon-goal" />
          <p class="p-2">
            Va invitam sa exploram impreuna conexiunea dintre minte, corp si
            spirit, astfel incat sa gasiti solutiile potrivite pentru o viata
            echilibrata.
          </p>
        </div>
        <div class="col-md-3 px-3 p-3 banner-item">
          <h4 class="p-2">Abordare</h4>
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
    <div class="container">
      {#if placeholder}
        <h5 class="text-elegant placeholder">{placeholder}</h5>
      {:else}
        <h3 class="banner-title text-elegant title mb-4">{title}</h3>
        <div class="d-flex justify-content-center">
          <form class="form" on:submit|preventDefault={addContactMessage}>
            <input
              type="email"
              placeholder="Email"
              aria-label="email"
              bind:value={email}
              required />
            <button type="submit" aria-label="Trimite">
              <i class="fa fa-envelope" />
            </button>
          </form>
        </div>
      {/if}
    </div>
  </div>
{/if}
