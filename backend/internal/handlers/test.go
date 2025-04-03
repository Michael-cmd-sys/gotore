package handlers

import "github.com/labstack/echo/v4"

// TestHandler handles test requests
func TestHandler(c echo.Context) error {
    return c.JSON(200, map[string]string{
        "message": "Test endpoint working",
        "timestamp": c.RealIP(),
    })
}
