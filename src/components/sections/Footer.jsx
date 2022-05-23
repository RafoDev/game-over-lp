import React from 'react'

const Footer = () => {
  return (
    <footer className="footer" id="contacto">
		<div className="footer-container">
			<form className="footer__form">
				<h2 className="footer__form-title">Suscríbete</h2>
				<input type="text" className="footer__form-input" placeholder="Escribe tu email aquí"/>
				<button className="footer__form-boton">Enviar</button>
			</form>

			<nav className="footer__social-media-container">
				<ul className="footer__link-list">
					<li className="footer__link-item"><a href="#" className="footer__link"><i
								className="fa-brands fa-facebook"></i></a>
					</li>
					<li className="footer__link-item"><a href="#" className="footer__link"><i
								className="fa-brands fa-instagram"></i></a></li>
					<li className="footer__link-item"><a href="#" className="footer__link"><i
								className="fa-brands fa-twitter"></i></a>
					</li>
					<li className="footer__link-item"><a href="#" className="footer__link"><i
								className="fa-brands fa-youtube"></i></a>
					</li>
				</ul>
			</nav>
		</div>
	</footer>
  )
}

export default Footer

