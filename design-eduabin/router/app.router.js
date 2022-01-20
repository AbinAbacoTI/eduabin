
const router = ( server ) => {
  server.use('/register', ( req, res ) => res.render('register'))
  server.use('/login', (req, res ) => res.render('login'))
  server.use('/', ( req, res ) => res.render('index') )
  
}

module.exports = router