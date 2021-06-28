import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initFilmsAC } from "../../redux/actions/actionCreator"
import CardSolo from './Card'


function CardsList() {

<<<<<<< HEAD
  const dispatch = useDispatch()
  const userFilms = useSelector(state => state.userfilms)
=======
 
>>>>>>> b806bba0cbcdf1c1e503c2b86f23ba294e75e8f8

  

<<<<<<< HEAD
  useEffect(() => {
    dispatch(initFilmsAC(userFilms))
  }, [dispatch])


  return (
    <div><h3>Подборка для юзера:</h3> {userFilms.map(film => <Card />)}</div>
=======


  // useEffect(() => {
  //   dispatch(initFilmsAC(films))
  // }, [dispatch])


  let films = useSelector(state => state.films)
  console.log(films);

  return (
    <div><h3>Подборка для юзера:</h3> {films.map(film => <CardSolo id={film.idKP} />)}</div>
>>>>>>> b806bba0cbcdf1c1e503c2b86f23ba294e75e8f8
  )
}

export default CardsList
