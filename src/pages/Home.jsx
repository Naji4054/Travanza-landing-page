import Banner from "../components/Banner"
import Destination from "../components/Popular-destination/Destination"
import Choose from "../components/Choose-us/choose"
import Vacation from "../components/plan-vacation/vacation"
const Home = () => {

    return (
        <>
        <main>
            <Banner/>
            <Destination/>
            <Choose/>
            <Vacation/>
            
        </main>
        <footer></footer>
        </>
    )
}

export default Home;