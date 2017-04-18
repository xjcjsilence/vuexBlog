<template>
    <div class="container-fluid wrap-content">
        <div class="row index-content">
            <sidebar></sidebar>
        </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'

require("assets/base.css")

export default {
  name: 'app',
  components: {
    Sidebar
  }
}
</script>

<style>
</style>
