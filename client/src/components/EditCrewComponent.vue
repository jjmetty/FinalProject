<template>
<div>
   <!--<h1 style="text-align:center;">New crew Form </h1> -->

       <div class="row justify-content-center">
        <div class="col-md-6">
            <h2 class="text-center">Update crew</h2>
            <form @submit.prevent="handleUpdateForm">
               <div class = "row">
                 <div class="form-group col-sm-2 my-1">
                    <label>Company Name</label>
                    <input type="text" class="form-control" v-model = "crew.crewName">
                </div>

           
                <br>
               </div>
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
      crew: {}

    }

    


  
  },

    created: function() {
      this.getCrew();


      
    


    },
    methods: {

        getCrew(){
        let apiURL = `http://localhost:8000/api/crews/${this.$route.params.id}`;

        axios.get(apiURL).then((res) => {
          let crews = res.data;
          this.crew = crews[0];
           // this.crew = res.data;
        })
    },

        handleUpdateForm() {
            let apiURL = `http://localhost:8000/api/updateCrew/${this.$route.params.id}`;

            axios.post(apiURL, this.crew).then((res) => {
                console.log(res)
                this.$router.push('/viewCrews')
                
            }).catch(error => {
                console.log(error)
            });
        }
    }
}  


</script>