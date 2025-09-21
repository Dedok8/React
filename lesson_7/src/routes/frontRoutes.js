export default {
  pages: {
    home: "/",
    products: {
      index: "/products",
      detail: ":id",
    },
    paymentRules: "/paymentRules",
    contacts: "/contacts",
  },
  navigate: {
    products: {
      getDetailLink: (id) => `/products/${id}`,
    },
  },
};
