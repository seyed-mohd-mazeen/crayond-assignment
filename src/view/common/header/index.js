/*
*
* index.js
* @author - Mazeen
* @date - 1 November, 2022
**/
import './style.css';

const Header = () => {
    return (
        <header>
            <div class="wrapper">
                <div class="row">
                    <div class="cell-477w">
                        <h2 class="logo-text">Evento<strong>.</strong></h2>
                    </div>
                    <div class="cell-1 t-right">
                        <ul class="nav-list">
                            <li><a href="#">HOME</a></li>
                            <li><a href="#">SPEAKERS</a></li>
                            <li><a href="#">EVENTS</a></li>
                            <li><a href="#">NEWS</a></li>
                            <li><a href="#">CONTACT</a></li>
                            <li><a href="#"><i class="fa-solid fa-magnifying-glass"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;