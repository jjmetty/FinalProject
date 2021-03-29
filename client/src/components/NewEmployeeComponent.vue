<template>
   <div>

       <div class="row justify-content-center">
        <div class="col-md-6">
            <h2 class="text-center">New Employee Form</h2>
            <form>
               <div class = "row">
                <div class="form-group col-sm-3 my-1">
                    <label>First Name</label>
                    <input type="text" class="form-control"  required>
                </div>

                <div class="form-group col-sm-3 my-1">
                    <label>Last Name</label>
                    <input type="email" class="form-control"  required>
                </div>

                <div class="form-group col-sm-4 my-1">
                    <label>Email</label>
                    <input type="email" class="form-control"  required>
                </div>
                </div>
               
               <div class = "row">
                  <div class = "form-group col-sm-3 my-1">
                     <label>Home Phone</label>
                     <input type="tel"  class = "form-control" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
                  </div>
               
                  <div class = "form-group col-sm-3 my-1">
                     <label>Mobile Phone</label>
                     <input type="tel"  class = "form-control" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
                  </div>
         
                  <div class = "form-group col-sm-3 my-1">
                     <label>Business Phone</label>
                     <input type="tel"  class = "form-control" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}">
                  </div>

               </div>
               <br>
               <div class = "row">
                  <div class = "form-group col-sm-3 my-1">
                     <select class="form-control">
                     <option>Employee Status</option>
                     <option>Test</option>
                     </select>
                  </div>

                  <div class = "form-group col-sm-3 my-1">
                     <select class="form-control">
                     <option>Employee Position</option>
                     </select>
                  </div>

                  <div class = "form-group col-sm-3 my-1">
                     <select class="form-control">
                     <option>Skill</option>
                     </select>
                  </div>
               </div>
                <br>
                <div class = "row">
                <div class="form-group col-sm-3 my-1">
                    <label>Skill Level</label>
                    <input type="text" class="form-control">
                </div>
              
               <div class="form-group">
                <label for="exampleFormControlTextarea1">Employee Notes</label>
                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" cols = "45"></textarea>
                </div>



                </div>


                <br>
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