import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './screens/Home'
import CreateBooks from './screens/CreateBooks'
import ShowBook from './screens/ShowBook'
import EditBook from './screens/EditBook'
import DeleteBook from './screens/DeleteBook'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/books/create' element={<CreateBooks/>} />
      <Route path='/books/details/:id' element={<ShowBook/>} />
      <Route path='/books/edit/:id' element={<EditBook/>} />
      <Route path='/books/delete/:id' element={<DeleteBook/>} />
    </Routes>
  )
}

export default App
