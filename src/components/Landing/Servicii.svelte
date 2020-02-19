<script>
  let services = [
    {
      id: 1,
      title: "Consiliere psihologica",
      icon: "flaticon-brain",
      url: "consiliere-psihologica",
      content:
        "Consilierea psihologică este o intervenție psihologică în care o persoană specializată oferă ajutor, la cerere, persoanelor aflate într-o perioadă dificilă din viața lor."
    },
    {
      id: "2",
      title: "Psihoterapie",
      icon: "flaticon-mindset",
      content:
        "Psihoterapia pune accent pe profunzimea trăirilor şi gândurilor, acceptarea acestora şi întelegerea lor, cu scopul de a trece peste dificultăţi, blocaje, comportamente disfuncţionale",
      url: "psihoterapie"
    },

    {
      id: "3",
      title: "Meditatie",
      icon: "flaticon-yoga",
      content:
        "Nu există o tehnică corectă sau gresită de meditatie, fiecare alege ce funcționează mai bine pentru el. Important este să nu renunțăm când în demersul nostru apar capcanele minții.",
      url: "meditatie"
    },
    {
      id: "4",
      title: "Dezvoltare personala",
      icon: "flaticon-flower",
      content:
        "A te bucura de lucrurile simple și a simți compasiune față de toate ființele înseamnă dezvoltare personală. Viața nu înseamnă doar a știi, ci și a simți!",
      url: "dezvoltare-personala"
    },
    {
      id: "5",
      title: "Psihoeducatie",
      icon: "flaticon-mental",
      content:
        "Psihoeducația oferă oamenilor condiții de sănătate mintală, informații despre cauzele, simptomele, prognosticul și tratamentele afecțiunii lor diagnosticate.",
      url: "psihoeducatie"
    },
    {
      id: "6",
      title: "Workshop",
      icon: "flaticon-workshop",
      content:
        "Workshop-urile oferă o plajă largă de teme de interes cum ar fi legate de cuplu, familie şi copil, legături între emoţii-corp-gânduri, depăşirea unor evenimente dificile.",
      url: "workshop"
    },
    {
      id: "7",
      title: "Art-therapy",
      icon: "flaticon-paint",
      content:
        "Arta eliberează omul de stresul celorlalte activităţi, schimbă anumite pattern-uri de gândire şi comportament, ajută persoana să intre în contact cu propriile emoţii şi nevoi.",
      url: "art-therapy"
    },
    {
      id: "8",
      title: "Consiliere vocationala",
      icon: "flaticon-speaker",
      content:
        "Consilierea vocaţională pune accent şi pe pasiunile, curiozităţile oamenilor, nu doar pe căutarea unui job – se doreşte ca acest job să fie strâns legat de acele pasiuni.",
      url: "consiliere-vocationala"
    }
  ];
</script>

<style>
  @font-face {
    font-family: "Flaticon";
    src: url("./Flaticon.eot");
    src: url("./Flaticon.eot?#iefix") format("embedded-opentype"),
      url("./Flaticon.woff2") format("woff2"),
      url("./Flaticon.woff") format("woff"),
      url("./Flaticon.ttf") format("truetype"),
      url("./Flaticon.svg#Flaticon") format("svg");
    font-weight: normal;
    font-style: normal;
  }

  @media screen and (-webkit-min-device-pixel-ratio: 0) {
    @font-face {
      font-family: "Flaticon";
      src: url("./Flaticon.svg#Flaticon") format("svg");
    }
  }

  [class^="flaticon-"]:before,
  [class*=" flaticon-"]:before,
  [class^="flaticon-"]:after,
  [class*=" flaticon-"]:after {
    font-family: Flaticon;
    font-size: 50px;
    font-style: normal;
    margin-left: 20px;
  }

  .flaticon-mindset:before {
    content: "\f103";
  }
  .flaticon-brain:before {
    content: "\f104";
  }
  .flaticon-workshop:before {
    content: "\f105";
  }
  .flaticon-flower:before {
    content: "\f106";
  }
  .flaticon-yoga:before {
    content: "\f107";
  }
  .flaticon-paint:before {
    content: "\f108";
  }
  .flaticon-mental:before {
    content: "\f109";
  }
  .flaticon-speaker:before {
    content: "\f10a";
  }

  .section-title {
    text-align: center;
    margin-bottom: 22px;
    font-family: "Arvo";
  }
  .section-title span {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
  }
  .services-section {
    padding-bottom: 60px;
  }
  .services-section .section-title {
    margin-bottom: 36px;
  }

  .service-item {
    text-align: center;
    padding: 30px 10px 18px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }

  a {
    text-decoration: none;
  }
  .service-item:hover {
    background: #dfa974;
  }
  .service-item:hover i {
    color: #ffffff;
  }
  .service-item:hover h4 {
    color: #ffffff;
  }
  .service-item:hover p {
    color: #ffffff;
  }
  .service-item i {
    display: inline-block;
    color: #fff;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }
  .service-item h4 {
    color: #19191a;
    font-size: 19px;
    margin-bottom: 15px;
    margin-top: 10px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }
  .service-item p {
    color: #707079;
    -webkit-transition: all 0.6s;
    -o-transition: all 0.6s;
    transition: all 0.6s;
    font-family: "Josefin Sans";
  }

  .title {
    font-size: 18px;
    color: #000000;
    margin-bottom: 0;
    margin-right: auto;
    font-family: "Special Elite", sans-serif;
    font-weight: 700;
  }
  .border-btm {
    border-bottom: 1px solid #cccccc;
  }

  .text-elegant {
    color: #dfa974;
  }

  h4 {
    font-family: "Oswald", sans-serif;
  }
</style>

<section class="services-section spad">
  <div class="container">
    <div class="row border-btm pb-2">
      <h5>
        <span class="text-elegant">.</span>
      </h5>
    </div>
    <div class="row mt-2">
      {#each services as { id, title, name, url, icon, content } (id)}
        <div class="col-xs-6 col-lg-3">
          <a rel="prefetch" href="servicii/{url}">
            <div class="service-item">
              <i class={icon} />
              <h4>{title}</h4>
              <p>{content}</p>
            </div>
          </a>
        </div>
      {/each}
    </div>
  </div>
</section>
