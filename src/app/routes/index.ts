import express from "express";
import { userRoutes } from "../../modules/user/user.route";
const router = express.Router();

const moduleRoutes = [
  {
    path: "/users",
    route: userRoutes,
  },
];

moduleRoutes.forEach((e) => router.use(e.path, e.route));

export default router;
