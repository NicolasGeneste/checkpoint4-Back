const connection = require('./db-config');
const express = require('express');
const app = express();

require('./routes')(app);

app.use(express.json());

const port = process.env.PORT || 3030;

connection.connect(err => {
    if (err) {
        console.error('error connecting: ' + err.stack);
    } else {
        console.log(
            'connected to database with threadId :  ' + connection.threadId,
        );
    }
});

app.listen(port, () => {
    console.log(`Server is runing on ${port}`);
});
