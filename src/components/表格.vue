<template>
  <div id="app">
    <div class="add">
      编号:
      <input type="text" v-model="brand.id" />
      品牌名称:
      <input type="text" v-model="brand.name" />
      <input type="button" value="添加" @click="add" />
    </div>
    <div class="add">
      品牌名称:
      <input type="text" placeholder="请输入搜索条件" v-model="userbrand" />
    </div>
    <div>
      <table class="tb">
        <thead>
          <tr>
            <th>编号</th>
            <th>品牌名称</th>
            <th>创立时间</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(value,index) in search" :key="index">
            <td>{{value.id}}</td>
            <td>{{value.name}}</td>
            <td>{{value.create | timeformat('-')}}</td>
            <td>
              <a href="#" @click="del(index)">删除</a>
            </td>
          </tr>
          <tr>
            <td colspan="4" v-show="search.length===0">{{msg}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { myColor, myFont } from '@/tools/userDirectives.js'
export default {
  data () {
    return {
      msg: '没有任何数据，请先添加',
      userbrand: '',
      brand: {
        id: '',
        name: ''
      },
      brandList: [
        {
          id: 1,
          name: '腾讯',
          create: new Date()
        },
        {
          id: 2,
          name: '阿里巴巴',
          create: new Date()
        },
        {
          id: 3,
          name: '网易',
          create: new Date()
        },
        {
          id: 4,
          name: '万达',
          create: new Date()
        }
      ]
    }
  },
  computed: {
    search: function () {
      let arr = []
      let data = this.brandList.filter(e => {
        return e.name.indexOf(this.userbrand) !== -1
      })
      arr.push(data)
      return arr[0]
    }
  },
  methods: {
    add () {
      this.brand.create = new Date()
      this.brandList.push({ ...this.brand })
    //   console.log(this.search)
    },
    del (index) {
      //   console.log(index)
      this.brandList.splice(index, 1)
    }
  },
  // 过滤器
  filters: {
    timeformat: function (time, spe) {
      let year = time.getFullYear()
      let month = time.getMonth() + 1
      let day = time.getDate()
      let hour = time.getHours()
      let minu = time.getMinutes()
      return year + spe + month + spe + day + ' ' + hour + ':' + minu
    }
  },
  directives: {
    myColor,
    myFont
  }
}
</script>
<style scoped>
#app {
  width: 600px;
  margin: 10px auto;
}

.tb {
  border-collapse: collapse;
  width: 100%;
}

.tb th {
  background-color: #0094ff;
  color: white;
}

.tb td,
.tb th {
  padding: 5px;
  border: 1px solid black;
  text-align: center;
}

.add {
  padding: 5px;
  border: 1px solid black;
  margin-bottom: 10px;
}
</style>
