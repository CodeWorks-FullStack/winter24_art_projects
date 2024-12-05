<script setup>
import { AppState } from '@/AppState.js';
import { projectsService } from '@/services/ProjectsService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const projects = computed(() => AppState.projects)

onMounted(() => {
  getProjects()
})

async function getProjects() {
  try {
    await projectsService.getProjects()
  } catch (error) {
    Pop.meow(error)
    logger.error('[GETTING PROJECTS]', error)
  }
}

</script>

<template>
  <p>{{ projects }}</p>
</template>

<style scoped lang="scss"></style>
