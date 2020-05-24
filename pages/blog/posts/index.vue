<template>
    <div class="">
         <loading :show="!loaded && !error"/>
        <div class="card mb-3" v-if="loaded ">
        <div class="card-header  bg-dark ">
            <h6  class="text-uppercase text-white text-center"><strong>Nos articles</strong></h6>
        </div>
       <div class="card-body ">
                <div class="row  ">
                    <div class="col-sm-6 p-1 " v-for="(post , index) in posts" :key="index">
                    <div class="card h-100">
                        <div class="card-body p-0 ">
                            <div class="image-container">
                                <img class="p-image" :src="post.image" alt="">
                            </div>
                        </div>

                        <div class="card-footer bg-dark" :id="'footer'+index">
                            <h6 >
                                <nuxt-link  v-text="post.title" :to="root+post.slug"></nuxt-link>

                            </h6>
                            <p v-text="post.description"></p>
                            <div class="row p-2">
                                <span class="badge badge-info1 text-primary p-2 m-1">
                                  <i class="fa fa-eye" aria-hidden="true"></i><span class="text-primary"> {{(Math.random()*300).toFixed()}} </span>
                                </span>
                                <span class="badge badge-info1  p-2 m-1">
                                    <i class="fa fa-calendar text-warning" aria-hidden="true"></i>
                                    <span class="text-dark">{{new Date(post.created_at).toLocaleString()}}</span>

                                </span>
                            </div>
                        </div>
                    </div>
                    </div>

                    <div class="container m-1">
                        <div class="row justify-content-center text-center align-items-center" >
                            <nav aria-label="Page navigation example">
                                <ul v-if="pagination" class="pagination">
                                    <li :class="(pagination.page)==1?'page-item disabled':'page-item'">
                                        <a class="page-link" :href="'?page='+(Number.parseInt(pagination.page)-1)">Previous</a>
                                    </li>
                                    <li :class="(index-pagination.page+1)==0?'page-item active':'page-item'"   v-for="(p, index) in pagination.count" :key="index">
                                        <a class="page-link active" v-if="index==pagination.page"  :href="'?page='+(index+1)">{{index+1}}</a>
                                        <a class="page-link " v-if="index!=pagination.page"   :href="'?page='+(index+1)">{{index+1}}</a>
                                    </li>
                                    <li :class="(pagination.page-pagination.count.length)==0?'page-item disabled':'page-item '">
                                        <a class="page-link"  :href="'?page='+(Number.parseInt(pagination.page)+1)">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
        </div>
        <div v-if="error">
            <error/>
        </div>
      </div>
    </div>
</template>
<script>
import prism from 'prismjs'
import Loading from '../../../components/Loading.vue'
import Error   from '../../../layouts/error.vue'
import axios from 'axios'


export default {
    components:{
        'loading':Loading,
        'error':Error
    },
    async asyncData({env,params,query,$axios}) {
        const error = false ;
        const loaded= true ;
        try{
            const apiRoot = env.apiRoot ;
            let search='';
            if(query.page){
                search = "?page="+query.page
            }
            const response = await $axios.get(apiRoot+'/api/posts/'+search);
            const posts = response.data.data ;
            const pagination = response.data.pagination ;
            pagination.count = new Array(pagination.count);
        return {posts,error,loaded, pagination,params,query};
        }catch(error){
             error = true ;
            return{error,loaded}
        }
    },
    head(){
          return{
          title: this.title,
          meta:[
               {name:'title', content:'Etis Technologie blog  post list'},
               {name:'description', content:'The different posts posted are listed here'},
               {name:'image', content:'/logo.png'},

               {name:'og:title', content:'Etis Technologie blog  post list'},
               {name:'og:image', content:'/logo.png'},
               {name:'og:description', content:'The different posts posted are listed here'},
               {name:'og:type', content:'website'},

           ]
          }

    },
    data() {
        return {
            root:'',
            //apiRoot:process.env.apiRoot,
            posts:[],
            pagination:null,
            loaded:false,
           error:false
        }
    },
    methods: {

        getPosts(search){
          var $this = this
          axios.get(this.apiRoot+"/api/posts/"+search).then(data=>{
              window.sessionStorage.setItem('search', search)
              $this.posts = data.data.data
              $this.pagination = data.data.pagination
              $this.pagination.count= new Array(this.pagination.count)
              $this.loaded = true
              $this.error = false
          }).catch(error=>{
             $this.error = true
          });

        }

    },
   async mounted() {
        this.root = window.location.pathname+"/"
        var search = window.sessionStorage.getItem('search')
        if(search==null ||search.toString()=='null'){search=''}

       // this.getPosts(search+'')
    },
created(){

},
    updated(){
        for(var i=1; i<=this.posts.length;i++){
            if(i%2==0){
                 let foot1 = document.getElementById('footer'+(i-2));
                 let foot2 = document.getElementById('footer'+(i-1));
                 if(foot1 && foot2){
                     if(foot2.clientHeight>foot1.clientHeight){
                         foot1.style.height= foot2.clientHeight+"px;";
                     }else{
                         foot2.style.height = foot1.clientHeight+"px;"
                     }
                     console.log(foot2.clientHeight, foot1.clientHeight)
                 }
            }
        }
    }
}
</script>
<style >
  .p-image{
      width: 100%;
      height: auto;
  }
  .mspinner{
      width: 150px;
      height: 150px;
  }
  .badge-info1{
     background-color: #f6f1f4;
  }
</style>
