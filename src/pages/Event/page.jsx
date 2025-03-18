import React, { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  IconButton,
  alpha,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./page.css";

function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showMoreUpcoming, setShowMoreUpcoming] = useState(false);
  const [showMorePast, setShowMorePast] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/events")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, []);

  // Separate events using the live flag:
  const upcomingEvents = events.filter((event) => event.live);
  const pastEvents = events.filter((event) => !event.live);

  // Determine events to display (top 3 or all if expanded):
  const upcomingToShow = showMoreUpcoming
    ? upcomingEvents
    : upcomingEvents.slice(0, 3);
  const pastToShow = showMorePast ? pastEvents : pastEvents.slice(0, 3);

  if (loading) return <div>Loading events...</div>;
  if (error) return <div>Error loading events.</div>;

  return (
    <Box className="events-page">
      {/* Top Hero Section */}
      <Box className="hero-section" minHeight="20vh">
        <Container maxWidth="lg">
          <Box className="hero-content">
            <Typography variant="overline" className="service-label">
              Upcoming Events
            </Typography>
            <Typography variant="h1" className="hero-title">
              Events &amp; Activities
            </Typography>
            <Typography variant="body1" className="hero-description">
              Join us for immersive workshops, engaging conferences, and dynamic
              networking events that propel your ideas forward and drive innovation.
              Collaborate with industry experts and ignite your creativity in a vibrant
              community of forward-thinkers.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Events Section */}
      <Container className="content-section">
        {/* Upcoming Events Section */}
        <Box className="section-container">
          <Typography variant="h2" className="section-title">
            Upcoming Events
          </Typography>
          <Typography variant="subtitle2" className="section-subtitle">
            Register now for our upcoming events and activities
          </Typography>

          <Grid container spacing={3} className="events-grid">
            {upcomingToShow.map((event) => (
              <Grid item xs={12} sm={6} md={4} key={event._id.$oid}>
                <Card
                  className="event-card"
                  elevation={3}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "visible",
                    borderRadius: 2,
                    "&:hover": {
                      boxShadow: 8,
                    },
                  }}
                >
                  <Paper
                    elevation={6}
                    sx={{
                      position: "absolute",
                      top: -15,
                      left: 20,
                      width: 64,
                      height: 64,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "#00B2B2",
                      color: "white",
                      borderRadius: 2,
                      zIndex: 1,
                    }}
                  >
                    <Typography variant="h5" fontWeight="bold">
                      {event.day}
                    </Typography>
                    <Typography variant="caption" fontWeight="medium">
                      {event.month}
                    </Typography>
                  </Paper>
                  <CardContent
                    sx={{
                      pt: 4,
                      pb: 2,
                      px: 3,
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="h6"
                      className="event-title"
                      sx={{
                        mt: 1,
                        mb: 2,
                        fontWeight: "bold",
                        color: "text.primary",
                      }}
                    >
                      {event.title}
                    </Typography>

                    <Box sx={{ mb: 2 }}>
                      <Box
                        className="detail-item"
                        sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
                      >
                        <LocationOnIcon fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                          {event.location}
                        </Typography>
                      </Box>
                      <Box
                        className="detail-item"
                        sx={{ display: "flex", alignItems: "center", gap: 1 }}
                      >
                        <AccessTimeIcon fontSize="small" color="action" />
                        <Typography variant="body2" color="text.secondary">
                          {event.time}
                        </Typography>
                      </Box>
                    </Box>

                    <Typography
                      variant="body2"
                      className="event-description"
                      color="text.secondary"
                      sx={{
                        mb: 2,
                        flexGrow: 1,
                      }}
                    >
                      {event.description}
                    </Typography>

                    <Button
                      variant="contained"
                      color="primary"
                      className="action-button"
                      fullWidth
                      href={event.registration}
                      target="_blank"
                      sx={{
                        borderRadius: 2,
                        py: 1,
                        textTransform: "none",
                        fontWeight: "bold",
                        boxShadow: 2,
                        mt: "auto",
                        background: "#00B2B2",
                        "&:hover": {
                          boxShadow: 5,
                          bgcolor: "#009494",
                        },
                      }}
                    >
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          {upcomingEvents.length > 3 && (
            <Box display="flex" justifyContent="center" mt={2}>
              <IconButton onClick={() => setShowMoreUpcoming(!showMoreUpcoming)}>
                <ExpandMoreIcon
                  sx={{
                    transform: showMoreUpcoming ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }}
                />
              </IconButton>
            </Box>
          )}
        </Box>

        {/* Past Events Section */}
        <Box className="section-container">
          <Typography variant="h2" className="section-title">
            Past Events
          </Typography>
          <Typography variant="subtitle2" className="section-subtitle">
            Explore our previous events and their outcomes
          </Typography>

          <Grid container spacing={3} className="events-grid">
            {pastToShow.map((event) => (
              <Grid item xs={12} sm={6} md={4} key={event._id.$oid}>
                <Card
                  className="event-card"
                  elevation={2}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "visible",
                    transition: "transform 0.3s, box-shadow 0.3s",
                    borderRadius: 2,
                    opacity: 0.9,
                    backgroundColor: (theme) =>
                      alpha(theme.palette.background.paper, 0.9),
                    "&:hover": {
                      boxShadow: 5,
                    },
                  }}
                >
                  <Paper
                    elevation={4}
                    sx={{
                      position: "absolute",
                      top: -15,
                      left: 20,
                      width: 64,
                      height: 64,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "grey.400",
                      color: "white",
                      borderRadius: 2,
                      zIndex: 1,
                    }}
                  >
                    <Typography variant="h5" fontWeight="bold">
                      {event.day}
                    </Typography>
                    <Typography variant="caption" fontWeight="medium">
                      {event.month}
                    </Typography>
                  </Paper>
                  <CardContent
                    sx={{
                      pt: 4,
                      pb: 2,
                      px: 3,
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Typography
                      variant="h6"
                      className="event-title"
                      sx={{
                        mt: 1,
                        mb: 2,
                        fontWeight: "bold",
                        color: "text.secondary",
                      }}
                    >
                      {event.title}
                    </Typography>

                    <Box
                      className="detail-item"
                      sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}
                    >
                      <LocationOnIcon fontSize="small" color="action" />
                      <Typography variant="body2" color="text.secondary">
                        {event.location}
                      </Typography>
                    </Box>

                    <Typography
                      variant="body2"
                      className="event-description"
                      color="text.secondary"
                      sx={{
                        mb: 2,
                        flexGrow: 1,
                      }}
                    >
                      {event.description}
                    </Typography>

                    <Button
                      variant="outlined"
                      color="primary"
                      className="action-button"
                      fullWidth
                      sx={{
                        borderRadius: 2,
                        py: 1,
                        textTransform: "none",
                        fontWeight: "medium",
                        mt: "auto",
                      }}
                    >
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          {pastEvents.length > 3 && (
            <Box display="flex" justifyContent="center" mt={2}>
              <IconButton onClick={() => setShowMorePast(!showMorePast)}>
                <ExpandMoreIcon
                  sx={{
                    transform: showMorePast ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s",
                  }}
                />
              </IconButton>
            </Box>
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default EventsPage;