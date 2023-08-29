SHELL := /bin/zsh
export PATH := ./node_modules/.bin:$(PATH)

.PHONY: build
build:
	npm run build

start:
	npm run build
	npm run start