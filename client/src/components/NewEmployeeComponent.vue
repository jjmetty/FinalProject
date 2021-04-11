<template>
   <div>

       <div class="row justify-content-center">
        <div class="col-md-6">
            <h2 class="text-center">New Employee Form</h2>
            <form @submit.prevent="handleSubmitForm">
               <div class = "row">
                <div class="form-group col-sm-3 my-1">
                    <label>First Name</label>
                    <input type="text" class="form-control"  v-model = "employee.firstName" required>
                </div>

                <div class="form-group col-sm-3 my-1">
                    <label>Last Name</label>
                    <input type="text" class="form-control"  v-model = "employee.lastName" required>
                </div>

                <div class="form-group col-sm-4 my-1">
                    <label>Email</label>
                    <input type="email" class="form-control"  v-model = "employee.email" required>
                </div>
                </div>
               
               <div class = "row">
                  <div class = "form-group col-sm-3 my-1">
                     <label>Cell Phone</label>
                     <input type="tel"  class = "form-control"  v-model = "employee.phone" required>
                  </div>

                  <div class = "form-group col-sm-3 my-1">
                     <label>Language</label>
                     <input type="text"  class = "form-control"  v-model = "employee.employeeLanguage" required>
                  </div>
         

         
                  <div class = "form-group col-sm-3 my-1">
                     <label>Crew</label>
                     <select class="form-control" v-model ="employee.crewID">
                     <option v-for = "crew in crews" v-bind:key = "crew.id" v-bind:value = "crew.crewID"> {{crew.crewName}}</option>
                     </select>
                  </div>

                   <div class="form-group col-sm-3 my-1">
                    <label>Status</label>
                    <select class="form-control" v-model = "employee.statusID" @click="empStatus">
                     <option v-for = "employeeStatus in employeeStatuses" v-bind:key = "employeeStatus.id" v-bind:value = "employeeStatus.statusID"> {{employeeStatus.employeeStatus}}</option>
                    </select>
                    
                </div>
               



                </div>


                <br>
                <br>
                <div class="form-group">
                    <button class="btn btn-success btn-block col-sm-3 my-1">Create</button>
                </div>
            </form>
        </div>
    </div>










   </div>
</template>



<script>
import axios from "axios";

export default {
  data(){
    return{
      employee:{  
         statusID:'',
         firstName: '',
         lastName: '',
         phone: '',
         employeeLanguage: '',
         email: '',
         crewID: ''
   
      },
      crews: [],
      employeeStatuses: []
       
    }


  },

      created() {
            let apiURL = 'http://localhost:8000/api/crews';
            axios.get(apiURL).then(res => {
                this.crews = res.data;
            }).catch(error => {
                console.log(error)
            });
      },
  methods:{

    empStatus(){
       let apiURL = 'http://localhost:8000/api/employeeStatus';
            axios.get(apiURL).then(res => {
                this.employeeStatuses = res.data;
            }).catch(error => {
                console.log(error)
            });

    },
    handleSubmitForm() {
                let apiURL = 'http://localhost:8000/api/addEmployee';
                
                axios.post(apiURL, this.employee).then(() => {
                  this.$router.push('/viewEmployees')
                  this.employee = {
                     statusID:'',
                     firstName: '',
                     lastName: '',
                     phone: '',
                     employeeLanguage: '',
                     email: '',
                     crewID: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }

  }
}
</script>