<template>
    <div>   
        <h2>Tree Fertilization Numbers</h2>
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
    <tr v-for="fertNum in fertNums" :key = "fertNum.fertNumID">
      <td>{{fertNum.treeFertilizationRevenue}}</td>
      <td>{{fertNum.treeFertilizationServices}}</td>
  
 
     
    
      
      
      


      
      
  



    
   
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
            fertNums: []
        }
    },

    created() {
            let apiURL = 'http://localhost:8000/api/fertNums';
            axios.get(apiURL).then(res => {
                this.fertNums = res.data;
            }).catch(error => {
                console.log(error)
            });

    },
            
    
    
}
</script>



<style scoped>
h2 {text-align: center;}
</style>