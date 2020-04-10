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
  /* social share */

  /* ul {
    display: flex;
    justify-content: center;
    height: 40px;
  }
  ul li {
    list-style: none;
  }
  ul li a {
    display: block;
    width: 40px;
    height: 40px;
    line-height: 40px;
    color: #fff;
    margin: 0 2px;
    border-radius: 50%;
    font-size: 18px;
    transition: 1s;
  } */

  /* ul li:nth-child(1) a {
    background: #3b5999;
  }
  ul li:nth-child(2) a {
    background: #0077b5;
  }
  ul li:nth-child(3) a {
    background: #ee2a7b;
  } */
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

  /* ul li a:hover {
    transform: translateY(-5px);
    transition: 0.4s ease-out;
  } */
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

<!-- <div class="article-share">
  <ul>
    <li>
      <a href="www.facebook.com" rel="noopener">
        <i class="fa fa-facebook" aria-hidden="true" />
      </a>
    </li>
    <li>
      <a href="www.linkedin.com" rel="noopener">
        <i class="fa fa-linkedin" aria-hidden="true" />
      </a>
    </li>
    <li>
      <a href="www.instagram.com" rel="noopener">
        <i class="fa fa-instagram" aria-hidden="true" />
      </a>
    </li>
  </ul>
</div> -->

<!-- <iframe
  src="https://www.facebook.com/plugins/share_button.php?href=https%3A%2F%2Fwww.shivanicenter.ro%2Farticole%2F{category_slug}%2F{slug}&layout=button_count&size=large&width=88&height=28&appId"
  width="88"
  height="28"
  style="border:none;overflow:hidden"
  scrolling="no"
  frameborder="0"
  allowTransparency="true"
  allow="encrypted-media"
  title={id} /> -->
