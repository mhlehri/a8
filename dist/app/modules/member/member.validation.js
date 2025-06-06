"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodMemberSchema = void 0;
const zod_1 = require("zod");
exports.zodMemberSchema = zod_1.z.object({
    name: zod_1.z.string(),
    email: zod_1.z.string(),
    phone: zod_1.z.string(),
    membershipDate: zod_1.z.date(),
});
