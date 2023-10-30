<template>
  <BCard no-body>
    <BTabs pills card vertical v-model="tab">
      <slot></slot>
      <div class="text-center">
        <BButtonGroup class="w-100">
          <BButton block class="m-3 font-weight-bold" variant="secondary" @click.prevent="tab--"> Anterior </BButton>
          <BButton block class="m-3 font-weight-bold" variant="primary" @click.prevent="tab++"> Siguiente </BButton>
        </BButtonGroup>
      </div>
    </BTabs>
  </BCard>
</template>

<script>
import { BTabs, BCard, BButtonGroup, BButton } from 'bootstrap-vue';
export default {
  name: 'Tabs',

  components: {
    BTabs,
    BCard,
    BButtonGroup,
    BButton,
  },

  data(){
    return {
        tab: 5,
    }
  }
};
</script>
