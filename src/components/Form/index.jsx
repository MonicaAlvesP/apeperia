import s from "./form.module.scss";

export const Form = () => {
  return (
    <form className={s.Form}>
      <h2>Contato</h2>
      <input type="text" id="name" name="name" placeholder="Digite seu nome" required />
      <input type="email" id="email" name="email" placeholder="Digite seu email" />
      <input type="text" id="subject" name="subject" placeholder="Digite o assunto" />
      <textarea id="message" name="message" placeholder="Mensagem"></textarea>
      <button type="submit">Enviar</button>
    </form>
  );
};