import { Doctor, Service, Achievement, Review, BlogPost, ContactInfo } from '../types';

export const doctorInfo: Doctor = {
  name: "Dr. Arjun Mehta",
  title: "MBBS, MS (General Surgery), FRCS",
  specialization: "General Surgery",
  experience: 12,
  location: "Bangalore, India",
  rating: 4.9,
  totalSurgeries: 3000,
  patientsHelped: 5000,
  image: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=600",
  tagline: "Trusted Surgical Expertise | 3000+ Surgeries | 4.9★ Rated"
};

export const services: Service[] = [
  {
    id: "1",
    name: "Laparoscopic Surgery",
    description: "Minimally invasive surgical procedures using advanced laparoscopic techniques for faster recovery and reduced complications.",
    benefits: [
      "Smaller incisions",
      "Reduced pain",
      "Faster recovery",
      "Lower risk of infection"
    ],
    icon: "Scissors"
  },
  {
    id: "2",
    name: "Gallbladder Surgery",
    description: "Expert treatment for gallbladder disorders including gallstones, inflammation, and other related conditions.",
    benefits: [
      "Same-day discharge possible",
      "High success rate",
      "Minimal scarring",
      "Quick return to normal activities"
    ],
    icon: "Heart"
  },
  {
    id: "3",
    name: "Hernia Repair",
    description: "Comprehensive hernia treatment using both traditional and laparoscopic approaches for optimal patient outcomes.",
    benefits: [
      "Durable repair",
      "Reduced recurrence",
      "Faster healing",
      "Customized approach"
    ],
    icon: "Shield"
  },
  {
    id: "4",
    name: "Surgical Consultation",
    description: "Thorough evaluation and consultation for various surgical conditions with personalized treatment plans.",
    benefits: [
      "Expert diagnosis",
      "Treatment options",
      "Second opinion",
      "Patient education"
    ],
    icon: "Stethoscope"
  }
];

export const achievements: Achievement[] = [
  {
    id: "1",
    title: "3000+ Successful Surgeries",
    description: "Milestone achievement in surgical excellence with zero major complications",
    date: "2024",
    type: "milestone"
  },
  {
    id: "2",
    title: "Excellence in Surgery Award",
    description: "Recognized by Indian Medical Forum for outstanding surgical outcomes",
    date: "2023",
    type: "award"
  },
  {
    id: "3",
    title: "Advanced Laparoscopic Techniques",
    description: "Research paper published in Journal of Minimal Access Surgery",
    date: "2023",
    type: "research"
  },
  {
    id: "4",
    title: "International Surgery Conference",
    description: "Keynote speaker at Asian Conference on Advanced Surgery",
    date: "2022",
    type: "conference"
  },
  {
    id: "5",
    title: "Fellowship in Advanced Surgery",
    description: "Completed FRCS from Royal College of Surgeons",
    date: "2021",
    type: "award"
  }
];

export const reviews: Review[] = [
  {
    id: "1",
    name: "Priya Sharma",
    rating: 5,
    comment: "Dr. Mehta performed my gallbladder surgery with exceptional skill. The recovery was much faster than expected, and his caring approach made all the difference.",
    date: "2024-01-15",
    treatment: "Laparoscopic Cholecystectomy"
  },
  {
    id: "2",
    name: "Rajesh Kumar",
    rating: 5,
    comment: "Outstanding surgeon! Had my hernia repair done 6 months ago and I'm completely back to normal activities. Highly recommend Dr. Mehta.",
    date: "2024-02-08",
    treatment: "Hernia Repair"
  },
  {
    id: "3",
    name: "Sunita Patel",
    rating: 5,
    comment: "Professional, knowledgeable, and compassionate. Dr. Mehta explained everything clearly and the surgery went perfectly. Thank you doctor!",
    date: "2024-02-22",
    treatment: "Appendectomy"
  },
  {
    id: "4",
    name: "Vikram Singh",
    rating: 5,
    comment: "Best surgeon in Bangalore! Dr. Mehta's expertise and the hospital staff's care made my surgery experience stress-free. Excellent results!",
    date: "2024-03-05",
    treatment: "Laparoscopic Surgery"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "5 Things to Know Before Your Surgery",
    excerpt: "Essential preparation tips for a successful surgical experience and smooth recovery.",
    content: `Surgery can be a stressful experience, but proper preparation can make all the difference. Here are five crucial things every patient should know before going under the knife.

## 1. Pre-operative Preparation is Key

Your surgeon will provide specific instructions about eating, drinking, and medication before surgery. Follow these guidelines exactly - they're designed to keep you safe during the procedure.

## 2. Understand Your Procedure

Don't hesitate to ask questions about your surgery. Understanding what will happen, how long it will take, and what to expect can help reduce anxiety and prepare you mentally.

## 3. Arrange Post-Surgery Support

Plan for your recovery period. You'll need someone to drive you home and may need help with daily activities for a few days. Having this support system in place is crucial.

## 4. Prepare Your Recovery Space

Set up a comfortable recovery area at home with everything you'll need within easy reach. This includes medications, water, healthy snacks, and entertainment.

## 5. Follow Post-Op Instructions

Your recovery depends on following post-operative instructions carefully. This includes taking medications as prescribed, keeping wounds clean, and attending follow-up appointments.

Remember, every surgery is different, and your medical team is there to guide you through the process. Don't hesitate to reach out with any concerns or questions.`,
    author: "Dr. Arjun Mehta",
    date: "2024-03-10",
    slug: "things-to-know-before-surgery",
    category: "Surgery Preparation",
    readTime: 3
  },
  {
    id: "2",
    title: "Post-Op Recovery Tips",
    excerpt: "Expert advice for a smooth and quick recovery after surgery.",
    content: `Recovery after surgery is just as important as the procedure itself. Here are my top recommendations for ensuring a smooth and speedy recovery.

## Rest and Sleep

Your body needs energy to heal, and sleep is when most healing occurs. Aim for 8-10 hours of sleep per night and don't feel guilty about napping during the day.

## Nutrition for Healing

Eat a balanced diet rich in protein, vitamins, and minerals. Protein is especially important for tissue repair. Consider foods like lean meats, eggs, beans, and yogurt.

## Stay Hydrated

Drink plenty of water to help your body flush out anesthesia and medications. Proper hydration also supports the healing process.

## Gentle Movement

While rest is important, gentle movement as approved by your surgeon can prevent blood clots and improve circulation. Start with short walks and gradually increase activity.

## Pain Management

Take prescribed pain medications as directed. Don't wait until pain becomes severe - staying ahead of pain helps you rest better and heal faster.

## Wound Care

Keep surgical sites clean and dry. Follow your surgeon's instructions for cleaning and dressing changes. Watch for signs of infection and contact your doctor if you notice anything unusual.

Remember, recovery is a process, not a race. Be patient with yourself and don't hesitate to contact your medical team with any concerns.`,
    author: "Dr. Arjun Mehta",
    date: "2024-03-15",
    slug: "post-op-recovery-tips",
    category: "Recovery",
    readTime: 4
  },
  {
    id: "3",
    title: "When to See a Surgeon",
    excerpt: "Understanding the signs and symptoms that require surgical consultation.",
    content: `Many people wonder when they should seek surgical consultation. Here are the key signs and symptoms that warrant a visit to a surgeon.

## Persistent Abdominal Pain

If you experience severe or persistent abdominal pain, especially if it's accompanied by fever, nausea, or vomiting, it's important to seek medical attention promptly.

## Unusual Lumps or Masses

Any new lumps, bumps, or masses that appear on your body should be evaluated by a medical professional. While many are benign, early evaluation is always best.

## Hernias

If you notice a bulge in your abdomen or groin area, especially one that becomes more prominent when you cough or strain, you may have a hernia that requires surgical repair.

## Gallbladder Issues

Symptoms like severe upper abdominal pain, especially after eating fatty foods, along with nausea and vomiting, may indicate gallbladder problems.

## Chronic Conditions

Some chronic conditions may eventually require surgical intervention. Regular follow-ups with your healthcare provider can help determine the right timing.

## Emergency Situations

Seek immediate medical attention for severe abdominal pain, signs of internal bleeding, or any condition that seems to be rapidly worsening.

Remember, early consultation often leads to better outcomes. Don't wait for symptoms to become severe - your health is too important to delay proper care.`,
    author: "Dr. Arjun Mehta",
    date: "2024-03-20",
    slug: "when-to-see-surgeon",
    category: "Medical Advice",
    readTime: 3
  }
];

export const contactInfo: ContactInfo = {
  address: "CityCare Hospital, 2nd Floor, MG Road, Bangalore, Karnataka 560001",
  phone: "+91 98765 43210",
  email: "dr.arjun.mehta@citycare.com",
  whatsapp: "+91 98765 43210",
  hours: {
    weekdays: "9:00 AM - 6:00 PM",
    weekends: "9:00 AM - 2:00 PM"
  },
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.8319999999997!2d77.60841!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzYnMzAuMyJF!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
};