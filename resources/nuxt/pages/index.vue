<template>
  <v-row column justify="center" align="center">
    <v-col cols="12">
      <v-card>
        <v-card-title>
          Laranuxt
        </v-card-title>
        <v-card-text>
          Laranuxt is powered by open source. Please consider contributing to
          the project to help us maintaining the solution.
        </v-card-text>
        <v-card-title>
          Contributers:
        </v-card-title>
        <v-card-text>
          <a
            v-for="(contributer, index) in contributers"
            :key="index"
            :href="contributer.link"
            target="_blank"
            rel="noopener"
          >
            <v-img
              width="80"
              height="80"
              class="d-inline-block rounded-circle mr-1"
              :src="contributer.img"
            />
          </a>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          Welcome to the Vuetify + Nuxt.js template
        </v-card-title>
        <v-card-text>
          <p>
            Vuetify is a progressive Material Design component framework for
            Vue.js. It was designed to empower developers to create amazing
            applications.
          </p>
          <p>
            For more information on Vuetify, check out the
            <a
              href="https://vuetifyjs.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              documentation </a
            >.
          </p>
          <p>
            If you have questions, please join the official
            <a
              href="https://chat.vuetifyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
              title="chat"
            >
              discord </a
            >.
          </p>
          <p>
            Find a bug? Report it on the github
            <a
              href="https://github.com/vuetifyjs/vuetify/issues"
              target="_blank"
              rel="noopener noreferrer"
              title="contribute"
            >
              issue board </a
            >.
          </p>
          <p>
            Thank you for developing with Vuetify and I look forward to bringing
            more exciting features in the future.
          </p>
          <div class="text-xs-right">
            <em><small>&mdash; John Leider</small></em>
          </div>
          <hr class="my-3" />
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt Documentation
          </a>
          <br />
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            rel="noopener noreferrer"
          >
            Nuxt GitHub
          </a>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-btn color="primary" nuxt to="/inspire"> Continue </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      contributers: [
        {
          img:
            'https://media-exp1.licdn.com/dms/image/C4E03AQFdWa89vQYAUQ/profile-displayphoto-shrink_800_800/0?e=1605139200&v=beta&t=OALhz2ddqPu9cNB4-l7Fem396XZ5jV_HoJ8rNrxbNmw',
          link: 'https://github.com/mentAl-maZe'
        },
        {
          img:
            'https://www.gravatar.com/avatar/fab898b83ca79bd9ca003b8630771204?s=80',
          link: 'https://github.com/GautierDele'
        }
      ]
    }
  }
}
</script>
