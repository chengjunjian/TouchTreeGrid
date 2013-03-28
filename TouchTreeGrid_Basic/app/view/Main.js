/*
 * File: app/view/Main.js
 *
 * This file was generated by Sencha Architect version 2.2.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.1.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.1.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('TouchTreeGrid.view.Main', {
    extend: 'Ext.Container',
    alias: 'widget.main',

    requires: [
        'TouchTreeGrid.view.TouchTreeGrid'
    ],

    config: {
        itemId: 'main',
        layout: {
            type: 'vbox'
        },
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                height: '2.2em',
                itemId: 'maintitlebar',
                title: 'TouchTreeGrid Demo'
            },
            {
                xtype: 'container',
                flex: 1,
                layout: {
                    type: 'fit'
                },
                items: [
                    {
                        xtype: 'touchtreegrid',
                        store: 'TaskStore',
                        columns: [
                            {
                                header: 'Task',
                                dataIndex: 'text',
                                width: '35%',
                                style: ' text-align: left;',
                                categStyle: 'font-weight: bold; text-align: left; color: blue;',
                                headerStyle: 'text-align: left; color: #ccc;'
                            }
                        ],
                        listItemId: 'firstexamplelist',
                        includeFooterLevels: false,
                        defaultCollapseLevel: 1,
                        itemId: 'firstexample'
                    }
                ]
            }
        ]
    }

});