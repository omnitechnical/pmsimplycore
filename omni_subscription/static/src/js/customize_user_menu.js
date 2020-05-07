odoo.define('omni_subscription.UserMenu', function (require) {
    "use strict";

    /**
     * This widget is appended by the webclient to the right of the navbar.
     * It displays the avatar and the name of the logged user (and optionally the
     * db name, in debug mode).
     * If clicked, it opens a dropdown allowing the user to perform actions like
     * editing its preferences, accessing the documentation, logging out...
     */

    var UserMenu = require('web.UserMenu');
    var app_subscription_url = 'http://pmsimply.com';
    var app_subscription_add_user_url = 'http://pmsimply.com';

    UserMenu.include({
        init: function () {
            this._super.apply(this, arguments);
            var self = this;
            var session = this.getSession();
            var lang_list = '';


            self._rpc({
                model: 'ir.config_parameter',
                method: 'search_read',
                domain: [['key', '=like', 'app_%']],
                fields: ['key', 'value'],
                lazy: false,
            }).then(function (res) {
                $.each(res, function (key, val) {
                    if (val.key == 'app_subscription_url')
                        app_subscription_url = val.value;
                    if (val.key == 'app_subscription_add_user_url')
                        app_subscription_add_user_url = val.value;
                    
                });
            })
        },
        _onMenuSubscription: function () {
            window.open(app_subscription_url, '_blank');
        },
        _onMenuSubscriptionadduser: function () {
            window.open(app_subscription_add_user_url, '_blank');
        },
    })

});
