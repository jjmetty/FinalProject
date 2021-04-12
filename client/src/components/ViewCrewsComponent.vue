<template>
    <div>   
        <h2>Crews</h2>
        <div class="row justify-content-center">
             <div class="col-auto">
    <table class="table table-responsive">
  <thead class="thead-light">
    <tr>
      
      <th scope="col">Crew Name</th>
      <th scope="col">Actions</th>
   
      
    
    </tr>
  </thead>
  <tbody>
    <tr v-for="crew in crews" :key = "crew.crewID">
   
      <td>{{crew.crewName}}</td>
 
  

       <td>
            <router-link :to="{name: 'editCrew', params: { id: crew.crewID }}" class="btn btn-success">Edit</router-link>              
            <button @click.prevent="deleteCrew(crew.crewID)" class="btn btn-danger">Delete</button>
            
            
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
            crews: []
        }
    },

    created() {
            let apiURL = 'http://localhost:8000/api/crews';
            axios.get(apiURL).then(res => {
                this.crews = res.data;
            }).catch(error => {
                console.log(error)
            });

    },
    
//foreign key restratint with table crewPosition
    methods: {
  deleteCrew(id){
                let apiURL = `http://localhost:8000/api/deleteCrew/${id}`;
                let indexOfArrayItem = this.crews.findIndex(i => i.crewID === id);

                if (window.confirm("Delete crew?")) {
                    axios.delete(apiURL).then(() => {
                        this.crews.splice(indexOfArrayItem, 0);
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