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
  Grid,
  Collapse,
  Divider
} from '@mui/material';
import { styled } from '@mui/system';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CodeIcon from '@mui/icons-material/Code';
import LaunchIcon from '@mui/icons-material/Launch';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import profilePhoto from '../src/assets/Pictures/photo.jpg';
import OoredooLogo from '../src/assets/Pictures/ooredoo.svg';
import AlQudsLogo from '../src/assets/Pictures/aqu.png';
import MalardalenLogo from '../src/assets/Pictures/mdu.png';
import buthorLogo from '../src/assets/Pictures/buthor .png';
import cvFile from '../src/assets/Files/cv.pdf';

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
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'rgba(91, 61, 246, 0.08)',
    transform: 'translateX(8px)',
    '& .MuiListItemText-primary': {
      color: '#5b3df6',
      fontWeight: 600,
    },
  },
}));

const MobileNavText = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  fontWeight: 500,
  color: theme.palette.text.primary,
  transition: 'all 0.3s ease',
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

// Section Container for normal scrolling
const SectionContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  padding: theme.spacing(12, 0, 8, 0),
  position: 'relative',
}));

// Home Section Styles
const MainSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
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

// Skills Section Styles
const SkillsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: theme.spacing(1.5),
  justifyContent: { xs: 'center', lg: 'flex-start' },
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(4),
  maxWidth: '100%',
}));

const SkillChip = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  padding: theme.spacing(0.75, 1.5),
  backgroundColor: 'rgba(91, 61, 246, 0.08)',
  border: '1px solid rgba(91, 61, 246, 0.15)',
  borderRadius: theme.spacing(3),
  fontSize: '0.875rem',
  fontWeight: 500,
  color: '#5b3df6',
  transition: 'all 0.3s ease',
  cursor: 'default',
  '&:hover': {
    backgroundColor: 'rgba(91, 61, 246, 0.12)',
    borderColor: 'rgba(91, 61, 246, 0.25)',
    transform: 'translateY(-1px)',
  },
}));

const SkillIcon = styled('img')(({ theme }) => ({
  width: 20,
  height: 20,
  objectFit: 'contain',
}));

// About Me Section Styles
const AboutContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(8),
  maxWidth: '1400px',
  margin: '0 auto',
  [theme.breakpoints.down('lg')]: {
    flexDirection: 'column',
    gap: theme.spacing(4),
  },
}));

const AboutImageContainer = styled(Box)(({ theme }) => ({
  flex: '1 1 40%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  maxWidth: 400,
  [theme.breakpoints.down('lg')]: {
    order: 1,
    maxWidth: 350,
  },
}));

const AboutContentBox = styled(Box)(({ theme }) => ({
  flex: '1 1 60%',
  maxWidth: 600,
  [theme.breakpoints.down('lg')]: {
    order: 2,
    textAlign: 'center',
  },
}));

const AboutImageWrapper = styled(Box)(({ theme }) => ({
  position: 'relative',
  width: 350,
  height: 400,
  borderRadius: 24,
  overflow: 'hidden',
  background: 'linear-gradient(135deg, rgba(91, 61, 246, 0.1), rgba(59, 130, 246, 0.1))',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(135deg, rgba(91, 61, 246, 0.05), rgba(59, 130, 246, 0.05))',
    zIndex: 1,
  },
  [theme.breakpoints.down('md')]: {
    width: 300,
    height: 350,
  },
}));

const AboutProfileImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center center',
  position: 'relative',
  zIndex: 0,
}));

// Portfolio Card Styles with fixed heights
const PortfolioCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  border: '1px solid rgba(91, 61, 246, 0.1)',
  boxShadow: '0 8px 32px rgba(91, 61, 246, 0.08)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  background: '#ffffff',
  height: 400, // Fixed height for all cards
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 48px rgba(91, 61, 246, 0.15)',
    borderColor: 'rgba(91, 61, 246, 0.2)',
  },
}));

// Certificate Card with smaller fixed height
const CertificateCard = styled(Card)(({ theme }) => ({
  borderRadius: theme.spacing(3),
  border: '1px solid rgba(91, 61, 246, 0.1)',
  boxShadow: '0 8px 32px rgba(91, 61, 246, 0.08)',
  transition: 'all 0.3s ease',
  position: 'relative',
  overflow: 'hidden',
  background: '#ffffff',
  height: 320, // Fixed height for certificate cards
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 48px rgba(91, 61, 246, 0.15)',
    borderColor: 'rgba(91, 61, 246, 0.2)',
  },
}));

const ProjectImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 200,
  background: 'linear-gradient(135deg, rgba(91, 61, 246, 0.1), rgba(59, 130, 246, 0.1))',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  border: '2px dashed rgba(91, 61, 246, 0.2)',
  borderBottom: 'none',
  flexShrink: 0, // Prevent shrinking
}));

const CertificateImageContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 150,
  background: 'linear-gradient(135deg, rgba(91, 61, 246, 0.1), rgba(59, 130, 246, 0.1))',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  border: '2px dashed rgba(91, 61, 246, 0.2)',
  borderBottom: 'none',
  flexShrink: 0, // Prevent shrinking
}));

const ProjectImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
}));

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
  marginTop: 'auto', // Push to bottom
  '&:hover': {
    backgroundColor: '#5b3df6',
    color: '#fff',
    borderColor: '#5b3df6',
  },
}));

const GithubButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#24292e',
  color: '#fff',
  borderRadius: theme.spacing(2),
  padding: theme.spacing(1.5, 4),
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  boxShadow: '0 4px 15px rgba(36, 41, 46, 0.3)',
  marginTop: theme.spacing(4),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#1b1f23',
    boxShadow: '0 6px 20px rgba(36, 41, 46, 0.4)',
    transform: 'translateY(-2px)',
  },
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
  marginBottom: theme.spacing(6),
  maxWidth: 600,
  margin: `0 auto ${theme.spacing(6)}px auto`,
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

const AboutTitle = styled(Typography)(({ theme }) => ({
  fontSize: 'clamp(2rem, 4vw, 2.5rem)',
  fontWeight: 800,
  marginBottom: theme.spacing(3),
  color: theme.palette.text.primary,
  letterSpacing: '-0.02em',
  [theme.breakpoints.down('lg')]: {
    textAlign: 'center',
  },
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

const AboutText = styled(Typography)(({ theme }) => ({
  fontSize: '1.1rem',
  lineHeight: 1.7,
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(2.5),
  textAlign: 'justify',
  [theme.breakpoints.down('lg')]: {
    textAlign: 'center',
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

  const name = "Mohammad Almasri";
  const titleHighlight = "Full Stack Developer";
  const profileImageUrl = profilePhoto;

  const socialLinks = {
    github: "https://github.com/mohammadmasri9",
    linkedin: "https://linkedin.com/in/mohammad-almasri-5b606525a",
    instagram: "https://instagram.com/masri.m7md",
    twitter: "https://x.com/mohammad79537132",
  };

  const navItems = ['Home', 'Experience', 'About me', 'Portfolio'];

  // CV Download Function
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cvFile;
    link.download = 'Mohammad_Almasri_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Skills data with real technology logos (updated with new skills)
  const skills = [
    { 
      name: 'MongoDB', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    { 
      name: 'Firebase', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
    },
    { 
      name: 'Flutter', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg'
    },
    { 
      name: 'Node.js', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    },
    { 
      name: 'SQL', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    { 
      name: 'React.js', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    { 
      name: 'Java', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    { 
      name: 'JavaScript', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    { 
      name: 'Python', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    { 
      name: 'TypeScript', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
    },
    { 
      name: 'Web Design', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg'
    },
    { 
      name: 'User Interface Design', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sketch/sketch-original.svg'
    },
    { 
      name: 'User Experience (UX)', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg'
    },
    { 
      name: 'Object-Oriented Programming', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg'
    },
    { 
      name: 'PHP', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
    },
    { 
      name: 'Adobe Photoshop', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg'
    },
    { 
      name: 'Web Interface Design', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    // New skills added
    { 
      name: 'Supabase', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg'
    },
    { 
      name: 'Django', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg'
    },
    { 
      name: 'Flask', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg'
    },
    { 
      name: 'ASP.NET', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg'
    },
    { 
      name: 'API Development', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg'
    },
    { 
      name: 'React Native', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    { 
      name: 'Technical Support', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg'
    }
  ];

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
      logo: buthorLogo,
      hasLogo: true
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

  const projects = [
    {
      name: 'Uniconnect',
      description: 'A comprehensive platform connecting university students with opportunities, resources, and networking capabilities.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
      status: 'Completed',
      type: 'Web Application',
      image: null
    },
    {
      name: 'SKLR',
      description: 'An innovative learning management system designed to enhance educational experiences and streamline course management.',
      technologies: ['React', 'Django', 'PostgreSQL', 'Python'],
      status: 'Completed',
      type: 'Educational Platform',
      image: null
    },
    {
      name: 'My Portfolio',
      description: 'A modern, responsive portfolio website showcasing my projects, skills, and professional experience.',
      technologies: ['React', 'Material-UI', 'JavaScript', 'CSS'],
      status: 'Completed',
      type: 'Portfolio Website',
      image: null
    }
  ];

  const certificates = [
    {
      name: 'Use Canva to Create Desktop and Mobile-friendly Web Pages',
      issuer: 'Coursera',
      category: 'Web Design',
      year: '2024',
      image: null
    },
    {
      name: 'Create a no-code responsive website with Webflow',
      issuer: 'Coursera',
      category: 'Web Development',
      year: '2024',
      image: null
    },
    {
      name: 'Getting Started with Microsoft PowerPoint',
      issuer: 'Microsoft',
      category: 'Professional Skills',
      year: '2023',
      image: null
    },
    {
      name: 'Create a Resume and Cover Letter with Word',
      issuer: 'Microsoft',
      category: 'Professional Skills',
      year: '2023',
      image: null
    },
    {
      name: 'Professional Communication in English',
      issuer: 'Professional Development',
      category: 'Communication',
      year: '2023',
      image: null
    },
    {
      name: 'Cybersecurity Fundamentals',
      issuer: 'Professional Development',
      category: 'Security',
      year: '2023',
      image: null
    }
  ];

  const handleSocialClick = (platform) => {
    window.open(socialLinks[platform], '_blank', 'noopener,noreferrer');
  };

  // FIXED: Optimized scroll function with immediate menu close
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }, 100); // Small delay to allow menu to start closing
    }
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // FIXED: Immediate menu close for navigation functions
  const navigateToPortfolio = () => {
    setMobileMenuOpen(false); // Close immediately
    setTimeout(() => {
      window.location.href = '/portfolio';
    }, 100);
  };

  const navigateToContact = () => {
    setMobileMenuOpen(false); // Close immediately
    setTimeout(() => {
      window.location.href = '/contact';
    }, 100);
  };

  // FIXED: Main navigation handler with immediate menu close
  const handleNavItemClick = (item) => {
    // 1. Close menu immediately
    setMobileMenuOpen(false);
    
    // 2. Handle navigation with slight delay to allow menu to start closing
    const navigationDelay = 100;
    
    if (item === 'Portfolio') {
      setTimeout(() => navigateToPortfolio(), navigationDelay);
    } else {
      setTimeout(() => {
        scrollToSection(
          item === 'Home' ? 'home' : 
          item === 'Experience' ? 'experience' : 
          item === 'About me' ? 'about' : 
          'portfolio'
        );
      }, navigationDelay);
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

          {/* Mobile Slide Down Menu - FIXED: Faster timeout */}
          <Collapse in={mobileMenuOpen} timeout={200}>
            <MobileMenuContainer>
              <Container maxWidth="xl">
                <MobileNavList>
                  {navItems.map((item, index) => (
                    <MobileNavItem
                      key={item}
                      onClick={() => handleNavItemClick(item)}
                      sx={{
                        animationDelay: `${index * 100}ms`,
                        animation: mobileMenuOpen ? 'slideInLeft 0.3s ease forwards' : 'none',
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
                    onClick={() => handleSocialClick('linkedin')}
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon sx={{ fontSize: 20 }} />
                  </MobileSocialButton>
                  
                  <MobileSocialButton
                    onClick={() => handleSocialClick('github')}
                    aria-label="GitHub"
                  >
                    <GitHubIcon sx={{ fontSize: 20 }} />
                  </MobileSocialButton>
                  
                  <MobileSocialButton
                    onClick={() => handleSocialClick('instagram')}
                    aria-label="Instagram"
                  >
                    <InstagramIcon sx={{ fontSize: 20 }} />
                  </MobileSocialButton>
                  
                  <MobileSocialButton
                    onClick={() => handleSocialClick('twitter')}
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

      {/* Add keyframes for animations */}
      <style>
        {`
          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-20px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>

      {/* Section 1: Home */}
      <SectionContainer id="home" sx={{ bgcolor: '#f7fbff' }}>
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

              {/* Skills Section */}
              <Box sx={{ mb: 4 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    fontWeight: 600, 
                    mb: 2, 
                    color: 'text.primary',
                    textAlign: { xs: 'center', lg: 'left' }
                  }}
                >
                  Skills
                </Typography>
                <SkillsContainer>
                  {skills.map((skill, index) => (
                    <SkillChip key={index}>
                      <SkillIcon 
                        src={skill.icon} 
                        alt={`${skill.name} logo`}
                        onError={(e) => {
                          // Fallback if image fails to load
                          e.target.style.display = 'none';
                        }}
                      />
                      <span>{skill.name}</span>
                    </SkillChip>
                  ))}
                </SkillsContainer>
              </Box>
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
      </SectionContainer>

      {/* Section 2: Experience */}
      <SectionContainer id="experience" sx={{ bgcolor: '#ffffff' }}>
        <Container maxWidth="lg">
          <SectionTitle>
            My Experience
          </SectionTitle>
          <SectionSubtitle sx={{ textAlign: 'center', margin: '0 auto', maxWidth: '600px' }}>
            A journey through my professional development and educational achievements
          </SectionSubtitle>

          <Grid container spacing={3}>
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
      </SectionContainer>

      {/* Section 3: About Me */}
      <SectionContainer id="about" sx={{ bgcolor: '#f7fbff' }}>
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <AboutContainer>
            <AboutImageContainer>
              <AboutImageWrapper>
                <AboutProfileImage 
                  src={profileImageUrl} 
                  alt={`${name} - About Me`}
                />
              </AboutImageWrapper>
            </AboutImageContainer>

            <AboutContentBox>
              <Typography 
                variant="overline" 
                sx={{ 
                  color: '#5b3df6', 
                  fontWeight: 600, 
                  letterSpacing: 2,
                  mb: 1,
                  display: 'block'
                }}
              >
                About
              </Typography>
              
              <AboutTitle>
                About Me
              </AboutTitle>
              
              <AboutText>
                I'm a passionate Full Stack Developer and Information Technology student at Al-Quds University, 
                with hands-on experience in modern web development technologies. My journey in tech has been 
                driven by curiosity and a desire to create meaningful digital solutions.
              </AboutText>
              
              <AboutText>
                Currently working as a Software Developer Intern at Ooredoo, I've gained valuable experience 
                in both frontend and backend development, working with technologies like React, Django, Java, 
                and Python. I'm also expanding my global perspective through an exchange program at Mälardalen 
                University in Sweden.
              </AboutText>
              
              <AboutText>
                When I'm not coding, I enjoy exploring new technologies, contributing to open-source projects, 
                and sharing knowledge with the developer community. I believe in continuous learning and 
                staying updated with the latest industry trends.
              </AboutText>

              <Box sx={{ display: 'flex', gap: 2, mt: 4, justifyContent: { xs: 'center', lg: 'flex-start' } }}>
                <Button
                  variant="contained"
                  onClick={handleDownloadCV}
                  sx={{
                    backgroundColor: '#5b3df6',
                    borderRadius: 2,
                    px: 4,
                    py: 1.5,
                    textTransform: 'none',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: '#4c2de0',
                    }
                  }}
                >
                  Download CV
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: '#5b3df6',
                    color: '#5b3df6',
                    borderRadius: 2,
                    px: 4,
                    py: 1.5,
                    textTransform: 'none',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: 'rgba(91, 61, 246, 0.08)',
                    }
                  }}
                  onClick={navigateToContact}
                >
                  Contact Me
                </Button>
              </Box>
            </AboutContentBox>
          </AboutContainer>
        </Container>
      </SectionContainer>

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

export default HomePage;
