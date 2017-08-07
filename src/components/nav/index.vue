<template>
<div>
       <h1>Hello App!</h1>
  <p>
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/foo/child1">Go to Foochild1</router-link>
    <router-link to="/foo/child2">Go to Foochild2</router-link>
    <router-link to="/foo/address">Go to address</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>
</div>
</template>
<script>
export default {
  data() {
    return {
        
    }
  }
}
</script>

