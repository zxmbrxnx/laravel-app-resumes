<template>
  <div class="my-2">
    <div v-for="(form, i) in target[prop]" :key="i" class="row mb-3">
      <div class="col-sm">
        <div class="card">
          <div class="card-header d-sm-flex justify-content-sm-between">
            <div>
              <h3>{{ title }} #{{ i + 1 }}</h3>
            </div>
            <div>
              <button
                class="btn btn-danger btn-block"
                @click.prevent="remove(i)"
              >
                <i class="fa fa-trash"></i> Borrar
              </button>
            </div>
          </div>
          <div class="card-body">
            <VueFormGenerator
              :schema="schema"
              :model="target[prop][i]"
              :options="{
                validateAfterLoad: true,
                validateAfterChanged: true,
                validateAsync: true,
              }"
            />
            <div v-for="(subform, j) in subforms" :key="j">
              <component
                :is="subform.component"
                v-bind="{model: target[prop][i], ...subform.props}"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="btn btn-primary" type="button" @click.prevent="add()">
      <i class="fas fa-plus"></i> New
    </button>
  </div>
</template>

<script>
import { component as VueFormGenerator } from 'vue-form-generator';
import mixin from './mixin';

export default {
  name: 'DynamicForm',

  mixins: [mixin],

  components: {
    VueFormGenerator,
  },

  props: {
    schema: {
      type: Object,
      required: true,
    },
    subforms: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
};
</script>
