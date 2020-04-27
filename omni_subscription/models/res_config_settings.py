# -*- coding: utf-8 -*-
from odoo import api, fields, models, _

import logging
_logger = logging.getLogger(__name__)

class ResConfigSettings(models.TransientModel):
	_inherit = 'res.config.settings'

	app_subscription_url = fields.Char('Subscription URL')
	app_subscription_add_user_url = fields.Char('Add User URL')

	@api.model
	def get_values(self):
		res = super(ResConfigSettings, self).get_values()
		ir_config = self.env['ir.config_parameter'].sudo()

		app_subscription_url = ir_config.get_param('app_subscription_url', default='http://www.pmsimply.com/')
		app_subscription_add_user_url = ir_config.get_param('app_subscription_add_user_url', default='http://www.pmsimply.com/')
	   
		res.update(
			app_subscription_url=app_subscription_url,
			app_subscription_add_user_url=app_subscription_add_user_url,
		)
		return res

	def set_values(self):
		super(ResConfigSettings, self).set_values()
		ir_config = self.env['ir.config_parameter'].sudo()
		ir_config.set_param("app_subscription_url", self.app_subscription_url or "http://www.pmsimply.com/")
		ir_config.set_param("app_subscription_add_user_url", self.app_subscription_add_user_url or "http://www.pmsimply.com/")
	   