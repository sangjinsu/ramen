package route

import (
	"Search/controller"
	"github.com/gofiber/fiber/v2"
)

func SearchRoutes(app *fiber.App) {
	route := app.Group("/v1/search")

	route.Get("name", controller.SearchName)
	route.Get("brand", controller.SearchBrand)
}
