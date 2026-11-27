# Student Digital ID & ERP Activation (Register Page) - Implementation Guide

## 1. Purpose & Business Logic (Why this step exists?)
- **Apply Page (Free):** Online admission enquiries (`status: 'applied'`). No charge.
- **Register Page (₹20/yr Trigger):** Activates a student's cloud profile, generates a Unique ERP ID (`STU-2026-XXX`), and assigns an official `@school.in` email (`status: 'registered'`).
- **Admission Page (Locked without ID):** Operator enters the Unique ID to auto-fill registered data and complete final admission (`status: 'admitted'`).

---

## 2. UI Copy & Framing (Avoid "Billing/Charge" words)
- **Page Title:** `Student Digital Profile & ERP Activation`
- **Subtitle:** `Activate cloud record, official school email, and smart ERP access for a new student.`
- **Primary Button Text:** `Activate Digital ID & Proceed to Admission`
- **Subtle Wallet Note (Below Button):** `1 Digital License (₹20/yr) will be utilized from School Wallet. Available Balance: ₹1,980`

---

## 3. Form Fields & Data Structure
Keep the form short (5-6 fields) so operators find it fast and easy:

1. **Applicant Reference (Optional Dropdown):** Fetch students with `status === 'applied'` to auto-fill details.
2. **Student Full Name (Required):** Used to generate the email preview.
3. **Class / Grade & Academic Session (Required):** e.g., `Class 5 | 2026-27`.
4. **Parent Mobile Number (Required):** 10-digit number for OTP login & Parent Portal.
5. **Official Email Preview (Read-only / Auto-generated):** 
   - Logic: `firstName.lastName + yearShort + @school.in` (e.g., `aarav.sharma26@school.in`).
6. **Included Digital Services (Pre-checked, Disabled Checkboxes for Value Display):**
   - `[x]` Cloud Student Profile & Unique ERP ID
   - `[x]` Official `@school.in` Workspace Email
   - `[x]` QR Smart ID Card & Attendance Sync
   - `[x]` Parent Portal & Fee Ledger Access

---

## 4. Responsive Layout Rules (Tailwind CSS Fix)
To prevent layout breakage on mobile, tablet, and desktop screens:

- **Outer Container:** Use `max-w-3xl mx-auto px-4 sm:px-6 py-6` (Never use fixed widths like `w-[800px]`).
- **Form Grid:** Use `grid grid-cols-1 md:grid-cols-2 gap-4` so fields stack vertically on mobile (`1 col`) and sit side-by-side on desktop (`2 cols`).
- **Full-Width Elements:** Email preview box, service checkboxes container, and submit button should span full width (`col-span-1 md:col-span-2`).
- **Long Email Overflow Fix:** Add `break-all` or `truncate` on the generated email text (`aarav.sharma26@school.in`) so it doesn't push the container width on small mobile screens.
- **Button Responsiveness:** Use `w-full py-3 px-4 text-sm sm:text-base flex items-center justify-center gap-2` so text doesn't overflow on narrow screens.

---

## 5. Supabase Database & Action Flow (Step-by-Step for Tomorrow)
1. **Check Wallet Balance:** Before creating the student, verify `school.wallet_balance >= 20`. If low, show a "Top-up School Wallet" alert.
2. **Generate Unique ID:** Format `STU-${YEAR}-${RANDOM_OR_SEQUENCE}` (e.g., `STU-2026-089`).
3. **Database Transaction (RPC or Sequential Check):**
   - Deduct `₹20` from `schools` table (`wallet_balance`).
   - Insert transaction log in `wallet_transactions` (`amount: -20`, `type: 'student_activation'`).
   - Insert student row in `students` table with `status: 'registered'`, `unique_id`, and `school_email`.
4. **Redirect