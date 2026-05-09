import PolicyLayout from "../components/PolicyLayout";

export const metadata = {
  title: "Return & Refund Policy — NetFee ISP Billing Software",
};

export default function ReturnRefundPolicyPage() {
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
