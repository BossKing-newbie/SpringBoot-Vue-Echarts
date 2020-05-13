<template>
<div>
  <gender-age></gender-age>
</div>
</template>

<script>
import FindGenderAge from '../components/echarts/FindGenderAge'
export default {
  name: 'GenderAge',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    genderAge: FindGenderAge
  }
}
</script>

<style scoped>

</style>
