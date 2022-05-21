const express = require('express');
const PORT = 3500;

const app = express();

app.use("/graphql",(req, res) => {
    res.send(" Welcome to GraphQL app new file");
} );

app.listen(PORT ,() => {
    console.log ("Server is running on port :", PORT);
})
