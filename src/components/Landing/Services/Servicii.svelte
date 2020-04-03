<script>
  import Heading from "../../UI/Heading.svelte";

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
        "Psihoterapia pune accent pe profunzimea trăirilor şi gândurilor, acceptarea acestora şi întelegerea lor, cu scopul de a trece peste comportamente disfuncţionale.",
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

  .service-item i {
    display: inline-block;
    color: #dfa974;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }
  .service-item h4 {
    color: #fff;
    font-size: 19px;
    margin-bottom: 15px;
    margin-top: 10px;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }
  .service-item p {
    color: #b5b5bf;
    font-family: var(--font-text), sans-serif;
    font-size: 17px;
  }

  .title {
    font-size: 18px;
    color: #fff;
    margin-bottom: 0;
    margin-right: auto;
    font-family: var(--font-main), sans-serif;
    font-weight: 700;
  }

  h4 {
    font-family: var(--font-main), sans-serif;
  }

  .card {
    background-color: #222736;
    border-radius: 10px;
    box-shadow: -0.5rem 0 0.5rem #222736;
    transition: 0.4s ease-out;
  }

  .card:hover {
    transform: translateY(-5px);
    transition: 0.4s ease-out;
  }

  .card:hover ~ .card {
    position: relative;
    transition: 0.4s ease-out;
  }

  @media screen and (max-width: 768px) {
    .card {
      box-shadow: 3px 3px 3px 3px #222736;
    }

    .container {
      margin-top: 0 !important;
    }
  }
</style>

<section class="services-section">
  <div class="container">
    <Heading title="Servicii" />
    <div class="row">
      {#each services as { id, title, name, url, icon, content } (id)}
        <div class="col-xs-6 col-lg-3">
          <div class="card mb-3 p-3">
            <a rel="prefetch" href="servicii/{url}">
              <div class="service-item">
                <i class={icon} />
                <h4>{title}</h4>
                <p>{content}</p>
              </div>
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
