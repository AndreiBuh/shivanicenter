<script>
  import Heading from "../../UI/Heading.svelte";

  let services = [
    {
      id: 1,
      title: "Consiliere psihologică",
      icon: "brain.svg",
      url: "consiliere-psihologica",
      content:
        "Consilierea psihologică este o intervenție psihologică în care o persoană specializată oferă ajutor, la cerere, persoanelor aflate într-o perioadă dificilă din viața lor."
    },
    {
      id: "2",
      title: "Psihoterapie",
      icon: "mindset.svg",
      content:
        "Psihoterapia pune accent pe profunzimea trăirilor şi gândurilor, acceptarea acestora şi întelegerea lor, cu scopul de a trece peste comportamente disfuncţionale.",
      url: "psihoterapie"
    },

    {
      id: "3",
      title: "Meditație",
      icon: "yoga.svg",
      content:
        "Nu există o tehnică corectă sau greșită de meditație, fiecare alege ce funcționează mai bine pentru el. Important este să nu renunțăm când în demersul nostru apar capcanele minții.",
      url: "meditatie"
    },
    {
      id: "4",
      title: "Dezvoltare personală",
      icon: "flower.svg",
      content:
        "A te bucura de lucrurile simple și a simți compasiune față de toate ființele înseamnă dezvoltare personală. Viața nu înseamnă doar a ști, ci și a simți!",
      url: "dezvoltare-personala"
    },
    {
      id: "5",
      title: "Psihoeducație",
      icon: "mental.svg",
      content:
        "Psihoeducația oferă oamenilor condiții de sănătate mintală, informații despre cauzele, simptomele, prognosticul și tratamentele afecțiunii lor diagnosticate.",
      url: "psihoeducatie"
    },
    {
      id: "6",
      title: "Workshop",
      icon: "workshop.svg",
      content:
        "Workshop-urile oferă o plajă largă de teme de interes cum ar fi cele legate de cuplu, familie şi copil, legături între emoţii-corp-gânduri, depăşirea unor evenimente dificile.",
      url: "workshop"
    },
    {
      id: "7",
      title: "Art-therapy",
      icon: "paint.svg",
      content:
        "Arta eliberează omul de stresul celorlalte activităţi, schimbă anumite pattern-uri de gândire şi comportament, ajută persoana să intre în contact cu propriile emoţii şi nevoi.",
      url: "art-therapy"
    },
    {
      id: "8",
      title: "Consiliere vocațională",
      icon: "speaker.svg",
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

  img {
    width: 25%;
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
    line-height: 21px;
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

  .btn:not(:disabled):not(.disabled) {
    cursor: pointer;
  }
  .btn {
    border: 1px solid white !important;
    color: color;
    border-radius: 6px;
    font-size: 12px;
    font-family: var(--font-main);
    letter-spacing: 3px;
  }

  .btn:hover {
    color: white;
    background: #444c54 !important;
  }

  @media screen and (max-width: 768px) {
    .card {
      box-shadow: 3px 3px 3px 3px #222736;
    }

    .container {
      margin-top: 0 !important;
    }

    img {
      width: 15%;
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
                <img src="/images/flaticon/{icon}" alt={icon} />
                <h4>{title}</h4>
                <p>{content}</p>
                <div class="text-center mt-3">
                  <button
                    class="btn btn-outline py-2 px-4"
                    aria-label="Citește mai mult">
                    <span class="text-white">Citește</span>
                  </button>
                </div>
              </div>
            </a>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
