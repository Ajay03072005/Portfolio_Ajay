# EmailJS Setup Guide for Contact Form

This guide will help you set up email functionality for your portfolio contact form using EmailJS.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. Go to the **Email Services** section in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. For Gmail:
   - Click on **Gmail**
   - Click **Connect Account**
   - Sign in with your Google account
   - Grant the necessary permissions
5. Give your service a name (e.g., "Portfolio Contact")
6. Click **Create Service**
7. **Copy the Service ID** - you'll need this later

## Step 3: Create Email Templates

### Template 1: Email to Yourself (when someone contacts you)

1. Go to **Email Templates** section
2. Click **Create New Template**
3. Template Name: "Contact Form - Notification"
4. Set up the template:

**Subject:**
```
New Contact Form Submission from {{from_name}}
```

**Content:**
```
Hello {{to_name}},

You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

5. Click **Save**
6. **Copy the Template ID** - you'll need this

### Template 2: Auto-Reply to User (thank you message)

1. Click **Create New Template** again
2. Template Name: "Contact Form - Auto Reply"
3. Set up the template:

**Subject:**
```
Thank you for contacting me, {{to_name}}!
```

**Content:**
```
Hello {{to_name}},

Thank you for reaching out to me through my portfolio website!

I have received your message and will get back to you as soon as possible, usually within 24-48 hours.

Best regards,
{{from_name}}

---
This is an automated reply from my portfolio contact form.
If you did not submit this form, please disregard this email.
```

4. Click **Save**
5. **Copy the Template ID** - you'll need this

## Step 4: Get Your Public Key

1. Go to **Account** section (top right corner)
2. Find **API Keys** section
3. **Copy the Public Key** - you'll need this

## Step 5: Configure Your Project

1. Open the `.env` file in your project root
2. Replace the placeholder values with your actual EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_EMAILJS_REPLY_TEMPLATE_ID=template_xxxxxxx
```

Where:
- `VITE_EMAILJS_SERVICE_ID` = Service ID from Step 2
- `VITE_EMAILJS_TEMPLATE_ID` = Template ID from Template 1 (email to you)
- `VITE_EMAILJS_REPLY_TEMPLATE_ID` = Template ID from Template 2 (auto-reply)
- `VITE_EMAILJS_PUBLIC_KEY` = Public Key from Step 4

## Step 6: Test the Contact Form

1. Save the `.env` file
2. Restart your development server:
   ```powershell
   # Stop the current server (Ctrl+C in the terminal)
   npm run dev
   ```
3. Open your portfolio at http://localhost:8080/
4. Navigate to the Contact section
5. Fill out the form and submit
6. You should:
   - See a success toast notification
   - Receive an email with the contact details
   - The user should receive an auto-reply email

## Troubleshooting

### Issue: "Failed to send message"
- Check that all environment variables are set correctly in `.env`
- Make sure you restarted the dev server after updating `.env`
- Verify your EmailJS service is active
- Check browser console for specific error messages

### Issue: Email not received
- Check your spam/junk folder
- Verify the email address connected to your EmailJS service
- Check EmailJS dashboard for delivery logs

### Issue: Auto-reply not working
- Verify the reply template ID is correct
- Check that the template has the correct variable names (`{{to_name}}`, `{{to_email}}`, `{{from_name}}`)

## EmailJS Free Tier Limits

The free tier includes:
- 200 emails per month
- 2 email templates
- 1 email service

This should be sufficient for a portfolio website. If you need more, consider upgrading to a paid plan.

## Security Notes

- **Never commit your `.env` file to Git** - it contains sensitive credentials
- The `.env` file is already in `.gitignore`
- Only share the `.env.example` file (with placeholder values)
- Your Public Key is safe to use in client-side code

## Support

If you have issues:
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/

---

That's it! Your contact form should now send emails to you and auto-reply to your visitors.
