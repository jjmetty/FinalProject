<template>
    <div>   
        <h2>Next Anticipated Date</h2>
        <div class="row justify-content-center">
             <div class="col-auto">
    <table class="table table-responsive">
  <thead class="thead-light">
    <tr>
      <th scope="col">Anticipated Date</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Cell Phone</th>
      <th scope="col">Lot Value</th>
      <th scope="col">Last Job Cost</th>
      <th scope="col">Street #</th>
      <th scope="col">Street Name</th>
      <th scope="col">Suffix</th>
      <th scope="col">Unit #</th>
   
    </tr>
  </thead>
  <tbody>
    <tr v-for="date in dates" :key = "date.dateID">
      <td>{{getDate(date.nextAnticipated)}}</td>
      <td>{{date.firstName}}</td>
      <td>{{date.lastName}}</td>
      <td>{{date.cellPhone}}</td>
      <td>{{date.lotValue}}</td>
      <td>{{date.lastJobcharged}}</td>
      <td>{{date.StreetNum}}</td>
      <td>{{date.streetName}}</td>
      <td>{{date.suffix}}</td>
      <td>{{date.unitNum}}</td>
   
    
    
      
      
      


      
      
  



    
   
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
            dates: []
        }
    },

    created() {
            let apiURL = 'http://localhost:8000/api/antDate';
            axios.get(apiURL).then(res => {
                this.dates = res.data;
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