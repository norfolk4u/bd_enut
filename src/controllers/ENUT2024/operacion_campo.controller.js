import { getConnection } from "../../database";

/**************************** ENUT 2024 ****************************/
/** INDICADORES DE COBERTURA **/

/** COMBOS**/

/*COBERTURA INCOMPLETA */
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







