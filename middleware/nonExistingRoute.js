const AppError = require("ep-det-core/utils/AppError");

// Handle non existing routes
module.exports = (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
};
