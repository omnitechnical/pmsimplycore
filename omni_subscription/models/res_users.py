# -*- coding: utf-8 -*-

from odoo import models, fields, api, _
from odoo.exceptions import UserError

import logging
_logger = logging.getLogger(__name__)

class ResUsers(models.Model):
	_inherit = 'res.users'
	
	@api.model
	def create(self, values):
		sub_usr_cnt = self.env['ir.config_parameter'].get_param('sub_usr_cnt')
		user_ids = self.env['res.users'].search([])
		user_count = len(user_ids)
		if user_count >= int(sub_usr_cnt):
			raise UserError(_("Maximum user limit reached! You cannot create this user. Please contact customer support to upgrade your subscription."))
		result = super(ResUsers, self).create(values)
		return result 