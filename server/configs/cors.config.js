const allowedOrigins = ['http://localhost:3000', 'http://localhost:5000'];

const corsOptions = {
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Access denied by CORS'));
    }
  }
};

module.exports = corsOptions;