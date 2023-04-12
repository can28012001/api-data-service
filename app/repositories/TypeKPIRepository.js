const TypeKPI = require("../models/TypeKPI");

class TypeKPIRepository {
  create = async function ({ name, unit, formula }) {
    try {
      const exitTypeKPI = await TypeKPI.findOne({ name }).exec();
      if (!exitTypeKPI) {
        let newTypeKPI = await TypeKPI.create({
          name,
          unit,
          formula,
        });
        return newTypeKPI;
      } else {
        throw new Error("typeKPI already created");
      }
    } catch (e) {
      throw new Error(e.message);
    }
  };
}

module.exports = new TypeKPIRepository();
