// TechDetail.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link as RouterLink } from "react-router-dom";
import {
  Container,
  Typography,
  Button,
  CircularProgress,
  Box,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  AppBar,
  Toolbar,
  Card,
  CardContent,
  Chip,
  Paper,
  useMediaQuery,
  createTheme,
  ThemeProvider,
  Avatar,
  Breadcrumbs,
  Link,
  IconButton,
  Tooltip
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LinkIcon from "@mui/icons-material/Link";
import DescriptionIcon from "@mui/icons-material/Description";
import SchoolIcon from "@mui/icons-material/School";
import CategoryIcon from "@mui/icons-material/Category";
import HomeIcon from "@mui/icons-material/Home";
import ShareIcon from "@mui/icons-material/Share";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import DownloadIcon from "@mui/icons-material/Download";
import { motion } from "framer-motion";
import logo from "../../../assets/images/iiitdlogo.png";

// IIITD Theme
const iiitdTheme = createTheme({
  palette: {
    primary: {
      main: "#2A9D8F", // IIITD teal/green color
      light: "#4DB6A9",
      dark: "#1E7268",
      contrastText: "#FFFFFF"
    },
    secondary: {
      main: "#264653", // Darker complementary color
      light: "#3A5F6F",
      dark: "#1A323C",
      contrastText: "#FFFFFF"
    },
    background: {
      default: "#F5F7F8",
      paper: "#FFFFFF"
    },
    text: {
      primary: "#333333",
      secondary: "#5F6368"
    },
    divider: "#E0E0E0"
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    h3: {
      fontWeight: 600,
      fontSize: "2rem",
      lineHeight: 1.2
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: 1.4
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: 1.4
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6
    }
  },
  shape: {
    borderRadius: 8
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          fontWeight: 500,
          padding: "8px 16px"
        }
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)"
        }
      }
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500
        }
      }
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 8
        }
      }
    }
  }
});



// TechCard Component with animation
const TechCard = ({ tech }) => (
  <motion.div
    whileHover={{ 
      y: -4,
      transition: { duration: 0.2 }
    }}
  >
    <RouterLink
      to={`/tech/${tech.id}`}
      style={{ textDecoration: "none" }}
    >
      <Paper 
        elevation={1}
        sx={{
          height: '100%',
          transition: 'all 0.2s ease',
          '&:hover': {
            boxShadow: 3,
            borderLeft: '4px solid #2A9D8F'
          },
          wordBreak: 'break-word'
        }}
      >
        <CardContent sx={{ p: 2.5, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Typography 
            variant="caption" 
            sx={{ 
              color: 'primary.main', 
              fontWeight: 500, 
              mb: 1,
              display: 'block'
            }}
          >
            {tech.docket || "Technology"}
          </Typography>
          
          <Typography
            variant="h6"
            sx={{ 
              fontWeight: 600,
              mb: 1.5,
              color: 'text.primary'
            }}
          >
            {tech.name}
          </Typography>
          
          <Typography
            variant="body2"
            sx={{ 
              mb: 2,
              color: 'text.secondary',
              flexGrow: 1
            }}
          >
            {tech.description || "No description available"}
          </Typography>
          
          <Box sx={{ mt: 'auto' }}>
            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                display: 'block',
                mb: 0.5,
                color: 'text.primary'
              }}
            >
              {tech.innovators || "Unknown Innovator"}
            </Typography>
            
            <Typography 
              variant="caption" 
              color="text.secondary"
            >
              Genre: {tech.genre || "Unspecified"}
            </Typography>
          </Box>
        </CardContent>
      </Paper>
    </RouterLink>
  </motion.div>
);

// Loading Skeleton Component
const LoadingState = () => (
  <Container sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "70vh" }}>
    <Box sx={{ textAlign: "center" }}>
      <CircularProgress size={60} sx={{ color: "#2A9D8F", mb: 2 }} />
      <Typography variant="h6" sx={{ color: "text.secondary" }}>
        Loading technology details...
      </Typography>
    </Box>
  </Container>
);

// Main TechDetail Component
function TechDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tech, setTech] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedTechs, setRelatedTechs] = useState([]);
  const isMobile = useMediaQuery(iiitdTheme.breakpoints.down('sm'));
  const isMedium = useMediaQuery(iiitdTheme.breakpoints.down('md'));

  // Fetch main technology details
  useEffect(() => {
    const fetchTechDetails = async () => {
      try {
        const res = await fetch(`http://localhost:5000/technologies/${id}`);
        if (!res.ok) {
          throw new Error("Technology not found");
        }
        const data = await res.json();
        setTech(data);
        setLoading(false);
        
        // Scroll to top when new tech is loaded
        window.scrollTo(0, 0);
      } catch (error) {
        console.error("Error fetching technology:", error);
        setTech(null);
        setLoading(false);
      }
    };
    
    fetchTechDetails();
  }, [id]);

  // Fetch related technologies based on the same genre
  useEffect(() => {
    if (tech) {
      const fetchRelatedTechs = async () => {
        try {
          const url = new URL("http://localhost:5000/technologies");
          url.searchParams.set("genres", tech.genre || "");
          url.searchParams.set("limit", 5);
          
          const res = await fetch(url);
          const data = await res.json();
          
          // Filter out the current technology based on id
          const filtered = (data.data || []).filter((t) => t.id !== tech.id);
          setRelatedTechs(filtered);
        } catch (error) {
          console.error("Error fetching related technologies:", error);
        }
      };
      
      fetchRelatedTechs();
    }
  }, [tech]);

  // Helper function to randomly select a number of items from an array
  const getRandomTechs = (arr, count) => {
    if (!arr || !Array.isArray(arr) || arr.length === 0) return [];
    const shuffled = [...arr].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
  };

  // Share technology function
  const shareTechnology = () => {
    if (navigator.share) {
      navigator.share({
        title: tech.name,
        text: tech.overview || tech.description || "",
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      // Fallback for browsers that don't support the Web Share API
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert("Link copied to clipboard!"))
        .catch((err) => console.error("Could not copy text: ", err));
    }
  };

  // Helper function to safely render innovators
  const renderInnovators = () => {
    if (!tech.innovators) return <Typography variant="body2">No innovator information available</Typography>;
    
    // Check if innovators is a string that can be split
    if (typeof tech.innovators === 'string') {
      const innovatorsList = tech.innovators.includes('/') 
        ? tech.innovators.split('/') 
        : [tech.innovators];
      
      return (
        <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 1 }}>
          {innovatorsList.map((innovator, idx) => (
            <Chip
              key={idx}
              avatar={
                <Avatar sx={{ bgcolor: 'primary.light' }}>
                  {innovator.trim()[0] || "?"}
                </Avatar>
              }
              label={innovator.trim()}
              variant="outlined"
              size="small"
              sx={{ borderColor: 'primary.light' }}
            />
          ))}
        </Box>
      );
    }
    
    // Fallback if innovators is not a string
    return (
      <Typography variant="body2" sx={{ color: 'text.primary' }}>
        {String(tech.innovators)}
      </Typography>
    );
  };

  // Helper function to safely render arrays
  const renderList = (items) => {
    if (!items || !Array.isArray(items) || items.length === 0) {
      return (
        <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
          No information available
        </Typography>
      );
    }
    
    return (
      <List dense disablePadding>
        {items.map((item, index) => (
          <ListItem 
            key={index} 
            disableGutters 
            sx={{ 
              py: 0.75,
              px: 1,
              borderRadius: 1,
              mb: 1,
              bgcolor: index % 2 === 0 ? 'rgba(42, 157, 143, 0.05)' : 'transparent'
            }}
          >
            <ListItemIcon sx={{ minWidth: 28 }}>
              <CheckCircleIcon
                sx={{ color: 'primary.main' }}
                fontSize="small"
              />
            </ListItemIcon>
            <ListItemText 
              primary={item}
              primaryTypographyProps={{ 
                variant: 'body2',
                color: 'text.primary',
                wordBreak: 'break-word'
              }}
            />
          </ListItem>
        ))}
      </List>
    );
  };

  if (loading) {
    return (
      <ThemeProvider theme={iiitdTheme}>
        <LoadingState />
      </ThemeProvider>
    );
  }

  if (!tech) {
    return (
      <ThemeProvider theme={iiitdTheme}>
        <Container sx={{ mt: 4, textAlign: "center", py: 8, maxWidth: "1200px", mx: "auto" }}>
          <Paper 
            elevation={1} 
            sx={{ 
              p: 4, 
              maxWidth: 500,
              mx: 'auto',
              wordBreak: 'break-word'
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2 }}>
              Technology not found
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              The technology you're looking for doesn't exist or has been removed.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate(-1)}
              startIcon={<ArrowBackIcon />}
            >
              Go Back
            </Button>
          </Paper>
        </Container>
      </ThemeProvider>
    );
  }

  // Get 4 random similar technologies (or fewer if not enough available)
  const similarTechs = getRandomTechs(relatedTechs, Math.min(4, relatedTechs.length));

  return (
    <ThemeProvider theme={iiitdTheme}>
      <Box sx={{ bgcolor: "white", minHeight: "100vh" }}>
      <Box className="hero-section" minHeight="20vh">
  <Container maxWidth="lg">
    <Box
      className="hero-content"
      sx={{
        maxWidth: "100%",
        overflow: "hidden", // hide any overflow if needed
      }}
    >
      <Typography
        variant="overline"
        className="service-label"
        sx={{
          mr: 1,
          overflowWrap: "break-word",
          wordBreak: "break-word",
          maxWidth: "100%",
        }}
      >
        {tech.docket}
      </Typography>
      <Typography
        variant="overline"
        className="service-label"
        sx={{
          overflowWrap: "break-word",
          wordBreak: "break-word",
          maxWidth: "100%",
        }}
      >
        TRL: {tech.trl}
      </Typography>
      <Typography
        variant="h1"
        className="hero-title"
        sx={{
          overflowWrap: "break-word",
          wordBreak: "break-word",
          maxWidth: "100%",
          whiteSpace: "normal" // allow wrapping instead of forcing a single line
        }}
      >
        {tech.name}
      </Typography>
      <Typography
        variant="body1"
        className="hero-description"
        sx={{
          overflowWrap: "break-word",
          wordBreak: "break-word",
          maxWidth: "100%",
          whiteSpace: "normal" // allow wrapping here as well
        }}
      >
        {tech.overview || tech.description || "Innovative technology developed at IIITD"}
      </Typography>
    </Box>
  </Container>
</Box>

        
        <Container maxWidth="lg" sx={{ pt: { xs: 2, md: 3 }, pb: 6, maxWidth: "1200px", mx: "auto" }}>
          
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            

            {/* Main Details */}
            <Grid container spacing={3}>
              {/* Left Column: Detailed Description & Technical Specs */}
              <Grid item xs={12} md={8}>
                <Paper 
                  elevation={1} 
                  sx={{ 
                    p: { xs: 2, sm: 3 }, 
                    mb: 3, 
                    bgcolor: 'white', 
                    wordBreak: 'break-word',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Box 
                    sx={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '4px',
                      height: '100%',
                      bgcolor: 'primary.light'
                    }}
                  />
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <DescriptionIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="h5">
                      Description
                    </Typography>
                  </Box>
                  
                  <Typography
                    variant="body1"
                    sx={{ color: 'text.secondary', lineHeight: 1.7, wordBreak: 'break-word' }}
                  >
                    {tech.detailedDescription || "No detailed description available"}
                  </Typography>
                </Paper>
                
                <Paper 
                  elevation={1} 
                  sx={{ 
                    p: { xs: 2, sm: 3 }, 
                    mb: 3, 
                    bgcolor: 'white', 
                    wordBreak: 'break-word',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Box 
                    sx={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '4px',
                      height: '100%',
                      bgcolor: 'primary.light'
                    }}
                  />
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <DescriptionIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="h5">
                      Technical Specifications
                    </Typography>
                  </Box>
                  
                  <Typography 
                    variant="body1" 
                    sx={{ color: 'text.secondary', lineHeight: 1.7, wordBreak: 'break-word' }}
                  >
                    {tech.technicalSpecifications || "No technical specifications available"}
                  </Typography>
                </Paper>
                
                <Paper 
                  elevation={1} 
                  sx={{ 
                    p: { xs: 2, sm: 3 }, 
                    bgcolor: 'white', 
                    wordBreak: 'break-word',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Box 
                    sx={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '4px',
                      height: '100%',
                      bgcolor: 'primary.light'
                    }}
                  />
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <DescriptionIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="h5">
                      Overview
                    </Typography>
                  </Box>
                  
                  <Typography
                    variant="body1"
                    sx={{ color: 'text.secondary', lineHeight: 1.7, wordBreak: 'break-word' }}
                  >
                    {tech.description || "No description available"}
                  </Typography>
                </Paper>
              </Grid>

              {/* Right Column: Quick Info */}
              <Grid item xs={12} md={4}>
                <Paper 
                  elevation={1} 
                  sx={{ 
                    p: { xs: 2, sm: 3 }, 
                    bgcolor: 'white', 
                    wordBreak: 'break-word',
                    position: 'sticky',
                    top: 16,
                    overflow: 'hidden'
                  }}
                >
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                      <CategoryIcon sx={{ mr: 1, color: 'primary.main' }} />
                      <Typography variant="h6">
                        Genre & Docket
                      </Typography>
                    </Box>
                    
                    <Divider sx={{ mb: 2 }} />
                    
                    <Grid container spacing={1}>
                      <Grid item xs={4}>
                        <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.secondary' }}>
                          Genre:
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Chip 
                          label={tech.genre || "Unspecified"} 
                          size="small"
                          sx={{ 
                            bgcolor: 'rgba(42, 157, 143, 0.1)', 
                            color: 'primary.dark',
                            fontWeight: 500
                          }}
                        />
                      </Grid>
                      
                      <Grid item xs={4}>
                        <Typography variant="body2" sx={{ fontWeight: 500, color: 'text.secondary' }}>
                          Docket:
                        </Typography>
                      </Grid>
                      <Grid item xs={8}>
                        <Typography variant="body2" sx={{ color: 'text.primary' }}>
                          {tech.docket || "Not specified"}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  
                  <Box sx={{ mb: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                      <SchoolIcon sx={{ mr: 1, color: 'primary.main' }} />
                      <Typography variant="h6">
                        Innovators
                      </Typography>
                    </Box>
                    
                    <Divider sx={{ mb: 2 }} />
                    
                    {renderInnovators()}
                  </Box>
                  
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                      <CheckCircleIcon sx={{ mr: 1, color: 'primary.main' }} />
                      <Typography variant="h6">
                        Advantages
                      </Typography>
                    </Box>
                    
                    <Divider sx={{ mb: 2 }} />
                    
                    {renderList(tech.advantages)}
                  </Box>
                  
                  {isMobile && (
                    <Box sx={{ mt: 3 }}>
                      <Button
                        variant="outlined"
                        color="primary"
                        fullWidth
                        onClick={() => navigate(-1)}
                        startIcon={<ArrowBackIcon />}
                      >
                        Back to Technologies
                      </Button>
                    </Box>
                  )}
                </Paper>
              </Grid>
            </Grid>

            {/* Applications and Use Cases */}
            <Grid container spacing={3} sx={{ mt: 0.5 }}>
              <Grid item xs={12} md={6}>
                <Paper 
                  elevation={1} 
                  sx={{ 
                    p: { xs: 2, sm: 3 }, 
                    bgcolor: 'white', 
                    wordBreak: 'break-word',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Box 
                    sx={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '4px',
                      height: '100%',
                      bgcolor: 'primary.light'
                    }}
                  />
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CheckCircleIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="h5">
                      Applications
                    </Typography>
                  </Box>
                  
                  <Divider sx={{ mb: 2 }} />
                  
                  {renderList(tech.applications)}
                </Paper>
              </Grid>
              
              <Grid item xs={12} md={6}>
                <Paper 
                  elevation={1} 
                  sx={{ 
                    p: { xs: 2, sm: 3 }, 
                    bgcolor: 'white', 
                    wordBreak: 'break-word',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <Box 
                    sx={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '4px',
                      height: '100%',
                      bgcolor: 'primary.light'
                    }}
                  />
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <CheckCircleIcon sx={{ mr: 1, color: 'primary.main' }} />
                    <Typography variant="h5">
                      Use Cases
                    </Typography>
                  </Box>
                  
                  <Divider sx={{ mb: 2 }} />
                  
                  {renderList(tech.useCases)}
                </Paper>
              </Grid>
            </Grid>

            {/* Related Links */}
            <Paper 
              elevation={1} 
              sx={{ 
                p: { xs: 2, sm: 3 }, 
                mt: 3, 
                bgcolor: 'white', 
                wordBreak: 'break-word',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <Box 
                sx={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  bgcolor: 'primary.light'
                }}
              />
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LinkIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography variant="h5">
                  Related Links
                </Typography>
              </Box>
              
              <Divider sx={{ mb: 2 }} />
              
              <Grid container spacing={2}>
                {tech.relatedLinks && Array.isArray(tech.relatedLinks) && tech.relatedLinks.length > 0 ? (
                  tech.relatedLinks.map((link, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                      <ListItemButton
                        component="a"
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{ 
                          border: '1px solid',
                          borderColor: 'divider',
                          borderRadius: 1,
                          transition: 'all 0.2s',
                          '&:hover': {
                            borderColor: 'primary.main',
                            bgcolor: 'rgba(42, 157, 143, 0.05)'
                          },
                          wordBreak: 'break-word'
                        }}
                      >
                        <ListItemIcon>
                          <LinkIcon sx={{ color: 'primary.main' }} />
                        </ListItemIcon>
                        <ListItemText 
                          primary={link.title}
                          primaryTypographyProps={{ 
                            variant: 'body2',
                            fontWeight: 500,
                            wordBreak: 'break-word'
                          }}
                        />
                      </ListItemButton>
                    </Grid>
                  ))
                ) : (
                  <Grid item xs={12}>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                      No related links available
                    </Typography>
                  </Grid>
                )}
              </Grid>
              
              {!isMobile && (
                <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center' }}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => navigate(-1)}
                    startIcon={<ArrowBackIcon />}
                    sx={{
                      boxShadow: '0 4px 10px rgba(42, 157, 143, 0.25)',
                      '&:hover': {
                        boxShadow: '0 6px 12px rgba(42, 157, 143, 0.3)'
                      }
                    }}
                  >
                    Back to Technologies
                  </Button>
                </Box>
              )}
            </Paper>
          </motion.div>
        </Container>

        {/* Related Technologies Section */}
        {similarTechs.length > 0 && (
          <Box sx={{ bgcolor: 'rgba(42, 157, 143, 0.05)', py: 5 }}>
            <Container maxWidth="lg" sx={{ maxWidth: "1200px", mx: "auto" }}>
              <Typography
                variant="h5"
                sx={{ 
                  mb: 3, 
                  fontWeight: 600, 
                  textAlign: "center",
                  color: 'text.primary'
                }}
              >
                Similar Technologies
              </Typography>
              
              <Grid container spacing={3}>
                {similarTechs.map((techItem) => (
                  <Grid item xs={12} sm={6} md={3} key={techItem.id}>
                    <TechCard tech={techItem} />
                  </Grid>
                ))}
              </Grid>
              
              <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
                <Button
                  variant="outlined"
                  color="primary"
                  component={RouterLink}
                  to="/technologies"
                  sx={{
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2
                    }
                  }}
                >
                  View All Technologies
                </Button>
              </Box>
            </Container>
          </Box>
        )}

        </Box>
    </ThemeProvider>
  );
}

export default TechDetail;