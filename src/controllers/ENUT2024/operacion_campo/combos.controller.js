import { getConnection } from "../../../database";

export const getCombos = async  ( req , res ) => {
    try {
        const { cod_oper,visu,area,periodo,nivel,cod1,cod2,cod3 } = req.params;
        const pool = await getConnection();
        const result = await pool.precenso2024
            .request()
            .input('COD_OPER',cod_oper)
            .input('VISU',visu)
            .input('AREA',area)
            .input('PERIODO',periodo)
            .input('NIVEL',nivel)
            .input('COD1',cod1)
            .input('COD2',cod2)
            .input('COD3',cod3)
            .execute('[CAPT].[USP_OPCAMPO_COMBOS]');
        res.json(result.recordsets[0]);
        //pool.close();
    } catch (error) {
        res.status(500)
        res.send(error.message);
    }
}