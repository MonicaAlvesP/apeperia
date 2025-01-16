import { FaCheckCircle, FaInfinity } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";

import s from './cards.module.scss';

export const Cards = () => {
  return (
    <section className={s.container}>
      <h1>Planos</h1>
      <section className={s.cards}>
        <article className={s.card}>
          <h2>R$ 500,00</h2>
          <ul className={s.card_list}>
            <li>Aplicativos<span>01</span></li>

            <li>Manutenção Programadas<span>05</span></li>

            <li>Helpdesk 24hrs<FaCircleXmark className={s.notCheck} /></li>

            <li>App SEO<FaCheckCircle className={s.check} /></li>

            <li>Atendente Exclusivo<FaCircleXmark className={s.notCheck} /></li>

            <li>Sistema Operacional<span>01</span></li>
          </ul>
          <button>Assinar</button>
        </article>

        <article className={s.card}>
          <h2>R$ 1500,00</h2>
          <ul className={s.card_list}>
            <li>Aplicativos<span>03</span></li>

            <li>Manutenção Programadas<span>20</span></li>

            <li>Helpdesk 24hrs<FaCheckCircle className={s.check} /></li>

            <li>App SEO<FaCheckCircle className={s.check} /></li>

            <li>Atendente Exclusivo<FaCircleXmark className={s.notCheck} /></li>

            <li>Sistema Operacional<span>03</span></li>
          </ul>
          <button>Assinar</button>
        </article>

        <article className={s.card}>
          <h2>R$ 9500,00</h2>
          <ul className={s.card_list}>
            <li>Aplicativos<span>05</span></li>

            <li>Manutenção Programadas<FaInfinity /></li>

            <li>Helpdesk 24hrs<FaCheckCircle className={s.check} /></li>

            <li>App SEO<FaCheckCircle className={s.check} /></li>

            <li>Atendente Exclusivo<FaCheckCircle className={s.check} /></li>

            <li>Sistema Operacional<span>06</span></li>
          </ul>
          <button>Assinar</button>
        </article>
      </section>
    </section>
  );
}