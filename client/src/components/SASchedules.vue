<template>
    <div>   
        <h2>Service Advisors Schedule</h2>
        <div class="row justify-content-center">
             <div class="col-auto">
    <table class="table table-responsive">
  <thead class="thead-light">
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Assessment Date</th>
      <th scope="col">Request Date</th>
      <th scope="col">Start Date</th>
      <th scope="col">Proposal Description</th>
      <th scope="col">Job Instruction</th>
    
  
    </tr>
  </thead>
  <tbody>
    <tr v-for="SASchedule in SASchedules" :key = "SASchedule.SAScheduleID">
      <td>{{SASchedule.firstName}}</td>
      <td>{{SASchedule.lastName}}</td>
      <td>{{SASchedule.phone}}</td>
      <td>{{format_date(SASchedule.assessmentDate)}}</td>
      <td>{{format_date(SASchedule.requestDate)}}</td>
      <td>{{format_date(SASchedule.startDate)}}</td>
      <td>{{SASchedule.proposalDescription}}</td>
      <td>{{SASchedule.jobInstruction}}</td>
      
      
      

      
      
      
  
 
     
    
      
      
      


      
      
  



    
   
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
            SASchedules: []
        }
    },

    created() {
            let apiURL = 'http://localhost:8000/api/SASchedules';
            axios.get(apiURL).then(res => {
                this.SASchedules = res.data;
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