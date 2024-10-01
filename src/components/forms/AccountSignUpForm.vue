<template>
  <notification-message msgType="success" header="Subscribed!">
    <p>Thank you for subscribing to our newsletter.</p>
  </notification-message>
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
  <section class="console-output">
      <div class=fakeMenu>
          <div class="fakeButtons fakeClose"></div>
          <div class="fakeButtons fakeMinimize"></div>
          <div class="fakeButtons fakeZoom"></div>
      </div>
      <div class="fakeScreen">
          <p class="line1">$ yo gulp-webapp<span class="cursor1">_</span></p>
          <p class="line2">Out of the box I include HTML5 Boilerplate, jQuery, and a gulpfile.js to build your app.<span class="cursor2">_</span></p>
          <p class="line3">[?] What more would you like? (Press space to select)<span class="cursor3">_</span></p>
          <p class="line4">><span class="cursor4">_</span></p>
      </div>

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
import NotificationMessage from '@/components/notifications/notificationMessage.vue'

export default {
  name: 'SignUp',
  components: { NotificationMessage },
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

body {
    background-color: #272727;
    padding: 10px;
}

.fakeButtons {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: 1px solid #000;
    position: relative;
    top: 6px;
    left: 6px;
    background-color: #ff3b47;
    border-color: #9d252b;
    display: inline-block;
}

.fakeMinimize {
    left: 11px;
    background-color: #ffc100;
    border-color: #9d802c;
}

.fakeZoom {
    left: 16px;
    background-color: #00d742;
    border-color: #049931;
}

.fakeMenu {
    width: 550px;
    box-sizing: border-box;
    height: 25px;
    background-color: #bbb;
    margin: 0 auto;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
}

.fakeScreen {
    background-color: #151515;
    box-sizing: border-box;
    width: 550px;
    margin: 0 auto;
    padding: 20px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
}

p {
    position: relative;
    left: 50%;
    margin-left: -8.5em;
    text-align: left;
    font-size: 1.25em;
    font-family: monospace;
    white-space: normal;
    overflow: hidden;
    width: 0;
}

span {
    color: #fff;
    font-weight: bold;
}

.line1 {
    color: #9CD9F0;
    -webkit-animation: type .5s 1s steps(20, end) forwards;
    -moz-animation: type .5s 1s steps(20, end) forwards;
    -o-animation: type .5s 1s steps(20, end) forwards;
    animation: type .5s 1s steps(20, end) forwards;
}

.cursor1 {
    -webkit-animation: blink 1s 2s 2 forwards;
    -moz-animation: blink 1s 2s 2 forwards;
    -o-animation: blink 1s 2s 2 forwards;
    animation: blink 1s 2s 2 forwards;
}

.line2 {
    color: #CDEE69;
    -webkit-animation: type .5s 4.25s steps(20, end) forwards;
    -moz-animation: type .5s 4.25s steps(20, end) forwards;
    -o-animation: type .5s 4.25s steps(20, end) forwards;
    animation: type .5s 4.25s steps(20, end) forwards;
}

.cursor2 {
    -webkit-animation: blink 1s 5.25s 2 forwards;
    -moz-animation: blink 1s 5.25s 2 forwards;
    -o-animation: blink 1s 5.25s 2 forwards;
    animation: blink 1s 5.25s 2 forwards;
}

.line3 {
    color: #E09690;
    -webkit-animation: type .5s 7.5s steps(20, end) forwards;
    -moz-animation: type .5s 7.5s steps(20, end) forwards;
    -o-animation: type .5s 7.5s steps(20, end) forwards;
    animation: type .5s 7.5s steps(20, end) forwards;
}

.cursor3 {
    -webkit-animation: blink 1s 8.5s 2 forwards;
    -moz-animation: blink 1s 8.5s 2 forwards;
    -o-animation: blink 1s 8.5s 2 forwards;
    animation: blink 1s 8.5s 2 forwards;
}

.line4 {
    color: #fff;
    -webkit-animation: type .5s 10.75s steps(20, end) forwards;
    -moz-animation: type .5s 10.75s steps(20, end) forwards;
    -o-animation: type .5s 10.75s steps(20, end) forwards;
    animation: type .5s 10.75s steps(20, end) forwards;
}

.cursor4 {
    -webkit-animation: blink 1s 11.5s infinite;
    -moz-animation: blink 1s 8.5s infinite;
    -o-animation: blink 1s 8.5s infinite;
    animation: blink 1s 8.5s infinite;
}

@-webkit-keyframes blink {
    0% {
        opacity: 0;
    }
    40% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@-moz-keyframes blink {
    0% {
        opacity: 0;
    }
    40% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@-o-keyframes blink {
    0% {
        opacity: 0;
    }
    40% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@keyframes blink {
    0% {
        opacity: 0;
    }
    40% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
    90% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}

@-webkit-keyframes type {
    to {
        width: 17em;
    }
}

@-moz-keyframes type {
    to {
        width: 17em;
    }
}

@-o-keyframes type {
    to {
        width: 17em;
    }
}

@keyframes type {
    to {
        width: 17em;
    }
}
</style>
