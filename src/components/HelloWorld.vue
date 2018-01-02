<template>
  <div class="container">
        <form role="form">
            <div class="form-group">
                <label for="username">用户名:</label>
                <input type="text" id="username" class="form-control" placeholder="输入用户名" v-model.trim="username">
            </div>
            <div class="form-group">
                <label for="age">年　龄:</label>
                <input type="text" id="age" class="form-control" placeholder="输入年龄" v-model.trim="age">
            </div>
            <div class="form-group">
                <input type="button" value="添加" class="btn btn-primary" @click="add()">
                <input type="button" value="重置" class="btn btn-danger">
            </div>
        </form>
        <hr>
        <table class="table table-bordered table-hover">
            <caption class="h2 text-info">用户信息表</caption>
            <tr class="text-danger">
                <th class="text-center">序号</th>
                <th class="text-center">名字</th>
                <th class="text-center">年龄</th>
                <th class="text-center">操作</th>
            </tr>
            <tr class="text-center" v-for="(item,index) in myData">
                <td>{{index}}</td>
                <td>{{item.name}}</td>
                <td>{{item.age}}</td>
                <td>
                    <button class="btn btn-primary btn-sm" data-toggle="modal" data-target="#layer" @click="nowIndex==index">删除</button>
                </td>
            </tr>
            
            <tr v-show="myData.length!=0">
                <td colspan="4" class="text-right">
                    <button class="btn btn-danger btn-sm" data-toggle="modal" data-target="#layer" v-on:click="nowIndex=-2">删除全部</button>
                </td>
            </tr>
            <tr v-show="myData.length==0">
                <td colspan="4" class="text-center text-muted">
                    <p>暂无数据....</p>
                </td>
            </tr>
        </table>

        <!--模态框 弹出框-->
        <div role="dialog" class="modal fade bs-example-modal-sm" id="layer">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                        <h4 class="modal-title">确认删除么?</h4>
                    </div>
                    <div class="modal-body text-right">
                        <button data-dismiss="modal" class="btn btn-primary btn-sm">取消</button>
                        <button data-dismiss="modal" class="btn btn-danger btn-sm" @click="deleteMsg(nowIndex)">确认</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      myData:[],
      username:'',
      age:'',
      nowIndex:-100
    }
  },
  created(){
    if(this.$storage.getStorage("myData-list")){
      var index=this.$storage.getStorage("myData-list");
      this.myData=index;
    }
  },
  watch:{
    myData:function(nowVal,oldVal){
      this.$storage.setStorage("myData-list",nowVal);
    }
  },
  methods:{
    add(){
      if(this.username.length==0 || this.age.length==0){
        alert("用户名或年龄不为空");
      }else{
        this.myData.push({
          name:this.username,
          age:this.age
        });
        this.username="";
        this.age=""
      }
    },
    deleteMsg(n){
      if(n==-2){
          this.myData=[];
      }else{
          this.myData.splice(n,1);
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
