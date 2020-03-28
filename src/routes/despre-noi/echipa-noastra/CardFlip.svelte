<script>
  export let collaborator;

  const { name, image, description } = collaborator;
</script>

<style>
  .card {
    position: relative;
    margin: 20px 0;
    width: 100%;
    height: 400px;
    background: var(--main-bg-color);
    transform-style: preserve-3d;
    transform: perspective(2000px);
    transition: 1s;
    border-radius: 10px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
    border: 0;
  }

  .card:hover {
    transform: perspective(2000px) rotate(-10deg);
    box-shadow: inset 20px 0 50px rgba(0, 0, 0 0.5);
    z-index: 1000;
  }

  .card .imgBox {
    position: relative;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    transform-origin: left;
    z-index: 1;
    transition: 1s;
  }

  .card:hover .imgBox {
    transform: rotateY(-135deg);
  }

  .card .imgBox img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
  }

  .card .details {
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    padding: 20px;
  }
</style>

<div class="card">
  <div class="imgBox">
    <img src={image} alt={name} />
  </div>
  <div class="details">
    <h2 class="text-elegant">{name}</h2>
    <p class="text-white">{description}</p>
  </div>
</div>
