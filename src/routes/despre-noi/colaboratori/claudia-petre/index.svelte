<script>
  import { fade, fly } from "svelte/transition";
  import TestimonialList from "../../../../components/About/TestimonialList.svelte";

  let testimonials = [
    {
      name: "Surpățeanu Andreea",
      jobTitle: "HR manager",
      text:
        "Claudia este un suflet mare și dedicat către oameni. Colaborarea cu ea se bazează pe încredere, susținere și multă energie pozitivă",
      imageUrl: "testimonial-andreea"
    },
    {
      name: "Bianca Perețeanu",
      jobTitle: "Senior site management",
      text:
        "Sprijinul și cunoștințele Claudiei mi-au fost de nădejde într-o perioadă în care alimentația și ideea de program echilibrat de viață erau departe de mine",
      imageUrl: "testimonial-bianca"
    },
    {
      name: "Ana Mădălina Iana",
      jobTitle: "Farmacist specialist",
      text:
        "Claudia m-a ajutat sa îmi înțeleg foamea și metabolismul, să îi transform din dușmanii mei, în aliații mei",
      imageUrl: "testimonial-ana"
    },
    {
      name: "Andrei Bogdan Nicolescu",
      jobTitle: "Senior brand ambassador",
      text:
        "Claudia Petre m-a ajutat să învăț să aleg alimentele prietenoase, să-mi organizez mesele, mi-a răspuns la toate incertitudinile mele legate de alimentație",
      imageUrl: "testimonial-andrei"
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
</style>

<svelte:head>
  <title>Nutritionist Claudia Petre</title>
</svelte:head>
<div class="container">
  <div class="card p-2 p-md-5 mt-3">
    <h2
      class="service-title my-4 pt-md-0 text-center"
      in:fly={{ x: -200, duration: 2000 }}>
      Nutriționist Claudia Petre
      <span class="text-elegant font-weight-bold">.</span>
    </h2>
    <div class="text-center" in:fade={{ duration: 2000 }}>
      <picture>
        <source srcset="images/people/claudia.webp" type="image/webp" />
        <source srcset="images/people/claudia.jpg" type="image/jpeg" />
        <img
          src="images/people/claudia.jpg"
          alt="nutritionist claudia petre"
          class="img-top img-fluid rounded" />
      </picture>
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
        <p class="signature">Claudia Petre</p>
      </div>
      <hr class="style-hr" />
      <TestimonialList {testimonials} />
      <hr class="style-hr" />
    </div>
  </div>
</div>
