module.exports = 
{
    "type": "postgres" ,
    "url": process.env.DATABASE_URL,
    
    "entities": process.env.NODE_ENV == "production" 
        ? ["dist/model/*.js"] 
        : ["src/model/*.ts"],

    "migrations": process.env.NODE_ENV == "production"
        ? ["dist/database/migrations/*.js" ]
        : ["src/database/migrations/*.ts" ],
        
    "cli": {
        "migrationsDir": [
            "src/database/migrations"
        ],
        "entitiesDir": "src/model"
    }
}