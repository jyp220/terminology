/**
 * Terminology App
 * @author lukasz.sudol <lukasz@devjs.eu>
 */

Ext.application({
    name: 'Terminology',
    appFolder: '/javascripts/app',

    requires: [
        'Terminology.lib.form.field.VTypes',
        'Terminology.lib.form.field.override.Text'
    ],

    views: [
        'users.List',
        'users.Add',
		'menus.SubMenu'
    ],

    controllers: [
        'Users'
    ],

    stores: [
        // TODO: add stores here
    ],

    launch: function(){
        Ext.create('Terminology.lib.form.field.VTypes').init();
    },

    autoCreateViewport: true
});

