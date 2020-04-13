<script>
  import TextInput from "../UI/TextInput.svelte";
  import { isValidEmail } from "../../helpers/validation.js";
  const apiUrl = process.env.SAPPER_APP_API_URL;
  let isFilling = false;
  let placeholder = "";
  let email = "";

  $: emailValid = isValidEmail(email);
  $: formIsValid = emailValid;

  const handleEmail = async () => {
    let newMail = {
      email
    };
    isFilling = true;
    const response = await fetch(`${apiUrl}/subscribes`, {
      method: "POST",
      body: JSON.stringify(newMail),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    isFilling = false;
    email = "";
    placeholder = "Te-ai abonat cu succes la newsletterul nostru!";

    if (!response.ok) throw Error(response.message);
    try {
      const data = await response.json();
      return data;
    } catch (err) {
      isFilling = false;
      throw err;
    }
  };
</script>

<style>
  .footer-section {
    background: #222736;
    width: 100%;
  }
  .footer-text {
    padding: 60px 0 40px;
  }
  .ft-about {
    margin-bottom: 30px;
  }
  .ft-about h6 {
    font-size: 14px;
    color: var(--main-color);
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 3px;
    margin-bottom: 20px;
  }

  .ft-about p {
    color: #aaaab3;
    margin-bottom: 20px;
    font-family: var(--font-text), sans-serif;
  }
  .fa-social a {
    display: inline-block;
    height: 40px;
    width: 40px;
    font-size: 16px;
    line-height: 40px;
    text-align: center;
    color: #ffffff;
    border: 1px solid #5a4d48;
    border-radius: 50%;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
    margin-right: 7px;
  }
  .ft-contact {
    margin-bottom: 30px;
  }
  h6 {
    font-size: 14px;
    color: #dfa974;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 3px;
    margin-bottom: 20px;
  }
  ul li {
    font-size: 16px;
    color: #aaaab3;
    line-height: 32px;
    list-style: none;
  }
  h6 {
    font-size: 14px;
    color: #dfa974;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 3px;
    margin-bottom: 20px;
  }
  p {
    color: #aaaab3;
    margin-bottom: 20px;
  }
  .form {
    position: relative;
  }
  .form button {
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
  .footer-section .copyright-option ul li {
    list-style: none;
    display: inline-block;
    margin-right: 34px;
  }
  .footer-section .copyright-option ul li:last-child {
    margin-right: 0;
  }
  .footer-section .copyright-option ul li a {
    font-size: 16px;
    color: #aaaab3;
  }
  #filling {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(204, 181, 181, 0.3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 3s ease-in-out infinite;
    -webkit-animation: spin 3s ease-in-out infinite;
  }
  .fa-social a:hover {
    transform: translateY(-5px);
    transition: 0.4s ease-out;
  }
  button[disabled]:hover {
    cursor: not-allowed;
    pointer-events: all !important;
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
  @media screen and (max-width: 768px) {
    .form {
      width: 80%;
      margin: 0 auto;
    }
  }
</style>

<footer class="footer-section mt-5">
  <div class="container">
    <div class="footer-text">
      <div class="row">
        <div class="col-lg-4">
          <div class="ft-about text-center">
            <div class="logo">
              <h6>Social Media</h6>
            </div>
            <p>Ne puteți găsi pe rețelele de socializare!</p>
            <div class="fa-social">
              <a
                rel="noopener"
                target="_blank"
                href="https://www.facebook.com/PsihologRoxanaAlecu/"
                aria-label="facebook">
                <i class="fa fa-facebook" />
              </a>
              <a
                rel="noopener"
                target="_blank"
                href="https://www.instagram.com/psiholog.roxana.alecu/"
                aria-label="instagram">
                <i class="fa fa-instagram" />
              </a>
              <a
                rel="noopener"
                target="_blank"
                href="https://www.linkedin.com/in/florentina-roxana-alecu-78a220186/"
                aria-label="linkedin">
                <i class="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 offset-lg-1">
          <div class="ft-contact text-center">
            <h6>Contact</h6>
            <ul>
              <li>shivanicenter.psychology@gmail.com</li>
              <li>Str. George Vraca, nr.7</li>
              <li>+40 790 420 493</li>
              <li>
                <iframe
                  src="https://www.facebook.com/plugins/share_button.php?href=http%3A%2F%2Flocalhost%3A3000%2Farticole%2Fsanatate%2Fcana-mea-de-ceai-verde&layout=button_count&size=small&width=78&height=20&appId"
                  width="78"
                  height="20"
                  style="border:none;overflow:hidden"
                  scrolling="no"
                  frameborder="0"
                  allowTransparency="true"
                  allow="encrypted-media"
                  title="cana mea de ceai verde" />
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 offset-lg-1">
          <div class="ft-newslatter text-center">
            <h6>Newsletter</h6>
            <p>Fii la curent cu ultimele articole!</p>
            {#if placeholder}
              <h5 class="text-white">{placeholder}</h5>
            {:else}
              <form class="form" on:submit|preventDefault={handleEmail}>
                <TextInput
                  type="email"
                  id="email"
                  value={email}
                  on:input={e => (email = e.target.value)}
                  valid={emailValid}
                  validityMessage="Te rugăm sa introduci un email valid!"
                  placeholder="Introdu email" />
                <button
                  type="submit"
                  disabled={!formIsValid}
                  aria-label="Trimite"
                  placeholder="Introdu email">
                  <i class="fas fa-envelope" />
                </button>
              </form>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

{#if isFilling}
  <div id="filling" />
{/if}
