var exports = module.exports = {
  itsfiveoclockin: function() {
var moment = require('moment-timezone');
var zones = moment.tz.names();
var zonehits = []
zones.forEach(function(hits) {
  var mytime = moment().tz(hits).format();
  var shortmytime = mytime.
    replace(/T/, '').      // replace T with a space
    substring(0,18)
  var thatdatepart = shortmytime.substring(0,10)
  var removedate = shortmytime.replace(new RegExp(thatdatepart, "g"), "").
   substring(0,5)
  var offset = mytime.substring(mytime.length -6)
    if (removedate.includes("17:")) {
      zonehits.push(hits + offset)
    }
});

var whereitis = zonehits[0].toString()
var final = ""
if (whereitis.includes("\+12:")) {
  var final = "Anadyr"
} else if (whereitis.includes("\+11:")) {
  var final = "Melbourne"
} else if (whereitis.includes("\+10:")) {
  var final = "Brisbane"
}  else if (whereitis.includes("\+09:")) {
  var final = "Tokyo"
}  else if (whereitis.includes("\+08:")) {
  var final = "Beijing"
}  else if (whereitis.includes("\+07:")) {
  var final = "Jakarta"
}  else if (whereitis.includes("\+06:")) {
  var final = "Dhaka"
}  else if (whereitis.includes("\+05:")) {
  var final = "Tashkent"
}  else if (whereitis.includes("\+04:")) {
  var final = "Dubai"
}  else if (whereitis.includes("\+03:")) {
  var final = "Moscow"
}  else if (whereitis.includes("\+02:")) {
  var final = "Cairo"
}  else if (whereitis.includes("\+01:")) {
  var final = "Brussels"
}  else if (whereitis.includes("\+00:")) {
  var final = "London"
}  else if (whereitis.includes("\-01:")) {
  var final = "Praia"
}  else if (whereitis.includes("\-02:")) {
  var final = "King Edward Point"
}  else if (whereitis.includes("\-03:")) {
  var final = "Buenos Aires"
}  else if (whereitis.includes("\-04:")) {
  var final = "Caracas"
}  else if (whereitis.includes("\-05:")) {
  var final = "New York"
}  else if (whereitis.includes("\-06:")) {
  var final = "Dallas"
} else if (whereitis.includes("\-07:")) {
 var final = "Calgary"
}  else if (whereitis.includes("\-08:")) {
  var final = "Los Angeles"
}  else if (whereitis.includes("\-09:")) {
  var final = "Anchorage"
}  else if (whereitis.includes("\-10:")) {
  var final = "Honolulu"
}  else if (whereitis.includes("\-11:")) {
  var final = "Alofi"
}  else if (whereitis.includes("\-12:")) {
  var final = "Baker Island"
} else { var final = NOWHERE }

return "It's 5 o'clock in " + final;
}};
var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(exports.itsfiveoclockin());
}).listen(8080);
console.log("It's 5 o'clock in " + exports.itsfiveoclockin())

// var cityname
