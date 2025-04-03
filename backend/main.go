package main

import (
	"log"
	"net/http"
	"net/http/pprof"

	"github.com/Michael-cmd-sys/gotore/backend/internal/config"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"github.com/Michael-cmd-sys/gotore/backend/internal/handlers"
)

func wrapPprofHandler(handler func(http.ResponseWriter, *http.Request)) echo.HandlerFunc {
	return func(c echo.Context) error {
		handler(c.Response().Writer, c.Request())
		return nil
	}
}

func main() {
	cfg := config.LoadConfig()

	// Configure logging
	log.SetFlags(0)

	// Echo instance
	e := echo.New()

	// Middleware
	log.Printf("\033[32mINFO\033[0m - Setting up middleware...")
	e.Use(middleware.Logger())
	e.Use(middleware.Recover())
	e.Use(middleware.CORS())

	// Routes
	log.Printf("\033[32mINFO\033[0m - Setting up routes...")
	e.GET("/health", func(c echo.Context) error {
		log.Printf("\033[32mINFO\033[0m - Health check requested")
		return c.JSON(http.StatusOK, map[string]string{
			"status": "healthy",
			"env":    cfg.Env,
			"port":   cfg.Port,
		})
	})
	e.GET("/test", handlers.TestHandler)

	// Add pprof endpoints for hot reloading
	log.Printf("\033[32mINFO\033[0m - Setting up pprof endpoints...")
	e.GET("/debug/pprof/", wrapPprofHandler(pprof.Index))
	e.GET("/debug/pprof/cmdline", wrapPprofHandler(pprof.Cmdline))
	e.GET("/debug/pprof/profile", wrapPprofHandler(pprof.Profile))
	e.GET("/debug/pprof/symbol", wrapPprofHandler(pprof.Symbol))
	e.GET("/debug/pprof/trace", wrapPprofHandler(pprof.Trace))

	// Start server
	log.Printf("\033[32mINFO\033[0m - Starting server on port %s...", cfg.Port)
	log.Fatal(e.Start(":" + cfg.Port))
}
