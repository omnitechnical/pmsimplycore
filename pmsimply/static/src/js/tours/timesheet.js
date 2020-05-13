odoo.define('pmsimply.timesheet_tour', function(require) {
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
        if (this.running_tour === 'name') {
            this.consumed_tours.push(name);
        }
        return this._super.apply(this, arguments);
    },
});


tour.register('pmsimply_timesheet_tour', {
    url: "/web",
    }, 
    [tour.STEPS.SHOW_APPS_MENU_ITEM, {
            trigger: '.o_app[data-menu-xmlid="hr_timesheet.timesheet_menu_root"]',
            content: _t('Track the time spent on your projects. <i>It starts here.</i>'),
            position: 'right',
            edition: 'community',
        }, 
        {
            trigger: '.o_list_button_add',
            content: _t('Timesheets are done on tasks, click here to create your first one.'),
            position: 'bottom',
        }, 
        {
            trigger: "div[name='project_id']",
            content: _t('Choose a <b>project name</b>. (e.g. name of a customer, or product)'),
            position: "right",
            run: function (actions) {
                actions.auto();
            },
        }, 
        {
            trigger: "div[name='task_id']",
            content: _t('Choose a <b>Task</b>. (e.g. name of a customer, or product)'),
            position: "bottom",
            run: function (actions) {
                actions.auto();
            },
        }, 
        {
            trigger: "input[name='unit_amount']",
            content: _t('Set the number of hours done on this task, for every day of the week. (e.g. 1.5 or 1:30)'),
            position: 'bottom',
            run: function (actions) {
                 actions.auto();
            },
        },
        {
            trigger: "input[name='name']",
            content: _t('Add a Description of what you\'ve been working on. (e.g. I have sealed the pipe below the kitchen)'),
            position: 'top',
            run: function (actions) {
                actions.auto();
            },
        },
        {
            trigger: 'button.btn.btn-primary.o_list_button_save',
            content: _t('Click save to add Timesheet entry.'),
            position: 'bottom',
        },
    ]);
});

// {
//     trigger: ".o_form_editable .o_field_many2one[name='partner_id'] input",
//     content: _t("Write the name of your customer to create one on the fly, or select an existing one."),
//     position: "bottom",
// },

// {
//     trigger: ".o_field_x2many_list_row_add > a",
//     content: _t("Click here to add some products or services to your invoice."),
//     position: "bottom",
// }, {
//     trigger: ".breadcrumb-item:not(.active):last",
//     extra_trigger: ".o_sale_order [data-value='draft'].btn-primary",
//     content: _t("Use the breadcrumbs to <b>go back to preceeding screens</b>."),
//     position: "bottom"
// }, 