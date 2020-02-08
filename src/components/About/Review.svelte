<script>
  import Icon from "fa-svelte";
  import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

  export let name;
  export let jobTitle;
  export let text;
  export let imageUrl;
</script>

<style>
  .testimonial {
    font-family: "Montserrat";
    font-size: 14px;
  }
  .img-testimonial {
    max-width: 15%;
  }
</style>

<div class="col-md-4">
  <div class="testimonial">
    <div class="mx-auto">
      <img
        src={imageUrl}
        class="rounded-circle z-depth-1 img-fluid img-testimonial" />
    </div>
    <h6 class="font-weight-bold mt-4">{name}</h6>
    <h7 class="font-weight-bold text-elegant my-3">{jobTitle}</h7>
    <p class="text-font">
      <Icon icon={faQuoteLeft} class="pr-2" />
      {text}
    </p>
  </div>
</div>
