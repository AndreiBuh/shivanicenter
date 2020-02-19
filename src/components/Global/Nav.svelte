<script>
  import { onMount, onDestroy } from "svelte";
  import Icon from "fa-svelte";
  import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
  import {
    faFacebook,
    faInstagram,
    faTwitter
  } from "@fortawesome/free-brands-svg-icons";
  import { fade, fly } from "svelte/transition";

  export let segment;
  let y;

  let hamburger;
  let navLinks;
  let mobileMenu = false;
  let open1 = false;
  let open2 = false;
  let open3 = false;

  const toggleMobileMenu = () => {
    mobileMenu = !mobileMenu;
  };

  const toggleOpen1 = () => {
    open1 = !open1;
    open2 = false;
    open3 = false;
  };

  const toggleOpen2 = () => {
    open1 = false;
    open2 = !open2;
    open3 = false;
  };
  const toggleOpen3 = () => {
    open1 = false;
    open2 = false;
    open3 = !open3;
  };
</script>

<style>
  a {
    text-decoration: none;
  }

  nav {
    width: 100%;
    background: #222736;
    transition: 0.4s;
    position: fixed;
    top: 0;
    z-index: 99;
    box-shadow: 0 0 5px #222736;
    height: auto;
  }

  .nav-links {
    display: flex;
    list-style: none;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 15px;
  }

  .nav-links li a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    font-family: "Oswald", sans-serif;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  .logo-wrapper {
    display: flex;
    justify-content: center;
  }

  .logo-title {
    font-family: "Cormorant", serif;
    font-size: 30px;
    color: #fff;
  }

  .logo-subtitle {
    font-size: 12px;
    color: #dfa974;
    font-display: "Nunito Sans";
  }

  .mainmenu ul li {
    position: relative;
    text-align: center;
  }

  .active {
    display: block;
    list-style: none;
    transition: all 2s linear 1s;
    font-size: 10px;
  }
  .active li {
    margin: 10px 0 !important;
  }

  .active li a {
    color: #9d9b9b !important;
    font-size: 14px !important;
  }

  .active li a:hover {
    color: rgba(212, 189, 133, 1) !important;
  }

  .inactive {
    display: none;
  }

  @media screen and (max-width: 768px) {
    nav {
      position: fixed;
      height: 70px;
    }

    .nav-links {
      position: absolute;
      right: 0px;
      height: calc(100vh - 70px);
      top: 54px;
      background: #222736;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50%;
      transform: translateX(100%);
      transition: transform 0.5s ease-in;
    }
    .nav-links li {
      margin: 15px 0;
      color: #fff;
    }

    .mobileMenu {
      transform: translateX(0%);
    }

    .logo-list-item {
      display: none;
    }

    .hamburger {
      position: absolute;
      cursor: pointer;
      right: 5%;
      top: 50%;
      transform: translate(-5%, -50%);
      z-index: 9999;
      background: #fff;
      width: 30px;
      height: 3px;
      border-radius: 5px;
    }
    .hamburger:before,
    .hamburger:after {
      content: "";
      position: absolute;
      width: 30px;
      height: 4px;
      background: #fff;

      border-radius: 5px;
    }

    .hamburger:before {
      top: -6px;
    }
    .hamburger:after {
      top: 6px;
    }

    .ham {
      background: rgba(0, 0, 0, 0);
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0);
    }

    .ham:before {
      top: 0;
      transform: rotate(45deg);
    }
    .ham:after {
      top: 0;
      transform: rotate(135deg);
    }
  }

  @media screen and (min-width: 768px) {
    .mainmenu ul li:hover .dropdown {
      opacity: 1;
      visibility: visible;
    }

    .mainmenu ul li .dropdown {
      position: absolute;
      left: 0;
      width: 230px;
      background: #ffffff;
      z-index: 9;
      opacity: 0;
      visibility: hidden;
      -webkit-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 0.3s;
      -webkit-box-shadow: 0px 9px 15px rgba(25, 25, 26, 0.05);
      box-shadow: 0px 9px 15px rgba(25, 25, 26, 0.05);
    }
    .mainmenu ul li .dropdown li {
      list-style: none;
      display: block;
    }
    .mainmenu ul li .dropdown li a {
      font-size: 14px;
      color: #19191a;
      display: block;
      text-align: left;
      padding: 8px 15px;
      -webkit-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 0.3s;
    }
    .mainmenu ul li .dropdown li a:hover,
    .mainmenu ul li a:hover {
      color: #dfa974;
    }
  }
</style>

<svelte:window bind:scrollY={y} />

{#if y < '300'}
  <nav in:fly={{ y: -100, duration: 400 }}>
    <div class="hamburger" class:ham={mobileMenu} on:click={toggleMobileMenu} />
    <div class="mainmenu">
      <ul class="nav-links" class:mobileMenu bind:this={navLinks}>
        <li class="mx-4 mx-lg-5" rel="prefetch">
          <a href="javascript:void(0)" on:click={toggleOpen1}>DESPRE NOI</a>
          <ul class="dropdown" class:active={open1} class:inactive={!open1}>
            <li>
              <a
                rel="prefetch"
                href="despre-noi/shivani-center"
                on:click={toggleMobileMenu}>
                Shivani Center
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="despre-noi/roxana-alecu"
                on:click={toggleMobileMenu}>
                Psiholog Alecu Roxana
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="despre-noi/alexandra-tatu"
                on:click={toggleMobileMenu}>
                Psiholog Tatu Alexandra
              </a>
            </li>
          </ul>
        </li>
        <li class="mx-5 mx-lg-5" rel="prefetch">
          <a href="javascript:void(0)" on:click={toggleOpen2}>ARTICOLE</a>
          <ul class="dropdown" class:active={open2} class:inactive={!open2}>
            <li>
              <a
                rel="prefetch"
                href="articole/familie"
                on:click={toggleMobileMenu}>
                Familie
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="articole/relatie-de-cuplu"
                on:click={toggleMobileMenu}>
                Relatie de cuplu
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="articole/sanatate"
                on:click={toggleMobileMenu}>
                Sanatate
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="articole/meditatie-yoga"
                on:click={toggleMobileMenu}>
                Meditatie/Yoga
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="articole/dezvoltare-personala"
                on:click={toggleMobileMenu}>
                Dezvoltare personala
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="articole/sexualitate"
                on:click={toggleMobileMenu}>
                Sexualitate
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="articole/timp-liber"
                on:click={toggleMobileMenu}>
                Timp liber
              </a>
            </li>
          </ul>
        </li>
        <li class="mx-5 mx-lg-5" rel="prefetch">
          <a href="javascript:void(0)" on:click={toggleOpen3}>SERVICII</a>
          <ul class="dropdown" class:active={open3} class:inactive={!open3}>
            <li>
              <a
                rel="prefetch"
                href="servicii/consiliere-psihologica"
                on:click={toggleMobileMenu}>
                Consiliere psihologica
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="servicii/psihoterapie"
                on:click={toggleMobileMenu}>
                Psihoterapie
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="servicii/meditatie"
                on:click={toggleMobileMenu}>
                Meditatie
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="servicii/dezvoltare-personala"
                on:click={toggleMobileMenu}>
                Dezvoltare personala
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="servicii/psihoeducatie"
                on:click={toggleMobileMenu}>
                Psihoeducatie
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="servicii/workshop"
                on:click={toggleMobileMenu}>
                Workshop-uri
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="servicii/art-therapy"
                on:click={toggleMobileMenu}>
                Art-therapy
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="servicii/consiliere-vocationala"
                on:click={toggleMobileMenu}>
                Consiliere vocationala
              </a>
            </li>
          </ul>
        </li>
        <li class="logo-list-item">
          <div
            class="logo-wrapper text-center"
            in:fly={{ y: -200, duration: 2000 }}>
            <a href=".">
              <img
                src="logo6-min.png"
                alt="logo"
                class="logo"
                width="100"
                height="100" />
              <div class="logo-title">SHIVANI CENTER</div>
              <div class="logo-subtitle">Holistic therapy</div>
            </a>
          </div>

        </li>
        <li class="mx-5 mx-lg-5" rel="prefetch">
          <a
            rel="prefetch"
            class:selected={segment === 'evenimente'}
            href="evenimente"
            on:click={toggleMobileMenu}>
            EVENIMENTE
          </a>
        </li>
        <li class="mx-5 mx-lg-5" rel="prefetch">
          <a
            rel="prefetch"
            class:selected={segment === 'blog'}
            href="blog"
            on:click={toggleMobileMenu}>
            BLOG
          </a>
        </li>
        <li class="mx-5 mx-lg-5" rel="prefetch">
          <a
            rel="prefetch"
            class:selected={segment === 'contact'}
            href="contact"
            on:click={toggleMobileMenu}>
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  </nav>
{:else}
  <nav in:fly={{ y: -100, duration: 1500 }}>
    <div class="hamburger" class:ham={mobileMenu} on:click={toggleMobileMenu} />
    <div class="mainmenu">
      <ul class="nav-links p-0 mt-3" class:mobileMenu bind:this={navLinks}>
        <li class="mx-4 mx-lg-5" rel="prefetch">
          <a href="javascript:void(0)" on:click={toggleOpen1}>DESPRE NOI</a>
          <ul class="dropdown" class:active={open1} class:inactive={!open1}>
            <li>
              <a
                rel="prefetch"
                href="despre-noi/shivani-center"
                on:click={toggleMobileMenu}>
                Shivani Center
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="despre-noi/roxana-alecu"
                on:click={toggleMobileMenu}>
                Psiholog Alecu Roxana
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="despre-noi/alexandra-tatu"
                on:click={toggleMobileMenu}>
                Psiholog Tatu Alexandra
              </a>
            </li>
          </ul>
        </li>
        <li class="mx-4 mx-lg-5" rel="prefetch">
          <a href="javascript:void(0)" on:click={toggleOpen2}>ARTICOLE</a>
          <ul class="dropdown" class:active={open2} class:inactive={!open2}>
            <li>
              <a
                rel="prefetch"
                href="articole/familie"
                on:click={toggleMobileMenu}>
                Familie
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="articole/relatie-de-cuplu"
                on:click={toggleMobileMenu}>
                Relatie de cuplu
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="articole/sanatate"
                on:click={toggleMobileMenu}>
                Sanatate
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="articole/meditatie-yoga"
                on:click={toggleMobileMenu}>
                Meditatie/Yoga
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="articole/dezvoltare-personala"
                on:click={toggleMobileMenu}>
                Dezvoltare personala
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="articole/sexualitate"
                on:click={toggleMobileMenu}>
                Sexualitate
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="articole/timp-liber"
                on:click={toggleMobileMenu}>
                Timp liber
              </a>
            </li>
          </ul>
        </li>
        <li class="mx-4 mx-lg-5" rel="prefetch">
          <a href="javascript:void(0)" on:click={toggleOpen3}>SERVICII</a>
          <ul class="dropdown" class:active={open3} class:inactive={!open3}>
            <li>
              <a
                rel="prefetch"
                href="servicii/consiliere-psihologica"
                on:click={toggleMobileMenu}>
                Consiliere psihologica
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="servicii/psihoterapie"
                on:click={toggleMobileMenu}>
                Psihoterapie
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="servicii/meditatie"
                on:click={toggleMobileMenu}>
                Meditatie
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="servicii/dezvoltare-personala"
                on:click={toggleMobileMenu}>
                Dezvoltare personala
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="servicii/psihoeducatie"
                on:click={toggleMobileMenu}>
                Psihoeducatie
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="servicii/workshop"
                on:click={toggleMobileMenu}>
                Workshop-uri
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="servicii/art-therapy"
                on:click={toggleMobileMenu}>
                Art-therapy
              </a>
            </li>
            <li>
              <a
                rel="prefetch"
                href="servicii/consiliere-vocationala"
                on:click={toggleMobileMenu}>
                Consiliere vocationala
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href=".">
            <img src="logo6-min.png" alt="logo" width="70" height="70" />
          </a>
        </li>
        <li class="mx-4 mx-lg-5" rel="prefetch">
          <a
            rel="prefetch"
            class:selected={segment === 'evenimente'}
            href="evenimente"
            on:click={toggleMobileMenu}>
            EVENIMENTE
          </a>
        </li>
        <li rel="prefetch" class="mx-4 mx-lg-5">
          <a
            class:selected={segment === 'blog'}
            href="blog"
            on:click={toggleMobileMenu}>
            BLOG
          </a>
        </li>
        <li rel="prefetch" class="mx-4 mx-lg-5">
          <a
            class:selected={segment === 'contact'}
            href="contact"
            on:click={toggleMobileMenu}>
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  </nav>
{/if}
