<script>
  import Lazy from "svelte-lazy";
</script>

<style>
  .height-div {
    background: -moz-linear-gradient
      (top, rgba(255, 255, 255, 1) 80%, transparent 100%);
    background: -webkit-linear-gradient
      (top, rgba(255, 255, 255, 1) 80%, transparent 100%);
    background: linear-gradient
      (to bottom, rgba(255, 255, 255, 1) 80%, transparent 100%);
  }
</style>

<Lazy offset={200}>
  <div class="card mt-5">
    <h5 class="text-center p-3 my-0">Instagram</h5>
  </div>
  <div class="card">
    <div class="card-content text-center p-4">
      <iframe
        title="instagram feed"
        src="https://www.instagram.com/p/B8dVLFbJbkX/embed"
        height="400"
        frameborder="0"
        scrolling="no"
        allowtransparency="true" />
    </div>
  </div>
</Lazy>
