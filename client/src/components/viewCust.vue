<template>
<div>
   <!--<h1 style="text-align:center;">New Customer Form </h1> -->

       <div class="row justify-content-center">
        <div class="col-md-6">
            <h2 class="text-center">Customer {{customer.contactFN}}&nbsp;  &nbsp; {{customer.contactLN}}</h2>
            <form>
               <div class = "row">
                 <div class="form-group col-sm-2 my-1">
                    <label>Company Name</label>
                    <input type="text" class="form-control" v-model = "customer.companyName" disabled>
                </div>

                <div class="form-group col-sm-3 my-1">
                    <label>First Name</label>
                    <input type="text" class="form-control"  v-model = "customer.contactFN" disabled>
                </div>

                <div class="form-group col-sm-3 my-1">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model = "customer.contactLN" disabled>
                </div>

                <div class="form-group col-sm-4 my-1">
                    <label>Email</label>
                    <input type="email" class="form-control"  v-model = "customer.email" disabled>
                </div>
                </div>
               
               <div class = "row">
                  <div class = "form-group col-sm-3 my-1">
                     <label>Home Phone</label>
                     <input type="tel"  class = "form-control"  v-model = "customer.homePhone" disabled>
                  </div>
               
                  <div class = "form-group col-sm-3 my-1">
                     <label>Cell Phone</label>
                     <input type="tel"  class = "form-control"  v-model = "customer.cellPhone" disabled>
                  </div>
         
                  <div class = "form-group col-sm-3 my-1">
                     <label>Business Phone</label>
                     <input type="tel"  class = "form-control"  v-model = "customer.businessPhone" disabled>
                  </div>

                  <div class = "form-group col-sm-3 my-1">
                     <label>Fax</label>
                     <input type="text"  class = "form-control" v-model = "customer.fax" disabled>
                  </div>
               </div>

              <h2 class="text-center">Second Contact</h2>
         
               <div class = "row">
                <div class="form-group col-sm-3 my-1">
                    <label>First Name</label>
                    <input type="text" class="form-control"  v-model = "customer.contactFN2" disabled>
                </div>

                <div class="form-group col-sm-3 my-1">
                    <label>Last Name</label>
                    <input type="text" class="form-control"  v-model = "customer.contactLN2" disabled>
                </div>

                <div class="form-group col-sm-4 my-1">
                    <label>Email</label>
                    <input type="email" class="form-control"  v-model = "customer.email2" disabled>
                </div>
                </div>
               
               <div class = "row">
                  <div class = "form-group col-sm-3 my-1">
                     <label>Home Phone</label>
                     <input type="tel"  class = "form-control"  v-model = "customer.homePhone2" disabled>
                  </div>
               
                  <div class = "form-group col-sm-3 my-1">
                     <label>Cell Phone</label>
                     <input type="tel"  class = "form-control"  v-model = "customer.cellPhone2" disabled>
                  </div>
         
                  <div class = "form-group col-sm-3 my-1">
                     <label>Business Phone</label>
                     <input type="tel"  class = "form-control" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" v-model = "customer.businessPhone2" disabled>
                  </div>

                  <div class = "form-group col-sm-3 my-1">
                     <label>Fax</label>
                     <input type="text"  class = "form-control" v-model = "customer.fax2" disabled>
                  </div>
               </div>

               <br>
               <h2 class="text-center">Mailing/Billing Address</h2>
               
               <div class = "row">
                  <div class = "form-group col-sm-3 my-1">
                     <label>Street #</label>
                     <input type="number"  class = "form-control" v-model = "customer.streetNum" disabled>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Unit</label>
                    <input type="text" class="form-control" v-model = "customer.unit" disabled>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Prefix</label>
                    <input type="text" class="form-control" v-model = "customer.pre_fix" disabled>
                  </div>

                  <div class="form-group col-sm-3 my-1">
                    <label>Street Name</label>
                    <input type="text" class="form-control" v-model = "customer.streetName" disabled>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Suffix</label>
                    <input type="text" class="form-control" v-model = "customer.suffix" disabled>
                  </div>
               </div>

                <div class = "row">
                  <div class = "form-group col-sm-3 my-1">
                     <label>City</label>
                     <input type="text"  class = "form-control" v-model = "customer.city" disabled>
                  </div>

                <div class = "form-group col-md-2 my-1">
                    <label>State</label>
                     <select class="form-control" v-model = "customer.stateID" disabled>
                     <option v-for = "state in states" v-bind:key = "state.id" v-bind:value = "state.stateID" > {{state.stateName}}</option>
                     
                     </select>
                  </div>

                   
                   

                  <div class="form-group col-sm-2 my-1">
                    <label>Zip Code</label>
                    <input type="number" class="form-control" v-model = "customer.zip"  disabled>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Zip Code +4</label>
                    <input type="number" class="form-control" v-model = "customer.zip4" disabled>
                  </div>

                   <div class = "form-group col-md-3 my-1">
                    <label>Relationship</label>
                     <select class="form-control" v-model = "customer.customerRelationshipID" disabled>
                     <option v-for = "relationship in relationships" v-bind:key = "relationship.id" v-bind:value = "relationship.customerRelationshipID"> {{relationship.customerRelationship}}</option>
                     
                     </select>
                  </div>

                   <div class="form-group">
                <label>Customer Notes</label>
                 <textarea class="form-control"  rows="4" cols = "45" v-model = "customer.customerNote" disabled></textarea>
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
      customer: {},
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

             let apiURL1 = 'http://localhost:8000/api/customerRelationship';
            axios.get(apiURL1).then(res => {
                this.relationships = res.data;
            }).catch(error => {
                console.log(error)
            });



      this.getCustomer();


      
    


    },
    methods: {

        getCustomer(){
        let apiURL = `http://localhost:8000/api/customers/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
          let customers = res.data;
          this.customer = customers[0];
           // this.customer = res.data;
        })
    },

       
    }

}


</script>