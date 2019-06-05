<template>
  <div>
      <h1>{{event}}</h1>
      <h2>{{testData}}</h2>
      <h3>{{once}}</h3>
      <component :is="active"></component>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage'
export default {
  name: 'App',
  components: {
      LandingPage
  },
  data() {
    return {
      active: 'LandingPage',
      event: '',
      testData: '',
      once: ''
    }
  },
  mounted() {
    events.on('emitName',(o)=> {
       this.event = o.name
    })
    events.on('fromChild',(o) => {
      this.event = o.name
    })
    events1.on('testingOneMore',(o)=> {
      this.testData = o.testing
    })
    events1.on('onlyOnceInApplication',(o) => {
      this.once = o.demo
    })
  },
  beforeDestroy() {
     events.off('emitName')
     events.off('fromChild')
     events1.off('testingOneMore')
  }
}
</script>

<style>

</style>
