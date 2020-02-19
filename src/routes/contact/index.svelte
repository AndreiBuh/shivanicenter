<script>

</script>

<style>
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
  .map {
    height: 470px;
    -webkit-box-shadow: 0px 14px 35px rgba(0, 0, 0, 0.15);
    box-shadow: 0px 14px 35px rgba(0, 0, 0, 0.15);
    margin-top: 75px;
  }
  .map iframe {
    width: 100%;
  }
</style>

<svelte:head>
  <title>Contact</title>
</svelte:head>
<section class="contact-section">
  <div class="container">
    <div class="row">
      <div class="col-lg-6">
        <h2 class="mb-5">Date de contact</h2>
        <div class="row">
          <div class="col-md-2">
            <span>Adresa:</span>
          </div>
          <div class="col-md-10">
            <span>Strada George Vraca, nr. 7, Et. 1, int. 3</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <span>Telefon:</span>
          </div>
          <div class="col-md-10">
            <span>0754689944</span>
          </div>
        </div>
        <div class="row">
          <div class="col-md-2">
            <span>Email:</span>
          </div>
          <div class="col-md-10">
            <span>shivani.center@gmail.com</span>
          </div>
        </div>
      </div>
      <div class="col-lg-6">
        <form action="#" class="contact-form">
          <div class="row">
            <div class="col-lg-6">
              <input type="text" placeholder="Nume" />
            </div>
            <div class="col-lg-6">
              <input type="text" placeholder="Email" />
            </div>
            <div class="col-lg-12 text-center">
              <textarea placeholder="Mesajul tau" />
              <button type="submit">Trimite</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.0606825994123!2d-72.8735845851828!3d40.760690042573295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e85b24c9274c91%3A0xf310d41b791bcb71!2sWilliam%20Floyd%20Pkwy%2C%20Mastic%20Beach%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1578582744646!5m2!1sen!2sbd"
        height="470"
        style="border:0;"
        allowfullscreen="" />
    </div>
  </div>
</section>
<!-- Contact Section End -->
