<template>
  <section>
    <form @submit.prevent="formSubmit">
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required v-model="email" placeholder="Enter valid email...">
      <label for="password">Password</label>
      <input type="password" id="password" name="password" required v-model="password">
      <label for="roles">Roles:</label>
      <select id="roles" v-model="role">
        <option value="developer">Web Developer</option>
        <option value="designer">Web Designer</option>
      </select>
      <div class="interests">
        <fieldset class="interests__developer">
          <legend>Choose your web developing interests:</legend>
          <label>
          <input type="checkbox" name="interests" value="vanilla-js" v-model="interests">
          Vanilla JS
        </label>
        <label>
          <input type="checkbox" name="interests" value="vue"  v-model="interests">
          Vue
        </label>
        <label>
          <input type="checkbox" name="interests" value="react" v-model="interests">
          React
        </label>
        </fieldset>
        <fieldset class="interests__design">
          <legend>Choose your web design interests:</legend>
          <label>
            <input type="checkbox" name="interests" value="responsive" v-model="interests">
            Responsive Design
          </label>
          <label>
            <input type="checkbox" name="interests" value="mobileFirst"  v-model="interests">
            Mobile First
          </label>
          <label>
            <input type="checkbox" name="interests" value="ux-uiDesign" v-model="interests">
            UX/UI Design
          </label>
        </fieldset>
      </div>

      <div class="skills">
        <label for="skills">Skills: </label>
        <input id="skills" type="text" name="skills"
               v-model="tempSkill"
               @keydown.enter="addSkill"
        >
        <div class="skills__list">
          <span class="skill__pill" v-for="(skill, index) in skills" :key="index">
            {{ skill }} <span class="remove" :data-skill="skill" @click="removeSkill">x</span>
          </span>
        </div>
      </div>
      <div class="terms">
        <label>
          <input type="checkbox" name="terms" required v-model="acceptTerms">
          I agree to the terms & conditions
        </label>
      </div>
      <button type="submit" :disabled="disable">Sign Up</button>
    </form>
  </section>
  <section>
    TODO - Make look like a console output
    <h3>Binding...</h3>
    <p><strong>Email:</strong> {{ email }}</p>
    <p><strong>Password:</strong> {{ password }}</p>
    <p><strong>Role:</strong> {{ role }}</p>
    <p><strong>Interests:</strong> {{ interests }}</p>
    <p><strong>Skills:</strong> {{ skills }}</p>
    <p><strong>Terms Accepted?</strong> {{ acceptTerms }}</p>
  </section>
</template>

<script>
export default {
  name: 'SignUp',
  components: {  },
  data() {
    return {
      email: '',
      password: '',
      role: 'developer',
      interests: ['vue'],
      tempSkill: '',
      skills: [],
      acceptTerms: false,
      emailError: false,
      passwordError: false,
      isDisabled: true
    }
  },
  methods: {
    addSkill(e) {
      e.preventDefault();
      if (this.skills.includes(this.tempSkill)) {
        this.tempSkill = ''
        alert('Skill already added!')
      }
      if ( this.tempSkill) {
        this.skills.push(this.tempSkill)
        this.tempSkill = ''
      }
    },
    removeSkill(e) {
      // remove the tempSkill from the skills array
      this.skills = this.skills.filter(skill => skill !== e.target.dataset.skill)
    },
    formSubmit() {
      alert('Form Submitted!')
      // validate the form
      // validate the email
      this.emailError = !this.email.includes('@')
      // validate the password
      this.passwordError = this.password.length < 8
    },
    disable() {
      return this.emailError || this.passwordError || !this.acceptTerms
    }
  }
}

</script>

<style scoped>
.interests label,
.terms label {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.terms,
.terms label {
  margin: 1rem 0 .75rem;
}
.terms {
  padding-left: 1rem;
}
.skill__pill {
  display: inline-block;
  padding: .25rem .5rem;
  margin: .25rem;
  background-color: #8705f1;
  color: #fff;
  border-radius: .5rem;
}
</style>
