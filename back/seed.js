const { disconnect, connect } = require('./src/db/connect')
const FilmModel = require('./models/film')

const allMovies = [
  {
    title: "Wedding",
    picture: "https://memepedia.ru/wp-content/uploads/2017/04/%D1%81%D0%B2%D0%B8%D0%B4%D0%B5%D1%82%D0%B5%D0%BB%D1%8C-%D0%B8%D0%B7-%D1%84%D1%80%D1%8F%D0%B7%D0%B8%D0%BD%D0%BE.jpg",
  },

]

async function seed() {
  connect()
  await Promise.all(allMovies.map((movie) => FilmModel.create(movie)))
  disconnect()
}

seed()
