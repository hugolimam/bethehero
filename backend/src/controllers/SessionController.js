const connection = require("../database/conection");

module.exports = {
  async create(request, response) {
    const { id } = request.body;

    const ong = await connection("ongs")
      .where("id", id)
      .select("name")
      .first();

    if (!ong) {
      return response
        .status(400)
        .json({ error: "Nenhuma ong enconctrada com este ID" });
    }

    return response.json(ong);
  }
};
