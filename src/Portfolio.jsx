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
  Divider
} from '@mui/material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Import your images - Update these paths according to your actual file structure
import SKLRImage from '../src/assets/Pictures/SKLR.jpg';
import UniConnectImage from '../src/assets/Pictures/uniconnect.jpg';
import OoredooImage from '../src/assets/Pictures/ooredoo.png';
import WedImage from '../src/assets/Pictures/wed.jpg';
import BotImage from '../src/assets/Pictures/Bot.png';
import TopImage from '../src/assets/Pictures/topcaffee.jpg';

import c1Image from '../src/assets/Pictures/c1.png';
import c2Image from '../src/assets/Pictures/c2.png';
import c3Image from '../src/assets/Pictures/c3.png';
import c4Image from '../src/assets/Pictures/c4.png';
import c5Image from '../src/assets/Pictures/c5.png';
import c6Image from '../src/assets/Pictures/c6.png';
import c7Image from '../src/assets/Pictures/c7.png';


// Import PDF certificates
import cert1PDF from '../src/assets/Files/c1.pdf';
import cert2PDF from '../src/assets/Files/c2.pdf';
import cert3PDF from '../src/assets/Files/c3.pdf';
import cert4PDF from '../src/assets/Files/c4.pdf';
import cert5PDF from '../src/assets/Files/c5.pdf';
import cert6PDF from '../src/assets/Files/C6.pdf';
import cert7PDF from '../src/assets/Files/C7.pdf';

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

// Footer Styled Components
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

// Portfolio Specific Styled Components
const PortfolioContainer = styled(Box)(({ theme }) => ({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '120px 20px 40px 20px',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
}));

const PortfolioHeader = styled(Box)(({ theme }) => ({
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

const RecentProjectsLabel = styled(Typography)({
  color: '#666',
  fontSize: '14px',
  margin: '0 0 8px 0',
  fontWeight: '500'
});

const PortfolioTitle = styled(Typography)(({ theme }) => ({
  fontSize: '48px',
  fontWeight: '700',
  color: '#333',
  margin: '0',
  lineHeight: '1.2',
  [theme.breakpoints.down('md')]: {
    fontSize: '36px'
  }
}));

const ProjectsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: '30px',
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
    gap: '20px'
  }
}));

const ProjectCard = styled(Box)(({ theme }) => ({
  background: 'white',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
  }
}));

const ProjectImageContainer = styled(Box)(({ theme }) => ({
  height: '240px',
  position: 'relative',
  overflow: 'hidden',
  padding: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    height: '200px',
    padding: '15px'
  }
}));

const ProjectImage = styled('img')({
  maxWidth: '100%',
  maxHeight: '100%',
  objectFit: 'contain',
  borderRadius: '8px',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
});

const ProjectContent = styled(Box)({
  padding: '24px'
});

const ProjectTitle = styled(Typography)({
  fontSize: '24px',
  fontWeight: '700',
  color: '#333',
  margin: '0 0 12px 0'
});

const ProjectDescription = styled(Typography)({
  color: '#666',
  fontSize: '14px',
  lineHeight: '1.6',
  margin: '0 0 20px 0'
});

const ViewButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'transparent',
  color: '#5b3df6',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(0.5, 1.5),
  fontSize: '0.875rem',
  fontWeight: 600,
  textTransform: 'none',
  border: '1px solid rgba(91, 61, 246, 0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#5b3df6',
    color: '#fff',
    borderColor: '#5b3df6',
  },
}));

const PlaceholderImage = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  color: 'white',
  textAlign: 'center',
  fontSize: '18px',
  fontWeight: '600'
});

const Portfolio = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const projects = [
   
    {
      id: 1,
      title: "SKLR",
      description: "Sklr is an innovative peer-to-peer skill-sharing platform that connects learners with skilled individuals in their community.",
      image: SKLRImage,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      technologies: ['flutter', 'Node.js', 'Supabase', 'dart'],
      status: 'Completed',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: "AQU-UniConnect",
      description: "Uni-Connect is a web-based system developed to facilitate and streamline the appointment booking process between university students and academic staff.",
      image: UniConnectImage,
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      technologies: ['React', 'Node.js', 'MongoDb', 'API'],
      status: 'Completed',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: "Ooredoo Assets System",
      description: "A modern system for registering and managing employee assets related to the technical support and help desk department is a centralized, automated platform that allows IT teams to track, organize, and monitor all equipment and resources assigned to employees",
      image: OoredooImage,
      gradient: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
      technologies: ['HTML', 'Material-UI', 'JavaScript', 'CSS', 'PHP'],
      status: 'Completed',
      demoUrl: '#',
      githubUrl: '#'
    },
     {
      id: 4,
      title: "Widding-Hall Management System",
      description: "A comprehensive web-based system designed to streamline the management of wedding halls, including booking, scheduling, and customer management.",
      image: WedImage,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'API', 'JavaScript'],
      status: 'Pending',
      demoUrl: '#',
      githubUrl: '#'
    },
     {
      id: 5,
      title: "Ooredoo HR Assistant Chatbot ",
      description: "An AI-powered chatbot designed to assist employees with HR-related queries and tasks, providing quick and accurate responses.",
      image: BotImage,
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      technologies: ['CopilotStudio', 'PowerAi', 'PromptTrgigger', 'PowerAutomate', 'PowerApps'],
      status: 'Completed',
      demoUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: "TopCaffee Menue ",
      description: "A modern and user-friendly web application designed to showcase the menu of TopCaffee, a popular coffee shop.",
      image: TopImage,
      gradient: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
      technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'API'],
      status: 'Completed',
      demoUrl: '#',
      githubUrl: '#'
    }
  ];

  const certificates = [
    {
      id: 1,
      name: "Become a professional React Developer Specialization",
      issuer: "Coursera",
      year: "2024",
      category: "Development",
      description: "Validates expertise in designing distributed systems and applications on React FreamWork.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      image: c7Image,
      pdfUrl: cert7PDF
    },
    {
      id: 2,
      name: "HTML, CSS, and Javascript for Web Developers",
      issuer: "Coursera",
      year: "2024",
      category: "Web Development",
      description: "Demonstrates proficiency in building modern web applications using HTML, CSS, JS and related technologies.",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      image: c6Image,
      pdfUrl: cert6PDF
    },
    {
      id: 3,
      name: "Create a Resume and Cover Letter with Word",
      issuer: "Coursera",
      year: "2022",
      category: "Professional Skills",
      description: "Certification in creating professional resumes and cover letters using Microsoft Word.",
      gradient: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
      image: c2Image,
      pdfUrl: cert2PDF
    },
    {
      id: 4,
      name: "Full Stack Development with React and ASP.NET Core",
      issuer: "Ooredoo",
      year: "2023",
      category: "Development",
      description: "Certification in full stack development using React and ASP.NET Core technologies and frameworks to build modern web applications.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      image: c1Image,
      pdfUrl: cert1PDF
    },
    {
      id: 5,
      name: "Getting Started with Microsoft PowerPoint",
      issuer: "Coursera",
      year: "2022",
      category: "Presentation Skills",
      description: "Certification in creating effective presentations using Microsoft PowerPoint.",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      image: c3Image,
      pdfUrl: cert3PDF
    },
    {
      id: 6,
      name: "Create a no-code responsive website with Webflow",
      issuer: "Coursera",
      year: "2022",
      category: "Web Development",
      description: "Certification in building responsive websites without coding using Webflow platform.",
      gradient: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)",
      image: c5Image,
      pdfUrl: cert5PDF
    },
    {
      id: 7,
      name: "Use Canva to Create Desktop and Mobile-friendly Web Pages",
      issuer: "Coursera",
      year: "2022",
      category: "Web Design",
      description: "Certification in designing desktop and mobile-friendly web pages using Canva platform.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      image: c4Image,
      pdfUrl: cert4PDF
    }
  ];

  const socialLinks = {
    github: "https://github.com/mohammadmasri9",
    linkedin: "https://linkedin.com/in/mohammad-almasri-5b606525a",
    instagram: "https://instagram.com/masri.m7md",
    twitter: "https://x.com/mohamma79537132",
  };

  const navItems = ['Home', 'Experience', 'About me', 'Projects', 'Certifications'];

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

  // FIXED: Instant scroll function
  const scrollToSection = (sectionId) => {
    if (sectionId === 'home') {
      window.location.href = '/';
    } else if (sectionId === 'projects') {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'certifications') {
      document.getElementById('certifications')?.scrollIntoView({ behavior: 'smooth' });
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
    window.location.href = '/contact';
  };

  // FIXED: Main navigation handler with instant close
  const handleNavItemClick = (item) => {
    // Close menu instantly with no delay
    closeMenuInstantly();
    
    // Navigate immediately without waiting
    if (item === 'Projects') {
      scrollToSection('projects');
      return;
    } else if (item === 'Certifications') {
      scrollToSection('certifications');
      return;
    } else {
      scrollToSection(
        item === 'Home' ? 'home' : 
        item === 'Experience' ? 'experience' : 
        item === 'About me' ? 'about' : 
        'projects'
      );
    }
  };

  const handleProjectClick = (project) => {
    console.log('Project clicked:', project.title);
  };

  const handleViewDemo = (demoUrl, e) => {
    e.stopPropagation();
    if (demoUrl && demoUrl !== '#') {
      window.open(demoUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleViewGithub = (githubUrl, e) => {
    e.stopPropagation();
    if (githubUrl && githubUrl !== '#') {
      window.open(githubUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleViewCertificate = (pdfUrl, e) => {
    e.stopPropagation();
    if (pdfUrl) {
      window.open(pdfUrl, '_blank', 'noopener,noreferrer');
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
              {navItems.map((item, index) => (
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
              sx={{ display: { xs: 'none', md: 'flex' } }}
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
        `}
      </style>

      {/* Portfolio Content */}
      <Box sx={{ bgcolor: '#f7fbff', minHeight: '100vh' }}>
        <PortfolioContainer id="projects">
          {/* Header Section with Recent Projects Title */}
          <PortfolioHeader>
            <HeaderContent>
              <RecentProjectsLabel>Portfolio</RecentProjectsLabel>
              <PortfolioTitle>Recent Projects</PortfolioTitle>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#666', 
                  fontSize: '16px', 
                  lineHeight: '1.6',
                  maxWidth: '600px',
                  mt: 2,
                  textAlign: 'center',
                  mx: 'auto'
                }}
              >
                A showcase of my latest work and technical achievements. Each project represents 
                my passion for creating innovative solutions and learning new technologies.
              </Typography>
            </HeaderContent>
          </PortfolioHeader>

          {/* Projects Grid */}
          <ProjectsGrid>
            {projects.map((project) => (
              <ProjectCard 
                key={project.id}
                onClick={() => handleProjectClick(project)}
              >
                <ProjectImageContainer
                  sx={{ background: project.gradient }}
                >
                  {project.image ? (
                    <ProjectImage 
                      src={project.image} 
                      alt={project.title}
                    />
                  ) : (
                    <PlaceholderImage>
                      {project.title}
                    </PlaceholderImage>
                  )}
                </ProjectImageContainer>
                
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  
                  {/* Technology Tags */}
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                    {project.technologies.map((tech, index) => (
                      <Box
                        key={index}
                        sx={{
                          backgroundColor: 'rgba(91, 61, 246, 0.08)',
                          color: '#5b3df6',
                          padding: '4px 8px',
                          borderRadius: '12px',
                          fontSize: '12px',
                          fontWeight: 500
                        }}
                      >
                        {tech}
                      </Box>
                    ))}
                  </Box>
                </ProjectContent>
              </ProjectCard>
            ))}
          </ProjectsGrid>

          {/* Certifications Section */}
          <Box sx={{ mt: 10 }} id="certifications">
            {/* Certifications Header */}
            <Box sx={{ mb: 6, textAlign: 'center' }}>
              <Typography 
                sx={{ 
                  color: '#666',
                  fontSize: '14px',
                  fontWeight: '500',
                  mb: 1
                }}
              >
                Professional Development
              </Typography>
              <Typography 
                variant="h2" 
                sx={{ 
                  fontSize: { xs: '36px', md: '48px' },
                  fontWeight: '700',
                  color: '#333',
                  lineHeight: '1.2',
                  mb: 2
                }}
              >
                Certifications
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  color: '#666', 
                  fontSize: '16px', 
                  lineHeight: '1.6',
                  maxWidth: '600px',
                  mx: 'auto'
                }}
              >
                Professional certifications and achievements that validate my expertise 
                and commitment to continuous learning in technology.
              </Typography>
            </Box>

            {/* Certifications Grid */}
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
              [theme.breakpoints.down('md')]: {
                gridTemplateColumns: '1fr',
                gap: '20px'
              }
            }}>
              {certificates.map((cert) => (
                <Box
                  key={cert.id}
                  sx={{
                    background: 'white',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'pointer',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
                    }
                  }}
                >
                  {/* Certificate Image/Icon Container */}
                  <Box sx={{
                    height: '180px',
                    background: cert.gradient || 'linear-gradient(135deg, #5b3df6 0%, #3b82f6 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                  }}>
                    {cert.image ? (
                      <img 
                        src={cert.image} 
                        alt={cert.name}
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain',
                          borderRadius: '8px'
                        }}
                      />
                    ) : (
                      <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        color: 'white',
                        textAlign: 'center'
                      }}>
                        <Box sx={{
                          width: 60,
                          height: 60,
                          borderRadius: '50%',
                          backgroundColor: 'rgba(255, 255, 255, 0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          mb: 2
                        }}>
                          <Typography sx={{ fontSize: '24px', fontWeight: 'bold' }}>
                            {cert.name.charAt(0)}
                          </Typography>
                        </Box>
                        <Typography sx={{ fontSize: '14px', fontWeight: '500' }}>
                          {cert.category}
                        </Typography>
                      </Box>
                    )}
                  </Box>

                  {/* Certificate Content */}
                  <Box sx={{ padding: '24px' }}>
                    <Typography sx={{
                      fontSize: '20px',
                      fontWeight: '700',
                      color: '#333',
                      mb: 1,
                      lineHeight: '1.3'
                    }}>
                      {cert.name}
                    </Typography>

                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                      <Typography sx={{
                        color: '#5b3df6',
                        fontSize: '14px',
                        fontWeight: '600'
                      }}>
                        {cert.issuer}
                      </Typography>
                      <Typography sx={{
                        color: '#666',
                        fontSize: '14px'
                      }}>
                        • {cert.year}
                      </Typography>
                    </Box>

                    {cert.description && (
                      <Typography sx={{
                        color: '#666',
                        fontSize: '14px',
                        lineHeight: '1.6',
                        mb: 3
                      }}>
                        {cert.description}
                      </Typography>
                    )}

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Box sx={{
                        backgroundColor: 'rgba(91, 61, 246, 0.08)',
                        color: '#5b3df6',
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '12px',
                        fontWeight: '500'
                      }}>
                        {cert.category}
                      </Box>

                      <ViewButton
                        onClick={(e) => handleViewCertificate(cert.pdfUrl, e)}
                      >
                        View Certificate
                      </ViewButton>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Call to Action Section */}
          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, color: '#333' }}>
              Interested in working together?
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: '#666', maxWidth: 600, mx: 'auto' }}>
              I'm always open to discussing new opportunities and interesting projects. 
              Let's create something amazing together!
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={navigateToContact}
              sx={{
                backgroundColor: '#5b3df6',
                borderRadius: 2,
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#4c2de0',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 25px rgba(91, 61, 246, 0.3)',
                }
              }}
            >
              Get In Touch
            </Button>
          </Box>
        </PortfolioContainer>
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

export default Portfolio;
