<template>
   <div>

      <div class="row justify-content-center">
        <div class="col-md-6">
            <h2 class="text-center">New Job Form</h2>
            <form>
               <div class = "row">
                  <div class = "form-group col-sm-2 my-1">
                     <label>Street #</label>
                     <input type="number"  class = "form-control" required>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Unit</label>
                    <input type="text" class="form-control">
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Prefix</label>
                    <input type="text" class="form-control">
                  </div>

                  <div class="form-group col-sm-3 my-1">
                    <label>Street Name</label>
                    <input type="text" class="form-control" required>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Suffix</label>
                    <input type="text" class="form-control">
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Unit #</label>
                    <input type="number" class="form-control">
                  </div>
               </div>

                <div class = "row">
                  <div class = "form-group col-sm-3 my-1">
                     <label>City</label>
                     <input type="text"  class = "form-control" required>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>State</label>
                    <input type="text" class="form-control" required>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Zip Code</label>
                    <input type="number" class="form-control" required>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Zip Code +4</label>
                    <input type="number" class="form-control">
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Key Map</label>
                    <input type="number" class="form-control">
                  </div>
                  </div>

                  <br>
                <div class = "row">
                  <div class="form-group col-sm-3 my-1">
                     <label >Assessment date:</label>
                     <input type="date" class = "form-control">
                  </div>
                  
                  <div class="form-group col-sm-3 my-1">
                     <label for="requestDate">Request date:</label>
                     <input type="date" id="requestDate" class = "form-control">
                  </div>

                  <div class="form-group col-sm-3 my-1">
                     <label >Start date:</label>
                     <input type="date" class = "form-control">
                  </div>

                  <div class="form-group col-sm-3 my-1">
                     <label >Finish date:</label>
                     <input type="date" class = "form-control">
                  </div>
                </div>
               <br>
               <div class = "row">
                  <div class = "form-group col-sm-3 my-1">
                     <select class="form-control">
                     <option>Service Advisor</option>
                     </select>
                  </div> 

                  <div class = "form-group col-sm-3 my-1">
                     <select class="form-control">
                     <option>Job Status</option>
                     </select>
                  </div>

                  <div class = "form-group col-sm-3 my-1">
                     <select class="form-control">
                     <option>Crew</option>
                     </select>
                  </div>

                  <div class = "form-group col-sm-3 my-1">
                     <select class="form-control">
                     <option>Service Selection</option>
                     </select>
                  </div>
                  
                  <div class="form-group col-sm-2 my-1">
                    <label># of Services</label>
                    <input type="number" class="form-control">
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Service Charge</label>
                    <input type="number" class="form-control">
                  </div>
               </div>
               <div class = "row">
                  <div class="form-group col-sm-5 my-1">
                    <label>Proposal Description</label>
                    <input type="text" class="form-control" required>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Proposal Price</label>
                    <input type="text" class="form-control" required>
                  </div>

                  <div class="form-group col-sm-2 my-1">
                    <label>Total Job Charge</label>
                    <input type="number" step=0.01 class="form-control" required>
                  </div>


               </div>
               
               <div class="form-group">
                <label for="exampleFormControlTextarea1">Job Description</label>
                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" cols = "45"></textarea>
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





<style scoped>


</style>