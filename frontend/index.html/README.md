# 🌐 Language Translation Tool  
### CodeAlpha Artificial Intelligence Internship — Task 1  
Developed by **Shravani Karpe**

---

## 📘 **Project Overview**
This project is a web-based **Language Translation Tool** created as part of the CodeAlpha AI Internship.  
It allows users to translate text from one language to another using a clean and simple interface.

The system uses a **Flask backend API** and the **MyMemory Translation API** to process translation requests.

---

## 🚀 **Features**
- Translate text between multiple languages  
- Simple and user-friendly interface  
- Real-time translation  
- Supports long paragraphs  
- Copy-to-clipboard functionality  
- Text-to-speech feature  
- Clean and responsive frontend  
- Error handling for invalid or empty inputs  

---

## 🏗️ **Tech Stack**
### **Frontend**
- HTML  
- CSS  
- JavaScript  

### **Backend**
- Python  
- Flask  
- Requests  
- CORS  

### **API**
- MyMemory Translation API  

---

## 📁 **Folder Structure**
```
CodeAlpha_LanguageTranslationTool/
│
├── backend/
│   ├── app.py
│   └── requirements.txt
│
└── frontend/
    ├── index.html
    ├── style.css
    └── script.js
```

---

## ⚙️ **Setup Instructions**

### ✅ **1. Clone the repository**
```
git clone https://github.com/your-username/CodeAlpha_LanguageTranslationTool
```

### ✅ **2. Install dependencies**
```
pip install flask requests flask-cors
```

### ✅ **3. Start the backend**
```
cd backend
python app.py
```

You will see:
```
Running on http://127.0.0.1:5000
```

### ✅ **4. Run the frontend**
Open `index.html` with **Live Server** (VS Code extension).

URL will be:
```
http://127.0.0.1:5500/frontend/index.html
```

---

## 🎯 **How It Works**
1. User enters the text  
2. Selects source and target languages  
3. Clicks **Translate**  
4. JavaScript sends request to Flask backend  
5. Backend contacts MyMemory API  
6. Response is returned to the frontend  
7. Translated text is displayed instantly  

---

## 🎥 **Demo Video**
A short demo video is included as part of the CodeAlpha internship submission, explaining the project architecture and functionality.

---

## 📌 **Conclusion**
This project helped me understand:  
- API Integration  
- Backend API development  
- Real-time data handling  
- Building complete full-stack applications  

Thank you **CodeAlpha** for this opportunity!

---

## 🏷️ **Author**
**Shravani Karpe**  
Artificial Intelligence Intern — CodeAlpha

