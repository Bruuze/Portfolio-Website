<template>
  <div>
    <form
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      method="POST"
      name="Contact" >

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