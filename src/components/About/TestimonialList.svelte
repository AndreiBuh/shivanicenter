<script>
  import Lazy from "svelte-lazy";
  import Icon from "fa-svelte";
  import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
  import TestimonialItem from "./TestimonialItem.svelte";

  export let testimonials;
</script>

<Lazy offset={300}>
  <section class="text-center">
    <div class="row text-center container-fluid">
      {#each testimonials as { name, jobTitle, text, imageUrl }}
        <TestimonialItem {name} {jobTitle} {text} {imageUrl} />
      {/each}
    </div>
  </section>
</Lazy>
