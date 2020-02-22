<script>
  import Nav from "../components/Global/Nav.svelte";
  import Footer from "../components/Global/Footer.svelte";
  export let segment;
</script>

<style>
  main {
    position: relative;
    margin: 0 auto;
    box-sizing: border-box;
    margin-top: 220px;
  }

  /*  Servicii descriptions style START */
  :global(.service-title) {
    font-family: "Special Elite";
    color: #fff;
  }
  :global(.img-top) {
    width: 70%;
  }
  :global(.img-top, .img-middle) {
    border-radius: 10px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }

  :global(.paragraph-text, .paragraph-list-items) {
    font-family: "Josefin Sans";
    line-height: 29px;
    font-size: 16px;
    color: #fff;
  }
  :global(.text-elegant) {
    color: #dfa974;
  }
  :global(blockquote) {
    position: relative;
    margin: 50px 0;
    font-weight: 700;
    /* border-top: 1px dashed #fff; */
    display: block;
    /* border-bottom: 1px dashed #fff; */
    padding: 8px 65px;
    text-align: center;
    line-height: 1.6em;
    font-size: 1.1em;
    border-left: none;
    border-right: none;
    color: #fff;
  }
  :global(blockquote::before) {
    top: 20px;
    content: "\201C";
    position: absolute;
    left: 0;
    font-size: 75px;
    color: #fff;
    font-family: Georgia, "Times New Roman", Times, serif;
    font-style: initial;
  }
  /*  Servicii pages style END */

  /* Despre noi pages style START */
  :global(hr.style-hr) {
    border: 0;
    height: 1px;
    background-image: linear-gradient(
      to right,
      rgba(223, 169, 116, 0),
      rgba(223, 169, 116, 0.55),
      rgba(223, 169, 116, 0)
    ) !important;
  }
  :global(.end) {
    font-family: "Pinyon Script", cursive;
    font-size: 30px;
    color: #fff;
  }
  :global(.links) {
    text-decoration: none !important;
    color: #dfa974;
    opacity: 0.8;
  }
  /* Despre noi pages style END */

  @media screen and (max-width: 768px) {
    :global(.img-top) {
      width: 100%;
    }
    :global(.service-title) {
      font-size: 18px;
    }

    :global(blockquote::before) {
      font-size: 40px;
    }

    :global(blockquote) {
      padding: 6px 30px;
      font-size: 14px;
    }

    :global(main) {
      margin-top: 70px !important;
    }
  }
</style>

<Nav {segment} />
<main>
  <slot />
</main>
<Footer />
