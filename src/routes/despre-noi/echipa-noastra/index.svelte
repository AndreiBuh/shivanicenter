<script>
  import CardFlip from "./CardFlip.svelte";

  const collaborators = [
    {
      name: "Claudia Petre",
      image: "claudia.jpg",
      description:
        "La fel ca şi tine, şi eu am o poveste în spatele numelui meu. De fapt, cu toţii suntem protagoniştii vieţilor noastre. Mă numesc Tatu Alexandra şi dacă vreau să îmi descriu povestea în câteva cuvinte, ele sunt acestea: căutare, efort, obstacole, apreciere, imaginaţie, sinceritate, pasiune."
    },
    {
      name: "Alexandra Maria Pana",
      image: "alexandraa.jpg",
      description:
        "Numele meu este Alexandra Pană și sunt psihoterapeut! Pe fundal aud în cor câteva persoane “Bună Alexandraaa”, cam așa încep întâlnirile în grupurile de terapie pe care le mai vedem prin filme."
    }
  ];
</script>

<style>
  h1 {
    font-size: 60px !important;
  }
  .title {
    font-family: "Playball";
  }
</style>

<div class="container">
  <h1 class="text-center title">Colaboratori</h1>
  <div class="row">
    {#each collaborators as collaborator}
      <div class="col-md-6 col-12">
        <CardFlip {collaborator} />
        <h2>lasld</h2>
      </div>
    {/each}
  </div>
</div>
