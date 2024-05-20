import express from 'express'
import config from './config'

/********************* ENUT 2024 *********************/

import precenso2024_operacion_campo_combos_routes from './routes/ENUT2024/operacion_campo/combos.routes'


const app = express();
const cors = require('cors');
const morgan = require('morgan');

app.use(morgan('dev'))

app.use(cors())

// settings
app.set('port', config.port)

// middlawares
app.use(express.urlencoded({extended:false}))
app.use(express.json())

/********************* ED 2024 *********************/

app.use(precenso2024_operacion_campo_combos_routes)


export default app