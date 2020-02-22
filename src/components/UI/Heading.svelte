<script>
  export let title;
</script>

<style>
  .decor-heading {
    text-align: center;
    text-transform: uppercase;
    overflow: hidden;
    font-size: 25px;
    line-height: 40px;
    font-weight: 500;
    letter-spacing: 3px;
    margin: 0 0 65px;
    font-family: "Oswald", sans-serif;
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
</style>

<h2 class="decor-heading">
  <span>{title}</span>
</h2>
