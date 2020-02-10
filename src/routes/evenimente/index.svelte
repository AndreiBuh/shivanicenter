<script>
  import EventCard from "../../components/Events/EventCard.svelte";

  let events = [
    {
      id: 1,
      title: "Eveniment 1",
      text:
        "Some quick example text to build on the card title and make up the bulk of the cards content.",
      date: "05/10/2015"
    },
    {
      id: 2,
      title: "Eveniment 2",
      text:
        "Some quick example text to build on the card title and make up the bulk of the cards content.",
      date: "05/10/2015"
    },
    {
      id: 3,
      title: "Eveniment 3",
      text:
        "Some quick example text to build on the card title and make up the bulk of the cards content.",
      date: "05/10/2015"
    }
  ];
</script>

<style>
  .text-elegant {
    color: #dfa974;
  }
  .service-title {
    font-family: "Special Elite";
  }
</style>

<svelte:head>
  <title>Evenimente</title>
</svelte:head>

<div class="container">
  <h3 class="service-title my-4 pt-5 pt-md-0 text-center">
    Evenimente
    <span class="text-elegant font-weight-bold">.</span>
  </h3>

  <div class="row">
    {#each events as { title, text, date }, id}
      <div class="col-12 col-lg-4 mt-4">
        <EventCard {title} {text} {date} />
      </div>
    {/each}
  </div>
</div>
