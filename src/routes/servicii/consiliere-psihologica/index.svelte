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
  <title>Consiliere psihologica</title>
</svelte:head>
<div class="container">
  <div class="card p-2 p-md-5 mt-3">
    <h2
      class="service-title mb-4 pt-md-0 text-center"
      in:fly={{ x: -200, duration: 2000 }}>
      Consiliere psihologică
      <span class="text-elegant font-weight-bold">.</span>
    </h2>
    <div class="service-image text-center" in:fade={{ duration: 2000 }}>
      <img
        src="images/services/consiliere-psihologica1.jpg"
        alt="consiliere psihologica"
        class="img-top img-fluid rounded" />
    </div>
    <div class="p-2 mt-3">
      <p class="paragraph-text">
        <span class="text-elegant font-weight-bold">
          Consilierea psihologică
        </span>
        este o intervenție psihologică în care o persoană specializată oferă
        ajutor, la cerere, persoanelor aflate într-o perioadă dificilă din viața
        lor. Aceștia se află într-un moment de criză, într-un impas, în ceea ce
        privește găsirea unor soluții la problemele cu care se confruntă pe plan
        personal sau professional.
      </p>
      <p class="paragraph-text">
        Asociația Britanică pentru Consiliere spune despre consilierea
        psihologică: “presupune existența unei persoane care are temporar sau
        permanent rolul de consilier și care oferă sau acceptă în mod explicit
        să acorde timp, atenție și respect uneia sau mai multor persoane, cu
        rolul temporar de client. Sarcina consilierii este de a oferi clientului
        oportunitatea de a explora, descoperi și clarifica moduri de a trăi
        valorificându-și resursele, ceea ce conduce la sentimentul de bine
        interior, îndreptându-se spre o cât mai bună existență.”
      </p>
      <p class="paragraph-text">
        Consilierea psihologică se adresează adulților, copiilor, adolescenților
        și vârstnicilor deopotrivă. Consilierea se realizează fie prin
        consiliere individuală, fie prin consiliere de grup, de exemplu în
        cadrul grupurilor de suport.
      </p>
      <p class="paragraph-text">
        Consilierea psihologică este similară psihoterapiei în multe privințe,
        însă există câteva distincții: după gradul de severitate al tuburării
        clientului - consilierea este indicată pentru prevenirea apariției
        tulburărilor psihologice și se adresează persoanelor cu dezechilibre
        ușoare ale personalității, în timp ce psihoterapia acoperă un spectru
        mai larg de intervenție, ce cuprinde afecțiuni majore ale
        personalității; după natura problemelor cu care vine clientul,
        consilierea este indicată pentru problemele interpersonale care se pot
        rezolva prin luarea unor decizii in armonie cu propriile nevoi, dorințe
        și motive; după durata, consilierea este mai scurtă (6-10 sedinte),în
        timp ce psihoterapia poate dura și câțiva ani.
      </p>

      <p class="paragraph-text">
        Metodele și tehnicile utilizate sunt comune psihoterapiei și
        consilierii. Orientarea terapeutică este cea care influențează pașii și
        etapele terapeutice. Scopul consilierii este de a îl face pe client să
        își folosească cât mai eficient resursele personale.
      </p>
      <p class="paragraph-text">
        La final, ceea ce-ți oferă consilierea este „să te ajute să te ajuți
        singur”, căci doar noi suntem cei care putem să ne schimbăm. Rolul
        nostru este de a vă ghida, de a merge împreună, de a fi acolo și de a vă
        ajută într-un mod activ să vă autodescoperiți.
      </p>

      <p class="mt-3 paragraph-text">
        Iată câteva dintre scopurile consilierii psihologice:
      </p>
      <ul class="ml-3">
        <li class="paragraph-list-items">
          Asumarea responsabilităților pentru deciziile luate
        </li>
        <li class="paragraph-list-items">
          Auto-cunoașterea și auto-descoperirea propriului potențial
        </li>
        <li class="paragraph-list-items">
          Folosirea eficientă a resurselor interioare
        </li>
        <li class="paragraph-list-items">
          Îmbunatățirea stării de sănătate fizică și psihică
        </li>
        <li class="paragraph-list-items">Stare de bine interioară</li>
        <li class="paragraph-list-items">Acceptarea de sine</li>
        <li class="paragraph-list-items">
          Clarificarea conflictelor interioare
        </li>
        <li class="paragraph-list-items">Creștere și dezvoltare personală</li>
      </ul>

      <p class="paragraph-text">
        Abordarea noastră este una umanist-experiențială, holistică, integrativă
        și transpersonală centrată pe analiză de simbol, auto-schimbare prin
        intermediul exercițiului provocator, improvizației și meditației
        creatoare cu suport art-terapeutic și expresiv.
      </p>
      <p class="paragraph-text">
        Metoda P.E.U. (psihoterapia experiențială a unificării) utilizează
        puterea transfiguratoare a metaforei și a resemnificării experienței
        trăite, reconectand Egoul cu Sinele și stimulând procesele de unificare
        și integrare interne și externe.
      </p>
      <p class="paragraph-text">
        Dacă și tu te regăsești în ceea ce am prezentat mai sus și îți dorești o
        mai bună claritate asupra vieții tale, te așteptăm cu drag la noi în
        cabinet.
      </p>
      <p class="paragraph-text">
        Mediul este unul cald, liniștit și relaxat, cu psihologi bine pregătiți,
        deschiși spre nevoile tale.
      </p>
      <p class="paragraph-text">
        Pentru mai multe informații și întrebări ne puteți
        <a href="/contact">
          <span class="text-elegant font-weight-bold">contacta</span>
        </a>
        .
      </p>
    </div>
  </div>
</div>
