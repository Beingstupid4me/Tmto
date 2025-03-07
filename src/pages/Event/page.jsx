import { Box, Container, Typography, Button, Card, CardContent, Grid } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import "./page.css";

const upcomingEvents = [
  {
    day: "20",
    month: "Sep",
    title: "Insight Sprints: Innovation Workshop",
    location: "IIT Delhi",
    time: "10:00 AM - 4:00 PM",
    description: "A hands-on workshop focused on rapid prototyping and innovation techniques.",
  },
  {
    day: "25",
    month: "Sep",
    title: "Tech Leadership Summit",
    location: "Main Auditorium",
    time: "9:00 AM - 5:00 PM",
    description: "Join industry leaders for a day of insights and networking opportunities.",
  },
  {
    day: "28",
    month: "Sep",
    title: "AI Research Symposium",
    location: "Research Center",
    time: "2:00 PM - 5:00 PM",
    description: "Exploring the latest advances in artificial intelligence and machine learning.",
  },
];

const pastEvents = [
  {
    day: "15",
    month: "Mar",
    title: "OnCosIice 2024",
    location: "IIT Delhi",
    description:
      "A hackathon focused on developing computer-assisted intervention tools for precisely diagnosing cancer.",
  },
  {
    day: "15",
    month: "Mar",
    title: "Internship Fair",
    location: "PDEU LAB",
    description: "Connect with aspiring interns with over 30 startups across tech and non-tech domains.",
  },
  {
    day: "10",
    month: "Mar",
    title: "Research Showcase",
    location: "Research Hub",
    description: "Final exhibition of groundbreaking research projects from our departments.",
  },
];  

function EventsPage() {
  return (
    <Box className="events-page">
      {/* Top Hero Section */}
      <Box className="hero-section">
        <Container maxWidth="lg">
          <Box className="hero-content">
            <Typography variant="overline" className="service-label">
              Upcoming Events
            </Typography>
            <Typography variant="h1" className="hero-title">
              Events &amp; Activities
            </Typography>
            <Typography variant="body1" className="hero-description">
              Join us for workshops, conferences, and networking opportunities that drive innovation forward.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Events Section */}
      <Container className="content-section">
        <Box className="section-container">
          <Typography variant="h2" className="section-title">
            Upcoming Events
          </Typography>
          <Typography variant="subtitle2" className="section-subtitle">
            Register now for our upcoming events and activities
          </Typography>

          <Grid container spacing={3} className="events-grid">
            {upcomingEvents.map((event, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card className="event-card">
                  <CardContent>
                    <Box className="date-badge">
                      <Typography variant="h3">{event.day}</Typography>
                      <Typography variant="subtitle2">{event.month}</Typography>
                    </Box>
                    <br/>
                    <Typography variant="h6" className="event-title">
                      {event.title}
                    </Typography>
                    <Box className="event-details">
                      <Box className="detail-item">
                        <LocationOnIcon />
                        <Typography variant="body2">{event.location}</Typography>
                      </Box>
                      <Box className="detail-item">
                        <AccessTimeIcon />
                        <Typography variant="body2">{event.time}</Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2" className="event-description">
                      {event.description}
                    </Typography>
                    <Button variant="outlined" className="action-button">
                      Register Now
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box className="section-container">
          <Typography variant="h2" className="section-title">
            Past Events
          </Typography>
          <Typography variant="subtitle2" className="section-subtitle">
            Explore our previous events and their outcomes
          </Typography>

          <Grid container spacing={3} className="events-grid">
            {pastEvents.map((event, index) => (
              <Grid item xs={12} md={4} key={index}>
                <Card className="event-card">
                  <CardContent>
                    <Box className="date-badge">
                      <Typography variant="h3">{event.day}</Typography>
                      <Typography variant="subtitle2">{event.month}</Typography>
                    </Box>
                    <br/>
                    <Typography variant="h6" className="event-title">
                      {event.title}
                    </Typography>
                    <Box className="event-details">
                      <Box className="detail-item">
                        <LocationOnIcon />
                        <Typography variant="body2">{event.location}</Typography>
                      </Box>
                    </Box>
                    <Typography variant="body2" className="event-description">
                      {event.description}
                    </Typography>
                    <Button variant="outlined" className="action-button">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

      </Container>
    </Box>
  );
}

export default EventsPage;