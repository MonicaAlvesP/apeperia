import s from './banner.module.scss';

export const Banner = () => {
  return (
    <section className={s.BannerHero}>
      <div className={s.BannerHeroContent}>
        <h1>Aplicativos sob medida</h1>
        <h4>para pequenas e médias empresas!</h4>
        <p>A apeperia é o jeito inovador de comprar Apps, você assina um plano, nós criamos os apps e fazemos toda a manutenção!</p>
        <button>Conheça nossos planos</button>
      </div>
    </section>
  )
}