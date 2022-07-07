import Blogs from './blogs'
import Chief from './chief'
import Citys from './citys'
import Footer from './footer'
import Header from './header'
import Navbar from './navbar'
import Recomended from './recomended'
import Reviews from './reviews'
import Why from './why'



export default function HomePage (){
    return(
        <>
            <Navbar/>
            <Header/>
            <Chief/>
            <Why/>
            <Recomended/>
            <Citys/>
            <Reviews/>
            <Blogs/>
            <Footer/>
        </>
    )
}