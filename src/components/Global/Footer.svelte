<script>
  const apiUrl = process.env.SAPPER_APP_API_URL;
  let isLoading = false;
  let email = "";
  let placeholder = "";

  const addEmail = async () => {
    let newMail = {
      email
    };
    isLoading = true;
    const response = await fetch(`${apiUrl}/subscribes`, {
      method: "POST",
      body: JSON.stringify(newMail),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });

    isLoading = false;
    email = "";
    placeholder = "Te-ai abonat cu succes la newsletterul nostru!";

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
  .footer-section {
    background: #222736;
    width: 100%;
  }
  .footer-section .footer-text {
    padding: 60px 0 40px;
  }
  .footer-section .footer-text .ft-about {
    margin-bottom: 30px;
  }
  .footer-section .footer-text .ft-about h6 {
    font-size: 14px;
    color: #dfa974;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 3px;
    font-family: "Special Elite", sans-serif;
    margin-bottom: 20px;
  }
  .footer-section .footer-text .ft-about .logo a {
    display: inline-block;
  }
  .footer-section .footer-text .ft-about p {
    color: #aaaab3;
    margin-bottom: 20px;
  }
  .footer-section .footer-text .ft-about .fa-social a {
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
  .footer-section .footer-text .ft-about .fa-social a:hover {
    background: #dfa974;
    border-color: #dfa974;
  }
  .footer-section .footer-text .ft-contact {
    margin-bottom: 30px;
  }
  .footer-section .footer-text .ft-contact h6 {
    font-size: 14px;
    color: #dfa974;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 3px;
    font-family: "Special Elite", sans-serif;
    margin-bottom: 20px;
  }
  .footer-section .footer-text .ft-contact ul li {
    font-size: 16px;
    color: #aaaab3;
    line-height: 32px;
    list-style: none;
  }
  .footer-section .footer-text .ft-newslatter h6 {
    font-size: 14px;
    color: #dfa974;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 3px;
    font-family: "Special Elite", sans-serif;
    margin-bottom: 20px;
  }
  .footer-section .footer-text .ft-newslatter p {
    color: #aaaab3;
    margin-bottom: 20px;
  }
  .footer-section .footer-text .ft-newslatter .fn-form {
    position: relative;
  }
  .footer-section .footer-text .ft-newslatter .fn-form input {
    width: 100%;
    height: 50px;
    border-radius: 2px;
    background: #393d4a;
    border: none;
    padding-left: 20px;
    font-size: 16px;
    color: white;
  }
  .footer-section .footer-text .ft-newslatter .fn-form button {
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

  #loading {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(204, 181, 181, 0.3);
    border-radius: 50%;
    border-top-color: #fff;
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
</style>

<footer class="footer-section mt-5">
  <div class="container">
    <div class="footer-text">
      <div class="row">
        <div class="col-lg-4">
          <div class="ft-about">
            <div class="logo">
              <h6>Social Media</h6>
            </div>
            <p>
              We inspire and reach millions of travelers
              <br />
              across 90 local websites
            </p>
            <div class="fa-social">
              <a
                href="http://www.facebook.com"
                aria-label="Pagina de facebook Shivani Center">
                <i class="fa fa-facebook" />
              </a>
              <a
                href="http://www.instagram.com"
                aria-label="Pagina de instagram Shivani Center">
                <i class="fa fa-instagram" />
              </a>
              <a
                href="http://www.linkedin.com"
                aria-label="Pagina de linkedin Shivani Center">
                <i class="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 offset-lg-1">
          <div class="ft-contact">
            <h6>Contact</h6>
            <ul>
              <li>0754.689.944</li>
              <li>shivani.center@yahoo.com</li>
              <li>Splaiul Independentei nr.45</li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 offset-lg-1">
          <div class="ft-newslatter">
            <h6>Newsletter</h6>
            <p>Fii la curent cu ultimele articole.</p>
            {#if placeholder}
              <h5 class="text-white">{placeholder}</h5>
            {:else}
              <form class="fn-form" on:submit|preventDefault={addEmail}>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  bind:value={email}
                  aria-label="Email" />
                <button type="submit" aria-label="Trimite">
                  {#if isLoading}
                    <div id="loading" />
                  {/if}
                  <i class="fa fa-envelope" />
                </button>
              </form>
            {/if}
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
