"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteFile = exports.uploadFile = void 0;
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
const uploadFile = (filePath, folder) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      const result = yield cloudinary_1.default.uploader.upload(filePath, {
        folder,
        resource_type: "auto",
      });
      return result.secure_url;
    } catch (error) {
      throw new Error("Cloudinary upload failed");
    }
  });
exports.uploadFile = uploadFile;
const deleteFile = (publicId) =>
  __awaiter(void 0, void 0, void 0, function* () {
    try {
      yield cloudinary_1.default.uploader.destroy(publicId);
    } catch (error) {
      throw new Error("Cloudinary deletion failed");
    }
  });
exports.deleteFile = deleteFile;
