const express = require('express');
require('dotenv').config();
async function main(){
    const app = express();
    const PORT = process.env.PORT || 3000;
    require("./src/config/mongoose.config");
    app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
}
main();