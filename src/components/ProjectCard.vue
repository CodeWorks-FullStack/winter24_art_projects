<script setup>
import { Project } from '@/models/Project.js';

defineProps({
  projectProp: { type: Project, required: true }
})
</script>


<template>
  <p>{{ projectProp.title }}</p>
</template>


<style lang="scss" scoped></style>