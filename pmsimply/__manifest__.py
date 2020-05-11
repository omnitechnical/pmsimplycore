# -*- coding: utf-8 -*-
{
    'name': "pmsimply",

    'summary': """
        PMSIMPLY""",

    'description': """
        Long description of module's purpose
    """,

    'author': "Omnitechnical",
    'website': "http://www.omnitechnical.com",

    # Categories can be used to filter modules in modules listing
    # Check https://github.com/odoo/odoo/blob/13.0/odoo/addons/base/data/ir_module_category_data.xml
    # for the full list
    'category': 'Uncategorized',
    'version': '0.1',

    # any module necessary for this one to work correctly
    'depends': ['base',
                'auth_signup',
                'digest',
                'app_odoo_customize',
                'omni_subscription',
                'project',
                'hr',
                'mail_bot',
                'project_task_timer',
                'bi_odoo_project_phases',
                'sale_management',
                'auto_backup',
                'sinerkia_jitsi_meet',
                'web_tour'],

    # always loaded
    'data': [
        'security/res_groups.xml',
        'security/ir.model.access.csv',
        'data/res_partner_data.xml',
        'data/auth_signup_data.xml',
        'data/digest_template_data.xml',
        'data/portal_data.xml',
        'data/project_data.xml',
        'views/assets.xml',
        'views/project_views.xml',
        'views/hr_employee_views.xml',
    ],
    # only loaded in demonstration mode
    'demo': [
        'demo/demo.xml',
    ],
    'installable': True,
    'application': True,
    'auto_install': True,
}
