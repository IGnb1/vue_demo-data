<template>
  <table border="1" width='500px'>
    <thead>
      <td>姓名</td>
      <td>年龄</td>
      <td>性别</td>
    </thead>
    <tbody>
      <tr v-for="(v,i) in arr" :key="i">
        <td>{{v.name}}</td>
        <td>{{v.age}}</td>
        <td>{{v.gender}}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  data () {
    return {
      arr: [
        {
          name: 'jack',
          age: 10,
          gender: '男'
        },
        {
          name: 'tom',
          age: 19,
          gender: '男'
        },
        {
          name: 'sure',
          age: 10,
          gender: '女'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped></style>
