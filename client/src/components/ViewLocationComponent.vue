<template>
    <div>   
        <h2>Tree Locations</h2>
        <div class="row justify-content-center">
             <div class="col-auto">
                  <form >
               <div class = "row">
                 <div class="form-group col-sm-4 my-1">

                    <label><strong>Search</strong></label>
                    <input type="text" class="form-control" placeholder="Search by street name" v-model = "search">
                </div>
               </div>
            </form>
            <br>
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
    <tr v-for="location in filteredLocations" :key = "location.locationID">
      <td>{{location.streetNum}}</td>
      <td>{{location.streetName}}</td>
      <td>{{location.suffix}}</td>
      <td>{{location.city}}</td>
      <td>{{location.zip}}</td>
      <td>{{location.lotValue}}</td>
      <td>{{location.addedValue}}</td>
      <td>{{location.propertyValue}}</td>

       <td>
           <router-link :to="{name: 'newJob', params: { id: location.locationID }}" class="btn btn-success">New Job</router-link>  
           <router-link :to="{name: 'viewTree', params: { id: location.locationID }}" class="btn btn-primary">View</router-link>
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
            locations: [],
            search: ''
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
    computed: {
        filteredLocations: function(){
            return this.locations.filter((location) =>{
                return location.streetName.match(this.search);
        })
        }
    },
    
//foreign key restratint with table locationPosition
    methods: {

        getLocation(){
        let apiURL = `http://localhost:8000/api/treeLocation/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
          let locations = res.data;
          this.location = locations[0];
           // this.customer = res.data;
        })
        },
  
                
            
    }
            
    

    
}
</script>

<!-- <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Trirong"> -->

<style scoped>


h2 {text-align: center;}


</style>