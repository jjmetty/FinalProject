<template>
    <div>   
        <h2>Tree Locations</h2>
        <div class="row justify-content-center">
             <div class="col-auto">
    <table class="table table-responsive">
  <thead class="thead-light">
    <tr>
      <th scope="col">Street #</th>
      <th scope="col">Street Name</th>
      <th scope="col">Suffix</th>
      <th scope="col">City</th>
      <th scope="col">Zip</th>
      <th scope="col">Lot Value</th>
      <th scope="col">Added Value</th>
      <th scope="col">Property Value</th>
      <th scope="col">Actions</th>
      
    
    </tr>
  </thead>
  <tbody>
    <tr v-for="location in locations" :key = "location.locationID">
      <td>{{location.streetNum}}</td>
      <td>{{location.streetName}}</td>
      <td>{{location.suffix}}</td>
      <td>{{location.city}}</td>
      <td>{{location.zip}}</td>
      <td>{{location.lotValue}}</td>
      <td>{{location.addedValue}}</td>
      <td>{{location.propertyValue}}</td>

       <td>
           <router-link :to="{name: 'editLocation', params: { id: location.locationID }}" class="btn btn-primary">View</router-link>
            <router-link :to="{name: 'editLocation', params: { id: location.locationID }}" class="btn btn-success">Edit</router-link>              
           <!-- <button @click.prevent="deletelocation(location.locationID)" class="btn btn-danger">Delete</button> -->
            
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
            locations: []
        }
    },

    created() {
            let apiURL = 'http://localhost:8000/api/treeLocations';
            axios.get(apiURL).then(res => {
                this.locations = res.data;
            }).catch(error => {
                console.log(error)
            });

    },
    
//foreign key restratint with table locationPosition
    methods: {
  deletelocation(id){
                let apiURL = `http://localhost:8000/api/deletelocation/${id}`;
                let indexOfArrayItem = this.locations.findIndex(i => i.locationID === id);

                if (window.confirm("Delete location?")) {
                    axios.delete(apiURL).then(() => {
                        this.locations.splice(indexOfArrayItem, 0);
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