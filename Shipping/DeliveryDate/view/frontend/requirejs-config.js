var config = {
    "map": {
        "*": {
            'Magento_Checkout/js/model/shipping-save-processor/default': 'Shipping_DeliveryDate/js/model/shipping-save-processor/default'
        }
    },
    config: {
        mixins: {
            'Magento_Checkout/js/view/shipping': {
                'Shipping_DeliveryDate/js/mixin/shipping-mixin': true
            },
            'Amazon_Payment/js/view/shipping': {
                'Shipping_DeliveryDate/js/mixin/shipping-mixin': true
            }
        }
    }
};
