"use client";

import { useTranslation } from "react-i18next";
import PolicyLayout from "../components/PolicyLayout";

export default function ReturnRefundPolicyPage() {
  const { i18n } = useTranslation();
  const isBn = i18n.language === "bn";

  if (isBn) {
    return (
      <PolicyLayout title="রিটার্ন ও রিফান্ড পলিসি">
        <p>
          <strong>নেটফি আইএসপি বিলিং সফটওয়্যার</strong> বেছে নেওয়ার জন্য আপনাকে
          ধন্যবাদ। আপনার বিশ্বাস আমাদের কাছে অত্যন্ত মূল্যবান। আপনি যদি আপনার
          ক্রয়ে সম্পূর্ণ সন্তুষ্ট না হন, আমরা আপনাকে সহায়তা করতে প্রস্তুত।
        </p>

        <h2>সেবা রিফান্ড</h2>
        <ul>
          <li>
            সফটওয়্যার সাবস্ক্রিপশন ফি রিফান্ডের অনুরোধ কেবলমাত্র ক্রয়ের{" "}
            <strong>৭ দিনের মধ্যে</strong> বিবেচনা করা হবে এবং শর্ত হলো কোনো
            ব্যবহার (যেমন: ব্যবহারকারী অ্যাকাউন্ট তৈরি, ডেটা ইনপুট) হয়নি।
          </li>
          <li>
            ইতিমধ্যে প্রদত্ত সেবার জন্য — যেমন টেকনিক্যাল সাপোর্ট বা ডেটা
            মাইগ্রেশন — কোনো রিফান্ড দেওয়া হবে না।
          </li>
          <li>
            কাস্টম ফিচার বা ইন্টিগ্রেশনের রিফান্ড ডেভেলপমেন্টের পর্যায়ের উপর
            নির্ভর করবে এবং আমাদের বিবেচনাধীন থাকবে।
          </li>
        </ul>

        <h2>অ-ফেরতযোগ্য আইটেম</h2>
        <ul>
          <li>অ্যাক্টিভেশনের পরে ডাউনলোডযোগ্য সফটওয়্যারের লাইসেন্স।</li>
          <li>
            ডোমেইন রেজিস্ট্রেশন, হোস্টিং বা ক্লাউড স্টোরেজ সংক্রান্ত সেবা
            একবার প্রভিশন হয়ে গেলে।
          </li>
          <li>সম্পূর্ণ পরিশোধিত বার্ষিক সাবস্ক্রিপশন প্ল্যান।</li>
        </ul>

        <h2>রিটার্ন প্রক্রিয়া</h2>
        <p>
          রিফান্ড শুরু করতে নিচের তথ্যসহ{" "}
          <a href="mailto:netfeebd@gmail.com">netfeebd@gmail.com</a>-এ আমাদের
          সাপোর্ট টিমের সাথে যোগাযোগ করুন:
        </p>
        <ul>
          <li>ক্রয়ের প্রমাণ (অর্ডার আইডি, রসিদ ইত্যাদি)।</li>
          <li>রিফান্ডের কারণ।</li>
        </ul>

        <h2>প্রক্রিয়াকরণের সময়</h2>
        <p>
          রিফান্ড অনুরোধ সাধারণত <strong>৩–৫ কার্যদিবসের</strong> মধ্যে পর্যালোচনা
          করা হয়। অনুমোদিত হলে রিফান্ড আপনার মূল পেমেন্ট পদ্ধতিতে প্রক্রিয়া করা
          হবে। আপনার ব্যাংক বা পেমেন্ট প্রদানকারীর পোস্ট করতে অতিরিক্ত সময় লাগতে
          পারে।
        </p>

        <h2>প্রযুক্তিগত সমস্যা</h2>
        <p>
          সফটওয়্যারে কোনো প্রযুক্তিগত সমস্যা হলে অবিলম্বে আমাদের সাপোর্ট টিমের
          সাথে যোগাযোগ করুন। আমরা দ্রুত সমাধান করতে প্রতিশ্রুতিবদ্ধ।
        </p>

        <h2>যোগাযোগ করুন</h2>
        <ul>
          <li>
            ইমেইল:{" "}
            <a href="mailto:netfeebd@gmail.com">netfeebd@gmail.com</a>
          </li>
          <li>
            ফোন:{" "}
            <a href="tel:01896192222">01896192222</a>
          </li>
        </ul>
      </PolicyLayout>
    );
  }

  return (
    <PolicyLayout title="Return & Refund Policy">
      <p>
        Thank you for choosing{" "}
        <strong>NetFee ISP Billing Software</strong>. Your trust in our service
        means a lot to us. If you are not completely satisfied with your
        purchase, we are here to assist you.
      </p>

      <h2>Service Refunds</h2>
      <ul>
        <li>
          Refund requests for software subscription fees will be considered only
          if submitted within <strong>7 days</strong> of purchase and if no
          usage (e.g., user account creation, data input) has occurred.
        </li>
        <li>
          No refunds will be provided for services that have already been
          rendered, such as technical support or data migration.
        </li>
        <li>
          Refunds for custom features or integrations will depend on the stage
          of development and are subject to our discretion.
        </li>
      </ul>

      <h2>Non-Refundable Items</h2>
      <ul>
        <li>Licenses for downloadable software after activation.</li>
        <li>
          Services related to domain registration, hosting, or cloud storage
          once provisioned.
        </li>
        <li>Annual subscription plans paid in full.</li>
      </ul>

      <h2>Return Process</h2>
      <p>
        To initiate a refund, please contact our support team at{" "}
        <a href="mailto:netfeebd@gmail.com">netfeebd@gmail.com</a> with the
        following details:
      </p>
      <ul>
        <li>Proof of purchase (order ID, receipt, etc.).</li>
        <li>Reason for the refund request.</li>
      </ul>

      <h2>Processing Time</h2>
      <p>
        Refund requests are typically reviewed within{" "}
        <strong>3–5 business days</strong>. If approved, the refund will be
        processed to your original payment method.
      </p>

      <h2>Technical Issues</h2>
      <p>
        If you experience any technical issues with the software, please reach
        out to our support team immediately. We are committed to resolving such
        matters promptly.
      </p>

      <h2>Contact Us</h2>
      <ul>
        <li>
          Email: <a href="mailto:netfeebd@gmail.com">netfeebd@gmail.com</a>
        </li>
        <li>
          Phone: <a href="tel:01896192222">01896192222</a>
        </li>
      </ul>
    </PolicyLayout>
  );
}
