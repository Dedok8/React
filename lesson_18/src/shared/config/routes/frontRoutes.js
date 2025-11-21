import { roles } from "../roles";

export const frontRoutes = {
  pages: {
    // НазваСторінки: {
    //   path: 'шлях_у_роутері',
    //   navigationPath: 'шлях_для_програмної_навігації',
    //   meta: {
    //     title: 'заголовок_сторінки',
    //     isInMenu: чи треба у головному мені відповідний пункт,
    //     requireAuth: чи потребує авторизації,
    //     roles: [перелік ролей користувачів, які мають доступ],
    //   },
    // },

    HomePage: {
      path: "",
      navigationPath: "/",
      meta: {
        title: "Головна",
        i18nKey: "HomePage",
        isInMenu: true,
        requireAuth: false,
      },
    },

    LoginPage: {
      path: "login",
      navigationPath: "/login",
      meta: {
        title: "Login page",
        i18nKey: "LoginPage",
        isInMenu: false,
        requireAuth: false,
      },
    },

    UsersPage: {
      path: "users",
      navigationPath: "/users",
      meta: {
        title: "Користувачі",
        i18nKey: "UsersPage",
        isInMenu: true,
        requireAuth: true,
        roles: [roles.admin],
      },
    },

    UserEditPage: {
      path: "users/edit/:id",
      navigationPath: (id) => `/users/edit/${id ?? ""}`,
      meta: {
        title: "Редагування користувача",
        i18nKey: "EditUser",
        isInMenu: false,
        requireAuth: true,
        roles: [roles.admin],
      },
    },

    ProductsPage: {
      path: "products",
      navigationPath: "/products",
      meta: {
        title: "Каталог продуктів",
        i18nKey: "ProductsPage",
        isInMenu: true,
        requireAuth: false,
      },
    },

    ProductEditPage: {
      path: "products/edit/:id?",
      navigationPath: (id) => `/products/edit/${id ?? ""}`,
      meta: {
        title: "Редагування товару",
        i18nKey: "EditProduct",
        isInMenu: false,
        requireAuth: true,
        roles: [roles.admin, roles.manager],
      },
    },

    ProductAddPage: {
      path: "products/add",
      navigationPath: "/products/add",
      meta: {
        title: "Додавання товару",
        i18nKey: "AddProduct",
        isInMenu: false,
        requireAuth: true,
        roles: [roles.admin, roles.manager],
      },
    },

    CartPage: {
      path: "cart",
      navigationPath: "/cart",
      meta: {
        title: "Кошик",
        i18nKey: "Cart",
        isInMenu: true,
        requireAuth: true,
        roles: [roles.user],
      },
    },
    FavoritesPage: {
      path: "favorites",
      navigationPath: "/favorites",
      meta: {
        title: "Вподобані товари",
        i18nKey: "Favorites",
        isInMenu: true,
        requireAuth: true,
        roles: [roles.user],
      },
    },

    NotFoundPage: {
      path: "*",
      meta: {
        title: "Not Found",
        i18nKey: "NotFound",
        isInMenu: false,
        requireAuth: false,
      },
    },

    ForbiddenPage: {
      path: "forbidden",
      navigationPath: "/forbidden",
      meta: {
        title: "Forbidden",
        i18nKey: "Forbidden",
        isInMenu: false,
        requireAuth: false,
      },
    },
  },
};

export function getPagesObjectList() {
  const pagesList = Object.keys(frontRoutes.pages);
  return pagesList.map((page) => frontRoutes.pages[page]);
}
