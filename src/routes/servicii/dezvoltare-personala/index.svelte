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
    color: var(--main-color);
  }

  a:hover {
    color: var(--category-color);
  }
</style>

<svelte:head>
  <title>Dezvoltare personala</title>
</svelte:head>

<div class="container">
  <div class="card p-2 p-md-5 mt-3">
    <h2
      class="service-title mb-4 pt-md-0 text-center"
      in:fly={{ x: -200, duration: 2000 }}>
      Dezvoltare personală
      <span class="text-elegant font-weight-bold">.</span>
    </h2>
    <div class="text-center" in:fade={{ duration: 2000 }}>
      <img
        src="images/services/dezvoltare-personala1.jpg"
        alt="dezvoltare personala" />
    </div>
    <div class="p-2 mt-5">
      <p class="paragraph-text">
        Auzim din ce în ce mai des expresia
        <span class="text-elegant font-weight-bold">
          <a href="https://ro.wikipedia.org/wiki/Dezvoltare_personal%C4%83">
            "dezvoltare personală".
          </a>
        </span>
      </p>
      <p class="paragraph-text">
        Am putea spune că a devenit o modă, un trend, iar asta a dus la
        pierderea adevăratului sens.
      </p>
      <p class="paragraph-text">
        Să citim cărți, să participăm la cursuri, să ne uităm la filme
        motivaționale și să ascultăm speakeri motivaționali nu înseamnă
        dezvoltare personală. Toate acestea au rolul lor în viața noastră, însă
        autorealizarea presupune schimbare și acțiune, ce determină apariția
        unor efecte semnificative în personalitatea fiecăruia.
      </p>
      <p class="paragraph-text">
        Expresia "dezvoltare personală" se referă la ce simțim, ce facem și ce
        suntem.
      </p>
      <p class="paragraph-text">
        Ceea ce facem în viața noastră de zi cu zi ne definește pe noi ca
        oameni, iar efectele tuturor acțiunilor ne arată stadiul de dezvoltare
        în care ne aflăm.
      </p>
      <p class="paragraph-text">
        După apariția nevoii de "a te cunoaște pe tine însuți", așa cum spunea
        Socrate, de a te descoperi cu autenticitate, de a înțelege cine ești cu
        adevărat și ce te face să fii cel din prezent, e necesar să ieșim din
        zona noastră de comfort și să schimbăm ce nu a funcționat până acum.
      </p>
      <p class="paragraph-text">
        Conștientizarea se produce printr-un insight(în psihologie, insight
        apare atunci când o soluție la o problemă se prezintă rapid și fără
        avertisment) și este total diferită de a ști, de a cunoaște informații
        provenite din diverse surse.
      </p>
      <p class="paragraph-text">
        Ea ne împinge spre acțiune și ne pune în contact cu acele părți din noi
        pe care le putem îmbunătăți. În acel moment trăim în prezent, conștienți
        de noi, de acțiunile și de comportamentul nostru.
      </p>
      <p class="paragraph-text">
        În momentul în care înțelegi care este sensul vieții tale și practici
        zilnic recunoștință față de tot ceea ce îți oferă viața, ai empatie față
        de suferința oamenilor din jurul tău și simți iubire, ești cu adevărat
        în procesul de autorealizare.
      </p>
      <p class="paragraph-text">
        A te bucura de lucrurile simple și a simți compasiune față de toate
        ființele înseamnă dezvoltare personală. Viața nu înseamnă doar a ști, ci
        și a simți!
      </p>
      <p class="paragraph-text">
        Atunci când suntem întrebați cine suntem obișnuim să ne spunem numele și
        apoi să ne identificăm cu diferite roluri din viața noastră (mamă,
        fiică, meserie etc.), însă noi suntem mai mult de atât. Dezvoltarea
        personală ne ajută să descoperim care sunt credințele, convingerile și
        limitele noastre ce ne definesc alegerile, personalitatea, faptele.
      </p>
      <p class="paragraph-text">
        Cum ne putem folosi toate resursele noastre dacă nu le cunoaștem?
      </p>
      <p class="paragraph-text">
        Scopul dezvoltării personale este unificarea și armonizarea Eu-Sine,
        autotransformarea creatoare, maturizarea psiho-spirituală a persoanei în
        procesul său evolutiv.
      </p>

      <p class="paragraph-text">
        Una din teoriile psihologiei umaniste, ce îi aparține lui Abraham Maslow
        este „piramida trebuințelor umane” cu cele șapte niveluri și trei
        paliere. La baza acesteia sunt nevoile fiziologice și nevoia de
        securitate.
      </p>
      <p class="paragraph-text">
        Următorul palier cuprinde nevoia de proprietate și dragste, nevoia de
        stimă și apreciere, nevoi cognitive și nevoi estetice, de frumusețe.
      </p>
      <p class="paragraph-text">
        În vârf, acesta vorbește despre actualizarea sinelui, autorealizarea la
        potențial maxim, nevoia omului de a-și îmbogăți viața prin valori mult
        mai înalte precum unicitate, echilibru, ordine, perfecțiune,
        transcendență și dorință de a crea.
      </p>
      <p class="paragraph-text">
        Conform percepției lui Maslow putem spune că nevoia de dezvoltare și
        autorealizare este chiar nevoia omului de a se adapta continuu la mediu,
        prin a cărei satisfacere omul devine armonios cu întreg mediul.
      </p>
      <div class="text-center my-4">
        <img
          src="images/services/dezvoltare-personala2.jpg"
          alt="dezvoltare personala"
          class="img-top img-fluid rounded" />
      </div>
      <p class="mt-5 paragraph-text">
        Studiile sale au evidențiat câteva caracteristici ale persoanelor aflate
        în procesul de actualizare a sinelui precum acceptarea, centrarea pe
        probleme, solitudinea, spontaneitatea, experiențe profunde, rezistență
        la enculturație, percepția realității etc.
      </p>
      <p class="paragraph-text">
        În următoarele paragrafe o să vorbim despre câteva dintre ele, pentru a
        putea înțelege mai bine ce presupune dezvoltarea personală.
        Disponibilitatea și deschiderea spre schimbare este cheia pentru o
        persoană ce a pornit pe această cale care nu se dovedește a fi ușoară,
        însă odată ce viața se îmbunătățește semnificativ, satisfacția e pe
        măsură.
      </p>
      <p class="paragraph-text">
        Iată câțiva indicatori a persoanelor aflate în procesul dezvoltării
        personale:
      </p>
      <ul class="px-3">
        <li class="paragraph-list-items">
          Potențarea propriilor capacități evolutive
        </li>
        <li class="paragraph-list-items">
          O mult mai eficientă percepție a realității
        </li>
        <li class="paragraph-list-items">Conștientizare extinsă de sine</li>
        <li class="paragraph-list-items">
          Toleranță față de sine, de alții și față de natură
        </li>
        <li class="paragraph-list-items">Prospețime și vitalitate continuă</li>
        <li class="paragraph-list-items">Experiență mistică</li>
        <li class="paragraph-list-items">
          Redimensionarea, integrarea și redirecționarea responsabilă și
          eficientă a propriului scenariu de viață
        </li>
        <li class="paragraph-list-items">
          Îmbunătățirea dinamicii relaționale și colective
        </li>
        <li class="paragraph-list-items">Relații interpersonale profunde</li>
      </ul>
      <p class="paragraph-text">
        Cel mai important este să fim sinceri cu noi, să ne asumăm propriile
        decizii și să fim cea mai mare responsabilitate a noastră.
      </p>
      <p class="paragraph-text">
        Dezvoltarea personală ne va ajuta cu siguranță să devenim mai buni, mai
        liniștiți, mai iubitori, mai echilibrați și în armonie cu tot ceea ce ne
        înconjoară.
      </p>
    </div>
  </div>
</div>
