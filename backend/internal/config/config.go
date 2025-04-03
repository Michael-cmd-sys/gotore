package config

import (
	"os"
)

type Config struct {
	Port string
	Env  string
}

func LoadConfig() Config {
	// Set default values if not set
	if os.Getenv("PORT") == "" {
		os.Setenv("PORT", "8080")
	}
	if os.Getenv("ENV") == "" {
		os.Setenv("ENV", "development")
	}

	return Config{
		Port: os.Getenv("PORT"),
		Env:  os.Getenv("ENV"),
	}
}
