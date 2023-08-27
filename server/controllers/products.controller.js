const db = require('../services/db.service');

async function getProducts(req, res, next) {
  try {
    const limit = parseInt(req.query.limit);
    const limitClause = limit && limit > 0 ? `LIMIT ${limit}` : '';
    const orderClause = req.query.ordering || "product.id ASC";

    const products = await db.query(`
        SELECT 
            product.id,
            product.name,
            product.img_url,
            product.price,
            product.discount,
            product.rate,
            product.short_description,
            product.long_description,
            product.additional_info,
            category.name as category
        FROM product, category
        WHERE product.category_id=category.id
        ORDER BY ${orderClause}, product.id ASC ${limitClause};
    `);

    res.json(products);
  } catch (err) {
    console.error(`Error while getting products`, err.message);
    next(err);
  }
}

module.exports = {
  getAllProducts: getProducts,
};