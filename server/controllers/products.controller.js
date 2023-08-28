const db = require('../services/db.service');

async function getManyProducts(req, res, next) {
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
        ORDER BY ${orderClause}, product.id ${limitClause};
    `);

    res.json(products);
  } catch (err) {
    console.error(`Error while getting products`, err.message);
    next(err);
  }
}

async function getOneProduct(req, res, next) {
  const productId = req.params.id;
  try {
    const [product, ] = await db.query(`
        SELECT *
        FROM product
        WHERE id = ?
    `, [productId]);

    if (product === undefined) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (err) {
    console.error(`Error while getting product`, err.message);
    next(err);
  }
}

module.exports = {
  getManyProducts,
  getOneProduct
};