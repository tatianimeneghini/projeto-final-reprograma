const app = require("./src/app.js");
const port = process.env.PORT || 5005;

app.listen(port, () => {
    console.log(`App está rodando na porta ${port}`)
});