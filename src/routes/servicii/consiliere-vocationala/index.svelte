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
  <title>Consiliere vocationala</title>
</svelte:head>
<div class="container">
  <div class="card p-2 p-md-5 mt-3">
    <h2
      class="service-title mb-4 pt-md-0 text-center"
      in:fly={{ x: -200, duration: 2000 }}>
      Consiliere vocationala
      <span class="text-elegant font-weight-bold">.</span>
    </h2>
    <div class="text-center" in:fade={{ duration: 2000 }}>
      <img
        src="images/services/consiliere-vocationala1.jpg"
        alt="consiliere vocationala"
        class="img-top img-fluid rounded" />
    </div>
    <div class="p-2 mt-3">
      <p class="paragraph-text">
        Într-o societate grăbită şi în permanentă schimbare, serviciile
        psihologilor s-au extins şi s-au dezvoltat în funcţie de noile nevoi ale
        oamenilor. Un astfel de serviciu este
        <span class="text-elegant font-weight-bold">
          consilierea vocaţională
        </span>
        .
      </p>
      <p class="paragraph-text">
        Aşteptările, perspectivele, chiar şi conceptul de satisfacţie la locul
        de muncă, s-au schimbat major în ultimii ani. Apariţia noilor locuri de
        muncă, dezvoltarea tehnologiei şi uşurinţa prin care avem acces la
        informaţie, a determinat schimbări frecvente ale acestor nevoi, diferite
        la fiecare om în parte.
      </p>
      <p class="paragraph-text">
        Consilierea vocaţională pune accent şi pe pasiunile, curiozităţile,
        deschiderea oamenilor, nu doar pe căutarea unui post – se doreşte ca
        acest post să fie strâns legat de acele pasiuni şi interese.
      </p>
      <p class="paragraph-text">
        Funcțiile procesului de consiliere vocațională - funcții prezente în
        formarea unor strategii realiste de opțiuni profesionale:
      </p>
      <p class="paragraph-text">
        1. Funcția cognitivă se materializează în procesul cunoașterii și
        autocunoașterii potențialului de care dispunem la un moment dat:
      </p>
      <ul class="px-3 text-white">
        <li class="paragraph-list-items">
          se oferă informații relevante despre nivelul de dezvoltare a
          aptitudinilor, despre structura intereselor și valorilor personale
        </li>
        <li class="paragraph-list-items">
          cunoașterea tehnicilor și strategiilor de căutare a unui loc de muncă:
          anunțuri online, ofertele agențiilor de specialitate, târguri de
          joburi etc.
        </li>
        <li class="paragraph-list-items">
          cunoașterea structurii și dinamicii pieței muncii
        </li>
      </ul>
      <p class="paragraph-text">
        2. Funcția formativă și de dezvoltare personală - dezvoltarea stimei de
        sine, încredere în forțele proprii, dezvoltarea abilităților sociale
      </p>
      <p class="paragraph-text">
        3. Funcția de inițiere și reglare ale comportamentului decizional -
        analiza competențelor și independența în luarea deciziilor
      </p>
      <p class="paragraph-text">
        4. Funcția de planificare a carierei pe termen mediu și lung
      </p>
      <p class="paragraph-text">
        5. Funcția de reabilitare, reorientare și reconversie profesională în
        situații de criză economică sau a scăderii capacității de muncă.
        Adoptarea unor măsuri personale de monitorizare a schimbărilor survenite
        pe piața muncii și elaborarea unor planuri personale a propriei cariere,
        în acord cu modificările capacității de muncă.
      </p>

      <p class="paragraph-text">
        Procesul de consiliere vocaţională încearcă să răspundă la întrebări
        precum:
      </p>
      <ul class="px-3 text-white">
        <li class="paragraph-list-items">
          De ce suntem atraşi de o anumită profesie?
        </li>
        <li class="paragraph-list-items">
          Cât de realistă e alegerea noastră?
        </li>
        <li class="paragraph-list-items">
          Câte șanse avem să câștigăm un post?
        </li>
        <li class="paragraph-list-items">
          Cum realizăm că suntem cea mai potrivită persoană pentru un anumit
          job?
        </li>
        <li class="paragraph-list-items">
          Cum aflăm dacă vom face față solicitărilor unei profesii?
        </li>
      </ul>
      <p class="paragraph-text">
        Consilierea vocaţională este activitatea prin care clientul primeşte
        sprijin precum:
      </p>
      <ul class="px-3 text-white">
        <li class="paragraph-list-items">Să se cunoască mai bine pe sine</li>
        <li class="paragraph-list-items">
          Să înțeleagă lumea muncii, piață muncii
        </li>
        <li class="paragraph-list-items">
          Să descopere şi să realizeze managementul eficient al abilităților
          pentru carieră
        </li>
        <li class="paragraph-list-items">
          Să aleagă sau nu o profesie corespunzătoare aspirațiilor, valorilor,
          intereselor și aptitudinilor sale
        </li>
        <li class="paragraph-list-items">
          Unul dintre obiectivele importante ale cosilierii vocaționale este
          adaptarea flexibilă și eficientă a individului la specificul
          activitaţii de muncă
        </li>
      </ul>

    </div>
  </div>
</div>
