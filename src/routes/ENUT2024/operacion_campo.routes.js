import {Router} from 'express'

const operacion_controller = require("../../controllers/ENUT2024/operacion_campo.controller");

const router = Router()

/****************************************************************************************************************************************************************************************************************/
/* INDICADORES DE COBERTURA */
/* COMBOS */
router.get('/ENUT2024/operacion_campo/indicadores_cobertura/combos/:combo', operacion_controller.getCombos );
router.get('/ENUT2024/operacion_campo/indicadores_cobertura/cobertura_incompleta/:tiporeporte/:mes/:periodo/:area/:cod1', operacion_controller.getCoberturaIncompleta );


export default router
