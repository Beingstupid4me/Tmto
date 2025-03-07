import React from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  Typography,
  TextField,
  Button
} from "@mui/material";
import { Business, Language, Mail, Phone } from "@mui/icons-material";

function HeroSection() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: { xs: "10vh", md: "10vh" },
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start", // Align content to the left horizontally
      }}
    >
      {/* Overlay gradient for a dramatic effect */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background: "#F5F5F5",
          opacity: 0.9,
        }}
      />
      <Container
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "left", // Change text alignment to left
          color: "#fff",
          py: { xs: 6, md: 8 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            display: "inline-block", // Shrink-wraps the element to its content
            fontWeight: 700,
            letterSpacing: 2,
            mb: 2,
            color: "black",
            position: "relative",
            paddingBottom: "10px",
            "&::after": {
              content: '""',
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "100%", // Takes the full width of the heading
              height: "4px",
              background: "linear-gradient(90deg, #8b5cf6, #20b2aa)",
              borderRadius: "2px",
            },
          }}
        >
          Contact Us
        </Typography>

        
      </Container>
    </Box>
  );
}


function ContactInfo() {
  const contactDetails = [
    {
      icon: <Business sx={{ color: "#8b5cf6", fontSize: 30 }} />,
      title: "Address",
      content: "A-303, Academic Building, Okhla Industrial Estate, Phase III",
      link: null
    },
    {
      icon: <Phone sx={{ color: "#8b5cf6", fontSize: 30 }} />,
      title: "Phone",
      content: "011-26907550",
      link: "tel:011-26907550"
    },
    {
      icon: <Language sx={{ color: "#8b5cf6", fontSize: 30 }} />,
      title: "Website",
      content: "https://iiitd.ac.in/otmt",
      link: "https://iiitd.ac.in/otmt"
    },
    {
      icon: <Mail sx={{ color: "#8b5cf6", fontSize: 30 }} />,
      title: "Email",
      content: "alok@iiitd.ac.in",
      link: "mailto:alok@iiitd.ac.in"
    }
  ];

  return (
    <Card
      sx={{
        p: 3,
        background:
          "linear-gradient(to bottom, #ffffff, rgba(241, 245, 249, 0.3))",
        boxShadow: 3,
        borderRadius: 2,
        height: "100%"
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
        Get in Touch
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {contactDetails.map((detail, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.02)" }
            }}
          >
            {detail.icon}
            <Box>
              <Typography sx={{ fontWeight: 500 }}>{detail.title}</Typography>
              {detail.link ? (
                <a href={detail.link} style={{ textDecoration: "none" }}>
                  <Typography
                    sx={{
                      color: "text.secondary",
                      fontSize: "0.875rem",
                      transition: "color 0.3s",
                      "&:hover": { color: "#8b5cf6" }
                    }}
                  >
                    {detail.content}
                  </Typography>
                </a>
              ) : (
                <Typography
                  sx={{ color: "text.secondary", fontSize: "0.875rem" }}
                >
                  {detail.content}
                </Typography>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Card>
  );
}

function MapSection() {
  return (
    <Card
      sx={{
        boxShadow: 3,
        borderRadius: 2,
        overflow: "hidden",
        height: "100%"
      }}
    >
      <Box sx={{ position: "relative", pt: "56.25%" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.9584425776574!2d77.27072131492844!3d28.544076982452995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3e564daac1d%3A0x2c582e340e7bc556!2sIIIT-Delhi%20R%26D%20Building!5e0!3m2!1sen!2sin!4v1645524815197!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, position: "absolute", top: 0, left: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="IIIT Delhi Location"
        />
      </Box>
    </Card>
  );
}

// function ContactForm() {
//   return (
//     <Card sx={{ p: 3, boxShadow: 3, borderRadius: 2 }}>
//       <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
//         Send us a Message
//       </Typography>
//       <Box component="form" noValidate sx={{ mt: 1 }}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               id="name"
//               label="Full Name"
//               placeholder="Enter your full name"
//               variant="outlined"
//             />
//           </Grid>
//           <Grid item xs={12} md={6}>
//             <TextField
//               fullWidth
//               id="email"
//               label="Email ID"
//               type="email"
//               placeholder="Enter your email"
//               variant="outlined"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField
//               fullWidth
//               id="query"
//               label="Query"
//               placeholder="How can we help you?"
//               multiline
//               rows={6}
//               variant="outlined"
//             />
//           </Grid>
//           <Grid item xs={12}>
//             <Button
//               variant="contained"
//               fullWidth
//               sx={{
//                 background:
//                   "linear-gradient(90deg, #8b5cf6, #20b2aa)",
//                 color: "#fff",
//                 px: 3,
//                 py: 1.5,
//                 fontSize: "1rem",
//                 fontWeight: 500,
//                 textTransform: "none",
//                 transition: "transform 0.3s, box-shadow 0.3s",
//                 "&:hover": {
//                   transform: "scale(1.05)",
//                   boxShadow: 6,
//                   background:
//                     "linear-gradient(90deg, #8b5cf6, #20b2aa)"
//                 }
//               }}
//             >
//               Submit Details
//             </Button>
//           </Grid>
//         </Grid>
//       </Box>
//     </Card>
//   );
// }

export default function ContactPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      {/* Hero Section */}
      <Box className="hero-section" minHeight='20vh'>
        <Container maxWidth="lg">
          <Box className="hero-content">
            <Typography variant="overline" className="service-label">
              Information
            </Typography>
            <Typography variant="h1" className="hero-title">
              Contact Us
            </Typography>
            
            
          </Box>
        </Container>
      </Box>
      <Container sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={4}>
          <Grid item xs={12} lg={4}>
            <ContactInfo />
          </Grid>
          <Grid item xs={12} lg={8}>
            <MapSection />
          </Grid>
          {/* <Grid item xs={12}>
            <ContactForm />
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
}