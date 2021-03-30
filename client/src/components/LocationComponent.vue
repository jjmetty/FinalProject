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
                  <div class="form-group col-sm-4 my-1">
                    <label>Lot Value</label>
                    <input type="number" class="form-control">
                  </div>

                  <div class="form-group col-sm-4 my-1">
                    <label>Added Value</label>
                    <input type="number" class="form-control">
                  </div>

                  <div class="form-group col-sm-4 my-1">
                    <label>Property Value</label>
                    <input type="number" class="form-control">
                  </div>
               </div>
              
               <div class="form-group">
                <label for="exampleFormControlTextarea1">Location Notes</label>
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