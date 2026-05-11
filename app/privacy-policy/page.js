"use client";

import { useTranslation } from "react-i18next";
import PolicyLayout from "../components/PolicyLayout";

export default function PrivacyPolicyPage() {
  const { i18n } = useTranslation();
  const isBn = i18n.language === "bn";

  if (isBn) {
    return (
      <PolicyLayout title="প্রাইভেসি পলিসি" lastUpdated="৩১ অক্টোবর, ২০২২">
        <p>
          নেটফি সফটওয়্যার অ্যাপ্লিকেশন ব্যবহারের আগে অনুগ্রহ করে এই প্রাইভেসি পলিসিটি মনোযোগ দিয়ে পড়ুন এবং বুঝে নিন।
          কোনো প্রশ্ন থাকলে{" "}
          <a href="mailto:netfeebd@gmail.com">netfeebd@gmail.com</a>-এ যোগাযোগ করুন।
        </p>

        <h2>ব্যক্তিগত তথ্য সংগ্রহ ও ব্যবহার</h2>
        <p>
          এই প্রাইভেসি পলিসিতে বলা হয়েছে কীভাবে নেটফি সফটওয়্যার আপনার প্রদত্ত তথ্য সংগ্রহ,
          ব্যবহার, প্রকাশ, সংরক্ষণ ও সুরক্ষা করে। নেটফি সফটওয়্যার আপনার ব্যক্তিগত তথ্য
          সুরক্ষিত রাখতে প্রতিশ্রুতিবদ্ধ এবং আপনার সম্মতি ছাড়া তৃতীয় পক্ষের সাথে কোনো
          তথ্য শেয়ার করে না।
        </p>

        <h3>আমরা যে ব্যক্তিগত তথ্য সংগ্রহ করি</h3>
        <ul>
          <li>
            অ্যাকাউন্ট নিবন্ধনের সময় আপনার নাম, প্রতিষ্ঠানের নাম, ঠিকানা, ইমেইল,
            ফোন নম্বর, জন্ম তারিখ, জাতীয় পরিচয়পত্র নম্বর এবং পাসপোর্ট সাইজ ছবি
            প্রদান করতে হতে পারে।
          </li>
          <li>
            আপনাকে সঠিকভাবে শনাক্ত করতে এবং সেবা প্রদান করতে আমরা আপনার অবস্থান
            তথ্য ও ডিভাইস পরিচিতি সংগ্রহ করতে পারি।
          </li>
          <li>
            লগইনের সময় আমরা একটি অথেনটিকেশন নম্বর আপনার ডিভাইসে সংরক্ষণ করি।
            লগআউটের সময় লগইনকালীন সব তথ্য মুছে ফেলা হয়।
          </li>
          <li>
            বিল পেমেন্টের সময় আমাদের পেমেন্ট গেটওয়ে আপনার ডেবিট/ক্রেডিট কার্ড বা
            মোবাইল ব্যাংকিং তথ্য প্রয়োজন করতে পারে।
          </li>
          <li>
            সাপোর্ট টিমের সাথে যোগাযোগের সময় আপনি টেক্সট, ছবি, ডকুমেন্ট বা
            মিডিয়া ফাইল শেয়ার করতে পারেন। আপনার সম্মতি ছাড়া আমরা স্বয়ংক্রিয়ভাবে
            এসব ফাইল সংগ্রহ করি না।
          </li>
        </ul>

        <h2>আমরা কীভাবে আপনার তথ্য ব্যবহার করি</h2>
        <ul>
          <li>
            আপনার পরিচয় যাচাই, বিল পেমেন্ট যাচাই এবং আপনার ক্রয় করা সেবা প্রদানের জন্য।
          </li>
          <li>
            সেবা আপডেট, পরিবর্তন, ক্রয়, বিলিং, বকেয়া ও পেমেন্ট সম্পর্কে নোটিফিকেশন,
            ইমেইল, বার্তা বা কলের মাধ্যমে আপনাকে জানাতে।
          </li>
        </ul>

        <h2>অ-ব্যক্তিগত তথ্য সংগ্রহ ও ব্যবহার</h2>
        <ul>
          <li>বিভিন্ন সময়ে আপনার শেয়ার করা টেক্সট বার্তা, ডকুমেন্ট ও মিডিয়া ফাইল।</li>
          <li>
            সাইন-ইন কার্যক্রমের লগ রাখতে এবং সাইন-ইন সুরক্ষিত করতে আপনার অবস্থান তথ্য।
          </li>
        </ul>

        <h2>আপনার ব্যক্তিগত তথ্য নিয়ন্ত্রণ</h2>
        <ul>
          <li>
            ফর্ম পূরণের সময় আপনি নির্ধারণ করতে পারবেন কোন তথ্য আমাদের সেবায় ব্যবহার
            করতে চান বা চান না।
          </li>
          <li>
            আগে সম্মতি দিয়ে থাকলেও যেকোনো সময় লিখিতভাবে আমাদের জানিয়ে সিদ্ধান্ত
            পরিবর্তন করতে পারবেন।
          </li>
        </ul>

        <h2>আপনার তথ্যের সুরক্ষা</h2>
        <p>
          নেটফি সফটওয়্যার আপনার তথ্যের নিরাপত্তা নিশ্চিত করতে প্রতিশ্রুতিবদ্ধ।
          অননুমোদিত প্রবেশ বা প্রকাশ রোধ করতে আমরা সব মানসম্পন্ন নিরাপত্তা
          প্যারামিটার মেনে আমাদের সার্ভারে তথ্য সংরক্ষণ করি।
        </p>

        <h2>শিশুদের গোপনীয়তা</h2>
        <p>
          আমাদের সেবা 13 বছরের কম বয়সীদের জন্য নয়। আমরা জেনেশুনে 13 বছরের কম
          বয়সীদের কাছ থেকে ব্যক্তিগত তথ্য সংগ্রহ করি না। আপনার সন্তান যদি আমাদের
          কাছে ব্যক্তিগত তথ্য প্রদান করে থাকে, অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন।
        </p>

        <h2>আপনার গোপনীয়তার অধিকার</h2>
        <p>
          আপনার সম্মতি বা আইনি বাধ্যবাধকতা ছাড়া আমরা আপনার কোনো ব্যক্তিগত তথ্য
          তৃতীয় পক্ষের সাথে শেয়ার, বিক্রি বা বিতরণ করি না। আপনি যেকোনো সময়
          আপনার তথ্য সংশোধন, মুছে ফেলা বা স্থায়ীভাবে অপসারণের অনুরোধ করতে পারবেন।
        </p>

        <h2>গোপনীয়তা সংক্রান্ত জিজ্ঞাসা</h2>
        <p>
          এই প্রাইভেসি পলিসি সম্পর্কে কোনো পরামর্শ বা প্রশ্ন থাকলে{" "}
          <a href="mailto:netfeebd@gmail.com">netfeebd@gmail.com</a>-এ যোগাযোগ করুন।
          এই পলিসি 31 অক্টোবর, 2022 থেকে কার্যকর।
        </p>
      </PolicyLayout>
    );
  }

  return (
    <PolicyLayout title="Privacy Policy" lastUpdated="October 31, 2022">
      <p>
        Please read carefully and familiarize yourself with this Privacy Policy
        to use NetFee Software application and contact us at{" "}
        <a href="mailto:netfeebd@gmail.com">netfeebd@gmail.com</a> if you have
        any questions.
      </p>

      <h2>Collection and Use of Personal Information</h2>
      <p>
        This privacy policy sets out how NetFee Software collects, uses,
        discloses, stores, and protects any information that you provide when
        you subscribe to use our service(s) and application(s). NetFee Software
        is committed to ensuring that your private data is protected and we do
        not share any of your information with third parties without your
        consent.
      </p>

      <h3>What personal information we collect</h3>
      <ul>
        <li>
          When you register an account, you may provide your name, organization
          name, address, email address, phone number, date of birth, National
          Identity Number, and passport size photograph.
        </li>
        <li>
          We may collect your location information and device identity to
          identify you and provide our services.
        </li>
        <li>
          When you log in, we provide an authentication number saved to your
          device for the session. During log out, we erase all data provided
          during login.
        </li>
        <li>
          During bill payment, our payment gateways require your debit/credit
          card or mobile banking information.
        </li>
        <li>
          When you communicate with our support team, you may share text,
          photos, documents, or media files. We do not automatically collect
          such files without your consent.
        </li>
      </ul>

      <h2>How We Use Your Personal Information</h2>
      <ul>
        <li>
          To verify your identity, verify bill payments, and provide specific
          services you purchased.
        </li>
        <li>
          To notify you about service updates, changes, purchases, billings,
          dues, and payments through notifications, emails, messages, or calls.
        </li>
      </ul>

      <h2>Collection and Use of Non-Personal Information</h2>
      <ul>
        <li>
          Text messages, documents, and media files shared with us at different
          times.
        </li>
        <li>
          Your location information to keep logs of signing activities and
          secure your sign-in.
        </li>
      </ul>

      <h2>Controlling Your Personal Information</h2>
      <ul>
        <li>
          When filling in forms, look for fields you want or do not want used
          by our services.
        </li>
        <li>
          If you previously agreed to us using your personal information, you
          may change your mind at any time by writing to us.
        </li>
      </ul>

      <h2>Protection of Your Information</h2>
      <p>
        NetFee Software is committed to ensuring the security of your data. To
        prevent unauthorized access or disclosure, we store your data on our
        server, which complies with all standard security parameters.
      </p>

      <h2>Children&apos;s Privacy</h2>
      <p>
        Our Service does not address anyone under the age of 13. We do not
        knowingly collect personally identifiable information from anyone under
        13. If you are a parent or guardian and your child has provided us with
        Personal Data, please contact us.
      </p>

      <h2>Your Privacy Rights</h2>
      <p>
        We do not share, sell, disclose, distribute, or lease any of your
        personal information to third parties unless we have your consent or are
        required by law. You may request at any time to correct, erase, or
        permanently remove all of your information.
      </p>

      <h2>Privacy Queries</h2>
      <p>
        If you have any suggestions or queries about this privacy policy, please
        contact us at{" "}
        <a href="mailto:netfeebd@gmail.com">netfeebd@gmail.com</a>. This policy
        is effective from October 31, 2022.
      </p>
    </PolicyLayout>
  );
}
