<script>
  import Lazy from "svelte-lazy";
</script>

<Lazy offset={200}>
  <div class="card mt-5">
    <h5 class="text-center p-3 my-0">Instagram</h5>
  </div>
  <div class="card">
    <div class="card-content text-center p-4">
      <iframe
        title="instagram feed"
        src="https://www.instagram.com/p/B8dVLFbJbkX/embed"
        height="320"
        frameborder="0"
        scrolling="no"
        allowtransparency="true" />
    </div>
  </div>
</Lazy>
