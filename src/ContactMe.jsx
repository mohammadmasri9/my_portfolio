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
  Collapse,
  List,
  ListItemButton,
  Divider,
  Card,
  CardContent,
  Avatar,
  Chip,
  Grid
} from '@mui/material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import LanguageIcon from '@mui/icons-material/Language';

// Import profile photo - Update this path according to your actual file structure
import ProfilePhoto from '../src/assets/Pictures/photo.jpg';

// Styled Components for Navigation
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'rgba(247, 251, 255, 0.95)',
  backdropFilter: 'blur(20px)',
  borderBottom: '1px solid rgba(91, 61, 246, 0.1)',
  position: 'fixed',
  top: 0,
  zIndex: 1100,
  boxShadow: '0 4px 20px rgba(91, 61, 246, 0.08)',
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

// Enhanced Mobile Menu Components
const MobileMenuButton = styled(IconButton)(({ theme, isopen }) => ({
  color: '#5b3df6',
  padding: theme.spacing(1),
  borderRadius: theme.spacing(1),
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  transform: isopen ? 'rotate(180deg)' : 'rotate(0deg)',
  '&:hover': {
    backgroundColor: 'rgba(91, 61, 246, 0.08)',
    transform: isopen ? 'rotate(180deg) scale(1.1)' : 'rotate(0deg) scale(1.1)',
  },
}));

const MobileMenuContainer = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: '100%',
  left: 0,
  right: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.98)',
  backdropFilter: 'blur(20px)',
  borderBottom: '1px solid rgba(91, 61, 246, 0.1)',
  boxShadow: '0 8px 32px rgba(91, 61, 246, 0.12)',
  zIndex: 1000,
}));

const MobileNavList = styled(List)(({ theme }) => ({
  padding: theme.spacing(2, 0),
}));

const MobileNavItem = styled(ListItemButton)(({ theme }) => ({
  margin: theme.spacing(0.5, 2),
  borderRadius: theme.spacing(1.5),
  transition: 'all 0.2s ease',
  '&:hover': {
    backgroundColor: 'rgba(91, 61, 246, 0.08)',
    '& .MuiTypography-root': {
      color: '#5b3df6',
      fontWeight: 600,
    },
  },
}));

const MobileNavText = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  fontWeight: 500,
  color: theme.palette.text.primary,
  transition: 'all 0.2s ease',
}));

const MobileContactSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(91, 61, 246, 0.1)',
  background: 'linear-gradient(135deg, rgba(91, 61, 246, 0.02), rgba(59, 130, 246, 0.02))',
}));

const MobileContactButton = styled(Button)(({ theme }) => ({
  width: '100%',
  borderColor: '#5b3df6',
  color: '#5b3df6',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: theme.spacing(1.5),
  padding: theme.spacing(1.5, 3),
  fontSize: '1rem',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#5b3df6',
    color: '#fff',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(91, 61, 246, 0.3)',
  },
}));

const MobileSocialSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  gap: theme.spacing(2),
}));

const MobileSocialButton = styled(IconButton)(({ theme }) => ({
  width: 44,
  height: 44,
  backgroundColor: 'rgba(91, 61, 246, 0.08)',
  color: '#5b3df6',
  border: '1px solid rgba(91, 61, 246, 0.15)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#5b3df6',
    color: '#fff',
    transform: 'translateY(-3px) scale(1.1)',
    boxShadow: '0 6px 20px rgba(91, 61, 246, 0.3)',
  },
}));

// Footer Components
const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  borderTop: '1px solid rgba(91, 61, 246, 0.1)',
  padding: theme.spacing(6, 0),
  marginTop: theme.spacing(8),
}));

const FooterContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
  maxWidth: 400,
  margin: '0 auto',
  textAlign: 'center',
}));

const SocialIconsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  alignItems: 'center',
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  width: 40,
  height: 40,
  backgroundColor: 'rgba(91, 61, 246, 0.08)',
  color: '#5b3df6',
  border: '1px solid rgba(91, 61, 246, 0.15)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#5b3df6',
    color: '#fff',
    transform: 'translateY(-2px)',
    boxShadow: '0 4px 12px rgba(91, 61, 246, 0.3)',
  },
}));

const CopyrightText = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontSize: '0.875rem',
  fontWeight: 400,
}));

// Contact Page Specific Styled Components
const ContactContainer = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '120px 20px 40px 20px',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
}));

const ContactHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '60px',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    marginBottom: '40px',
  }
}));

const HeaderContent = styled(Box)({
  maxWidth: '800px',
  margin: '0 auto',
});

const ContactLabel = styled(Typography)({
  color: '#666',
  fontSize: '14px',
  margin: '0 0 8px 0',
  fontWeight: '500'
});

const ContactTitle = styled(Typography)(({ theme }) => ({
  fontSize: '48px',
  fontWeight: '700',
  color: '#333',
  margin: '0',
  lineHeight: '1.2',
  [theme.breakpoints.down('md')]: {
    fontSize: '36px'
  }
}));

const ProfileSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: '60px',
  [theme.breakpoints.down('md')]: {
    marginBottom: '40px',
  }
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: 200,
  height: 200,
  marginBottom: theme.spacing(3),
  border: '6px solid rgba(91, 61, 246, 0.1)',
  boxShadow: '0 20px 60px rgba(91, 61, 246, 0.15)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 25px 80px rgba(91, 61, 246, 0.25)',
  },
  [theme.breakpoints.down('md')]: {
    width: 150,
    height: 150,
  }
}));

const ContactGrid = styled(Grid)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const ContactCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(247, 251, 255, 0.9))',
  backdropFilter: 'blur(20px)',
  borderRadius: '20px',
  border: '1px solid rgba(91, 61, 246, 0.1)',
  boxShadow: '0 8px 32px rgba(91, 61, 246, 0.08)',
  transition: 'all 0.3s ease',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 20px 60px rgba(91, 61, 246, 0.15)',
    borderColor: 'rgba(91, 61, 246, 0.2)',
  },
  [theme.breakpoints.down('md')]: {
    borderRadius: '16px',
  }
}));

const ContactIconContainer = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  borderRadius: '16px',
  background: 'linear-gradient(135deg, #5b3df6, #3b82f6)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: theme.spacing(2),
  boxShadow: '0 8px 24px rgba(91, 61, 246, 0.3)',
}));

const SocialMediaSection = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(6),
  textAlign: 'center',
}));

const SocialMediaGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: theme.spacing(3),
  marginTop: theme.spacing(4),
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: theme.spacing(2),
  }
}));

const SocialMediaCard = styled(Card)(({ theme }) => ({
  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(247, 251, 255, 0.9))',
  backdropFilter: 'blur(20px)',
  borderRadius: '16px',
  border: '1px solid rgba(91, 61, 246, 0.1)',
  boxShadow: '0 4px 20px rgba(91, 61, 246, 0.08)',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px) scale(1.02)',
    boxShadow: '0 12px 40px rgba(91, 61, 246, 0.15)',
    borderColor: 'rgba(91, 61, 246, 0.2)',
  }
}));

const ActionButton = styled(Button)(({ theme }) => ({
  background: 'linear-gradient(135deg, #5b3df6, #3b82f6)',
  color: '#fff',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: theme.spacing(1.5),
  padding: theme.spacing(1.5, 3),
  fontSize: '1rem',
  boxShadow: '0 4px 20px rgba(91, 61, 246, 0.3)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'linear-gradient(135deg, #4c2de0, #2563eb)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 30px rgba(91, 61, 246, 0.4)',
  },
}));

const StatusChip = styled(Chip)(({ theme }) => ({
  background: 'linear-gradient(135deg, #10b981, #059669)',
  color: '#fff',
  fontWeight: 600,
  fontSize: '0.875rem',
  '&::before': {
    content: '""',
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: '#34d399',
    marginRight: theme.spacing(1),
    animation: 'pulse 2s infinite',
  }
}));

const ContactMe = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const contactInfo = {
    name: "Mohammad Almasri",
    title: "Full Stack Developer",
    location: "Ramallah, Palestine",
    email: "mohammadmasri349@gmail.com",
    phone: "+970 566610222",
    whatsapp: "+972 592621821",
    website: "https://masri.life",
    status: "Available for work"
  };

  const socialLinks = {
    github: "https://github.com/mohammadmasri9",
    linkedin: "https://linkedin.com/in/mohammad-almasri-5b606525a",
    instagram: "https://instagram.com/masri.m7md",
    twitter: "https://x.com/mohamma79537132",
  };

  const navItems = ['Home', 'Experience', 'About me', 'Portfolio'];

  // FIXED: Instant menu close function
  const closeMenuInstantly = () => {
    setIsClosing(true);
    setMobileMenuOpen(false);
    // Reset closing state after animation would complete
    setTimeout(() => setIsClosing(false), 50);
  };

  const handleSocialClick = (platform) => {
    window.open(socialLinks[platform], '_blank', 'noopener,noreferrer');
  };

  const handleContactClick = (type, value) => {
    switch (type) {
      case 'email':
        window.open(`mailto:${value}`, '_blank');
        break;
      case 'phone':
        window.open(`tel:${value}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/${value.replace(/\s+/g, '')}`, '_blank');
        break;
      case 'website':
        window.open(value, '_blank');
        break;
      default:
        break;
    }
  };

  // FIXED: Instant scroll function
  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.location.href = '/';
    } else if (sectionId === 'portfolio') {
      window.location.href = '/portfolio';
    } else if (sectionId === 'contact') {
      window.location.href = '/contact';
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // FIXED: Instant navigation functions
  const navigateToContact = () => {
    closeMenuInstantly();
    scrollToSection('contact');
  };

  // FIXED: Main navigation handler with instant close
  const handleNavItemClick = (item) => {
    // Close menu instantly with no delay
    closeMenuInstantly();
    
    // Navigate immediately without waiting
    if (item === 'Portfolio') {
      scrollToSection('portfolio');
    } else {
      scrollToSection(
        item === 'Home' ? 'home' : 
        item === 'Experience' ? 'experience' : 
        item === 'About me' ? 'about' : 
        'home'
      );
    }
  };

  return (
    <Box>
      {/* Navigation Bar */}
      <StyledAppBar elevation={0}>
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }}>
            <LogoContainer onClick={() => scrollToSection('home')}>
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
                <NavButton 
                  key={item}
                  onClick={() => handleNavItemClick(item)}
                >
                  {item}
                </NavButton>
              ))}
            </Box>

            {/* Desktop Contact Button */}
            <ContactButton 
              variant="outlined"
              sx={{ 
                display: { xs: 'none', md: 'flex' },
                backgroundColor: 'rgba(91, 61, 246, 0.08)',
                color: '#5b3df6'
              }}
              onClick={navigateToContact}
            >
              Contact Me
            </ContactButton>

            {/* Mobile Menu Button */}
            <MobileMenuButton
              onClick={handleMobileMenuToggle}
              isopen={mobileMenuOpen ? 1 : 0}
              sx={{ display: { xs: 'flex', md: 'none' } }}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </MobileMenuButton>
          </Toolbar>

          {/* FIXED: Mobile Menu with conditional instant close */}
          <Collapse 
            in={mobileMenuOpen} 
            timeout={isClosing ? 0 : 150}
            unmountOnExit
          >
            <MobileMenuContainer>
              <Container maxWidth="xl">
                <MobileNavList>
                  {navItems.map((item, index) => (
                    <MobileNavItem
                      key={item}
                      onClick={() => handleNavItemClick(item)}
                      sx={{
                        // Remove animation delays that cause the sticky effect
                        transition: 'all 0.2s ease',
                      }}
                    >
                      <MobileNavText>{item}</MobileNavText>
                    </MobileNavItem>
                  ))}
                </MobileNavList>

                <Divider sx={{ borderColor: 'rgba(91, 61, 246, 0.1)' }} />

                <MobileContactSection>
                  <MobileContactButton 
                    variant="outlined"
                    onClick={navigateToContact}
                  >
                    Contact Me
                  </MobileContactButton>
                </MobileContactSection>

                <MobileSocialSection>
                  <MobileSocialButton
                    onClick={() => {
                      closeMenuInstantly();
                      handleSocialClick('linkedin');
                    }}
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon sx={{ fontSize: 20 }} />
                  </MobileSocialButton>
                  
                  <MobileSocialButton
                    onClick={() => {
                      closeMenuInstantly();
                      handleSocialClick('github');
                    }}
                    aria-label="GitHub"
                  >
                    <GitHubIcon sx={{ fontSize: 20 }} />
                  </MobileSocialButton>
                  
                  <MobileSocialButton
                    onClick={() => {
                      closeMenuInstantly();
                      handleSocialClick('instagram');
                    }}
                    aria-label="Instagram"
                  >
                    <InstagramIcon sx={{ fontSize: 20 }} />
                  </MobileSocialButton>
                  
                  <MobileSocialButton
                    onClick={() => {
                      closeMenuInstantly();
                      handleSocialClick('twitter');
                    }}
                    aria-label="Twitter"
                  >
                    <TwitterIcon sx={{ fontSize: 20 }} />
                  </MobileSocialButton>
                </MobileSocialSection>
              </Container>
            </MobileMenuContainer>
          </Collapse>
        </Container>
      </StyledAppBar>

      {/* Simplified animations for instant response */}
      <style>
        {`
          .mobile-nav-item {
            transition: background-color 0.2s ease, transform 0.2s ease !important;
          }
          
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }
        `}
      </style>

      {/* Contact Content */}
      <Box sx={{ 
        bgcolor: 'linear-gradient(135deg, #f7fbff 0%, #e0f2fe 100%)', 
        minHeight: '100vh',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(91, 61, 246, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 50%)',
          pointerEvents: 'none',
        }
      }}>
        <ContactContainer>
          {/* Header Section */}
          <ContactHeader>
            <HeaderContent>
              <ContactLabel>Get In Touch</ContactLabel>
              <ContactTitle>Contact Me</ContactTitle>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#666', 
                  fontSize: '18px', 
                  lineHeight: '1.6',
                  maxWidth: '600px',
                  mt: 2,
                  textAlign: 'center',
                  mx: 'auto'
                }}
              >
                I'm always interested in new opportunities and exciting projects. 
                Let's connect and discuss how we can work together!
              </Typography>
            </HeaderContent>
          </ContactHeader>

          {/* Profile Section */}
          <ProfileSection>
            <ProfileAvatar 
              src={ProfilePhoto} 
              alt={contactInfo.name}
              sx={{ 
                background: ProfilePhoto ? 'none' : 'linear-gradient(135deg, #5b3df6, #3b82f6)',
                fontSize: '4rem',
                fontWeight: 'bold',
                color: '#fff'
              }}
            >
              {!ProfilePhoto && contactInfo.name.split(' ').map(n => n[0]).join('')}
            </ProfileAvatar>
            
            <Typography variant="h4" sx={{ 
              fontWeight: 700, 
              color: '#333', 
              mb: 1,
              textAlign: 'center'
            }}>
              {contactInfo.name}
            </Typography>
            
            <Typography variant="h6" sx={{ 
              color: '#5b3df6', 
              fontWeight: 600,
              mb: 2,
              textAlign: 'center'
            }}>
              {contactInfo.title}
            </Typography>

            <StatusChip 
              label={contactInfo.status}
              sx={{ mb: 2 }}
            />

            <Typography variant="body1" sx={{ 
              color: '#666',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              textAlign: 'center'
            }}>
              <LocationOnIcon sx={{ fontSize: 20, color: '#5b3df6' }} />
              {contactInfo.location}
            </Typography>
          </ProfileSection>

          {/* Contact Information Grid - Centered and bigger */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'center', 
            width: '100%',
            px: { xs: 2, md: 4 }
          }}>
            <ContactGrid 
              container 
              spacing={3} 
              sx={{ 
                maxWidth: '1000px',
                justifyContent: 'center',
                width: '100%'
              }}
            >
              <Grid item xs={6} sm={6} md={3}>
                <ContactCard>
                  <CardContent sx={{ 
                    p: 4, 
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    minHeight: '240px'
                  }}>
                    <ContactIconContainer sx={{ 
                      mx: 'auto',
                      width: 60,
                      height: 60,
                      mb: 2
                    }}>
                      <EmailIcon sx={{ fontSize: 28, color: '#fff' }} />
                    </ContactIconContainer>
                    <Typography variant="h6" sx={{ 
                      fontWeight: 600, 
                      color: '#333', 
                      mb: 1,
                      fontSize: '1.2rem'
                    }}>
                      Email Address
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: '#666',
                      mb: 3,
                      fontSize: '0.9rem',
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      Send me a message
                    </Typography>
                    <ActionButton 
                      onClick={() => handleContactClick('email', contactInfo.email)}
                      fullWidth
                      sx={{ 
                        mt: 'auto',
                        py: 1.5,
                        fontSize: '0.95rem'
                      }}
                    >
                      Send Email
                    </ActionButton>
                  </CardContent>
                </ContactCard>
              </Grid>

              <Grid item xs={6} sm={6} md={3}>
                <ContactCard>
                  <CardContent sx={{ 
                    p: 4, 
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    minHeight: '240px'
                  }}>
                    <ContactIconContainer sx={{ 
                      mx: 'auto',
                      width: 60,
                      height: 60,
                      mb: 2
                    }}>
                      <PhoneIcon sx={{ fontSize: 28, color: '#fff' }} />
                    </ContactIconContainer>
                    <Typography variant="h6" sx={{ 
                      fontWeight: 600, 
                      color: '#333', 
                      mb: 1,
                      fontSize: '1.2rem'
                    }}>
                      Phone Number
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: '#666',
                      mb: 3,
                      fontSize: '0.9rem',
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      Call me directly
                    </Typography>
                    <ActionButton 
                      onClick={() => handleContactClick('phone', contactInfo.phone)}
                      fullWidth
                      sx={{ 
                        mt: 'auto',
                        py: 1.5,
                        fontSize: '0.95rem'
                      }}
                    >
                      Call Now
                    </ActionButton>
                  </CardContent>
                </ContactCard>
              </Grid>

              <Grid item xs={6} sm={6} md={3}>
                <ContactCard>
                  <CardContent sx={{ 
                    p: 4, 
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    minHeight: '240px'
                  }}>
                    <ContactIconContainer sx={{ 
                      mx: 'auto',
                      width: 60,
                      height: 60,
                      mb: 2
                    }}>
                      <WhatsAppIcon sx={{ fontSize: 28, color: '#fff' }} />
                    </ContactIconContainer>
                    <Typography variant="h6" sx={{ 
                      fontWeight: 600, 
                      color: '#333', 
                      mb: 1,
                      fontSize: '1.2rem'
                    }}>
                      WhatsApp
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: '#666',
                      mb: 3,
                      fontSize: '0.9rem',
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      Quick messaging
                    </Typography>
                    <ActionButton 
                      onClick={() => handleContactClick('whatsapp', contactInfo.whatsapp)}
                      fullWidth
                      sx={{ 
                        mt: 'auto',
                        py: 1.5,
                        fontSize: '0.95rem'
                      }}
                    >
                      Message
                    </ActionButton>
                  </CardContent>
                </ContactCard>
              </Grid>

              <Grid item xs={6} sm={6} md={3}>
                <ContactCard>
                  <CardContent sx={{ 
                    p: 4, 
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    minHeight: '240px'
                  }}>
                    <ContactIconContainer sx={{ 
                      mx: 'auto',
                      width: 60,
                      height: 60,
                      mb: 2
                    }}>
                      <LanguageIcon sx={{ fontSize: 28, color: '#fff' }} />
                    </ContactIconContainer>
                    <Typography variant="h6" sx={{ 
                      fontWeight: 600, 
                      color: '#333', 
                      mb: 1,
                      fontSize: '1.2rem'
                    }}>
                      Website
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: '#666',
                      mb: 3,
                      fontSize: '0.9rem',
                      flex: 1,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      Visit my portfolio
                    </Typography>
                    <ActionButton 
                      onClick={() => handleContactClick('website', contactInfo.website)}
                      fullWidth
                      sx={{ 
                        mt: 'auto',
                        py: 1.5,
                        fontSize: '0.95rem'
                      }}
                    >
                      Visit Site
                    </ActionButton>
                  </CardContent>
                </ContactCard>
              </Grid>
            </ContactGrid>
          </Box>

          {/* Social Media Section */}
          <SocialMediaSection>
            <Typography variant="h4" sx={{ 
              fontWeight: 700, 
              color: '#333', 
              mb: 2 
            }}>
              Connect With Me
            </Typography>
            <Typography variant="body1" sx={{ 
              color: '#666', 
              fontSize: '16px', 
              lineHeight: '1.6',
              maxWidth: '500px',
              mx: 'auto',
              mb: 4
            }}>
              Follow me on social media for updates on my latest projects and tech insights.
            </Typography>

            <SocialMediaGrid>
              <SocialMediaCard onClick={() => handleSocialClick('linkedin')}>
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <LinkedInIcon sx={{ 
                    fontSize: 40, 
                    color: '#0077b5', 
                    mb: 2 
                  }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
                    LinkedIn
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    Professional Network
                  </Typography>
                </CardContent>
              </SocialMediaCard>

              <SocialMediaCard onClick={() => handleSocialClick('github')}>
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <GitHubIcon sx={{ 
                    fontSize: 40, 
                    color: '#333', 
                    mb: 2 
                  }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
                    GitHub
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    Code Repository
                  </Typography>
                </CardContent>
              </SocialMediaCard>

              <SocialMediaCard onClick={() => handleSocialClick('instagram')}>
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <InstagramIcon sx={{ 
                    fontSize: 40, 
                    color: '#e4405f', 
                    mb: 2 
                  }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
                    Instagram
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    Visual Stories
                  </Typography>
                </CardContent>
              </SocialMediaCard>

              <SocialMediaCard onClick={() => handleSocialClick('twitter')}>
                <CardContent sx={{ p: 3, textAlign: 'center' }}>
                  <TwitterIcon sx={{ 
                    fontSize: 40, 
                    color: '#1da1f2', 
                    mb: 2 
                  }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#333' }}>
                    Twitter
                  </Typography>
                  <Typography variant="body2" sx={{ color: '#666' }}>
                    Quick Updates
                  </Typography>
                </CardContent>
              </SocialMediaCard>
            </SocialMediaGrid>
          </SocialMediaSection>

          {/* Call to Action */}
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, color: '#333' }}>
              Ready to Start a Project?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: '#666', maxWidth: 600, mx: 'auto' }}>
              I'm currently available for freelance work and full-time opportunities. 
              Let's discuss your next project!
            </Typography>
            <ActionButton
              size="large"
              onClick={() => handleContactClick('email', contactInfo.email)}
              sx={{
                px: 6,
                py: 2,
                fontSize: '1.1rem',
              }}
            >
              Start a Conversation
            </ActionButton>
          </Box>
        </ContactContainer>
      </Box>

      {/* Footer */}
      <FooterContainer>
        <Container maxWidth="lg">
          <FooterContent>
            <SocialIconsContainer>
              <SocialIconButton
                onClick={() => handleSocialClick('linkedin')}
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon sx={{ fontSize: 20 }} />
              </SocialIconButton>
              
              <SocialIconButton
                onClick={() => handleSocialClick('instagram')}
                aria-label="Instagram Profile"
              >
                <InstagramIcon sx={{ fontSize: 20 }} />
              </SocialIconButton>
              
              <SocialIconButton
                onClick={() => handleSocialClick('twitter')}
                aria-label="Twitter Profile"
              >
                <TwitterIcon sx={{ fontSize: 20 }} />
              </SocialIconButton>
              
              <SocialIconButton
                onClick={() => handleSocialClick('github')}
                aria-label="GitHub Profile"
              >
                <GitHubIcon sx={{ fontSize: 20 }} />
              </SocialIconButton>
            </SocialIconsContainer>
            
            <CopyrightText>
              Copyright © 2025 All rights reserved
            </CopyrightText>
          </FooterContent>
        </Container>
      </FooterContainer>
    </Box>
  );
};

export default ContactMe;
