<script setup>
import { AppState } from '@/AppState.js';
import { computed } from 'vue';


const project = computed(() => AppState.activeProject)
</script>


<template>
  <!-- NOTE bootstrap still needs these two upper divs to open the modal -->
  <div class="modal fade" id="projectModal" tabindex="-1" aria-labelledby="projectModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <!-- NOTE do not show the inner contents of the modal until there is a project in the appstate -->
      <div v-if="project != null" class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="projectModalLabel">
            {{ project.title }} by {{ project.creator.name }}
          </h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div v-for="projectImg in project.projectImgs" :key="projectImg">
            <img :src="projectImg" alt="">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
img {
  width: 100%;
}
</style>