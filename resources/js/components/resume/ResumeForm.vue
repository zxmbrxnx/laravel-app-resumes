<template>
  <div>
    <h1>Hoja de vida</h1>
    <Tabs class="mt-2">
      <Tab title="Datos basicos" icon="fas fa-user">
        <VueFormGenerator
          :schema="schemas.basics"
          :model="resume.content.basics"
          :options="options"
        />
        <VueFormGenerator
          :schema="schemas.location"
          :model="resume.content.basics.location"
          :options="options"
        />
      </Tab>
      <Tab title="Fotografia" icon="fas fa-camera">
        <VueFormGenerator
          :schema="schemas.photo"
          :model="resume.content.basics"
          :options="options"
        />
      </Tab>
      <Tab title="Educacion" icon="fas fa-briefcase">
        <h3>Estudios</h3>
        <DynamicForm
          title="Empresa"
          :model="resume.content"
          self="education"
          :schema="schemas.education"
          :subforms="subforms.education"
        />
      </Tab>
      <Tab title="Experiencia laboral" icon="fas fa-briefcase">
        <h3>Experiencia laboral</h3>
        <DynamicForm
          title="Empresa"
          :model="resume.content"
          self="work"
          :schema="schemas.work"
          :subforms="subforms.work"
        />
      </Tab>
      <Tab title="Redes sociales" icon="fas fa-globe">
        <h3>Redes sociales</h3>
        <DynamicForm
          title="Profile"
          :model="resume.content.basics"
          self="profiles"
          :schema="schemas.profile"
        />
      </Tab>
      <Tab title="Reconocimientos" icon="fas fa-award">
        <h3>Premios</h3>
        <DynamicForm
          title="Awards"
          :model="resume.content"
          self="awards"
          :schema="schemas.awards"
        />
      </Tab>
      <Tab title="Skills" icon="fas fa-lightbulb">
        <h3>Skills</h3>
        <DynamicForm
          title="Skills"
          :model="resume.content"
          self="skills"
          :schema="schemas.skills"
          :subforms="subforms.skills"
        />
      </Tab>
    </Tabs>
  </div>
</template>

<script>
//Schemas
import jsonresume from './jsonresume';
import basics from './schema/basics/basics';
import location from './schema/basics/location';
import photo from './schema/basics/photo';
import profile from './schema/basics/profile';
import work from './schema/work';
import education from './schema/education';
import skills from './schema/skills';
import awards from './schema/awards';

//Components
import Tabs from './tabs/Tabs.vue';
import Tab from './tabs/Tab.vue';
import FieldResumeImage from './vfg/FieldResumeImage.vue';
import DynamicForm from './dynamic/DynamicForm.vue';
import ListForm from './dynamic/ListForm.vue';
import TagsForm from './dynamic/TagsForm.vue';

import { component as VueFormGenerator } from 'vue-form-generator';
import 'vue-form-generator/dist/vfg.css';

export default {
  name: 'ResumeForm',

  components: {
    Tabs,
    Tab,
    VueFormGenerator,
    FieldResumeImage,
    DynamicForm,
    ListForm,
    TagsForm,
  },

  props: {
    update: false,
    resume: {
        type: Object,
        default: () => ({
            id: null,
            title: 'Resume title',
            content: jsonresume,
        })
    }
  },

  data() {
    return {
      schemas: {
        basics,
        location,
        photo,
        profile,
        work,
        education,
        skills,
        awards,
      },

      subforms: {
        work: [
          {
            component: TagsForm,
            props: {
              title: 'Highlights',
              self: 'highlights',
            },
          },
        ],
        education: [
          {
            component: TagsForm,
            props: {
              title: 'Cursos adquiridos',
              self: 'courses',
            },
          },
        ],
        skills: [
          {
            component: TagsForm,
            props: {
              title: 'Skills',
              self: 'keywords',
            },
          },
        ],
      },

      options: {
        validateAfterLoad: true,
        validateAfterChanged: true,
        validateAsync: true,
      },
    };
  },
};
</script>
