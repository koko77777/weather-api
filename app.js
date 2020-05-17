var app = new Vue({
  el: '#app',
  data: {
    //   データを初期化
    city: '',
    temp: '',
    condition: 'default',
    humidity: '',
    selected: '',
    ApiUrl: ''
  },
  methods: {
    // セレクトのvalueでurlを作成
    changed: (message) => {
      ApiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + message + ',JP&appid=bec9e938962f8cd6841f1d5a1e9e2784';
    }
  },
  updated: function(){
    // JSON形式でデータを取得
    axios.get(ApiUrl)
    .then(function(response){
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