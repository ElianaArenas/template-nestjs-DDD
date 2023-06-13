# Repository title

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

### Getting start
```
npm install  #or
yarn
```
copy and rename .env.template to .env and fill all necesary params

### Running the project
```
 # Development mode
 	$ npm run start   #or 
	$ yarn start
	
#  Watch mode
    	$ npm run start:dev    #or 
	$ yarn start:dev
	
#  Production mode
   	$ npm run start:prod    #or
   	$ yarn start:prod
   
```

### Deploy
the deploy to dev and stagging environment is trigger by github actions when you push or merge to development or stagging branch.

### Project structure 📂

```
├── .env.sample
├── Readme.md
├── package.json
├── .github
│   ├── helm
│   │   └── values-development.yml
│   └── workflows
│       └── pipeline.yml
│       └── datadog.yml
│       └── pull-request.yml
├── oas
└── src
    ├── application                      
    │          ├── [name …]                       
    │          │      └── controllers
    |          |	       └── [name..].controller.ts
    │          └── health
    |                └──  controllers
    |   	  	       └── health.controller.ts
    ├── common
    |     └── constants
    |     └── helpers 
    |     └── interfaces
    ├── config
    |	    ├── databases
    |	    |	     └──[....]
    |       └── queue     
    |       └── swagger
    |       └── logger
    |
    ├── domain
    |	     └── [....]	
    ├── infrastructure
    |           └── repositories
    |                  ├── databases
    |	               |      └── oracle
    |                  └── queue   	
    |	         	     └──  kafka		
    |      
    ├── main.ts
    ├── app.module.ts
```

## API
Documentation: here comes the url 

1. Method /lorem
2. Method /lorem
3. Method /lorem
4. Method /lorem

### General and considerations

Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

#### Made with love by Kranio 🧠
