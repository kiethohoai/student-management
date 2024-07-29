const logFeature = (req, res, next) => {
  console.log('I AM MIDDLE-WARE');
  next();
};

module.exports = { logFeature };
