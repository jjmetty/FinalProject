<template>
    <div>   
        <h2>Tree Trimming Numbers</h2>
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
    <tr v-for="trimNum in trimNums" :key = "trimNum.trimNumID">
      <td>{{trimNum.treeTrimmingServices}}</td>
      <td>{{trimNum.treeTrimmingRevenue}}</td>
      
  
 
     
    
      
      
      


      
      
  



    
   
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
            trimNums: []
        }
    },

    created() {
            let apiURL = 'http://localhost:8000/api/trimNums';
            axios.get(apiURL).then(res => {
                this.trimNums = res.data;
            }).catch(error => {
                console.log(error)
            });

    },
            
    
    
}
</script>



<style scoped>
h2 {text-align: center;}
</style>