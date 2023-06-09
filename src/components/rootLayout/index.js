import Footer from "./Footer"
import NavBar from "./navBar"



const RootLayout = ({children}) => {


    return(
        <main className="flex flex-col min-h-screen">
            <NavBar />
            <div className="grow">
                 {children}
            </div>
            <Footer />
        </main>
    )
}


export default RootLayout