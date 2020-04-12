<script>
  import Button from "../../../components/UI/Button.svelte";
  import Social from "../../Global/Social.svelte";

  export let name;
  export let jobTitle;
  export let text;
  export let imageUrl;
  export let slug;
  export let button;
  export let facebook;
  export let instagram;
  export let linkedin;
</script>

<style>
  .card {
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    border: 0;
  }
  .card:hover {
    transform: translateY(-5px);
    transition: 0.4s ease-out;
  }

  .card-up {
    height: 80px;
    overflow: hidden;
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  .info-color {
    background-color: #222736;
  }

  .card-body span {
    font-size: 12px;
    font-family: "Averta";
    letter-spacing: 1px;
    color: var(--category-color);
  }

  .avatar {
    width: 100px;
    margin-top: -30px;
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

  p {
    font-family: var(--font-text), sans-serif;
    font-size: 14px;
  }

  a {
    text-decoration: none;
  }
</style>

<div class="card testimonial-card">
  <div class="card-up info-color" />
  <div class="avatar mx-auto white">
    <img
      src="images/testimonials/{imageUrl}.jpg"
      alt={name}
      class="rounded-circle img-fluid" />
  </div>
  <div class="card-body">
    <h6>{name}</h6>
    <span class="text-uppercase">{jobTitle}</span>
    <hr />
    <p class="dark-grey-text mt-4">{text}</p>
    {#if button}
      <a href="/despre-noi/colaboratori/{slug}">
        <Button content="Citește mai mult" />
      </a>
      <div class="mt-4">
        <Social {facebook} {instagram} {linkedin} />
      </div>
    {/if}
  </div>
</div>
