<script setup>
import { Project } from '@/models/Project.js';
import { projectsService } from '@/services/ProjectsService.js';

const props = defineProps({
  projectProp: { type: Project, required: true }
})

function setActiveProject() {
  projectsService.setActiveProject(props.projectProp)
}
</script>


<template>
  <div class="card">
    <img :src="projectProp.coverImg" class="card-img-top" :alt="projectProp.title">
    <div class="card-body">
      <h5 class="card-title">{{ projectProp.title }}</h5>
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <p class="card-text">Project Images: {{ projectProp.projectImgs.length }}</p>
          <button @click="setActiveProject()" class="btn btn-primary" type="button" data-bs-toggle="modal"
            data-bs-target="#projectModal">
            Browse Images
          </button>
        </div>
        <!-- NOTE if your route has a route parameter associated with it (/:profileId) you must supply a value for that route parameter on your router link -->
        <router-link :to="{ name: 'Profile', params: { profileId: projectProp.creatorId } }"
          :title="`Go to ${projectProp.creator.name}'s profile page!`">
          <img :src="projectProp.creator.picture" :alt="projectProp.creator.name" class="creator-img">
        </router-link>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.card-img-top {
  height: 33dvh;
  object-fit: cover;
}

.creator-img {
  height: 5rem;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}
</style>