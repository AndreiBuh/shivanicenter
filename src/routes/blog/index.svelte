<script>
  import ApolloClient from "apollo-boost";
  import { setClient, getClient, query } from "svelte-apollo";
  import { gql } from "apollo-boost";

  const client = new ApolloClient({
    uri: "https://todos-graphql.herokuapp.com/graphql"
  });
  setClient(client);

  const GET_TODOS = gql`
    {
      getTodos {
        id
        text
        done
      }
    }
  `;

  const newClient = getClient();

  const todos = query(newClient, { query: GET_TODOS });
</script>

<h1>blog</h1>

{#await $todos}
  Loading...
{:then result}
  {#each result.data.getTodos as todo}
    <ul>
      <li>{todo.text}</li>
    </ul>
  {/each}
{:catch error}
  {error}
{/await}
