export default {
  methods: {
    gettheApi(api){
        return this.$http.get(api)
            .then(response=>response)
    },
    posttheApi(api,data){
      return this.$http.post(api,data)
          .then(response=>response)
    },
    puttheApi(api,data){
      return this.$http.put(api,data)
          .then(response=>response)
    },
    deletetheApi(api){
      return this.$http.delete(api)
          .then(response=>response)
    }
  }
}