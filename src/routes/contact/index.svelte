<script>
  import Heading from "../../components/UI/Heading.svelte";
  const apiUrl = process.env.SAPPER_APP_API_URL;
  let name = "";
  let email = "";
  let message = "";
  let isLoading = false;
  let placeholder = "";

  const addContactMessage = async () => {
    let newMessage = {
      name,
      email,
      message
    };
    isLoading = true;
    const response = await fetch(`${apiUrl}/messages`, {
      method: "POST",
      body: JSON.stringify(newMessage),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    isLoading = false;
    name = "";
    email = "";
    message = "";
    placeholder =
      "Mesajul tău a fost transmis cu succes. Vom analiza cererea ta și vom reveni cu un răspuns. Mulțumim pentru încredere!";

    if (!response.ok) throw Error(response.message);
    try {
      const data = await response.json();
      return data;
    } catch (err) {
      isLoading = false;
      throw err;
    }
  };

  let psychologists = [
    {
      id: 1,
      name: "Psiholog Roxana Alecu",
      phone: "+40 790 420 493",
      email: "alecuroxana19@yahoo.com"
    },
    {
      id: 2,
      name: "Psiholog Alexandra Tatu ",
      phone: "+40 727 574 486",
      email: "tatu_alexandra15@yahoo.com "
    },
    {
      id: 3,
      name: "Psiholog Gina ilie",
      phone: "+40 768 137 032",
      email: "psih.ginailie@gmail.com"
    },
    {
      id: 4,
      name: "Psiholog Alexandra Maria Pană",
      phone: "+40 721 821 910",
      email: "alexandra.pana.psihoterapeut@gmail.com"
    },
    {
      id: 5,
      name: "Nutriționist Claudia Petre",
      phone: "+40 753 465 211",
      email: "stancuclaudia23@gmail.com"
    }
  ];
</script>

<style>
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
  .card {
    background-color: #222736;
    border-radius: 10px;
    box-shadow: -0.5rem 0 0.5rem #222736;
    transition: 0.4s ease-out;
  }
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
  h4.placeholder {
    line-height: 40px;
    color: #222736;
    font-family: var(--font-text);
    letter-spacing: 2px;
  }
  span {
    font-size: 18px;
    color: var(--main-bg-color);
    font-family: var(--font-main);
  }

  i {
    font-size: 20px;
  }
  .contact-form input {
    width: 100%;
    height: 50px;
    border: 1px solid #e1e1e1;
    font-size: 16px;
    color: #aaaab3;
    padding-left: 25px;
    margin-bottom: 28px;
  }
  .contact-form input::placeholder {
    color: #aaaab3;
  }
  .contact-form textarea {
    width: 100%;
    border: 1px solid #e1e1e1;
    font-size: 16px;
    color: #aaaab3;
    padding-left: 25px;
    padding-top: 12px;
    margin-bottom: 30px;
    resize: none;
  }
  .contact-form textarea::placeholder {
    color: #aaaab3;
  }
  .btn:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
  .btn {
    border: 1px solid white !important;
    color: color;
    border-radius: 6px;
    font-size: 12px;
    font-family: var(--font-main);
    letter-spacing: 3px;
  }

  .btn:hover {
    color: white;
    border: 1px solid !important;
    background: #444c54 !important;
  }
  @media screen and (max-width: 768px) {
    span {
      font-size: 18px;
    }

    .container {
      margin-top: 90px;
    }
  }
</style>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<div class="container">
  <Heading title="Date de contact" />
  <div class="row">

    <div class="col-lg-5">
      {#each psychologists as { id, name, email, phone } (id)}
        <div class="card my-2 p-2">
          <h5 class="text-elegant">{name}</h5>
          <div class="row m-1">
            <span class="mr-3 text-white">
              <i class="fa fa-phone" />
            </span>
            <span class="text-white">{phone}</span>
          </div>
          <div class="row m-1">
            <span class="mr-3 text-white">
              <i class="fa fa-envelope" />
            </span>
            <span class="text-white">{email}</span>
          </div>
        </div>
      {/each}
    </div>

    <div class="col-lg-7 card p-4 m-3 m-md-0">
      {#if placeholder}
        <h4 class="placeholder text-center text-white">{placeholder}</h4>
      {:else}
        <h2 class="mb-5 text-center text-white">Contactează-ne!</h2>
        <form class="contact-form" on:submit|preventDefault={addContactMessage}>
          <div class="row">
            <div class="col-lg-6">
              <input
                type="text"
                placeholder="Nume"
                bind:value={name}
                aria-label="Nume" />
            </div>
            <div class="col-lg-6">
              <input
                type="email"
                placeholder="Email"
                bind:value={email}
                aria-label="Email" />
            </div>
            <div class="col-lg-12 text-center">
              <textarea
                rows="10"
                placeholder="Mesajul tau"
                bind:value={message}
                aria-label="Mesaj" />
              <button
                type="submit"
                class="btn btn-outline py-2 px-4"
                aria-label="Trimite">
                {#if isLoading}
                  <div id="loading" />
                {/if}
                <span class="text-white">TRIMITE</span>
              </button>
            </div>
          </div>
        </form>
      {/if}
    </div>
  </div>
</div>
