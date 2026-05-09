import PolicyLayout from "../components/PolicyLayout";

export const metadata = {
  title: "Privacy Policy — NetFee ISP Billing Software",
};

export default function PrivacyPolicyPage() {
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
