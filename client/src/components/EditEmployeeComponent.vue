<template>
   <div>

       <div class="row justify-content-center">
        <div class="col-md-6">
            <h2 class="text-center">Update Employee</h2>
            <form @submit.prevent="handleUpdateForm">
               <div class = "row">
                <div class="form-group col-sm-3 my-1">
                    <label>First Name</label>
                    <input type="text" class="form-control"  v-model = "employee.firstName" >
                </div>

                <div class="form-group col-sm-3 my-1">
                    <label>Last Name</label>
                    <input type="text" class="form-control"  v-model = "employee.lastName" >
                </div>

                <div class="form-group col-sm-4 my-1">
                    <label>Email</label>
                    <input type="email" class="form-control"  v-model = "employee.email" >
                </div>
                </div>
               
               <div class = "row">
                  <div class = "form-group col-sm-3 my-1">
                     <label>Cell Phone</label>
                     <input type="tel"  class = "form-control"  v-model = "employee.phone">
                  </div>

                  <div class = "form-group col-sm-3 my-1">
                     <label>Language</label>
                     <input type="text"  class = "form-control"  v-model = "employee.employeeLanguage">
                  </div>
         

         
                  <div class = "form-group col-sm-3 my-1">
                     <label>Crew</label>
                     <select class="form-control" v-model = "employee.crewID">
                     <option v-for = "crew in crews" v-bind:key = "crew.id" v-bind:value = "crew.crewID"> {{crew.crewName}}</option>
                     </select>
                  </div>

                   <div class="form-group col-sm-3 my-1">
                    <label>Status</label>
                    <input type="number" class="form-control"  v-model = "employee.statusID"  required >
                </div>
               



                </div>


                <br>
                <br>
                <div class="form-group">
                    <button class="btn btn-success btn-block col-sm-3 my-1">Update</button>
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
      employee: {}

    }

    


  
  },

    created: function() {
      this.getEmployee();


      

    },

    
    methods: {

        getEmployee(){
        let apiURL = `http://localhost:8000/api/employees/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
          let employees = res.data;
          this.employee = employees[0];
           // this.employee = res.data;
        })
    },

        handleUpdateForm() {
            let apiURL = `http://localhost:8000/api/updateEmployee/${this.$route.params.id}`;

            axios.post(apiURL, this.employee).then((res) => {
                console.log(res)
                this.$router.push('/viewEmployees')
                
            }).catch(error => {
                console.log(error)
            });
        }
    }
}  


</script>