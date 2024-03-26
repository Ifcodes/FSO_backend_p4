
const { test, describe } = require('node:test')
const assert = require('node:assert')
const { favoriteBlog, totalLikes, dummyList, mostBlog, mostLikes } = require('../utils/list_helpers')

describe('should return total likes', () => {
  const bloglist = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
      likes: 5,
      __v: 0
    },
    {
      _id: "5a422b3a1b54a676234d17f9",
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
      likes: 12,
      __v: 0
    },
    {
      _id: "5a422b891b54a676234d17fa",
      title: "First class tests",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
      likes: 10,
      __v: 0
    },
    {
      _id: "5a422ba71b54a676234d17fb",
      title: "TDD harms architecture",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
      likes: 10,
      __v: 0
    },
    {
      _id: "5a422bc61b54a676234d17fc",
      title: "Type wars",
      author: "Robert C. Martin",
      url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
      likes: 15,
      __v: 0
    } 
  ]

  mostLikes(bloglist)

  test('should return 1', () => {
    assert.equal(dummyList([]), 1)
  })

  test('should return the total likes for a single blogList', () => {
    const result = totalLikes(bloglist)
    assert.strictEqual(result, 52)
  })

  test('should match blog with highest likes', () => {
    const blogToTest = {
      title: "Type wars",
      author: "Robert C. Martin",
      likes: 15
    }
    assert.deepEqual(favoriteBlog(bloglist), blogToTest)
  })

  test('should return most blogs', () => {
    const blogToTest = {
      author: "Robert C. Martin",
      totalBlogs: 3
    }

    assert.deepEqual(mostBlog(bloglist), blogToTest)
  })

  test('should return most likes', () => {
    const mostLikedBlog = { author: 'Robert C. Martin', likes: 35 }

    assert.deepEqual(mostLikes(bloglist), mostLikedBlog)
  })
})