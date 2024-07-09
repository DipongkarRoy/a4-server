import { Router } from "express";
import { nurseryRoute } from "../module/nursery/nursery.routes";

const router = Router();
const moduleRoutes = [
    {
        path:'/nursery',
        route : nurseryRoute
    }
]

moduleRoutes.forEach(routes =>router.use(routes.path, routes.route))

export default router;