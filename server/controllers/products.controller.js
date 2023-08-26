const db = require('../services/db.service');

async function getProducts(req, res, next) {
  try {
    const limit = parseInt(req.query.limit);
    const limitClause = limit && limit > 0 ? `LIMIT ${limit}` : '';
    const orderClause = req.query.ordering || "id asc";

    const products = await db.query(`select * from product order by ${orderClause} ${limitClause};`);

    res.json(products);
  } catch (err) {
    console.error(`Error while getting products`, err.message);
    next(err);
  }
}

module.exports = {
  getAllProducts: getProducts,
};