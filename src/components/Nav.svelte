<script>
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
  let open = false;
</script>

<style>
  nav {
    width: 100%;
    background: white;
    transition: 0.4s;
    position: fixed;
    top: 0;
    z-index: 99;
    box-shadow: 0 0 5px #333;
  }

  .logo {
    width: 168px;
    height: 120px;
  }

  .logo-small {
    display: none;
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
    color: #252525;
    text-decoration: none;
    font-size: 18px;
    font-family: "Oswald", sans-serif;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  .logo-wrapper {
    justify-content: center;
  }

  .mainmenu ul li {
    position: relative;
  }

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

  @media screen and (max-width: 768px) {
    nav {
      position: relative;
      height: 70px;
    }

    .logo-wrapper {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .logo {
      display: none;
    }

    .logo-small {
      display: block;
      width: 120px;
      height: 70px;
    }

    .mainmenu ul li:hover .dropdown {
      display: none;
    }

    .hamburger {
      position: absolute;
      cursor: pointer;
      right: 5%;
      top: 50%;
      transform: translate(-5%, -50%);
      z-index: 9999;
      background: #252525;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      width: 30px;
      height: 3px;
      border-radius: 5px;
    }

    .hamburger:before,
    .hamburger:after {
      content: "";
      position: absolute;
      width: 30px;
      height: 3px;
      background: #252525;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
    }

    .hamburger:before {
      top: -8px;
    }
    .hamburger:after {
      top: 8px;
    }

    .nav-links {
      position: fixed;
      background: #fff;
      height: 100%;
      width: 100%;
      flex-direction: column;
      clip-path: circle(50px at 100% -10%);
      -webkit-clip-path: circle(50px at 100% -10%);
      pointer-events: none;
      margin-bottom: 40px;
    }
    .nav-links li {
      margin: 20px 0;
    }
    .open {
      clip-path: circle(1200px at 1000% -10%);
      -webkit-clip-path: circle(1200px at 100% -10%);
      pointer-events: all;
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
</style>

<svelte:window bind:scrollY={y} />

{#if y < '300'}
  <nav in:fly={{ y: -100, duration: 400 }}>
    <div class="row logo-wrapper">
      <a href=".">
        <img src="logo.jpg" alt="logo" class="logo" />
        <img src="logo3.jpg" alt="logo" class="logo-small" />
      </a>
      <div class="hamburger" class:ham={open} on:click={() => (open = !open)} />
    </div>
    <div class="mainmenu">
      <ul class="nav-links container" class:open bind:this={navLinks}>
        <li class="px-5" rel="prefetch">
          <a href="#">DESPRE NOI</a>
          <ul class="dropdown">
            <li>
              <a rel="prefetch" href="despre-noi/shivani-center">
                Shivani Center
              </a>
            </li>
            <li>
              <a rel="prefetch" href="despre-noi/roxana-alecu">
                Psiholog Alecu Roxana
              </a>
            </li>
            <li>
              <a rel="prefetch" href="despre-noi/alexandra-tatu">
                Psiholog Tatu Alexandra
              </a>
            </li>
          </ul>
        </li>
        <li class="px-5" rel="prefetch">
          <a href="#">ARTICOLE</a>
          <ul class="dropdown">
            <li>
              <a rel="prefetch" href="articole/familie">Familie</a>
            </li>
            <li>
              <a rel="prefetch" href="articole/relatie-de-cuplu">
                Relatie de cuplu
              </a>
            </li>
            <li>
              <a rel="prefetch" href="articole/sanatate">Sanatate</a>
            </li>
            <li>
              <a rel="prefetch" href="articole/meditatie-yoga">
                Meditatie/Yoga
              </a>
            </li>
            <li>
              <a rel="prefetch" href="articole/dezvoltare-personala">
                Dezvoltare personala
              </a>
            </li>
            <li>
              <a rel="prefetch" href="articole/sexualitate">Sexualitate</a>
            </li>
            <li>
              <a rel="prefetch" href="articole/stiinta">Stiinta</a>
            </li>
          </ul>
        </li>
        <li class="px-5" rel="prefetch">
          <a href="#">SERVICII</a>
          <ul class="dropdown">
            <li>
              <a rel="prefetch" href="servicii/consiliere-psihologica">
                Consiliere psihologica
              </a>
            </li>
            <li>
              <a rel="prefetch" href="servicii/psihoterapie">Psihoterapie</a>
            </li>
            <li>
              <a rel="prefetch" href="servicii/meditatie">Meditatie</a>
            </li>
            <li>
              <a rel="prefetch" href="servicii/dezvoltare-personala">
                Dezvoltare personala
              </a>
            </li>
            <li>
              <a rel="prefetch" href="servicii/psihoeducatie">Psihoeducatie</a>
            </li>
            <li>
              <a rel="prefetch" href="servicii/workshop">Workshop-uri</a>
            </li>
            <li>
              <a rel="prefetch" href="servicii/art-therapy">Art-therapy</a>
            </li>
            <li>
              <a rel="prefetch" href="servicii/consiliere-vocationala">
                Consiliere vocationala
              </a>
            </li>
          </ul>
        </li>
        <li class="px-5" rel="prefetch">
          <a
            rel="prefetch"
            class:selected={segment === 'evenimente'}
            href="evenimente">
            EVENIMENTE
          </a>
        </li>
        <li class="px-5" rel="prefetch">
          <a rel="prefetch" class:selected={segment === 'blog'} href="blog">
            BLOG
          </a>
        </li>
        <li class="px-5" rel="prefetch">
          <a
            rel="prefetch"
            class:selected={segment === 'contact'}
            href="contact">
            CONTACT
          </a>
        </li>
      </ul>
    </div>
  </nav>
{:else}
  <nav in:fly={{ y: -100, duration: 1500 }}>
    <div class="hamburger" on:click={() => (open = !open)}>
      <div class="line" />
      <div class="line" />
      <div class="line" />
    </div>
    <div class="mainmenu">
      <ul class="nav-links container p-0" class:open bind:this={navLinks}>
        <li class="px-5" rel="prefetch">
          <a href="#">DESPRE NOI</a>
          <ul class="dropdown">
            <li>
              <a rel="prefetch" href="despre-noi/shivani-center">
                Shivani Center
              </a>
            </li>
            <li>
              <a rel="prefetch" href="despre-noi/roxana-alecu">
                Psiholog Alecu Roxana
              </a>
            </li>
            <li>
              <a rel="prefetch" href="despre-noi/alexandra-tatu">
                Psiholog Tatu Alexandra
              </a>
            </li>
          </ul>
        </li>
        <li class="px-5" rel="prefetch">
          <a href="#">ARTICOLE</a>
          <ul class="dropdown">
            <li>
              <a rel="prefetch" href="articole/familie">Familie</a>
            </li>
            <li>
              <a rel="prefetch" href="articole/relatie-de-cuplu">
                Relatie de cuplu
              </a>
            </li>
            <li>
              <a rel="prefetch" href="articole/sanatate">Sanatate</a>
            </li>
            <li>
              <a rel="prefetch" href="articole/meditatie-yoga">
                Meditatie/Yoga
              </a>
            </li>
            <li>
              <a rel="prefetch" href="articole/dezvoltare-personala">
                Dezvoltare personala
              </a>
            </li>
            <li>
              <a rel="prefetch" href="articole/sexualitate">Sexualitate</a>
            </li>
            <li>
              <a rel="prefetch" href="articole/stiinta">Stiinta</a>
            </li>
          </ul>
        </li>
        <li class="px-5" rel="prefetch">
          <a href="#">SERVICII</a>
          <ul class="dropdown">
            <li>
              <a rel="prefetch" href="servicii/consiliere-psihologica">
                Consiliere psihologica
              </a>
            </li>
            <li>
              <a rel="prefetch" href="servicii/psihoterapie">Psihoterapie</a>
            </li>
            <li>
              <a rel="prefetch" href="servicii/meditatie">Meditatie</a>
            </li>
            <li>
              <a rel="prefetch" href="servicii/dezvoltare-personala">
                Dezvoltare personala
              </a>
            </li>
            <li>
              <a rel="prefetch" href="servicii/psihoeducatie">Psihoeducatie</a>
            </li>
            <li>
              <a rel="prefetch" href="servicii/workshop">Workshop-uri</a>
            </li>
            <li>
              <a rel="prefetch" href="servicii/art-therapy">Art-therapy</a>
            </li>
            <li>
              <a rel="prefetch" href="servicii/consiliere-vocationala">
                Consiliere vocationala
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href=".">
            <img src="logo-small-2.jpg" alt="logo" width="60" height="70" />
          </a>
        </li>
        <li class="px-5" rel="prefetch">
          <a
            rel="prefetch"
            class:selected={segment === 'evenimente'}
            href="evenimente">
            EVENIMENTE
          </a>
        </li>
        <li rel="prefetch" class="px-5">
          <a class:selected={segment === 'blog'} href="blog">BLOG</a>
        </li>
        <li rel="prefetch" class="px-5">
          <a class:selected={segment === 'contact'} href="contact">CONTACT</a>
        </li>
      </ul>
    </div>
  </nav>
{/if}
