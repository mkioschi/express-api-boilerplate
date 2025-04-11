import { Router } from "express"
import { helloRoutes } from "@/routes/hello"

const routes = Router()

routes.use("/hello", helloRoutes)

export { routes }