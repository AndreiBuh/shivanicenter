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

  @media screen and (max-width: 768px) {
    .container {
      margin-top: 90px;
      margin-bottom: 100px;
    }
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
      In curand
      <span class="text-elegant font-weight-bold">...</span>
    </h1>
    <div class="p-2">
      <p class="paragraph-text">
        Datorita acestei perioade dificile pentru fiecare dintre noi,
        evenimentele si workshop-urile din urmatoarea perioada au fost
        suspendate.
      </p>
      <p class="paragraph-text">
        In curand, te vom astepta cu noi evenimente pe diferite teme care sa te
        inspire, sa te motiveze si sa te ajute sa intri in contact cu lumea ta
        interioara.
      </p>
      <p class="paragraph-text">
        Pana atunci, suntem alaturi de tine prin serviciile noastre online
        <span class="text-elegant text-uppercase">gratuite</span>
        de consiliere psihologica .
      </p>
      <p class="paragraph-text">
        Impreuna vom trece peste aceasta perioada si vom fi mult mai puternici
        decat am intrat.
      </p>
    </div>
  </div>
</div>
