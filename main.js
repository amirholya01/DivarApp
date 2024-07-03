const express = require('express');
require('dotenv').config();
const {SwaggerConfig }= require("./src/config/swagger.config");
async function main(){
    const app = express();
    const PORT = process.env.PORT || 3000;
    require("./src/config/mongoose.config");
    SwaggerConfig(app);
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
}
main();