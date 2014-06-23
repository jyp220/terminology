Ext.define('Terminology.view.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Ext.tab.Panel',
        'Ext.layout.container.Border',
        'Ext.grid.Panel',
    ],

    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    initComponent: function () {
        var me = this;

        this.items = [
            {
                region: 'west',
                xtype: 'tabpanel',
                width: 150,
				items: [{
					xtype: 'menus-sub-menu'
				}]
            },
            {
                region: 'center',
                xtype: 'tabpanel',
                items: [
                    {
                        xtype: 'users-list'
                    }
                ]
            }
        ]

        //parent
        this.callParent(arguments);
    }
});