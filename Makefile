SELENOID_VERSION = $(shell grep '"default":' ./config/selenoid/browsers.json | cut -d\" -f4)

test:
	@docker-compose up -d selenoid
	@docker-compose up -d selenoid-ui
	@docker pull selenoid/chrome:${SELENOID_VERSION}
	@docker-compose run --name vidsy-browser-tests --rm vidsy-browser-tests test
