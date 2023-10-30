<template>
  <div class="d-sm-inline-flex w-100">
    <div>
      <img :src="image" alt="Imagen" />
    </div>
    <div class="align-self-center ml-sm-3 pl-sm-3 mt-3 mt-sm-0">
      <div class="custom-file">
        <input
          id="customFile" lang="es"
          class="custom-file-input"
          type="file"
          @change="onImageChange($event)"
        />
        <label class="custom-file-label" for="customFile"
          >Seleccionar archivo</label
        >
      </div>
    </div>
  </div>
</template>

<script>
import { abstractField } from 'vue-form-generator';
export default {
  name: 'FieldResumeImage',

  mixins: [abstractField],

  data() {
    return {
      reader: new FileReader(),
      image:
        'https://raw.githubusercontent.com/antoniosarosi/jsonresume-manager/master/storage/app/public/images/default.png',
    };
  },
  created() {
    this.reader.onload = (e) => {
      const blob = e.target.result;
      this.image = blob;
      this.model[this.schema.model] = blob;
    };
  },
  methods: {
    onImageChange(e) {
      console.log(e.target.files);
      this.reader.readAsDataURL(e.target.files[0]);
    },
  },
};
</script>

<style scoped>
img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
</style>
