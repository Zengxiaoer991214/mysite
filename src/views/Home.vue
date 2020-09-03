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
        <v-text-field
          v-model="input"
          hide-details
          flat
          label="Leave a comment..."
          solo
          @keydown.enter="comment"
        >
          <template v-slot:append>
            <v-btn
              class="mx-0"
              depressed
              @click="comment"
            >
              Post
            </v-btn>
          </template>
        </v-text-field>
      </v-timeline-item>

      <v-slide-x-transition
        group
      >
        <v-timeline-item
          v-for="event in items"
         
          :key="event.id"
          class="mb-4"
          color="pink"
          small
        >
          <v-row justify="space-between">
            <v-col cols="7" v-text="event.talk"></v-col>
            <v-col class="text-right" cols="5" v-text="event.date"></v-col>
          </v-row>
        </v-timeline-item>
      </v-slide-x-transition>
    </v-timeline>
  </v-container>
  </div>
</template>

<script>
  export default {
    data: () => ({
      events: [],
      input: null,
      nonce: 0,
      items:[],
      snackbar:false
    }),

    computed: {
      timeline () {
        return this.events.slice().reverse()
      },
    },
    mounted() {
            let that = this;
        
            this.$axios.post('/talk.php', {
            })
                .then(function (response) {
                    that.items=response.data;
                })
                .catch(function (error) {
                    console.log(error);
                    
                });
        },
    methods: {
      comment () {
        const times = (new Date()).toTimeString();
        var time =times.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
            return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
          });
        var timestamp = Date.parse(new Date());
        var neww = {
          id: timestamp,
          talk: this.input,
          date: time,
          author:'',
        };
        this.items.unshift(neww)
        this.$axios.post('/talk.php', {
                        date:time,
                        talk:this.input,
                        author:'',
                    })
                        .then(function (response) {
                           this.snackbar = true
                             
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
        
       
        this.input = null
      },
    },
  }
</script>