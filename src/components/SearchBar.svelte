<script>
  import Icon from "fa-svelte";
  import { faSearch } from "@fortawesome/free-solid-svg-icons";
</script>

<style>
  .wrapper {
    max-width: 400px;
    width: 100%;
    padding: 15px;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    font-family: "Comfortaa", cursive;
    background: rgba(0, 0, 0, 0.6);
  }

  .wrapper .input {
    width: 85%;
    padding: 5px 10px;
    border: none;
    font-weight: bold;
  }

  .searchbtn {
    background: #ffffff;
    width: 15%;
    position: relative;
    cursor: pointer;
  }

</style>

<div class="wrapper">
  <input type="text" class="input" placeholder="Cauta in site" />
  <div class="searchbtn">
    <Icon icon={faSearch} class="icon" />
  </div>
</div>
