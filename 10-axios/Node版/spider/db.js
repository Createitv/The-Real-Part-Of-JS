const { MongoClient } = require('mongodb')
const uri =
	'mongodb://localhost:27017/movies?retryWrites=true&writeConcern=majority'

const client = new MongoClient(uri)

async function run() {
	try {
		await client.connect()

		const database = client.db('movies')
		const movies = database.collection('movies')

		// Query for a movie that has the title 'Back to the Future'
		const query = { name: '海洋 - Océans' }
		const movie = await movies.findOne(query)

		console.log(movie)
	} finally {
		// Ensures that the client will close when you finish/error
		await client.close()
	}
}
run().catch(console.dir)
