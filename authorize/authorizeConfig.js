var cookie = require('koa-cookie');

var dubboUserPostInfoClient = require('../lib/dubboUserPostInfoClient');

/* 强制登录 */
exports.force =  async function (ctx, next) {
	console.log("==force==");

	//取邮寄地址
	var userPostInfo = await dubboUserPostInfoClient.loadPostInfoByUserId(383188);
	ctx.userPostInfo = userPostInfo;

	//const cookies = ctx.cookie;
	//console.log(ctx.request.header.cookie);

	//console.log("==cookies==", cookies);
    return next();
}


/* 可选登录 */
exports.optional =  async function (ctx, next) {
	console.log("==optional==");



	//console.log(ctx.request.header.cookie);
	//var xxx = ctx.cookies.get("Hm_lvt_16b07986b78b5b1da86086c24a92c75b");
	//console.log(xxx); 

	ctx.hello="world";
	
	//const cookies = ctx.cookie;
	//console.log("==cookies==", cookies);
    return next();
}

