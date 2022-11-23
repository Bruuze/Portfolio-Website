<template>
  <div>
    <form 
      id="subscribe"
      name="subscribe" 
      method="post" 
      netlify 
      netlify-honeypot="bot-field" 
      data-netlify="true" 
      @submit.prevent="onFormSubmit"
    >
      <input type="hidden" name="form-name" value="subscribe">
      <input type="email" name="email" required>
      <button @click="onFormSubmit">Submit</button>
    </form>
  </div>
</template>


<script>
const onFormSubmit = (e) => {
  console.log('worked');
  let myForm = document.getElementById("subscribe");
  let formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
  .then(console.log(r))
  .catch((error) => console.log(error));
}
</script>