import React from "react";

interface WhatsAppLinkProps {
  phone: string;
  message?: string;
  children: React.ReactNode;
}

const WhatsAppLink: React.FC<WhatsAppLinkProps> = ({
  phone,
  message = "",
  children,
}) => {
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
};

export default WhatsAppLink;
