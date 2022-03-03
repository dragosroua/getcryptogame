<template>
  <div class="table-container">
    <TableMain />
  </div>
</template>

<script>
import TableMain from '../components/TableMain'

export default {
  name: 'Table',
  components: {
    TableMain,
  },
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
@import '../scss/variables';
</style>
