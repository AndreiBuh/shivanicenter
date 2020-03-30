<script>
  import Button from "../../../components/UI/Button.svelte";
  import Social from "../../Global/Social.svelte";

  export let collaborator;

  const {
    name,
    jobTitle,
    text,
    imageUrl,
    slug,
    button,
    facebook,
    instagram,
    linkedin
  } = collaborator;
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
    font-size: 9px;
    font-family: "Montserrat";
  }

  .avatar {
    width: 100px;
    margin-top: -30px;
    overflow: hidden;
    border: 5px solid #fff;
    border-radius: 50%;
  }

  .avatar img {
    width: 100%;
  }

  .rounded-circle {
    border-radius: 50%;
  }

  p {
    font-family: "Josefin Sans";
    font-size: 14px;
  }

  a {
    text-decoration: none;
  }
</style>

<div class="card testimonial-card">
  <div class="card-up info-color" />
  <div class="avatar mx-auto white">
    <a href="/despre-noi/colaboratori/{slug}">
      <img
        src={imageUrl}
        class="rounded-circle img-fluid"
        alt="Reviwer avatar" />
    </a>
  </div>
  <div class="card-body">
    <a href="/despre-noi/colaboratori/{slug}">
      <h5 class="font-weight-bold">{name}</h5>
    </a>
    <span class="text-elegant text-uppercase font-weight-bold">{jobTitle}</span>
    <hr />
    <em>
      <p class="dark-grey-text mt-4">{text}</p>
    </em>
    {#if button}
      <a href="/despre-noi/colaboratori/{slug}">
        <Button content="Citeste mai mult" />
      </a>
      <div class="mt-4">
        <Social {facebook} {instagram} {linkedin} />
      </div>
    {/if}
  </div>
</div>
