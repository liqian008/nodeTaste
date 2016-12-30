var router = require('koa-router')();
var authorizeConfig = require('../authorize/authorizeConfig');

var dubboUserPointClient = require('../lib/dubboUserPointClient');
var dubboUserPostInfoClient = require('../lib/dubboUserPostInfoClient');


router.get('/', authorizeConfig.force, async function (ctx, next) {

	//取个人资料
	var userPoints = await dubboUserPointClient.queryUserPoints(383188);

	//取邮寄地址
	var userPostInfo = ctx.userPostInfo;// await dubboUserPostInfoClient.loadPostInfoByUserId(383188);

	// ctx.body = { foo: 'bar' };//'this a users response!';
	console.log("aaaaaa", userPoints);
	console.log("aaaaaa", userPostInfo);

	ctx.state = {
	    title: '1758个人中心',
	    userPoints: userPoints,
	    userPostInfo: userPostInfo,
	  };
	await ctx.render('user/home', {
	});
});

module.exports = router;
