<template>
  <div>
    <form 
      id="subscribe"
      name="subscribe" 
      method="post" 
      netlify 
      netlify-honeypot="bot-field" 
      data-netlify="true" 
      @submit.prevent="formSubmit"
    >
      <input type="hidden" name="form-name" value="subscribe">
      <input type="email" name="email" required>
      <input type="text" name="testing">
      <button>Submit</button>
    </form>
  </div>
</template>


<script>
export default{
  methods: {
    formSubmit() {
      let myForm = document.getElementById("subscribe");
      let formData = new FormData(myForm);
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      })
      .then(document.getElementById('subscribe').innerHTML= `
            <div>
                Thank you! I received your submission.
            </div>
            `)
      .catch((error) => console.log(error));
    }
  }
}
</script>