<template>
    <div id="services" class="row">
        <div class="col-sm-12 mb-3">
           <div class="card mshadow bg-dark p-2">
              <div class="p-2 bg-dark">
                <h6 class="text-center text-uppercase text-white"><strong>Installation Electrique</strong></h6>
              </div>
              <div class="card-body bg-dark p-0">
                 <div class="card   bg-dark">
                <img class="card-img-top" src="/imgs/Installation_electrique.png" alt="Installation Elecctrique">
                <div hidden class="card-img-overlay">
                   <h3 class=" text-white text-uppercase">
                  <ul>
                     <li class="my-2">Installation électrique</li>
                     <li class="my-2">Maintenance électrique</li>
                     <li class="my-2">Dimensionnement électrique</li>
                     <li class="my-2">Devis de votre installation électrique</li>
                  </ul>
                   </h3>
                </div>
                </div>
              </div>
           </div>
        </div>

        <div class="col-sm-12 mb-3">
           <div class="card mshadow bg-dark p-2">
              <div class="p-2 bg-dark">
                <h6 class="text-center text-uppercase text-white"><strong>Installation pompe immergée</strong></h6>
              </div>
              <div class="card-body p-0">
                 <img class="mimg " src="/imgs/Installation_pompe.png" alt="Installation pompe immergée">
              </div>
           </div>
        </div>

        <div class="col-sm-12 mb-3">
           <div class="card mshadow bg-dark p-2">
              <div class="p-2 bg-dark">
                <h6 class="text-center text-uppercase text-white"><strong>Installation solaire</strong></h6>
              </div>
              <div class="card-body p-0">
                   <img class="mimg w-100" src="/imgs/Installation_solaire.png" alt="Installation solaire">
              </div>
           </div>
        </div>

        <div class="col-sm-12 mb-3" hidden>
           <div class="card mshadow bg-dark p-2">
              <div class="p-2 bg-dark">
                <h6 class="text-center text-uppercase text-white"><strong>Domotique</strong></h6>
              </div>
              <div class="card-body p-0 mx-auto">
                <img class="mimg" src="https://static.fnac-static.com/multimedia/Images/FD/Comete/102332/CCP_IMG_ORIGINAL/1314607.jpg" alt="">
              </div>
           </div>
        </div>

    </div>
</template>
<script>

export default {
   head(){
      return{
           title:"EtisTek Services",
           meta:[
              {name:'description',content:'Etis technologies offre plusieurs services dans le milieu industriel !'}
           ]
      }
   },
   mounted() {
     
   },
}
</script>
<style>
    .mimg{
       width: 100%;
       height: auto;
    }
    .card-img-overlay{
       opacity: 0;
       transition: 2s;
    }
    .card-img-overlay:hover{
       opacity: 1;
       background-color: rgba(136, 130, 130, 0.80);
    }
    .box-card:hover{
      box-shadow: 5px 5px 4px gray;
    }

</style>
