# 📧 Email & WhatsApp Integration Setup (Free Solutions)

## Current Implementation
Currently, all forms use `mailto:` links which open the user's default email client. This is a temporary solution.

## 🆓 Free Email Solutions

### **Option 1: EmailJS (Recommended - Easiest)**
**Free Tier**: 200 emails/month

#### Setup Steps:
1. **Sign up**: https://www.emailjs.com/
2. **Create Email Service**:
   - Connect Gmail/Outlook account
   - Get Service ID

3. **Create Email Template**:
   - Add template with variables: `{{from_name}}`, `{{from_email}}`, `{{message}}`
   - Get Template ID

4. **Get Public Key**:
   - Account → API Keys → Public Key

5. **Install in your project**:
```bash
npm install @emailjs/browser
```

6. **Update forms** (example for ContactModal.tsx):
```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    await emailjs.sendForm(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      e.currentTarget,
      'YOUR_PUBLIC_KEY'
    );
    setSubmitted(true);
  } catch (error) {
    console.error('Email error:', error);
    alert('Failed to send message. Please try again.');
  }
  
  setIsSubmitting(false);
};
```

**Pros**: Simple, no backend needed, works directly from browser  
**Cons**: 200/month limit, exposed API keys (safe with EmailJS but still visible)

---

### **Option 2: Formspree**
**Free Tier**: 50 submissions/month

#### Setup:
1. Sign up: https://formspree.io/
2. Create form, get endpoint: `https://formspree.io/f/YOUR_FORM_ID`
3. Update forms:

```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });
  
  if (response.ok) {
    setSubmitted(true);
  }
};
```

**Pros**: Very simple, no code changes needed  
**Cons**: Only 50/month on free tier

---

### **Option 3: Resend (Modern, Developer-Friendly)**
**Free Tier**: 100 emails/day, 3,000/month

#### Setup:
1. Sign up: https://resend.com/
2. Get API key
3. Create API route in your Next.js app:

**Create `/src/app/api/send-email/route.ts`**:
```typescript
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: 'DatanerdzAI <onboarding@resend.dev>', // Use your verified domain
      to: 'contact@datanerdzai.com',
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
```

**Install Resend**:
```bash
npm install resend
```

**Add to `.env.local`**:
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxx
```

**Update forms**:
```typescript
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  const formData = new FormData(e.currentTarget);
  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    }),
  });

  if (response.ok) {
    setSubmitted(true);
  }
  
  setIsSubmitting(false);
};
```

**Pros**: 3,000 emails/month, professional, works with custom domains  
**Cons**: Requires API route (backend code)

---

## 📱 WhatsApp Integration

### **Current Implementation**: Direct WhatsApp Links ✅
Already working! All "Talk to Us" and form redirects use:
```
https://wa.me/919360393272?text=Message
```

### **Option: WhatsApp Business API** (If you need automation)
- **Free**: WhatsApp Business App (manual responses only)
- **Paid**: WhatsApp Business API ($0.005-$0.01 per message)
  - Use services like: Twilio, MessageBird, or Meta Business
  - Allows automated responses, chatbots

### **Recommended**: Stick with current direct links
- No cost
- Instant connection
- Users can see conversation history
- Works perfectly for small-medium businesses

---

## 🎯 My Recommendation

### **For Email**: Use **Resend** (Option 3)
**Why?**
- 3,000 emails/month is plenty for starting out
- Professional sender address
- Better deliverability
- You can add custom domain later
- Clean implementation

### **For WhatsApp**: Keep current implementation ✅
**Why?**
- Already working
- Zero cost
- Direct connection
- Perfect for your use case

---

## 📝 Implementation Checklist

### To implement Resend (Recommended):

1. **Sign up for Resend**: https://resend.com/
2. **Install package**:
   ```bash
   npm install resend
   ```

3. **Create API key** in Resend dashboard

4. **Add to `.env.local`**:
   ```
   RESEND_API_KEY=your_api_key_here
   ```

5. **Create API route**: `/src/app/api/send-email/route.ts` (code above)

6. **Update these components**:
   - `/src/components/ContactModal.tsx`
   - `/src/app/join-mentor/page.tsx` (form)
   - `/src/app/join-student/page.tsx` (form)
   - `/src/app/clients/page.tsx` (form)

7. **Test locally**:
   ```bash
   npm run dev
   ```

8. **Deploy to Vercel**:
   - Add `RESEND_API_KEY` to Vercel environment variables
   - Redeploy

---

## 🔒 Security Notes

1. **Never expose API keys** in client-side code
2. **Use environment variables** for all keys
3. **Validate form data** on the server side
4. **Add rate limiting** to prevent spam (optional for now)

---

## 📞 Support

If you need help setting up:
1. Resend has excellent docs: https://resend.com/docs
2. EmailJS tutorial: https://www.emailjs.com/docs/
3. Feel free to ask me for implementation help!

---

**Current Status**: ✅ WhatsApp working, ✉️ Email needs setup  
**Next Step**: Choose email solution and implement
