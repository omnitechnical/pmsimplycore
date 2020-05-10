odoo.define('pmsimply.tour', function(require) {
"use strict";

var core = require('web.core');
var tour = require('web_tour.tour');

var _t = core._t;

tour._consume_tour('account_tour');
tour.register('pmsimply_account_tour', {
    url: "/web",
}, [tour.STEPS.SHOW_APPS_MENU_ITEM, {
    trigger: '.o_app[data-menu-xmlid="account.menu_finance"]',
    content: _t('Want a better way to <b>manage your accounts</b>? <i>It starts here.</i>'),
    position: 'right',
    edition: 'community',
}, {
    trigger: '.o_list_button_add',
    content: _t('Let\'s create your first invoice.'),
    position: 'bottom',
    width: 200,
}, ]);

});
