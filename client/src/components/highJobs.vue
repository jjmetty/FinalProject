<template>
    <div>   
        <h2>High Dollar Jobs</h2>
        <div class="row justify-content-center">
             <div class="col-auto">
    <table class="table table-responsive">
  <thead class="thead-light">
    <tr>
      <th scope="col">Job Charge</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Cell</th>
      <th scope="col">Email</th>
      <th scope="col">Street Num</th>
      <th scope="col">Street Name</th>
      <th scope="col">Suffix</th>
      <th scope="col">Unit #</th>
      <th scope="col">City</th>
      <th scope="col">State</th>
      <th scope="col">Zip</th>
      <th scope="col">Last Job</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="job in jobs" :key = "job.jobID">
      <td>{{job.jobcharge}}</td>
      <td>{{job.FirstName}}</td>
      <td>{{job.LastName}}</td>
      <td>{{job.CellPhone}}</td>
      <td>{{job.email}}</td>
      <td>{{job.StreetNumber}}</td>
      <td>{{job.StreetName}}</td>
      <td>{{job.suffix}}</td>
      <td>{{job.UnitNum}}</td>
      <td>{{job.city}}</td>
      <td>{{job.state}}</td>
      <td>{{job.ZipCode}}</td>
      <td>{{getDate(job.lastJob)}}</td>
    
      
      
      


      
      
  



    
   
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
            jobs: []
        }
    },

    created() {
            let apiURL = 'http://localhost:8000/api/highJobs';
            axios.get(apiURL).then(res => {
                this.jobs = res.data;
            }).catch(error => {
                console.log(error)
            });

    },

    methods: {

     getDate(datetime) {
            let date = 
                 new Date(datetime).toJSON().slice(0,10).replace(/-/g,'/')
                    return date
            },

        
    }
            
    

    
}
</script>



<style scoped>
h2 {text-align: center;}
</style>