<script>
  import Icon from "fa-svelte";
  import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
  import TestimonialItem from "./TestimonialItem.svelte";

  export let reviews;
</script>

<section class="text-center">
  <div class="row text-center container-fluid">
    {#each reviews as { name, jobTitle, text, imageUrl }}
      <TestimonialItem {name} {jobTitle} {text} {imageUrl} />
    {/each}
  </div>
</section>
