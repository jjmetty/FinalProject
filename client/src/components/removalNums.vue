<template>
    <div>   
        <h2>Tree Removal Numbers</h2>
        <div class="row justify-content-center">
             <div class="col-auto">
    <table class="table table-responsive">
  <thead class="thead-light">
    <tr>
      <th scope="col">Services</th>
      <th scope="col">Revenue</th>
    
  
    </tr>
  </thead>
  <tbody>
    <tr v-for="remNum in remNums" :key = "remNum.remNumID">
      
      <td>{{remNum.treeRemovalServices}}</td>
      <td>{{remNum.treeRemovalRevenue}}</td>
  
 
     
    
      
      
      


      
      
  



    
   
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
            remNums: []
        }
    },

    created() {
            let apiURL = 'http://localhost:8000/api/removalNums';
            axios.get(apiURL).then(res => {
                this.remNums = res.data;
            }).catch(error => {
                console.log(error)
            });

    },
            
    
    
}
</script>



<style scoped>
h2 {text-align: center;}
</style>