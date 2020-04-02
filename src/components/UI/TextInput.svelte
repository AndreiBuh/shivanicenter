<script>
  export let controlType;
  export let rows;
  export let id;
  export let label = "";
  export let value;
  export let type = "text";
  export let validityMessage;
  export let valid;
  export let placeholder;

  let touched = false;
</script>

<style>
  input,
  label,
  p {
    font-family: "Oswald";
  }
  input {
    width: 100%;
    height: 50px;
    border: 1px solid #e1e1e1;
    font-size: 16px;
    color: #aaaab3;
    padding-left: 25px;
  }
  input::placeholder {
    color: #aaaab3;
  }
  textarea {
    width: 100%;
    border: 1px solid #e1e1e1;
    font-size: 16px;
    color: #aaaab3;
    padding-left: 25px;
    padding-top: 12px;
    resize: none;
  }
  textarea::placeholder {
    color: #aaaab3;
  }

  label {
    color: #fff;
  }

  .invalid {
    border-color: #ec6969;
  }

  .error-message {
    color: #ffc5c5;
    margin: 0.25rem 0;
  }
</style>

{#if label}
  <label for={id}>{label}</label>
{/if}
{#if controlType === 'textarea'}
  <textarea
    class:invalid={!valid && touched}
    {rows}
    {id}
    {value}
    on:input
    on:blur={() => (touched = true)} />
{:else}
  <input
    class:invalid={!valid && touched}
    {type}
    {id}
    {value}
    on:input
    on:blur={() => (touched = true)}
    {placeholder} />
{/if}
{#if validityMessage && !valid && touched}
  <p class="error-message text-center">{validityMessage}</p>
{/if}
