<template>
   <div>

      <div class="row justify-content-center">
        <div class="col-md-6">
            <h2 class="text-center">New Job Form</h2>
            <form @submit.prevent="handleSubmitForm">

              <div class = "row">
                  <div class = "form-group col-sm-2 my-1">
                     <label>Street #</label>
                     <input type="number"  class = "form-control" v-model= "location.streetNum" disabled>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Unit</label>
                    <input type="text" class="form-control" v-model= "location.unit" disabled>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Prefix</label>
                    <input type="text" class="form-control" v-model= "location.pre_fix" disabled>
                  </div>

                  <div class="form-group col-sm-3 my-1">
                    <label>Street Name</label>
                    <input type="text" class="form-control" v-model= "location.streetName" disabled>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Suffix</label>
                    <input type="text" class="form-control" v-model= "location.suffix" disabled>
                  </div>

                  <div class="form-group col-sm-2 my-1" disabled>
                    <label>Unit #</label>
                    <input type="number" class="form-control" v-model= "location.unitNum" disabled>
                  </div>
               </div>

                <div class = "row">
                  <div class = "form-group col-sm-3 my-1" disabled>
                     <label>City</label>
                     <input type="text"  class = "form-control" v-model= "location.city" disabled>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>State</label>
                    <input type="text" class="form-control" value = "Texas" disabled>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Zip Code</label>
                    <input type="number" class="form-control" v-model= "location.zip" disabled>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Zip Code +4</label>
                    <input type="number" class="form-control" v-model= "location.zip4" disabled>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Key Map</label>
                    <input type="number" class="form-control" v-model= "location.keyMap" disabled>
                  </div>
                  </div>

                <div class = "row">
                  <div class="form-group col-sm-3 my-1">
                     <label >Assessment date:</label>
                     <input type="date" class = "form-control" v-model = "job.assessmentDate">
                  </div>
                  
                  <div class="form-group col-sm-3 my-1">
                     <label for="requestDate">Request date:</label>
                     <input type="date" id="requestDate" class = "form-control" v-model = "job.requestDate">
                  </div>

                  <div class="form-group col-sm-3 my-1">
                     <label >Start date:</label>
                     <input type="date" class = "form-control" v-model = "job.jobStartDate">
                  </div>

                  <div class="form-group col-sm-3 my-1">
                     <label >Finish date:</label>
                     <input type="date" class = "form-control" v-model = "job.jobEndDate">
                  </div>
                </div>
               <br>
               <div class = "row">

                  <div class = "form-group col-sm-3 my-1">
                    <label>test address</label>
                     <select class="form-control" v-model = "job.locationID">
                     <option v-for= "loc in locationss" v-bind:key= "loc.id" v-bind:value = "loc.locationID">{{loc.streetNum}}&nbsp;  &nbsp; {{loc.streetName}} &nbsp;  &nbsp; {{loc.zip}} </option>
                     </select>
                  </div> 


                  <div class = "form-group col-sm-3 my-1">
                    <label>Service Advisor </label>
                     <select class="form-control" v-model = "job.employeeID">
                     <option v-for= "employee in employees" v-bind:key= "employee.id" v-bind:value = "employee.employeeID">{{employee.firstName}}&nbsp;  &nbsp; {{employee.lastName}}</option>
                     </select>
                  </div> 

                  <div class = "form-group col-sm-3 my-1">
                    <label>Job Status </label>
                     <select class="form-control" v-model = "job.jobStatusID">
                     <option v-for= "jobStatus in jobStatuses" v-bind:key = "jobStatus.id" v-bind:value = "jobStatus.jobStatusID" >{{jobStatus.jobStatus}}</option>
                     </select>
                  </div>

                  <div class = "form-group col-sm-3 my-1">
                     <label>Crew</label>
                     <select class="form-control" v-model = "job.crewID">
                     <option v-for = "crew in crews" v-bind:key = "crew.id" v-bind:value = "crew.crewID"> {{crew.crewName}}</option>
                     </select>
                  </div>

                  <div class = "form-group col-sm-3 my-1">
                     <label>Subcontractors</label>
                     <select class="form-control" v-model = "job.subContractorID">
                     <option v-for = "sub in subcontractors" v-bind:key = "sub.id" v-bind:value = "sub.subContractorID"> {{sub.companyName}}</option>
                     </select>
                  </div>
               </div>

               <div class = "row">
                  <div class="form-group col-sm-2 my-1">
                    <label>Tree Trimming Quanitity</label>
                    <input type="number" step=0.01 class="form-control" v-model = "job.treeTrimmingQuantity">
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Tree Trimming Cost</label>
                    <input type="number" step=0.01 class="form-control" v-model = "job.treeTrimmingCost">
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Stump Grinding Quantity</label>
                    <input type="number" step=0.01 class="form-control" v-model = "job.stumpGrindingQuantity">
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Stump Grinding Cost</label>
                    <input type="number" step=0.01 class="form-control" v-model = "job.stumpGrindingCost">
                  </div>

                  </div>


                 <div class = "row">
                  <div class="form-group col-sm-2 my-1">
                    <label>Tree Removal Quantity</label>
                    <input type="number" step=0.01 class="form-control" v-model = "job.treeRemovalQuantity">
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Tree Removaling Cost</label>
                    <input type="number" step=0.01 class="form-control" v-model = "job.treeRemovalCost">
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Tree Fertilization Quantity</label>
                    <input type="number" step=0.01 class="form-control" v-model = "job.treeFertilizationQuantity">
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Tree Fertilization Cost</label>
                    <input type="number" step=0.01 class="form-control" v-model = "job.treeFertilizationCost">
                  </div>


                 </div>



                  


               

               <div class = "row">
                  <div class="form-group col-sm-2 my-1">
                    <label>Total Job Charge</label>
                    <input type="number" step=0.01 class="form-control" v-model = "job.jobTotal">
                  </div>


               </div>
               
               <div class="form-group">
                <label for="exampleFormControlTextarea1">Job Instructions</label>
                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" cols = "45" v-model = "job.jobInstruction"></textarea>
                </div>
              
                <div class="form-group">
                <label for="exampleFormControlTextarea1">Bid Description</label>
                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" cols = "45" v-model = "job.bidDescription"></textarea>
                </div>

                  <div class="form-group">
                <label for="exampleFormControlTextarea1">Proposal Description</label>
                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" cols = "45" v-model = "job.proposalDescription"></textarea>
                </div>

                  <div class="form-group">
                <label for="exampleFormControlTextarea1">Job Comment(s)</label>
                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" cols = "45" v-model = "job.jobComment"></textarea>
                </div>
              
              
              
                  
               
     
               
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
      job:{
        locationID: location.locationID,
        jobStatusID: '',
        crewID: '',
        employeeID: '',
        subContractorID:'',
        treeTrimmingQuantity: '',
        treeTrimmingCost: '',
        stumpGrindingQuantity: '',
        stumpGrindingCost: '',
        treeRemovalQuantity: '',
        treeRemovalCost: '',
        treeFertilizationQuantity: '',
        treeFertilizationCost: '',
        assesmentDate:'',
        requestDate:'',
        jobStartDate:'',
        jobEndDate:'',
        jobTotal:'',
        bidDescription:'',
        proposalDescription:'',
        jobInstruction:'',
        jobComment:''
        

      },
      jobtypes: [],
      crews: [],
      jobStatuses: [],
      employees: [],
      location: [],
      subcontractors: [],
      locationss: []

     

    

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

        

            this.getLocation();
      },
  methods:{

        getLocation(){
        let apiURL = `http://localhost:8000/api/treeLocation/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
          let locations = res.data;
          this.location = locations[0];
           // this.customer = res.data;
        })
        },

    jobTypes(){
       let apiURL = 'http://localhost:8000/api/jobtype';
            axios.get(apiURL).then(res => {
                this.jobtypes = res.data;
            }).catch(error => {
                console.log(error)
            });

    },
    handleSubmitForm() {
                let apiURL = 'http://localhost:8000/api/addJob';
                
                axios.post(apiURL, this.job).then(() => {
                  this.$router.push('/viewJobs')
                  this.job = {
                              locationID: location.locationID,
                              jobStatusID: '',
                              crewID: '',
                              employeeID: '',
                              subContractorID:'',
                              treeTrimmingQuantity: '',
                              treeTrimmingCost: '',
                              stumpGrindingQuantity: '',
                              stumpGrindingCost: '',
                              treeRemovalQuantity: '',
                              treeRemovalCost: '',
                              treeFertilizationQuantity: '',
                              treeFertilizationCost: '',
                              assesmentDate:'',
                              requestDate:'',
                              jobStartDate:'',
                              jobEndDate:'',
                              jobTotal:'',
                              bidDescription:'',
                              proposalDescription:'',
                              jobInstruction:'',
                              jobComment:''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }

  }
}
</script>







<style scoped>


</style>