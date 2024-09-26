import {Router} from 'express'

const piloto_controller = require("../../controllers/ENUT2024/piloto.controller");

const router = Router()

/****************************************************************************************************************************************************************************************************************/
/* INDICADORES DE COBERTURA */
/* COMBOS */
router.get('/ENUT2024/piloto/indicadores_cobertura/combos/:combo', piloto_controller.getCombos );
router.get('/ENUT2024/piloto/indicadores_cobertura/cobertura_incompleta/:tiporeporte/:mes/:periodo/:area/:cod1', piloto_controller.getCoberturaIncompleta );
router.get('/ENUT2024/piloto/indicadores_cobertura/cobertura_hogar/:tiporeporte/:mes/:periodo/:area/:cod1', piloto_controller.getCoberturaHogar );
router.get('/ENUT2024/piloto/indicadores_cobertura/cobertura_empleo/:tiporeporte/:mes/:periodo/:area/:cod1', piloto_controller.getCoberturaEmpleo );

/* INDICADORES DE CALIDAD */
router.get('/ENUT2024/piloto/indicadores_calidad/porcentaje_actividades/:tiporeporte/:mes/:periodo/:area/:cod1', piloto_controller.getCapturaPorcentajeActividades);
router.get('/ENUT2024/piloto/indicadores_calidad/porcentaje_residentes/:tiporeporte/:mes/:periodo/:area/:cod1', piloto_controller.getCapturaPorcentajeResidentes);


/*GEOLOCALIZACIÓN DEL PERSONAL DE CAMPO*/
router.get('/ENUT2024/piloto/geotracking/resumen/:odei/:usuario/:cargo/:fecha', piloto_controller.getGeotrackingResumen);
router.get('/ENUT2024/piloto/geotracking/:usuario/:fecha', piloto_controller.getGeotracking);
router.get('/ENUT2024/piloto/geotracking/combos/:combos/:cargo', piloto_controller.getGeotrackingCombos); 


/*Geo */

export default router
