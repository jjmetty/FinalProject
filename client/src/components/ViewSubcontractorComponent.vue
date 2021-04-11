<template>
    <div>   
        <h2>Subcontractors</h2>
        <div class="row justify-content-center">
             <div class="col-auto">
    <table class="table table-responsive">
  <thead class="thead-light">
    <tr>
      <th scope="col">Company Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">Street #</th>
      <th scope="col">Street Name</th>
      <th scope="col">Suffix</th>
      <th scope="col">City</th>
      <th scope="col">Zip</th>
      <th scope="col">Actions</th>
      
    
    </tr>
  </thead>
  <tbody>
    <tr v-for="sub in subs" :key = "sub.subID">
      <td>{{sub.companyName}}</td>
      <td>{{sub.phone}}</td>
      <td>{{sub.email}}</td>
      <td>{{sub.streetNum}}</td>
      <td>{{sub.streetName}}</td>
      <td>{{sub.suffix}}</td>
      <td>{{sub.city}}</td>
      <td>{{sub.zip}}</td>
      

       <td>
            <router-link :to="{name: 'editSub', params: { id: sub.subContractorID }}" class="btn btn-success">Edit</router-link>              
            <button @click.prevent="deletesub(sub.subID)" class="btn btn-danger">Delete</button>
            
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
            subs: []
        }
    },

    created() {
            let apiURL = 'http://localhost:8000/api/subcontractors';
            axios.get(apiURL).then(res => {
                this.subs = res.data;
            }).catch(error => {
                console.log(error)
            });

    },
    
//foreign key restratint with table subPosition
    methods: {
  deletesub(id){
                let apiURL = `http://localhost:8000/api/deletesub/${id}`;
                let indexOfArrayItem = this.subs.findIndex(i => i.subID === id);

                if (window.confirm("Delete sub?")) {
                    axios.delete(apiURL).then(() => {
                        this.subs.splice(indexOfArrayItem, 0);
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