const messageController = require("../controllers/message.js");

module.exports = (app) => {
  app.post("/api/send", messageController.sendMessage);
};
