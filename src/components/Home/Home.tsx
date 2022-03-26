import { WallMeasures } from "../WallMeasures"
import { PaintCans } from "../PaintCans"
import { Content, Main, Title4 } from "./Home.styles"
import { Requirements } from "../Requirements"

export const Home = () => {
  return (
    <>
      <Main>

      <Title4>Para calcular a quantidade de tinta para pintura preencha os dados abaixo:</Title4>

      <Content>

        <section>

          <WallMeasures />
        
        </section>

        <section>

          <Requirements />

          <PaintCans />

        </section>

      </Content>

      </Main>
    </>
  )
}
