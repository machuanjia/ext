/**
 * Created by yanshi0429 on 17/3/10.
 */
Ext.application({
    requires: 'Ext.container.Viewport',
    name: 'AM',

    appFolder: 'app',
    controllers: [
        'Users'
    ],

    launch: function () {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: {
                xtype: 'userlist'
            }
        });
    }
});