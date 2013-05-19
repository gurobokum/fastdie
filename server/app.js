var express = require('express');
const params = {
	HTTP_SERVER_PORT : process.argv[2] || 8088
};

const app = express();
require("./config")(app, express);
require("./routes")(app, express);
require("./websocket")(app, express);

app.listen(params.HTTP_SERVER_PORT);
