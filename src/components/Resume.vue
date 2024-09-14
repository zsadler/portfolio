<script>
import SlotTemplateModal from '@/components/modals/SlotTemplateModal.vue'

export default {
  name: 'App',
  components: { SlotTemplateModal },
  data() {
    return {
      slotModalBtnText: 'Get in Touch!',
      slotModalHeading: 'Let\'s Connect!',
      showSlotModal: false,
      theme: 'dark'
    }
  },
  methods: {
    toggleSlotModal() {
      this.showSlotModal = !this.showSlotModal;
    }
  }
}
</script>

<template>
  <h1>Resume</h1>
  <section>
    <h2>General Overview</h2>
    <ul>
      <li><strong>General:</strong> Team player, strong organization skills, attention to detail, handle multiple
        projects
        efficiently, project lead, perpetual learner, and Agile development methodology.
      </li>
      <li><strong>Tech Stack Overview:</strong> Salesforce Commerce Cloud (SFCC; formerly Demandware; Pipelines,
        Site-Genesis & SFRA), JavaScript, Vue.js, React, Redux, Python, Bash, XML, Django, Wagtail, jQuery, CSS3, HTML5,
        Sass, Git, NPM, Velocity, Material UI, Bootstrap, JSP, ExtJS, WAI-ARIA, WAI-WCAG, Section 508 Compliance, and
        a11y.
      </li>
      <li><strong>Certifications:</strong> Salesforce Commerce Cloud (2014), Python for Everyone Certification (2018)
      </li>
    </ul>
  </section>
  <section class="jobs">
    <h2>Work Experience</h2>
    <div class="job">
      <h3>Smith Optics <span class="job__title">- eCommerce Development Manager;</span> <span class="job__date-range dates">May 2021 - Present</span></h3>
      <div class="job__description">
        <p><strong>eCommerce Manager:</strong> Build out the eCommerce development team. I was the first in-house
          developer/manager. Over the years I have grown the eCommerce site and the team.</p>
        <p><strong>Web Programmer:</strong> Salesforce B2C Commerce Cloud front and backend Web Developer
          for Smith’s global eCommerce websites utilizing Salesforce Commerce Cloud. Global Marketing Blogs platform
          utilizing Wordpress. Agile based software development methodology.</p>
        <p><strong>Tech Stack:</strong> JavaScript, CommonJS, Salesforce Commerce Cloud (SFRA), jQuery, HTML5, CSS3,
          Sass, XML, JSON, Git, AWS Route 53, AWS Lightsail, Bitnami and Wordpress.</p>
      </div>
    </div>
    <div class="job">
      <h3>Burton Snowboards <span class="job__title">- Consumer & Digital Transformation;</span> <span class="job__date-range dates">April 2014 - April 2021</span></h3>
      <div class="job__description">
        <p><strong>Web Programmer:</strong> Global eCommerce website utilizing Salesforce Commerce Cloud. Global Marketing Blogs platform utilizing Wagtail. Agile based software development methodology.</p>
        <p><strong>Tech Stack:</strong> Salesforce Commerce Cloud (Demandware Pipelines, Site-Genesis & SFRA), Wagtail, Javascript, Vue.js, React, Redux, CommonJS , Python, Django, HTML5, CSS3, ISML, XML, jQuery, JSON, Git, NPM, WAI-ARIA, WAI-WCAG and a11y.</p>
      </div>
    </div>
    <div class="job">
      <h3>Dealer.com <span class="job__title">- Consumer Web Products;</span> <span class="job__date-range dates">Sept. 2012 - April 2014</span></h3>
      <div class="job__description">
        <p><strong>Frontend Engineer:</strong> Seamless mobile web platform integration for desktop website using single point CMS editing system. Agile based software development environment.</p>
        <p><strong>Tech Stack:</strong> Velocity, Mobile UI, Bootstrap, HTML5, CSS3, Sass, Compass, XML, jQuery, JS, JSON, and Git.</p>
      </div>
    </div>
    <div class="job">
      <h3>Boston College / JVT Advisors (contract to permanent) <span class="job__title">- ITS Web Group;</span> <span class="job__date-range dates">Nov. 2007 - Sept. 2012</span></h3>
      <div class="job__description">
        <p><strong>User Interface Designer/Developer: </strong>Adobe CMS template development, Helios University Calendar integration and development, Application demonstrations and user training.</p>
        <p><strong>Tech Stack:</strong> CMS, Responsive Web Design, Mobile UI, Adobe CS, XHTML, HTML5, CSS3, PHP, JSP, ASP, XML, jQuery, JS, Git, SVN, MySQL, WAI-ARIA, WAI-WCAG and Section 508 Compliance.</p>
      </div>
    </div>
  </section>
  <section class="freelance-gigs">
    <h2>Freelance</h2>
    <div class="freelance-gig">
      <h3>Greg Francis, Esq. <span class="freelance-gig__date">- April 2006</span></h3>
      <p>Designed an invitation for Barack Obama Meet & Greet Campaign Fundraiser.</p>
    </div>
    <div class="freelance-gig">
      <h3>Level Zero Communications <span class="freelance-gig__date">- September 2004 - 2009</span></h3>
      <p>Web designs, web development, digital marketing and print marketing materials.</p>
    </div>
  </section>
  <section class="education">
    <h2>Education</h2>
    <div class="school">
      <h3>Boston University Metropolitan College <span class="school__degree">- Continuing Education in Computer Science;</span> <span class="school__date-range dates">Spring 2010 - Fall 2011</span>
      </h3>
      <p><strong>Personal/Professional enrichment classes:</strong> Introduction to Programming (C++); Programming with Java; Web Application Development (PHP/JS/jQuery/MySQL).</p>
    </div>
    <div class="school">
      <h3>State University of New York at Purchase College <span class="school__degree">- Bachelors of Fine Art: Photography;</span> <span class="school__date-range dates">Fall 1997 - Spring 2001</span>
      </h3>
      <p><strong>Teaching Assistant:</strong> Photo I, Studio Photo, and Advanced Digital Photo/Web Design.</p>
      <p><strong>Internship:</strong> Faculty selected internship at Gruner + Jahr USA Publishing for Family Circle Magazine as photo assistant.</p>
      <p><strong>Achievements:</strong> Graduated Cum Laude, Dean's List, Faculty Selected Art Show.</p>
    </div>
    <div class="school">
      <h3>Green Mountain College <span class="school__degree">- Bachelors of Fine Arts;</span> <span class="school__date-range dates">Fall 1995 - Spring 1997</span>
      </h3>
      <p><strong>Achievements:</strong> Vision in Photography Award, Dean's List, President's List.</p>
    </div>
  </section>
<section class="contact">
    <h2>Contact</h2>
  <p>For more information:</p>
  <teleport to=".modals">
    <SlotTemplateModal :slotModalHeading="slotModalHeading" :showSlotModal="showSlotModal" :theme="theme" @closeSlotModal="toggleSlotModal">
      <template v-slot:contactInfo>
        <a href="#" class="btn">Hire Me</a>
        <a href="#" class="btn">Interview Me</a>
      </template>
    </SlotTemplateModal>
  </teleport>
  <button @click="toggleSlotModal">{{ slotModalBtnText }}</button>
</section>
</template>

<style scoped>

</style>
