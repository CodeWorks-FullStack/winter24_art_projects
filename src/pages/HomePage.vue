<script setup>
import { projectsService } from '@/services/ProjectsService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { onMounted } from 'vue';

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
  <p>Projects</p>
</template>

<style scoped lang="scss"></style>
