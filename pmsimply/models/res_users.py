# -*- coding: utf-8 -*-

from odoo import models, fields, api

class ResUsers(models.Model):
	_inherit = 'res.users'
	
	odoobot_state = fields.Selection(
		[
			('not_initialized', 'Not initialized'),
			('onboarding_emoji', 'Onboarding emoji'),
			('onboarding_attachement', 'Onboarding attachement'),
			('onboarding_command', 'Onboarding command'),
			('onboarding_ping', 'Onboarding ping'),
			('idle', 'Idle'),
			('disabled', 'Disabled'),
		], string="PMSimplyBot Status")  # keep track of the state: correspond to the code of the last message sent

	notification_type = fields.Selection([
		('email', 'Handle by Emails'),
		('inbox', 'Handle in PMSimply')],
		'Notification', required=True, default='email',
		help="Policy on how to handle Chatter notifications:\n"
			 "- Handle by Emails: notifications are sent to your email address\n"
			 "- Handle in PMSimply: notifications appear in your PMSimply Inbox")

	def _is_admin(self):
		self.ensure_one()
		res = super(ResUsers, self)._is_admin()
		if self.env.user.has_group('pmsimply.group_allow_user_tours'):
			return True
		return res
