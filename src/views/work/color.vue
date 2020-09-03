<template>
    <div>
        <div class="text-center ma-2">
            <v-snackbar
            v-model="snackbar"
            color="success"
            right
            top
            >
            复制成功！

            <template v-slot:action="{ attrs }">
                <v-btn
                color="pink"
                text
                v-bind="attrs"
                left
                @click="snackbar = false"
                >
          
        </v-btn>
      </template>
    </v-snackbar>
  </div>


        <v-flex>
            <v-row>
            <v-col v-for="item in color"
                :key="item[0]"
                cols="12"
                sm="3">
            <v-card
                class="mx-auto"
                width="400"
                height="200"
                :color="item[2]"
                vertical
            >
            
            <v-card-title class="text">{{item[3]}}</v-card-title>

                         <v-card-actions class="btn">
                            <v-btn
                                color="orange"
                                text
                                :data-clipboard-text="item[2]"
                                class="btn1"
                                @click="copy('btn1')"
                            >
                            {{item[2]}}
                            
                            </v-btn>

                            <v-btn
                                color="orange"
                                text
                                :data-clipboard-text="item[1]"
                                class="btn2"
                                @click="copy('btn2')"
                            >
                                {{item[1]}}
                            </v-btn>
                            
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-flex>
    </div>
</template>
<style scoped>
.text{
    position: flex;
    justify-content: center;
    align-content: center;
    font-size: 40px;
}
.btn{
    position: absolute;
    bottom: 0;
}
</style>


<script>
import Clipboard from 'clipboard'
export default {
    data:()=>({
        color:[],
        snackbar: false,
    }),
    mounted() {
            this.loadData();
            this.$store.dispatch("userLogin", true);
            //Vuex在用户刷新的时候userLogin会回到默认值false，所以我们需要用到HTML5储存
            //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
            localStorage.setItem("Flag", "isLogin");
        },
        methods:{
        loadData(){
                this.$axios.post('/work/color.php', {
                        })
                            .then((response)=> {
                                console.log(response.data);
                                this.color = response.data;
                            })
                            .catch((error)=> {
                                console.log(error);
                            });
        },
        copy(e) {
            var clipboard = new Clipboard('.'+e)
            clipboard.on('success', e => {
            this.snackbar = true
            // 释放内存
            clipboard.destroy()
            })
            clipboard.on('error', e => {
            // 不支持复制
            console.log('该浏览器不支持自动复制')
            // 释放内存
            clipboard.destroy()
            })
            }
   

    }
}
</script>