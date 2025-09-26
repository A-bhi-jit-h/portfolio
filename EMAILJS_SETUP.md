# EmailJS Setup Guide

## Steps to Configure EmailJS:

1. **Create EmailJS Account**
   - Go to [emailjs.com](https://www.emailjs.com/)
   - Sign up for a free account

2. **Add Email Service**
   - Go to Email Services in your dashboard
   - Add your email provider (Gmail, Outlook, etc.)
   - Follow the connection steps

3. **Create Email Template**
   - Go to Email Templates
   - Create a new template with these variables:
     ```
     From: {{from_name}} ({{from_email}})
     Subject: {{subject}}
     
     Message:
     {{message}}
     ```

4. **Get Your Credentials**
   - Service ID: From your Email Services page
   - Template ID: From your Email Templates page  
   - Public Key: From Account > API Keys

5. **Update Contact.tsx**
   - Replace the placeholder values in `src/components/Contact.tsx`:
     ```javascript
     const EMAILJS_SERVICE_ID = 'your_actual_service_id';
     const EMAILJS_TEMPLATE_ID = 'your_actual_template_id';
     const EMAILJS_PUBLIC_KEY = 'your_actual_public_key';
     ```

6. **Test the Form**
   - Fill out the contact form on your website
   - Check your email inbox for the message

## Template Variables Used:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{subject}}` - Message subject
- `{{message}}` - Message content
- `{{to_email}}` - Your email (abhijith03us@gmail.com)