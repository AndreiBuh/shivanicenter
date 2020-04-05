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
    font-family: var(--font-main);
    font-size: 14px;
    letter-spacing: 1px;
  }
  .avatar {
    width: 100px;
    overflow: hidden;
    border: 2px solid #fff;
    border-radius: 50%;
  }

  .avatar img {
    width: 100%;
  }

  .rounded-circle {
    border-radius: 50%;
  }
  .testimonial-text {
    color: #b5b5bf;
    font-family: var(--font-text), sans-serif;
    font-size: 14px;
  }

  .rounded-circle {
    border-radius: 50%;
  }

  span {
    font-size: 12px;
    font-family: "Averta";
    letter-spacing: 1px;
  }
</style>

<div class="col-md-3">
  <div class="testimonial">
    <div class="avatar mx-auto white">
      <picture class="rounded-circle img-fluid">
        <source
          srcset="images/testimonials/{imageUrl}.webp"
          type="image/webp" />
        <source srcset="images/testimonials/{imageUrl}.jpg" type="image/jpeg" />
        <img src="images/testimonials/{imageUrl}.jpg" alt="Alt Text!" />
      </picture>
    </div>
    <h6 class="text-white mt-4">{name}</h6>
    <span class="text-elegant text-uppercase">{jobTitle}</span>
    <p class="testimonial-text">
      <Icon icon={faQuoteLeft} class="pr-2" />
      {text}
    </p>
  </div>
</div>
