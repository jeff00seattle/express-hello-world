#   Makefile
#

install:
	npm install express --save

run:
	node app.js

list:
	cat Makefile | grep "^[a-z]" | awk '{print $$1}' | sed "s/://g" | sort