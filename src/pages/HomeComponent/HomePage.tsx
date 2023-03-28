import SearchBar from "../../components/SearchBar/SearchBar";
import "./HomePage.css";
import RestaurantGallery from "../../components/RestaurantGallery/RestaurantGallery";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
function HomePage() {
  return (
    <main className="home-main">
      <HeaderComponent />
      <SearchBar />
      <h1 className="home-h1">Categories</h1>
      <div className="container">
      <section className="home-section">
        <img className="home-img" src="./assets/pizza.png" alt="pizza" />
        <p>Pizza</p>
        </section>
      <section className="home-section">
        <img className="home-img" src="./assets/burger.png" alt="burger" />
        <p>Buruger</p>
        </section>
      <section className="home-section">
        <img className="home-img" src="./assets/chinese.png" alt="chinese" />
        <p>Chinese</p>
        </section>
      <section className="home-section">
        <img className="home-img" src="./assets/pasta.png" alt="pasta" />
        <p>Pasta</p>
        </section>
      </div>
      <h1 className="home-h1">Restaurants</h1>
      <RestaurantGallery />
      <FooterComponent />
    </main>
  );
}
export default HomePage;
