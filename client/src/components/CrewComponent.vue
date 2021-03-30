<template>
<div>
     <div class="row justify-content-center">
         <div class="col-md-6">
            <h2 class="text-center">New Crew Form</h2>
            <form>
               <div class = "row">
                <div class="form-group col-sm-4 my-1">
                    <label>Crew Name</label>
                    <input type="text" class="form-control"  required>
                </div>


<!-- Need to put label above the select tag to even them out -->

                 <div class = "form-group col-sm-4 my-1">
                     <select class="form-control">
                     <option>Crew Lead</option>
                     </select>
                  </div>

                <div class = "form-group col-sm-4 my-1">
                     <select class="form-control">
                     <option>Crew Member</option>
                     </select>
                  </div>
            </div>

            <div class="form-group">
                <label for="exampleFormControlTextarea1">Crew Notes</label>
                 <textarea class="form-control" id="exampleFormControlTextarea1" rows="4" cols = "45"></textarea>
                </div>



            <div class="form-group">
                    <button class="btn btn-success btn-block col-sm-3 my-1">Create</button>
                </div>
        
            </form>
        </div>
     </div>
</div>
</template>