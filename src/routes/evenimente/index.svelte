<script>
  import Heading from "../../components/UI/Heading.svelte";
  import { fade, fly } from "svelte/transition";
</script>

<style>
  .text-elegant {
    color: #dfa974;
  }
  .card {
    background-color: #222736;
    border-radius: 10px;
    box-shadow: -0.5rem 0 0.5rem #222736;
    transition: 0.4s ease-out;
  }

  .paragraph-text {
    font-size: 20px;
  }

  .container {
    margin-bottom: 200px;
  }
</style>

<svelte:head>
  <title>Evenimente</title>
</svelte:head>

<div class="container">
  <Heading title="Evenimente" />
  <div class="card p-2 p-md-5">
    <h1
      class="service-title my-4 pt-md-0 text-center"
      in:fly={{ x: -200, duration: 2000 }}>
      În curând...
    </h1>
    <div class="p-2">
      <p class="paragraph-text">
        Datorită acestei perioade dificile pentru fiecare dintre noi,
        evenimentele și workshop-urile din următoarea perioadă au fost
        suspendate.
      </p>
      <p class="paragraph-text">
        În curând, te vom aștepta cu noi evenimente pe diferite teme care să te
        inspire, să te motiveze și să te ajute să intri în contact cu lumea ta
        interioară.
      </p>
      <p class="paragraph-text">
        Până atunci, suntem alaturi de tine prin serviciile noastre online
        <span class="text-elegant text-uppercase">gratuite</span>
        de consiliere psihologică.
      </p>
      <p class="paragraph-text">
        Împreună vom trece peste această perioadă și vom fi mult mai puternici
        decat am intrat.
      </p>
    </div>
  </div>
</div>
