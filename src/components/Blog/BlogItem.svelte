<script>
  import { fade, fly } from "svelte/transition";
</script>

<style>
  @-webkit-keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
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
    transform: scale(1.1);
  }

  .box .content {
    background: rgba(34, 39, 54, 0.9);
    position: absolute;
    width: 100%;
    bottom: 0;
    z-index: 2;
    box-sizing: border-box;
    text-align: center;
  }
  .box .content .post-details {
    color: #939393;
    font-size: 12px;
    line-height: 12px;
    text-transform: uppercase;
    display: block !important;
  }

  h4 {
    color: #fff;
  }

  .box .content p {
    color: #fff;
    transition: 0.5s;
    display: none;
    font-family: "Josefin Sans";
  }

  .box:hover p {
    display: block;
    -webkit-animation: fadeIn 1s;
    animation: fadeIn 1s;
  }

  @media screen and (max-width: 768px) {
    h4 {
      font-size: 1.25rem;
      margin: 0;
    }
    .box .content .post-details {
      font-size: 9px;
      line-height: 9px;
    }

    .section-box {
      display: grid;
      grid-template-columns: 100%;
    }

    .box .content p {
      font-size: 10px;
    }
  }
</style>

<div class="box">
  <div class="imgBox">
    <img src="/blog/blog2.jpg" alt="" />
  </div>
  <div class="content p-2 p-md-3">
    <h4>Adevărul este în fața ochilor noștri!</h4>
    <span class="post-details">25 april 2017 | Roxana Alecu</span>
    <p in:fly={{ y: 200, duration: 2000 }} out:fade class="mt-2">
      Aud zilnic oameni nemulțumiți de lumea în care trăiesc, care spun despre
      alți oameni că sunt răi, nepăsători, indiferenți.
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
    <div class="content p-2 p-md-3">
      <h4>Image hover effect</h4>
      <span class="post-details">25 april 2017 | Roxana Alecu</span>
      <p in:fly={{ y: 200, duration: 2000 }} out:fade class="mt-2">
        lorem impsum lalaasasmfiasf
      </p>
    </div>
  </div>
  <div class="box">
    <div class="imgBox">
      <img
        src="https://www.remove.bg/assets/start-0e837dcc57769db2306d8d659f53555feb500b3c5d456879b9c843d1872e7baa.jpg"
        alt="" />
    </div>
    <div class="content p-2 p-md-3">
      <h4>Image hover effect</h4>
      <span class="post-details">25 april 2017 | Roxana Alecu</span>
      <p in:fly={{ y: 200, duration: 2000 }} out:fade class="mt-2">
        lorem impsum lalaasasmfiasf
      </p>
    </div>
  </div>
</div>
