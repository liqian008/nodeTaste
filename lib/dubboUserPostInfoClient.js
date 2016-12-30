
var config = require('../conf/config');

var ZD = require('zoodubbo');


var zd = new ZD({
    // config the addresses of zookeeper
    //conn: 'localhost:2181'
    //conn: '42.96.193.47:2181'
    conn: config.zookeeper.host
});

zd.connect();

var invoker = zd.getInvoker(config.dubbo.user_post_info_service, {
    //version: '1.4'
    version: config.dubbo.user_post_info_version
})

/*

*/
function loadPostInfoByUserId(userId){
    //var arg1={$class:'java.lang.String',$:text};//String
    var args={$class:'int',$:userId};//int
    return invoker.excute("loadPostInfoByUserId", [args]);
}


exports.loadPostInfoByUserId=loadPostInfoByUserId;
