const yargs = require("yargs")
const { client, connection } = require("./db/connection")
const Movie = require("./utils");

const app = async (yargsObj) => {
    const collection = await connection();
    try {
        if (yargsObj.add) {
            const movie = new Movie(yargsObj.title, yargsObj.actor);
            console.log(await movie.add(collection));
        // Take Movie info, add it to the MongoDB Database and console log a success message
        } else if (yargsObj.list) {
            const movie = new Movie(yargsObj.title, yargsObj.actor);
            console.log(await movie.list(collection))
        // List ALL Moives in the Database
        } else {
            console.log("incorrect command")
        }
        await client.close(); } 
        catch (error) {
        console.log(error)
    }
}

app(yargs.argv);
