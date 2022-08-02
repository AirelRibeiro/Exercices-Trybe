// Proposta de validação encontrada no https://stackoverflow.com/questions/6177975/how-to-validate-date-with-format-mm-dd-yyyy-in-javascript

function isValidDate(date) {
    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(date)) return false;

    const parts = date.split("/");
    const day = Number(parts[0]);
    const month = Number(parts[1]);
    const year = Number(parts[2]);
    const monthForDay = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    if(year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
      monthForDay[1] = 29;
    };
    if(year < 1000 || year > 3000 || month === 0 || month > 12) return false;
    return day > 0 && day <= monthForDay[month - 1];
};


function validateProductName(req, res, next) {
  const { productName } = req.body;
  const error = { status: 404 }
  if (!productName) {
    error.message = 'O campo productName é obrigatório';
    return next(error);
  }
  if (productName.length <= 4) {
    error.message = 'O campo productName deve ter pelo menos 4 caracteres';
    return next(error);
  }
  next();
}

function validateInfos(req, _res, next) {
  const { infos } = req.body;
  const error = { status: 404}
  if (!infos) {
    error.message = 'O campo infos é obrigatório';
    return next(error);
  }

  const { saleDate, warrantyPeriod } = infos;

  if(!saleDate) {
    error.message = 'O campo saleDate é obrigatório';
    return next(error);
  }
  if(!isValidDate(saleDate)) {
    error.message = 'O campo saleDate não é uma data válida';
    return next(error);
  }
  if(!warrantyPeriod) {
    error.status = 400;
    error.message = 'O campo warrantyPeriod é obrigatório';
    return next(error);
  }
  if(warrantyPeriod < 1 || warrantyPeriod > 3) {
    error.status = 400;
    error.message = 'O campo warrantyPeriod precisa estar entre 1 e 3';
    return next(error);
  }
  next();
}

function validatePersonalInfors(req, res, next) {
  const { email, password, firstName, phone } = req.body;
  const error = {
    status: 401,
    message: 'Missing Fields'
  }
  if(!email || !password || !firstName || !phone) {
    return next(error);
  }
  next();
}

module.exports = {
  validateProductName,
  validateInfos,
  validatePersonalInfors
};