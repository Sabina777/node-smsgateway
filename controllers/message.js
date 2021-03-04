var request = require("request");
module.exports = {
  //send the message
  async sendMessage(req, res, next) {
    var options = {
      method: "POST",
      url: "http://api.sparrowsms.com/v2/sms/",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: "v2_8IOmK6gUuip5TreD4Rq1HYiyqx1.1naR",
        from: "Demo",
        to: "9861086060",
        text: "Hello, welcome to sparrow sms",
      }),
    };

    request(options, function (error, response) {
      if (error) throw new Error(error);
      res.send(response.body);
    });
  },
};
