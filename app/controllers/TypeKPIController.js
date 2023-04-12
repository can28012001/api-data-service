const TypeKPIRepository = require("../repositories/TypeKPIRepository");
const HttpRequestCode = require("../../utils/HttpRequestCode");

class TypeKPIController {
  create = async function (req, res) {
    const { name, unit, formula } = req.body;
    try {
      const newTypeKPI = await TypeKPIRepository.create({
        name,
        unit,
        formula,
      });
      res.status(HttpRequestCode.OK).json({
        newTypeKPI,
        message: "create KPI type successfully",
      });
    } catch (err) {
      res.status(HttpRequestCode.INTERVAL_SERVER_ERROR).json({
        message: err.message.toString(),
      });
    }
  };
}

module.exports = new TypeKPIController();
