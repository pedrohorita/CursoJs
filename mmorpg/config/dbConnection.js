const mgClient = require('mongodb').MongoClient

class MongoClient {
    constructor(url = 'mongodb://localhost:27017', dbName = 'mmorpg') {
        this._url = url
        this._dbName = dbName
    }

    exec(func) {
        mgClient.connect(this._url, (err, client) => {
            const db = client.db(this._dbName)
            func(db, () => {
                client.close()
            })
        })
    }
}

module.exports = () => {
    return MongoClient
}