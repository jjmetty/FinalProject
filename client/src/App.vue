<template>

<!--
 create the pages and router links to them 
  -->
  
  <div>
<nav class="navbar navbar-expand-lg sticky-top navbar-light bg-light">
  <a class="navbar-brand" href="/">
    <img src="./assets/companyLogo.png" width="250" height="65" alt="">
    </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="https://www.intelius.com/?gclid=Cj0KCQiAs5eCBhCBARIsAEhk4r4URKpcA-Da8qUFFx34V3MF1vvy9gAs9qdHBiLRjqvmTg1rucvQW9QaAp8LEALw_wcB" target="_blank">Intelius</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="https://hcad.org/" target="_blank">HCAD</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
 

<div class = "wrapper bg-light">
  <div class = "sidebar bg-light">
    <ul>
      <li></li>
      <li></li>
      <li><router-link to="/newCustomer"><i class="fas fa-plus"></i>New Customer</router-link></li> 
      <li><router-link to="newCrew"><i class="fas fa-plus"></i>New Crew</router-link></li>
      <li><router-link to="/newEmployee"><i class="fas fa-plus"></i>New Employee</router-link></li>
      <li><router-link to="/newSub"><i class="fas fa-plus"></i>New Subcontractor</router-link></li>
      <li><router-link to="/viewCustomers"><i class="fas fa-users"></i>View Customers</router-link></li>
      <li><router-link to="/viewCrews"><i class="fas fa-users"></i>View Crews</router-link></li>
      <li><router-link to="/viewSubcontractors"><i class="fas fa-users"></i>View Subcontractors</router-link></li>
      <li><router-link to="/viewEmployees"><i class="fas fa-users"></i>View Employees</router-link></li>
      <li><router-link to="/viewJobs"><i class="fas fa-tree"></i>View Jobs</router-link></li>
      <li><router-link to="/viewLocation"><i class="fas fa-map-marker-alt"></i>View Tree Locations</router-link></li>
      <li><router-link to="/highJobs"><i class="fas fa-scroll"></i>View High Value Jobs</router-link></li>
      <li><router-link to="/antDate"><i class="fas fa-scroll"></i>Next Anticipated Date (Next 30 Days)</router-link></li>
      <li><router-link to="/trimNums"><i class="fas fa-scroll"></i>Tree Trimming Numbers (Current FY)</router-link></li>
      <li><router-link to="/stumpNums"><i class="fas fa-scroll"></i>Stump Grinding Numbers (Current FY)</router-link></li>
      <li><router-link to="/removalNums"><i class="fas fa-scroll"></i>Tree Removal Numbers (Current FY)</router-link></li>
      <li><router-link to="/fertNums"><i class="fas fa-scroll"></i>Tree Fertilization Numbers (Current FY)</router-link></li>
      <li><router-link to="/crewJobs"><i class="fas fa-scroll"></i>Jobs Completed By Crews (Last Month)</router-link></li>
      <li><router-link to="/crewSchedules"><i class="fas fa-scroll"></i>Crew Schedules</router-link></li>
      <li><router-link to="/SASchedules"><i class="fas fa-scroll"></i>Service Advisor(s) Schedule</router-link></li>
      <li><router-link to="/outsourcedJobs"><i class="fas fa-scroll"></i>Jobs Outsourced to Sub Contractors </router-link></li>
      <li><router-link to="/highLot"><i class="fas fa-scroll"></i>Customer High Lot Values </router-link></li>
    </ul>
  </div>
</div>

<!--
<footer>
    <div class = "fixed-bottom">
    <div class = "row text-center bg-dark">
        <div class = "col-md-4">
        </div>
        <div class = "col-md-4 md-auto text-center logo">
            <img class="mx-auto d-block" src ="./assets/logoCCG.png" alt = "logo">
            <p class = "text-light copy">Copyright © 2021 Coog Consulting Group</p>
        </div>
       
    </div>
    </div>
</footer>

https://www.youtube.com/watch?v=YesSVqjcDts&t=3s
5 minutes?

-->

    <router-view/>
  </div>


  
</template>


<style>

*{
  margin:0;
  padding:0;
  box-sizing: border-box;
  list-style:none;
}

.logo{
    padding-top:10px;
}

.copy{
    padding-top: 10px;
}

.abs-center-x {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
}

.wrapper{
  display: flex;
  position: relative;
}

.wrapper .sidebar{
  position: fixed;
  width: 200px;
  height: 100%;
  padding: 30px 0;

}

.wrapper .sidebar ul li{
  padding: 15px;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  border-top: 1px solid lightgray;

}

.wrapper .sidebar ul li a{
  color: rgb(17, 126, 17);
  display:block;
}

.wrapper .sidebar ul li a .fas{
  width: 25px;

}

.wrapper .sidebar ul li:hover{
  background: lightgray;
}

.wrapper .sidebar ul li:hover a{
  color:white;
}

.sidebar{
   position: fixed;
}

.sidebar {
    position: fixed;
    width: 150px;
    overflow-y: scroll;
    top: 0;
    bottom: 0;
}

html {
  overflow-y: scroll; 
}



</style>