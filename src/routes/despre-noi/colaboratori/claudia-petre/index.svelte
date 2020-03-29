<script>
  import { fade, fly } from "svelte/transition";
  import TestimonialList from "../../../../components/About/TestimonialList.svelte";

  let reviews = [
    {
      name: "Surpățeanu Andreea",
      jobTitle: "HR manager",
      text:
        "Claudia este un suflet mare si dedicat catre oameni. Colaborarea cu ea se bazeaza pe incredere, sustinere si multa energie pozitiva",
      imageUrl: "testimonial-andreea.jpg"
    },
    {
      name: "Bianca Pereteanu",
      jobTitle: "Senior site management coordinator",
      text:
        "Sprijinul si cunostintele Claudiei mi-au fost de nadejde intr-o perioada in care alimentatia si ideea de program echilibrat de viata erau departe de mine",
      imageUrl: "testimonial-bianca.jpg"
    },
    {
      name: "Ana Madalina Iana",
      jobTitle: "Farmacist specialist",
      text:
        "Claudia m-a ajutat sa imi inteleg foamea și metabolisuml și să îi transform din dușmanii mei, în aliații mei",
      imageUrl: "testimonial-ana.jpg"
    }
  ];
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
  <title>Nutritionist Claudia Petre</title>
</svelte:head>
<div class="container">
  <div class="card p-2 p-md-5">
    <h1
      class="service-title my-4 pt-md-0 text-center"
      in:fly={{ x: -200, duration: 2000 }}>
      Nutritionist Claudia Petre
      <span class="text-elegant font-weight-bold">.</span>
    </h1>
    <div class="text-center" in:fade={{ duration: 2000 }}>
      <img
        src="claudia.jpg"
        alt="imagine nutritionist claudia petre"
        class="img-top img-fluid" />
    </div>
    <div class="p-2 mt-5">
      <p class="paragraph-text">
        Numele meu este Claudia Petre și sunt de meserie farmacist. Am absolvit
        Facultatea de medicină și Farmacie din cadrum UMF Carol Davila în anul
        2013.
      </p>
      <p class="paragraph-text">
        Fiind pasionată de nutriție, am urmat un curs de 8 luni în cadrul Școlii
        Fitness Scandinavia, în urma căruia am obținut acreditarea de tehnician
        nutriționist.
      </p>
      <p class="paragraph-text">
        De când am absolvit cursul sunt într-o continuă documentare, participând
        la conferințe și seminarii despre nutriție.
      </p>
      <blockquote>
        <em>
          Ca farmacist, interacționez cu foarte mulți oameni ce suferă de
          diferite afacțiuni. Am ajuns la concluzia că orice tratament cronic
          trebuie să înceapă cu adoptarea unui stil de viață sănătos și o
          alimentație corespunzătoare. 
        </em>
      </blockquote>
      <p class="paragraph-text">
        Astfel, am încercat să sfatuiesc pacienții ce au călcat pragul farmaciei
        nu numai asupra medicamentelor ci și asupra alimentației, reușind, în
        unele cazuri, sa îi conving să renunțe la alimentele ce puteau agrava
        afecțiunile de care sufereau.
      </p>
      <p class="paragraph-text">
        Cu ce va pot ajuta? Întocmirea unui plan de alimentare personalizat și
        echilibrat, adaptat programului și nevoilor dumneavoastră.
      </p>
      <p class="paragraph-text">
        Consider că un plan de alimentare nu se bazaează pe o dietă restrictivă
        ce poate dăuna pe termen lung, privând organismul de anumiți nutrienți.
      </p>
      <p class="paragraph-text">
        Un plan de alimentare corect este unul echilibrat și sănătos în care se
        ține cont de preferințele dumneavoastă. Veți ști că ceea ce vi se
        recomandă este adaptat nevoilor organismului dumneavoastră.
      </p>
      <p class="paragraph-text">
        O scădere/creștere în greutate sănătoasă nu se realizează peste noapte,
        ci este un proces îndelungat.
      </p>
      <p class="paragraph-text">
        Urmând cu strictețe planul alimentar, vă va simți mai energic, veți
        simți schimbarea în bine a tonusului general și veți ajunge la
        rezultatele dorite fără a depune efort.
      </p>

      <div class="m-3 text-right">
        <p class="paragraph-text">Cu drag,</p>
        <p class="end">Claudia Petre</p>
      </div>

      <hr class="style-hr" />
      <TestimonialList {reviews} />
      <hr class="style-hr" />

    </div>
  </div>
</div>
