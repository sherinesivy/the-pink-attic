import '../styles/About.css';

function ShippingPolicy() {
  return (
    <div className="about-page">
      <h1>Shipping Policy 🚚</h1>
      <div className="about-content">
        <h2>Processing Time</h2>
        <p>All orders are processed within 2-3 business days. Orders are not processed on weekends or public holidays.</p>
        <h2>Delivery Time</h2>
        <p>Standard delivery takes 5-7 business days across India. Express delivery (2-3 business days) is available at checkout for an additional fee.</p>
        <h2>Shipping Charges</h2>
        <p>We offer free standard shipping on all orders above ₹2000. Orders below ₹2000 attract a flat shipping fee of ₹99.</p>
        <h2>Order Tracking</h2>
        <p>Once your order is dispatched you will receive a tracking number via email. You can use this to track your order at any time.</p>
      </div>
    </div>
  );
}

export default ShippingPolicy;
