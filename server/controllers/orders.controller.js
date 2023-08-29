const db = require('../services/db.service');

async function getAllOrders(req, res, next) {
  try {
    const result = await db.query(`
        SELECT
            orders.id,
            orders.full_name,
            orders.email,
            orders.address,
            orders.phone,
            orders.message,
            JSON_ARRAYAGG(
                    JSON_OBJECT('product_id', order_items.product_id, 'quantity', order_items.quantity)
                ) AS ordered_items
        FROM orders
                 JOIN order_items ON orders.id = order_items.order_id
        GROUP BY orders.id
        ORDER BY orders.id DESC;
    `);

    res.json(result);
  } catch (err) {
    console.error(`Error while getting orders`, err.message);
    next(err);
  }
}

async function addOrder(req, res, next) {
  const {
    fullName,
    email,
    address,
    phone,
    message,
    products
  } = req.body;

  // products validation
  if (!Array.isArray(products) || products.length === 0) {
    return res.status(400).json({message: 'Invalid products data'});
  }

  for (const product of products) {
    if (!product.product_id || !product.quantity || product.quantity <= 0) {
      return res.status(400).json({message: 'Invalid products data'});
    }
    // check if product_id is correct
    const productExistsQuery = `
        SELECT COUNT(*) as count
        FROM product
        WHERE id = ?
    `;
    const productExistsResult = await db.query(productExistsQuery, [product.product_id]);
    if (productExistsResult[0].count === 0) {
      return res.status(400).json({message: `Product with id ${product.product_id} does not exist`});
    }
  }

  try {
    const insertOrderQuery = `
        INSERT INTO orders (full_name, email, address, phone, message)
        VALUES (?, ?, ?, ?, ?)
    `;
    const orderResult = await db.query(insertOrderQuery, [fullName, email, address, phone, message]);

    const orderId = orderResult.insertId;

    const insertOrderItemsQuery = `
        INSERT INTO order_items (order_id, product_id, quantity)
        VALUES (?, ?, ?)
    `;
    for (const product of products) {
      await db.query(insertOrderItemsQuery, [orderId, product.product_id, product.quantity]);
    }

    res.status(200).json({message: 'Order processed successfully'});
  } catch (err) {
    console.error(`An error occurred while processing the order`, err.message);
    res.status(500).json({message: 'An error occurred while processing the order'});
    next(err);
  }
}


module.exports = {
  getAllOrders,
  addOrder
};