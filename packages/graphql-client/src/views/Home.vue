<!--
 * @Desc: 
 * @FilePath: /learn-graphql/packages/graphql-client/src/views/Home.vue
 * @Author: liujianwei1
 * @Date: 2021-06-18 11:19:52
 * @LastEditors: liujianwei1
 * @Reference Desc: 
-->
<template>
  <div class="home">
    <el-form
      ref="form"
      :model="form"
      label-width="80px"
    >
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="handleSubmit"
        >立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
    <el-table
      :data="dataList"
      style="width: 100%"
      border
    >
      <el-table-column
        prop="id"
        label="日期"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱"
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import gql from 'graphql-tag'

const query = gql`
query{
  getUserList{
     id
    name
    age
    email
  }
}
`

const mutataionString = gql`
mutation($params:CreateUserInput){
  createUser(params:$params){
    id
    name
    email
    age
  }
}
`

export default {
  name: 'Home',
  data () {
    return {
      dataList: [],
      form: {
        name: "",
        email: "",
        age: ""
      }
    }
  },
  mounted () {
    this.getUserList()
  },
  methods: {
    /**
     * 获取用户列表
     */
    getUserList () {
      this.$apollo
        .query({
          query
        })
        .then((res) => {
          this.dataList = res.data.getUserList
        })
    },
    /**
     * 新增用户
     */
    handleSubmit () {
      const age = this.form.age ? parseInt(this.form.age) : 0
      this.$apollo.mutate({
        mutation: mutataionString,
        variables: {
          params: { ...this.form, age }
        }
      }).then((res) => {
        console.log(res.data.createUser)
        this.dataList.push(res.data.createUser)
      })
    }
  }
}
</script>
