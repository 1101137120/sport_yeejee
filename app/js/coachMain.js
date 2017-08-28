$(function() {
  var socket = io("http://35.167.221.25:3005");

  socket.on("connect", function(data) {
    console.log("connect");
    socket.emit("join", {
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoic21hcnRjaGlwIiwiaWF0IjoxNTAyOTUyODAyLCJleHAiOjE1MDMwMzkyMDJ9.ABgnyKilBR1Ug4NF0gxlD8GutKD-d07FXBcP2NAMAtM",
      username: "smartchip",
      roomID: "123"
    });
  });

  socket.on("disconnect", function(data) {
    console.log("disconnect，斷線");
  });

  socket.on("onSTDuring", function(data) {
    console.log("onSTDuring", data);
    for (var key in data) {
      console.log("key " + key + " has value " + data[key]);
      if (key == "speed") {
        document.getElementById("Speed").innerHTML = "speed : " + data[key];
      } else if (key == "username") {
        document.getElementById("Name").innerHTML = data[key];
      } else if (key == "dist") {
        document.getElementById("Distance").innerHTML =
          "distance : " + data[key];
      } else if (key == "r") {
        document.getElementById("R").innerHTML = "R : " + data[key];
      } else if (key == "time") {
        document.getElementById("Time").innerHTML = data[key];
      } else if (key == "hr") {
        document.getElementById("HR").innerHTML = "HR : " + data[key];
        var chart = c3.generate({
          data: {
            columns: [["data", data[key]]],
            type: "gauge"
            // onclick: function (d, i) { console.log("onclick", d, i); },
            // onmouseover: function (d, i) { console.log("onmouseover", d, i); },
            // onmouseout: function (d, i) { console.log("onmouseout", d, i); }
          },
          gauge: {
            //        label: {
            //            format: function(value, ratio) {
            //                return value;
            //            },
            //            show: false // to turn off the min/max labels.
            //        },
            min: 0, // 0 is default, //can handle negative min e.g. vacuum / voltage / current flow / rate of change
            max: 200, // 100 is default
            //    units: ' %',
            width: 29 // for adjusting arc thickness
          },
          color: {
            pattern: ["#FF0000", "#F97600", "#F6C600", "#60B044"], // the three color levels for the percentage values.
            threshold: {
              //            unit: 'value', // percentage is default
              //            max: 200, // 100 is default
              values: [50, 100, 150, 200]
            }
          },
          size: {
            height: 180
          }
        });
      }
    }

    //這邊可以處理所有人的資料 看要去弄排名還是什麼...如果這筆資料要另外再傳給其他的client event也可以提出
  });
});
