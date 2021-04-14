<template>
    <div>   
        <h2>Crew jobs completed (last 30 days)</h2>
        <div class="row justify-content-center">
             <div class="col-auto">
    <table class="table table-responsive">
  <thead class="thead-light">
    <tr>
      <th scope="col">Crew</th>
      <th scope="col">Street #</th>
      <th scope="col">Street Name</th>
      <th scope="col">City</th>
      <th scope="col">State</th>
      <th scope="col">Request Date</th>
      <th scope="col">Start Date</th>
      <th scope="col">End Date</th>
    
  
    </tr>
  </thead>
  <tbody>
    <tr v-for="job in jobs" :key = "job.jobID">
      <td>{{job.crewName}}</td>
      <td>{{job.streetNumber}}</td>
      <td>{{job.streetName}}</td>
      <td>{{job.City}}</td>
      <td>{{job.State}}</td>
      <td>{{format_date(job.requestDate)}}</td>
      <td>{{format_date(job.jobStartDate)}}</td>
      <td>{{format_date(job.jobEndDate)}}</td>
   
    

      
      

      
      
      
  
 
     
    
      
      
      


      
      
  



    
   
    </tr>
  </tbody>
</table>
    </div>
        </div>

            







    </div>
</template>

<script>
import axios from "axios";
import moment from "moment";

export default {
    data(){
        return {
            jobs: []
        }
    },

    created() {
            let apiURL = 'http://localhost:8000/api/crewJobs';
            axios.get(apiURL).then(res => {
                this.jobs = res.data;
            }).catch(error => {
                console.log(error)
            });

    },
    methods: {
         format_date(value){
        if (value){
            return moment(String(value)).format('YYYY/MM/DD');
        }

    },

    }
            
    
    
}
</script>



<style scoped>
h2 {text-align: center;}
</style>