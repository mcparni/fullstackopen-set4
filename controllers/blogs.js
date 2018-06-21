const blogRouter = require('express').Router()
const Blog = require('../models/blog')

blogRouter.get('/', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs.map(Blog.format))
    })
    .catch(error => {
      console.log(error)
    })
})

blogRouter.post('/', (request, response) => {
  const body = request.body
  const title = body.title
  const author = body.author
  const url = body.url
  const likes = (body.likes === undefined) ? 0 : body.likes

  if (title === undefined) {
    return response.status(400).json({ error: 'Title is missing.' })
  }
  if (author === undefined) {
    return response.status(400).json({ error: 'Author is missing.' })
  }
  if (url === undefined) {
    return response.status(400).json({ error: 'URL is missing.' })
  }

  const blog = new Blog({
    title: title,
    author: author,
    url: url,
    likes: likes
  })

  blog
    .save()
    .then(Blog.format)
    .then(savedFormattedBlog => {
      response.json(savedFormattedBlog)
    })
    .catch(error => {
      console.log(error)
    })
})

module.exports = blogRouter