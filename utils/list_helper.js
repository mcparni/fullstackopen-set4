const dummy = (blogs) => {
  // always 1
  return blogs
}

const totalLikes = (blogs) => {
  blogs = blogs.map(blog => blog.likes )
  if(blogs.length === 0) {
    return 0
  } else {
    return blogs.reduce( (acc, curr) => acc + curr )
  }
}

const mostLiked = (blogs) => {
  const most = blogs.reduce((prev, current) => (prev.likes > current.likes) ? prev : current)
  if(blogs.length === 0) {
    return 0
  } else {
    return most
  }
}

const mostBlogs = (blogs) => {
  let theMost = blogs.reduce((acc, curr) => {
    if (acc[curr.author] === undefined) {
      acc[curr.author] = 1
    } else {
      acc[curr.author] += 1
    }
    return acc
  }, {})
  let author = Object.keys(theMost).reduce((prev, next) => theMost[prev] > theMost[next] ? prev : next)
  let count = theMost[author]
  theMost = {}
  theMost['author'] = author
  theMost['blogs'] = count
  return theMost
}

const mostLikes = (blogs) => {
  let theMost = blogs.reduce((acc, curr) => {
    if (acc[curr.author] === undefined) {
      acc[curr.author] = { 'likes' : curr.likes }
    } else {
      acc[curr.author]['likes'] += curr.likes
    }
    return acc
  }, {})
  let author = Object.keys(theMost).reduce((prev, next) => theMost[prev].likes > theMost[next].likes ? prev : next)
  let count = theMost[author].likes
  theMost = {}
  theMost['author'] = author
  theMost['likes'] = count
  return theMost
}

module.exports = {
  dummy,
  totalLikes,
  mostLiked,
  mostBlogs,
  mostLikes
}