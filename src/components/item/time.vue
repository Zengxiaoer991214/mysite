<template>
  <div>
    <h2>Lin的个人网站开发历程</h2>
  <v-timeline dense>
    <v-timeline-item
      v-for="(year, i) in years"
      :key="i"
      :color="year.color"
      small
      
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold ${year.color}--text`"
          
        >{{year.year}}</span>
      </template>
      <div class="py-4">
        <h3 :class="`headline font-weight-light mb-4 ${year.color}--text`">{{year.old}}</h3>
        <div>
         {{year.say}}
        </div>
      </div>
    </v-timeline-item>
  </v-timeline>
  </div>
</template>
<style scoped>
h2{
  margin-left: 5%;
}
</style>
<script>
  export default {
    data: () => ({
      years: [
        {
          color: 'cyan',
          year: '2019-11',
          old:'#1',
          say:'纯css+html+js,并且网上各种找模板套用。这一阶段不知道网页开发，但是却着重于学习基础'
        },
        {
          color: 'green',
          year: '2020-2',
          
          old:'#2',
          say:'连接上了数据库，后端使用PHP。在讨厌王琢的情况下，又喜欢上了PHP。'
        },
        {
          color: 'pink',
          year: '2020-4',
          old:'#3',
          say:'bootstrap响应式模板，这期间参加计算机大赛，主力UI库。'
        },
        {
          color: 'amber',
          year: '2020-7',
          old: '#4',
          say: '开源博客halo，但是未能如意，貌似服务器ip被锁，无法申请免费ssl。'
        },
        {
          color: 'blue-grey',
          year: '2020-9',
          old: '#5',
          say: 'vue+php(spring boot/dart)自定义站点'
        },
      ],
    }),
  }
</script>