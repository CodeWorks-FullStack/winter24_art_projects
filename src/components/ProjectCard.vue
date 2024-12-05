<script setup>
import { Project } from '@/models/Project.js';

defineProps({
  projectProp: { type: Project, required: true }
})
</script>


<template>
  <div class="card">
    <img :src="projectProp.coverImg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">{{ projectProp.title }}</h5>
      <div class="d-flex justify-content-between align-items-center">
        <div>
          <p class="card-text">Project Images: {{ projectProp.projectImgs.length }}</p>
          <button class="btn btn-primary" type="button">Browse Images</button>
        </div>
        <img :src="projectProp.creator.picture" :alt="projectProp.creator.name" class="creator-img">
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