<template>
    <div>
        <loading :show="!loaded && !error"/>
        <div class="card mb-3" v-if="post">
           <div class="card-body">
                <div v-if="post" class="">
                    <h4 class="text-center text-primary" v-html="post.title"></h4>
                    <div v-html="post.content"></div>
                </div>
                <div class="m-1">
                    <button onclick="history.back()" class="btn btn-primary">Retour</button>
                </div>
           </div>
        </div>
        <div v-if="error">
            <error/>
        </div>

    </div>
</template>

<script>
import Prism from 'prismjs'
import 'prismjs/components/prism-json'
import Loading from '../../../../components/Loading.vue'
import Error   from '../../../../layouts/error.vue'
import axios from 'axios'
export default {
     components:{
        'loading':Loading,
        'error':Error
    },
    data() {
        return {
            post:null,
            loaded:false,
            error:false,
            apiRoot:process.env.apiRoot

        }
    },
    async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
        let responseError = false;
        try {
            let slug = params.slug ;
            let apiRoot = env.apiRoot;
            let response = await axios.get(apiRoot+'/api/posts/slug/'+slug) ;
            let post = response.data;
            let loaded = true;
            let title = post.title
            let description = post.description
            let image = post.image
            let url = route.path
            return{post,title,description,image,loaded,responseError,params, url}
        } catch (errors) {
            responseError = true;
            let loaded = true;
            let title ='The content you are looking is no find in this web site !'
            error = true;
            let description ="An error occur when loading the page"
             return {responseError,error,title,description, loaded}
        }
    },
    head(){
        return{
        title: this.title,
        meta:[
             {name:'title', content:''+this.title},
             {name:'description', content:''+this.description},
             {name:'image', content:''+this.image},

             {name:'og:title', content:''+this.title},
             {name:'og:image', content:''+this.image},
             {name:'og:description', content:''+this.description},
             {name:'og:type', content:'website'},

         ]
        }

  },
    methods: {
        getPosts(){
            let slug =  this.$router.currentRoute.params.slug
            var $this = this
            axios.get( this.apiRoot+'/api/posts/slug/'+slug).then(data=>{
                 $this.post = data.data
                 $this.loaded = true
                 $this.error = false
            }).catch(error=>{
                $this.error = true
            })


        },
        addCodeClass(){

            let pres = document.getElementsByTagName('pre')
            for(let i=0 ; i<pres.length;i++){
                let pre = pres[i] ;
                if(pre.children.length==0){
                     pre.innerHTML = '<code>'+pre.innerHTML+'</code>'

                }else{
                    if(!pre.children[0].tagName.match("CODE")){
                      pre.innerHTML = '<code>'+pre.innerHTML+'</code>'
                    }
                }

            }
            var codes = document.getElementsByTagName('code')
            for(var i=0; i<codes.length;i++){
                 let code = codes[i] ;
                 code.className="language-c language-js language-cpp language-java language-asm6502";

            }
            Prism.highlightAll()
        },
    },
   async mounted() {
       // this.getPosts()
     let $this = this
     setTimeout(function () {
         $this.addCodeClass()
          Prism.highlightAll()
     },200)
    },
    async updated() {
        this.addCodeClass()
        Prism.highlightAll()
    },
    created(){

    }
}
</script>

<style >
    .mspinner{
      width: 150px;
      height: 150px;
  }
  img{
    max-width: 100%;
  }
</style>
