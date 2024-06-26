import { getConnection } from "../../database";

/**************************** ENUT 2024 ****************************/
/** RECLUTAMIENTO **/

/** COMBOS**/
export const getCombos = async  ( req , res ) => {
    try {
        //getConnection_Reclutamiento();
        const {  id_proyecto,tipo_rpt,nivel,id_cc } = req.params;    
        const pool = await getConnection();
        const result = await pool.pool2 
        .request() 
        .input('ID_PROYECTO',id_proyecto) 
        .input('TIPO_RPT',tipo_rpt)  
        .input('NIVEL',nivel) 
        .input('ID_CC',id_cc)    
        .execute(`[MNTR].[USP_V2_CONSEC_RRHH_LISTAR_CARGOS]`);   
        res.json(result.recordsets[0]);   
        pool.pool2.close();
    } catch (error) {
        res.status(500)
        res.send(error.message);
    } 
}

export const getCombosSegmentacion = async  ( req , res ) => {
    try {
        //getConnection_Reclutamiento();
        const {  visu,tipo_rpt,nivel,id_proyecto,id_cc,cod } = req.params;    
        const pool = await getConnection();
        const result = await pool.pool2 
        .request() 
        .input('VISUALIZACION',visu) 
        .input('TIPO_RPT',tipo_rpt)
        .input('ID_PROYECTO',id_proyecto) 
        .input('NIVEL',nivel)   
        .input('ID_CC',id_cc) 
        .input('COD',cod)     
        .execute(`[MNTR].[USP_V2_CONSEC_RRHH_LISTAR_SEGMENTACION]`);   
        res.json(result.recordsets[0]);   
        pool.pool2.close();
    } catch (error) {
        res.status(500)
        res.send(error.message);
    } 
}

/** INDICADORES DE COBERTURA **/
export const getIndicadorCoberturaProcesoReclutamiento = async  ( req , res ) => {
    try {
        //getConnection_Reclutamiento();
        const { visu,tipo_rpt,id_proyecto,nivel,id_cc,cod,sub_id_cc } = req.params;    
        const pool = await getConnection();
        const result = await pool.pool2 
        .request() 
        .input('VISUALIZACION',visu) 
        .input('TIPO_RPT',tipo_rpt)   
        .input('ID_PROYECTO',id_proyecto) 
        .input('NIVEL',nivel)  
        .input('ID_CC',id_cc) 
        .input('COD',cod) 
        .input('SUB_ID_CC',sub_id_cc) 
        .execute(`[MNTR].[USP_V2_CONSEC_RRHH_RESUMEN]`);   
        res.json(result.recordsets[0]);   
        pool.pool2.close();
    } catch (error) {
        res.status(500)
        res.send(error.message);
    } 
}

export const getIndicadorCoberturaProcesoSeleccion = async  ( req , res ) => {
    try {
        //getConnection_Reclutamiento();
        const { visu,tipo_rpt,id_proyecto,nivel,id_cc,cod } = req.params;    
        const pool = await getConnection();
        const result = await pool.pool2 
        .request() 
        .input('VISUALIZACION',visu) 
        .input('TIPO_RPT',tipo_rpt)   
        .input('ID_PROYECTO',id_proyecto) 
        .input('NIVEL',nivel) 
        .input('ID_CC',id_cc) 
        .input('COD',cod) 
        .execute(`[MNTR].[USP_V2_CONSEC_RRHH_AVANCE]`);   
        res.json(result.recordsets[0]);   
        pool.pool2.close();
    } catch (error) {
        res.status(500)
        res.send(error.message);
    } 
}

export const getIndicadorCoberturaCoberturaDiaria = async  ( req , res ) => {
    try {
        //getConnection_Reclutamiento();
        const { visu,tipo_rpt,id_proyecto,nivel,id_cc,cod } = req.params;    
        const pool = await getConnection();
        const result = await pool.pool2 
        .request() 
        .input('VISUALIZACION',visu) 
        .input('TIPO_RPT',tipo_rpt)   
        .input('ID_PROYECTO',id_proyecto) 
        .input('NIVEL',nivel)  
        .input('ID_CC',id_cc) 
        .input('COD',cod) 
        .execute(`[MNTR].[USP_V2_CONSEC_RRHH_COBERTURA_DIARIA]`);   
        res.json(result.recordsets[0]);   
        pool.pool2.close();
    } catch (error) {
        res.status(500)
        res.send(error.message);
    } 
}

/** ESTADISTICA **/
export const getIndicadoresEstadisticasPerfilPostulante = async  ( req , res ) => {
    try {
        //getConnection_Reclutamiento();
        const { visu,tipo_rpt,id_proyecto,nivel,id_cc,cod,condicion,sub_id_cc } = req.params;    
        const pool = await getConnection();
        const result = await pool.pool2 
        .request() 
        .input('VISUALIZACION',visu) 
        .input('TIPO_RPT',tipo_rpt)   
        .input('ID_PROYECTO',id_proyecto) 
        .input('NIVEL',nivel)  
        .input('ID_CC',id_cc) 
        .input('COD',cod) 
        .input('CONDICION',condicion) 
        .input('SUB_ID_CC',sub_id_cc) 
        .execute(`[MNTR].[USP_V2_CONSEC_RRHH_LISTAR_PERFIL]`);   
        res.json(result.recordsets[0]);   
        pool.pool2.close();
    } catch (error) {
        res.status(500)
        res.send(error.message);
    } 
}

export const getIndicadoresEstadisticasPadronPostulante = async  ( req , res ) => {
    try {
        const { visu,id_proyecto,nivel,id_cc,cod,condicion,cadena,sub_id_cc } = req.params;  
        const {draw,start,length} = req.query ;  
        const pool = await getConnection();
        var result2=[];
        var output;
        const result = await pool.pool2
        .request() 
        .input('VISUALIZACION',visu)  
        .input('ID_PROYECTO',id_proyecto) 
        .input('NIVEL',nivel)  
        .input('ID_CC',id_cc) 
        .input('COD',cod) 
        .input('CONDICION',condicion) 
        .input('CADENA',cadena) 
        .input('SUB_ID_CC',sub_id_cc) 
        .execute(`[MNTR].[USP_V2_CONSEC_RRHH_PADRON_POSTULANTES]`);
        pool.pool2.close();
        if(draw){
            var registros= parseInt(start)+parseInt(length);
            var total_filtered = result.recordsets[0].length;
            for (var i = start; i < registros; i++) 
            {
                if(i<total_filtered) {
                    result2.push(result.recordsets[0][i]);
                }
            }
            output = {  
                "draw"                    :   draw, 
                "recordsTotal"            :   total_filtered,  
                "recordsFiltered"         :   total_filtered,                                                                       
                "data"                     :  result2
            }; 
            res.json(output); 
        }else{
            res.json(result.recordsets[0]);
        }
    } catch (error) {
        res.status(500)
        res.send(error.message);
    } 
}

export const getIndicadoresEstadisticasCondicion = async  ( req , res ) => {
    try {
        const { visu,nivel,etapa } = req.params;    
        const pool = await getConnection();
        const result = await pool.pool 
        .request() 
        .input('VISU',visu) 
        .input('NIVEL',nivel)   
        .input('ETAPA',etapa) 
        .execute(`[RRHH].[USP_CARGAR_COMBOS_RRHH]`);   
        res.json(result.recordsets[0]);   
        pool.pool.close();
    } catch (error) {
        res.status(500)
        res.send(error.message);
    } 
}





