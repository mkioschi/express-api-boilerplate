import { Router } from "express"
import { HelloController } from "@/controllers/hello-controller"

const helloRoutes = Router()
const helloController = new HelloController()

helloRoutes.get("/", helloController.show)

export { helloRoutes }