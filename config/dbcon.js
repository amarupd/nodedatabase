module.exports={
    host     : 'localhost',
    user     : 'root',
    password : 'amar',
    database : 'classicmodels',
    dialect : 'mysql',
  
    pool:{
      max:5,
      min:0,
      acquire:30000,
      idle:10000
    }
  }