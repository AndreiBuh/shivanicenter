<script>
  import Icon from "fa-svelte";
  import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
  import Review from "./Review.svelte";

  let reviews = [
    {
      name: "Andrei Buhus",
      jobTitle: "Web developer",
      text:
        "Nu pot sa aduc decat cuvinte de lauda colaborarii cu domnisoara Alecu.",
      imageUrl: "https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
    },
    {
      name: "Alina Tariceanu",
      jobTitle: "Profesor sanskrita",
      text:
        "Este ca si cum as discuta cu cea mai buna prietena care stie sa ajunga la esenta problemei",
      imageUrl: "https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
    },
    {
      name: "Vlad Sovarel",
      jobTitle: "Micul Eliade",
      text:
        "Colaborarea cu Roxana este o colaborare bazata pe libertate de exprimare (in limita bunului simt, normal), respect reciproc si incredere maxima.",
      imageUrl: "https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg"
    }
  ];
</script>

<style>

</style>

<section class="text-center">
  <div class="row text-center container-fluid">
    {#each reviews as { name, jobTitle, text, imageUrl }}
      <Review {name} {jobTitle} {text} {imageUrl} />
    {/each}
  </div>
</section>
