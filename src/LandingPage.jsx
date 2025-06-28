import React from 'react';
import { 
  Box, 
  Button, 
  Typography, 
  Container, 
  AppBar, 
  Toolbar, 
  useMediaQuery,
  useTheme,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Card,
  CardContent,
  Chip,
  Grid
} from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import profilePhoto from '../src/assets/Pictures/photo.jpg';
import OoredooLogo from '../src/assets/Pictures/ooredoo.svg';
import AlQudsLogo from '../src/assets/Pictures/aqu.png';
import MalardalenLogo from '../src/assets/Pictures/mdu.png';

// Styled Components for Navigation
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(247, 251, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(91, 61, 246, 0.1)',
  position: 'fixed',
  top: 0,
  zIndex: 1100,
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  cursor: 'pointer',
  transition: 'transform 0.2s ease',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const LogoText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(135deg, #5b3df6, #3b82f6)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  fontSize: '1.8rem',
  fontWeight: 800,
  letterSpacing: '-0.02em',
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.primary,
  fontWeight: 500,
  fontSize: '0.95rem',
  textTransform: 'none',
  padding: theme.spacing(1, 2),
  borderRadius: theme.spacing(1),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(91, 61, 246, 0.08)',
    color: '#5b3df6',
    transform: 'translateY(-1px)',
  },
}));

const ContactButton = styled(Button)(({ theme }) => ({
  borderColor: '#5b3df6',
  color: '#5b3df6',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: theme.spacing(1.5),
  padding: theme.spacing(1, 3),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#5b3df6',
    color: '#fff',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(91, 61, 246, 0.3)',
  },
}));

// Slide Container for fullpage scrolling
const SlideContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
}));

// Home Slide Styles
const MainSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  padding: theme.spacing(4, 0),
  gap: theme.spacing(8),
  maxWidth: '1400px',
  margin: '0 auto',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    textAlign: 'center',
    gap: theme.spacing(4),
  },
}));

const ContentBox = styled(Box)(({ theme }) => ({
  flex: '1 1 50%',
  maxWidth: 600,
  [theme.breakpoints.down('lg')]: {
    maxWidth: '100%',
    order: 2,
  },
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  flex: '1 1 45%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  maxWidth: 500,
  [theme.breakpoints.down('lg')]: {
    order: 1,
    maxWidth: 400,
  },
}));

const DecorativeContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: '100%',
  maxWidth: 450,
  height: 450,
  borderRadius: 40,
  background: `
    linear-gradient(135deg, 
      rgba(91, 61, 246, 0.08) 0%, 
      rgba(59, 130, 246, 0.12) 25%,
      rgba(247, 251, 255, 0.9) 50%,
      rgba(91, 61, 246, 0.06) 75%,
      rgba(59, 130, 246, 0.08) 100%
    )
  `,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
  border: '1px solid rgba(91, 61, 246, 0.1)',
  boxShadow: '0 20px 60px rgba(91, 61, 246, 0.08)',
  [theme.breakpoints.down('md')]: {
    width: 350,
    height: 350,
    borderRadius: 32,
  },
}));

const ProfileImageContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: 300,
  height: 300,
  borderRadius: '50%',
  overflow: 'hidden',
  border: '4px solid rgba(255, 255, 255, 0.9)',
  boxShadow: '0 15px 40px rgba(91, 61, 246, 0.15)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.03)',
    boxShadow: '0 20px 50px rgba(91, 61, 246, 0.2)',
  },
  [theme.breakpoints.down('md')]: {
    width: 240,
    height: 240,
  },
}));

const ProfileImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center center',
  display: 'block',
}));

// Experience Slide Styles
const ExperienceSection = styled(Box)(({ theme }) => ({
  height: '100vh',
  backgroundColor: '#ffffff',
  padding: theme.spacing(8, 0),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  overflow: 'auto',
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
  fontWeight: 800,
  textAlign: 'center',
  marginBottom: theme.spacing(2),
  background: 'linear-gradient(135deg, #5b3df6, #3b82f6)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  letterSpacing: '-0.02em',
}));

const SectionSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '1.2rem',
  color: theme.palette.text.secondary,
  textAlign: 'center',
  marginBottom: theme.spacing(4),
  maxWidth: 600,
  margin: `0 auto ${theme.spacing(4)}px auto`,
  lineHeight: 1.6,
}));

const ExperienceCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: theme.spacing(3),
  border: '1px solid rgba(91, 61, 246, 0.1)',
  boxShadow: '0 8px 32px rgba(91, 61, 246, 0.08)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 48px rgba(91, 61, 246, 0.15)',
    borderColor: 'rgba(91, 61, 246, 0.2)',
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    background: 'linear-gradient(135deg, #5b3df6, #3b82f6)',
  },
}));

const LogoContainer2 = styled(Box)(({ theme }) => ({
  width: 64,
  height: 64,
  borderRadius: theme.spacing(2),
  background: '#ffffff',
  border: '2px solid rgba(91, 61, 246, 0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
  padding: theme.spacing(1),
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
}));

const CompanyLogo = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  borderRadius: theme.spacing(1),
}));

// Text Styles
const GreetingText = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  fontWeight: 500,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  lineHeight: 1.1,
  marginBottom: theme.spacing(3),
  letterSpacing: '-0.02em',
  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
}));

const HighlightSpan = styled('span')({
  background: 'linear-gradient(135deg, #5b3df6, #3b82f6)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
});

const InfoText = styled(Typography)(({ theme }) => ({
  fontSize: '1.15rem',
  lineHeight: 1.6,
  fontWeight: 500,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

const CTAButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#5b3df6',
  color: '#fff',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(2, 6),
  fontSize: '1.1rem',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: '0 8px 25px rgba(91, 61, 246, 0.3)',
  marginTop: theme.spacing(4),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#4c2de0',
    boxShadow: '0 12px 35px rgba(91, 61, 246, 0.4)',
    transform: 'translateY(-3px)',
  },
}));

// Social Components
const ModernSocialButton = styled(Box)(({ theme, platform }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(2),
  borderRadius: theme.spacing(2),
  background: platform === 'github' 
    ? 'linear-gradient(135deg, rgba(36, 41, 46, 0.08), rgba(36, 41, 46, 0.12))'
    : 'linear-gradient(135deg, rgba(0, 119, 181, 0.08), rgba(0, 119, 181, 0.12))',
  border: `1px solid ${platform === 'github' ? 'rgba(36, 41, 46, 0.15)' : 'rgba(0, 119, 181, 0.15)'}`,
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  minWidth: 120,
  '&:hover': {
    transform: 'translateY(-3px)',
  },
}));

const SocialIconContainer = styled(Box)(({ theme, platform }) => ({
  width: 48,
  height: 48,
  borderRadius: theme.spacing(1.5),
  backgroundColor: platform === 'github' ? '#24292e' : '#0077b5',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const name = "Mohammad Almasri";
  const titleHighlight = "Full Stack Developer";
  const profileImageUrl = profilePhoto;

  const socialLinks = {
    github: "https://github.com/mohammadmasri9",
    linkedin: "https://linkedin.com/in/mohammad-almasri-5b606525a"
  };

  const navItems = ['Home', 'Experience', 'Portfolio', 'About me'];

  const experiences = [
    {
      type: 'work',
      company: 'Ooredoo',
      position: 'Software Developer Intern',
      location: 'Ramallah',
      duration: 'Jun 2023 - Present',
      description: 'Developed web pages using HTML, CSS, and JavaScript, utilizing external frameworks like Django and React. Resolved issues in Java and Python. Acquired proficiency in full-stack engineering, working alongside a full-stack development team.',
      skills: ['JavaScript', 'React', 'Django', 'Java', 'Python', 'React Native', 'Flutter'],
      logo: OoredooLogo,
      hasLogo: true
    },
    {
      type: 'work',
      company: 'Buthor Company',
      position: 'Front End Developer',
      location: 'Hebron',
      duration: 'Dec 2022 - Mar 2023',
      description: 'Focused on front-end development, creating responsive and user-friendly web interfaces. Worked with modern web technologies to deliver high-quality user experiences.',
      skills: ['Frontend Development', 'JavaScript', 'HTML', 'CSS', 'Responsive Design'],
      hasLogo: false
    },
    {
      type: 'education',
      company: 'Al-Quds University',
      position: 'Bachelor of Information Technology',
      location: 'Palestine',
      duration: '2022 - Present',
      description: 'Currently pursuing a Bachelor\'s degree in Information Technology with focus on software development, web technologies, and cybersecurity.',
      skills: ['Information Technology', 'Software Development', 'Web Technologies', 'Cybersecurity'],
      logo: AlQudsLogo,
      hasLogo: true
    },
    {
      type: 'education',
      company: 'Mälardalen University',
      position: 'Exchange Student - Computer Science',
      location: 'Vasteras, Sweden',
      duration: 'Aug 2024 - Jan 2025',
      description: 'Completed one semester as a Computer Science exchange student, broadening global experience and exposure to international academic standards.',
      skills: ['Computer Science', 'International Experience', 'Cross-Cultural Learning'],
      logo: MalardalenLogo,
      hasLogo: true
    }
  ];

  // Scroll handling for fullpage effect
  React.useEffect(() => {
    let isScrolling = false;
    
    const handleScroll = (e) => {
      if (isScrolling) return;
      
      isScrolling = true;
      setTimeout(() => { isScrolling = false; }, 1000);
      
      if (e.deltaY > 0 && currentSlide < 1) {
        setCurrentSlide(1);
      } else if (e.deltaY < 0 && currentSlide > 0) {
        setCurrentSlide(0);
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, [currentSlide]);

  const handleSocialClick = (platform) => {
    window.open(socialLinks[platform], '_blank', 'noopener,noreferrer');
  };

  const scrollToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <Box sx={{ height: '100vh', overflow: 'hidden' }}>
      {/* Navigation Bar */}
      <StyledAppBar elevation={0}>
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <LogoContainer onClick={() => scrollToSlide(0)}>
              <LogoText>MA</LogoText>
              <Typography 
                variant="h6" 
                color="text.primary" 
                fontWeight={600}
                sx={{ 
                  display: { xs: 'none', sm: 'block' },
                  fontSize: '1.1rem'
                }}
              >
                Mohammad Almasri
              </Typography>
            </LogoContainer>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {navItems.map((item, index) => (
                <NavButton 
                  key={item}
                  onClick={() => scrollToSlide(item === 'Home' ? 0 : 1)}
                  sx={{
                    color: (item === 'Home' && currentSlide === 0) || 
                           (item === 'Experience' && currentSlide === 1) ? '#5b3df6' : 'inherit'
                  }}
                >
                  {item}
                </NavButton>
              ))}
            </Box>

            <ContactButton variant="outlined">
              Contact Me
            </ContactButton>
          </Toolbar>
        </Container>
      </StyledAppBar>

      {/* Slides Container */}
      <Box 
        sx={{ 
          transform: `translateY(-${currentSlide * 100}vh)`,
          transition: 'transform 1s ease-in-out',
          height: '200vh'
        }}
      >
        {/* Slide 1: Home */}
        <SlideContainer sx={{ bgcolor: '#f7fbff' }}>
          <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
            <MainSection>
              <ContentBox>
                <GreetingText>
                  Hey, I am {name} 👋
                </GreetingText>
                
                <MainTitle>
                  I am a <HighlightSpan>{titleHighlight}</HighlightSpan>
                  <br />
                  creating impactful digital experiences
                </MainTitle>
                
                <InfoText>
                  <strong>Dual Studies Information Technology Student</strong>
                  <br />
                  Al-Quds University
                </InfoText>
                
                <InfoText sx={{ mb: 3 }}>
                  Specializing in modern web applications using React, Node.js, and cutting-edge technologies.
                </InfoText>

                <Box sx={{ display: 'flex', gap: 3, mt: 3, justifyContent: 'center' }}>
                  <ModernSocialButton 
                    platform="linkedin"
                    onClick={() => handleSocialClick('linkedin')}
                  >
                    <SocialIconContainer platform="linkedin">
                      <LinkedInIcon sx={{ color: '#fff', fontSize: 24 }} />
                    </SocialIconContainer>
                    <Typography variant="caption">Connect with me</Typography>
                  </ModernSocialButton>
                  
                  <ModernSocialButton 
                    platform="github"
                    onClick={() => handleSocialClick('github')}
                  >
                    <SocialIconContainer platform="github">
                      <GitHubIcon sx={{ color: '#fff', fontSize: 24 }} />
                    </SocialIconContainer>
                    <Typography variant="caption">Reach me on GitHub</Typography>
                  </ModernSocialButton>
                </Box>
                
                <CTAButton onClick={() => scrollToSlide(1)}>
                  View My Experience
                </CTAButton>
              </ContentBox>

              <ImageContainer>
                <DecorativeContainer>
                  <ProfileImageContainer>
                    <ProfileImage 
                      src={profileImageUrl} 
                      alt={`${name} - Full Stack Developer`}
                    />
                  </ProfileImageContainer>
                </DecorativeContainer>
              </ImageContainer>
            </MainSection>
          </Container>
        </SlideContainer>

        {/* Slide 2: Experience */}
        <SlideContainer>
          <ExperienceSection>
            <Container maxWidth="lg">
              <SectionTitle>
                My Experience
              </SectionTitle>
              <SectionSubtitle>
                A journey through my professional development and educational achievements
              </SectionSubtitle>

              <Grid container spacing={3} sx={{ maxHeight: '60vh', overflow: 'auto' }}>
                {experiences.map((exp, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <ExperienceCard>
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                          {exp.hasLogo ? (
                            <LogoContainer2>
                              <CompanyLogo 
                                src={exp.logo} 
                                alt={`${exp.company} logo`}
                              />
                            </LogoContainer2>
                          ) : (
                            <Box sx={{
                              width: 64,
                              height: 64,
                              borderRadius: 2,
                              background: exp.type === 'work' 
                                ? 'linear-gradient(135deg, rgba(91, 61, 246, 0.1), rgba(91, 61, 246, 0.2))'
                                : 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(59, 130, 246, 0.2))',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}>
                              {exp.type === 'work' ? (
                                <WorkIcon sx={{ color: '#5b3df6', fontSize: 28 }} />
                              ) : (
                                <SchoolIcon sx={{ color: '#3b82f6', fontSize: 28 }} />
                              )}
                            </Box>
                          )}
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" fontWeight={700} sx={{ mb: 0.5 }}>
                              {exp.company}
                            </Typography>
                            <Typography variant="subtitle1" color="#5b3df6" fontWeight={600}>
                              {exp.position}
                            </Typography>
                          </Box>
                        </Box>

                        <Box sx={{ display: 'flex', gap: 2, mb: 2, flexWrap: 'wrap' }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <LocationOnIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                              {exp.location}
                            </Typography>
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                            <CalendarTodayIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                            <Typography variant="body2" color="text.secondary">
                              {exp.duration}
                            </Typography>
                          </Box>
                        </Box>

                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                          {exp.description}
                        </Typography>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {exp.skills.map((skill, skillIndex) => (
                            <Chip 
                              key={skillIndex}
                              label={skill}
                              size="small"
                              sx={{
                                backgroundColor: 'rgba(91, 61, 246, 0.08)',
                                color: '#5b3df6',
                                fontWeight: 500,
                              }}
                            />
                          ))}
                        </Box>
                      </CardContent>
                    </ExperienceCard>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </ExperienceSection>
        </SlideContainer>
      </Box>

      {/* Slide Indicators */}
      <Box sx={{
        position: 'fixed',
        right: 20,
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }}>
        {[0, 1].map((slideIndex) => (
          <Box
            key={slideIndex}
            onClick={() => scrollToSlide(slideIndex)}
            sx={{
              width: 12,
              height: 12,
              borderRadius: '50%',
              backgroundColor: currentSlide === slideIndex ? '#5b3df6' : 'rgba(91, 61, 246, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#5b3df6',
                transform: 'scale(1.2)'
              }
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default HomePage;
