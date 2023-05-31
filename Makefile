install:
	npm ci

test:
	npm test

test-steps:
	npx jest --testNamePattern step1
	npx jest --testNamePattern step2
	npx jest --testNamePattern step3
	npx jest --testNamePattern step4
	npx jest --testNamePattern step5

fix:
	npx eslint --fix .

run:
	node bin/plants.js __fixtures__/flora.csv