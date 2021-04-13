<template>
<div>
   <!--<h1 style="text-align:center;">New Customer Form </h1> -->

       <div class="row justify-content-center">
        <div class="col-md-6">
            <h2 class="text-center">View Job</h2>
            <form @submit.prevent="handleUpdateForm">
             <div class = "row">

                  <div class = "form-group col-sm-4 my-1">
                    <label>Address</label>
                     <select class="form-control" v-model = "job.locationID"  disabled>
                     <option v-for= "loc in locationss" v-bind:key= "loc.id" v-bind:value = "loc.locationID">{{loc.streetNum}}&nbsp;  &nbsp; {{loc.streetName}}</option>
                     </select>
                  </div> 


                  <div class = "form-group col-sm-3 my-1">
                    <label>Service Advisor </label>
                     <select class="form-control" v-model = "job.employeeID" disabled>
                     <option v-for= "employee in employees" v-bind:key= "employee.id" v-bind:value = "employee.employeeID">{{employee.firstName}}&nbsp;  &nbsp; {{employee.lastName}}</option>
                     </select>
                  </div> 

                  <div class = "form-group col-sm-3 my-1">
                    <label>Job Status </label>
                     <select class="form-control" v-model = "job.jobStatusID" disabled>
                     <option v-for= "jobStatus in jobStatuses" v-bind:key = "jobStatus.id" v-bind:value = "jobStatus.jobStatusID" >{{jobStatus.jobStatus}}</option>
                     </select>
                  </div>

                  <div class = "form-group col-sm-3 my-1" >
                     <label>Crew</label>
                     <select class="form-control" v-model = "job.crewID" disabled>
                     <option v-for = "crew in crews" v-bind:key = "crew.id" v-bind:value = "crew.crewID"> {{crew.crewName}}</option>
                     </select>
                  </div>

                  <div class = "form-group col-sm-3 my-1" >
                     <label>Subcontractors</label>
                     <select class="form-control" v-model = "job.subContractorID" disabled>
                     <option v-for = "sub in subcontractors" v-bind:key = "sub.id" v-bind:value = "sub.subContractorID"> {{sub.companyName}}</option>
                     </select>
                  </div>
               </div>

               <div class = "row">
                  <div class="form-group col-sm-2 my-1" >
                    <label>Tree Trimming Quanitity</label>
                    <input type="number" step=0.01 class="form-control" v-model = "job.treeTrimmingQuantity" disabled>
                  </div>

                  <div class="form-group col-sm-2 my-1" >
                    <label>Tree Trimming Cost</label>
                    <input type="number" step=0.01 class="form-control" v-model = "job.treeTrimmingCost" disabled>
                  </div>

                  <div class="form-group col-sm-2 my-1" >
                    <label>Stump Grinding Quantity</label>
                    <input type="number" step=0.01 class="form-control" v-model = "job.stumpGrindingQuanity" disabled>
                  </div>

                  <div class="form-group col-sm-2 my-1" >
                    <label>Stump Grinding Cost</label>
                    <input type="number" step=0.01 class="form-control" v-model = "job.stumpGrindingCost" disabled>
                  </div>

                  </div>


                 <div class = "row">
                  <div class="form-group col-sm-2 my-1">
                    <label>Tree Removal Quantity</label>
                    <input type="number" step=0.01 class="form-control" v-model = "job.treeRemovalQuantity" disabled>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Tree Removaling Cost</label>
                    <input type="number" step=0.01 class="form-control" v-model = "job.treeRemovalCost" disabled>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Tree Fertilization Quantity</label>
                    <input type="number" step=0.01 class="form-control" v-model = "job.treeFertilizationQuantity" disabled>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Tree Fertilization Cost</label>
                    <input type="number" step=0.01 class="form-control" v-model = "job.treeFertilizationCost" disabled>
                  </div>


                 </div>



                  


               

               <div class = "row">
                  <div class="form-group col-sm-2 my-1">
                    <label>Total Job Charge</label>
                    <input type="number" step=0.01 class="form-control" v-model = "job.jobTotal" disabled>
                  </div>


               </div>
               
               <div class="form-group">
                <label for="exampleFormControlTextarea1" >Job Instructions</label>
                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" cols = "45" v-model = "job.jobInstruction" disabled></textarea>
                </div>
              
                <div class="form-group">
                <label for="exampleFormControlTextarea1">Bid Description</label>
                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" cols = "45" v-model = "job.bidDescription" disabled></textarea>
                </div>

                  <div class="form-group">
                <label for="exampleFormControlTextarea1">Proposal Description</label>
                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" cols = "45" v-model = "job.proposalDescription" disabled></textarea>
                </div>

                  <div class="form-group">
                <label for="exampleFormControlTextarea1">Job Comment(s)</label>
                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" cols = "45" v-model = "job.jobComment" disabled></textarea>
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
      job: {},
      crews: {},
      jobStatuses: {},
      employees: {},
      subcontractors: {},
      locationss: {}



      

    }

    


  
  },

    created: function() {
         let apiURL = 'http://localhost:8000/api/crews';
            axios.get(apiURL).then(res => {
                this.crews = res.data;
            }).catch(error => {
                console.log(error)
            });

            let apiURL1 = 'http://localhost:8000/api/jobStatus';
             axios.get(apiURL1).then(res => {
                this.jobStatuses = res.data;
            }).catch(error => {
                console.log(error)
            });

             let apiURL2 = 'http://localhost:8000/api/employees';
              axios.get(apiURL2).then(res => {
                this.employees = res.data;
            }).catch(error => {
                console.log(error)
            });
            let apiURL3 = 'http://localhost:8000/api/subcontractors';
              axios.get(apiURL3).then(res => {
                this.subcontractors = res.data;
            }).catch(error => {
                console.log(error)
            });

            let apiURL4 = 'http://localhost:8000/api/treeLocations';
              axios.get(apiURL4).then(res => {
                this.locationss = res.data;
            }).catch(error => {
                console.log(error)
            });



      this.getJob();


      
    


    },
    methods: {

        getJob(){
        let apiURL = `http://localhost:8000/api/job/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
          let jobs = res.data;
          this.job = jobs[0];
           // this.customer = res.data;
        })
    },

       
    }
}  


</script>