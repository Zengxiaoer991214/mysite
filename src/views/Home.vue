<template>
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
<!-- 
      <v-timeline-item
        class="mb-6"
        hide-dot
      >
        <span>TODAY</span>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        color="grey"
        icon-color="grey lighten-2"
        small
      >
        <v-row justify="space-between">
          <v-col cols="7">This order was archived.</v-col>
          <v-col class="text-right" cols="5">15:26 EDT</v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        small
      >
        <v-row justify="space-between">
          <v-col cols="7">
            <v-chip
              class="white--text ml-0"
              color="purple"
              label
              small
            >
              APP
            </v-chip>
            Digital Downloads fulfilled 1 item.
          </v-col>
          <v-col class="text-right" cols="5">15:25 EDT</v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        color="grey"
        small
      >
        <v-row justify="space-between">
          <v-col cols="7">
            Order confirmation email was sent to John Leider (john@vuetifyjs.com).
          </v-col>
          <v-col class="text-right" cols="5">15:25 EDT</v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        hide-dot
      >
        <v-btn
          class="mx-0"
          color="white"
        >
          Resend Email
        </v-btn>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        color="grey"
        small
      >
        <v-row justify="space-between">
          <v-col cols="7">
            A $15.00 USD payment was processed on PayPal Express Checkout
          </v-col>
          <v-col class="text-right" cols="5">15:25 EDT</v-col>
        </v-row>
      </v-timeline-item> -->

      <!-- <v-timeline-item
        color="grey"
        small
      >
        <v-row justify="space-between">
          <v-col cols="7">
            John Leider placed this order on Online Store (checkout #1937432132572).
          </v-col>
          <v-col class="text-right" cols="5">15:25 EDT</v-col>
        </v-row>
      </v-timeline-item> -->
    </v-timeline>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      events: [],
      input: null,
      nonce: 0,
      items:[]
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
                    // console.log(response.data)
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
                            // console.log(response.data)
                             
                        })
                        .catch(function (error) {
                            console.log(error);
                        });
        
       
        this.input = null
      },
    },
  }
</script>