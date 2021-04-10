<template>
    <div>   
        <h2>Customer Table </h2>
        <div class="row justify-content-center">
             <div class="col-auto">
    <table class="table table-responsive">
  <thead class="thead-light">
    <tr>
      <th scope="col">ID</th>
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
    <tr v-for="customer in customers" :key = "customer.customerID">
      <td>{{customer.customerID}}</td>
      <td>{{customer.contactFN}}</td>
      <td>{{customer.contactLN}}</td>
      <td>{{customer.cellPhone}}</td>
      <td>{{customer.email}}</td>
      <td>{{customer.streetNum}}</td>
      <td>{{customer.streetName}}</td>
      <td>{{customer.city}}</td>

      <td>{{customer.zip}}</td>
       <td>
            <router-link :to="{name: 'editCustomer', params: { id: customer.customerID }}" class="btn btn-success">Edit</router-link>              
            <button @click.prevent="deleteCustomer(customer.customerID)" class="btn btn-danger">Delete</button>
            <button class= "btn btn-primary">View</button>
            
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
            customers: []
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