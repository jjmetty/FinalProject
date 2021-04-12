<template>
    <div>   
        <h2>Jobs</h2>
        <div class="row justify-content-center">
             <div class="col-auto">
    <table class="table table-responsive">
  <thead class="thead-light">
    <tr>
    
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
    
      <td>{{getDate(job.assessmentDate)}}</td>
      <td>{{getDate(job.requestDate)}}</td>
      <td>{{getDate(job.jobStartDate)}}</td>
      <td>{{getDate(job.jobEndDate)}}</td>
      <td>{{job.jobTotal}}</td>

    
       <td>
             <button class= "btn btn-primary">View</button>
            <router-link :to="{name: 'editJob', params: { id: job.jobID }}" class="btn btn-success">Edit</router-link>              
          <!--  <button @click.prevent="deletejob(job.jobID)" class="btn btn-danger">Delete</button>  -->
          
            
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

     getDate(datetime) {
            let date = 
                 new Date(datetime).toJSON().slice(0,10).replace(/-/g,'/')
                    return date
            },

        

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