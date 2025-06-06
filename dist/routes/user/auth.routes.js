"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../../controllers/user/auth.controller");
const router = express_1.default.Router();
/**
 * @route POST /api/users/register
 * @desc User registration
 */
router.post("/register", (req, res, next) => {
    Promise.resolve((0, auth_controller_1.userRegister)(req, res)).catch(next);
});
/**
 * @route POST /api/users/login
 */
const userLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // your login logic
    }
    catch (error) {
        next(error);
    }
});
exports.userLogin = userLogin;
router.post("/login", exports.userLogin);
// userRegister is imported from the controller, so no need to declare it here.
exports.default = router;
