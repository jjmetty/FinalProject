<template>
<div>
   <!--<h1 style="text-align:center;">New Customer Form </h1> -->

       <div class="row justify-content-center">
        <div class="col-md-6">
            <h2 class="text-center">Update Customer</h2>
            <form @submit.prevent="handleUpdateForm">
               <div class = "row">
                 <div class="form-group col-sm-2 my-1">
                    <label>Company Name</label>
                    <input type="text" class="form-control" v-model = "customer.companyName">
                </div>

                <div class="form-group col-sm-3 my-1">
                    <label>First Name</label>
                    <input type="text" class="form-control"  v-model = "customer.contactFN" required>
                </div>

                <div class="form-group col-sm-3 my-1">
                    <label>Last Name</label>
                    <input type="text" class="form-control" v-model = "customer.contactLN" required>
                </div>

                <div class="form-group col-sm-4 my-1">
                    <label>Email</label>
                    <input type="email" class="form-control"  v-model = "customer.email" required>
                </div>
                </div>
               
               <div class = "row">
                  <div class = "form-group col-sm-3 my-1">
                     <label>Home Phone</label>
                     <input type="tel"  class = "form-control"  v-model = "customer.homePhone">
                  </div>
               
                  <div class = "form-group col-sm-3 my-1">
                     <label>Cell Phone</label>
                     <input type="tel"  class = "form-control"  v-model = "customer.cellPhone">
                  </div>
         
                  <div class = "form-group col-sm-3 my-1">
                     <label>Business Phone</label>
                     <input type="tel"  class = "form-control"  v-model = "customer.businessPhone">
                  </div>

                  <div class = "form-group col-sm-3 my-1">
                     <label>Fax</label>
                     <input type="text"  class = "form-control" v-model = "customer.fax">
                  </div>
               </div>

              <h2 class="text-center">Second Contact</h2>
         
               <div class = "row">
                <div class="form-group col-sm-3 my-1">
                    <label>First Name</label>
                    <input type="text" class="form-control"  v-model = "customer.contactFN2">
                </div>

                <div class="form-group col-sm-3 my-1">
                    <label>Last Name</label>
                    <input type="text" class="form-control"  v-model = "customer.contactLN2">
                </div>

                <div class="form-group col-sm-4 my-1">
                    <label>Email</label>
                    <input type="email" class="form-control"  v-model = "customer.email2">
                </div>
                </div>
               
               <div class = "row">
                  <div class = "form-group col-sm-3 my-1">
                     <label>Home Phone</label>
                     <input type="tel"  class = "form-control"  v-model = "customer.homePhone2">
                  </div>
               
                  <div class = "form-group col-sm-3 my-1">
                     <label>Cell Phone</label>
                     <input type="tel"  class = "form-control"  v-model = "customer.cellPhone2">
                  </div>
         
                  <div class = "form-group col-sm-3 my-1">
                     <label>Business Phone</label>
                     <input type="tel"  class = "form-control" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" v-model = "customer.businessPhone2">
                  </div>

                  <div class = "form-group col-sm-3 my-1">
                     <label>Fax</label>
                     <input type="text"  class = "form-control" v-model = "customer.fax2">
                  </div>
               </div>

               <br>
               <h2 class="text-center">Mailing/Billing Address</h2>
               
               <div class = "row">
                  <div class = "form-group col-sm-3 my-1">
                     <label>Street #</label>
                     <input type="number"  class = "form-control" v-model = "customer.streetNum" required>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Unit</label>
                    <input type="text" class="form-control" v-model = "customer.unit">
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Prefix</label>
                    <input type="text" class="form-control" v-model = "customer.pre_fix">
                  </div>

                  <div class="form-group col-sm-3 my-1">
                    <label>Street Name</label>
                    <input type="text" class="form-control" v-model = "customer.streetName" required>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Suffix</label>
                    <input type="text" class="form-control" v-model = "customer.suffix">
                  </div>
               </div>

                <div class = "row">
                  <div class = "form-group col-sm-3 my-1">
                     <label>City</label>
                     <input type="text"  class = "form-control" v-model = "customer.city" required>
                  </div>

                <div class = "form-group col-md-2 my-1">
                    <label>State</label>
                     <select class="form-control" v-model = "customer.stateID">
                     <option v-for = "state in states" v-bind:key = "state.id" v-bind:value = "state.stateID"> {{state.stateName}}</option>
                     
                     </select>
                  </div>

                   
                   

                  <div class="form-group col-sm-2 my-1">
                    <label>Zip Code</label>
                    <input type="number" class="form-control" v-model = "customer.zip"  required>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Zip Code +4</label>
                    <input type="number" class="form-control" v-model = "customer.zip4">
                  </div>

                   <div class="form-group">
                <label>Customer Notes</label>
                 <textarea class="form-control"  rows="4" cols = "45" v-model = "customer.customerNote"></textarea>
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

        handleUpdateForm() {
            let apiURL = `http://localhost:8000/api/updateCustomer/${this.$route.params.id}`;

            axios.post(apiURL, this.customer).then((res) => {
                console.log(res)
                this.$router.push('/viewCustomers')
                
            }).catch(error => {
                console.log(error)
            });
        }
    }
}  


</script>