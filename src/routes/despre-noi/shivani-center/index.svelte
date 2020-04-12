<script>
  import { fade, fly } from "svelte/transition";
  import TestimonialList from "../../../components/About/TestimonialList.svelte";
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
  <title>Despre Shivani Center</title>
</svelte:head>
<div class="container">
  <div class="card p-2 p-md-5 mt-3">
    <h2
      class="service-title my-4 pt-md-0 text-center"
      in:fly={{ x: -200, duration: 2000 }}>
      Shivani Center
      <span class="text-elegant font-weight-bold">.</span>
    </h2>
    <div class="text-center" in:fade={{ duration: 2000 }}>
      <img
        src="images/people/center.jpg"
        alt="shivani center"
        class="img-top img-fluid rounded" />
    </div>
    <div class="p-2 mt-3">
      <p class="paragraph-text">
        <a href="despre-noi/shivani-center" class="links">
          <span class="text-elegant font-weight-bold">Shivani Center</span>
        </a>
        oferă servicii de consiliere psihologică centrată pe
        adult-cuplu-familie-copil, art-terapie, consiliere pentru dezvoltare
        personală, interpersonală, transpersonală și workshop-uri tematice.
      </p>
      <p class="paragraph-text">
        Viziunea noastră holistică îmbină în mod organic metodele de vindecare
        orientale cu psihoterapiile suportive occidentale. Vă invit să explorăm
        împreună conexiunea dintre minte, corp și spirit.
      </p>
      <p class="paragraph-text">
        Shivani Center consideră că bunăstarea psihologică a oamenilor este
        strâns legată de modul în care evoluăm ca societate. Ne dorim să vă
        oferim servicii de cea mai înaltă calitate pentru a putea crește
        împreună atat pe plan intrapersonal cât și în relațiile interumane.
      </p>
      <p class="paragraph-text">
        Centrul nostru are o abordare psihologică modernă, care îmbină în mod
        organic metodele de vindecare orientale cu psihoterapiile suportive
        occidentale.
      </p>
      <p class="paragraph-text">
        Nelson Mandela spunea ca
        <em>
          „Educaţia este cea mai puternică armă pe care voi o puteţi folosi
          pentru a schimba lumea.”
        </em>
      </p>
      <p class="paragraph-text">
        Cu toții ne dorim să schimbăm lumea, dar asta pornește de la fiecare
        dintre noi. Doar aici și acum putem acționa să ne educăm mintea spre a
        deveni cea mai bună variantă a noastră.
      </p>
      <p class="paragraph-text">
        Orientarea noastră în psihoterapie experiențială urmează un proces
        terapeutic ce oferă sansa fiecăruia de a ieși singur la lumină, de a
        găsi soluții, de a se accepta pe sine, de a se ierta, de a se
        responsabiliza să-și schimbe perspectiva asupra lucrurilor și asupra lui
        însuși. El experimentează bucuria de a evolua conștient, de a-și
        descoperi singur conflictele interioare, vulnerabilitățile și blocajele
        ce l-au oprit până acum să fie în armonie cu propria persoană și cu
        ceilalți.
      </p>
      <p class="paragraph-text">
        Acest tip de proces oferă posibilitatea clienților noștri să își
        dezvolte potențialul de adaptare creativ și să își deblocheze spontan
        propriile resurse, beneficiind de insight-urile autoexplorării asistate,
        într-un mediu relaxant și sigur.*
      </p>
      <p class="paragraph-text">
        Centrul este fondat în anul 2019, la inițiativa psihologului
        <a href="despre-noi/roxana-alecu" class="links">
          <span class="text-elegant font-weight-bold">Alecu F. Roxana</span>
        </a>
        în colaborare cu psihologul
        <a href="despre-noi/alexandra-tatu" class="links">
          <span class="text-elegant font-weight-bold">Tatu Alexandra</span>
        </a>
        , pornind din dorința de a îmbina metode variate de psihoterapie și
        practici străvechi spirituale, mereu redescoperite, re-asimilate și
        adaptate în funcție de fiecare persoană. Shivani Center pornește de la
        ideea că o singură metodă nu este eficientă pentru toată lumea, de aceea
        ne-am propus să înființăm acest centru privind fiecare individ ca fiind
        unic.
      </p>
      <p class="paragraph-text">
        Sănătatea este deseori asociată cu buna funcționare a organismului, însă
        sănătatea în sens larg cuprinde toate cele trei planuri: psihic, fizic
        și spiritual. Neglijând una dinte ele, este afectat întregul echilibru
        personal. Alimentația, sportul, dezvoltarea personală și transpersonală
        sunt aspecte vitale pentru o viață trăită în armonie și continuă
        dezvoltare.
      </p>
      <p class="paragraph-text">
        Ne adresăm tuturor oamenilor care își doresc o schimbare în stilul lor
        de viață, o îmbunătățire a sănătății și a interacțiunii cu cei din jur
        și mai ales celor care simt că nu mai pot face față problemelor zilnice,
        se confruntă cu stări de stres, anxietate, depresie, vinovăție,
        frustrare, sentimente de neputință, probleme în relația de cuplu, de
        familie etc.
      </p>
      <p class="paragraph-text">
        Articolele noastre vă vin și ele în întâmpinare, pentru a vă ține la
        curent cu cele mai noi informații despre sănătatea psihică, fizică și
        spirituală. Pentru acestea am creat secțiuni separate în funcție de
        interesele fiecărui cititor. Puteți fi mereu la curent cu cele mai noi
        articole abonându-vă la newsletter-ul nostru.
      </p>
      <p class="paragraph-text">
        Serviciile noastre sunt prezentate separat și le puteți descoperi chiar
        <a href="." class="links">
          <span class="text-elegant font-weight-bold">aici</span>
        </a>
        .
      </p>
      <div class="m-3 text-right">
        <p class="paragraph-text">Cu stimă,</p>
        <p class="signature">Shivani Center</p>
      </div>

    </div>
  </div>
</div>
