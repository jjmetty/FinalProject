<template>
    <div>   
        <h2>Job Table </h2>
        <div class="row justify-content-center">
             <div class="col-auto">
    <table class="table table-responsive">
  <thead class="thead-light">
    <tr>
      <th scope="col">Location ID</th>
      <th scope="col">Job Status ID</th>
      <th scope="col">Crew ID</th>
      <th scope="col">Assesment Date</th>
      <th scope="col">Request Date</th>
      <th scope="col">Start Date</th>
      <th scope="col">End Date</th>
      <th scope="col">Total</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="job in jobs" :key = "job.jobID">
      <td>{{job.locationID}}</td>
      <td>{{job.jobStatusID}}</td>
      <td>{{job.crewID}}</td>
      <td>{{job.assessmentDate}}</td>
      <td>{{job.requestDate}}</td>
      <td>{{job.jobStartDate}}</td>
      <td>{{job.jobEndDate}}</td>
      <td>{{job.jobTotal}}</td>

    
       <td>
            <router-link :to="{name: 'editJob', params: { id: job.jobID }}" class="btn btn-success">Edit</router-link>              
            <button @click.prevent="deletejob(job.jobID)" class="btn btn-danger">Delete</button>
            <button class= "btn btn-primary">View</button>
            
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
            jobs: []
        }
    },

    created() {
            let apiURL = 'http://localhost:8000/api/jobs';
            axios.get(apiURL).then(res => {
                this.jobs = res.data;
            }).catch(error => {
                console.log(error)
            });

    },

    methods: {
  deletejob(id){
                let apiURL = `http://localhost:8000/api/deletejob/${id}`;
                let indexOfArrayItem = this.jobs.findIndex(i => i.jobID === id);

                if (window.confirm("Delete job?")) {
                    axios.delete(apiURL).then(() => {
                        this.jobs.splice(indexOfArrayItem, 0);
                        window.location.reload();
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
    }
            
    

    
}
</script>



<style scoped>
h2 {text-align: center;}
</style>