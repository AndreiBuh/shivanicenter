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

  @media screen and (max-width: 768px) {
    h3 {
      font-size: 25px;
    }
  }
</style>

<svelte:head>
  <title>Psihoterapeut Alexandra Pană</title>
</svelte:head>
<div class="container">
  <div class="card p-2 p-md-5 mt-3">
    <h3
      class="service-title my-4 pt-md-0 text-center"
      in:fly={{ x: -200, duration: 2000 }}>
      Psihoterapeut Alexandra Pană
      <span class="text-elegant font-weight-bold">.</span>
    </h3>
    <div class="text-center" in:fade={{ duration: 2000 }}>
      <img
        src="alexandraa.jpg"
        alt="imagine psiholog alexandra pana"
        class="img-top img-fluid" />
    </div>
    <div class="p-2 mt-5">
      <h1 class="text-center my-4">
        <span class="text-elegant font-weight-bold signature">Salut,</span>
      </h1>
      <p class="paragraph-text">
        Numele meu este Alexandra Pană și sunt psihoterapeut! Pe fundal aud în
        cor câteva persoane “Bună Alexandraaa”, cam așa încep întâlnirile în
        grupurile de terapie pe care le mai vedem prin filme.
      </p>
      <p class="paragraph-text">
        Nu au fost puține ipostazele în care am fost pusă în postura de a mă
        prezenta de-a lungul vieții și de fiecare dată am ales să o fac într-un
        mod cât mai creativ. De altfel acesta consider că este unul din atuurile
        mele, creativitatea.
      </p>

      <p class="paragraph-text">
        Sunt un om curios, căruia mereu i-a plăcut să descopere aspecte inedite
        ale vieții și ale minții umane.
      </p>
      <p class="paragraph-text">
        Mi-am început cariera în lucrul cu oamenii acum mai bine de 10 ani când
        am absolvit o facultate și un masterat cu profil economic, dar cât se
        poate de rapid mi-am dat seama că drumul meu se îndreaptă către ceva
        mult mai profund, așa că am hotărât să merg mai departe prin a studia
        psihologia și a mă îndrepta spre ceea ce numesc eu vocația mea în
        prezent, psihoterapia.
      </p>
      <p class="paragraph-text">
        Am absolvit Facultatea de Psihologie și Științele Educației cu
        specializarea Psihologie, mai apoi Programul de Masterat, intiulat în
        varianta lungă și fără prescurtări “Psihodiagnoză, Psihoterapie
        Experiențială Unificatoare și Dezvoltare Personală”.
      </p>
      <p class="paragraph-text">
        A urmat apoi o formare mai scurtă, de un an, având ca obiec de studiu
        “Psihosexologia” în Institutului SPER. (Societatea de Psihoterapie
        Experiențială din România). Pe parcursul studiilor am efectuat o serie
        de stagii de practică în cadrul câtorva spitale din Capitală, dar și în
        cadrul D.G.A.S.P.C.
      </p>
      <p class="paragraph-text">
        Am obținut mai apoi Certificatul de Liberă Practică având ca
        specializări Psihologia Clinică și Psihoterapia de la Colegiul
        Psihologilor din România, după care am înființat propriul meu cabinet
        unde ofer ca și servicii, consiliere psihologică și psihoterapie.
      </p>
      <p class="paragraph-text">
        Un drum lung care după părerea mea nu are final, doar poate fi îmbogățit
        cu experiențe, deoarece consider că această meserie reprezintă un izvor
        nesecat de cunoaștere și de lucru cu Sinele.
      </p>
      <p class="paragraph-text">
        Mă consider norocoasă având privilegiul de a lucra la un nivel atât de
        intens cu oamenii și de a-i ajuta cât mai mult să cunoască și să se
        înțeleagă cât mai mult.
      </p>
      <p class="paragraph-text">
        Cred cu tărie că viața este pe cât de frumoasă pe atât de plină de
        provocări și este normal ca din când în când să avem nevoie de ajutor pe
        care să nu ne sfiim să îl cerem. Lucrez atât individual, cu adulții cât
        și cu copiii și adolescenții, cu grupuri, ofer terapie de cuplu, dar și
        de familie acolo unde este cazul.
      </p>
      <blockquote>
        <em>
          Îmi oferă o deosebită plăcere lucrul cu copiii, deoarece inocența și
          puritatea lor reprezintă mari atuuri în dezvoltarea și creșterea lor
          armonioasă și sănătoasă.
        </em>
      </blockquote>
      <p class="paragraph-text">
        După câțiva ani de practică și lucru, pot spune că îmi iubesc profesia
        și drumul pe care l-am ales, iubesc natura, toate formele de artă,
        lucrurile mărunte care ne fac existența să conteze. Sunt un om simplu,
        fiică, mamă, îmi place să descopăr sensurile profunde ale vieții.
      </p>
      <p class="paragraph-text">
        Munca pe care o fac îmi dă enorm de multă satisfacție, când observ
        progresul pe care îl au oamenii cu care lucrez.
      </p>

      <div class="m-3 text-right">
        <p class="paragraph-text">Cu multă iubire,</p>
        <p class="signature">Alexandra Pana</p>
      </div>

    </div>
  </div>
</div>
