<script>
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();
  export let likes;
  export let id;
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

  ul {
    margin: 0 auto;
    margin-bottom: 30px;
    padding: 0;
    display: flex;
    width: 320px;
    height: 60px;
  }
  ul li {
    list-style: none;
  }
  ul li a {
    display: block;
    width: 60px;
    height: 60px;
    line-height: 60px;
    color: #fff;
    margin: 0 2px;
    border-radius: 50%;
    font-size: 30px;
    transition: 1s;
  }

  ul li:nth-child(1) a {
    background: #3b5999;
  }
  ul li:nth-child(2) a {
    background: #55acee;
  }
  ul li:nth-child(3) a {
    background: #3b5999;
  }
  ul li:nth-child(4) a {
    background: #0077b5;
  }
  ul li:nth-child(5) a {
    background: #e4405f;
  }

  /* like heart */
  .heart-box i,
  .heart-box span {
    font-size: 25px;
  }
  .heart-box span {
    color: #262626;
  }

  .heart-box i {
    transition: 0.4s;
    color: #f50057;
  }

  .heart-box i:hover {
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

<ul>
  <li>
    <a href="www.facebook.com">
      <i class="fa fa-facebook" aria-hidden="true" />
    </a>
  </li>
  <li>
    <a href="www.twitter.com">
      <i class="fa fa-twitter" aria-hidden="true" />
    </a>
  </li>
  <li>
    <a href="www.linkedin.com">
      <i class="fa fa-linkedin" aria-hidden="true" />
    </a>
  </li>
  <li>
    <a href="www.instagram.com">
      <i class="fa fa-instagram" aria-hidden="true" />
    </a>
  </li>
  <li>
    <a href="www.google.com">
      <i class="fa fa-google-plus" aria-hidden="true" />
    </a>
  </li>
</ul>
