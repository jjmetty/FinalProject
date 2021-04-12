<template>
   <div>

       <div class="row justify-content-center">
        <div class="col-md-6">
            <h2 class="text-center">Employee {{employee.firstName}}&nbsp;  &nbsp; {{employee.lastName}}</h2>
            <form>
               <div class = "row">
                <div class="form-group col-sm-3 my-1">
                    <label>First Name</label>
                    <input type="text" class="form-control"  v-model = "employee.firstName" disabled>
                </div>

                <div class="form-group col-sm-3 my-1">
                    <label>Last Name</label>
                    <input type="text" class="form-control"  v-model = "employee.lastName" disabled>
                </div>

                <div class="form-group col-sm-4 my-1">
                    <label>Email</label>
                    <input type="email" class="form-control"  v-model = "employee.email" disabled>
                </div>
                </div>
               
               <div class = "row">
                  <div class = "form-group col-sm-3 my-1">
                     <label>Cell Phone</label>
                     <input type="tel"  class = "form-control"  v-model = "employee.phone" disabled>
                  </div>

                  <div class = "form-group col-sm-3 my-1">
                     <label>Language</label>
                     <input type="text"  class = "form-control"  v-model = "employee.employeeLanguage" disabled>
                  </div>
         

         
                  <div class = "form-group col-sm-3 my-1">
                     <label>Crew</label>
                     <select class="form-control" v-model = "employee.crewID" disabled>
                     <option v-for = "crew in crews" v-bind:key = "crew.id" v-bind:value = "crew.crewID"> {{crew.crewName}}</option>
                     </select>
                  </div>

                    <div class="form-group col-sm-3 my-1">
                    <label>Status</label>
                    <select class="form-control" v-model = "employee.statusID" disabled>
                     <option v-for = "employeeStatus in employeeStatuses" v-bind:key = "employeeStatus.id" v-bind:value = "employeeStatus.statusID"> {{employeeStatus.employeeStatus}}</option>
                    </select>
                    
                </div>
               



                </div>


                <br>
                <br>
                
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
      employee: {},
      crews: {},
      employeeStatuses: {}

    }

    


  
  },

    created: function() {
           let apiURL = 'http://localhost:8000/api/crews';
            axios.get(apiURL).then(res => {
                this.crews = res.data;
            }).catch(error => {
                console.log(error)
            });

               let apiURL1 = 'http://localhost:8000/api/employeeStatus';
            axios.get(apiURL1).then(res => {
                this.employeeStatuses = res.data;
            }).catch(error => {
                console.log(error)
            });




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

       
    }
}  


</script>