import Home from "../freatures/welcome/pages/Home";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";

const DashbordLayout = () => {
    return(
        <div className="flex flex-col min-h-screen bg-gray-200">
            <Navbar />
            <main>
                <Home />
            </main>
            {/* <Footer />   */}
        </div>
    )
}

export default DashbordLayout;