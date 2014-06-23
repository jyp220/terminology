Ext.define('Terminology.store.Users', {
    extend: 'Ext.data.Store',
    model: 'Terminology.model.User',
    autoLoad: true,
    autoSync: true,
    remoteFilter: true
});