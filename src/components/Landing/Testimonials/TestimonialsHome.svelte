<script>
  import TestimonialItem from "./TestimonialItem.svelte";
  import Heading from "../../UI/Heading.svelte";

  let testimonials = [
    {
      name: "Corina Preoteasa",
      jobTitle: "Jurnalist",
      text:
        '"O persoana profunda si cu o buna intuitie asupra naturii umane, Roxana va poate ajuta sa descalciti incurcatele drumuri ale mintii prin empatie, ascultare activa si intelegere. Ceea ce o face diferita de alti terapeuti este ca pe langa toate competentele si atuurile necesare, Roxana are o adevarata vocatie pentru aceasta profesie."',
      imageUrl: "testimonial-corina"
    },
    {
      name: "Răzvan Brătianu",
      jobTitle: "Consilier parlamentar",
      text:
        '"Având abilități foarte bune de comunicare m-a sprijinit în mai multe proiecte, în mod voluntar, cu un deosebit simț al răspunderii. O recomand cu căldură, știind că, deschiderea și dedicarea ei pentru această profesie, nu doar că vă va ajuta, ci vă va deschide noi perspective în a vedea lumea reală, o lume imperfectă, dar frumoasă!"',
      imageUrl: "testimonial-razvan"
    },
    {
      name: "Alina Tăriceanu",
      jobTitle: "Lector universitar doctor",
      text:
        '"O persoana generoasa, care iubește viața, un spirit liber, dar profund, capabil de o mare introspecție și atenție la detalii. Inteligenta și răbdarea o recomanda ca specialist, iar abilitatea ei de a câștiga repede incerederea celorlalți face ca experiența terapeutica sa fie una excepțională."',
      imageUrl: "testimonial-alina"
    },
    {
      name: "Vlad Șovarel",
      jobTitle: "Indolog și sanskritolog",
      text:
        '"Înzestrată cu pasiune, răbdare și determinare, am nu doar speranța ci și convingerea unor rezultate pe măsura efortului depus în a implementa tehnicile din practicile meditative indiene în cadrul terapiilor psihologice occidentale"',
      imageUrl: "testimonial-vlad"
    }
  ];
</script>

<div class="container mt-5">
  <Heading title="Testimoniale" />
  <section class="text-center dark-grey-text">
    <div class="row">
      {#each testimonials as testimonial, index}
        <div class="col-lg-3 col-md-12 mb-4">
          <TestimonialItem {...testimonial} />
        </div>
      {/each}
    </div>
  </section>
</div>
