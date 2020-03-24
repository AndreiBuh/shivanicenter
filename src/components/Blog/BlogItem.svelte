<style>
  .container {
    position: relative;
    display: grid;
  }

  .section-box {
    display: grid;
    grid-template-columns: 50% 50%;
  }

  .box {
    position: relative;
    background: #000;
    margin: 15px;
    box-sizing: border-box;
    overflow: hidden;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.8);
  }

  .box .imgBox {
    position: relative;
  }

  .box .imgBox img {
    width: 100%;
    height: 100%;
    transition: 0.5s;
    object-fit: contain;
  }

  .box:hover .imgBox img {
    opacity: 0.2;
    transform: scale(1.2);
  }

  .box .content {
    background: rgba(0, 0, 0, 0.85);
    position: absolute;
    width: 100%;
    bottom: 0;
    z-index: 2;
    box-sizing: border-box;
    text-align: center;
  }
  .box .content .post-details {
    color: #939393;
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 14px;
    text-transform: uppercase;
    display: block !important;
  }

  .box .content h2 {
    color: #fff;
  }

  .box .content p {
    color: #fff;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
  }

  .box:hover p {
    opacity: 1;
    visibility: visible;
  }
</style>

<div class="container">
  <div class="box">
    <div class="imgBox">
      <img src="/blog/blog2.jpg" alt="" />
    </div>
    <div class="content">
      <h2>Adevărul este în fața ochilor noștri!</h2>
      <span class="post-details">25 april 2017 | Roxana Alecu</span>
      <p>
        Aud zilnic oameni nemulțumiți de lumea în care trăiesc, care spun despre
        alți oameni că sunt răi, nepăsători, indiferenți. Ne plângem mereu că nu
        suntem înțeleși și că nu ne ascultă nimeni. Tu asculți? Îl auzi pe
        celălalt? Și cel de lângă tine are nevoie de siguranță, iubire,
        bunătate, înțelegere și ascultare! Nu este vorba despre tine, ci despre
        NOI. Cu toții suntem locuitorii acestei planete, numită Pământ!
      </p>
    </div>
  </div>
  <div class="section-box">
    <div class="box">
      <div class="imgBox">
        <img
          src="https://www.remove.bg/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg"
          alt="" />
      </div>
      <div class="content">
        <h2>Image hover effect</h2>
        <p>lorem impsum lalaasasmfiasf</p>
      </div>
    </div>
    <div class="box">
      <div class="imgBox">
        <img
          src="https://www.remove.bg/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg"
          alt="" />
      </div>
      <div class="content">
        <h2>Image hover effect</h2>
        <p>lorem impsum lalaasasmfiasf</p>
      </div>
    </div>
  </div>
</div>
