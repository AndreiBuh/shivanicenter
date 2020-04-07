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
      <picture>
        <source srcset="images/services/psihoterapie1.webp" type="image/webp" />
        <source srcset="images/services/psihoterapie1.jpg" type="image/jpeg" />
        <img
          src="images/services/psihoterapie1.jpg"
          alt="psihoterapie"
          class="img-top img-fluid rounded" />
      </picture>
    </div>
    <div class="p-2 mt-3">
      <p class="paragraph-text">
        <span class="text-elegant font-weight-bold">Psihoterapia</span>
         este un domeniu interdisciplinar, situat la graniţa dintre medicină şi
        psihologie. Psihoterapia este o modalitate de tratament cuprinzător,
        deliberat şi planificat, prin mijloace şi metodologii specifice, având
        un cadru clinic şi teoretic, centrată pe reducerea sau eliminarea unor
        simptome, tulburări mintale sau stări de suferinţă psihosociale şi/sau
        psihosomatice şi comportamentale disfuncţionale. (Conform definiţiei
        date de Federaţia Română de Psihoterapie).
      </p>
      <blockquote>
        <em>
          Psihoterapia oferă servicii specifice fiecărei categorii de vârstă:
          copii, adolescenţi, tineri, adulti, varstnici. De aceea psihoterapia
          este esenţială şi poate ajuta înţelegerea unor aspecte/situatii din
          viaţa omului, fiind mult mai complexă faţă de simplele sfaturi din
          partea altora.
        </em>
      </blockquote>
      <p class="paragraph-text">
        Ea pune accent pe profunzimea trăirilor şi gândurilor, acceptarea
        acestora şi întelegerea lor cu scopul de a trece peste dificultăţi,
        blocaje, comportamente disfuncţionale. Familia şi prietenii reprezintă
        un suport esenţial în dezvoltarea noastră, dar lucrul cu un specialist
        trece dincolo de acele simple sfaturi şi păreri.
      </p>
      <p class="paragraph-text">
        Oricine are momente de confuzie şi nelinişte, dar dacă frecvenţa şi
        intensitatea lor creşte, atunci lucrul cu un terapeut este soluţia
        potrivită. Odată cu aceste stări, apariţia gândurilor negative şi
        frecvenţa acestora duce la dezechilibre emoţionale, îngreunând anumite
        comportamente (cum ar fi cele la locul de muncă, de învăţare, de
        comunicare şi socializare).
      </p>
      <p class="paragraph-text">
        Prin studiile şi formările sale, psihoterapeutul are cunoştiinţele şi
        experienţa necesară pentru a realiza o relaţie terapeutică bazată pe
        respect, empatie, răbdare şi acceptare. Încă de la primul contact,
        psihoterapeutul va avea o atitudine primitoare şi caldă, fără a da
        impresia de interviu formal (cum uneori se crede despre terapie).
        Discuţiile purtate vor fi libere, clientul având ocazia să vorbească
        despre ceea ce îl frământă, ce ar vrea să înţeleagă despre el şi mediul
        său, despre anumite comportamente, emoţii, aşteptări.
      </p>
      <p class="paragraph-text">
        Totodată, pe lângă aceste discuţii, anumite tehnici terapeutice au rolul
        de a da o nouă perspectivă asupra unor situaţii despre care clientul nu
        ştie să spună prea multe. Prin tehnicile de art-therapy (desene, colaje,
        lucrul cu lutul, meditaţii creative, etc.) şi cele de drama-therapy, se
        poate lucra creativitatea, empatia, spontaneitatea de care clientul
        poate are nevoie să îşi depăşească blocajele şi momentele de confuzie.
      </p>
      <p class="paragraph-text">
        Uneori confuzia este atât de mare, încât nici prin propriile vorbe
        clientul nu reuşeşte să înţeleagă ce se întâmplă. Sarcina terapeutului
        este să îl susţină într-un proces de auto-cunoaştere şi de explorare a
        lumii sale interioare.
      </p>
      <p class="paragraph-text">
        Ca si abordare, Shivani Center are psihologi formați în psihoterapie
        experienţială a unificării. „P.E.U este o metodă holistică, centrată pe
        analiza de simbol, dezvoltare personală şi autoschimbare prin
        intermediul exerciţiului provocator, improvizaţiei şi meditaţiei
        creatoare cu suport artterapeutic şi expresiv. Utilizează puterea
        transfiguratoare a metaforei şi a resemnificării experienţei trăite,
        reconectând Egoul cu Sinele şi stimulând procesele de unificare,
        integrare şi transgresare, interne şi externe. Este o terapie
        individuală şi colectivă (de grup, de familie şi organizaţională), atât
        pentru adulţi, cît şi pentru copii şi adolescenţi. Plasează în centrul
        preocupărilor dezvoltarea şi transformarea umană.”
      </p>
    </div>
    <blockquote class="mt-4">
      <em>
        Uneori confuzia este atât de mare, încât nici prin propriile vorbe
        clientul nu reuşeşte să înţeleagă ce se întâmplă. Sarcina terapeutului
        este să îl susţină într-un proces de auto-cunoaştere şi de explorare a
        lumii sale interioare.
      </em>
    </blockquote>
  </div>
</div>
