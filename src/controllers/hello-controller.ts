import { Request, Response } from "express"

class HelloController {
  async show(request: Request, response: Response) {
    const name = request.query.name || "guest"
    
    response.status(200).json({
      message: `Hello ${name}!`
    })
  }
}

export { HelloController }