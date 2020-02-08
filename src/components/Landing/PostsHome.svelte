<script>
  import LastPosts from "./LastPosts.svelte";

  let posts = [
    {
      id: 1,
      title: "Franghia atasamentului: intre libertate si atasament toxic",
      content:
        "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      src: "last1.png",
      category: "Sanatate",
      author: "Roxana Alecu",
      date: "28. ian 2019",
      read: "1 min",
      comment: "2"
    },
    {
      id: 2,
      title: "Franghia atasamentului: intre libertate si atasament toxic",
      content:
        "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      src: "last2.png",
      category: "Sanatate",
      author: "Roxana Alecu",
      date: "28. ian 2019",
      read: "1 min",
      comment: "2"
    },
    {
      id: 3,
      title: "Franghia atasamentului: intre libertate si atasament toxic",
      content:
        "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      src: "last3.png",
      category: "Sanatate",
      author: "Roxana Alecu",
      date: "28. ian 2019",
      read: "1 min",
      comment: "2"
    },
    {
      id: 4,
      title: "Franghia atasamentului: intre libertate si atasament toxic",
      content:
        "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      src: "last4.png",
      category: "Sanatate",
      author: "Roxana Alecu",
      date: "28. ian 2019",
      read: "1 min",
      comment: "2"
    },
    {
      id: 5,
      title: "Franghia atasamentului: intre libertate si atasament toxic",
      content:
        "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      src: "last5.png",
      category: "Sanatate",
      author: "Roxana Alecu",
      date: "28. ian 2019",
      read: "1 min",
      comment: "2"
    },
    {
      id: 6,
      title: "Franghia atasamentului: intre libertate si atasament toxic",
      content:
        "Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam.",
      src: "last6.png",
      category: "Sanatate",
      author: "Roxana Alecu",
      date: "28. ian 2019",
      read: "1 min",
      comment: "2"
    }
  ];
</script>

<style>
  .title {
    color: #000000;
    margin-bottom: 0;
    margin-right: auto;
    font-family: "Special Elite", sans-serif;
    font-weight: 700;
  }

  .text-elegant {
    color: #dfa974;
  }

  .card-columns .card {
    border: none;
  }
</style>

<h3 class="title text-center mt-5 pt-5">
  Ultimele postări
  <span class="text-elegant">.</span>
</h3>

<div class="card container p-5 mb-5">
  <div class="card-columns">
    {#each posts as { title, content, src, category, author, date, read }, id}
      <div class="card p-3">
        <LastPosts {title} {content} {src} {category} {author} {date} {read} />
      </div>
    {/each}
  </div>
</div>
