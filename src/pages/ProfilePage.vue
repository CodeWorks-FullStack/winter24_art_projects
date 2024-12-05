<script setup>
import { profilesService } from '@/services/ProfilesService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

// NOTE gives us information about the current route in the router-view
const route = useRoute()

onMounted(() => {
  getProfileById()
})

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
</script>


<template>
  <h1>Profile Page!</h1>
</template>


<style lang="scss" scoped></style>