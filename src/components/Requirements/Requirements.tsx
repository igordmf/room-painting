import { requirements } from '../../utils/requirements';
import { Container } from './Requirements.style'

export const Requirements = () => {
  return (
    <Container>
      <p>Especificações:</p>
      <ul>
        {requirements.map(requirement => (
          <li key={requirement}>{requirement}</li>
        ))}
      </ul>
    </Container>
  )
}
