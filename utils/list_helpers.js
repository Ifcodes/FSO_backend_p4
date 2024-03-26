
const dummyList = (blogs) => {
  return 1
};

const totalLikes = (blogs) => {
  const reducer = blogs.reduce((acc, curr) => acc + curr.likes, 0)
  return blogs.length === 1 ? blogs[0].likes : reducer;
}

const favoriteBlog = (blogs) => {
  const modBlogs = blogs.map(blog => {
    return {
      title: blog.title,
      author: blog.author,
      likes: blog.likes
    }
  })
  const favBlog = modBlogs.reduce((acc, curr) => {
    if(acc && acc.likes > curr.likes) return acc

    return curr
  })

  return favBlog
}

const mostBlog = (blogs) => {
  // get unique blogs by author
  // map through the unique bloglist and filter blogs by each author, then return an object for each result showing author name and total of blogs
  // use reduce to find author with most blog.

  /*
    get unique authors using map and filter methods

    const uniqueAuthors =  blogs.map(bl => bl.author).filter((author, i, ar) => ar.indexOf(author) === i)
  **/

  // get unique authors using Set
  const uniqueAuthors = [...new Set(blogs.map(bl => bl.author))]
  const uniqueBlogs = uniqueAuthors.map(author => {
    const blogByAuthor = blogs.filter(blog => blog.author === author);

    return {
      author,
      totalBlogs: blogByAuthor.length
    }
  })
  const mostBlog = uniqueBlogs.reduce((prev, curr) => {
    if(prev && prev.totalBlogs > curr.totalBlogs) return prev

    return curr
  })

  return mostBlog
}

const mostLikes = (blogs) => {
  const uniqueAuthors = [...new Set(blogs.map(bl => bl.author))]
  const uniqueBlogs = uniqueAuthors.map(author => {
    const blogByAuthor = blogs.filter(blog => blog.author === author);
    const sumOfLikes = blogByAuthor.reduce((sum, blog) => sum + blog.likes, 0)

    return {
      author,
      likes: sumOfLikes
    }
  })

  const mostLikesBlog = uniqueBlogs.reduce((prev, curr) => {
    if(prev && prev.likes > curr.likes) return prev

    return curr
  })

  return mostLikesBlog
}

module.exports = {
  dummyList,
  totalLikes,
  favoriteBlog,
  mostBlog, 
  mostLikes
}