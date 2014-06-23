Ext.define('Terminology.view.Viewport', {
    extend: 'Ext.container.Viewport',

    layout: 'border',

    items: [
        {
			title: 'North',
            region: 'north',
            margins: 5,
            height: 80,
            split: true
        },
        {
            title: 'Menu',
            region: 'west',
            margins: '0 5 0 5',
            flex: .2,
            collapsible: true,
            split: true,
            titleCollapse: true,
			items: [{
				title: '',
				xtype: 'menusSubMenu'
			}]
        },
        {
            title: 'Center',
            region: 'center',
            layout:'fit',
            items: [
                {
                    title: '',
                    xtype: 'usersList'
                }
            ]
        },
        {
            title: 'East',
            region: 'east',
            margins: '0 5 0 5',
            width: 200,
            collapsible: true,
            collapsed: true,
            items: [
            ]
        }
    ]
});
