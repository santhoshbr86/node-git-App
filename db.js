const Sequelize = require('sequelize');
module.exports  = new Sequelize('AuthDB', 'postgres', 'mysql', {
  host: 'localhost',
  dialect:  'postgres'
});

// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection has been established successfully.');
//   })
//   .catch(err => {
//     console.error('Unable to connect to the database:', err);
//   });
// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'test1',
//   password: 'mysql',
//   port: 5432,
// });
// const getUsers = (re,resp) => {
//     pool.query("SELECT * from public.user",(err, res) => {
//        console.log(err,res);
//        if(err) throw err;
//        resp.status(200).json(res.rows);
       
//     });
// }
// const postUsers = (req, res) => {
//   console.log('This is first fix', req.body);
//   let {name, email, photoUrl}= req.body;
//   pool.query("INSERT INTO public.user(name, email, photolink) VALUES($1, $2, $3) RETURNING *", [name,email,photoUrl] ,(err, result) => {
//     if(err) throw err;
//     res.status(200).json(result.rows);
//   });
// }


