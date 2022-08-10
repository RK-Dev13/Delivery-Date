define([
    'jquery',
    'ko',
    'Magento_Ui/js/form/form'
], function ($, ko, Component) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Shipping_DeliveryDate/delivery-date-block'
        }
    });
});
