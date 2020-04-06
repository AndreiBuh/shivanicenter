<script>
  export let content;
  export let small;
</script>

<style>
  .btn {
    border: none;
    display: block;
    text-align: center;
    cursor: pointer;
    text-transform: uppercase;
    outline: none;
    overflow: hidden;
    position: relative;
    color: #fff;
    font-weight: 700;
    font-size: 12px;
    background-color: var(--main-bg-color);
    padding: 10px 30px;
    margin: 0 auto;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }

  .small {
    padding: 8px 20px !important;
    font-size: 9px;
    margin-top: 10px;
  }

  .btn span {
    position: relative;
    z-index: 1;
  }

  .btn:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 490%;
    width: 140%;
    background: var(--main-color);
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
    transform: translateX(-98%) translateY(-25%) rotate(45deg);
  }

  .btn:hover:after {
    -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
    transform: translateX(-9%) translateY(-25%) rotate(45deg);
  }
</style>

<button class="btn" class:small>
  <span>{content}</span>
</button>
