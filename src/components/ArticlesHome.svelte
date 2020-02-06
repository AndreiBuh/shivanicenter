<script>
  import { Tabs, Tab, TabList, TabPanel } from "svelte-tabs";
  import ArticleCard from "./ArticleCard.svelte";

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
    "Stiinta"
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
  .z-depth-1-half {
    -webkit-box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15) !important;
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15) !important;
  }

  .author {
    font-size: 12px;
    line-height: 1.4;
    color: #8d8d8d;
  }

  .elegant-text {
    color: #dfa974;
  }

  :global(.svelte-tabs li) {
    font-size: 14px;
    color: #8d8d8d !important;
    margin: 0 10px;
  }

  :global(.svelte-tabs li.svelte-tabs__selected) {
    border-bottom: 2px solid #222736;
  }
</style>

<div class="container mt-5 pt-5">
  <Tabs>
    <TabList>
      <span class="title mr-5">
        Articole
        <span class="elegant-text">.</span>
      </span>
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
          <div class=" col-xs-12 col-md-6">
            <hr class="mb-3" />
            {#each articles as { title, src, text, author, date }}
              <section>
                <div class="row">
                  <div class="col-lg-5">
                    <div
                      class="view overlay rounded z-depth-1-half mb-lg-0 mb-4">
                      <img class="img-fluid" {src} alt={title} />
                      <a>
                        <div class="mask rgba-white-slight" />
                      </a>
                    </div>
                  </div>
                  <div class="col-lg-7">
                    <h7 class="font-weight-bold mb-3">
                      <strong>{title}</strong>
                    </h7>
                    <p class="dark-grey-text">{text}</p>
                    <p class="author">
                      <a class="font-weight-bold elegant-text">{author}</a>
                      pe {date}
                    </p>
                  </div>
                </div>
                <hr class="my-3" />
              </section>
            {/each}
          </div>
        </div>
      </TabPanel>
    {/each}
  </Tabs>
</div>
