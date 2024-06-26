import {Router} from 'express'

const reclutamiento_controller = require("../../controllers/ENUT2024/reclutamiento.controller");

const router = Router()

/****************************************************************************************************************************************************************************************************************/
/* RECLUTAMIENTO */
/* COMBOS */
router.get('/ENUT2024/reclutamiento/combos/:id_proyecto/:tipo_rpt/:nivel/:id_cc', reclutamiento_controller.getCombos );
router.get('/ENUT2024/reclutamiento/combos_segmentacion/:visu/:tipo_rpt/:id_proyecto/:nivel/:id_cc/:cod', reclutamiento_controller.getCombosSegmentacion );
/* REPORTES DE INDICADORES DE COBERTURA */
router.get('/ENUT2024/reclutamiento/indicador_cobertura_proceso/:visu/:tipo_rpt/:id_proyecto/:nivel/:id_cc/:cod/:sub_id_cc', reclutamiento_controller.getIndicadorCoberturaProcesoReclutamiento );
router.get('/ENUT2024/reclutamiento/indicador_cobertura_seleccion/:visu/:tipo_rpt/:id_proyecto/:nivel/:id_cc/:cod', reclutamiento_controller.getIndicadorCoberturaProcesoSeleccion );
router.get('/ENUT2024/reclutamiento/indicador_cobertura_cobertura_diaria/:visu/:tipo_rpt/:id_proyecto/:nivel/:id_cc/:cod', reclutamiento_controller.getIndicadorCoberturaCoberturaDiaria );
/* REPORTES DE INDICADORES DE ESTADÍSTICAS */
router.get('/ENUT2024/reclutamiento/indicador_estadistica_perfil/:visu/:tipo_rpt/:id_proyecto/:nivel/:id_cc/:cod/:condicion/:sub_id_cc', reclutamiento_controller.getIndicadoresEstadisticasPerfilPostulante );
router.get('/ENUT2024/reclutamiento/indicador_padron_postulante/:visu/:id_proyecto/:nivel/:id_cc/:cod/:condicion/:cadena/:sub_id_cc', reclutamiento_controller.getIndicadoresEstadisticasPadronPostulante );
router.get('/ENUT2024/reclutamiento/estadisticas/condicion/:visu/:nivel/:etapa', reclutamiento_controller.getIndicadoresEstadisticasCondicion );

export default router
