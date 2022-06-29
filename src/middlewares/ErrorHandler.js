const errorHandler = (error, request, response, next) => {
  console.error(error);
  return response.sendStatus(500);
};

module.exports = errorHandler;
