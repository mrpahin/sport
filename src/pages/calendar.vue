<template>
  <f7-page>
    <f7-navbar title="Календарь" back-link="Back" sliding></f7-navbar>
   
    

    
  </f7-page>
</template>

<script>
    export default {
        data(){
            return {
                monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],            
                
            }
        },
        created() {
            console.log(this);
        }

    }
</script>

<style>

</style>