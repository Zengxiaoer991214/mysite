<template>

    <div class="main ">
        <!-- <div class="text"> -->
            <v-flex >
                <v-row no-gutters>
                     <v-col cols="12 red" sm="6">
            <h1>Li Lin</h1>
            <h4>
                <i class="iconfont icon-nianling" style=""></i>
                
                :21
            </h4>
            <h4>
                <i class="iconfont icon-youxiang" style=""></i>
                
                :lilin2000818@163.com
            </h4>
            <h4>
                <i class="iconfont icon-xuexiao" style="size:400px"></i>
                :沈阳某建校七十年，排名400+高校。
            </h4>
            <h3>
                个人简历
            </h3>
            <h4>
                本人计算机专业低才生，平日喜欢写写bug，写出来的全是err，warn。
                <br>
                喜欢什么游戏？
                <br>
                LOL，戒又戒不掉；和平精英呢？早就没玩了。
                <br>
                最近染上新的爱好《新三国》，看了不下七八遍了。不看抖音很久了。
                <br>
                擅长那些语言？
                <br>
                擅长四川方言、php略知一二、vue正在学习、spring看着真累、dart/node才起步。
            </h4>
        <!-- </div>

        <div class="left"> -->
            </v-col>
      <v-col cols="12 blue" sm="6">
            <lin_time>
            </lin_time>
        <!-- </div> -->
      </v-col>
        </v-row>
        </v-flex>
        
    </div>
</template>

<style scoped>

.icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}

template{
    width: 100%;
    height: 100%;
}
.main::after{
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url('https://s1.ax1x.com/2020/05/18/YhIGnO.png');
    
    opacity:0.4;
    background-size: cover;
}
.main{
    /* margin-top: 20%; */
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    background: #bbb;
}
.text{
    width: 50%;
    height: 100%;
    /* background: burlywood; */
}
.left{
    margin-top: 2%;
    width: 50%;
    height: 100%;
    /* background: #fff; */
}
h1{
    margin-top: 10%;
    margin-bottom: 3%;
    letter-spacing: 4px;
}
h1,h4,h3{
    margin-left: 1%;

}
h3{
    border-top: #777 solid 1px;
    margin-top: 3%;
    letter-spacing: 4px;
    font-weight: bold;
}
h4{
    margin-top: 1%;
}
</style>

<script>
    import  lin_time from '../components/item/time.vue'
export default {
    components:{
        lin_time,
    }
}
</script>
