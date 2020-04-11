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
  <title>Psihoeducatie</title>
</svelte:head>

<div class="container">
  <div class="card p-2 p-md-5 mt-3">
    <h2
      class="service-title mb-4 pt-md-0 text-center"
      in:fly={{ x: -200, duration: 2000 }}>
      Psihoeducație
      <span class="text-elegant font-weight-bold">.</span>
    </h2>
    <div class="service-image text-center" in:fade={{ duration: 2000 }}>
      <img
        src="images/services/psihoeducatie1.jpg"
        alt="psihoeducatie"
        class="img-top img-fluid rounded" />
    </div>
    <div class="p-2 mt-3">
      <p class="paragraph-text">
        <span class="text-elegant font-weight-bold">Psihoeducația</span>
        a apărut în urmă cu peste 100 de ani, dar termenul a fost popularizat în
        1980 de către C.M. Anderson. Psihoeducația îmbină psihoterapia și
        educația, cu scopul de a ajuta oamenii să înțeleagă și să învețe cum să
        gestioneze anumite situații, cu care se confruntă în viața cotidiană.
      </p>
      <p class="paragraph-text">
        Ea poate fi folosită într-o arie largă de situații, atât în problematici
        de natură emoțională, psihică, cât și în situații profesionale sau în
        instituții de învățământ. Psihoeducația se centrează pe informarea
        oamenilor, ajutându-i să-și îmbunătățească abilitățile de comunicare, să
        devină mai conștienți de adevărata cauză a problemelor și să cunoască
        modul de funcționare al lumii în care trăim.
      </p>
      <p class="paragraph-text">
        <em>
          „Dacă îi dai cuiva un pește, îl hrănești numai o dată. Dacă îl inveți
          să pescuiască, se poate hrăni singur pentru totdeauna.”
        </em>
        (din înțelepciunea orientală)
      </p>
      <p class="paragraph-text">
        Psihoeducația s-a dovedit foarte eficientă în tratamentul tulburărilor
        de sănătate mintală. Ea oferă oamenilor condiții de sănătate mintală,
        informații despre cauzele, simptomele, prognosticul și tratamentele
        afecțiunilor diagnosticate.
      </p>
      <p class="paragraph-text">
        Dacă te angajezi în psihoeducație ca elev, poți afla la ce să te
        aștepți, ce poți face și cum să îți îmbunătățești starea. Lipsa
        informațiilor despre diverse aspecte ale vieții poate fi un factor al
        problemelor personale cu care se confruntă oamenii.
      </p>
      <p class="paragraph-text">
        <strong>Cine facilitează psihoeducația?</strong>
      </p>
      <div class="row">
        <div class="col-md-7">
          <p class="paragraph-text">
            Mai multe tipuri diferite de profesioniști din domeniul sănătății
            mintale pot oferi psihoeducație:
          </p>
          <ul class="ml-3">
            <li class="paragraph-list-items">Terapeuţi</li>
            <li class="paragraph-list-items">Psihiatri</li>
            <li class="paragraph-list-items">
              Coordonatori ai grupurilor de suport
            </li>
            <li class="paragraph-list-items">Specialiști în psihoeducație</li>
          </ul>
        </div>
        <div class="col-md-5">
          <img
            src="images/services/psihoeducatie2.png"
            alt="psihoeducatie"
            class="img-middle img-fluid rounded" />
        </div>
      </div>
      <p class="paragraph-text">
        <strong>Iată câteva exemple ce pot constitui psihoeducație:</strong>
      </p>
      <ul class="p-3">
        <li class="paragraph-list-items">
          Un terapeut care explică unei persoane aflate în terapie modalitățile
          care pot avea un impact asupra stării de sănătate mintală
        </li>
        <li class="paragraph-list-items">
          Un psihiatru care descrie modul în care un medicament prescris poate
          contracara simptomele unei afecțiuni de sănătate mintală
        </li>
        <li class="paragraph-list-items">
          Un spital psihiatric care oferă sprijin și educație membrilor familiei
          celor primiți în tratament
        </li>
        <li class="paragraph-list-items">
          Clasele formale destinate educării populației, atât asupra condițiilor
          specifice de sănătate mintală, cât și asupra sănătății mintale în
          general
        </li>
        <li class="paragraph-list-items">
          Asistență în managementul comportamentului în clasă, pentru studenții
          diagnosticați cu probleme de comportament
        </li>
        <li class="paragraph-list-items">
          Grupuri de ajutor și de sprijin concepute pentru a încuraja persoanele
          diagnosticate cu probleme de sănătate mintală să împărtășească
          strategii și informații unul cu altul
        </li>
      </ul>
    </div>
  </div>
</div>
