import { Link } from 'react-router-dom'
import Style from './Routers/App.module.css'
import Button from './components/Button'
function App() {
  return (
    <>
    <nav style={{
      display: 'flex',
      backgroundColor: 'pink',
      justifyContent:'space-between'
    }}>
      <Link to ="/" className={Style.link}>BeautySkincare</Link>

    <div className="">
      <Link to ="/menu" className={Style.link}>Menu</Link>
      <Link to ="/order" className={Style.link}>Order</Link>
      <Link to ="/aboutus" className={Style.link}>About Us</Link>
    </div>
    </nav>
      <h1 
      className="text-2xl hover:font-bold hover:cursor-pointer active:underline"
      >Praktikum A2 Pagi
      </h1>
      <Button className=" bg-green-400 text-white hover:bg-green-500">
        Button 1
        </Button>
        <Button className=" bg-red-400 text-white hover:bg-red-500">
        Button 2
        </Button>
        <button className=''>aa</button>
    </>
  )
}

export default App