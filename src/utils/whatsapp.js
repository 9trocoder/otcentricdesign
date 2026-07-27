// WhatsApp Order Redirection Utility for OTCentric Design Studio

export const STUDIO_WHATSAPP_NUMBER = '2348094912640'; // Official Business WhatsApp: +234 809 491 2640

export function sendWhatsAppOrder(cartItems, customerDetails = {}) {
  if (!cartItems || cartItems.length === 0) return;

  const { name = '', location = '', notes = '' } = customerDetails;
  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  let message = `Hello OTCentric Design Studio! 👋\n\n`;
  message += `I would like to place an order / inquire about the following items from The Furniture Vault:\n\n`;
  message += `🛒 *ORDER ITEMS:*\n`;

  cartItems.forEach((item, index) => {
    message += `${index + 1}. *${item.name}*\n`;
    message += `   • Quantity: ${item.quantity}\n`;
    message += `   • Unit Price: ₦${item.price.toLocaleString()}\n`;
    message += `   • Subtotal: ₦${(item.price * item.quantity).toLocaleString()}\n`;
    if (item.imageUrl) {
      message += `   • 🖼️ Product Image: ${item.imageUrl}\n`;
    }
    message += `\n`;
  });

  message += `💰 *TOTAL ESTIMATE:* ₦${totalAmount.toLocaleString()}\n\n`;

  if (name) {
    message += `👤 *Customer Name:* ${name}\n`;
  }
  if (location) {
    message += `📍 *Delivery Area:* ${location}\n`;
  }
  if (notes) {
    message += `📝 *Notes/Requests:* ${notes}\n`;
  }

  message += `\nPlease confirm availability and delivery details. Thank you!`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${STUDIO_WHATSAPP_NUMBER}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
}

export function sendSingleProductWhatsApp(product, quantity = 1) {
  if (!product) return;

  let message = `Hello OTCentric Design Studio! 👋\n\n`;
  message += `I am interested in ordering/inquiring about the following piece from The Furniture Vault:\n\n`;
  message += `🪑 *${product.name}*\n`;
  message += `• Category: ${product.category}\n`;
  message += `• Quantity: ${quantity}\n`;
  message += `• Total Price: ₦${(product.price * quantity).toLocaleString()}\n`;
  if (product.imageUrl) {
    message += `• 🖼️ Product Image: ${product.imageUrl}\n`;
  }
  message += `\nPlease confirm availability and delivery options. Thank you!`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${STUDIO_WHATSAPP_NUMBER}?text=${encodedMessage}`;
  
  window.open(whatsappUrl, '_blank');
}
