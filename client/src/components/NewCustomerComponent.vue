<template>
<div>
   <!--<h1 style="text-align:center;">New Customer Form </h1> -->

       <div class="row justify-content-center">
        <div class="col-md-6">
            <h2 class="text-center">New Customer Form</h2>
            <form @submit.prevent="handleSubmitForm">
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

              <h2 class="text-center">Second Contact (Optional)</h2>
         
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
                    <input type="number" class="form-control" v-model = "customer.zip" required>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Zip Code +4</label>
                    <input type="number" class="form-control" v-model = "customer.zip4">
                  </div>

                  <div class = "form-group col-md-3 my-1">
                    <label>Relationship</label>
                     <select class="form-control" v-model = "customer.customerRelationshipID">
                     <option v-for = "relationship in relationships" v-bind:key = "relationship.id" v-bind:value = "relationship.customerRelationshipID"> {{relationship.customerRelationship}}</option>
                     
                     </select>
                  </div>

                   <div class="form-group">
                <label>Customer Notes</label>
                 <textarea class="form-control"  rows="4" cols = "45" v-model = "customer.customerNote" >
                 </textarea>
                </div>


                </div>
                <br>
                <div class="form-group">
                    <button class="btn btn-success btn-block col-sm-3 my-1">Create</button>
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
      customer:{
        customerRelationshipID: '',
        companyName: '',
        contactLN: '',
        contactFN: '',
        email: '',
        cellPhone: '',
        homePhone: '',
        businessPhone: '',
        fax: '',
        contactLN2: '',
        contactFN2: '',
        email2: '',
        cellPhone2: '',
        homePhone2: '',
        businessPhone2: '',
        fax2: '',
        streetNum: '',
        unit: '',
        pre_fix:'',
        streetName: '',
        suffix: '',
        unitNum:'',
        city: '',
        stateID: '',
        zip:'',
        zip4: '',
        customerNote:''
      },
      states: [],
      relationships: []
       
    }


  },

      created() {
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
      },
  methods:{
    handleSubmitForm() {
                let apiURL = 'http://localhost:8000/api/addCustomer';
                
                axios.post(apiURL, this.customer).then(() => {
                  this.$router.push('/viewCustomers')
                  this.customer = {
                   customerRelationshipID: '',
                   companyName: '',
                   contactLN: '',
                   contactFN: '',
                   email: '',
                   cellPhone: '',
                   homePhone: '',
                   businessPhone: '',
                   fax: '',
                   contactLN2: '',
                   contactFN2: '',
                   email2: '',
                   cellPhone2: '',
                   homePhone2: '',
                   businessPhone2: '',
                   fax2: '',
                   streetNum: '',
                   unit: '',
                   pre_fix:'',
                   streetName: '',
                   suffix: '',
                   unitNum:'',
                   city: '',
                   stateID: '',
                   zip:'',
                   zip4: '',
                   customerNote:''
                  }
                }).catch(error => {
                    console.log(error)
                });
            }

  }
}
</script>