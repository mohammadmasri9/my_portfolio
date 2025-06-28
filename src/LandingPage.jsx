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
  ListItemText
} from '@mui/material';
import { styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profilePhoto from '../src/assets/Pictures/photo.jpg';

// Styled Components
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(247, 251, 255, 0.95)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(91, 61, 246, 0.1)',
  position: 'sticky',
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

// Enhanced Social Links Container
const SocialLinksContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(0.5),
  },
}));

// Modern Social Button with gradient background
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
    background: platform === 'github' 
      ? 'linear-gradient(135deg, rgba(36, 41, 46, 0.12), rgba(36, 41, 46, 0.18))'
      : 'linear-gradient(135deg, rgba(0, 119, 181, 0.12), rgba(0, 119, 181, 0.18))',
    transform: 'translateY(-3px)',
    boxShadow: platform === 'github' 
      ? '0 10px 30px rgba(36, 41, 46, 0.15)' 
      : '0 10px 30px rgba(0, 119, 181, 0.15)',
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 100,
    padding: theme.spacing(1.5),
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
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: platform === 'github' ? '#1a1e22' : '#005885',
    transform: 'scale(1.1)',
  },
  [theme.breakpoints.down('sm')]: {
    width: 40,
    height: 40,
  },
}));

const SocialLabel = styled(Typography)(({ theme }) => ({
  fontSize: '0.85rem',
  fontWeight: 600,
  color: theme.palette.text.primary,
  textAlign: 'center',
  lineHeight: 1.2,
  [theme.breakpoints.down('sm')]: {
    fontSize: '0.8rem',
  },
}));

// Fixed Main Section with better spacing and alignment
const MainSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: 'calc(100vh - 80px)',
  padding: theme.spacing(4, 0),
  gap: theme.spacing(8),
  maxWidth: '1400px',
  margin: '0 auto',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    textAlign: 'center',
    gap: theme.spacing(4),
    minHeight: 'auto',
    padding: theme.spacing(6, 0),
  },
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(4, 0),
    gap: theme.spacing(3),
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

// Improved Image Container with better proportions
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

// New compatible background design
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
  [theme.breakpoints.down('sm')]: {
    width: 300,
    height: 300,
    borderRadius: 28,
  },
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -20,
    right: -20,
    width: 80,
    height: 80,
    background: 'linear-gradient(135deg, rgba(91, 61, 246, 0.15), rgba(59, 130, 246, 0.1))',
    borderRadius: '50%',
    animation: 'float 8s ease-in-out infinite',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: -15,
    left: -15,
    width: 60,
    height: 60,
    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12), rgba(91, 61, 246, 0.08))',
    borderRadius: '50%',
    animation: 'float 6s ease-in-out infinite reverse',
  },
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0px) rotate(0deg)',
    },
    '50%': {
      transform: 'translateY(-15px) rotate(5deg)',
    },
  },
}));

// Enhanced Profile Image Container
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
  [theme.breakpoints.down('sm')]: {
    width: 200,
    height: 200,
  },
}));

const ProfileImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center center',
  display: 'block',
}));

// Subtle decorative elements with compatible colors
const DecorativeElement = styled(Box)(({ theme, top, left, right, bottom, size = 16, delay = 0 }) => ({
  position: 'absolute',
  width: size,
  height: size,
  background: 'linear-gradient(135deg, rgba(91, 61, 246, 0.2), rgba(59, 130, 246, 0.15))',
  borderRadius: '50%',
  opacity: 0.7,
  top: top,
  left: left,
  right: right,
  bottom: bottom,
  animation: `pulse 4s ease-in-out infinite ${delay}s`,
  '@keyframes pulse': {
    '0%, 100%': {
      transform: 'scale(1)',
      opacity: 0.7,
    },
    '50%': {
      transform: 'scale(1.1)',
      opacity: 0.9,
    },
  },
}));

const GreetingText = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  fontWeight: 500,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
}));

const MainTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 800,
  lineHeight: 1.1,
  marginBottom: theme.spacing(3),
  letterSpacing: '-0.02em',
  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
  [theme.breakpoints.down('md')]: {
    fontSize: 'clamp(1.8rem, 6vw, 2.8rem)',
  },
}));

const HighlightSpan = styled('span')({
  background: 'linear-gradient(135deg, #5b3df6, #3b82f6)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  position: 'relative',
});

const InfoText = styled(Typography)(({ theme }) => ({
  fontSize: '1.15rem',
  lineHeight: 1.6,
  fontWeight: 500,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
  [theme.breakpoints.down('sm')]: {
    fontSize: '1rem',
  },
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
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(1.5, 4),
    fontSize: '1rem',
    width: '100%',
    maxWidth: 300,
  },
}));

// Centered Social Links Section
const SocialSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('lg')]: {
    alignItems: 'center',
  },
}));

const SocialGrid = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(2),
  },
}));

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // Personal information
  const name = "Mohammad Almasri";
  const titleHighlight = "Full Stack Developer";
  const buttonText = "Get In Touch";
  const profileImageUrl = profilePhoto;

  // Social Links - Replace with your actual URLs
  const socialLinks = {
    github: "https://github.com/mohammadmasri9", // Replace with your GitHub URL
    linkedin: "https://linkedin.com/in/mohammad-almasri-5b606525a" // Replace with your LinkedIn URL
  };

  const navItems = ['Home', 'Portfolio', 'About me', 'Experience'];

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleSocialClick = (platform) => {
    window.open(socialLinks[platform], '_blank', 'noopener,noreferrer');
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#f7fbff' }}>
      {/* Navigation Bar */}
      <StyledAppBar elevation={0}>
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <LogoContainer>
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

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
              {navItems.map((item) => (
                <NavButton key={item}>{item}</NavButton>
              ))}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <ContactButton variant="outlined" sx={{ display: { xs: 'none', sm: 'flex' } }}>
                Contact Me
              </ContactButton>
              
              {/* Mobile Menu Button */}
              <IconButton
                sx={{ display: { xs: 'flex', md: 'none' } }}
                onClick={handleMobileMenuToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </StyledAppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={mobileMenuOpen}
        onClose={handleMobileMenuToggle}
        sx={{ display: { xs: 'block', md: 'none' } }}
      >
        <Box sx={{ width: 280, p: 2 }}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <IconButton onClick={handleMobileMenuToggle}>
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ borderRadius: 2, mb: 1 }}>
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          
          {/* Social Links in Mobile Menu */}
          <Box sx={{ p: 2, borderTop: '1px solid rgba(0,0,0,0.1)', mt: 2 }}>
            <SocialGrid sx={{ justifyContent: 'center', mb: 2 }}>
              <ModernSocialButton 
                platform="linkedin"
                onClick={() => handleSocialClick('linkedin')}
              >
                <SocialIconContainer platform="linkedin">
                  <LinkedInIcon sx={{ color: '#fff', fontSize: 20 }} />
                </SocialIconContainer>
                <SocialLabel>Connect with me</SocialLabel>
              </ModernSocialButton>
              
              <ModernSocialButton 
                platform="github"
                onClick={() => handleSocialClick('github')}
              >
                <SocialIconContainer platform="github">
                  <GitHubIcon sx={{ color: '#fff', fontSize: 20 }} />
                </SocialIconContainer>
                <SocialLabel>Reach me on GitHub</SocialLabel>
              </ModernSocialButton>
            </SocialGrid>
            <ContactButton variant="outlined" fullWidth>
              Contact Me
            </ContactButton>
          </Box>
        </Box>
      </Drawer>

      {/* Main Section */}
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
              Passionate about creating seamless user experiences and scalable solutions.
            </InfoText>

            {/* Centered Modern Social Links Section */}
            <SocialSection>
              <SocialGrid>
                <ModernSocialButton 
                  platform="linkedin"
                  onClick={() => handleSocialClick('linkedin')}
                >
                  <SocialIconContainer platform="linkedin">
                    <LinkedInIcon sx={{ color: '#fff', fontSize: 24 }} />
                  </SocialIconContainer>
                  <SocialLabel>Connect with me</SocialLabel>
                </ModernSocialButton>
                
                <ModernSocialButton 
                  platform="github"
                  onClick={() => handleSocialClick('github')}
                >
                  <SocialIconContainer platform="github">
                    <GitHubIcon sx={{ color: '#fff', fontSize: 24 }} />
                  </SocialIconContainer>
                  <SocialLabel>Reach me on GitHub</SocialLabel>
                </ModernSocialButton>
              </SocialGrid>
            </SocialSection>
            
            <CTAButton>
              {buttonText}
            </CTAButton>
          </ContentBox>

          {/* Enhanced Photo Section with Compatible Background */}
          <ImageContainer>
            <DecorativeContainer>
              {/* Subtle decorative elements */}
              <DecorativeElement 
                top="30px" 
                right="40px" 
                size={10} 
                delay={0}
              />
              <DecorativeElement 
                top="80px" 
                left="30px" 
                size={6} 
                delay={1.5}
              />
              <DecorativeElement 
                bottom="60px" 
                right="30px" 
                size={12} 
                delay={3}
              />
              <DecorativeElement 
                bottom="100px" 
                left="50px" 
                size={8} 
                delay={0.8}
              />
              
              {/* Profile Image */}
              <ProfileImageContainer>
                <ProfileImage 
                  src={profileImageUrl} 
                  alt={`${name} - Full Stack Developer`}
                  onError={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #e0e7ef, #f0f4f8)';
                    e.target.style.display = 'block';
                  }}
                />
              </ProfileImageContainer>
            </DecorativeContainer>
          </ImageContainer>
        </MainSection>
      </Container>
    </Box>
  );
};

export default HomePage;
