import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(139, 10, 80, 0.9) 0%, rgba(10, 10, 10, 0.9) 100%),
              url('https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920') center/cover;
  position: relative;
  padding-top: 80px;
`;

export const HeroContent = styled.div`
  text-align: center;
  animation: ${fadeIn} 1s ease-out;
`;

export const HeroTitle = styled.h1`
  font-size: ${props => props.theme.fontSizes['6xl']};
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.text};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes['4xl']};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes['3xl']};
  }
`;

export const HeroSubtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing['2xl']};
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes.lg};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes.base};
  }
`;

export const SectionTitle = styled.h2`
  font-size: ${props => props.theme.fontSizes['4xl']};
  text-align: center;
  margin-bottom: ${props => props.theme.spacing.lg};
  color: ${props => props.theme.colors.secondary};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: ${props => props.theme.fontSizes['3xl']};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes['2xl']};
  }
`;

export const SectionSubtitle = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  text-align: center;
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing['3xl']};
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: ${props => props.theme.fontSizes.base};
  }
`;

export const SuitesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${props => props.theme.spacing['2xl']};
  margin-top: ${props => props.theme.spacing['3xl']};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const SuiteCard = styled.div`
  background-color: ${props => props.theme.colors.backgroundCard};
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  transition: all ${props => props.theme.transitions.normal};
  border: 1px solid ${props => props.theme.colors.border};

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${props => props.theme.shadows.xl};
    border-color: ${props => props.theme.colors.primary};
  }
`;

export const SuiteImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const SuiteContent = styled.div`
  padding: ${props => props.theme.spacing.xl};
`;

export const SuiteTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes['2xl']};
  margin-bottom: ${props => props.theme.spacing.md};
  color: ${props => props.theme.colors.secondary};
`;

export const SuiteDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing.lg};
  line-height: 1.6;
`;

export const SuiteFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${props => props.theme.spacing.sm};
`;

export const Feature = styled.div`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.text};
  padding: ${props => props.theme.spacing.sm};
  background-color: ${props => props.theme.colors.backgroundLight};
  border-radius: ${props => props.theme.borderRadius.sm};
`;

export const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

export const AboutText = styled.p`
  font-size: ${props => props.theme.fontSizes.lg};
  color: ${props => props.theme.colors.textSecondary};
  margin-bottom: ${props => props.theme.spacing.xl};
  line-height: 1.8;
  text-align: center;
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${props => props.theme.spacing.xl};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const InfoCard = styled.div`
  background-color: ${props => props.theme.colors.backgroundCard};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.xl};
  text-align: center;
  border: 1px solid ${props => props.theme.colors.border};
  transition: all ${props => props.theme.transitions.normal};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.lg};
    border-color: ${props => props.theme.colors.primary};
  }
`;

export const InfoIcon = styled.div`
  font-size: ${props => props.theme.fontSizes['4xl']};
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const InfoTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.secondary};
  margin-bottom: ${props => props.theme.spacing.sm};
`;

export const InfoText = styled.p`
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
`;

export const PromotionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${props => props.theme.spacing['2xl']};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const PromotionCard = styled.div`
  background-color: ${props => props.theme.colors.backgroundCard};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.xl};
  border: 1px solid ${props => props.theme.colors.border};
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
  transition: all ${props => props.theme.transitions.normal};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.xl};
    border-color: ${props => props.theme.colors.primary};
  }
`;

export const PromotionBadge = styled.span`
  position: absolute;
  top: ${props => props.theme.spacing.md};
  right: ${props => props.theme.spacing.md};
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.primaryLight});
  color: ${props => props.theme.colors.text};
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: ${props => props.theme.borderRadius.full};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: 600;
`;

export const PromotionTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes['2xl']};
  color: ${props => props.theme.colors.secondary};
  margin-top: ${props => props.theme.spacing.lg};
`;

export const PromotionDescription = styled.p`
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
  flex: 1;
`;

export const PromotionPrice = styled.div`
  font-size: ${props => props.theme.fontSizes['3xl']};
  color: ${props => props.theme.colors.primary};
  font-weight: 700;
  font-family: ${props => props.theme.fonts.secondary};
`;

export const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${props => props.theme.spacing['3xl']};
  margin-bottom: ${props => props.theme.spacing['3xl']};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const ContactInfo = styled.div`
  h3 {
    font-size: ${props => props.theme.fontSizes['2xl']};
    color: ${props => props.theme.colors.secondary};
    margin-bottom: ${props => props.theme.spacing.xl};
  }

  p {
    font-size: ${props => props.theme.fontSizes.base};
    color: ${props => props.theme.colors.textSecondary};
    margin-bottom: ${props => props.theme.spacing.lg};
    line-height: 1.8;
  }

  strong {
    color: ${props => props.theme.colors.text};
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.lg};
`;

export const FormGroup = styled.div`
  width: 100%;
`;

export const WhatsAppButton = styled.a`
  position: fixed;
  bottom: ${props => props.theme.spacing.xl};
  right: ${props => props.theme.spacing.xl};
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
  border-radius: ${props => props.theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  box-shadow: ${props => props.theme.shadows.xl};
  z-index: 999;
  transition: all ${props => props.theme.transitions.fast};

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(37, 211, 102, 0.4);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 50px;
    height: 50px;
    bottom: ${props => props.theme.spacing.lg};
    right: ${props => props.theme.spacing.lg};
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  margin-top: ${props => props.theme.spacing['2xl']};
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.lg};
`;

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${props => props.theme.spacing['2xl']};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

export const BlogCard = styled.div`
  background-color: ${props => props.theme.colors.backgroundCard};
  border-radius: ${props => props.theme.borderRadius.lg};
  overflow: hidden;
  border: 1px solid ${props => props.theme.colors.border};
  transition: all ${props => props.theme.transitions.normal};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.xl};
    border-color: ${props => props.theme.colors.primary};
  }
`;

export const BlogImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const BlogContent = styled.div`
  padding: ${props => props.theme.spacing.xl};
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.md};
`;

export const BlogDate = styled.span`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.textMuted};
`;

export const BlogTitle = styled.h3`
  font-size: ${props => props.theme.fontSizes.xl};
  color: ${props => props.theme.colors.secondary};
`;

export const BlogExcerpt = styled.p`
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.6;
`;

export const TestimonialsSection = styled.section`
  background-color: ${props => props.theme.colors.backgroundLight};
  padding: ${props => props.theme.spacing['4xl']} 0;
  margin: ${props => props.theme.spacing['4xl']} 0;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: ${props => props.theme.spacing['3xl']} 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing['2xl']} 0;
  }
`;

export const TestimonialCard = styled.div`
  background-color: ${props => props.theme.colors.backgroundCard};
  border-radius: ${props => props.theme.borderRadius.lg};
  padding: ${props => props.theme.spacing.xl};
  border: 1px solid ${props => props.theme.colors.border};
  transition: all ${props => props.theme.transitions.normal};

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${props => props.theme.shadows.lg};
    border-color: ${props => props.theme.colors.primary};
  }
`;

export const TestimonialText = styled.p`
  font-size: ${props => props.theme.fontSizes.base};
  color: ${props => props.theme.colors.textSecondary};
  line-height: 1.8;
  font-style: italic;
  margin-bottom: ${props => props.theme.spacing.md};
`;

export const TestimonialAuthor = styled.p`
  font-size: ${props => props.theme.fontSizes.sm};
  color: ${props => props.theme.colors.secondary};
  font-weight: 600;
  text-align: right;
`;
