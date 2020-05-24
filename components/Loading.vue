<template>
        <div v-if="show" class="row justify-content-center align-items-center p-4">
            <div class="d-flex  justify-content-center align-items-center">
                       <div  class="spinner-border text-success mspinner text-center" role="status">
                          <span class="sr-only">Loading...</span>
                      </div>
            </div>
            <div class="col-sm-12 text-center">
                    <p>Loading...</p>
            </div>
        </div>
</template>
<script>
export default {
    props:{
        show:false
    }
}
</script>