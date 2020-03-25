<script>
  import TestimonialItem from "./TestimonialItem.svelte";
  import Heading from "../../UI/Heading.svelte";

  let testimonials = [
    {
      name: "Florin Pop",
      jobTitle: "Web developer",
      text:
        "Nu pot sa aduc decat cuvinte de lauda colaborarii cu domnisoara Alecu.",
      imageUrl: "https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
    },
    {
      name: "Bogdan Popescu",
      jobTitle: "Profesor sanskrita",
      text:
        "Este ca si cum as discuta cu cea mai buna prietena care stie sa ajunga.",
      imageUrl: "https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
    },
    {
      name: "Mircea Sovarel",
      jobTitle: "Micul Eliade",
      text:
        "Colaborarea cu Roxana este o colaborare bazata pe libertate de exprimare.",
      imageUrl: "https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
    }
  ];
</script>

<div class="container mt-5">
  <Heading title="Testimoniale" />
  <section class="text-center dark-grey-text">
    <div class="row">
      {#each testimonials as testimonial}
        <TestimonialItem {...testimonial} />
      {/each}
    </div>
  </section>
</div>
