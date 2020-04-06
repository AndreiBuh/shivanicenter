<script>
  import Lazy from "svelte-lazy";
</script>

<Lazy offset={200}>
  <div class="card mt-5">
    <h5 class="text-center p-3 my-0">Facebook</h5>
  </div>
  <div class="card">
    <div class="card-content text-center p-4">
      <iframe
        title="facebook feed"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FPsihologRoxanaAlecu%2F&tabs=timeline&width=340&height=320&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        height="300"
        style="border:none;overflow:hidden"
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media" />
    </div>
  </div>
</Lazy>
