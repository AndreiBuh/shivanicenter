<script>
  import { stores } from "@sapper/app";
  const { page } = stores();
  $: {
    if (typeof gtag !== "undefined") {
      gtag("config", "G-EVJYXDFFN8", {
        page_path: $page.path
      });
    }
  }
</script>
