Ext.define('Terminology.model.Example', {
    extend: 'Ext.data.Model',
    fields: [
        //fields here
    ],
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