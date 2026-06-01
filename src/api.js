import axios from "axios";

//Centralised Axios instance
const api = axios.create({
  baseURL: "/api", // swap for your real backend URL
  timeout: 8000,
  headers: { "Content-Type": "application/json" },
});

// Request interceptor – attach auth token if present
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error),
);

// Response interceptor – normalise errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const msg =
      error?.response?.data?.message ||
      error?.message ||
      "Something went wrong";
    return Promise.reject(new Error(msg));
  },
);

export default api;

// EmailJS REST endpoint (used by Contact)
export const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";

// Mock API helpers (simulate real backend with artificial delay)
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export async function fetchAwards() {
  await delay(700);
  return [
    {
      id: 1,
      icon: "🏆",
      title: "CEO of the Year",
      org: "Forbes Business Awards",
      year: "2022",
      desc: "Recognized for outstanding leadership in building and scaling high-growth companies in the technology sector.",
    },
    {
      id: 2,
      icon: "✦",
      title: "Top 100 Innovators",
      org: "MIT Technology Review",
      year: "2021",
      desc: "Named among the top 100 innovators driving transformation in global markets and emerging technologies.",
    },
    {
      id: 3,
      icon: "🌍",
      title: "Entrepreneurial Excellence",
      org: "World Economic Forum",
      year: "2020",
      desc: "Awarded for consistently demonstrating exceptional growth strategies that create extraordinary enterprise value.",
    },
  ];
}

export async function fetchMedia() {
  await delay(900);
  return [
    {
      id: 1,
      source: "Forbes",
      title:
        "How Alex Bridges the Gap Between Corporate Innovation and Startup Ecosystems",
      date: "March 2023",
      url: "#",
    },
    {
      id: 2,
      source: "TechCrunch",
      title:
        "This Entrepreneur's AI-Driven Venture Studio Is Changing the Game for Founders",
      date: "January 2023",
      url: "#",
    },
    {
      id: 3,
      source: "CNBC",
      title:
        "Navigating Disruption: An Expert's Advice in the Age of Technological Disruption",
      date: "November 2022",
      url: "#",
    },
  ];
}

export async function fetchTestimonials() {
  await delay(800);
  return [
    {
      id: 1,
      quote:
        "Alexander's vision and execution are unmatched. His ability to identify market opportunities and build teams that execute with precision is something I've rarely seen in my 20 years in venture capital.",
      name: "Sarah Chen",
      role: "Managing Partner, Sequoia Capital",
    },
    {
      id: 2,
      quote:
        "Working with Alex was transformative for our company. He brought strategic clarity at a pivotal moment and helped us navigate a complex market environment to achieve our best growth year yet.",
      name: "Marcus Williams",
      role: "CEO, TechNova Inc.",
    },
  ];
}
