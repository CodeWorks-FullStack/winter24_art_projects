<script setup>
import { AppState } from '@/AppState.js';
import { accountService } from '@/services/AccountService.js';
import { logger } from '@/utils/Logger.js';
import Pop from '@/utils/Pop.js';
import { computed, onMounted, ref } from 'vue';

const account = computed(() => AppState.account)

onMounted(() => editableAccountData.value = { ...account.value })

const editableAccountData = ref({
  name: '',
  picture: '',
  bio: '',
  coverImg: '',
  resume: '',
  graduated: false
})

async function updateAccount() {
  try {
    await accountService.updateAccount(editableAccountData.value)
  } catch (error) {
    Pop.meow(error)
    logger.error('[UPDATING ACCOUNT]', error)
  }
}

</script>


<template>
  <form @submit.prevent="updateAccount()">
    <div class="mb-3">
      <label for="name">Account Name</label>
      <input v-model="editableAccountData.name" type="text" id="name" maxlength="100" required>
    </div>
    <div class="mb-3">
      <label for="picture">Account Picture</label>
      <input v-model="editableAccountData.picture" type="url" id="picture" maxlength="500">
    </div>
    <div class="mb-3">
      <label for="bio">Account Bio</label>
      <textarea v-model="editableAccountData.bio" id="bio" class="w-100" maxlength="1000"></textarea>
    </div>
    <div class="mb-3">
      <label for="coverImg">Account CoverImg</label>
      <input v-model="editableAccountData.coverImg" type="url" id="coverImg" maxlength="500">
    </div>
    <div class="mb-3">
      <label for="resume">Account Resume</label>
      <input v-model="editableAccountData.resume" type="url" id="resume" maxlength="500">
    </div>
    <div class="mb-3 d-flex justify-content-between">
      <div>
        <label for="graduated" class="d-inline me-3">Have you graduated?</label>
        <input v-model="editableAccountData.graduated" type="checkbox" id="graduated" class="check">
      </div>
      <button type="submit">Submit</button>
    </div>
  </form>
</template>


<style lang="scss" scoped>
label {
  display: block;
}

input {
  width: 100%;
}

.check {
  width: unset;
}
</style>