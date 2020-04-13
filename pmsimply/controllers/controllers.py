# -*- coding: utf-8 -*-
# from odoo import http


# class Pmsimply(http.Controller):
#     @http.route('/pmsimply/pmsimply/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/pmsimply/pmsimply/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('pmsimply.listing', {
#             'root': '/pmsimply/pmsimply',
#             'objects': http.request.env['pmsimply.pmsimply'].search([]),
#         })

#     @http.route('/pmsimply/pmsimply/objects/<model("pmsimply.pmsimply"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('pmsimply.object', {
#             'object': obj
#         })
