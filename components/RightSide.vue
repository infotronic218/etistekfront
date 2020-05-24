<template >
    <div >
              <div v-if="categories!=null" class="card  mb-3 p-2 mshadow bg-dark">
						<div class="p-2 bg-dark">
							 <h6 class="text-center text-uppercase text-white">
                                 <strong>Notre blog  <nuxt-link  class="badge badge-success " to="/blog/posts">Visiter</nuxt-link></strong>
                             </h6>
						</div>
                        <div class="card-body bg-white">
                               <ul class="list-group list-group-flush">
                                   <li v-for="(cat, index) in categories" :key="index" class="list-group-item text-dark">
                                       {{cat.name}} <span class="badge badge-warning">{{cat.post_number}}</span>
                                       </li>
                               </ul>
                           
                       </div>
              </div>

               <div class="card  mb-3 p-2 mshadow bg-dark">
						<div class="p-2 bg-dark">
							 <h6 class="text-center text-uppercase text-white"><strong>Nous Contacter</strong></h6>
						</div>
						
						<div class="card-body bg-white">
							<div class="row">
								 <div class="col mb-2">
                                    <h6 class=""> 
                                    <a  href="tel: +226 72 58 48 46">
                                    <strong> <i class="fas fa-phone"></i>
                                        +226 72 58 48 46
                                    </strong>
                                    </a>
                                    </h6>
                                   
								 </div>
								 
								  <div class="col-12 mb-2">
                                    <h6 class=""> 
                                    <a href="mailto:etistechnologie@gmail.com">
                                    <strong><i class="fas fa-envelope"> </i> etistechnologie@gmail.com</strong>
                                    </a>
                                    </h6>
								 </div>
								 
								 <div class="col mb-2">
                                    <strong>
                                        <a class="" target="blank" href="https://www.facebook.com/ETIS-Technologies-444565246080858/"> 
                                           <i class="fab fa-facebook"> </i> Page facebook
                                        </a>
                                    </strong>
								 </div>
									
							</div>
						
						</div>
					</div>
           </div>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            categories:null,
             apiRoot:process.env.apiRoot
        }
    },
    methods: {
         getCATS(){
           axios.get(this.apiRoot+'/api/categories/').then(data=>{
                this.categories = data.data
           })
          
        }
    },
    async mounted(){
       this.getCATS()
    }
}
</script>