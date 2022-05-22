import React from 'react'

const Footer = () => {
  return (
    <footer className="footer" id="contacto">
		<div className="footer-container">
			<div className="footer__information">
				<article className="footer__contacto-container">
					<h2 className="footer__contacto-title">Contacto</h2>
					<h3 className="footer__contacto-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Doloremque, blanditiis.</h3>
				</article>
				<article className="footer__servicios-container">
					<h2 className="footer__servicios-title">Servicios</h2>
					<h3 className="footer__servicios-description">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
						Doloremque, blanditiis.</h3>
				</article>
			</div>
			<form className="footer__form">
				<h2 className="footer__form-title">Escríbenos</h2>
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

