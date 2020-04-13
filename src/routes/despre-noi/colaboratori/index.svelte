<script>
  import TestimonialItem from "../../../components/Landing/Testimonials/TestimonialItem.svelte";
  import Heading from "../../../components/UI/Heading.svelte";

  const collaborators = [
    {
      name: "Alexandra Pană",
      imageUrl: "testimonial-alexandra",
      jobTitle: "Psihoterapeut experiențial",
      text:
        "Psiholog clinician, psihosexolog și psihoterapeut experiențial format în terapia unificării, calificat pentru a oferi consiliere si terapie individuală, de cuplu, de familie, cu copiii și cu grupuri.",
      slug: "alexandra-pana",
      button: true,
      facebook: "https://www.facebook.com/alexandrapana.psihoterapeut/",
      instagram: "https://www.instagram.com/angiintheskywithdiamonds/",
      linkedin: "https://www.linkedin.com"
    },
    {
      name: "Gina Ilie",
      imageUrl: "testimonial-gina",
      jobTitle: "Psihoterapeut experiențial",
      text:
        "Psiholog clinician, consilier psihologic și psihoterapeut experiențial centrat pe adult-cuplu-familie-copil, artterapeut și psihosexolog.",
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
        "Tehnician nutriționist, ofer sfaturi, idei și soluții nutriționale, construirea unui plan alimentar personalizat, adecvat nevoilor tale. ",
      slug: "claudia-petre",
      button: true,
      facebook: "https://www.facebook.com/claudia.stancu.33",
      instagram: "https://www.instagram.com/smart.nutrition_healthy.living/",
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
