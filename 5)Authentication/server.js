import app from './src/app.js'
import connectDB from './src/config/database.js'
import { ApiError } from './src/utils/ApiError.js';
connectDB();
app.listen(3000,()=>{
    console.log("App listening on port 3000")
})
app.all(/(.*)/, (req, res, next) => {
    next(new ApiError(404,'Page Not Found'))
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = "Something went wrong";
})
