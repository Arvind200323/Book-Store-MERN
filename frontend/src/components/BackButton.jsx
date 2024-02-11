import { Link } from 'react-router-dom'
import { BsArrowLeft } from 'react-icons/bs'

const BackButton = ({ dest = '/'}) => {
  return (
    <div className='flex'>
        <Link to={dest} className='bg-purple-800 text-white px-4 py-1 rounded-lg w-fit'>
            <BsArrowLeft></BsArrowLeft>
        </Link>
    </div>
  )
}

export default BackButton