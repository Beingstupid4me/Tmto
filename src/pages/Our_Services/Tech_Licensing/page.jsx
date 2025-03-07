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
  ExpandMore
} from '@mui/icons-material';
import { Innovate_disclosure_form, Schedule_meet_link } from '../../../assets/links';
import './page.css';

const services = [
  {
    title: "Access Innovation",
    description: "Explore our wide range of technologies, from patents to software, which you can use for your projects.",
    icon: CalendarMonth,
  },
  {
    title: "Strategic Partnerships",
    description: "Join forces with industry leaders and experienced professionals to bring your ideas to life.",
    icon: Groups,
  },
  {
    title: "Intellectual Property Management",
    description: "We'll keep your ideas safe and secure, ensuring that your innovations are protected.",
    icon: Message
  },
  {
    title: "Commercializa-tion Support",
    description: "We provide all the guidance you need to transform your research into viable products and services.",
    icon: Business
  },
  {
    title: "Funding Opportunities",
    description: "Take advantage of various funding options to speed up your path from concept to market.",
    icon: Message
  },
  {
    title: "Entrepreneurial Ecosystem",
    description: "Join our dynamic network of creators, startups, and mentors dedicated to fostering growth and success.",
    icon: Message
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

const TechLicensingPage = () => {
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
              Technology Licensing
            </Typography>
            <Typography variant="body1" className="hero-description">
            We're here to help turn exciting new ideas into real-world solutions. Whether you're a company looking to innovate or a researcher wanting to make a difference, find out how we can help you succeed
            </Typography>
            <Box className="hero-buttons">
              <a href={Schedule_meet_link} target="_blank" rel="noreferrer">
              <Button className="contained" color="primary" size="large">
                Schedule a Meeting
              </Button>
              </a>
              <a href={Innovate_disclosure_form} target="_blank" rel="noreferrer">
              <Button className="outlined" size="large">
                Submit Technology for Licensing 
              </Button>
              </a>
              <a href='../Our_Technology'>
              <Button className="outlined" size="large">
                Looking for technologies
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

export default TechLicensingPage;