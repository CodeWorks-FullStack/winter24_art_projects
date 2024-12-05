<script setup>
import { AppState } from '@/AppState.js';
import ProjectCard from '@/components/ProjectCard.vue';
import { profilesService } from '@/services/ProfilesService.js';
import { projectsService } from '@/services/ProjectsService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';

const profile = computed(() => AppState.activeProfile)
const projects = computed(() => AppState.projects)

// NOTE gives us information about the current route in the router-view
const route = useRoute()

watch(route, () => {
  getProfileById()
  getProjectsByCreatorId()
}, { immediate: true })

async function getProfileById() {
  try {
    // NOTE pulls the profile id out of the url
    const profileId = route.params.profileId
    await profilesService.getProfileById(profileId)
  } catch (error) {
    Pop.meow(error)
    logger.error('[GETTING PROFILE BY ID]', error)
  }
}

async function getProjectsByCreatorId() {
  try {
    const profileId = route.params.profileId
    await projectsService.getProjectsByCreatorId(profileId)
  } catch (error) {
    Pop.meow(error)
    logger.error('[GETTING PROJECTS BY CREATOR ID]', error)
  }
}
</script>


<template>
  <!-- NOTE if profile is null it will break this whole page -->
  <div v-if="profile" class="container-fluid">
    <section class="row hero align-items-center" :style="{ backgroundImage: `url(${profile.coverImg})` }">
      <div class="col-12">
        <div class="text-center">
          <img :src="profile.picture" :alt="profile.name" class="profile-picture">
          <h1>
            <!-- <span :class="{ 'lobster-regular': profile.graduated == true }"> -->
            <span :class="{ 'lobster-regular': profile.graduated }">
              {{ profile.name }}
            </span>
            <a v-if="profile.resume" :href="profile.resume" target="_blank"
              :title="`Check out my resume at ${profile.resume}!`">
              <i class="mdi mdi-file-certificate-outline"></i>
            </a>
          </h1>
        </div>
      </div>
    </section>
    <section class="row">
      <div class="col-12">
        <div class="p-3">
          <p>{{ profile.bio }}</p>
        </div>
      </div>
    </section>
    <section class="row">
      <div v-for="project in projects" :key="project.id" class="col-md-4 mb-3">
        <ProjectCard :projectProp="project" />
      </div>
    </section>
  </div>
  <div v-else class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center">Loading... <i class="mdi mdi-loading mdi-spin"></i></h1>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

.profile-picture {
  height: 30dvh;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}

.hero {
  min-height: 60dvh;
  background-size: cover;
}

h1 {
  color: var(--bs-light);
  text-shadow: 1px 1px 3px black
}

.lobster-regular {
  font-family: "Lobster", sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>