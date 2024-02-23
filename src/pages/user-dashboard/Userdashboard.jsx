import "./userdashboard.css";
import Menu from "../../components/menu/Menu";
import Header from "../../components/header/Header";
import Board from "../../components/board/Board";

const Userdashboard = () => {
  return (
    <main className="user-dashboard-container">
      <section className="left-section-userdashboard-container">
        <Menu />
      </section>
      <section className="right-section-userdashboard-container">
        <div className="right-section-userdashboard-container-top">
          <article className="right-section-userdashboard-container-top-in">
            <Header />
          </article>
        </div>
        <div className="right-section-userdashboard-container-down">
          <Board />
        </div>
      </section>
    </main>
  );
};

export default Userdashboard;
