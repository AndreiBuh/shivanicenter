<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  export let slug;
  export let category_slug;
  export let likes;
  export let id;

  console.log(slug, category_slug, likes, id);
  let liked = false;

  const handleLike = () => {
    liked = !liked;
    if (liked) {
      likes += 1;
    } else {
      likes -= 1;
    }
    dispatch("like", {
      likes,
      id
    });
  };
</script>

<style>
  /* like heart */
  .heart-box i,
  .heart-box span {
    font-size: 20px;
  }
  .heart-box span {
    color: #262626;
  }

  .heart-box i {
    transition: 0.4s;
    color: #f50057;
  }

  .heart-box:hover {
    color: #d20057;
    cursor: pointer;
  }
</style>

<div class="heart-box">
  <p class="text-center">
    <i
      id="btn"
      class="fa"
      class:fa-heart={liked}
      class:fa-heart-o={!liked}
      on:click={handleLike} />
    <span>{likes}</span>
  </p>
</div>
