
const dummyList = (blogs) => {
  return 1
};

const totalLikes = (blogs) => {
  const reducer = blogs.reduce((acc, curr) => acc + curr.likes, 0)
  return blogs.length === 1 ? blogs[0].likes : reducer;
}


module.exports = {
  dummyList,
  totalLikes
}