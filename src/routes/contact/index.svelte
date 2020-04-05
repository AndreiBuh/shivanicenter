<script>
  import Heading from "../../components/UI/Heading.svelte";
  import TextInput from "../../components/UI/TextInput.svelte";
  import { isEmpty, isValidEmail } from "../../helpers/validation.js";
  const apiUrl = process.env.SAPPER_APP_API_URL;

  let isFilling = false;
  let placeholder = "";

  let name = "";
  let email = "";
  let message = "";
  let formIsValid = false;

  //validation
  let valid = true;
  let validityMessage = "";
  let touched = false;

  $: nameValid = !isEmpty(name);
  $: emailValid = isValidEmail(email);
  $: messageValid = !isEmpty(message);
  $: formIsValid = nameValid && emailValid && messageValid;

  //POST request
  const handleContactMessage = async () => {
    let newMessage = {
      name,
      email,
      message
    };
    isFilling = true;
    const response = await fetch(`${apiUrl}/messages`, {
      method: "POST",
      body: JSON.stringify(newMessage),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    isFilling = false;
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
      isFilling = false;
      throw err;
    }
  };

  let psychologists = [
    {
      id: 1,
      name: "Psiholog Roxana Alecu",
      phone: "+40 790 420 493",
      email: "alecuroxana19@yahoo.com",
      image: "testimonial-roxana.jpg"
    },
    {
      id: 2,
      name: "Psiholog Alexandra Tatu ",
      phone: "+40 727 574 486",
      email: "tatu_alexandra15@yahoo.com ",
      image: "testimonial-alexandra-tatu.jpg"
    },
    {
      id: 3,
      name: "Psihoterapeut Gina ilie",
      phone: "+40 768 137 032",
      email: "psih.ginailie@gmail.com",
      image: "testimonial-gina.jpg"
    },
    {
      id: 4,
      name: "Psiholog Alexandra Pană",
      phone: "+40 721 821 910",
      email: "alexandra.pana.psihoterapeut@gmail.com",
      image: "testimonial-alexandra.jpg"
    },
    {
      id: 5,
      name: "Nutriționist Claudia Petre",
      phone: "+40 753 465 211",
      email: "stancuclaudia23@gmail.com",
      image: "testimonial-claudia.jpg"
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

  .contact-container {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
  }
  #filling {
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
    background: #444c54 !important;
  }

  .btn[disabled]:hover {
    background: var(--main-bg-color) !important;
    cursor: not-allowed;
    pointer-events: all !important;
  }

  .avatar {
    width: 100px;
    overflow: hidden;
    border: 2px solid #fff;
    border-radius: 50%;
  }

  .avatar img {
    width: 100%;
  }

  .rounded-circle {
    border-radius: 50%;
  }

  @media screen and (max-width: 768px) {
    span {
      font-size: 18px;
    }
    span {
      font-size: 14px;
    }

    i {
      font-size: 16px;
    }
    .avatar {
      width: 70px;
      height: 70px;
    }
    .avatar img {
      width: 70px;
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
      {#each psychologists as { id, name, email, phone, image } (id)}
        <div class="card my-2 p-1 p-md-2 contact-container">
          <div class="contact-content">
            <h5 class="text-elegant">{name}</h5>
            <div class="row m-1">
              <span class="mr-3 text-white">
                <i class="fas fa-phone" />
              </span>
              <span class="text-white">{phone}</span>
            </div>
            <div class="row m-1">
              <span class="mr-2 mr-md-3 text-white">
                <i class="fas fa-envelope" />
              </span>
              <span class="text-white">{email}</span>
            </div>
          </div>
          <div class="avatar white">
            <img
              src={image}
              class="rounded-circle img-fluid"
              alt="imagine psiholog" />
          </div>
        </div>
      {/each}
    </div>

    <div class="col-lg-7 card p-4 m-3 m-md-0">
      {#if placeholder}
        <h4 class="placeholder text-center text-white">{placeholder}</h4>
      {:else}
        <h2 class="mb-5 text-center text-white">Contactează-ne!</h2>
        <form
          class="contact-form"
          on:submit|preventDefault={handleContactMessage}>
          <div class="row">
            <div class="col-lg-6 p-3">
              <TextInput
                type="input"
                id="nume"
                label="Nume"
                value={name}
                on:input={e => (name = e.target.value)}
                valid={nameValid}
                validityMessage="Te rugăm sa introduci un nume valid!" />
            </div>
            <div class="col-lg-6 p-3">
              <TextInput
                type="email"
                id="email"
                label="Email"
                value={email}
                on:input={e => (email = e.target.value)}
                valid={emailValid}
                validityMessage="Te rugăm sa introduci un email valid!" />
            </div>
          </div>
          <div>
            <div class="row">
              <div class="col-md-12 p-3">
                <TextInput
                  controlType="textarea"
                  rows="10"
                  id="mesaj"
                  label="Mesaj"
                  value={message}
                  on:input={e => (message = e.target.value)}
                  valid={messageValid}
                  validityMessage="Te rugăm sa introduci un mesaj valid!" />
              </div>
            </div>
            <div class="text-center mt-3">
              <button
                type="submit"
                class="btn btn-outline py-2 px-4"
                disabled={!formIsValid}
                aria-label="Trimite">
                {#if isFilling}
                  <div id="isFilling" />
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
