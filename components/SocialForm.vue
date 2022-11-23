<template>
  <div>
    <form
      id="myForm"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      method="POST"
      name="Contact" 
      onSubmit={{handleSubmit}}>

      <input type="hidden" name="form-name" value="Contact" />

      <p>
        <label>Name <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Email <input type="email" name="email" /></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>

    </form>
  </div>
</template>

<script>
function encode(data) {
  return Object.keys(data)
    .map(
      (key) =>
        encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
    )
    .join("&");
}

const handleSubmit = (event) => {
  event.preventDefault();
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: encode({
      "form-name": event.target.getAttribute("name"),
      ...name,
    }),
  })
    .catch((error) => alert(error));
};
</script>