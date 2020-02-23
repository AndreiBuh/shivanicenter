<script>
  import { Tabs, Tab, TabList, TabPanel } from "svelte-tabs";
  import ArticleCardCenter from "./ArticleCardCenter.svelte";
  import ArticleCardSide from "./ArticleCardSide.svelte";
  import Pagination from "../../Global/Pagination.svelte";
  import Heading from "../../UI/Heading.svelte";

  let articles = [
    {
      title: "Meditatia este buna",
      src: "https://mdbootstrap.com/img/Photos/Others/images/49.jpg",
      text: "Nam libero tempore, cum soluta nobis est",
      author: "Roxana Alecu",
      date: "Sep 29, 2017 la 9:48 am"
    },
    {
      title: "Psihoterapia este geniala",
      src: "https://mdbootstrap.com/img/Photos/Others/images/31.jpg",
      text: "Nam libero tempore, cum soluta nobis est",
      author: "Roxana Alecu",
      date: "Sep 29, 2017 la 9:48 am"
    },
    {
      title: "Yoga este buna",
      src: "https://mdbootstrap.com/img/Photos/Others/images/49.jpg",
      text: "Nam libero tempore, cum soluta nobis est",
      author: "Roxana Alecu",
      date: "Sep 29, 2017 la 9:48 am"
    },
    {
      title: "Sexualitatea este buna",
      src: "https://mdbootstrap.com/img/Photos/Others/images/49.jpg",
      text: "Nam libero tempore, cum soluta nobis est",
      author: "Alexandra Tatu",
      date: "Sep 29, 2017 la 9:48 am"
    }
  ];

  let tabs = [
    "Familie",
    "Relatie de cuplu",
    "Sanatate",
    "Meditatie/Yoga",
    "Dezvoltare personala",
    "Sexualitate",
    "Timp liber"
  ];
</script>

<style>
  main {
    padding: 30px;
    border-radius: 10px;
    margin: 30px auto;
  }

  :global(.svelte-tabs li) {
    font-size: 16px;
    color: #000 !important;
    margin: 0 5px;
    font-family: "Oswald" !important;
    outline: none !important;
  }

  :global(.svelte-tabs ul) {
    border: none !important;
  }

  :global(.svelte-tabs__tab-list) {
    text-align: center !important;
  }

  :global(.svelte-tabs li.svelte-tabs__selected) {
    font-weight: 700;
    border-bottom: 2px solid #000;
  }
</style>

<main class="container">
  <Heading title="Articole" />
  <Tabs>
    <TabList>
      {#each tabs as tab}
        <Tab>{tab}</Tab>
      {/each}
    </TabList>

    {#each tabs as tab}
      <TabPanel>
        <div class="row mt-5">
          <div class="col-12 col-md-3">
            <ArticleCardSide />
            <ArticleCardSide />
          </div>
          <div class="col-12 col-md-6 mb-5 mb-md-0">
            <ArticleCardCenter category={tab} />
          </div>
          <div class="col-12 col-md-3 mt-5 mt-md-0">
            <ArticleCardSide />
            <ArticleCardSide />
          </div>
        </div>
      </TabPanel>
    {/each}
  </Tabs>
  <Pagination />
</main>
