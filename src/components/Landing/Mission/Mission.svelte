<script>
  import Lazy from "svelte-lazy";
  import TextInput from "../../UI/TextInput.svelte";
  import { isValidEmail } from "../../../helpers/validation.js";
  export let title;

  const apiUrl = process.env.SAPPER_APP_API_URL;
  let placeholder = "";
  let isFilling = false;
  let email = "";

  $: emailValid = isValidEmail(email);
  $: formIsValid = emailValid;

  // Newsletter POST request
  const handleContactMessage = async () => {
    let newMessage = {
      email
    };
    isFilling = true;
    const response = await fetch(`${apiUrl}/subscribes`, {
      method: "POST",
      body: JSON.stringify(newMessage),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    isFilling = false;
    email = "";
    placeholder =
      "Te-ai abonat cu succes la newsletterul nostru! În fiecare săptămână vei primi informații legate de noile articole.";

    if (!response.ok) throw Error(response.message);
    try {
      const data = await response.json();
      return data;
    } catch (err) {
      isFilling = false;
      throw err;
    }
  };
  // End Newsletter

  let missions = [
    {
      id: 1,
      title: "Misiune",
      icon: "mission.svg",
      content:
        "Shivani Center oferă o paletă largă de servicii psihologice de calitate, într-un cadru securizant și confidențial."
    },
    {
      id: "2",
      title: "Viziune",
      icon: "eye.svg",
      content:
        "Viziunea noastră holistică îmbină în mod organic metodele de vindecare orientale cu psihoterapiile suportive occidentale."
    },

    {
      id: "3",
      title: "Scop",
      icon: "goal.svg",
      content:
        "Vă invităm să explorăm împreună conexiunea dintre minte, corp și spirit, astfel încât să găsiți soluțiile potrivite pentru o viață echilibrată."
    },
    {
      id: "4",
      title: "Abordare",
      icon: "belief.svg",
      content:
        "Abordarea holistică este centrată pe analiza de simbol, dezvoltare personală şi autoschimbare prin intermediul improvizaţiei şi al meditaţiei."
    }
  ];
</script>

<style>
  .mission {
    display: flex;
    align-items: center;
    height: auto;
    text-align: center;
    box-shadow: 2px 2px 4px #666;
    background: var(--main-bg-color);
    bottom: 0;
    width: 100%;
  }
  .mission-title {
    font-family: var(--font-main), sans-serif;
    letter-spacing: 3px;
  }

  h4 {
    color: var(--main-color);
    font-family: var(--font-text), sans-serif;
  }

  img {
    width: 15%;
  }

  .form {
    position: relative;
    width: 40%;
    margin: 0 auto;
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
    font-family: var(--font-text), sans-serif;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 1px;
  }
  .mission-item {
    border-radius: 6px;
  }

  button[disabled]:hover {
    cursor: not-allowed;
    pointer-events: all !important;
  }

  i {
    color: white;
  }

  @media screen and (max-width: 768px) {
    .form {
      width: 80%;
    }

    .container {
      margin-top: 0px !important;
    }

    img {
      width: 10%;
    }
  }
</style>

{#if title == 'Cine suntem?'}
  <div class="mission pt-5 mt-5">
    <div class="container">
      <h3 class="mission-title mb-3 text-elegant">{title}</h3>
      <div class="row">
        {#each missions as { id, title, icon, content } (id)}
          <div class="col-md-3 px-3 pt-3 mission-item">
            <h4 class="p-2">{title}</h4>
            <Lazy offset={200}>
              <img src="/images/flaticon/{icon}" alt={title} />
            </Lazy>
            <p class="p-2">{content}</p>
          </div>
        {/each}
      </div>
    </div>
  </div>
{:else}
  <div class="mission mb-5 py-5">
    <div class="container">
      {#if placeholder}
        <h4 class="text-elegant placeholder">{placeholder}</h4>
      {:else}
        <h3 class="mission-title text-elegant title mb-4">
          <label for="email">{title}</label>
        </h3>
        <form class="form" on:submit|preventDefault={handleContactMessage}>
          <TextInput
            type="email"
            id="email"
            value={email}
            on:input={e => (email = e.target.value)}
            valid={emailValid}
            validityMessage="Te rugăm sa introduci un email valid!"
            placeholder="Introdu email" />
          <button type="submit" aria-label="Trimite" disabled={!formIsValid}>
            <i class="fa fa-envelope" />
          </button>
        </form>
      {/if}
    </div>
  </div>
{/if}
