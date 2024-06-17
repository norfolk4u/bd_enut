import express from 'express'
import config from './config'

/********************* ENUT 2024 *********************/
/*** CAPACITACIÓN ***/
import capacitacion_routes from './routes/ENUT2024/capacitacion.routes'


const app = express();
const cors = require('cors');
const morgan = require('morgan');

app.use(morgan('dev'))
app.use(cors())

// settings
app.set('port', config.port)

// middlawares
app.use(express.urlencoded({extended: false}))
app.use(express.json())

/********************* ENUT 2024 *********************/
/*** CAPACITACIÓN ***/
app.use(capacitacion_routes)


export default app