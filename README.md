# 🌊 Marine ITSM Web

A modern **Marine IT Service Management (ITSM) web frontend** built with **Next.js 14, React, TypeScript, and Tailwind CSS**.  
This project provides a clean, ocean-inspired dashboard to manage vessels, assets, tickets, and IT maintenance tasks in real-time.

---

## 🚀 Features

- **Next.js 14 (App Router)** — Fast, scalable, SEO-friendly architecture
- **TypeScript** — Type safety across the codebase
- **Tailwind CSS** — Modern, responsive UI with custom theming
- **Modular Pages**:
  - 📊 Dashboard (system overview, KPIs)
  - 🛠️ Service Requests (create & manage IT tickets)
  - ⚓ Assets (track vessel equipment & operational status)
  - 🔧 Maintenance (schedule & monitor tasks)
- **Reusable Components**:
  - `Topbar`, `Sidebar`, `Shell` for layout  
  - `AssetCard`, `MaintenanceCard`, `ServiceRequestCard`  
  - `StatsGrid`, `RecentActivity`, `VesselStatus`

---

## 📂 Project Structure

src/
├── app/ # Next.js App Router pages

│ ├── assets/ # Assets management pages

│ ├── settings/ # User/system settings

│ ├── tickets/ # Service requests & IT tickets

│ ├── vessels/ # Vessel management

│ ├── layout.tsx # Global layout

│ ├── page.tsx # Dashboard entry

│ ├── globals.css # Tailwind global styles

│ └── favicon.ico
│

├── components/ # Reusable UI components

│ ├── layout/ # Topbar, Sidebar, Shell

│ ├── dashboard/ # StatsGrid, VesselStatus, RecentActivity

│ ├── maintenance/ # MaintenanceCard, MaintenanceForm

│ └── service-requests/ # ServiceRequestCard, ServiceRequestForm
│

└── assets/ # Static assets (icons, logos)

--- 
## ⚡ Installation & Setup

1. Clone the repo:
   ```bash
   git clone https://github.com/alirazi1992/marine-itsm-web.git
   cd marine-itsm-web
   ```

2. Install dependencies:

 ```bash
   npm install
 ```

3. Run the development server:

```bash
  npm run dev
```

4. Open the app in your browser:

```bash
http://localhost:3000
```
----

## 🛠️ Tech Stack

- Next.js 14

- React 18

- TypeScript

- Tailwind CSS

- ESLint
 + Prettier for code quality


----

## 📸 UI Preview

Ocean-inspired dashboard and modules for ITSM workflows:

✅ Dashboard KPIs

✅ Assets overview

✅ Service requests tracking

✅ Maintenance scheduling

--- 
## 🤝 Contributing 

Feel free to fork the repo and submit PRs or raise issues for any suggastions.


## 📬  Contact
For questions or collaboration opportunities:

**📧 Email:** ali.razi9292@gmail.com

**🔗 LinkedIn:** linkedin.com/in/alirazi1992 
