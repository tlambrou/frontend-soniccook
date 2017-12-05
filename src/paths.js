const serverPaths = {
  dev: 'http://localhost:8000',
  prod: 'https://sonic-cook.herokuapp.com'
}

const serverPath = (process.env.NODE_ENV === 'development') ? serverPaths.dev : serverPaths.prod

export default serverPath
