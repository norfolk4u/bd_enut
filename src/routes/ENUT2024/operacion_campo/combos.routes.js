 import {Router} from 'express'

 const operacion_campo_combos_controller = require("../../../controllers/ENUT2024/operacion_campo/combos.controller");

 const router = Router()


 //EJEMPLO: http://localhost:3528/ED2024/operacion_campo/combos/6/1/1/0/1/00/00/00

 router.get('/ENUT2024/operacion_campo/combos/:cod_oper/:visu/:area/:periodo/:nivel/:cod1/:cod2/:cod3', operacion_campo_combos_controller.getCombos);


export default router