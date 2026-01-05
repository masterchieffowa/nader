import React from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import profileImage from './assets/image_2026-01-05_21-00-58.png';

export default function NurseResume() {
  return (
    <div className="w-full h-full bg-white p-8 mt-[0.5cm]">
      {/* Header */}
      <div className="border-b-4 border-blue-600 pb-6 mb-6">
        <div className="flex gap-6 items-start">
          {/* Professional Photo */}
            <div className="flex-shrink-0">
            <img
                src={profileImage}
                alt="Nader Elfaiomy"
                className="w-36 h-48 object-cover border-4 border-blue-600 shadow-lg"
            />
            </div>

          
          {/* Header Content */}
          <div className="flex-grow">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              NADER MOHAMMED ELSAID ELFAIOMY
            </h1>
            <h2 className="text-xl text-blue-600 font-semibold mb-4">
              Registered Nurse | Nursing Technician
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-blue-600" />
                <span>naderelfauomy57@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-600" />
                <span>+966 57 501 5774</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Qena - Farshout, Egypt</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                <span>Date of Birth: March 1, 2000</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Summary */}
      <section className="mb-6">
        <h3 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-3">
          PROFESSIONAL SUMMARY
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Dedicated and licensed Registered Nurse with comprehensive clinical experience across critical care settings including Intensive Care, Oncology, and Emergency Departments. Graduate of Alexandria University's Technical Nursing Institute with proven expertise in patient care, medication administration, and emergency response. Member of the Egyptian Nursing Syndicate with valid professional license. Currently expanding expertise in oncology nursing at Al-Markaz Al-Tibi Samouha.
        </p>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h3 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-3">
          EDUCATION
        </h3>
        <div className="mb-4">
          <div className="flex justify-between items-start mb-1">
            <div>
              <h4 className="font-bold text-gray-800">Diploma in Technical Nursing</h4>
              <p className="text-gray-700">Alexandria University - Faculty of Nursing, Technical Nursing Institute</p>
            </div>
            <span className="text-gray-600 text-sm">July 2020</span>
          </div>
          <p className="text-gray-700">
            • Overall Grade: Very Good (71.74%)
          </p>
          <p className="text-gray-700">
            • Graduate with Honors - Graduated as one of the top students in the class
          </p>
        </div>
      </section>

      {/* Licensure & Certifications */}
      <section className="mb-6">
        <h3 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-3">
          LICENSURE & CERTIFICATIONS
        </h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <p className="text-gray-700">
              <strong>Egyptian Nursing Syndicate License</strong> - Registration No. 153121
            </p>
            <span className="text-gray-600 text-sm">June 2020</span>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">
              <strong>General Syndicate for Egyptian Nursing Membership</strong> - Member No. 77/3471137
            </p>
            <span className="text-gray-600 text-sm">August 2020</span>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">
              <strong>Ministry of Health License</strong> - License No. 03/77/3471137
            </p>
            <span className="text-gray-600 text-sm">Valid until Oct 2026</span>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="mb-6">
        <h3 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-3">
          PROFESSIONAL EXPERIENCE
        </h3>
        
        {/* Oncology Nurse section */}
        <div className="mb-4">
        <div className="flex justify-between items-start mb-2">
            <div>
            <h4 className="font-bold text-gray-800">Oncology Nurse</h4>
            <p className="text-gray-700">Al-Markaz Al-Tibi Samouha Medical Center - Oncology Department</p>
            </div>
            <span className="text-gray-600 text-sm">Dec 2024 - Present</span>
        </div>
        <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1 page-break-after">
            <li>Providing specialized nursing care for oncology patients</li>
            <li>Administering chemotherapy and monitoring patient responses</li>
            <li>Educating patients and families about treatment protocols and side effects</li>
            <li>Collaborating with multidisciplinary healthcare team for comprehensive patient care</li>
        </ul>
        </div>

        {/* Nursing Intern section with page break before */}
        <div className="mb-4 page-break-before">
        <div className="flex justify-between items-start mb-2">
            <div>
            <h4 className="font-bold text-gray-800">Nursing Intern</h4>
            <p className="text-gray-700">Abu Hindia Hospital</p>
            </div>
            <span className="text-gray-600 text-sm">Dec 2020 - Feb 2021</span>
        </div>
        {/* rest of content */}
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h4 className="font-bold text-gray-800">Clinical Internship (Mandatory Internship - Imtiyaz)</h4>
              <p className="text-gray-700">University Hospitals, Alexandria University</p>
            </div>
            <span className="text-gray-600 text-sm">Jan 2018 - Aug 2018 (6 months)</span>
          </div>
          <p className="text-gray-700 mb-2">
            Completed mandatory clinical rotation across multiple critical care departments:
          </p>
          <ul className="list-disc list-inside text-gray-700 ml-4 space-y-1">
            <li><strong>Intensive Care Unit (ICU):</strong> Provided critical care nursing, monitored vital signs, operated life-support equipment, and assisted in emergency interventions</li>
            <li><strong>Oncology Department:</strong> Delivered specialized care to cancer patients, administered chemotherapy under supervision, managed side effects, and provided emotional support</li>
            <li><strong>Emergency Department:</strong> Performed triage, assisted in acute care situations, stabilized trauma patients, and executed rapid response protocols</li>
            <li><strong>Additional Rotations:</strong> Gained experience in Medical-Surgical Units, Pediatrics, Obstetrics, Maternal Health, and Community Health Nursing</li>
          </ul>
        </div>
      </section>

      {/* Clinical Skills */}
      <section className="mb-6">
        <h3 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-3">
          CLINICAL SKILLS & COMPETENCIES
        </h3>
        <div className="grid grid-cols-2 gap-x-8 gap-y-2">
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Critical Care & ICU Nursing</li>
            <li>Oncology & Chemotherapy Administration</li>
            <li>Emergency & Trauma Care</li>
            <li>Patient Assessment & Monitoring</li>
            <li>Vital Signs & ECG Monitoring</li>
            <li>Medication Administration (IV, IM, SC, PO)</li>
          </ul>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Wound Care & Dressing Management</li>
            <li>Infection Control & Safety Protocols</li>
            <li>Patient Education & Counseling</li>
            <li>Medical Documentation & Charting</li>
            <li>Team Collaboration & Communication</li>
            <li>Emergency Response & Triage</li>
          </ul>
        </div>
      </section>

        {/* Languages */}
      <section className="mb-6">
        <h3 className="text-xl font-bold text-gray-800 border-b-2 border-gray-300 pb-2 mb-3">
            LANGUAGES
        </h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li><strong>English:</strong> Professional Working Proficiency</li>
            <li><strong>Arabic:</strong> Native</li>
        </ul>
      </section>

    </div>
  );
}