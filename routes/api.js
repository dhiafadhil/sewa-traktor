module.exports = function(app) {

    let auth = require('../controller/auth')

    app.post('/api/v0.0.1/auth/register',auth.registerUsers)
};
