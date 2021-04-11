<template>
   <div>

      <div class="row justify-content-center">
        <div class="col-md-6">
            <h2 class="text-center">Tree Location</h2>
            <form @submit.prevent="handleUpdateForm">
               <div class = "row">

                   <div class = "form-group col-sm-2 my-1">
                     <label>Customer ID</label>
                     <input type="number"  class = "form-control" v-model = "location.customerID" required>
                  </div>


                  <div class = "form-group col-sm-2 my-1">
                     <label>Street #</label>
                     <input type="number"  class = "form-control" v-model = "location.streetNum" required>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Unit</label>
                    <input type="text" class="form-control" v-model = "location.unit">
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Prefix</label>
                    <input type="text" class="form-control" v-model = "location.pre_fix">
                  </div>

                  <div class="form-group col-sm-3 my-1">
                    <label>Street Name</label>
                    <input type="text" class="form-control"  v-model = "location.streetName" required>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Suffix</label>
                    <input type="text" class="form-control"  v-model = "location.suffix">
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Unit #</label>
                    <input type="number" class="form-control"  v-model = "location.unitNum">
                  </div>
               </div>

                <div class = "row">
                  <div class = "form-group col-sm-3 my-1">
                     <label>City</label>
                     <input type="text"  class = "form-control"  v-model = "location.city" required>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>State</label>
                     <select class="form-control" v-model = "location.stateID">
                     <option v-for = "state in states" v-bind:key = "state.id" v-bind:value = "state.stateID"> {{state.stateName}}</option>
                     
                     </select>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Zip</label>
                    <input type="number" class="form-control"  v-model = "location.zip" required>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Zip +4</label>
                    <input type="number" class="form-control"  v-model = "location.zip4">
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Key Map</label>
                    <input type="number" class="form-control"  v-model = "location.keyMap">
                  </div>
                  </div>

                  <br>
               
               <div class = "row">
                  <div class="form-group col-sm-2 my-1">
                    <label>Lot Value</label>
                    <input type="number" class="form-control" v-model = "location.lotValue">
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Added Value</label>
                    <input type="number" class="form-control"  v-model = "location.addedValue">
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Property Value</label>
                    <input type="number" class="form-control"  v-model = "location.propertyValue">
                  </div>

                     <div class="form-group col-sm-3 my-1">
                     <label >Anticipated Date:</label>
                     <input type="date" class = "form-control"  v-model = "location.nextAnticipatedDate" >
                  </div>
               </div>


              
           
              
                  
               
     
               
                <br>
                <div class="form-group">
                    <button class="btn btn-success btn-block col-sm-3 my-1">Update</button>
                </div>
            </form>
        </div>
    </div>












   </div>
</template>


<script>
import axios from "axios";

export default {
  data(){
    return{
      location: {},
      states: {}
     

    }

    


  
  },

    created: function() {
          let apiURL = 'http://localhost:8000/api/stateNames';
            axios.get(apiURL).then(res => {
                this.states = res.data;
            }).catch(error => {
                console.log(error)
            });
      this.getLocation();


      

    },

    
    methods: {

           getDate(datetime) {
            let date = 
                 new Date(datetime).toJSON().slice(0,10).replace(/-/g,'/')
                    return date
            },


        getLocation(){
        let apiURL = `http://localhost:8000/api/treeLocation/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
          let locations = res.data;
          this.location = locations[0];
           // this.location = res.data;
        })
    },

        handleUpdateForm() {
            let apiURL = `http://localhost:8000/api/updateLocation/${this.$route.params.id}`;

            axios.post(apiURL, this.location).then((res) => {
                console.log(res)
                this.$router.push('/viewLocation')
                
            }).catch(error => {
                console.log(error)
            });
        }
    }
}  


</script>