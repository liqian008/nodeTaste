var router = require('koa-router')();
var authorizeConfig = require('../authorize/authorizeConfig');



router.get('/', authorizeConfig.optional, async function (ctx, next) {
  ctx.state = {
    title: 'koa2 title'
  };

  console.log("hello: ",ctx.hello);

  await ctx.render('index', {
  });
})
module.exports = router;
