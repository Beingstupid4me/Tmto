import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from "@mui/material";
import {
  CalendarMonth,
  Business,
  LightbulbOutlined,
  ExpandMore,
  CheckCircle,
  ArrowForward,
} from "@mui/icons-material";
import "./page.css";
import { Schedule_meet_link, Policies } from "../../../assets/links";

const services = [
  {
    title: "IIITD Innovation and Incubation Center",
    shortName: "IIITD-IC",
    description:
      "Supporting early-stage startups with comprehensive resources and mentorship.",
    offeringsTitle: "OFFERINGS:",
    bulletPoints: [
      "Incubation Programs: Tailored support to help startups in early-stage development",
      "Mentorship: Guidance from experienced entrepreneurs and industry professionals",
      "Networking Opportunities: Access to a vast network of investors, industry leaders, and potential collaborators",
      "Funding Access: Help in securing seed funding and access to various funding opportunities",
    ],
    icon: CalendarMonth,
    color: "#258F83", // primary theme color
    link: "https://iic.iiitd.ac.in/",
  },
  {
    title: "IHUB Anubhuti Foundation",
    shortName: "IHUB",
    description:
      "Advancing cognitive computing and AI innovations through research and collaboration.",
    offeringsTitle: "OFFERINGS:",
    bulletPoints: [
      "Research and Development: Access to cutting-edge research in cognitive computing and AI",
      "Collaboration Opportunities: Work with researchers and industry experts to bring your innovations to life",
      "Startup Incubation: Support for startups developing solutions in the fields of AI and IoT",
      "Commercialization Support: Help in turning research projects into viable, market-ready products",
    ],
    icon: LightbulbOutlined,
    color: "#1F7A70", // a darker variant within the theme
    link: "https://anubhuti.tech/",
  },
  {
    title: "Electropreneur Park",
    shortName: "STPI",
    description:
      "Specialized facilities and expertise for hardware and electronics innovations.",
    offeringsTitle: "OFFERINGS:",
    bulletPoints: [
      "Specialized Infrastructure: Access to state-of-the-art electronics and hardware facilities",
      "Sector-Specific Mentorship: Guidance from experts in electronics system design and manufacturing",
      "Business Acceleration: Support in scaling hardware innovations to market",
      "Investment Access: Opportunities to connect with investors focused on hardware startups",
    ],
    icon: Business,
    color: "#2BA39C", // a lighter variant within the theme
    link: "https://electropreneurpark.in/",
  },
];

const faqs = [
  {
    question: "How can I schedule a meeting with an innovation expert?",
    answer:
      "You can schedule a meeting by clicking the 'Schedule a Meeting' button above or by contacting our office directly. We'll match you with the most suitable expert for your needs.",
  },
  {
    question: "What types of workshops do you offer?",
    answer:
      "We offer a wide range of workshops including ideation sessions, intellectual property protection, product development, market research, and entrepreneurship basics.",
  },
  {
    question: "Can students participate in all events?",
    answer:
      "Yes! All our events are open to students, faculty members, and external entrepreneurs. Some specialized events might have specific eligibility criteria.",
  },
  {
    question: "How do you help connect with industry partners?",
    answer:
      "We maintain strong relationships with industry leaders and organize regular networking events, mentorship programs, and partnership opportunities.",
  },
];

const ServiceCard = ({ service }) => {
  const Icon = service.icon;

  return (
    <Card className="start-service-card">
      {/* Top accent bar with color */}
      <Box
        className="start-service-card-accent"
        style={{
          background: `linear-gradient(90deg, ${service.color} 0%, ${service.color}CC 100%)`,
        }}
      />

      {/* Icon floating above card */}
      <Box
        className="start-service-card-icon"
        style={{
          backgroundColor: service.color,
          boxShadow: `0 4px 14px ${service.color}40`,
          border: "2px solid white",
        }}
      >
        <Icon fontSize="medium" />
      </Box>

      <CardContent className="start-service-card-content">
        {/* Service Header with fixed height */}
        <Box className="start-service-card-header">
          <Chip
            label={service.shortName}
            size="small"
            className="start-service-card-chip"
            style={{
              backgroundColor: `${service.color}15`,
              color: service.color,
            }}
          />
          <Typography variant="h5" className="start-service-card-title">
            {service.title}
          </Typography>
          <Typography variant="body2" className="start-service-card-description">
            {service.description}
          </Typography>
        </Box>

        {/* Offerings title */}
        <Typography
          variant="subtitle2"
          className="start-service-card-offerings-title"
          style={{ color: service.color }}
        >
          {service.offeringsTitle}
        </Typography>

        {/* Bullet Points with fixed height container */}
        <Box className="start-service-card-bullet-points">
          {service.bulletPoints.map((point, i) => (
            <Box
              key={i}
              className="start-service-card-bullet-point"
              style={{ "&:hover": { backgroundColor: `${service.color}10` } }}
            >
              <CheckCircle
                className="start-service-card-bullet-icon"
                style={{
                  color: service.color,
                  filter: `drop-shadow(0 1px 2px ${service.color}30)`,
                }}
              />
              <Typography variant="body2">{point}</Typography>
            </Box>
          ))}
        </Box>

        {/* Learn More Button */}
        <Box className="start-service-card-button-container">
          <Button
            variant="text"
            endIcon={<ArrowForward />}
            href={service.link}
            className="start-service-card-button"
            style={{ color: service.color }}
          >
            Learn more
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

const StartupFacilitationPage = () => {
  return (
    <Box className="innovation-page">
      {/* Hero Section */}
      <Box className="hero-section">
        <Container maxWidth="lg">
          <Box className="hero-content">
            <Typography variant="overline" className="service-label">
              Innovation Services
            </Typography>
            <Typography variant="h1" className="hero-title">
              Startup Facilitation
            </Typography>
            <Typography variant="body1" className="hero-description">
              At IIIT Delhi, we foster a vibrant startup ecosystem that empowers
              innovators and entrepreneurs to transform ideas into impactful
              ventures. Our support system equips both aspiring and seasoned
              business owners with essential tools, mentorship, networks, and
              resources. By integrating cutting-edge research, industry expertise,
              and entrepreneurial guidance, our innovation centers and hubs serve
              as dynamic launchpads supporting startups at every stage.
            </Typography>
            <Box className="hero-buttons">
              <a href={Schedule_meet_link} target="_blank" rel="noreferrer">
              <Button className="contained" color="primary" size="large">
                Schedule a Meeting
              </Button>
              </a>
              <a href={Policies} target="_blank" rel="noreferrer">
              <Button className="outlined" size="large">
                Policies and SOP
              </Button>
              </a>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Services Section */}
      <Container maxWidth="lg" className="services-section">
        <Typography variant="h2" className="services-title">
          Our Innovation Ecosystem
        </Typography>
        <Typography variant="subtitle1" className="services-subtitle">
          Access comprehensive support through our partner organizations, each
          offering specialized resources for innovators and entrepreneurs
        </Typography>

        {/* Modern Card Grid Layout */}
        <Box className="services-grid-container">
          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid item xs={12} md={4} key={service.title}>
                <ServiceCard service={service} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* CTA Section */}
      <Box className="cta-section">
        <Container maxWidth="lg">
          <Box className="cta-content">
            <Typography variant="h2">
              Ready to Start Your Innovation Journey?
            </Typography>
            <Typography variant="body1">
              Schedule a meeting with our experts to discuss your ideas and get started on your innovation journey.
            </Typography>
            <Box className="cta-buttons">
              <a href={Schedule_meet_link} target="_blank" rel="noreferrer">
              <Button className="contained" color="primary" size="large">
                Schedule a Meeting
              </Button>
              </a>
              <a href='../Our_Technology'>
              <Button className="outlined" size="large">
                Browse Past Success Stories
              </Button>
              </a>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Container maxWidth="lg" className="faq-section">
        <Typography variant="h2" align="center" className="faq-title">
          Frequently Asked Questions
        </Typography>
        <Box className="faq-container">
          {faqs.map((faq, index) => (
            <Accordion key={index} className="faq-accordion">
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6" className="faq-question">{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography className="faq-answer">{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default StartupFacilitationPage;
