# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Proffesional CEO — Portfolio

A Professional ceo portfolio site I built to showcase ventures, career, speaking engagements and let people get in touch. Stack is React + Bootstrap for layout, MUI for components, Axios for data, Formik for the contact form, and EmailJS to handle sending without a backend.

---

## What's in here


alexander-vance/
│
|──public
|    └──images/ceo.png         photo
|
├── index.html
├── package.json
├── vite.config.js
│
└── src/
    ├── main.jsx                  entry point
    ├── App.jsx                    puts all sections together
    ├── index.css                  global variables, shared hover classes
    ├── data.js                    all the text content in one place
    ├── Api.js                     axios setup + data fetchers
    ├── Api.css                   all hero section styles and animations
    │
    ├── hooks/
    │   └── useFetch.js            reusable hook for loading/error/data
    │
    |
    │
    └── components/
        ├── Navbar.jsx             top nav, collapses to drawer on mobile
        ├── Hero.jsx               landing — photo, badge, stats, buttons
        ├── About.jsx              short bio quote
        ├── Awards.jsx             three award cards, loads via axios
        ├── Ventures.jsx           current companies
        ├── Career.jsx             timeline
        ├── Media.jsx              press features, loads via axios
        ├── Speaking.jsx           keynote section
        ├── Testimonials.jsx       quotes, loads via axios
        ├── Contact.jsx            form — validated with formik, sends via axios
        └── Footer.jsx             links, socials, contact info
```


## Running it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`. That's it.

For a production build:

bash
npm run build
npm run preview
```

---

## Updating content

Everything is in `src/data.js` — nav links, stats, ventures, career items, speaking engagements. Change it there and it updates everywhere.

Awards, media and testimonials come from `src/api.js`. Right now they use mock data with a fake delay to simulate a real API. When you have an actual backend just swap the functions:

```js
// current (mock)
export async function fetchAwards() {
  await delay(700);
  return [ ...hardcoded ];
}

// replace with
export async function fetchAwards() {
  const { data } = await api.get("/awards");
  return data;
}
```

Nothing else needs to change.

---

## Setting up the contact form

The form sends emails through EmailJS so there's no server needed. You need three things from your EmailJS dashboard:

**1. Create an account**
Go to https://www.emailjs.com and sign up free.

**2. Add an email service**
Dashboard → Email Services → Add New Service → connect Gmail or whatever you use.
Copy the **Service ID** (looks like `service_xxxxxxx`).

**3. Create a template**
Dashboard → Email Templates → Create New.
In the template body use these variables exactly:
```
{{from_name}}
{{from_email}}
{{subject}}
{{message}}
```
Copy the **Template ID** (looks like `template_xxxxxxx`).

**4. Get your public key**
Dashboard → Account → General → Public Key (looks like `aBcDeFgHiJ`).

**5. Paste them in**
Open `src/components/Contact.jsx` and replace the three lines near the top:

```js
const SERVICE_ID  = "service_xxxxxxx";
const TEMPLATE_ID = "template_xxxxxxx";
const PUBLIC_KEY  = "aBcDeFgHiJ";
```

Save and done. Form submissions go straight to your inbox.

---

## Swapping the photo

Replace `src="images/ceo.png` with your own image. 

---

## Dependencies

| Package | Why |
|---|---|
| react 18 | obviously |
| bootstrap 5 | grid and spacing utilities |
| @mui/material | all the UI components |
| @mui/icons-material | icons used in contact, footer, media |
| @emotion/react + styled | required by MUI |
| formik | form state and validation |
| axios | data fetching and email POST |
| @emailjs/browser | not actually used in final version — axios posts to EmailJS REST directly |
| vite | dev server and builds |

---

## A few things worth knowing

- The three sections that "load" (Awards, Media, Testimonials) all use the same `useFetch` hook. It handles loading state, errors, and a retry button. When you hook it up to a real API it'll work exactly the same way.

- The contact form validates on blur and on submit. If EmailJS credentials aren't set it'll fail gracefully with an error toast — nothing breaks.

- The hero badge stays inside the photo card at all positions. It uses `position: absolute` as a child of the card element, not the wrapper, so it can't escape.

- Mobile nav is a MUI Drawer. The desktop nav pills highlight based on which section you scrolled to.

- Hover effects are split between `index.css` (card animations, border reveals) and MUI `sx` props (buttons, nav links). Hero section has its own `App.css` for the photo float, badge blink and stat card animations.