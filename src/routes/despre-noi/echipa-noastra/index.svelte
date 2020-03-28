<script>
  import TestimonialItem from "../../../components/Landing/Testimonials/TestimonialItem.svelte";
  import Heading from "../../../components/UI/Heading.svelte";

  const collaborators = [
    {
      name: "Claudia Petre",
      imageUrl: "claudia.jpg",
      jobTitle: "Tehnician nutritionist",
      text:
        "Numele meu este Claudia Petre și sunt de meserie farmacist. Am absolvit Facultatea de medicină și Farmacie din cadrul UMF Carol Davila în anul 2013. Fiind pasionată de nutriție, am urmat un curs de 8 luni în cadrul Școlii Fitness Scandinavia, în urma căruia am obținut acreditarea de tehnician nutriționist. ",
      slug: "claudia-petre",
      button: true
    },
    {
      name: "Alexandra Maria Pana",
      imageUrl: "alexandraa.jpg",
      jobTitle: "Psihoterapeut exeperiential",
      text:
        "Numele meu este Alexandra Pană și sunt psihoterapeut! Pe fundal aud în cor câteva persoane “Bună Alexandraaa”, cam așa încep întâlnirile în grupurile de terapie pe care le mai vedem prin filme. Nu au fost puține ipostazele în care am fost pusă în postura de a mă prezenta de-a lungul vieții și de fiecare dată am ales să o fac într-un mod cât mai creativ.",
      slug: "alexandra-pana",
      button: true
    }
  ];
</script>

<style>

</style>

<div class="container mt-5">
  <Heading title="Colaboratori" />
  <section class="text-center dark-grey-text">
    <div class="row">
      {#each collaborators as collaborator}
        <div class="col-md-6 col-12">
          <TestimonialItem {...collaborator} />
        </div>
      {/each}
    </div>
  </section>
</div>
