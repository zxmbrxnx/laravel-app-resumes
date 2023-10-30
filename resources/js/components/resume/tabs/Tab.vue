<template>
  <BTab>
    <template #title>
        <div class="d-flex text-left">
            <div>
                <i :class="icon"></i>
            </div>
            <div class="ml-2 font-weight-bold d-none d-md-block">
                {{ title }}
            </div>
        </div>
    </template>
    <slot></slot>
  </BTab>
</template>

<script>
import { BTab } from 'bootstrap-vue';
export default {
  name: 'Tab',

  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
  },

  components: {
    BTab,
  },
};
</script>
