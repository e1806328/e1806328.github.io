var ctx = document.getElementById("myLineChart");
var myLineChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['0.0km', '1.0km', '2.0km', '4.0km', '5.0km', '6.0km', '7.0km', '8.0km', '9.0km', '10km', '11km'],
    datasets: [
      {
        label: '甲斐駒ヶ岳(南アルプス）',
        data: [1990, 2100, 2200, 2700, 2967, 2700, 2600, 2300, 2010, 2000, 2000, 2000],
        borderColor: "rgba(255,0,0,1)",
        backgroundColor: "rgba(0,0,0,0)"
      },
      {
        label: '高尾尾さん(八王子）',
        data: [200, 250, 350, 600, 550, 500, 400, 300, 100, 100, 100, 100],
        borderColor: "rgba(50 ,0,0,1)",
        backgroundColor: "rgba(0,0,0,0)"
      },
      {
        label: '劔岳(北アルプス)',
        data: [2100, 2500, 2750, 2500, 2550, 2800, 2999, 2760, 2500, 2600, 2700, 2300],
        borderColor: "rgba(0,0,255,1)",
        backgroundColor: "rgba(0,0,0,0)"
      }
    ],
  },
  options: {
    title: {
      display: true,
      text: '標高と距離(比較)'
    },
    scales: {
      yAxes: [{
        ticks: {
          suggestedMax: 3700,
          suggestedMin: 100,
          stepSize: 100,
          callback: function (value, index, values) {
            return value + 'm'
          }
        }
      }]
    },
  }
});



var mySwiper = new Swiper('.swiper-container', {
  direction: 'horizontal',
  mousewheel: {
    forceToAxis: true,
    invert: false
  },
  keyboard: true
});

var mySwiper = new Swiper('.swiper-container', {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
});

var mySwiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});



var ctx = document.getElementById("myRadarChart2");
var myRadarChart2 = new Chart(ctx, {
  
  type: 'radar',
  //データの設定
  data: {
      //データ項目のラベル
      labels: ["総合評価", "ルート難易度", "コースタイム", "景色", "アクセス"],
      //データセット
      datasets: [
          {
             //凡例のラベル
              label: "甲斐駒ヶ岳",
              //背景色
              backgroundColor: "rgba(200,112,126,0.3)",
              //枠線の色
              borderColor: "rgba(200,112,126,1)",
              //結合点の背景色
              pointBackgroundColor: "rgba(200,112,126,1)",
              //結合点の枠線の色
              pointBorderColor: "#fff",
              //結合点の背景色（ホバーしたとき）
              pointHoverBackgroundColor: "#fff",
              //結合点の枠線の色（ホバーしたとき）
              pointHoverBorderColor: "rgba(200,112,126,1)",
              //結合点より外でマウスホバーを認識する範囲（ピクセル単位）
              hitRadius: 5,
              //グラフのデータ
              data: [7,4,8,8,7]
          },
          {
             //凡例のラベル
              label: "高尾山",
              //背景色
              backgroundColor: "rgba(130,160,40,0.3)",
              //枠線の色
              borderColor: "rgba(130,160,40,0.3)",
              //結合点の背景色
              pointBackgroundColor: "rgba(130,160,40,0.3)",
              //結合点の枠線の色
              pointBorderColor: "#fff",
              //結合点の背景色（ホバーしたとき）
              pointHoverBackgroundColor: "#fff",
              //結合点の枠線の色（ホバーしたとき）
              pointHoverBorderColor: "rgba(130,160,40,0.3)",
              //結合点より外でマウスホバーを認識する範囲（ピクセル単位）
              hitRadius: 5,
              //グラフのデータ
              data: [4,1,3,3,7]
          },
          {
             //凡例のラベル
              label: "劔岳",
              //背景色
              backgroundColor: "rgba(80,126,164,0.3)",
              //枠線の色
              borderColor: "rgba(80,126,164,1)",
              //結合点の背景色
              pointBackgroundColor: "rgba(80,126,164,1)",
              //結合点の枠線の色
              pointBorderColor: "#fff",
              //結合点の背景色（ホバーしたとき）
              pointHoverBackgroundColor: "#fff",
              //結合点の枠線の色（ホバーしたとき）
              pointHoverBorderColor: "rgba(80,126,164,1)",
              //結合点より外でマウスホバーを認識する範囲（ピクセル単位）
              hitRadius: 5,
              //グラフのデータ
              data: [9,10,9,10,8]
          }
      ]
  },
 options: {
    // レスポンシブ指定
    responsive: true,
    scale: {
      ticks: {
        // 最小値の値を0指定
        beginAtZero:true,
        min: 0,
        // 最大値を指定
        max: 10,
      }
    }
  }
});
