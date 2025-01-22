import express,{json} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import router  from './Routes/routes.js'

dotenv.config();
const app = express();

app.use(json());
app.use(cors({
    origin: 'http://localhost:5173',
    credential:true
}))
app.use('/', router)

const port=process.env.Port

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
    });




