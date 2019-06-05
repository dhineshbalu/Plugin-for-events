<template>
  <div>
      <button @click="change">Change event name</button>
  </div>
</template>

<script>
export default {
  name: 'Child',
  data() {
    return {
    }
  },
  methods: {
      change() {
          events.emit('changeName',{
              name: 'event2'
          })
      }
  },
  mounted() {
    events.emit('fromChild', {
      name:'eventFromChild'
    })
      events1.emit('onlyOnceInApplication', {
          demo: 'only one time trigger'
      })
  },
  beforeDestroy() {
    
  }
}
</script>

<style>

</style>
