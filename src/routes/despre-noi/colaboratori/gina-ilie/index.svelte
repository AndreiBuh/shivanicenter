<script>
  import { fade, fly } from "svelte/transition";
  import TestimonialList from "../../../../components/About/TestimonialList.svelte";
</script>

<style>
  .card {
    background-color: #222736;
    border-radius: 10px;
    box-shadow: -0.5rem 0 0.5rem #222736;
    transition: 0.4s ease-out;
  }

  @media screen and (max-width: 768px) {
    .container {
      margin-top: 90px;
    }
  }
</style>

<svelte:head>
  <title>Psihoterapeut Gina Ilie</title>
</svelte:head>
<div class="container">
  <div class="card p-2 p-md-5">
    <h1
      class="service-title my-4 pt-md-0 text-center"
      in:fly={{ x: -200, duration: 2000 }}>
      Psihoterapeut Gina Ilie
      <span class="text-elegant font-weight-bold">.</span>
    </h1>
    <div class="text-center" in:fade={{ duration: 2000 }}>
      <img
        src="gina.jpg"
        alt="psihoterapeut gina ilie"
        class="img-top img-fluid" />
    </div>
    <div class="p-2 mt-5">
      <p class="paragraph-text">
        Sunt Gina Ilie și dacă ar fi să îmi definesc statutul profesional,
        probabil că aș spune că sunt psiholog clinician, consilier psihologic și
        psihoterapeut experiențial centrat pe adult-cuplu-familie-copil,
        artterapeut și psihosexolog.
      </p>
      <p class="paragraph-text">
        Am experiență și activitatea didactică la Facultatea de Medicină,
        Universitatea de Medicină și Farmacie Carol Davila din București și în
        prezent sunt și doctorandă la Facultatea de Psihologie și Științele
        Educației, Universitatea București. Tema centrală a interesului meu
        actual, care reprezintă și obiectivul tezei de doctorat este:
        <em>
          Identificarea factori psihologici implicați în declanșarea,
          menținerea, agravarea și remedierea astmului bronșic. Intervenție și
          evaluare psihologice.
        </em>
      </p>
      <p class="paragraph-text">
        Dacă ar fi să mă definesc ca ființă, persoană, om, femeie, mi-ar fi un
        pic dificil. De ce? Pentru că încă sunt în continuă dezvoltare personală
        și aleg să nu mă atașez de ceea ce „știu/aflu/cunosc” despre mine ca și
        cum ar fi suficent și bine delimitat.
      </p>

      <p class="paragraph-text">
        Atât în viața personală, cât și în cabinet, folosesc metofora ca pe un
        instrument de explorare indirectă a experiențelor trăite de către
        mine/de către client, atât a celor prezente, cât și a celor trecute sau
        proiectate în viitor.
      </p>
      <p class="paragraph-text">
        Este ca și cum, tu, cel care mi-ai permis să te însoțesc, te pregătești
        pentru o „re-naștere”, iar eu, asemenea unei moașe, îți ofer tot
        sprijinul necesar, securizant și încurajator, cu toate astea, neputând
        să nasc în locul tău, doar tu fiind responsabil de propria „re-naștere”.
      </p>
      <p class="paragraph-text">
        Crezul meu psihoterapeutic este să experimentezi „aici și acum”, să
        explorezi, să-ți optimizezi propriul comportament și să-ți activezi
        propriile resurse, fiind conștient de tine. Nu vin către tine să îți
        ofer și impun corecții, ci încerc să creez alături de tine, propriile
        mecanisme psihologice prin care tu să obții anumite achiziții care îți
        pot satisface nevoia de a te conecta la interior și simultan, la
        exterior cu mediul tău natural și social.
      </p>
      <blockquote>
        <em>
          Nu îți voi oferi soluții, ci te voi iniția în a descoperi, crea și
          evalua propriile soluții pentru că TU ești expertul în propria viață.
        </em>
      </blockquote>
      <p class="paragraph-text">
        Și pentru a folosi o metaforă, nu îți voi oferi „pești”, ci te voi ajuta
        să devii pescar, dar ca orice pescar, tu poți pescui mai mult sau mai
        puțin în funcție de timp, loc, pricepere și răbdare.
      </p>

      <div class="m-3 text-right">
        <p class="paragraph-text">Cu drag,</p>
        <p class="end">Gina Ilie</p>
      </div>
    </div>
  </div>
</div>
