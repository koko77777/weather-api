var app = new Vue({
  el: '#app',
  data: {
    //   データを初期化
    city: null,
    temp: null,
    condition: null,
    humidity: null
  },
  mounted: function(){
    // JSON形式でデータを取得
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=Tokyo,JP&appid=bec9e938962f8cd6841f1d5a1e9e2784')
    .then(function(response){
      this.city = response.data.name // 都市
      this.condition = response.data.weather[0].main // 気候
      this.temp = response.data.main.temp // 気温
      this.humidity = response.data.main.humidity // 湿度
    }.bind(this))
  },
  filters: {
    //  小数点切り上げかつ、ケルビン から 摂氏へ変換する. ℃ = K - 273.15
    roundUp(value){
      return Math.ceil(value -= 273.15)
    }
  }
})