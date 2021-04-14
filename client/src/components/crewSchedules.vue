<template>
    <div>   
        <h2>Crew Schedule</h2>
        <div class="row justify-content-center">
             <div class="col-auto">
    <table class="table table-responsive">
  <thead class="thead-light">
    <tr>
      <th scope="col">Crew</th>
      <th scope="col">Assessment</th>
      <th scope="col">Request Date</th>
      <th scope="col">Start Date</th>
      <th scope="col">End Date</th>
      <th scope="col">Bid Desc</th>
      <th scope="col">Job Instruction</th>
    
  
    </tr>
  </thead>
  <tbody>
    <tr v-for="crewSchedule in crewSchedules" :key = "crewSchedule.crewScheduleID">
      <td>{{crewSchedule.crewName}}</td>
      <td>{{format_date(crewSchedule.assessmentDate)}}</td>
      <td>{{format_date(crewSchedule.requestDate)}}</td>
      <td>{{format_date(crewSchedule.startDate)}}</td>
      <td>{{format_date(crewSchedule.endDate)}}</td>
      <td>{{crewSchedule.bidDescription}}</td>
      <td>{{crewSchedule.jobInstruction}}</td>
      
      
      

      
      
      
  
 
     
    
      
      
      


      
      
  



    
   
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
            crewSchedules: []
        }
    },

    created() {
            let apiURL = 'http://localhost:8000/api/crewSchedules';
            axios.get(apiURL).then(res => {
                this.crewSchedules = res.data;
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