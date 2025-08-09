// src/types/blog.ts
import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import blog5 from "../assets/blog5.jpg";
import blog6 from "../assets/blog6.jpg";
import blog7 from "../assets/blog7.jpg";
import blog8 from "../assets/blog8.jpg";
import blog9 from "../assets/blog9.jpg";
import blog10 from "../assets/blog10.jpg";

// src/types/blog.ts
export interface IComment {
  id: string;
  name: string;
  email: string;
  comment: string;
  date: string;
}

export interface IBlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  tags: string[];
  likes: number;
  comments: IComment[];
}

export const blogPosts: IBlogPost[] = [
  {
    id: 1,
    title: "The Importance of Proper Medication Storage",
    excerpt: "Learn how to store your medicines properly to maintain their efficacy.",
    content: `Proper medication storage is crucial for maintaining drug effectiveness and safety. Most medications should be stored in a cool, dry place away from direct sunlight and moisture. The bathroom cabinet, often used for medication storage, is actually one of the worst places due to humidity from showers. Instead, consider storing medicines in a bedroom drawer or kitchen cabinet away from the stove and sink.

    Always keep medications in their original containers with labels intact. This ensures you have all the important information including expiration dates and dosage instructions. For liquid medications, use the measuring device that came with the medicine rather than household spoons for accurate dosing.
    
    Remember to regularly check expiration dates and properly dispose of expired or unused medications. Many pharmacies offer take-back programs for safe disposal.`,
    author: "Dr. Ramesh Sharma",
    date: "2023-05-15",
    image: blog1,
    tags: ["health", "medication", "storage"],
    likes: 24,
    comments: [
      {
        id: "101",
        name: "Anjali Mehta",
        email: "anjali.m@gmail.com",
        comment: "Very informative article! I had no idea my bathroom was such a bad place for medicines.",
        date: "2023-05-17T10:30:00Z"
      },
      {
        id: "102",
        name: "Rahul Verma",
        email: "rahul.v@outlook.com",
        comment: "What about refrigerated medications? Should they be kept on the door or in the main compartment?",
        date: "2023-05-18T14:45:00Z"
      },
      {
        id: "103",
        name: "Dr. Ramesh Sharma",
        email: "dr.ramesh@sandeshpharma.com",
        comment: "@Rahul: Refrigerated medications should be kept in the main compartment where the temperature is most stable. The door experiences more temperature fluctuations.",
        date: "2023-05-18T16:20:00Z"
      }
    ]
  },
  {
    id: 2,
    title: "Understanding Generic vs Brand Name Drugs",
    excerpt: "Discover the differences between generic and brand-name medications.",
    content: `Generic drugs contain the same active ingredients as their brand-name counterparts and are required to meet the same quality and safety standards. The main differences lie in the inactive ingredients (like fillers and dyes) and the price. Generics typically cost 80-85% less than brand-name drugs.

    Many patients wonder if generics are as effective. The FDA requires that generics demonstrate "bioequivalence" to the brand-name drug, meaning they must deliver the same amount of active ingredients into a patient's bloodstream in the same amount of time.
    
    However, there can be rare cases where patients respond differently to generics, usually due to sensitivity to inactive ingredients. Always consult your doctor if you notice any changes when switching between brand-name and generic medications.`,
    author: "Dr. Priya Patel",
    date: "2023-06-22",
    image: blog2,
    tags: ["medication", "education", "savings"],
    likes: 18,
    comments: [
      {
        id: "201",
        name: "Vikram Joshi",
        email: "vikram.j@gmail.com",
        comment: "I've been using generic medicines for years and never noticed any difference except in my wallet!",
        date: "2023-06-24T09:15:00Z"
      },
      {
        id: "202",
        name: "Sunita Rao",
        email: "sunitarao@yahoo.com",
        comment: "My doctor specifically prescribed the brand-name version. Should I ask about switching to generic?",
        date: "2023-06-25T11:30:00Z"
      },
      {
        id: "203",
        name: "Dr. Priya Patel",
        email: "dr.priya@sandeshpharma.com",
        comment: "@Sunita: It's always worth discussing generic options with your doctor. There may be medical reasons for the brand-name prescription, but often generics are perfectly suitable.",
        date: "2023-06-25T13:45:00Z"
      }
    ]
  },
  {
    id: 3,
    title: "Managing Chronic Conditions with Proper Medication",
    excerpt: "Tips for effectively managing chronic diseases through medication.",
    content: `Effective management of chronic conditions like diabetes, hypertension, and arthritis requires consistent medication adherence. Studies show that about 50% of patients don't take their medications as prescribed, which can lead to worsening conditions and higher healthcare costs.

    Here are key strategies for better medication management:
    1. Use pill organizers to sort medications by day and time
    2. Set reminders on your phone or use medication reminder apps
    3. Keep a medication journal to track doses and any side effects
    4. Schedule medication times around daily routines (like meals or bedtime)
    5. Regularly review all medications with your doctor to identify potential interactions
    
    Remember, managing chronic conditions is a partnership between you and your healthcare providers. Don't hesitate to ask questions about your treatment plan.`,
    author: "Dr. Amit Kumar",
    date: "2023-07-10",
    image: blog3,
    tags: ["chronic", "health", "management"],
    likes: 32,
    comments: [
      {
        id: "301",
        name: "Arun Deshpande",
        email: "arun.d@gmail.com",
        comment: "The pill organizer suggestion changed my life! No more missed doses for my diabetes meds.",
        date: "2023-07-12T08:20:00Z"
      },
      {
        id: "302",
        name: "Meena Iyer",
        email: "meena.iyer@outlook.com",
        comment: "Can you recommend any good medication reminder apps? There are so many to choose from.",
        date: "2023-07-13T15:10:00Z"
      },
      {
        id: "303",
        name: "Dr. Amit Kumar",
        email: "dr.amit@sandeshpharma.com",
        comment: "@Meena: Some reliable options are Medisafe, MyTherapy, and CareZone. Choose one that fits your specific needs and tech comfort level.",
        date: "2023-07-13T17:30:00Z"
      },
      {
        id: "304",
        name: "Rajesh Nair",
        email: "rajesh.nair@gmail.com",
        comment: "I wish I had read this when my father was struggling with his medication routine. Sharing with my family now!",
        date: "2023-07-15T10:45:00Z"
      }
    ]
  },
   {
    id: 4,
    title: "The Science Behind Vaccine Safety",
    excerpt: "Understanding how vaccines are tested and monitored for safety.",
    content: `Vaccines undergo rigorous testing before approval...`,
    author: "Dr. Neha Gupta",
    date: "2023-08-05",
    image: blog4, // You can add more images
    tags: ["vaccines", "health", "prevention"],
    likes: 42,
    comments: [
      {
        id: "401",
        name: "Sanjay Patel",
        email: "sanjay.p@gmail.com",
        comment: "This clarified so many doubts I had about vaccine development!",
        date: "2023-08-07T11:20:00Z"
      }
    ]
  },
  {
    id: 5,
    title: "Mental Health and Medication: Breaking the Stigma",
    excerpt: "Why mental health medications are just as important as physical health treatments.",
    content: `Mental health medications help correct chemical imbalances...`,
    author: "Dr. Ananya Joshi",
    date: "2023-09-12",
    image: blog5,
    tags: ["mental health", "wellness", "awareness"],
    likes: 29,
    comments: [
      {
        id: "501",
        name: "Priya Menon",
        email: "priya.m@yahoo.com",
        comment: "We need more articles like this to reduce stigma!",
        date: "2023-09-14T09:45:00Z"
      }
    ]
  },
  {
    id: 6,
    title: "Ayurveda and Modern Medicine: A Balanced Approach",
    excerpt: "How traditional Indian medicine can complement modern treatments.",
    content: `Ayurveda offers holistic approaches that can support...`,
    author: "Dr. Vikram Bhatt",
    date: "2023-10-18",
    image: blog6,
    tags: ["ayurveda", "holistic", "integrated medicine"],
    likes: 37,
    comments: []
  },
  {
    id: 7,
    title: "Understanding Antibiotic Resistance",
    excerpt: "Why improper antibiotic use is creating superbugs and how to prevent it.",
    content: `Antibiotic resistance occurs when bacteria evolve...`,
    author: "Dr. Arjun Reddy",
    date: "2023-11-05",
    image: blog7,
    tags: ["antibiotics", "public health", "infection"],
    likes: 31,
    comments: [
      {
        id: "701",
        name: "Rahul Khanna",
        email: "rahul.k@gmail.com",
        comment: "I didn't realize how serious this problem was becoming globally.",
        date: "2023-11-07T14:30:00Z"
      }
    ]
  },
  {
    id: 8,
    title: "Pediatric Medication: Special Considerations",
    excerpt: "Important factors when giving medicines to children.",
    content: `Children's bodies process medications differently than adults...`,
    author: "Dr. Sneha Kapoor",
    date: "2023-12-10",
    image: blog8,
    tags: ["pediatrics", "children's health", "dosage"],
    likes: 26,
    comments: []
  },
  {
    id: 9,
    title: "The Future of Personalized Medicine",
    excerpt: "How genetic testing is revolutionizing treatment plans.",
    content: `Personalized medicine tailors treatment based on...`,
    author: "Dr. Rajiv Malhotra",
    date: "2024-01-15",
    image: blog9,
    tags: ["genetics", "innovation", "treatment"],
    likes: 48,
    comments: []
  },
  {
    id: 10,
    title: "First Aid Essentials for Every Home",
    excerpt: "Must-have medications and supplies for common emergencies.",
    content: `Every home should have a well-stocked first aid kit...`,
    author: "Dr. Meera Singh",
    date: "2024-02-20",
    image: blog10,
    tags: ["first aid", "emergency", "preparedness"],
    likes: 35,
    comments: []
  }
];