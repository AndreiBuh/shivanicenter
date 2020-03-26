<script>
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
      "Mesajul tau a fost transmis cu succes. Vom analiza cererea ta si vom reveni cu un raspuns. Multumim pentru incredere!";

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
  .contact-section {
    padding-top: 80px;
    padding-bottom: 80px;
  }
  h2 {
    font-size: 40px;
    color: #222736;
    font-family: "Oswald";
  }

  span {
    font-size: 22px;
    color: #222736;
    font-family: "Oswald";
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
    height: 150px;
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
  .contact-form button {
    font-size: 13px;
    font-weight: 700;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 2px;
    background: #222736;
    border: none;
    padding: 14px 34px 13px;
    display: inline-block;
  }

  .contact-form button:hover {
    background: #36383f;
  }

  @media screen and (max-width: 768px) {
    span {
      font-size: 18px;
    }
  }
</style>

<svelte:head>
  <title>Contact</title>
</svelte:head>

<section class="contact-section">
  <div class="container">
    <div class="row">
      <div class="col-lg-6 text-center text-md-left">
        <h2 class="mb-5">Date de contact</h2>
        <div class="row">
          <div class="col-3">
            <span>Adresa:</span>
          </div>
          <div class="col-9">
            <span>Strada George Vraca, nr. 7, Et. 1, int. 3</span>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <span>Telefon:</span>
          </div>
          <div class="col-9">
            <span>0754689944</span>
          </div>
        </div>
        <div class="row">
          <div class="col-3">
            <span>Email:</span>
          </div>
          <div class="col-9">
            <span>shivani.center@gmail.com</span>
          </div>
        </div>
      </div>
      <div class="col-lg-6 mt-5 mt-md-0">
        {#if placeholder}
          <h2>{placeholder}</h2>
        {:else}
          <form
            class="contact-form"
            on:submit|preventDefault={addContactMessage}>
            <div class="row">
              <div class="col-lg-6">
                <input
                  type="text"
                  placeholder="Nume"
                  bind:value={name}
                  aria-label="Nume"
                  required />
              </div>
              <div class="col-lg-6">
                <input
                  type="email"
                  placeholder="Email"
                  bind:value={email}
                  aria-label="Email"
                  required />
              </div>
              <div class="col-lg-12 text-center">
                <textarea
                  placeholder="Mesajul tau"
                  bind:value={message}
                  aria-label="Mesaj"
                  required />
                <button type="submit" aria-label="Trimite">
                  {#if isLoading}
                    <div id="loading" />
                  {/if}
                  Trimite
                </button>
              </div>
            </div>
          </form>
        {/if}
      </div>
    </div>
  </div>
</section>
