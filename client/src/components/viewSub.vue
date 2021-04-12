<template>
<div>
  <div class="row justify-content-center">
        <div class="col-md-6">
            <h2 class="text-center">Subcontractor {{sub.companyName}}</h2>
            <form>
               <div class = "row">

                 <div class = "form-group col-sm-3 my-1">
                     <label>Company</label>
                     <input type="text"  class = "form-control" v-model= "sub.companyName" disabled>
                  </div>

                  <div class = "form-group col-sm-3 my-1">
                     <label>Phone</label>
                     <input type="tel"  class = "form-control" v-model= "sub.phone" disabled>
                  </div>

                  <div class = "form-group col-sm-3 my-1">
                     <label>Email</label>
                     <input type="email"  class = "form-control" v-model= "sub.email" disabled>
                  </div>
               </div>

                <div class = "row">
                  <div class = "form-group col-sm-2 my-1">
                     <label>Street #</label>
                     <input type="number"  class = "form-control" v-model= "sub.streetNum" disabled>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Unit</label>
                    <input type="text" class="form-control" v-model= "sub.unit" disabled>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Prefix</label>
                    <input type="text" class="form-control" v-model= "sub.pre_fix" disabled>
                  </div>

                  <div class="form-group col-sm-3 my-1">
                    <label>Street Name</label>
                    <input type="text" class="form-control" v-model= "sub.streetName" disabled>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Suffix</label>
                    <input type="text" class="form-control" v-model= "sub.suffix" disabled>
                  </div>
                </div>
              
              

                <div class = "row">
                  <div class = "form-group col-sm-3 my-1">
                     <label>City</label>
                     <input type="text"  class = "form-control" v-model= "sub.city" disabled>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label >State</label>
                    <select class="form-control" v-model= "sub.stateID" disabled>
                    <option v-for = "state in states" v-bind:key = "state.id" v-bind:value = "state.stateID"> {{state.stateName}}</option>

                    </select>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Zip Code</label>
                    <input type="number" class="form-control" v-model= "sub.zip" disabled>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Zip Code +4</label>
                    <input type="number" class="form-control" v-model= "sub.zip4" disabled>
                  </div>

                </div>
                  <br>
                <div class = "row">
                <div class = "form-group col-sm-3 my-1">
                  <label>Contractor Type</label>
                     <select class="form-control" v-model = "sub.subContractorTypeID" @click="subTypes" disabled>
                     <option v-for = "subtype in subtypes" v-bind:key = "subtype.id" v-bind:value = "subtype.subContractorTypeID">{{subtype.subContractorType}}</option>
                     </select>
                  </div>
                
                </div>
                <br>
                
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

  
    }
}  


</script>