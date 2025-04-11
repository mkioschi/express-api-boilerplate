import { Router } from "express"
import { HelloController } from "@/controllers/hello-controller"

const routes = Router()
const helloController = new HelloController()

routes.get("/hello", helloController.show)

export { routes }