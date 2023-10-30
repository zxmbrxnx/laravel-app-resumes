<template>
  <div>
    <h3>{{ title }}</h3>
    <BFormTags v-model="target[prop]" no-outer-focus class="mb-2">
      <template
        v-slot="{
          tags,
          inputAttrs,
          inputHandlers,
          tagVariant,
          addTag,
          removeTag,
        }"
      >
        <BInputGroup class="mb-2">
          <BFormInput
            v-bind="inputAttrs"
            v-on="inputHandlers"
            placeholder="Agregar tag - Presione enter para agregar"
            class="form-control"
          ></BFormInput>
          <BInputGroupAppend>
            <BButton @click="addTag()" variant="primary"><i class="fas fa-plus"></i></BButton>
          </BInputGroupAppend>
        </BInputGroup>
        <div class="d-inline-block" style="font-size: 1.2rem;">
          <BFormTag
            v-for="tag in tags"
            @remove="removeTag(tag)"
            :key="tag"
            :title="tag"
            :variant="tagVariant"
            class="mr-1"
            >{{ tag }}</BFormTag
          >
        </div>
      </template>
    </BFormTags>
  </div>
</template>

<script>
/**
 * Display a list of inputs.
 */
import mixin from './mixin';
import {
  BFormTags,
  BInputGroup,
  BFormInput,
  BInputGroupAppend,
  BFormTag,
  BButton
} from 'bootstrap-vue';
import 'vue-form-generator/dist/vfg.css';

export default {
  name: 'TagsForm',
  components: {
    BFormTags,
    BInputGroup,
    BFormInput,
    BInputGroupAppend,
    BFormTag,
    BButton
  },

  mixins: [mixin],
};
</script>

<style>
.align-items-baseline {
  align-items: center !important;
}
.close{
    padding: 3px !important;
}
</style>
