import {Router} from 'express'

const operacion_controller = require("../../controllers/ENUT2024/operacion_campo.controller");

const router = Router()

/****************************************************************************************************************************************************************************************************************/
/* INDICADORES DE COBERTURA */
/* COMBOS */
router.get('/ENUT2024/operacion_campo/indicadores_cobertura/combos/:combo', operacion_controller.getCombos );
router.get('/ENUT2024/operacion_campo/indicadores_cobertura/cobertura_incompleta/:tiporeporte/:mes/:periodo/:area/:cod1', operacion_controller.getCoberturaIncompleta );
router.get('/ENUT2024/operacion_campo/indicadores_cobertura/cobertura_hogar/:tiporeporte/:mes/:periodo/:area/:cod1', operacion_controller.getCoberturaHogar );
router.get('/ENUT2024/operacion_campo/indicadores_cobertura/cobertura_empleo/:tiporeporte/:mes/:periodo/:area/:cod1', operacion_controller.getCoberturaEmpleo );

/* INDICADORES DE CALIDAD */
router.get('/ENUT2024/operacion_campo/indicadores_calidad/porcentaje_actividades/:tiporeporte/:mes/:periodo/:area/:cod1', operacion_controller.getCapturaPorcentajeActividades);
router.get('/ENUT2024/operacion_campo/indicadores_calidad/porcentaje_residentes/:tiporeporte/:mes/:periodo/:area/:cod1', operacion_controller.getCapturaPorcentajeResidentes);


/*GEOLOCALIZACIÓN DEL PERSONAL DE CAMPO*/
router.get('/ENUT2024/operacion_campo/geotracking/resumen/:odei/:usuario/:cargo/:fecha', operacion_controller.getGeotrackingResumen);
router.get('/ENUT2024/operacion_campo/geotracking/:usuario/:fecha', operacion_controller.getGeotracking);
router.get('/ENUT2024/operacion_campo/geotracking/combos/:combos/:cargo', operacion_controller.getGeotrackingCombos); 

export default router
