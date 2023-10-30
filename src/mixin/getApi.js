export default {
  methods: {
    gettheApi(api){
        return this.$http.get(api)
            .then(response=>response)
    }
  }
}