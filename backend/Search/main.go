package main

import (
	"Search/middleware"
	"Search/route"
	"github.com/gofiber/fiber/v2"
	"log"
	"runtime"
)

func main() {
	runtime.GOMAXPROCS(runtime.NumCPU())
	log.SetFlags(0)

	app := fiber.New()

	middleware.FiberMiddleware(app)
	route.SearchRoutes(app)

	log.Fatal(app.Listen(":8082"))
}
