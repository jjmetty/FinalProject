<template>
    <div>   
        <h2>Outsourced Jobs to Sub Contractors</h2>
        <div class="row justify-content-center">
             <div class="col-auto">
    <table class="table table-responsive">
  <thead class="thead-light">
    <tr>
      <th scope="col">Type</th>
      <th scope="col">Sub Contractor</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Street #</th>
      <th scope="col">Street Name</th>
      <th scope="col">Suffix</th>
      <th scope="col">Request Date</th>
      <th scope="col">Start Date</th>
      <th scope="col">End Date</th>
      <th scope="col">Revenue</th>
    
  
    </tr>
  </thead>
  <tbody>
    <tr v-for="job in jobs" :key = "job.jobID">
      <td>{{job.contractorType}}</td>
      <td>{{job.contractorName}}</td>
      <td>{{job.phone}}</td>
      <td>{{job.email}}</td>
      <td>{{job.streetNum}}</td>
      <td>{{job.streetName}}</td>
      <td>{{job.suffix}}</td>
      <td>{{format_date(job.requestDate)}}</td>
      <td>{{format_date(job.startDate)}}</td>
      <td>{{format_date(job.endDate)}}</td>
      <td>{{job.revenue}}</td>
    
      
      
      

      
      
      
  
 
     
    
      
      
      


      
      
  



    
   
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
            let apiURL = 'http://localhost:8000/api/outsourcedJobs';
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