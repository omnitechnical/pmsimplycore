# -*- coding: utf-8 -*-
{
    'name': "omni_subscription",

    'summary': """
        App Subscription""",

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
    'depends': ['base'],

    # always loaded
    'data': [
        # 'security/ir.model.access.csv',
        'security/subscription_settings.xml',
        'data/config_parameter_data.xml',
        'data/menu_data.xml',
    ],
    'installable': True,
    'application': False,
    'auto_install': True,
}
