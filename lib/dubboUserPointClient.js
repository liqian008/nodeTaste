
var config = require('../conf/config');

var ZD = require('zoodubbo');


var zd = new ZD({
    // config the addresses of zookeeper
    //conn: 'localhost:2181'
    //conn: '42.96.193.47:2181'
    conn: config.zookeeper.host
});

zd.connect();

var invoker = zd.getInvoker(config.dubbo.user_service, {
    //version: '1.4'
    version: config.dubbo.user_version
})

function queryUserPoints(userId){
	//var arg1={$class:'java.lang.String',$:text};//String
    var args={$class:'int',$:userId};//int

    /*
	invoker.excute("queryUserPoints", [args], function (err, data) {
    	if (err) {
        	console.log("================="+err);
        	return "error";
    	}
    	console.log("====user points: ==="+data)
    return data;
	});
    */
    
    return invoker.excute("queryUserPoints", [args]);
    

}

exports.queryUserPoints=queryUserPoints;

