const server = require('./api/server');

const port = 9002;

server.listen(port, () => {
    console.log("Server is working at "+port)
});
// START YOUR SERVER HERE


