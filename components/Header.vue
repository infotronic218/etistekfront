<template>
          <div   class="container-fluid my-nav bg-dark ">
                  <div class="row justify-content-center  desktop-only">
                      <div class="col-sm mt-2 mx-1 p-1 ntec">
                       <div class="">   <img style="max-height: 100%; max-width: 100%;" src="/logo.png" alt=""></div>
                      </div>
                      <div class="col mt-2 mx-1 ntec p-1 ">
                            <h5  class="mx-3"><a class=" text-center text-white" href="tel:+22672584846" >
                                     <strong><i class="fas fa-phone"></i>
                                      +226 72 58 48 46 </strong>
                             </a></h5>
                             <h5 class="mx-3">
                                <a class=" text-center text-white" href="mailto:etistechnologie@gmail.com" >
                                     <strong><i class="fas fa-envelope"></i>
                                      etistechnologie@gmail.com </strong>
                                </a>
                             </h5>
                      </div>
                      <div class="col mt-2 mx-1 ntec p-1 desktop-only">
                            <div class=" text-center text-uppercase">
                            <h1 ><strong class="text-primary">ETIS</strong>
                           <strong class="text-white">  Technologies</strong></h1>
                            <div class="row mx-4">
                               <a class="col text-white" href="https://www.facebook.com/ETIS-Technologies-444565246080858/" target="blank">
                               <i class="fab fa-facebook" style="font-size: 24px;"></i></a>
                               <a class="col text-white" href="https://www.facebook.com/ETIS-Technologies-444565246080858/" target="blank">
                                  <i class="fab fa-linkedin" style="font-size: 24px;"></i>
                                </a>
                                <a href="#" class="col text-white">
                                  <i class="fab fa-twitter" style="font-size: 24px;"></i>
                                </a>
                            </div>
                            </div>
                      </div>
                           
                  </div>
                 
                  <nav class="navbar navbar-expand-lg navbar-dark mobile-menu">
                    <a  class="navbar-brand text-primary   text-uppercase " href="/">
                     
                       <img class="mobile-only " style="max-width:130px;"  src="/logo.png" alt="">
                     
                    </a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                      Menu<span class="navbar-toggler-icon "></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                      <div class="navbar-nav align-items-center">
                       
                        <nuxt-link class="m-2 mlink d-flex btn w-100 text-uppercase" exact-active-class="m-active" to="/"><i class="fas fa-home text-white mx-1"></i> <strong>Acceuil</strong></nuxt-link>
                        <nuxt-link class="m-2 mlink d-flex h5 w-100 btn text-uppercase" exact-active-class="m-active" to="/services"><i class="fas fa-briefcase text-white mx-1"></i><strong> Services</strong></nuxt-link>
                        <nuxt-link class="m-2 mlink d-flex h5 w-100 btn text-uppercase" exact-active-class="m-active" to="/formations"><i class="fa fa-certificate text-white mx-1"></i><strong> Formations</strong></nuxt-link>
                        <nuxt-link class="m-2 mlink d-flex h5 w-100 btn text-uppercase" active-class="m-active" to="/blog/posts"><i class="fas fa-blog text-white mx-1"></i><strong> Blog</strong></nuxt-link>
                        <nuxt-link class="m-2 mlink btn d-flex h5 w-100 text-uppercase" exact-active-class="m-active" to="/contact"> <i class="fas fa-envelope text-white mx-1"></i><strong>  Contact</strong></nuxt-link>
                      </div>
                    </div>
                  </nav>
               </div>
</template>


<style>


</style>
<script>
export default {
   methods: {
     loginForm(){
        $('#loginForm').modal('show')
     },

     logout(){
       window.Store.commit('logout')
       

     }
   },
   mounted() {
   
      
   },
}
</script>
<style>

    .mobile-only{
       display: none!important;
    }
       @media screen and (max-width: 600px) {
         .desktop-only{
           display: none! important;
         }

         .mobile-only{
           
           display:initial!important;

         }
         .main{
           margin-top: 70px;
         }
         .mobile-menu{
            position: fixed!important;
            top: 0;
            right: 0;
            left: 0;
            z-index: 1030;
            background-color: #332040!important;
         }
       }
    
    

</style>

