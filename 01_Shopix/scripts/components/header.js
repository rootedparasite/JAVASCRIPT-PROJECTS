import { cartManager } from "./cart.js";
import { sidemenuManager } from "./sidemenu.js";
import { userCredentialsManager } from "./usercredentials.js";
import { wishlistManager } from "./wishlist.js";

export const headerManager = (data) => {
  userCredentialsManager();
  sidemenuManager(data);
  cartManager();
  wishlistManager();
};