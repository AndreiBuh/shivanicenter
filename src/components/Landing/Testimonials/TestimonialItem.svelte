<script>
  export let name;
  export let jobTitle;
  export let text;
  export let imageUrl;
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
  blockquote {
    padding: 0px 20px;
  }
  blockquote::before {
    color: #000;
    font-size: 30px;
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
    font-size: 10px;
    letter-spacing: 2px;
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
</style>

<div class="col-lg-4 col-md-12 mb-4">
  <div class="card testimonial-card">
    <div class="card-up info-color" />
    <div class="avatar mx-auto white">
      <img
        src={imageUrl}
        class="rounded-circle img-fluid"
        alt="Reviwer avatar" />
    </div>
    <div class="card-body">
      <h6 class="font-weight-bold">{name}</h6>
      <span class="text-elegant text-uppercase">{jobTitle}</span>
      <hr />
      <blockquote>
        <em>
          <p class="dark-grey-text mt-4">{text}</p>
        </em>
      </blockquote>
    </div>
  </div>
</div>
