// todo checkEmpty Field
const checkEmpty = (req, res, next) => {
  const { fullName, age, numberClass } = req.body;
  if (fullName && age && numberClass) {
    next();
  } else {
    res.status(500).send('Invalid Field FullName or Age or NumberClass');
  }
};

// todo checkNumberClass
const checkNumberClass = (req, res, next) => {
  const { numberClass } = req.body;

  if (numberClass >= 1 && numberClass <= 12) {
    next();
  } else {
    res.status(500).send('Number Class Must Be 1->12');
  }
};

module.exports = { checkEmpty, checkNumberClass };
