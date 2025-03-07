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
import { Policies, Schedule_meet_link, Submit_details_form } from '../../../assets/links';

const services = [
  {
    title: "Streamline Focus",
    description: "Helps you set clear goals and work towards them.",
    icon: CalendarMonth,
  },
  {
    title: "Innovation Tracking",
    description: "Lets you see how your new ideas are progressing, which helps with planning.",
    icon: Groups,
  },
  {
    title: "Market Edge",
    description: "Gives you tips to stay ahead of competitors.",
    icon: Message,
  },
  {
    title: "Entry Tactics",
    description: "Advises you on the best ways to start selling your product.",
    icon: Business,
  },
  {
    title: "Smart Resourcing",
    description: "Shows you how to use your money and materials wisely.",
    icon: LightbulbOutlined,
  },
  {
    title: "Strategic Choice",
    description: "Helps you decide which projects are worth focusing on.",
    icon: LightbulbOutlined,
  },
  {
    title: "Ready to Scale",
    description: "Points out which technologies are ready to be turned into products and sold to a lot of people.",
    icon: LightbulbOutlined,
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
              Technology Maturity Assessment
            </Typography>
            <Typography variant="body1" className="hero-description">
            Technology Maturity Assessment is a comprehensive evaluation process determining how ready your technology or invention is for real-world application. It provides an in-depth analysis of various aspects of the technology to assess its current level of development and its potential for future success. By examining both the technical and market readiness, this assessment helps identify the steps required to transition technology from concept to commercialization.
            </Typography>
            <Box className="hero-buttons">
              <a href={Schedule_meet_link} target="_blank" rel="noreferrer">
              <Button className="contained" color="primary" size="large">
                Contact to evaluate TRL
              </Button>
              </a>
              <a href={Submit_details_form} target="_blank" rel="noreferrer">
              <Button className="outlined" size="large">
                Submit your Details
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