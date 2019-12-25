const { MongoClient } = require('mongodb')
const uri =
	'mongodb+srv://codyjcodes:HQdaddy2020@cluster0-o0duq.mongodb.net/test?retryWrites=true&w=majority'

const main = async () => {
	const client = new MongoClient(uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	try {
		await client.connect()
		await listDbs(client)
	} catch (e) {
		console.err(e)
	} finally {
		await client.close()
	}
}

main().catch(console.err)

const listDbs = async client => {
	const dbList = await client
		.db()
		.admin()
		.listDatabases()

	console.log(`databases:`)
	dbList.databases.forEach(db => console.log(` - ${db.name}`))
}
