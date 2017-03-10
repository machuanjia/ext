/**
 * Created by yanshi0429 on 17/3/6.
 */

Ext.define("MyApp.Person", {
    config: {
        Name: '',
        Age: 0,
    },
    alias:"Person",
    Say: function (msg) {
        Ext.Msg.alert(this.Name + " Says:", msg);
    },
    constructor: function (config) {
        this.initConfig(config);
    }
});