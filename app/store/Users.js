/**
 * Created by yanshi0429 on 17/3/10.
 */
Ext.define('AM.store.Users', {
    extend: 'Ext.data.Store',
    model: 'AM.model.User',
    autoLoad:true,
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/users.json',
            update: 'data/updateUsers.json'
        },
        reader: {
            type: 'json',
            root: 'users',
            successProperty: 'success'
        }
    }
    // data: [
    //     {name: 'Ed',    email: 'ed@sencha.com'},
    //     {name: 'Tommy', email: 'tommy@sencha.com'}
    // ]
});