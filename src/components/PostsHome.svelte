<script>
  import LastPosts from "./LastPosts.svelte";

  let posts = [
    {
      id: 1,
      title: "Franghia atasamentului: intre libertate si atasament toxic",
      content:
        "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
    },
    {
      id: 2,
      title: "Franghia atasamentului: intre libertate si atasament toxic",
      content:
        "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
    },
    {
      id: 3,
      title: "Franghia atasamentului: intre libertate si atasament toxic",
      content:
        "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
    }
  ];
</script>

<style>
  .title {
    font-size: 18px;
    color: #000000;
    margin-bottom: 0;
    margin-right: auto;
    font-family: "Special Elite", sans-serif;
    font-weight: 700;
  }
  .border-btm {
    border-bottom: 1px solid #cccccc;
  }
  .text-elegant {
    color: #dfa974;
  }
</style>

<div class="container mt-5">
  <div class="row border-btm pb-2">
    <h5 class="title">
      Ultimele postari
      <span class="text-elegant">.</span>
    </h5>
  </div>
  <div class="container p-5">
    <div class="row">
      {#each posts as { title, content }, id}
        <div class="col-lg-4">
          <LastPosts {title} {content} />
        </div>
      {/each}
    </div>
  </div>
</div>
