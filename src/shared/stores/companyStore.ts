import { defineStore } from 'pinia'
import type Company from '@/shared/interfaces/Company.interface'
import companies from '@/shared/data/companies.json'

export interface CompanyState {
  companies: Company[];
}

export const useCompanyStore = defineStore({
  id: 'company',
  state: (): CompanyState => ({
    companies: companies as Company[]
  }),
  getters: {
    getCompanies: (state: CompanyState): Company[] => {
      return state.companies
    },
    getCompanyByName: (state: CompanyState) => (name: string): Company | undefined => {
      return state.companies.find((company: Company) => company.name === name)
    }
  },
  actions: {
  }
})