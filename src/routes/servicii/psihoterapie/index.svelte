<script>
  import { fade, fly } from "svelte/transition";
</script>

<style>
  .card {
    background-color: #222736;
    border-radius: 10px;
    box-shadow: -0.5rem 0 0.5rem #222736;
    transition: 0.4s ease-out;
  }

  a {
    text-decoration: none;
  }
</style>

<svelte:head>
  <title>Psihoterapie</title>
</svelte:head>

<div class="container">
  <div class="card p-2 p-md-5 mt-3">
    <h2
      class="service-title mb-4 pt-md-0 text-center"
      in:fly={{ x: -200, duration: 2000 }}>
      Psihoterapie
      <span class="text-elegant font-weight-bold">.</span>
    </h2>
    <div class="text-center" in:fade={{ duration: 2000 }}>
      <img
        src="images/services/psihoterapie1.jpg"
        alt="psihoterapie"
        class="img-top img-fluid rounded" />
    </div>
    <div class="p-2 mt-5">
      <p class="paragraph-text">
        <span class="text-elegant font-weight-bold">Psihoterapia</span>
         este un domeniu interdisciplinar, situat la graniţa dintre medicină şi
        psihologie. Psihoterapia este o modalitate de tratament cuprinzător,
        deliberat şi planificat, prin mijloace şi metodologii specifice, având
        un cadru clinic şi teoretic.
      </p>
      <p class="paragraph-text">
        Aceasta este centrată pe reducerea sau eliminarea unor simptome,
        tulburări mintale sau stări de suferinţă psihosociale, psihosomatice şi
        comportamental disfuncţionale. (Conform definiţiei date de Federaţia
        Română de Psihoterapie).
      </p>
      <p class="paragraph-text">
        Psihoterapia oferă servicii specifice fiecărei categorii de vârstă:
        copii, adolescenţi, tineri, adulți, vârstnici. De aceea, este esenţială
        şi poate ajuta la înţelegerea unor aspecte/situații din viaţa omului,
        fiind mult mai complexă faţă de simplele sfaturi din partea altora.
      </p>
      <p class="paragraph-text">
        Ea pune accent pe profunzimea trăirilor şi a gândurilor, acceptarea
        acestora şi înțelegerea lor cu scopul de a trece peste dificultăţi,
        blocaje, comportamente disfuncţionale. Familia şi prietenii reprezintă
        un suport esenţial în dezvoltarea noastră, dar parcurgerea acestui
        proces cu sprijinul unui specialist, trece dincolo de acele simple
        sfaturi şi păreri.
      </p>
      <p class="paragraph-text">
        Oricine are momente de confuzie şi nelinişte, dar dacă frecvenţa şi
        intensitatea lor creşte, atunci lucrul cu un terapeut este soluţia
        potrivită. Odată cu aceste stări, apariţia gândurilor negative şi
        frecvenţa acestora duce la dezechilibre emoţionale, îngreunând anumite
        comportamente (cum ar fi cele de la locul de muncă, de învăţare, de
        comunicare şi socializare).
      </p>
      <p class="paragraph-text">
        Prin studiile şi formările sale, psihoterapeutul are cunoştinţele şi
        experienţa necesară pentru a realiza o relaţie terapeutică bazată pe
        respect, empatie, răbdare şi acceptare. Încă de la primul contact,
        psihoterapeutul va avea o atitudine primitoare şi caldă, fără a da
        impresia de interviu formal (cum uneori se crede despre terapie).
      </p>
      <p class="paragraph-text">
        Discuţiile purtate vor fi libere, clientul având ocazia să vorbească
        despre ceea ce îl frământă, ce ar vrea să înţeleagă despre el şi mediul
        său, despre anumite comportamente, emoţii, aşteptări.
      </p>
      <p class="paragraph-text">
        Totodată, pe lângă aceste discuţii, anumite tehnici terapeutice au rolul
        de a da o nouă perspectivă asupra unor situaţii despre care clientul nu
        ştie să spună prea multe.
      </p>
      <p class="paragraph-text">
        Prin tehnicile de art-therapy (desene, colaje, lucrul cu lutul,
        meditaţii creative etc.) şi cele de drama-therapy, se pot îmbunătăți
        creativitatea, empatia, spontaneitatea, de care clientul are nevoie ca
        să îşi depăşească blocajele şi momentele de confuzie.
      </p>
      <p class="paragraph-text">
        Uneori confuzia este atât de mare, încât nici prin propriile vorbe
        clientul, nu reuşeşte să înţeleagă ce se întâmplă. Sarcina terapeutului
        este să îl susţină într-un proces de auto-cunoaştere şi de explorare a
        lumii sale interioare.
      </p>
      <p class="paragraph-text">
        Ca și abordare,
        <a href="/despre-noi/shivani-center">
          <span class="text-elegant font-weight-bold">Shivani Center</span>
        </a>
        are psihologi formați în psihoterapie experienţială a unificării.
      </p>
      <p class="paragraph-text">
        „P.E.U este o metodă holistică, centrată pe analiza de simbol,
        dezvoltare personală şi autoschimbare prin intermediul exerciţiului
        provocator, improvizaţiei şi meditaţiei creatoare cu suport
        art-terapeutic şi expresiv. Utilizează puterea transfiguratoare a
        metaforei şi a resemnificării experienţei trăite, reconectând Egoul cu
        Sinele şi stimulând procesele de unificare, integrare şi transgresare,
        interne şi externe. Este o terapie individuală şi colectivă (de grup, de
        familie şi organizaţională), atât pentru adulţi, cît şi pentru copii şi
        adolescenţi. Plasează în centrul preocupărilor dezvoltarea şi
        transformarea umană.”
      </p>
    </div>
  </div>
</div>
