package main

import (
	"github.com/gofiber/fiber/v2"
	"log"
	"runtime"
)

func main() {
	runtime.GOMAXPROCS(runtime.NumCPU())
	log.SetFlags(0)

	app := fiber.New()

	log.Fatal(app.Listen(":8082"))
}
