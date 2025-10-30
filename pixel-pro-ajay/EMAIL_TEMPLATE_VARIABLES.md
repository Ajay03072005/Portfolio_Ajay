# Quick Reference: EmailJS Template Variables

## Variables Available in Templates

When creating your EmailJS templates, use these variable names:

### For the main contact notification email (to you):
- `{{to_name}}` - Your name (Ajay)
- `{{from_name}}` - Name of the person contacting you
- `{{from_email}}` - Email of the person contacting you
- `{{message}}` - The message content

### For the auto-reply email (to the user):
- `{{to_name}}` - Name of the person who contacted you
- `{{to_email}}` - Email of the person who contacted you
- `{{from_name}}` - Your name (Ajay)

## Example Usage in EmailJS Templates

### Main Template (to you):
**Subject:** New Contact Form Submission from {{from_name}}

**Body:**
```
Hello {{to_name}},

You have received a new message from your portfolio contact form.

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

### Reply Template (to user):
**Subject:** Thank you for contacting me, {{to_name}}!

**Body:**
```
Hello {{to_name}},

Thank you for reaching out to me!

I have received your message and will get back to you soon.

Best regards,
{{from_name}}
```
