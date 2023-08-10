const pg = require('pg')

const db = new pg.Pool({
    host: 'db.czbxcnhatejuwejazazf.supabase.co',
    user: 'postgres',
    database: 'postgres',
    port: '5432',
    password: '1ls0v2oaHlquU0uv'
})

db.connect()
.then(()=> console.log('berhasil connect db'))
.catch((err)=> console.log(err))
module.exports = db
