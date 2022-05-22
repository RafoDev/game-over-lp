import React from 'react'

const Contact = () => {
    return (
        <section className="contact">
			<h2 className="contact__title">Contacto</h2>
			<div className="contact-container">
				<form action="" className="contact__form" id="contactForm" method="POST">
					<select name="" id="" className="contact__form-select">
						<option value="" className="contact__form-option">La Victoria</option>
						<option value="" className="contact__form-option">Cercado de Lima</option>
						<option value="" className="contact__form-option">San Isidro</option>
						<option value="" className="contact__form-option">Miraflores</option>
						<option value="" className="contact__form-option">San Martin de Porres</option>
						<option value="" className="contact__form-option">San Juan de Miraflores</option>
					</select>
					<input type="text" id="txtNom" name="txtNom" className="contact__form-input" placeholder="Nombres"/>
					<p id="nombre" className="contact__form-response"></p>
					<textarea name="" id="txtArea" name="txtArea" className="contact__form-input"
						placeholder="Mensaje"></textarea>
					<p id="mensaje" className="contact__form-response"></p>
					<input type="text" id="txtCel" name="txtCel" className="contact__form-input" placeholder="Telefono"/>
					<p id="celular" className="contact__form-response"></p>
					<input type="text" id="txtEmail" name="txtEmail" className="contact__form-input"
						placeholder="CorreoElectronico"/>
					<p id="email" className="contact__form-response"></p>
					<button type="submit" className="contact__form-button">Registrar</button>
				</form>
			</div>
		</section>
    )
}

export default Contact