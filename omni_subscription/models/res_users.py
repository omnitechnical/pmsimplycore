# -*- coding: utf-8 -*-

from odoo import models, fields, api, _
from odoo.exceptions import UserError

import logging
_logger = logging.getLogger(__name__)

class ResUsers(models.Model):
	_inherit = 'res.users'
	
	@api.model
	def create(self, values):
		subscription_user_limit = self.env['ir.config_parameter'].get_param('subscription_user_limit')
		user_ids = self.env['res.users'].search([])
		user_count = len(user_ids)
		if user_count >= int(subscription_user_limit):
			raise UserError(_("Maximum user limit reached! You cannot create this user. Please contact customer support to upgrade your subscription."))
		result = super(ResUsers, self).create(values)
		return result 