<template lang="">
  <div>
    <b-button v-b-toggle.sidebar-right>Toggle Sidebar</b-button>
    <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
      <div class="px-3 py-2">
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis
          in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img>
      </div>
    </b-sidebar>
  </div>
</template>
<script>
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
export default {
  name: 'MySlideBar',
  components: {
    SidebarMenu,
  },

};
</script>
<style lang="scss"></style>
