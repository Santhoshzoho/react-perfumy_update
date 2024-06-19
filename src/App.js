import Navbar from "./Components/Navbar"
import SearchBar from "./Components/Searchbar"
import Product from "./Components/Product"
import About from "./Components/About"
import Footer from "./Components/Footer" 

function App(){
    return(
        <div>
        <Navbar></Navbar>
        <SearchBar></SearchBar>
        <Product></Product>
        <About></About>
        <Footer></Footer>
        </div>
    )
}

export default App