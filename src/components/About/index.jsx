import s from './about.module.scss';

import { FaAndroid, FaApple, FaWindows } from "react-icons/fa";

export const About = () => {
  return (
    <section className={s.container}>
      <h2>Sobre Nós</h2>
      <section className={s.content}>
        <div className={s.about}>
          <h3>O que fazemos</h3>
          <p>Na Apeperia, criamos aplicativos personalizados de forma inovadora. Diferente do modelo tradicional, onde o desenvolvimento do aplicativo é um projeto único e a manutenção é tratada como um custo adicional, introduzimos um novo modelo de negócios: você assina nosso serviço, nós desenvolvemos o aplicativo e garantimos que a manutenção esteja sempre incluída. Assim, você pode focar no seu negócio enquanto mantém seu aplicativo sempre atualizado.</p>
          <p>Com equipes especializadas e dedicadas a projetos exclusivos, agora é o momento ideal para sua empresa ter um aplicativo próprio, com qualidade e eficiência.</p>
        </div>

        <div className={s.multiplatform}>
          <h3>Multiplataformas</h3>
          <p>Na Apeperia, abraçamos todas as plataformas! Desenvolvemos aplicativos incríveis para qualquer dispositivo, garantindo que sua solução alcance o maior número de usuários possível.</p>
          <p>Seja para iOS, Android, Windows, estamos prontos para transformar sua ideia em realidade com excelência e compatibilidade total.</p>
          <div className={s.logos}>
            <FaApple />
            <FaAndroid />
            <FaWindows />
          </div>
        </div>
      </section>
    </section>
  )
}