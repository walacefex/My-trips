import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/" aria-label="Home">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>
    <S.Body>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
        accusamus officiis fugiat praesentium nam cumque numquam tenetur illo
        molestiae deserunt. Perferendis mollitia quisquam magnam repellat
        aliquid, incidunt a et placeat?
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
