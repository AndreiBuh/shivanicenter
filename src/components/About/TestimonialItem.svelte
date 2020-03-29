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
    max-width: 30%;
  }

  .testimonial-text {
    color: #b5b5bf;
    font-family: "Josefin Sans", sans-serif;
    font-size: 14px;
  }
</style>

<div class="col-md-3">
  <div class="testimonial">
    <div class="mx-auto">
      <img
        src={imageUrl}
        alt=""
        class="rounded-circle z-depth-1 img-fluid img-testimonial" />
    </div>
    <h6 class="font-weight-bold text-white mt-4">{name}</h6>
    <h7 class="font-weight-bold text-elegant my-3">{jobTitle}</h7>
    <p class="testimonial-text">
      <Icon icon={faQuoteLeft} class="pr-2" />
      {text}
    </p>
  </div>
</div>
