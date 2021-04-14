<template>
    <div>   
        <h2>Customers</h2>
        <br>
        <div class="row justify-content-center">
             <div class="col-auto">
            <form >
               <div class = "row">
                 <div class="form-group col-sm-3 my-1">

                    <label><strong>Search</strong></label>
                    <input type="text" class="form-control" placeholder="Search by name, last 4, or street" v-model = "search">
                </div>
               </div>
            </form>
            <br>
    <table class="table table-responsive">
  <thead class="thead-light">
    <tr>
    
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Cell Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Street #</th>
      <th scope="col">Street Name</th>
      <th scope="col">City</th>
      <th scope="col">Zip</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="customer in filteredNames" :key = "customer.customerID" >
  
      <td>{{customer.contactFN}}</td>
      <td>{{customer.contactLN}}</td>
      <td>{{customer.cellPhone}}</td>
      <td>{{customer.email}}</td>
      <td>{{customer.streetNum}}</td>
      <td>{{customer.streetName}}</td>
      <td>{{customer.city}}</td>
      <td>{{customer.zip}}</td>
       <td>
            <router-link :to="{name: 'treeLocation', params: { id: customer.customerID }}" class="btn btn-success">+ Tree Location</router-link> 
            <router-link :to="{name: 'viewCust', params: { id: customer.customerID }}" class= "btn btn-primary">View</router-link>
            <router-link :to="{name: 'editCustomer', params: { id: customer.customerID }}" class="btn btn-success">Edit</router-link>
                           
            <!--<button @click.prevent="deleteCustomer(customer.customerID)" class="btn btn-danger">Delete</button> -->
           
            
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
            customers: [],
            search:''
            
        }
    },

    created() {
            let apiURL = 'http://localhost:8000/api/customers';
            axios.get(apiURL).then(res => {
                this.customers = res.data;
            }).catch(error => {
                console.log(error)
            });

    },

    computed: {
        filteredNames: function(){
            return this.customers.filter((customer) =>{
                return customer.contactFN.match(this.search) || customer.contactLN.match(this.search) || customer.cellPhone.match(this.search) || 
                customer.streetName.match(this.search);
            })
        }

    },
    methods: {
  deleteCustomer(id){
                let apiURL = `http://localhost:8000/api/deleteCustomer/${id}`;
                let indexOfArrayItem = this.customers.findIndex(i => i.customerID === id);

                if (window.confirm("Delete Customer?")) {
                    axios.delete(apiURL).then(() => {
                        this.customers.splice(indexOfArrayItem, 0);
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