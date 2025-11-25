import React, { useState } from 'react';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { Container } from '../components/Container/Container';
import { Section } from '../components/Section/Section';
import { Button } from '../components/Button/Button';
import { Card } from '../components/Card/Card';
import { Input } from '../components/Input/Input';
import { Textarea } from '../components/Textarea/Textarea';
import { Carousel } from '../components/Carousel/Carousel';
import { 
  HeroSection, 
  HeroContent, 
  HeroTitle, 
  HeroSubtitle,
  SectionTitle,
  SectionSubtitle,
  SuitesGrid,
  SuiteCard,
  SuiteImage,
  SuiteContent,
  SuiteTitle,
  SuiteDescription,
  SuiteFeatures,
  Feature,
  AboutContent,
  AboutText,
  InfoGrid,
  InfoCard,
  InfoIcon,
  InfoTitle,
  InfoText,
  PromotionsGrid,
  PromotionCard,
  PromotionBadge,
  PromotionTitle,
  PromotionDescription,
  PromotionPrice,
  ContactGrid,
  ContactInfo,
  ContactForm,
  FormGroup,
  WhatsAppButton,
  MapContainer,
  BlogGrid,
  BlogCard,
  BlogImage,
  BlogContent,
  BlogTitle,
  BlogExcerpt,
  BlogDate,
  TestimonialsSection,
  TestimonialCard,
  TestimonialText,
  TestimonialAuthor
} from './Home.styles';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const suiteImages = [
    { src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800', alt: 'Suíte Romântica' },
    { src: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800', alt: 'Suíte Luxo' },
    { src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800', alt: 'Suíte Premium' }
  ];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <HeroSection id="inicio">
        <Container>
          <HeroContent>
            <HeroTitle>Bem-vindo ao Ponto G Motel</HeroTitle>
            <HeroSubtitle>
              Onde conforto, privacidade e sofisticação se encontram para criar momentos inesquecíveis
            </HeroSubtitle>
            <Button size="large" onClick={() => document.getElementById('suites').scrollIntoView({ behavior: 'smooth' })}>
              Ver Suítes
            </Button>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* Suítes Section */}
      <Section id="suites">
        <Container>
          <SectionTitle>Nossas Suítes</SectionTitle>
          <SectionSubtitle>Ambientes sofisticados e confortáveis para sua experiência perfeita</SectionSubtitle>
          
          <Carousel images={suiteImages} />

          <SuitesGrid>
            <SuiteCard>
              <SuiteImage src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600" alt="Suíte Romântica" />
              <SuiteContent>
                <SuiteTitle>Suíte Romântica</SuiteTitle>
                <SuiteDescription>
                  Ambiente aconchegante com decoração elegante, ideal para momentos especiais a dois.
                </SuiteDescription>
                <SuiteFeatures>
                  <Feature>✓ Hidromassagem</Feature>
                  <Feature>✓ TV Smart 50"</Feature>
                  <Feature>✓ Ar Condicionado</Feature>
                  <Feature>✓ Frigobar</Feature>
                </SuiteFeatures>
              </SuiteContent>
            </SuiteCard>

            <SuiteCard>
              <SuiteImage src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=600" alt="Suíte Luxo" />
              <SuiteContent>
                <SuiteTitle>Suíte Luxo</SuiteTitle>
                <SuiteDescription>
                  Espaço amplo com acabamento premium e todas as comodidades para seu conforto.
                </SuiteDescription>
                <SuiteFeatures>
                  <Feature>✓ Banheira de Hidromassagem</Feature>
                  <Feature>✓ TV Smart 55"</Feature>
                  <Feature>✓ Sistema de Som</Feature>
                  <Feature>✓ Varanda Privativa</Feature>
                </SuiteFeatures>
              </SuiteContent>
            </SuiteCard>

            <SuiteCard>
              <SuiteImage src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600" alt="Suíte Premium" />
              <SuiteContent>
                <SuiteTitle>Suíte Premium</SuiteTitle>
                <SuiteDescription>
                  Nossa suíte mais exclusiva, com design sofisticado e amenidades de alto padrão.
                </SuiteDescription>
                <SuiteFeatures>
                  <Feature>✓ Spa Privativo</Feature>
                  <Feature>✓ TV Smart 65"</Feature>
                  <Feature>✓ Iluminação Personalizada</Feature>
                  <Feature>✓ Adega Climatizada</Feature>
                </SuiteFeatures>
              </SuiteContent>
            </SuiteCard>
          </SuitesGrid>
        </Container>
      </Section>

      {/* Sobre Section */}
      <Section id="sobre">
        <Container>
          <SectionTitle>Sobre o Ponto G Motel</SectionTitle>
          <AboutContent>
            <AboutText>
              O Ponto G Motel é referência em hospitalidade e conforto na região. Com mais de 15 anos de experiência, 
              oferecemos ambientes sofisticados e discretos para casais que buscam privacidade e momentos especiais.
            </AboutText>
            <AboutText>
              Nossas instalações são projetadas com atenção aos mínimos detalhes, garantindo uma experiência única 
              e memorável. Cada suíte é cuidadosamente decorada e equipada com as melhores comodidades do mercado.
            </AboutText>
            <AboutText>
              Valorizamos a privacidade dos nossos hóspedes e mantemos os mais altos padrões de higiene e segurança. 
              Nossa equipe está sempre pronta para proporcionar um atendimento excepcional e discreto.
            </AboutText>
          </AboutContent>
        </Container>
      </Section>

      {/* Privacidade e Segurança Section */}
      <Section id="privacidade">
        <Container>
          <SectionTitle>Privacidade e Segurança</SectionTitle>
          <SectionSubtitle>Sua tranquilidade é nossa prioridade</SectionSubtitle>
          
          <InfoGrid>
            <InfoCard>
              <InfoIcon>🔒</InfoIcon>
              <InfoTitle>Acesso Privativo</InfoTitle>
              <InfoText>
                Garagens individuais com acesso direto à suíte, garantindo total discrição e privacidade.
              </InfoText>
            </InfoCard>

            <InfoCard>
              <InfoIcon>📹</InfoIcon>
              <InfoTitle>Segurança 24h</InfoTitle>
              <InfoText>
                Sistema de monitoramento nas áreas comuns e equipe de segurança presente durante todo o período.
              </InfoText>
            </InfoCard>

            <InfoCard>
              <InfoIcon>🚪</InfoIcon>
              <InfoTitle>Entrada Discreta</InfoTitle>
              <InfoText>
                Check-in e check-out discretos, sem necessidade de contato direto com a recepção.
              </InfoText>
            </InfoCard>

            <InfoCard>
              <InfoIcon>🔐</InfoIcon>
              <InfoTitle>Dados Protegidos</InfoTitle>
              <InfoText>
                Seus dados pessoais são protegidos e nunca compartilhados com terceiros.
              </InfoText>
            </InfoCard>
          </InfoGrid>
        </Container>
      </Section>

      {/* Conforto e Higiene Section */}
      <Section id="conforto">
        <Container>
          <SectionTitle>Conforto e Higiene</SectionTitle>
          <SectionSubtitle>Padrões elevados de limpeza e manutenção</SectionSubtitle>
          
          <InfoGrid>
            <InfoCard>
              <InfoIcon>✨</InfoIcon>
              <InfoTitle>Limpeza Profunda</InfoTitle>
              <InfoText>
                Higienização completa entre cada hospedagem com produtos de alta qualidade e protocolos rigorosos.
              </InfoText>
            </InfoCard>

            <InfoCard>
              <InfoIcon>🛏️</InfoIcon>
              <InfoTitle>Roupas de Cama Premium</InfoTitle>
              <InfoText>
                Lençóis e toalhas 100% algodão, trocados e higienizados após cada uso.
              </InfoText>
            </InfoCard>

            <InfoCard>
              <InfoIcon>🌡️</InfoIcon>
              <InfoTitle>Climatização Perfeita</InfoTitle>
              <InfoText>
                Ar condicionado em todas as suítes com manutenção preventiva regular e filtros limpos.
              </InfoText>
            </InfoCard>

            <InfoCard>
              <InfoIcon>💧</InfoIcon>
              <InfoTitle>Água Aquecida</InfoTitle>
              <InfoText>
                Sistema de aquecimento de água de alta eficiência para seu conforto total.
              </InfoText>
            </InfoCard>
          </InfoGrid>
        </Container>
      </Section>

      {/* Promoções Section */}
      <Section id="promocoes">
        <Container>
          <SectionTitle>Promoções Especiais</SectionTitle>
          <SectionSubtitle>Aproveite nossas ofertas exclusivas</SectionSubtitle>
          
          <PromotionsGrid>
            <PromotionCard>
              <PromotionBadge>Promoção</PromotionBadge>
              <PromotionTitle>Pacote Romântico</PromotionTitle>
              <PromotionDescription>
                4 horas na suíte romântica + espumante + decoração especial
              </PromotionDescription>
              <PromotionPrice>R$ 299,90</PromotionPrice>
              <Button variant="secondary">Reservar Agora</Button>
            </PromotionCard>

            <PromotionCard>
              <PromotionBadge>Destaque</PromotionBadge>
              <PromotionTitle>Pacote Luxo</PromotionTitle>
              <PromotionDescription>
                6 horas na suíte luxo + jantar + café da manhã
              </PromotionDescription>
              <PromotionPrice>R$ 499,90</PromotionPrice>
              <Button variant="secondary">Reservar Agora</Button>
            </PromotionCard>

            <PromotionCard>
              <PromotionBadge>Exclusivo</PromotionBadge>
              <PromotionTitle>Pacote Premium</PromotionTitle>
              <PromotionDescription>
                Pernoite na suíte premium + spa + refeições completas
              </PromotionDescription>
              <PromotionPrice>R$ 799,90</PromotionPrice>
              <Button variant="secondary">Reservar Agora</Button>
            </PromotionCard>
          </PromotionsGrid>
        </Container>
      </Section>

      {/* Depoimentos Section */}
      <TestimonialsSection>
        <Container>
          <SectionTitle>O Que Nossos Clientes Dizem</SectionTitle>
          <SectionSubtitle>Experiências reais de quem já nos visitou</SectionSubtitle>
          
          <InfoGrid>
            <TestimonialCard>
              <TestimonialText>
                "Lugar incrível! Suíte impecável, atendimento discreto e tudo muito limpo. 
                Com certeza voltaremos mais vezes."
              </TestimonialText>
              <TestimonialAuthor>— Ana e Carlos</TestimonialAuthor>
            </TestimonialCard>

            <TestimonialCard>
              <TestimonialText>
                "A privacidade e o conforto são incomparáveis. As suítes são lindas e 
                muito bem equipadas. Recomendo!"
              </TestimonialText>
              <TestimonialAuthor>— Mariana e Pedro</TestimonialAuthor>
            </TestimonialCard>

            <TestimonialCard>
              <TestimonialText>
                "Melhor motel da região! Ambiente sofisticado, limpo e aconchegante. 
                O pacote romântico é perfeito!"
              </TestimonialText>
              <TestimonialAuthor>— Julia e Rafael</TestimonialAuthor>
            </TestimonialCard>
          </InfoGrid>
        </Container>
      </TestimonialsSection>

      {/* Blog Section */}
      <Section id="blog">
        <Container>
          <SectionTitle>Blog</SectionTitle>
          <SectionSubtitle>Dicas e novidades para tornar sua experiência ainda melhor</SectionSubtitle>
          
          <BlogGrid>
            <BlogCard>
              <BlogImage src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600" alt="Post 1" />
              <BlogContent>
                <BlogDate>20 de Novembro, 2024</BlogDate>
                <BlogTitle>Como Escolher a Suíte Perfeita</BlogTitle>
                <BlogExcerpt>
                  Descubra qual suíte combina mais com o momento que você deseja criar. 
                  Conheça as características de cada ambiente...
                </BlogExcerpt>
                <Button variant="outline" size="small">Ler Mais</Button>
              </BlogContent>
            </BlogCard>

            <BlogCard>
              <BlogImage src="https://images.unsplash.com/photo-1540518614846-7eded433c457?w=600" alt="Post 2" />
              <BlogContent>
                <BlogDate>15 de Novembro, 2024</BlogDate>
                <BlogTitle>Dicas para um Encontro Romântico</BlogTitle>
                <BlogExcerpt>
                  Planeje o encontro perfeito com nossas sugestões especiais. 
                  Desde a escolha da suíte até os detalhes que fazem a diferença...
                </BlogExcerpt>
                <Button variant="outline" size="small">Ler Mais</Button>
              </BlogContent>
            </BlogCard>

            <BlogCard>
              <BlogImage src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600" alt="Post 3" />
              <BlogContent>
                <BlogDate>10 de Novembro, 2024</BlogDate>
                <BlogTitle>Novidades nas Suítes Premium</BlogTitle>
                <BlogExcerpt>
                  Conheça as melhorias e novos recursos que implementamos nas nossas 
                  suítes premium para sua experiência ser ainda melhor...
                </BlogExcerpt>
                <Button variant="outline" size="small">Ler Mais</Button>
              </BlogContent>
            </BlogCard>
          </BlogGrid>
        </Container>
      </Section>

      {/* Contato Section */}
      <Section id="contato">
        <Container>
          <SectionTitle>Entre em Contato</SectionTitle>
          <SectionSubtitle>Estamos prontos para atendê-lo</SectionSubtitle>
          
          <ContactGrid>
            <ContactInfo>
              <h3>Informações de Contato</h3>
              <p><strong>Endereço:</strong><br />Rua Exemplo, 123 - Bairro Central<br />São Paulo, SP - CEP 01234-567</p>
              <p><strong>Telefone:</strong><br />(11) 99999-9999</p>
              <p><strong>Email:</strong><br />contato@pontogmotel.com.br</p>
              <p><strong>Horário:</strong><br />Aberto 24 horas, 7 dias por semana</p>
            </ContactInfo>

            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <Input 
                  label="Nome Completo"
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Input 
                  label="Telefone"
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Textarea 
                  label="Mensagem"
                  id="message"
                  name="message"
                  placeholder="Como podemos ajudá-lo?"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>

              <Button type="submit" size="large">Enviar Mensagem</Button>
            </ContactForm>
          </ContactGrid>

          <MapContainer>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975739990304!2d-46.65444492378056!3d-23.561414478788995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </MapContainer>
        </Container>
      </Section>

      <WhatsAppButton 
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Contato via WhatsApp"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </WhatsAppButton>

      <Footer />
    </>
  );
}
