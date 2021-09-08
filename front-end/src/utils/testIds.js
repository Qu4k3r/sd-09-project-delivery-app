const testIds = {
  id1: 'common_login__input-email',
  id2: 'common_login__input-password',
  id3: 'common_login__button-login',
  id4: 'common_login__button-register',
  id5: 'common_login__element-invalid-email',
  id6: 'common_register__input-name',
  id7: 'common_register__input-email',
  id8: 'common_register__input-password',
  id9: 'common_register__button-register',
  id10: 'common_register__element-invalid_register',
  id11: 'customer_products__element-navbar-link-products',
  id12: 'customer_products__element-navbar-link-orders',
  id13: 'customer_products__element-navbar-user-full-name',
  id14: 'customer_products__element-navbar-link-logout',
  id15: (id) => `customer_products__element-card-title-${id}`,
  id16: (id) => `customer_products__element-card-price-${id}`,
  id17: (id) => `customer_products__img-card-bg-image-${id}`,
  id18: (id) => `customer_products__button-card-add-item-${id}`,
  id19: (id) => `customer_products__button-card-rm-item-${id}`,
  id20: (id) => `customer_products__input-card-quantity-${id}`,
  id21: 'customer_products__button-cart',
  id22: (index) => `customer_checkout__element-order-table-item-number-${index}`,
  id23: (index) => `customer_checkout__element-order-table-name-${index}`,
  id24: (index) => `customer_checkout__element-order-table-quantity-${index}`,
  id25: (index) => `customer_checkout__element-order-table-unit-price-${index}`,
  id26: (index) => `customer_checkout__element-order-table-sub-total-${index}`,
  id27: (index) => `customer_checkout__element-order-table-remove-${index}`,
  id28: 'customer_checkout__element-order-total-price',
  id29: 'customer_checkout__select-seller',
  id30: 'customer_checkout__input-address',
  id31: 'customer_checkout__input-addressNumber',
  id32: 'customer_checkout__button-submit-order',
  id33: (id) => `customer_orders__element-order-id-${id}`,
  id34: (id) => `customer_orders__element-delivery-status-${id}`,
  id35: (id) => `customer_orders__element-order-date-${id}`,
  id37: 'customer_order_details__element-order-details-label-order-id',
  id38: 'customer_order_details__element-order-details-label-seller-name',
  id39: 'customer_order_details__element-order-details-label-order-date',
  id40: 'customer_order_details__element-order-details-label-delivery-status',
  id41: (index) => `customer_order_details__element-order-table-item-number-${index}`,
  id42: (index) => `customer_order_details__element-order-table-name-${index}`,
  id43: (index) => `customer_order_details__element-order-table-quantity-${index}`,
  id44: (index) => `customer_order_details__element-order-table-sub-total-${index}`,
  id45: (index) => `customer_order_details__element-order-total-price-${index}`,
  id47: 'customer_order_details__button-delivery-check',
  id48: (id) => `seller_orders__element-order-id-${id}`,
  id49: (id) => `seller_orders__element-delivery-status-${id}`,
  id50: (id) => `seller_orders__element-order-date-${id}`,
  id51: (id) => `seller_orders__element-card-price-${id}`,
  id52: (id) => `seller_orders__element-card-address-${id}`,
  id55: 'seller_order_details__element-order-details-label-delivery-status',
  id56: 'seller_order_details__element-order-details-label-order-date',
  id57: 'seller_order_details__button-preparing-check',
  id58: 'seller_order_details__button-dispatch-check',
  id59: (index) => `seller_order_details__element-order-table-item-number-${index}`,
  id60: (index) => `seller_order_details__element-order-table-name-${index}`,
  id61: (index) => `seller_order_details__element-order-table-quantity-${index}`,
  id62: (index) => `seller_order_details__element-order-table-unit-price-${index}`,
  id63: (index) => `seller_order_details__element-order-table-sub-total-${index}`,
  id64: 'seller_order_details__element-order-total-price',
  id65: 'admin_manage__input-name',
  id66: 'admin_manage__input-email',
  id68: 'admin_manage__select-role',
  id69: 'admin_manage__button-register',
  id70: (index) => `admin_manage__element-user-table-item-number-${index}`,
  id71: (index) => `admin_manage__element-user-table-name-${index}`,
  id72: (index) => `admin_manage__element-user-table-email-${index}`,
  id73: (index) => `admin_manage__element-user-table-role-${index}`,
  id74: (index) => `admin_manage__element-user-table-remove-${index}`,
  id78: 'admin_manage__input-password',
  id79: 'customer_products__checkout-bottom-value',
};

export default testIds;
