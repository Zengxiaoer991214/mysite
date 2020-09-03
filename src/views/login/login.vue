<template>
    <div>
        <v-flex>
            <v-row
                class="ma-0 pa-0"
                justify="center"
                align="center"
                >
                <v-col
                    class="ma-0 pa-0"
                    cols="12"
                    sm="6"

                >
                   <v-text-field
                        v-model="name"
                        :counter="10"
                        :rules="nameRules"
                        label="Name"
                        required
                    ></v-text-field> 
                    <v-text-field
                        v-model="password"
                       
                        type="password"
                        label="Password"
                        required
                    ></v-text-field> 
                    <v-row class="ma-0 pa-0" justify="center">
                    <div class="my-2 mr-4">
                        <v-btn  color="primary" @click="login">Login</v-btn>
                    </div>
                    <div class="my-2">
                        <v-btn  color="warning" @click="loginout">Logout</v-btn>
                    </div>
                    </v-row>
                </v-col>

            </v-row>
        </v-flex>
    </div>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ],
      password: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ],
      checkbox: false,
      lazy: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      login(){
            console.log(this.name)
            console.log(this.password)
            this.$store.commit('Login',{});
      }
    },
  }
</script>