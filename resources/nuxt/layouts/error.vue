<template>
  <v-app dark>
    <h1 v-if="error && error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Home page </NuxtLink>
  </v-app>
</template>

<script lang="ts">
import { NuxtError } from '@nuxt/types'
import { Component, Prop, Vue } from 'nuxt-property-decorator'

@Component<ErrorPage>({
  layout: 'empty',
  head() {
    const title =
      this.error?.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
})
export default class ErrorPage extends Vue {
  @Prop({ type: Object, default: null }) readonly error!: NuxtError | null

  pageNotFound = '404 Not Found'
  otherError = 'An error occurred'
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
