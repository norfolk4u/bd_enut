import { getConnection } from "../../database";

/**************************** ENUT 2024 ****************************/
/** INDICADORES DE COBERTURA **/

/** COMBOS**/

/*COBERTURA DE LA ENCUESTA*/
export const getCoberturaIncompleta = async  ( req , res ) => {
    try {
        //getConnection();
        const {tiporeporte,mes,periodo,area,cod1 } = req.params;    
        const pool = await getConnection();
        const result = await pool.pool 
        .request() 
        .input('TIPO_RPT', tiporeporte)
        .input('MES', mes)
        .input('PERIODO',periodo)
        .input('AREA', area)
        .input('COD1', cod1)

      
        .execute(`[CAPT].[USP_COBERTURA_INCOMPLETAS]`);  
        res.json(result.recordsets[0]);   
        //pool.close();
    } catch (error) {
        res.status(500)
        res.send(error.message);
    } 
}

/*COBERTURA DE LA TAREAS REALIZADAS EN EL HOGAR (CAP600) */
export const getCoberturaHogar = async  ( req , res ) => {
    try {
        //getConnection();
        const {tiporeporte,mes,periodo,area,cod1 } = req.params;    
        const pool = await getConnection();
        const result = await pool.pool 
        .request() 
        .input('TIPO_RPT', tiporeporte)
        .input('MES', mes)
        .input('PERIODO',periodo)
        .input('AREA', area)
        .input('COD1', cod1)

      
        .execute(`[CAPT].[USP_COBERTURA_CAP600]`);  
        res.json(result.recordsets[0]);   
        //pool.close();
    } catch (error) {
        res.status(500)
        res.send(error.message);
    } 
}
export const getCoberturaEmpleo = async  ( req , res ) => {
    try {
        //getConnection();
        const {tiporeporte,mes,periodo,area,cod1 } = req.params;    
        const pool = await getConnection();
        const result = await pool.pool 
        .request() 
        .input('TIPO_RPT', tiporeporte)
        .input('MES', mes)
        .input('PERIODO',periodo)
        .input('AREA', area)
        .input('COD1', cod1)

      
        .execute(`[CAPT].[USP_COBERTURA_CAP700]`);  
        res.json(result.recordsets[0]);   
        //pool.close();
    } catch (error) {
        res.status(500)
        res.send(error.message);
    } 
}
export const getCombos = async  ( req , res ) => {
    try {
        //getConnection();
        const {combo} = req.params;    
        const pool = await getConnection();
        const result = await pool.pool 
        .request() 
        .input('COMBO', combo)      

      
        .execute(`[CAPT].[USP_ENC_ENUT_COMBOS]`);  
        res.json(result.recordsets[0]);   
        //pool.close();
    } catch (error) {
        res.status(500)
        res.send(error.message);
    } 
}

/**************************************************** INDICADORES DE CALIDAD *************************************************************/

export const getCapturaPorcentajeActividades = async  ( req , res ) => {
    try {
        //getConnection();
        const {tiporeporte,mes,periodo,area,cod1 } = req.params;    
        const pool = await getConnection();
        const result = await pool.pool 
        .request() 
        .input('TIPO_RPT', tiporeporte)
        .input('MES', mes)
        .input('PERIODO',periodo)
        .input('AREA', area)
        .input('COD1', cod1)

      
        .execute(`[CAPT].[USP_CAPTURA_PORCENTAJE_ACTIVIDADES]`);  
        res.json(result.recordsets[0]);   
        //pool.close();
    } catch (error) {
        res.status(500)
        res.send(error.message);
    } 
}

export const getCapturaPorcentajeResidentes = async  ( req , res ) => {
    try {
        //getConnection();
        const {tiporeporte,mes,periodo,area,cod1 } = req.params;    
        const pool = await getConnection();
        const result = await pool.pool 
        .request() 
        .input('TIPO_RPT', tiporeporte)
        .input('MES', mes)
        .input('PERIODO',periodo)
        .input('AREA', area)
        .input('COD1', cod1)

      
        .execute(`[CAPT].[USP_CAPTURA_PORCENTAJE_RESIDENTES]`);  
        res.json(result.recordsets[0]);   
        //pool.close();
    } catch (error) {
        res.status(500)
        res.send(error.message);
    } 
}



/*********************************************************GEOTRACKING *******************************************************/
export const getGeotrackingResumen = async  ( req , res ) => {
    try {
        //getConnection();
        const {odei, usuario,cargo, fecha } = req.params;    
        const pool = await getConnection();
        const result = await pool.pool 
        .request() 
        .input('ODEI', odei)
        .input('USUARIO', usuario)
        .input('CARGO', cargo)
        .input('FECHA', fecha)
  
      
        .execute(`[CAPT].[USP_ENCUESTADOR_GEOlOCALIZACION_RESUMEN]`);  
        res.json(result.recordsets[0]);   
        //pool.close();
    } catch (error) {
        res.status(500)
        res.send(error.message);
    } 
}

export const getGeotracking = async  ( req , res ) => {
    try {
        //getConnection();
        const { usuario, fecha } = req.params;    
        const pool = await getConnection();
        const result = await pool.pool 
        .request() 
        .input('USUARIO', usuario)
        .input('FECHA', fecha)
  
      
        .execute(`[CAPT].[USP_ENCUESTADOR_GEOLOCALIZACION]`);  
        res.json(result.recordsets[0]);   
        //pool.close();
    } catch (error) {
        res.status(500)
        res.send(error.message);
    } 
}
export const getGeotrackingCombos = async  ( req , res ) => {
    try {
        //getConnection();
        const { combos, cargo } = req.params;    
        const pool = await getConnection();
        const result = await pool.pool 
        .request() 
        .input('COMBO', combos)
        .input('CARGO', cargo)
  
      
        .execute(`[CAPT].[USP_GEORREFERENCIACION_COMBOS]`);  
        res.json(result.recordsets[0]);   
        //pool.close();
    } catch (error) {
        res.status(500)
        res.send(error.message);
    } 
}






