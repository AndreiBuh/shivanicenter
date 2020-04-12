<script>
  export let title;
</script>

<style>
  .decor-heading {
    text-align: center;
    text-transform: uppercase;
    overflow: hidden;
    font-size: 30px;
    line-height: 34px;
    font-weight: 500;
    letter-spacing: 3px;
    margin: 0 0 2em 0;
    font-family: var(--font-main), sans-serif;
  }

  .decor-heading span {
    display: inline-block;
    vertical-align: top;
    position: relative;
    padding: 0 40px;
  }

  .decor-heading span:before,
  .decor-heading span:after {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    height: 2px;
    right: -9999px;
    background: #000;
  }

  .decor-heading span:after {
    right: 100%;
    left: -9999px;
  }

  .elegant-shadow {
    color: var(--main-bg-color);
  }

  @media screen and (max-width: 768px) {
    .decor-heading {
      font-size: 25px;
    }
  }
</style>

<h2 class="decor-heading elegant-shadow">
  <span>{title}</span>
</h2>
