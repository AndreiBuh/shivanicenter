<script>
  import { onMount, onDestroy } from "svelte";
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
    open1 = false;
    open2 = false;
    open3 = false;
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

  li {
    list-style: none;
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

  .nav-transparent {
    background: rgba(34, 39, 54, 0.95);
  }
  .nav-links {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-links li a {
    color: #fff;
    font-size: 18px;
    font-family: var(--font-main), sans-serif;
    -webkit-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }

  .logo-title {
    font-family: "Cormorant SC", serif;
    letter-spacing: 5px;
    font-size: 26px;
    color: #fff;
  }

  .logo-subtitle {
    font-size: 10px;
    letter-spacing: 4px;
    color: #dfa974;
    font-family: "Averta", sans-serif;
    font-display: swap;
  }

  .mainmenu ul li {
    position: relative;
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    nav {
      height: 70px;
    }
    .nav-links {
      position: absolute;
      right: 0px;
      height: calc(100vh - 70px);
      top: 70px;
      background: #222736;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 60%;
      transform: translateX(100%);
      transition: transform 0.5s ease-in;
    }
    .nav-links li {
      margin: 15px 0;
      color: #fff;
    }

    .logo-mobile {
      height: 70px;
      display: flex;
      align-items: center;
    }

    .logo-mobile img {
      margin: 0 0 0 10px;
      width: 50px;
      height: 50px;
    }

    .logo-mobile .logo-title {
      font-size: 16px;
      letter-spacing: 3px;
    }

    .logo-mobile .logo-subtitle {
      font-size: 7px;
      letter-spacing: 2px;
    }

    .mobileMenu {
      transform: translateX(0%);
    }

    .image-scroll {
      display: none;
    }

    .logo-list-item {
      display: none;
    }

    .menu-hamburger {
      width: 40px;
      height: 35px;
      position: absolute;
      cursor: pointer;
      right: 5%;
      top: 50%;
      transform: translate(-5%, -50%);
      z-index: 9999;
    }

    .hamburger {
      position: absolute;
      cursor: pointer;
      right: 9%;
      top: 46%;
      background: #fff;
      width: 30px;
      height: 3px;
      border-radius: 5px;
    }
    .hamburger::before,
    .hamburger::after {
      content: "";
      position: absolute;
      width: 30px;
      height: 3px;
      background: #fff;
      border-radius: 5px;
    }

    .hamburger::before {
      top: -6px;
    }
    .hamburger::after {
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
      color: #dfa974 !important;
    }
    .inactive {
      display: none;
    }
  }

  @media screen and (min-width: 768px) {
    .mainmenu ul li:hover .dropdown {
      opacity: 1;
      visibility: visible;
    }

    .logo-mobile {
      display: none;
    }

    .mainmenu ul li .dropdown {
      position: absolute;
      left: -40px;
      top: 40px;
      width: 180px;
      background: #222736;
      z-index: 9;
      opacity: 0;
      visibility: hidden;
      -webkit-transition: all 0.3s;
      -o-transition: all 0.3s;
      transition: all 0.3s;
      -webkit-box-shadow: 0px 9px 15px rgba(25, 25, 26, 0.05);
      box-shadow: 0px 9px 15px rgba(25, 25, 26, 0.05);
    }

    .mainmenu ul li .dropdown li a {
      font-size: 14px;
      color: #fff;
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
{#if y < '400'}
  <nav in:fade={{ duration: 1000 }}>
    <a href=".">
      <div class="logo-mobile">
        <div>
          <img src="logo6-min.png" alt="logo" />
        </div>
        <div class="ml-2">
          <div class="logo-title">Shivani Center</div>
          <div class="logo-subtitle text-center">HOLISTIC PSYCHOLOGY</div>
        </div>
      </div>
    </a>
    <div class="menu-hamburger" on:click={toggleMobileMenu}>
      <div class="hamburger" class:ham={mobileMenu} />
    </div>
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
            <li>
              <a
                rel="prefetch"
                href="despre-noi/colaboratori"
                on:click={toggleMobileMenu}>
                Colaboratori
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
        <li class="logo-list-item mx-5 mt-3">
          <div
            class="logo-wrapper text-center"
            in:fly={{ y: -200, duration: 2000 }}>
            <a href="." aria-label="Pagina de start Shivani Center">
              <img
                src="logo6-min.png"
                alt="Shivani Center"
                class="logo"
                width="100"
                height="100" />
              <div class="logo-title">Shivani Center</div>
              <div class="logo-subtitle">HOLISTIC PSYCHOLOGY</div>
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
  <nav in:fly={{ y: -100, duration: 1500 }} class="nav-transparent">
    <a href=".">
      <div class="logo-mobile">
        <div>
          <img src="logo6-min.png" alt="logo" />
        </div>
        <div class="ml-2">
          <div class="logo-title">Shivani Center</div>
          <div class="logo-subtitle text-center">HOLISTIC PSYCHOLOGY</div>
        </div>
      </div>
    </a>
    <div class="menu-hamburger" on:click={toggleMobileMenu}>
      <div class="hamburger" class:ham={mobileMenu} />
    </div>
    <div class="mainmenu">
      <ul class="nav-links p-0" class:mobileMenu bind:this={navLinks}>
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
            <li>
              <a
                rel="prefetch"
                href="despre-noi/colaboratori"
                on:click={toggleMobileMenu}>
                Colaboratori
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
        <li class="mt-3 image-scroll">
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
