odoo.define('pmsimply.tour', function(require) {
"use strict";

var core = require('web.core');
var tour = require('web_tour.tour');

var _t = core._t;

// tour._consume_tour('account_tour');
var TourManager = require('web_tour.TourManager');

TourManager.include({
    /**
     * Disables tours if Odoo installed with demo data.
     *
     * @override
     */
    _register: function (do_update, tour, name) {
        // Consuming tours which are not run by test case
        if (this.running_tour === 'account_tour') {
            this.consumed_tours.push(name);
        }
        return this._super.apply(this, arguments);
    },
});

tour.register('pmsimply_account_tour', {
    url: "/web",
}, [tour.STEPS.SHOW_APPS_MENU_ITEM, {
    trigger: '.o_app[data-menu-xmlid="account.menu_finance"]',
    content: _t('Want a better way to <b>manage your accounts</b>? <i>It starts here.</i></br>Create invoices, register payments and keep track of the discussions with your customers.'),
    position: 'right',
    edition: 'community',
}, {
    trigger: '.o_list_button_add',
    content: _t('Let\'s create your first invoice.'),
    position: 'bottom',
    width: 200,
}, {
    trigger: ".o_form_editable .o_field_many2one[name='partner_id'] input",
    content: _t("Write the name of your customer to create one on the fly, or select an existing one."),
    position: "bottom",
}, {
    trigger: ".o_field_x2many_list_row_add > a",
    content: _t("Click here to add some products or services to your invoice."),
    position: "bottom",
}, {
    trigger: ".o_field_widget[name=product_id] input, .o_field_widget[name=product_template_id] input",
    content: _t("Select a product, or create a new one on the fly."),
    position: "right",
    id: 'product_selection_step'
}, {
    trigger: ".o_form_button_save",
    content: _t("Once your invoice is ready, you can save, print or send it by email."),
    position: "right",
    id: "form_button_save_clicked"
}, {
    trigger: ".breadcrumb-item:not(.active):last",
    content: _t("Use the breadcrumbs to <b>go back to preceeding screens</b>."),
    position: "bottom"
}, ]);

});