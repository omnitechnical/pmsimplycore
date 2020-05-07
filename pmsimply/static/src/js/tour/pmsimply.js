odoo.define('pmsimply.tour', function(require) {
"use strict";

var core = require('web.core');
var tour = require('web_tour.tour');

var _t = core._t;
console.log(1111);
tour.register('pmsimply_tour', {
    url: "/web",
}, [tour.STEPS.SHOW_APPS_MENU_ITEM, {
	trigger: '.o_app[data-menu-xmlid="project.menu_main_pm"]',
	content: _t('Open Project app to send your first Project in a few clicks.'),
	position: 'right',
	edition: 'community'
},
{
    trigger: ".o-kanban-button-new",
    extra_trigger: ".o_kanban_view .oe_background_grey .o_kanban_dashboard .o_project_kanban .o_emphasize_colors .o_kanban_ungroupe",
    content: _t("Let's create a new Project.<br/><i>Note that colored buttons usually point to the next logical actions.</i>"),
    position: "bottom",
}
/*
{
	trigger: '.o_app[data-menu-xmlid="project.menu_projects"]',
	content: _t('Open Project app to send your first Project in a few clicks.'),
	position: 'bottom',
	edition: 'community'

}*/


]);
});