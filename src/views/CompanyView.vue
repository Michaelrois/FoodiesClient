<script setup lang="ts">
import type Company from '@/shared/interfaces/Company.interface'
import { useRoute } from 'vue-router'
import { useCompanyStore } from '@/shared/stores/companyStore'
import { onMounted, ref } from 'vue'
import ReturnHomeButton from '@/components/ReturnHomeButton.vue'
import EmployeeComponent from '@/components/EmployeeComponent.vue'
const companyStore = useCompanyStore()
const name: string = useRoute().params.companyName as string
const company = ref<Company | undefined>()
onMounted(() => {
  company.value = companyStore.getCompanyByName(name)
})
</script>

<template>
  <section>
    <div class="employees" v-if="company">
      <h1>Compagnie: {{ company.name }}</h1>
      <h2>Employés:</h2>
      <EmployeeComponent
        v-for="employee in company.employees"
        :key="employee.id"
        :employee="employee"
      />
    </div>
    <h1 v-else>Compagnie non trouvée</h1>
    <ReturnHomeButton />
  </section>
</template>

<style scoped>
.employees {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
</style>
