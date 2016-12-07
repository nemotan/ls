 CUI.use(['cui/combox/Select', 'cui/combox/CalendarSelect', 'cui/combox/Address', 'cui/grid/DataTable'], function(Select, CalendarSelect, Address, DataTable) {
     var sleectData = [{ text: '类型1', value: '1' }, { text: '类型2', value: '2' }, { text: '类型3', value: '3' }, {
         text: '类型4',
         value: '4'
     }];
     var select = new Select({ id: 'J_select', name: 'type', data: sleectData });
     select.render();
     var calendar = new CalendarSelect({ renderTo: '#J_calendar', name: 'calendar', autoRender: true });
     var columns = [{ header: '订单ID', dataIndex: 'id', dataType: 'string', sortable: true, flex: 1 }, {
         header: '订单类型',
         dataIndex: 'type',
         dataType: 'string',
         sortable: false,
         flex: 1
     }, { header: '创建时间', dataIndex: 'canlendar', dataType: 'string', sortable: true, flex: 1 }, {
         header: '操作',
         dataIndex: '',
         dataType: 'string',
         sortable: false,
         flex: 1,
         renderer: function(value, record, cell) {
             var buttons = [];
             if (record.canView != 0) {
                 CUI.merge(buttons, ['<a href="javascript:void(0)" ', 'data-action="view">查看', '</a>']);
             }
             if (record.canEdit != 0) {
                 CUI.merge(buttons, ['<a href="javascript:void(0)" ', 'data-action="edit">编辑', '</a>']);
             }
             if (record.canLock != 0) {
                 CUI.merge(buttons, ['<a href="javascript:void(0)" ', 'data-action="lock">锁定', '</a>']);
             }
             var html = buttons.join('\n');
             return html;
         }
     }];
     var dataTable = new DataTable({
         id: 'J_table',
         columns: columns,
         data: [{ id: '0001', type: '1', canlendar: '2016-05-05', canView: 0, canEdit: 1, canLock: 1 }, {
             id: '0002',
             type: '2',
             canlendar: '2016-03-12',
             canView: 1,
             canEdit: 1,
             canLock: 1
         }, { id: '0004', type: '3', canlendar: '2016-07-01', canView: 1, canEdit: 0, canLock: 0 }, {
             id: '0005',
             type: '4',
             canlendar: '2016-04-02',
             canView: 0,
             canEdit: 0,
             canLock: 1
         }]
     });
     dataTable.render();
 })