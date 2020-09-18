<template>
  <div>

      
     <div class="text-center pa-0 ma-0">
            <v-snackbar
            v-model="snackbar"
            color="success"
            right
            top
            class="pa-0 ma-0"
            >
            发送成功！

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


  <v-container style="max-width: 600px;">
   
    <v-timeline dense clipped>
      <v-timeline-item
        fill-dot
        class="white--text mb-12"
        color="orange"
        large
      >
        <template v-slot:icon>
          <span>chat</span>
        </template>
        <h1 style="color:red;">本网站提供的所有内容，仅供学习交流，疫情填报还请各位自己负责，如若发送任何意外，概不负责！！！！！！！！！</h1>
         <v-text-field
          v-model="input1"
          hide-details
          flat
          label="学号"
          solo
           
        />   


        <v-text-field
          v-model="input2"
          hide-details
          flat
          label="密码(身份证后6位)"
          solo
           
        >
          <template v-slot:append>
            <v-btn
              class="mx-0"
              depressed
              @click="comment"
            >
              发送
            </v-btn>
          </template>
        </v-text-field>
      </v-timeline-item>

      <v-slide-x-transition
        group
      >
        <v-timeline-item
          v-for="(event, index) in items"
          :key="index"
          class="mb-4"
          color="pink"
          small
        >
          <v-row justify="space-between">
            <v-col cols="7">
              <h3
                v-for="(itemm, index) in event[1]"
                    :key="index" 
              >{{itemm}}</h3>


            </v-col>
            <v-col class="text-right" cols="5" v-text="event[2]"></v-col>
          </v-row>
        </v-timeline-item>
      </v-slide-x-transition>

      
    </v-timeline>
  </v-container>
  <!-- <v-row justify="center">
          <v-col
            v-for="event in items"
            :key="event.time"
            cols="12"
            sm="12"
            justify="center"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">{{ event[2]}}</v-card-title>
              

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item v-for="itemm in event[1]"
                    :key="itemm" 
                    class="align-end ma-2">{{ itemm }}
                </v-list-item>

                 
              </v-list>
            </v-card>
          </v-col>
        </v-row> -->
  </div>
</template>

<script>
  export default {
    data: () => ({
      events: [],
      input1: null,
      input2: null,
      nonce: 0,
      items:[],
      snackbar:false,
    }),

    computed: {
      timeline () {
        return this.events.slice().reverse()
      },
       
    },
    mounted() {
            let that = this;
        
            this.$axios.post('/school.php', {
            })
                .then(function (response) {
                    console.log(response.data)
                    // console.log(JSON.parse(response.data))
                    that.items = response.data
                    that.items.forEach((i)=>{

                   i[1] = i[1].substring(2,i[1].length-2).split("], [")
                    })
                     console.log(that.items)   
                    
                })
                .catch(function (error) {
                    console.log(error);
                    
                });
        },
    methods: {
      comment () {
        this.$axios.post('/school.php', {
                        name:this.input1,
                        psw:this.input2
                    })
                        .then(function (response) {
                            this.snackbar = true
                            // alert("添加成功！！！！")  
                        })
                        .catch(function (error) {
                            console.log(error);
                        })
                        
                        
        
       
        this.input2 = null
        this.input1 = null
        this.snackbar = true
                           
      },
    },
  }
</script>