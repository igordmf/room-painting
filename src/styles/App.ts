import bgImage from '../assets/bg.webp'

export const AppStyles = {
  alignItems: 'center',
  color: '#fff',
  display: 'flex',
  flexDirection: 'column' as 'column',
  height: '100vh',
}

export const BgStyles = {
  backgroundImage: `url(${bgImage})`,
  backgroundPosition: '50% 0',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'scroll',
  bottom: '0',
  left: '0',
  minHeight: '100vh',
  minWidth: '100%',
  position: 'fixed' as 'fixed',
  right: '0',
  top: '0',
  zIndex: '-8',
}
