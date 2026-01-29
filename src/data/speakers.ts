import { Speaker } from "@/types";

// GDE Images
import aashiImg from "@/images/gde/aashi.jpeg";
import ashmiImg from "@/images/gde/ashmi.jpeg";
import imranImg from "@/images/gde/imran.jpeg";
import kartikeyImg from "@/images/gde/kartikey.jpeg";
import karthikImg from "@/images/gde/karthik.jpeg";
import kshitizImg from "@/images/gde/kshitiz.jpeg";
import mashhoodImg from "@/images/gde/mashhood.jpeg";
import ahsanImg from "@/images/gde/ahsan.png";
import nitinImg from "@/images/gde/nitin.jpeg";
import pedroImg from "@/images/gde/pedro.jpeg";
import radostinImg from "@/images/gde/radostin.jpeg";
import sonuImg from "@/images/gde/sonu.png";
import suesiImg from "@/images/gde/suesi.jpeg";
import ritwikImg from "@/images/gde/ritwik.jpeg";
import abdurImg from "@/images/gde/abdur.jpeg";

// Industry Expert Images
import abdulImg from "@/images/industryexperts/abdul.png";
import ahmedImg from "@/images/industryexperts/ahmed.jpeg";
import ahmadAnisImg from "@/images/industryexperts/Ahmad.jpeg";
import ammarImg from "@/images/industryexperts/Ammar.jpeg";
import anmolImg from "@/images/industryexperts/Anmol.png";
import ehtishamImg from "@/images/industryexperts/Ehtisham.jpeg";
import hashimImg from "@/images/industryexperts/hashim.jpeg";
import huzaifaImg from "@/images/industryexperts/huzaifa.png";
import maazImg from "@/images/industryexperts/maaz.jpeg";
import mujeebImg from "@/images/industryexperts/mujeeb.jpeg";
import mugheesImg from "@/images/industryexperts/mughees.jpeg";
import samiImg from "@/images/industryexperts/sami.png";
import syedaImg from "@/images/industryexperts/syeda.jpeg";

export const gdes: Speaker[] = [
    {
        id: "aashi-dutt",
        name: "Aashi Dutt",
        role: "GDE AI",
        image: aashiImg.src,
        isGDE: true,
        socials: { linkedin: "https://www.linkedin.com/in/aashi-dutt/" }
    },
    {
        id: "ashmi-banerjee",
        name: "Ashmi Banerjee",
        role: "GDE AI",
        company: "Google Cloud, AI",
        image: ashmiImg.src,
        isGDE: true,
        socials: { linkedin: "https://www.linkedin.com/in/ashmi-banerjee/" }
    },
    {
        id: "imran-us-salam",
        name: "Imran us Salam",
        role: "GDE AI",
        company: "Google Cloud, AI",
        image: imranImg.src,
        isGDE: true,
        socials: { linkedin: "https://www.linkedin.com/in/imran-us-salam-mian-54a48897/" }
    },
    {
        id: "kartikey-rawat",
        name: "Kartikey Rawat",
        role: "GDE AI",
        company: "Google Cloud, AI",
        image: kartikeyImg.src,
        isGDE: true,
        socials: { linkedin: "https://www.linkedin.com/in/carrycooldude/" }
    },
    {
        id: "karthik-muthuswamy",
        name: "Karthik Muthuswamy",
        role: "GDE AI",
        company: "Google Cloud, AI",
        image: karthikImg.src,
        isGDE: true,
        socials: { linkedin: "https://www.linkedin.com/in/karthikmswamy/" }
    },
    {
        id: "kshitiz-rimal",
        name: "Kshitiz Rimal",
        role: "GDE AI",
        company: "Google Cloud, AI",
        image: kshitizImg.src,
        isGDE: true,
        socials: { linkedin: "https://www.linkedin.com/in/kshitiz-rimal/" }
    },
    {
        id: "mashhood-rastgar",
        name: "Mashhood Rastgar",
        role: "GDE Angular, AI & Web",
        image: mashhoodImg.src,
        isGDE: true,
        socials: { linkedin: "https://www.linkedin.com/in/mashhoodr/" }
    },
    {
        id: "muhammad-ahsan-ayaz",
        name: "Muhammad Ahsan Ayaz",
        role: "GDE Angular & AI",
        image: ahsanImg.src,
        isGDE: true,
        socials: { linkedin: "https://www.linkedin.com/in/ahsanayaz/" }
    },
    {
        id: "nitin-tiwari",
        name: "Nitin Tiwari",
        role: "GDE AI",
        image: nitinImg.src,
        isGDE: true,
        socials: { linkedin: "https://www.linkedin.com/in/tiwari-nitin/" }
    },
    {
        id: "pedro-gabriel",
        name: "Pedro Gabriel Lourenço",
        role: "GDE AI",
        company: "Google Cloud, AI",
        image: pedroImg.src,
        isGDE: true,
        socials: { linkedin: "https://www.linkedin.com/in/pedrogengo/" }
    },
    {
        id: "radostin-cholakov",
        name: "Radostin Cholakov",
        role: "GDE AI",
        company: "Google Cloud, AI",
        image: radostinImg.src,
        isGDE: true,
        socials: { linkedin: "https://www.linkedin.com/in/radostin-cholakov-bb4422146/" }
    },
    {
        id: "sonu-kapoor",
        name: "Sonu Kapoor",
        role: "GDE Angular",
        image: sonuImg.src,
        isGDE: true,
        socials: { linkedin: "https://www.linkedin.com/in/sonu-kapoor/" }
    },
    {
        id: "suesi-tran",
        name: "Suesi Tran",
        role: "GDE Flutter",
        company: "Dart, Firebase, Flutter",
        image: suesiImg.src,
        isGDE: true,
        socials: { linkedin: "https://www.linkedin.com/in/suesitran/" }
    },
];

export const googleSpeakers: Speaker[] = [
    {
        id: "abdur-rahman",
        name: "Abdur Rahman",
        role: "Senior Product Lead",
        company: "Google",
        image: abdurImg.src,
        socials: { linkedin: "https://www.linkedin.com/in/abdur-byc/" }
    },
    {
        id: "ritwik-raha",
        name: "Ritwik Raha",
        role: "Machine Learning, CEML",
        company: "Google",
        image: ritwikImg.src,
        socials: { linkedin: "https://www.linkedin.com/in/ritwik-raha/" }
    },
];

export const industryExperts: Speaker[] = [
    {
        id: "abdul-raheem",
        name: "Abdul Raheem",
        role: "Machine Learning Engineer (LLM)",
        company: "Betterdata",
        image: abdulImg.src,
        socials: { linkedin: "https://www.linkedin.com/in/xfarooqi/" }
    },
    {
        id: "ahmad-anis",
        name: "Ahmad Anis",
        role: "Deep Learning Engineer",
        company: "Roll.ai",
        image: ahmadAnisImg.src,
        socials: { linkedin: "https://www.linkedin.com/in/ahmad-anis/" }
    },
    {
        id: "ahmed-iqbal",
        name: "Ahmed Iqbal",
        role: "AI Engineer",
        company: "Master Concept Group",
        image: ahmedImg.src,
        socials: { linkedin: "https://www.linkedin.com/in/ahmediqbal47/" }
    },
    {
        id: "ammar-jamshed",
        name: "Ammar Jamshed",
        role: "AM – Compliance Digital Enabler",
        company: "HBL",
        image: ammarImg.src,
        socials: { linkedin: "https://www.linkedin.com/in/goto-resumemuhammad-ammar-jamshed-029280145/" }
    },
    {
        id: "anmol-zehrah",
        name: "Anmol Zehrah",
        role: "AI Engineer",
        company: "Atomic Computing",
        image: anmolImg.src,
        socials: { linkedin: "https://www.linkedin.com/in/anmolzehrah/" }
    },
    {
        id: "ehtisham-raza",
        name: "Ehtisham Raza",
        role: "AI Engineer",
        company: "Data Techcon",
        image: ehtishamImg.src,
        socials: { linkedin: "https://www.linkedin.com/in/ehtisham-raza-0a5479163/" }
    },
    {
        id: "hashim-nadeem",
        name: "Hashim Nadeem",
        role: "Machine Learning Engineer",
        company: "Markaz",
        image: hashimImg.src,
        socials: { linkedin: "https://www.linkedin.com/in/hashim-muhammad-nadeem4/" }
    },
    {
        id: "huzaifa-khan",
        name: "Huzaifa Khan",
        role: "GenAI Specialist",
        company: "Easypaisa",
        image: huzaifaImg.src,
        socials: { linkedin: "https://www.linkedin.com/in/huzaifakhan04/" }
    },
    {
        id: "maaz-ali",
        name: "Maaz Ali Nadeem",
        role: "Co-Founder & CEO",
        company: "VECTOR Inc.",
        image: maazImg.src,
        socials: { linkedin: "https://www.linkedin.com/in/maazalinadeem/" }
    },
    {
        id: "mughees-awan",
        name: "Mughees Awan",
        role: "Data Scientist",
        company: "Securiti",
        image: mugheesImg.src,
        socials: { linkedin: "https://www.linkedin.com/in/mughees-awan/" }
    },
    {
        id: "mujeeb-ur-rehman",
        name: "Mujeeb Ur Rehman",
        role: "Senior AI Engineer",
        company: "Taleemabad",
        image: mujeebImg.src,
        socials: { linkedin: "https://www.linkedin.com/in/mujeeb-merwat/" }
    },
    {
        id: "sami-ullah",
        name: "Sami Ullah Shah",
        role: "CTO",
        company: "NovaSphere Sol",
        image: samiImg.src,
        socials: { linkedin: "https://www.linkedin.com/in/sami-ullah-shah-396614187/" }
    },
    {
        id: "syeda-aiman",
        name: "Syeda Aiman Mumtaz",
        role: "Women in Tech Lead",
        company: "Google Developer Groups on Campus CUI",
        image: syedaImg.src,
        socials: { linkedin: "https://www.linkedin.com/in/syeda-aiman-mumtaz-sherazi-b32a0b280/" }
    },
];

export const speakers: Speaker[] = [...gdes, ...googleSpeakers, ...industryExperts];
