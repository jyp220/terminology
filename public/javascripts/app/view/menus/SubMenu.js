Ext.define('Terminology.view.menus.SubMenu', {
    extend: 'Ext.grid.Panel',

    xtype: 'menusSubMenu',
    // title: 'Moduł użytkowników',

    viewConfig: {
        enableTextSelection: true,
        stripeRows: true
    },

    store: 'Users',

    initComponent: function () {

        this.selType = 'rowmodel';

        this.columns = [
            {
                text: 'Email',
                dataIndex: 'email',
                flex: .5,
                editor: {
                    allowBlank: false
                }
            }
        ];

        //parent
        this.callParent(arguments);
    }
});