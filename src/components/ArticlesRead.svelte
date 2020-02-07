<style>
  ol.most-read-list {
    list-style: none;
  }
  li.most-read-list-item {
    border-top: 1px solid #e8e8e8;
    padding: 12px 0;
    text-align: left;
    position: relative;
    line-height: 22px;
    font-size: 14px;
    font-weight: 400;
    color: #8c8c8c;
  }

  a.category-link {
    text-decoration: none;
    font-size: 8px;
    font-family: "Noto Sans", sans-serif;
    letter-spacing: 1px;
    font-weight: 700;
    text-transform: uppercase;
    color: #d79c74;
  }

  a.category-link:hover {
    color: #8c8c8c;
  }

  a.article-title {
    text-decoration: none;
    color: #8c8c8c;
    font-family: "Oswald", sans-serif;
    font-size: 18px;
  }

  a.article-title:hover,
  a.category-link:hover {
    color: #dfa974;
  }

  .date {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-family: "Oswald", sans-serif;
  }

  ol {
    counter-reset: my-awesome-counter;
    flex-wrap: wrap;
  }
  ol li {
    counter-increment: my-awesome-counter;
  }
  .text-holder::before {
    content: "0" counter(my-awesome-counter);
    font-weight: bold;
    font-size: 2rem;
    margin-right: 0.5rem;
    font-family: "Abril Fatface", serif;
    line-height: 1;
  }
</style>

<ol class="most-read-list">
  <li class="most-read-list-item row">
    <div class="text-holder col-md-6 col-6">
      <div class="category">
        <a href="" class="category-link">Psihoterapie</a>
      </div>
      <a href="#" class="article-title">Franghia trecutului</a>
      <div class="date">
        <span>18. dec 2019</span>
      </div>
    </div>
    <div class="image-holder col-md-6 col-6">
      <img src="workshop2.png" />
    </div>
  </li>
  <li class="most-read-list-item row">
    <div class="text-holder col-md-6 col-6">
      <div class="category">
        <a href="" class="category-link">Dezvoltare personala</a>
      </div>
      <a href="#" class="article-title">Franghia trecutului</a>
      <div class="date">
        <span>18. dec 2019</span>
      </div>
    </div>
    <div class="image-holder col-md-6 col-6">
      <img src="art-therapy1.png" />
    </div>
  </li>
  <li class="most-read-list-item row">
    <div class="text-holder col-md-6 col-6">
      <div class="category">
        <a href="" class="category-link">Sexualitate</a>
      </div>
      <a href="#" class="article-title">Franghia trecutului</a>
      <div class="date">
        <span>18. dec 2019</span>
      </div>
    </div>
    <div class="image-holder col-md-6 col-6">
      <img src="consiliere-psihologica2.jpg" />
    </div>
  </li>

</ol>
