<script>
  import LastPosts from "../../components/Landing/LastPosts.svelte";

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
  .card {
    height: auto;
    border: none;
  }

  .card-columns .card {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .card-columns .card:hover {
    box-shadow: 0 0px 8px rgba(0, 0, 0, 0.25), 0 4px 6px rgba(0, 0, 0, 0.22);
  }
</style>

<div class="container">
  <div class="card-columns">
    {#each posts as { title, content, src, category, author, date, read }, id}
      <div class="card p-3 m-2">
        <LastPosts {title} {content} {src} {category} {author} {date} {read} />
      </div>
    {/each}
  </div>
</div>
