export const queries =  {
    getAllEncuesta : 'SELECT * FROM MARCO_CAPA',
    createNewEncuesta : 
    "INSERT INTO TEST_ENCUESTA (nombre,description,cantidad) VALUES (@nombres ,@description ,@cantidad)",
    getEnecuestaById: "SELECT * FROM TEST_ENCUESTA WHERE ID =@id",
    deleteEncuesta: "DELETE FROM TEST_ENCUESTA WHERE ID=@id",
    getTotalEncuesta: "SELECT COUNT(*) FROM TEST_ENCUESTA",
    updateEncuestaById: "UPDATE TEST_ENCUESTA SET nombre=@nombre, description=@description , cantidad=@cantidad WHERE ID=@id", 
    getCoberturaViviendaPersona: "execute SP_COBERTURA_TIPO_RESULTADO",
    getLogCargas: "SELECT TOP 10 * FROM TB_LOG_CARGAS ORDER BY ID DESC",
    getMesCierre: "SELECT * FROM TB_MES_CIERRE ORDER BY ID DESC",
    getLastObsTransferencia: " SELECT TOP 1 * FROM TB_OBS_TRANSFERENCIA ORDER BY ID DESC",
}