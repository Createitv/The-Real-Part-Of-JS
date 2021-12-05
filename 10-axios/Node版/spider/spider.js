const axios = require('axios')
const { MongoClient } = require('mongodb')

// Connection URL
const url = 'mongodb://localhost:27017'
const client = new MongoClient(url, { useUnifiedTopology: true })

// Database Name
const dbName = 'movies'

async function main() {
	// Use connect method to connect to the server
	await client.connect()
	console.log('Connected successfully to server')
	const db = client.db(dbName)
	const collection = db.collection('movies2')

	for (let i = 0; i < 10; i++) {
		const response = await axios.get(
			`https://spa1.scrape.center/api/movie/?limit=10&offset=${i * 10}`
		)
    const insertResult = await collection.insertMany(response.data.results)
    console.log('Inserted documents =>', insertResult)
	}
	// the following code examples can be pasted here...

	return 'done.'
}

main()
	.then(console.log)
	.catch(console.error)
	.finally(() => client.close())
