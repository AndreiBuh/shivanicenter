<script>
  import TestimonialItem from "../../../components/Landing/Testimonials/TestimonialItem.svelte";
  import Heading from "../../../components/UI/Heading.svelte";

  const collaborators = [
    {
      name: "Alexandra Pană",
      imageUrl: "testimonial-alexandra",
      jobTitle: "Psihoterapeut exeperiențial",
      text:
        "Numele meu este Alexandra Pană și sunt psihoterapeut! Pe fundal aud în cor câteva persoane “Bună Alexandraaa”, cam așa încep întâlnirile în grupurile de terapie pe care le mai vedem prin filme. Nu au fost puține ipostazele în care am fost pusă în postura de a mă prezenta de-a lungul vieții și de fiecare dată am ales să o fac într-un mod cât mai creativ.",
      slug: "alexandra-pana",
      button: true,
      facebook: "https://www.facebook.com/alexandrapana.psihoterapeut/",
      instagram: "https://www.instagram.com/angiintheskywithdiamonds/",
      linkedin: "https://www.linkedin.com"
    },
    {
      name: "Gina Ilie",
      imageUrl: "testimonial-gina",
      jobTitle: "Psihoterapeut exeperiențial",
      text:
        "Sunt Gina Ilie și dacă ar fi să îmi definesc statutul profesional, probabil că aș spune că sunt psiholog clinician, consilier psihologic și psihoterapeut experiențial centrat pe adult-cuplu-familie-copil, artterapeut și psihosexolog.",
      slug: "gina-ilie",
      button: true,
      facebook: "https://www.facebook.com/PsiGinaIlie/",
      instagram: "https://www.instagram.com/_gi.psy_/",
      linkedin: "https://www.linkedin.com/in/gina-ilie-0a0218121/"
    },
    {
      name: "Claudia Petre",
      imageUrl: "testimonial-claudia",
      jobTitle: "Tehnician nutriționist",
      text:
        "Numele meu este Claudia Petre și sunt de meserie farmacist. Am absolvit Facultatea de medicină și Farmacie din cadrul UMF Carol Davila în anul 2013. Fiind pasionată de nutriție, am urmat un curs de 8 luni în cadrul Școlii Fitness Scandinavia, în urma căruia am obținut acreditarea de tehnician nutriționist. ",
      slug: "claudia-petre",
      button: true,
      facebook: "https://www.facebook.com/claudia.stancu.33",
      instagram: "https://www.instagram.com/stclaudia.nutritionist/",
      linkedin: "https://www.linkedin.com/in/petre-claudia-74740054/"
    }
  ];
</script>

<style>
  @media screen and (max-width: 768px) {
    .container {
      margin-top: 100px;
    }
  }
</style>

<svelte:head>
  <title>Colaboratori</title>
</svelte:head>

<div class="container">
  <Heading title="Colaboratori" />
  <section class="text-center dark-grey-text">
    <div class="row">
      {#each collaborators as collaborator}
        <div class="col-12 col-md-4 mt-4">
          <TestimonialItem {...collaborator} />
        </div>
      {/each}
    </div>
  </section>
</div>
