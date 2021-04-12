<template>
    <div>   
        <h2>Employees</h2>
        <br>
        <div class="row justify-content-center">
             <div class="col-auto">
                 <form >
               <div class = "row">
                 <div class="form-group col-sm-5 my-1">

                    <label><strong>Search</strong></label>
                    <input type="text" class="form-control" placeholder="Search by name or last 4" v-model = "search">
                </div>
               </div>
            </form>
            <br>
    <table class="table table-responsive">
  <thead class="thead-light">
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Cell Phone</th>
      <th scope="col">Language</th>
      <th scope="col">Email</th>
      <th scope="col">Actions</th>
    
    </tr>
  </thead>
  <tbody>
    <tr v-for="employee in filteredEmployees" :key = "employee.employeeID">
      <td>{{employee.firstName}}</td>
      <td>{{employee.lastName}}</td>
      <td>{{employee.phone}}</td>
      <td>{{employee.employeeLanguage}}</td>
      <td>{{employee.email}}</td>
      

       <td>
            <router-link :to="{name: 'viewEmp', params: { id: employee.employeeID }}" class= "btn btn-primary">View</router-link>
            <router-link :to="{name: 'editEmployee', params: { id: employee.employeeID }}" class="btn btn-success">Edit</router-link>              
           <!-- <button @click.prevent="deleteEmployee(employee.employeeID)" class="btn btn-danger">Delete</button> -->
            
            
        </td>
    </tr>
  </tbody>
</table>
    </div>
        </div>

            







    </div>
</template>

<script>
import axios from "axios";


export default {
    data(){
        return {
            employees: [],
            search: ''
        }
    },

    created() {
            let apiURL = 'http://localhost:8000/api/employees';
            axios.get(apiURL).then(res => {
                this.employees = res.data;
            }).catch(error => {
                console.log(error)
            });

    },

    computed: {
        filteredEmployees: function(){
            return this.employees.filter((employee) =>{
                return employee.firstName.match(this.search) || employee.lastName.match(this.search) || employee.phone.match(this.search);
        })
        }

    }
    
//foreign key restratint with table employeePosition
   // methods: {
/** 
  deleteEmployee(id){
                let apiURL = `http://localhost:8000/api/deleteEmployee/${id}`;
                let indexOfArrayItem = this.employees.findIndex(i => i.employeeID === id);

                if (window.confirm("Delete employee?")) {
                    axios.delete(apiURL).then(() => {
                        this.employees.splice(indexOfArrayItem, 0);
                        window.location.reload();
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
    }
            
    
*/
    
}
</script>



<style scoped>
h2 {text-align: center;}
</style>