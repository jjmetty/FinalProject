<template>
    <div>   
        <h2>Jobs</h2>
        <div class="row justify-content-center">
             <div class="col-auto">
                  <form >
               <div class = "row">
                 <div class="form-group col-sm-5 my-1">

                    <label><strong>Search</strong></label>
                    <input type="text" class="form-control" placeholder="Search by street name" v-model = "search">
                </div>
               </div>
            </form>
            <br>
    <table class="table table-responsive">
  <thead class="thead-light">
    <tr>
      <th scope="col">Street Num</th>
      <th scope="col">Street Name</th>
      <th scope="col">Job Total</th>
      <th scope="col">Assessment Date</th>
      <th scope="col">Request Date</th>
      <th scope="col">Start Date</th>
      <th scope="col">End Date</th>
      <th scope="col">Total</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="job in filteredJobs" :key = "job.jobID">
      <td>{{job.streetNum}}</td>
      <td>{{job.streetName}}</td>
      <td>{{job.jobTotal}}</td>
      <td>{{format_date(job.assessmnetDate)}}</td>
      <td>{{format_date(job.requestDate)}}</td>
      <td>{{format_date(job.jobStartDate)}}</td>
      <td>{{format_date(job.jobEndDate)}}</td>
      <td>{{job.jobTotal}}</td>

    
       <td>
            <router-link :to="{name: 'viewJob', params: { id: job.jobID }}" class= "btn btn-primary">View</router-link>
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
import moment from "moment";

export default {
    data(){
        return {
            jobs: [],
            search:''
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
        computed: {
        filteredJobs: function(){
            return this.jobs.filter((job) =>{
                return job.streetName.match(this.search);
            })
        }

    },

    methods: {

     getDate(datetime) {
            let date = 
                 new Date(datetime).toJSON().slice(0,10).replace(/-/g,'/')
                    return date
            },

    format_date(value){
        if (value){
            return moment(String(value)).format('YYYY/MM/DD');
        }

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