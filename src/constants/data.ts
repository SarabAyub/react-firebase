export const SETTING_ROUTES = {
  profile: "profile",
  notifications: "notifications",
  security: "change-password",
  subscriptions: "subscriptions",
  terms: "terms",
  privacy: "privacy",
  buisness: "buisness",
  contact: "contact",
  FAQs: "FAQs",
};

export const SETTING_MENUS = [
  {
    name: "Profile ",
    path: SETTING_ROUTES.profile,
    section: "General",
    icon: "/assets/icons/User-icon.svg",
  },
  {
    name: "Notifications",
    path: SETTING_ROUTES.notifications,
    section: "General",
    icon: "/assets/icons/Bell-icon.svg",
  },
  {
    name: "Security",
    path: SETTING_ROUTES.security,
    section: "General",
    icon: "/assets/icons/Shield_done-icon.svg",
  },

  {
    name: "Subscription",
    path: SETTING_ROUTES.subscriptions,
    section: "General",
    icon: "/assets/icons/Document-icon.svg",
  },

  {
    name: "Terms of Service",
    path: SETTING_ROUTES.terms,
    section: "Information",
    icon: "/assets/icons/Clipboard-icon.svg",
  },
  {
    name: "Privacy Policy",
    path: SETTING_ROUTES.privacy,
    section: "Information",
    icon: "/assets/icons/Lock-icon.svg",
  },
  {
    name: "Business Associate Agreement",
    path: SETTING_ROUTES.buisness,
    section: "Information",
    icon: "/assets/icons/Edit-icon.svg",
  },
  {
    name: "Contact Us",
    path: SETTING_ROUTES.contact,
    section: "Information",
    icon: "/assets/icons/Mail-icon.svg",
  },
  {
    name: "FAQ",
    path: SETTING_ROUTES.FAQs,
    section: "Information",
    icon: "/assets/icons/Question-icon.svg",
  },
];

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const days = Array.from({ length: 31 }, (_, i) => i + 1);
export const years = Array.from(
  { length: 50 },
  (_, i) => new Date().getFullYear() - i
);

export const USER_DEFAULT_VALUES = {
  defaultValues: {
    profileImage:
      "https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    firstName: "Adison",
    lastName: "Aminoff",
    email: "adisaon@gmail.com",
    phoneNumber: "+1 (234) 566-7845",
    address: "",
    city: "",
    state: "NY",
    zip: "00000",
    providerType: ["Clincian", "Prescriber", "General Practitioner"],
    licenseNumber: "1243234",
    licenseType: "",
    licenseIssuingBody: "",
    expirationMonth: "October",
    expirationDay: "00",
    expirationYear: "0000",
  },
};

export const TOGGLE_FIELDS_SETTING = [
  {
    heading: "In-App Notifications",
    label: "Turn on all mobile notifications or select individually.",
    key: "mobileNotifications",
  },
  {
    label: "New Connection Request",
    key: "newConnectionRequest",
  },
  {
    label: "Mood Drop Alert",
    key: "moodDropAlert",
  },
  {
    label: "Assessment Score Drop Alert",
    key: "assessmentScoreDropAlert",
  },
  {
    heading: "Email Notifications",
    label: "Turn on all email notifications",
    key: "emailNotifications",
  },
];
