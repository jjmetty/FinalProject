<template>
<div>
  <div class="row justify-content-center">
        <div class="col-md-6">
            <h2 class="text-center">Update Subcontractor</h2>
            <form @submit.prevent="handleUpdateForm">
               <div class = "row">

                 <div class = "form-group col-sm-3 my-1">
                     <label>Company</label>
                     <input type="text"  class = "form-control" v-model= "sub.companyName" required>
                  </div>

                  <div class = "form-group col-sm-3 my-1">
                     <label>Phone</label>
                     <input type="tel"  class = "form-control" v-model= "sub.phone" required>
                  </div>

                  <div class = "form-group col-sm-3 my-1">
                     <label>Email</label>
                     <input type="email"  class = "form-control" v-model= "sub.email" required>
                  </div>
               </div>

                <div class = "row">
                  <div class = "form-group col-sm-2 my-1">
                     <label>Street #</label>
                     <input type="number"  class = "form-control" v-model= "sub.streetNum" required>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Unit</label>
                    <input type="text" class="form-control" v-model= "sub.unit">
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Prefix</label>
                    <input type="text" class="form-control" v-model= "sub.pre_fix">
                  </div>

                  <div class="form-group col-sm-3 my-1">
                    <label>Street Name</label>
                    <input type="text" class="form-control" v-model= "sub.streetName" required>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Suffix</label>
                    <input type="text" class="form-control" v-model= "sub.suffix">
                  </div>
                </div>
              
              

                <div class = "row">
                  <div class = "form-group col-sm-3 my-1">
                     <label>City</label>
                     <input type="text"  class = "form-control" v-model= "sub.city" required>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label >State</label>
                    <select class="form-control" v-model= "sub.stateID">
                    <option v-for = "state in states" v-bind:key = "state.id" v-bind:value = "state.stateID"> {{state.stateName}}</option>

                    </select>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Zip Code</label>
                    <input type="number" class="form-control" v-model= "sub.zip" required>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Zip Code +4</label>
                    <input type="number" class="form-control" v-model= "sub.zip4">
                  </div>

                </div>
                  <br>
                <div class = "row">
                <div class = "form-group col-sm-3 my-1">
                  <label>Contractor Type</label>
                     <select class="form-control" v-model = "sub.subContractorTypeID" @click="subTypes">
                     <option v-for = "subtype in subtypes" v-bind:key = "subtype.id" v-bind:value = "subtype.subContractorTypeID">{{subtype.subContractorType}}</option>
                     </select>
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
      sub: {},
      subtypes: {},
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

       let apiURL1 = 'http://localhost:8000/api/subtype';
            axios.get(apiURL1).then(res => {
                this.subtypes = res.data;
            }).catch(error => {
                console.log(error)
            });

            

      this.getSub();


      
    


    },
    methods: {
            subTypes(){
       let apiURL = 'http://localhost:8000/api/subtype';
            axios.get(apiURL).then(res => {
                this.subtypes = res.data;
            }).catch(error => {
                console.log(error)
            });

    },
        clickStates(){
       let apiURL = 'http://localhost:8000/api/subtype';
            axios.get(apiURL).then(res => {
                this.subtypes = res.data;
            }).catch(error => {
                console.log(error)
            });

    },

    

        
        getSub(){
        let apiURL = `http://localhost:8000/api/subcontractor/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
          let subs = res.data;
          this.sub = subs[0];
           // this.customer = res.data;
        })
    },

        handleUpdateForm() {
            let apiURL = `http://localhost:8000/api/updateSub/${this.$route.params.id}`;

            axios.post(apiURL, this.sub).then((res) => {
                console.log(res)
                this.$router.push('/viewSubcontractors')
                
            }).catch(error => {
                console.log(error)
            });
        }
    }
}  


</script>