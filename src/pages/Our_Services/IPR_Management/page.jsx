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
import { IP_disclosure_form, Policies, Schedule_meet_link } from '../../../assets/links';
import './page.css';

const services = [
  {
    title: "IPR Protection",
    description: "IPR makes sure nobody can steal your ideas and profit from them without your permission.",
    icon: CalendarMonth,
  },
  {
    title: "IPR Royalty",
    description: "With IPR, you can let others use your ideas, but they have to pay you for it. It's like renting out your house – you earn money while still owning it.",
    icon: Groups,
  },
  {
    title: "Encourages Innovation",
    description: "Knowing their ideas are safe, people are more likely to come up with new and cool stuff that can improve our lives.",
    icon: Message
  },
  {
    title: "Supports Business Growth",
    description: "IPR can make your company more valuable. Investors like to see that your ideas are protected because it means they're investing in something secure.",
    icon: Business
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
              IPR Management
            </Typography>
            <Typography variant="body1" className="hero-description">
            IPR is like a shield for your brilliant ideas, inventions, and creations. It's a way to legally protect your work so others can't steal or copy it without permission. Just like how you lock your house to keep your stuff safe, IPR locks up your ideas so only you can use them.
            </Typography>
            <Box className="hero-buttons">
              <a href={Schedule_meet_link} target="_blank" rel="noreferrer">
              <Button className="contained" color="primary" size="large">
                Schedule a Meeting
              </Button>
              </a>
              <a href={IP_disclosure_form} target="_blank" rel="noreferrer">
              <Button className="outlined" size="large">
                Apply for IPR
              </Button>
              </a>
              <a href={Policies} target="_blank" rel="noreferrer">
              <Button className="outlined" size="large">
                IPR Policies
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