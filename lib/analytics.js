// Event tracking utilities para Google Analytics

export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

// Page view
export const pageview = (url) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

// Generic event
export const event = ({ action, category, label, value }) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Specific events
export const trackEvent = {
  // Lead generation
  formSubmit: (formName) => {
    event({
      action: 'form_submit',
      category: 'Lead Generation',
      label: formName,
    });
  },

  // Contact actions
  whatsappClick: (location) => {
    event({
      action: 'whatsapp_click',
      category: 'Contact',
      label: location,
    });
  },

  phoneClick: () => {
    event({
      action: 'phone_click',
      category: 'Contact',
      label: 'Phone Number',
    });
  },

  emailClick: () => {
    event({
      action: 'email_click',
      category: 'Contact',
      label: 'Email',
    });
  },

  // Navigation
  menuClick: (menuItem) => {
    event({
      action: 'menu_click',
      category: 'Navigation',
      label: menuItem,
    });
  },

  ctaClick: (ctaText, location) => {
    event({
      action: 'cta_click',
      category: 'Engagement',
      label: `${ctaText} - ${location}`,
    });
  },

  // Content interaction
  projectView: (projectName) => {
    event({
      action: 'project_view',
      category: 'Content',
      label: projectName,
    });
  },

  serviceView: (serviceName) => {
    event({
      action: 'service_view',
      category: 'Content',
      label: serviceName,
    });
  },

  // Downloads
  downloadClick: (fileName) => {
    event({
      action: 'download',
      category: 'Lead Magnet',
      label: fileName,
    });
  },

  // Search
  searchPerformed: (searchTerm) => {
    event({
      action: 'search',
      category: 'Engagement',
      label: searchTerm,
    });
  },

  // Social
  socialClick: (platform) => {
    event({
      action: 'social_click',
      category: 'Social',
      label: platform,
    });
  },

  // Video
  videoPlay: (videoTitle) => {
    event({
      action: 'video_play',
      category: 'Engagement',
      label: videoTitle,
    });
  },

  // Exit intent
  exitIntentShown: () => {
    event({
      action: 'exit_intent_shown',
      category: 'Engagement',
      label: 'Exit Modal',
    });
  },

  exitIntentConverted: () => {
    event({
      action: 'exit_intent_converted',
      category: 'Lead Generation',
      label: 'Exit Modal Form',
    });
  },

  // Quote request
  quoteRequest: (service) => {
    event({
      action: 'quote_request',
      category: 'Lead Generation',
      label: service,
      value: 1,
    });
  },

  // Scroll depth
  scrollDepth: (percentage) => {
    event({
      action: 'scroll_depth',
      category: 'Engagement',
      label: `${percentage}%`,
    });
  },
};
