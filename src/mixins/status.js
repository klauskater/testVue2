import statuses from "@/utils/statuses"

export default {
  data(){
    return {
      status: statuses.NOT_LOADED,
      errorMessage: ""
    }
  },
  computed: {
    loading(){
      return this.status === statuses.LOADING
    },
    ready(){
      return this.status === statuses.READY
    },
    touched(){
      return this.status === statuses.TOUCHED
    },
    wait(){
      return this.status === statuses.WAIT
    },
    error(){
      return this.status === statuses.ERROR
    }
  },
  methods: {
    setLoading(){
      this.status = statuses.LOADING
    },
    setReady(){
      this.status = statuses.READY
    },
    setTouched(){
      this.status = statuses.TOUCHED
    },
    setWait(){
      this.status = statuses.WAIT
    },
    setError(message){
      this.errorMessage = message
      this.status = statuses.ERROR
    }
  }
}
