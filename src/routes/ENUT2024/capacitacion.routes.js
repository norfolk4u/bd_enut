import {Router} from 'express'
import {getReportesCobertura, getRptSeguimientoCursos_1} from "../../controllers/ENUT2024/capacitacion.controller";

const capacitacion_controller = require("../../controllers/ENUT2024/capacitacion.controller");

const router = Router()

/****************************************************************************************************************************************************************************************************************/
/* CAPACITACIÓN */
router.get('/ENUT2024/capacitacion/combos/:combo/:nivel/:nro_cap/:cod1/:cod2/:tipo_enc/:annio', capacitacion_controller.getCombos);
router.get('/ENUT2024/capacitacion/seguimiento_cursos/reporte_1/:visu/:tipo_rpt/:nivel/:nro_cap/:nro_aula/:exam/:cod_sede/:cod_cargo', capacitacion_controller.getRptSeguimientoCursos_1);
router.get('/ENUT2024/capacitacion/seguimiento_cursos/reporte_2/:visu/:tipo_rpt/:nivel/:nro_cap/:nro_aula/:exam/:cod_sede/:cod_cargo', capacitacion_controller.getRptSeguimientoCursos_2);
router.get('/ENUT2024/capacitacion/reportes_cobertura/reporte/:visu/:tipo_rpt/:nivel/:nro_cap/:cod_cargo/:cod_sede/:modalidad/:nro_aula/:annio', capacitacion_controller.getRptReportesCobertura);
router.get('/ENUT2024/capacitacion/estadisticas/reporte/:visu/:tipo_rpt/:nivel/:nro_cap/:id_cc/:cod_sede/:modalidad/:annio', capacitacion_controller.getRptEstadisticas);


export default router