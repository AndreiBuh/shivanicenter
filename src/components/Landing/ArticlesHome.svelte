<script>
  import { Tabs, Tab, TabList, TabPanel } from "svelte-tabs";
  import ArticleCard from "./ArticleCard.svelte";
  import Pagination from "../Global/Pagination.svelte";

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

  p,
  h6 {
    font-family: "Josefin Sans";
  }

  .z-depth-1-half {
    -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15) !important;
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15) !important;
  }

  :global(.svelte-tabs li) {
    font-size: 16px;
    color: #000 !important;
    margin: 0 10px;
    font-family: "Oswald" !important;
    outline: none !important;
  }

  :global(.svelte-tabs ul),
  :global(.card) {
    border: none !important;
  }

  :global(.svelte-tabs__tab-list) {
    text-align: center !important;
  }

  :global(.svelte-tabs li.svelte-tabs__selected) {
    font-size: 20px;
    border-bottom: 2px solid #000;
  }
</style>

<main class="container">
  <Tabs>
    <TabList>
      {#each tabs as tab}
        <Tab>{tab}</Tab>
      {/each}
    </TabList>

    {#each tabs as tab}
      <TabPanel>
        <div class="row p-5">
          <div class="col-xs-12 col-md-6 pt-4">
            <ArticleCard category={tab} />
          </div>
          <div class="col-xs-12 col-md-6">
            {#each articles as { title, src, text, author, date }}
              <section class="card m-3">
                <div class="row">
                  <div class="col-lg-5">
                    <div
                      class="view overlay rounded z-depth-1-half mb-lg-0 mb-4">
                      <img class="img-fluid" {src} alt={title} />
                    </div>
                  </div>
                  <div class="col-lg-7 pt-3">
                    <h6 class="font-weight-bold">
                      <strong>{title}</strong>
                    </h6>
                    <p class="dark-grey-text">{text}</p>
                  </div>
                </div>
              </section>
            {/each}
          </div>
        </div>
      </TabPanel>
    {/each}
  </Tabs>
  <Pagination />
</main>
