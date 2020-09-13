module.exports = {
  rootDir: 'resources/nuxt',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
    '^~/(.*)$': '<rootDir>/$1',
    '^vue$': 'vue/dist/vue.common.js'
  },
  moduleFileExtensions: ['ts', 'js', 'vue', 'json'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
    '.*\\.vue$': 'vue-jest'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/(plugins|modules|assets|store|middleware)/**/*.[tj]s',
    '<rootDir>/(layouts|components|pages)/**/*.vue'
  ]
}
