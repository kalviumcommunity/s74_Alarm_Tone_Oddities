# Alarm Tone Oddities

Welcome to **Alarm Tone Oddities**! This quirky app lets users explore, rate, and share some of the most bizarre and peculiar alarm tones people use to wake up. From animal noises to random sound effects, you can upload your own, listen to others, and vote for the weirdest and most effective alarms!

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [UI Design](#ui-design)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

**"Alarm Tone Oddities"** is a fun app that lets users explore odd alarm sounds, rate them, and upload their own unique tones. Whether you're into animal sounds, random beeps, or loud and jarring alarms, this app has something for you!

## Features

### **User Authentication**
- Users can sign up, log in, and interact with alarm tones.
- Secure authentication using JWT tokens (or Firebase Auth).

### **Alarm Tone Upload**
- Users can upload their alarm tones in MP3, WAV, and other common audio formats.
- Add metadata such as title, description, and categories to your uploaded tones.

### **Explore & Listen**
- Browse and explore a variety of strange and funny alarm tones.
- Listen to samples before deciding to rate them.

### **Rating System**
- Rate alarm tones on a scale from 1 to 5, based on how effective, funny, or bizarre they are.
- Categories such as “Most Likely to Make You Jump Out of Bed”, “Worst Alarm to Wake Up To”, and “Most Random Sound Ever”.

### **Leaderboard**
- View the most popular alarm tones based on user ratings.
- Filter the leaderboard by category (e.g., “Most Popular”, “Most Peculiar”, etc.).

### **Alarm Tone Categories**
- Categories such as “Animal Sounds”, “Loud & Jarring”, “Funny Beeps”, and more.
- Filter tones by category for easier discovery.

### **Share Your Alarm Tone**
- Share your uploaded alarm tones and ratings on social media with the hashtag `#AlarmToneOddities`.
- Automatically generate a fun preview image or video for easy sharing.

### **Random Alarm Tone Generator**
- A fun "Surprise Me!" button that picks a random alarm tone from the collection.

## Tech Stack

### **Frontend**
- **React** with **Vite** (fast and modern build setup).
- **Tailwind CSS** for utility-first styling.

### **Backend**
- **Node.js** with **Express.js** for server-side logic.
- **MongoDB** with **Mongoose** for database management.

### **Authentication**
- **JWT Tokens** or **Firebase Auth** for user authentication.

### **Deployment**
- **Vercel** for frontend hosting.
- **Heroku** for backend hosting.
- **MongoDB Atlas** for cloud database hosting.

### **Testing**
- **Postman** for API testing.
- **Jest** for unit and integration testing .

### **Optional**
- **Docker** for containerization .

## UI Design

The app has a playful, colorful, and engaging design that is intuitive and easy to use. 
Below are the key components of the UI:

### **Landing Page**
- Quirky greeting: “Looking for the Weirdest Alarm Tone? You’ve Found It!”
- Main Call-to-Action: “Start Exploring” or “Upload Your Own Alarm Tone”.
- Fun visuals of exaggerated alarm clocks and sound-related icons.

### **Login/Sign Up Page**
- Simple layout with fields for email and password.
- Fun headline: “Join the Alarm Tone Revolution!” or “Wake Up the World with Your Weird Sounds!”
- Action button: “Wake Me Up!”

### **Main Dashboard (Explore Page)**
- **Tone Gallery**: Display a grid/list of alarm tones.
  - Tone Name, Audio Preview (play button).
  - Rating system (1–5 stars or thumbs-up/down).
  - Categories: Tags like “Animal Sounds”, “Funny”, “Loud & Jarring”.
- **Upload Your Alarm**: Button to upload your alarm with a form for title, description, and category.
  
### **Tone Detail Page**
- Larger audio player to preview the full alarm.
- Ratings and comments section to interact with others.
- Social sharing buttons with auto-generated preview images/videos.

### **Leaderboard Page**
- A ranked list of the best-rated alarm tones.
- Filters to sort by category, rating, or most popular.

### **Random Alarm Tone Generator Page**
- Fun "Surprise Me" button to randomly play an alarm tone.
- Message like: “Let’s see what weirdness you get today!”

## Getting Started

Follow the steps below to get started with the project:

### **Prerequisites**
- Install **Node.js** on your machine.
- Create a **MongoDB Atlas** account for cloud database access.

### **Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/alarm-tone-oddities.git





   DEPLOYMENT LINK - https://s74-alarm-tone-oddities-2.onrender.com
