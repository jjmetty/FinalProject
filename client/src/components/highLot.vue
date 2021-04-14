<template>
    <div>   
        <h2>High Lot Values</h2>
        <div class="row justify-content-center">
             <div class="col-auto">
    <table class="table table-responsive">
  <thead class="thead-light">
    <tr>
      <th scope="col">Lot Value</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Cell</th>
      <th scope="col">Property Value</th>
      <th scope="col">Street Num</th>
      <th scope="col">Street Name</th>
      <th scope="col">Suffix</th>
      <th scope="col">City</th>
      <th scope="col">State</th>
      <th scope="col">Zip</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="lot in lots" :key = "lot.lotID">
     <td>{{lot.lotValue}}</td>
      <td>{{lot.firstName}}</td>
      <td>{{lot.lastName}}</td>
      <td>{{lot.email}}</td>
      <td>{{lot.cellPhone}}</td>
      <td>{{lot.propertyValue}}</td>
      <td>{{lot.streetNum}}</td>
      <td>{{lot.streetName}}</td>
      <td>{{lot.suffix}}</td>
      <td>{{lot.city}}</td>
      <td>{{lot.state}}</td>
      <td>{{lot.ZipCode}}</td>
    
      
      
      


      
      
  



    
   
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
            lots: []
        }
    },

    created() {
            let apiURL = 'http://localhost:8000/api/highLot';
            axios.get(apiURL).then(res => {
                this.lots = res.data;
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