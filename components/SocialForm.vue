<template>
  <div>
    <form 
      id="subscribe"
      name="subscribe" 
      method="post" 
      netlify
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      @submit.prevent="onFormSubmit"
    >
      <input type="hidden" name="form-name" value="subscribe">
      <input type="email" name="email" required>
      <button>Submit</button>
    </form>
  </div>
</template>


<script>
const onFormSubmit = (e) => {
  let myForm = document.getElementById("subscribe");
  let formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
  .then(result => showThanks.value = true)
  .catch((error) => console.log(error));
}
</script>