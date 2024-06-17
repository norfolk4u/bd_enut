import {getConnection} from "../../database";

/** CAPACITACIÓN **/
export const getCombos = async (req, res) => {
    try {
        //getConnection();
        const {combo, nivel, nro_cap, cod1, cod2, tipo_enc, annio} = req.params;
        const pool = await getConnection();
        const result = await pool.pool
            .request()
            .input('COMBO', combo)
            .input('COD_NIVEL', nivel)
            .input('NRO_CAP', nro_cap)
            .input('COD1', cod1)
            .input('COD2', cod2)
            .input('TIPO_ENC', tipo_enc)
            .input('ANNIO', annio)
            .execute(`[CAPA].[USP_CAPACITACION_COMBOS]`);
        res.json(result.recordsets[0]);
        //pool.close();
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
}

export const getRptSeguimientoCursos_1 = async (req, res) => {
    try {
        //getConnection();
        const {visu, tipo_rpt, nivel, nro_cap, nro_aula, exam, cod_sede, cod_cargo} = req.params;
        const pool = await getConnection();
        const result = await pool.pool
            .request()
            .input('VISU', visu)
            .input('TIPO_RPT', tipo_rpt)
            .input('COD_NIVEL', nivel)
            .input('NRO_CAP', nro_cap)
            .input('NRO_AULA', nro_aula)
            .input('EXAM', exam)
            .input('COD_SEDE', cod_sede)
            .input('COD_CARGO', cod_cargo)
            .execute(`[CAPA].[USP_CAPACITACION_RPT_SEGUIMIENTO_CURSOS_1]`);
        //console.log(pool);  
        res.json(result.recordsets[0]);
        //pool.close();
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
}

export const getRptSeguimientoCursos_2 = async (req, res) => {
    try {
        //getConnection();
        const {visu, tipo_rpt, nivel, nro_cap, nro_aula, exam, cod_sede, cod_cargo} = req.params;
        const pool = await getConnection();
        const result = await pool.pool
            .request()
            .input('VISU', visu)
            .input('TIPO_RPT', tipo_rpt)
            .input('COD_NIVEL', nivel)
            .input('NRO_CAP', nro_cap)
            .input('NRO_AULA', nro_aula)
            .input('EXAM', exam)
            .input('COD_SEDE', cod_sede)
            .input('COD_CARGO', cod_cargo)
            .execute(`[CAPA].[USP_CAPACITACION_RPT_SEGUIMIENTO_CURSOS_2]`);
        //console.log(pool);  
        res.json(result.recordsets[0]);
        //pool.close();
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
}

export const getRptReportesCobertura = async (req, res) => {
    try {
        const {visu, tipo_rpt, nivel, nro_cap, cod_cargo, cod_sede, modalidad, nro_aula, annio} = req.params;
        const pool = await getConnection();
        const result = await pool.pool
            .request()
            .input('VISU', visu)
            .input('TIPO_RPT', tipo_rpt)
            .input('COD_NIVEL', nivel)
            .input('NRO_CAPA', nro_cap)
            .input('COD_CARGO', cod_cargo)
            .input('COD_SEDE', cod_sede)
            .input('MODALIDAD', modalidad)
            .input('NRO_AULA', nro_aula)
            .input('ANNIO', annio)
            .execute(`[CAPA].[USP_CAPACITACION_RPT_REPORTES_COBERTURA]`);
        res.json(result.recordsets[0]);
        //pool.close();
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
}

export const getRptEstadisticas = async (req, res) => {
    try {
        const {visu, tipo_rpt, nivel, nro_cap, id_cc, cod_sede, modalidad, annio} = req.params;
        const pool = await getConnection();
        const result = await pool.pool
            .request()
            .input('VISU', visu)
            .input('TIPO_RPT', tipo_rpt)
            .input('COD_NIVEL', nivel)
            .input('NRO_CAPA', nro_cap)
            .input('ID_CC', id_cc)
            .input('COD_SEDE', cod_sede)
            .input('MODALIDAD', modalidad)
            .input('ANNIO', annio)
            .execute(`[CAPA].[USP_CAPACITACION_RPT_ESTADISTICAS]`);
        res.json(result.recordsets[0]);
        //pool.close();  
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
}