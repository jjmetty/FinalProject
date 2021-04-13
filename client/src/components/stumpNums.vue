<template>
    <div>   
        <h2>Stump Grinding Numbers</h2>
        <div class="row justify-content-center">
             <div class="col-auto">
    <table class="table table-responsive">
  <thead class="thead-light">
    <tr>
      <th scope="col">Revenue</th>
      <th scope="col">Services</th>
    
  
    </tr>
  </thead>
  <tbody>
    <tr v-for="stumpNum in stumpNums" :key = "stumpNum.stumpNumID">
      <td>{{stumpNum.stumpGrindingQuantity}}</td>
      <td>{{stumpNum.stumpGrindingRevenue}}</td>
  
 
     
    
      
      
      


      
      
  



    
   
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
            stumpNums: []
        }
    },

    created() {
            let apiURL = 'http://localhost:8000/api/stumpNums';
            axios.get(apiURL).then(res => {
                this.stumpNums = res.data;
            }).catch(error => {
                console.log(error)
            });

    },
            
    
    
}
</script>



<style scoped>
h2 {text-align: center;}
</style>