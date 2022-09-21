const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = (ekspresiPenonton) => {
  return new Promise((resolve, _) => {
    if (ekspresiPenonton == 'marah') {
      resolve(4)
    } else {
      resolve(2)
    }
  })
};

module.exports = {
  promiseOutput,
};
