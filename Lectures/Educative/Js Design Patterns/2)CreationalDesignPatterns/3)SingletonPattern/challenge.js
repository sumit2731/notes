let configuration = null;

function createConfig(initvalues) {
    this.xpoint = initvalues.xpoint || 0;
    this.ypoint = initvalues.ypoint || 0;
    this.shape = initvalues.shape || null;
}

let  ConfigureVals = {
    getConfiguration(initValues) {
        if(!configuration)  configuration = new createConfig(initValues);
        return configuration;
    }
};

var configureObj1 = ConfigureVals.getConfiguration({ "xpoint": 8, "ypoint" : 9, "shape" : "rectangle" });
var configureObj2 = ConfigureVals.getConfiguration({ "xpoint": 80, "ypoint" : 90, "shape" : "Circle" });
console.log(configureObj1);

/* 
Implementtaion uisng ES5
*/

ConfigureVals = (function (){
    var configure;
    function initializeVals(initvalues){
        this.xpoint = initvalues.xpoint || 0;
        this.ypoint = initvalues.ypoint || 0;
        this.shape = initvalues.shape || null;
    }
    return{
        getConfiguration:function(initvalues){
        if (configure == undefined) {
            configure = new initializeVals(initvalues)
            }
            return configure;
    }
    }
})()

var configureObj1 = ConfigureVals.getConfiguration({ "xpoint": 8, "ypoint" : 9, "shape" : "rectangle" });
console.log(configureObj1)
var configureObj2 = ConfigureVals.getConfiguration({ "xpoint": 2, "ypoint": 4, "shape" : "circle" });
console.log(configureObj2)
console.log(configureObj2 == configureObj1)