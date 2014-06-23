Ext.define('Terminology.store.Examples', {
    extend : 'Ext.data.Store',
    requires : [
        'Terminology.model.Example'
    ],
    model : 'Terminology.model.Example',
    storeId : "Examples",
    autoLoad : true,
    autoSync: true,
    proxy : {
        type : 'direct',
        api : {
            //crud here
        },
        reader : {
            type : 'json',
            root: 'Example'
        }
    }
});