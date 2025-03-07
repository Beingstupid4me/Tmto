import React from 'react';
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
  AccordionDetails
} from '@mui/material';
import {
  CalendarMonth,
  Groups,
  Message,
  Business,
  LightbulbOutlined,
  ExpandMore
} from '@mui/icons-material';
import './page.css';
import { Schedule_meet_link } from '../../../assets/links';

const services = [
  {
    title: "Workshops",
    description: "Dive into fun workshops! From making new tech work to learning about protecting your ideas, we make innovation a blast for everyone.",
    icon: CalendarMonth
  },
  {
    title: "Innovation Events",
    description: "Don't miss our cool events! From hackathons to showcases, it's your chance to shine and meet other creative minds.",
    icon: Groups
  },
  {
    title: "Talk to Experts",
    description: "Got an idea? Chat one-on-one with our experts. We'll guide you on how to solve problems, polish your idea, and make it stand out.",
    icon: Message
  },
  {
    title: "Meet Big Companies",
    description: "We help you meet the big players in the industry. A great chance to find a partner, start a joint project, or get your idea licensed.",
    icon: Business
  },
  {
    title: "Making Ideas Real",
    description: "Dreaming of starting your own thing or need advice on how to get there? We're here to help with advice on making your product.",
    icon: LightbulbOutlined
  }
];

const faqs = [
  {
    question: "How can I schedule a meeting with an innovation expert?",
    answer: "You can schedule a meeting by clicking the 'Schedule a Meeting' button above or by contacting our office directly. We'll match you with the most suitable expert for your needs."
  },
  {
    question: "What types of workshops do you offer?",
    answer: "We offer a wide range of workshops including ideation sessions, intellectual property protection, product development, market research, and entrepreneurship basics."
  },
  {
    question: "Can students participate in all events?",
    answer: "Yes! All our events are open to students, faculty members, and external entrepreneurs. Some specialized events might have specific eligibility criteria."
  },
  {
    question: "How do you help connect with industry partners?",
    answer: "We maintain strong relationships with industry leaders and organize regular networking events, mentorship programs, and partnership opportunities."
  }
];

const InnovationPage = () => {
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
              Facilitate Innovation and Awareness
            </Typography>
            <Typography variant="body1" className="hero-description">
              Our goal is to create a dynamic ecosystem where innovation thrives. Whether you're a student, faculty
              member, or external entrepreneur, we provide the tools, knowledge, and connections needed to turn your
              ideas into impactful innovations.
            </Typography>
            <Box className="hero-buttons">
            <a href={Schedule_meet_link} target="_blank" rel="noreferrer">
              <Button className="contained" color="primary" size="large" >
                Schedule a Meeting
              </Button>
            </a>
            <a href='../Event'>
              <Button className="outlined" size="large">
                View Upcoming Events
              </Button>
            </a>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container maxWidth="lg" className="services-section">
        <Grid container spacing={3}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Grid item xs={12} sm={6} md={4} key={service.title}>
                <Card className="service-card">
                  <CardContent>
                    <Box className="service-card-header">
                      <Box className="service-icon">
                        <Icon />
                      </Box>
                      <Typography variant="h6" className="service-title">
                        {service.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" className="service-description">
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
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

export default InnovationPage;