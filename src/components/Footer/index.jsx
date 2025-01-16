import Logo from '@img/logo.png';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import s from './footer.module.scss';

export const Footer = () => {
  return (
    <>
      <footer className={s.Footer}>
        <img src={Logo} alt="Logo da apeperia" />
        <section className={s.FooterSections}>
          <h4>Formas de Pagamento</h4>
          <div className={s.PaymentMethods}>
            <img src="https://img.icons8.com/?size=100&id=22128&format=png&color=002335" alt="credito" />
            <small>Cartão de crédito</small>
          </div>

          <div className={s.PaymentMethods}>
            <img src="https://img.icons8.com/?size=100&id=11878&format=png&color=002335" alt="boleto" />
            <small>Boleto</small>
          </div>

          <div className={s.PaymentMethods}>
            <img src="https://img.icons8.com/?size=100&id=uqpbD9vhCDEQ&format=png&color=002335" alt="pix" />
            <small>pix</small>
          </div>
        </section>

        <section className={s.FooterSections}>
          <h4>Links</h4>
          <ul className={s.FooterLinks}>
            <li>Home</li>
            <li>Sobre</li>
            <li>Planos</li>
            <li>Blog</li>
            <li>Contato</li>
          </ul>
        </section>

        <section className={s.FooterSections}>
          <h4>Contato</h4>
          <p>Telefone: (11) 99999-9999</p>
          <p>Email: apeperia@mail.com.br</p>
          <p>Endereço: Rua dos Bobos, 0</p>
          <div className={s.FooterSocial}>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </section>
      </footer>
      <p className={s.license}>&copy; 2024 Apeperia - Todos os direitos reservados.</p>
    </>
  )
}