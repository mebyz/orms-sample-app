    module.exports = function(sequelize) {
      var m = sequelize.import('./InvoiceLine.model.js');
      var p = sequelize.import('./Invoice.model.js');
      m.findWith_Invoice = function(limit) {
        m.findAll({
          include: [{ model: p, as: 'p' }],
          limit: limit,
          raw: true
        })
        .then(function(rows) {
          console.log(rows);
        });
      }
      var p = sequelize.import('./Track.model.js');
      m.findWith_Track = function(limit) {
        m.findAll({
          include: [{ model: p, as: 'p' }],
          limit: limit,
          raw: true
        })
        .then(function(rows) {
          console.log(rows);
        });
      }
    m.findWithAssoc = function(limit, order, cb) {
    var pp=[];
      var p = sequelize.import('./Invoice.model.js');
      pp.push({ model: p, as: 'Invoice' });
      var p = sequelize.import('./Track.model.js');
      pp.push({ model: p, as: 'Track' });
        m.findAll({
          include: pp,
          order: order,
          limit: limit,
          raw: true
        })
        .then(function(rows) {
          cb(rows);
        });
    }
    m.findBy = function(attr, value, cb) {
        m.findAll({
          where: {
          attr: value
          },
          limit: limit,
          raw: true
        })
        .then(function(rows) {
          cb(rows);
        });
    }
    return m;
    };