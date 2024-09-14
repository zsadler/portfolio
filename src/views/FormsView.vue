<script>
import SignUp from '@/components/forms/SignUp.vue'
export default {
  name: 'FormsView',
  components: { SignUp }
}
</script>

<template>
    <h1>Forms</h1>
    <h2>They're Sexy and you know it!</h2>
    <SignUp />
</template>

<style>
section form div {
  margin: 0;
}
form {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: .5rem auto;
  max-width: 420px;
  background-color: #f8f8f8;
  text-align: left;
  padding: 2rem 2.5rem;
  border-radius: 2rem;
}
label,
fieldset {
  color: #4c4b4b;
  display: inline-flex;
  margin:1.5rem 0 .2rem 0;
  font-size: .85rem;
  text-transform: uppercase;
  letter-spacing: .015rem;
  font-weight: 600;
}
fieldset {
  display: flex;
  flex-direction: column;
  margin: 1.5rem 0 0;
  border: none;
}
fieldset label {
  margin: .5rem .75rem;
}
input,
select {
  display: block;
  padding: .85rem .5rem;
  height: 45px;
  min-width: 250px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ccc;
  color: #4c4b4b;
  margin-bottom: 0.5rem;
}
input[type="checkbox"] {
  display: inline-block;
  width: 24px;
  min-width: 24px;
  height: 24px;
  margin-right: .5rem;
  position: relative;
  top: 2px;
}
</style>
