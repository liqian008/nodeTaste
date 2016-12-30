var router = require('koa-router')();
var authorizeConfig = require('../authorize/authorizeConfig');
var dubboUserClient = require('../lib/dubboUserClient');


router.get('/', authorizeConfig.force, function (ctx, next) {

	var userPoint = dubboUserClient.queryUserPoints(383188);

	ctx.body = { foo: 'bar' };//'this a users response!';
});

module.exports = router;
