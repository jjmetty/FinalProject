<template>
<div>
   <!--<h1 style="text-align:center;">New Customer Form </h1> -->

       <div class="row justify-content-center">
        <div class="col-md-6">
            <h2 class="text-center">New Crew Form</h2>
            <form @submit.prevent="handleSubmitForm">
               <div class = "row">
                  <div class = "form-group col-sm-3 my-1">
                     <label>Crew Name</label>
                     <input type="text"  class = "form-control" v-model = "crew.crewName" required>
                  </div>


                  
               </div>
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
      crew:{
        crewName: '',
       
      },
       
    }

      },
  methods:{
    handleSubmitForm() {
                let apiURL = 'http://localhost:8000/api/addCrew';
                
                axios.post(apiURL, this.crew).then(() => {
                  this.$router.push('/viewCrews')
                  this.crew = {
                   crewName: '',
    
                  }
                }).catch(error => {
                    console.log(error)
                });
            }

  }
}
</script>