import RouterClass from "./router.js";
import { SessionController } from "../controllers/sessions.controller.js";
import { passportCall } from "../middlewares/passportCall.js";

const { current, login, logout, recoveryPassword, register } =
  new SessionController();

export default class sessionRouter extends RouterClass {
  init() {
    // Login endpoint
    this.post("/login", ["PUBLIC"], passportCall("login"), login);

    // Register endpoint
    this.post("/register", ["PUBLIC"], passportCall("register"), register);

    // Recovery-password endpoint
    this.post("/recovery-password",["PUBLIC"],passportCall("recovery-password"),recoveryPassword
    );

    // Logout endpoint
    this.post("/logout", ["USER", "ADMIN", "USER_PREMIUM"], logout);

    // Current endpoint
    this.get("/current", ["USER", "ADMIN"], passportCall("current"), current);
  }
}
