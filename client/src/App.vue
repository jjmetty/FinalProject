<template>
  <div>
<nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="d-flex w-50 order-0">
        <a class="navbar-brand mr-1" href="/">Logo</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="navbar-collapse collapse justify-content-center order-2" id="collapsingNavbar">
        <ul class="navbar-nav">
            <li class="nav-item active">
                <router-link class = "nav-link" to="/">Home</router-link> 
            </li>
            <li class="nav-item">
                <router-link class = "nav-link" to="/about">About</router-link>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">TBA</a>
            </li>
            
        </ul>
    </div>
    <span class="navbar-text small text-truncate mt-1 w-50 text-right order-1 order-md-last"></span>
</nav>
 


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


    <router-view/>
  </div>


  
</template>

<style>

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

</style>