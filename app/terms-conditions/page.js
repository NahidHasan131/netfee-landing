"use client";

import { useTranslation } from "react-i18next";
import PolicyLayout from "../components/PolicyLayout";

export default function TermsConditionsPage() {
  const { i18n } = useTranslation();
  const isBn = i18n.language === "bn";

  if (isBn) {
    return (
      <PolicyLayout title="শর্তাবলী ও নিয়মাবলী">
        <p>
          নেটফি সফটওয়্যার একটি সফটওয়্যার, ওয়েবসাইট ও মোবাইল অ্যাপ্লিকেশন ডেভেলপমেন্ট
          সেবা প্রদানকারী প্রতিষ্ঠান। নেটফি সফটওয়্যারের সেবা অর্ডার করার এবং/অথবা ব্যবহার
          করার আগে অনুগ্রহ করে নিচের শর্তাবলী মনোযোগ দিয়ে পড়ুন।
        </p>

        <h2>পেমেন্ট তথ্য</h2>
        <ul>
          <li><strong>ব্যাংক পেমেন্ট:</strong> চেক নেটফি সফটওয়্যারের নামে প্রদান করতে হবে।</li>
          <li><strong>অনলাইন পেমেন্ট গেটওয়ে:</strong> SSL COMMERZ।</li>
          <li>
            <strong>মোবাইল ব্যাংকিং:</strong>
            <ul>
              <li>বিকাশ মার্চেন্ট: 01911038787</li>
              <li>বিকাশ / রকেট / নগদ: 01717541865  (ব্যক্তিগত)</li>
            </ul>
          </li>
        </ul>

        <h2>মূল্য নীতি</h2>
        <p>
          সকল মূল্য নীতি শুধুমাত্র নেটফি সফটওয়্যার প্রদত্ত ক্লাউড হোস্টিং সার্ভারের
          জন্য প্রযোজ্য।
        </p>

        <h2>কপিরাইট ও দায়িত্ব</h2>
        <p>
          নেটফি সফটওয়্যার কোনো ক্লায়েন্টের জন্য যে কাজ করে — স্ক্রিপ্ট, কোডিং বা
          সফটওয়্যার — তা পারস্পরিক সম্মতি না থাকলে নেটফি সফটওয়্যারের কপিরাইটভুক্ত
          এবং অনুমতি ছাড়া বাণিজ্যিকভাবে পুনরুৎপাদন বা পুনর্বিক্রয় করা যাবে না।
        </p>
        <p>
          ক্লায়েন্ট/গ্রাহকের জমা দেওয়া উপকরণ ও কন্টেন্টের কারণে কপিরাইট লঙ্ঘনের
          জন্য নেটফি সফটওয়্যার দায়ী থাকবে না। নির্ধারিত সময়সীমা পূরণে ব্যর্থতার
          কারণে কোনো ক্ষতি বা আয় হ্রাসের জন্যও নেটফি সফটওয়্যার দায়ী নয়।
        </p>

        <h2>ওয়েবসাইট ও কন্টেন্ট</h2>
        <p>
          নেটফি সফটওয়্যার এই ওয়েবসাইট ও এর কন্টেন্ট &quot;যেমন আছে&quot; ভিত্তিতে প্রদান করে।
          ক্লায়েন্ট পে-ফর-সার্ভিস চুক্তিতে প্রবেশ না করা পর্যন্ত কোনো ওয়ারেন্টি
          প্রদান করা হয় না।
        </p>
        <p>
          নেটফি সফটওয়্যার এই সাইটের সকল তথ্য সঠিক ও আপ-টু-ডেট রাখার চেষ্টা করে।
          তবে সাইট থেকে লিংক করা বাইরের ওয়েবসাইটের কন্টেন্টের জন্য নেটফি সফটওয়্যার
          দায়ী নয়।
        </p>

        <h2>ব্যাকআপ ও ডেটা ম্যানেজমেন্ট</h2>
        <p>
          এই সেবা ব্যবহার সম্পূর্ণ আপনার নিজ ঝুঁকিতে। আমাদের ব্যাকআপ সেবা
          সাপ্তাহিক/দৈনিক চলে এবং পূর্ববর্তী ব্যাকআপ ওভাররাইট করে। অপারেটিং সিস্টেম,
          সফটওয়্যার, ফাইল ও ডেটার ইনস্টলেশন, রক্ষণাবেক্ষণ, নিরাপত্তা ও ব্যাকআপের
          সম্পূর্ণ দায়িত্ব ব্যবহারকারীর।
        </p>

        <h2>লঙ্ঘন তদন্ত</h2>
        <p>
          নেটফি সফটওয়্যার এই চুক্তির যেকোনো রিপোর্টকৃত বা সন্দেহজনক লঙ্ঘন তদন্ত
          করতে এবং তার সিস্টেম, সুবিধা, গ্রাহক ও তৃতীয় পক্ষ রক্ষায় যথাযথ পদক্ষেপ
          নিতে পারে।
        </p>

        <h2>লঙ্ঘনের বিরুদ্ধে ব্যবস্থা</h2>
        <p>
          নেটফি সফটওয়্যার তার সার্ভার থেকে এই চুক্তি লঙ্ঘনকারী বা আপত্তিজনক যেকোনো
          কন্টেন্ট সীমাবদ্ধ বা অপসারণ করার অধিকার সংরক্ষণ করে।
        </p>

        <h2>ওয়ারেন্টি দাবিত্যাগ: রক্ষণাবেক্ষণ</h2>
        <p>
          নেটফি সফটওয়্যার তার সিস্টেম ও নেটওয়ার্ক রক্ষণাবেক্ষণ, মেরামত বা আপগ্রেডের
          উদ্দেশ্যে সাময়িকভাবে সেবা স্থগিত রাখার অধিকার সংরক্ষণ করে।
        </p>
      </PolicyLayout>
    );
  }

  return (
    <PolicyLayout title="Terms & Conditions">
      <p>
        NetFee Software is a Software, Website and Mobile Application
        Development service provider. The following rules were designed to
        ensure that our services remain of the utmost excellence. Please read
        carefully before ordering and/or using NetFee Software services.
      </p>

      <h2>Payment Information</h2>
      <ul>
        <li><strong>Bank Payment:</strong> Cheques should be made payable to NetFee Software.</li>
        <li><strong>Online Payment Gateway:</strong> SSL COMMERZ.</li>
        <li>
          <strong>Mobile Banking:</strong>
          <ul>
            <li>bKash Merchant: 01911038787</li>
            <li>bKash / Rocket / Nagad: 01717541865 (Personal)</li>
          </ul>
        </li>
      </ul>

      <h2>Pricing Policy</h2>
      <p>
        All Pricing Policy only for Cloud Hosting Server provided by NetFee
        Software.
      </p>

      <h2>Copyright and Responsibility</h2>
      <p>
        Any work done by NetFee Software for any client, which includes the
        scripts, coding, or software, unless mutually agreed, will be the
        copyright of NetFee Software and should not be commercially reproduced
        or resold without authorization.
      </p>
      <p>
        NetFee Software cannot be held responsible for copyright violations
        caused by materials and content submitted by the Client/Customer. NetFee
        Software will not be responsible for costs incurred or loss of earnings
        due to failure to meet arranged deadlines.
      </p>

      <h2>Website and Content</h2>
      <p>
        NetFee Software provides this website and its contents on an &quot;as
        is&quot; basis and makes no warranties until a client enters into an
        agreement on a pay-for-service basis.
      </p>

      <h2>Backups and Data Management</h2>
      <p>
        Your use of this service is at your sole risk. Our backup service runs
        once a week/daily. Each user is solely responsible for all installation,
        maintenance, security, and backup of the operating system, software,
        files, and data.
      </p>

      <h2>Investigation of Violations</h2>
      <p>
        NetFee Software may investigate any reported or suspected violation of
        this Agreement and take any action it deems appropriate to protect its
        systems, facilities, customers, and third parties.
      </p>

      <h2>Actions to Violations</h2>
      <p>
        NetFee Software reserves the right to restrict or remove from its
        servers any content that violates this Agreement or is otherwise
        objectionable or potentially infringing on any third party&apos;s
        rights.
      </p>

      <h2>Warranty Disclaimer: Maintenance</h2>
      <p>
        NetFee Software reserves the right to temporarily suspend services for
        the purposes of maintaining, repairing, or upgrading its systems and
        network.
      </p>
    </PolicyLayout>
  );
}
