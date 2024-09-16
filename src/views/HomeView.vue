<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type Company from "@/shared/interfaces/Company.interface"
import { useCompanyStore } from '@/shared/stores/companyStore';
import { RouterLink } from 'vue-router';
const companyStore = useCompanyStore()
const companies = ref<Company[]>([])
onMounted(() => {
  companies.value = companyStore.getCompanies
})
</script>

<template>
  <h1>
    Bienvenue sur la page des compagnies
  </h1>
  <ul>
    <li v-for="company in companies" :key="company.name">
      <RouterLink :to="'/company/' + company.name">{{ company.name }} - {{ company.adress }}</RouterLink>
    </li>
  </ul>
</template>
