import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();

const __dirname = dirname(fileURLToPath(import.meta.url));
const db = new Database(join(__dirname, 'coupons.db'));

const app = express();
app.use(cors());
app.use(express.json());

// Initialize database
db.exec(`
  CREATE TABLE IF NOT EXISTS coupon_claims (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT NOT NULL,
    coupon_id TEXT NOT NULL,
    claimed_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(email, coupon_id)
  )
`);

// Email transporter setup
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

// Coupon data (in a real app, this would be in the database)
const coupons = {
  'BOOK30': {
    value: '$30',
    code: 'A123456791A',
    description: 'FOR BOOKING ONLINE'
  },
  'RETURN30': {
    value: '$30',
    code: 'A123456792A',
    description: 'FOR RETURNING CUSTOMERS'
  },
  'SENIOR10': {
    value: '10%',
    code: 'A123456793A',
    description: 'FOR SENIORS AND FRONT LINERS'
  }
};

app.post('/api/claim-coupon', async (req, res) => {
  const { email, couponId } = req.body;

  if (!email || !couponId) {
    return res.status(400).json({ message: 'Email and coupon ID are required' });
  }

  const coupon = coupons[couponId];
  if (!coupon) {
    return res.status(404).json({ message: 'Invalid coupon' });
  }

  try {
    // Check if coupon has already been claimed
    const stmt = db.prepare('INSERT INTO coupon_claims (email, coupon_id) VALUES (?, ?)');
    stmt.run(email, couponId);

    // Send email with coupon code
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Your Edmonton Appliance Repair Discount Coupon',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #1a365d;">Your Discount Coupon</h1>
          <div style="border: 2px dashed #dc2626; padding: 20px; margin: 20px 0; border-radius: 8px;">
            <h2 style="color: #dc2626; margin: 0;">${coupon.description}</h2>
            <div style="font-size: 32px; font-weight: bold; color: #dc2626; margin: 10px 0;">
              ${coupon.value}
            </div>
            <div style="background: #f3f4f6; padding: 10px; border-radius: 4px;">
              Coupon Code: <strong>${coupon.code}</strong>
            </div>
          </div>
          <p style="color: #4b5563; line-height: 1.5;">
            Present this code before work begins to redeem your discount. 
            This is a one-time use coupon and cannot be combined with other offers.
          </p>
          <p style="color: #4b5563; font-size: 0.875rem;">
            For questions or support, contact us at (825) 888-3333
          </p>
        </div>
      `
    });

    res.json({ message: 'Coupon claimed successfully' });
  } catch (error) {
    if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
      return res.status(400).json({ message: 'You have already claimed this coupon' });
    }
    console.error('Error claiming coupon:', error);
    res.status(500).json({ message: 'Failed to claim coupon' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});