# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

from odoo import models
from odoo.http import request


class Http(models.AbstractModel):
    _inherit = 'ir.http'

#    def session_info(self):
#        result = super(Http, self).session_info()
#        result['is_admin'] = True
#        return result