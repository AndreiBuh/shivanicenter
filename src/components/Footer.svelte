<script>
  import Icon from "fa-svelte";
  import {
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";
  import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
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
  .footer-section .copyright-option {
    background: rgba(16, 20, 31, 0.2);
    padding: 20px 0;
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
  .footer-section .copyright-option .co-text {
    font-size: 16px;
    color: #707079;
    text-align: right;
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
              <a href="#">
                <Icon icon={faFacebook} />
              </a>
              <a href="#">
                <Icon icon={faInstagram} />
              </a>
              <a href="#">
                <Icon icon={faTwitter} />
              </a>
              <a href="#">
                <Icon icon={faYoutube} />
              </a>
              <a href="#">
                <Icon icon={faLinkedin} />
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
            <form class="fn-form">
              <input type="text" placeholder="Email" />
              <button type="submit">
                <Icon icon={faEnvelope} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
