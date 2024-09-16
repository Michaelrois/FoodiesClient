import Employee from './Employee.interface'
export default interface Company {
	name: string
	adress: string
	city: string
	province: string
	country: string
	postalcode: string
	employees: Employee[]
 }
 