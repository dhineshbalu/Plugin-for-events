<template>
  <div>
       <Child v-if="show"></Child>
       <button @click="testing">Testing</button>
       <button @click="show = !show">Emit event directly to grand parent</button>
  </div>
</template>

<script>
import Child from './Child'
export default {
  name: 'LandingPage',
  components: {
    Child
  },
  data() {
    return {
       show: false
    }
  },
  methods: {
    testing() {
        events1.emit('testingOneMore',{
            testing: 'testing Successful..'
        })
     }
  },
  mounted() {
      events.emit('emitName', {
          name: 'event1'
      })
      events.on('changeName',(o) => {
        events.emit('emitName', {
          name: o.name
        }) 
      })
      events1.emit('testingOneMore',{
          testing: 'testing..'
      })
  },
  beforeDestroy() {
     events.off('changeName')
  }
}
</script>

<style>

</style>
