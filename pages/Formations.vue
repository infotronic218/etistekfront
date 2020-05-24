<template>
    <div id="services" class="row">
        <div class="col-sm-12 mb-3">
           <div class="card mshadow  ">
              <div class=" bg-dark p-3">
                <h6 class="text-center text-uppercase text-white"><strong>Nos formations</strong></h6>
              </div>
              <div class="card-body p-0">
                <div class="p-4 m-2">
                    <h4 class="text-center">L'ensemble des formations disponble sur notre site</h4>
                    <p >Des formations dans le domaine de  
                        l'électronique, l'informatique et les installations
                         électriques solaires sont  disponibles chez nous. Pour demander une formations il suffit de nous envoyer une demande par l'aide ou
                         nous contacter par numéro de téléphone.
                         Les formations sont assurés par des membres de notre équipe ou des partenaires exterieurs qualifiés pour vous oartager leurs expériences.
                         Des attestations sont délivrées à la fin de chaque formations.
                     </p>
                </div>
              </div>
           </div>
        </div>
        <div class="col-sm-6 p-3" v-for="(formation, index) in formations" :key="index">
         <div class="card text-left h-100 mshadow">
            <img class="card-img-top" :src="formation.image" alt="">
            <div class="card-body">
               <h5 class="card-title" v-text="formation.title">Title</h5>
               <p class="card-text" v-text="formation.description">Body</p>
            </div>
         </div>
        </div>

        <div class="col-sm-12 p-3">
           <div class="card mshadow">
              <div class="card-body">
               <p>
                  En plus de ces formations déjà disponible, vous pouvez nous demander une formation particulier. 
                  Notre équipe se chargera de trouver une personne 
                  qui dispose les compétences necessaire pour vous offrir la formation.
               </p>
            </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
   head(){
      return{
           title:"EtisTek Formations",
           meta:[
              {name:'description',content:'Nous offrons plusieurs formations dans plusieurs domaines tels que l\'énergie solaire , les installations électriques, la conception électronique et la programmation !'}
           ]
      }
    
   },
   data() {
      return {
         formations:[

            {title:'Maitriser les bases de l\'Arduino',
             description:'Une formation sur les bases de l\'électronique avec Arduino qui vous aidera à démarrer en matière de programmation et aussi l\'utilisation des capteurs et des actionneurs', 
            image:'/formations/arduino.png'
            },
             {title:'Un pas dans le monde des objets connectés',
             description:'Le monde des objets connectés s\'agrandit de plus en plus. Utilisée dans plusieurs applications innovantes. Cette formation vous donnera les bases des systèmes connectés IOT avec le nano ordinateur Raspberry Pi. ', 
            image:'/formations/raspberry.png'
            },
            {title:'Conception de PCB ',
             description:'Vous faites déjà des circuits électroniques mais sur une plaquette d\'essaie ou sur une carte de prototypage, cette formation vous permettra de réaliser des cartes professionnelles',
            image:'/formations/pcb-design.png'
            },
            {title:'Apprendre le logiciel Autocad',
             description:'Avec cette formation prenez en main l\'outil de conception électrique Autocad. Vous apprendrez comment faire le schéma d\'une installation électrique en respectant les différents normes', 
            image:'/formations/autocad.png'
            },
            {title:'Dimensionnement et Installation solaire',
             description:'Les installations solaire sont à la base simple mais pour répondre à un cahier des charges spécifiques, il est nécessaire d\'avoir des notions trés poussées en matière de dimensionnement électrique, pour augmenter l\'éfficacité et la durée de l\'installation', 
            image:'/formations/solaire.png'
            },
            {title:'Formation en programmation informatique',
             description:'La programmation est comme un outil de base et nécessaire pour tous les secteurs. Nous offrons une formation qui vous permettra d\'apprendre les bases et bien démarrer dans ce domaine innovant que est l\'informatique', 
            image:'/formations/programming.png'
            }
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
