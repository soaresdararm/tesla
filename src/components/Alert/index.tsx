import React, { useEffect, useState } from "react";
import { FlashMessageContainer } from "./styles";

interface FlashMessageProps {
  message: string;
  duration?: number;
  onClose: () => void;
  success?: boolean;
}

const FlashMessage: React.FC<FlashMessageProps> = ({
  message,
  duration = 3000,
  onClose,
  success = false,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <FlashMessageContainer fadeOut={!visible} success={success}>
      {message}
    </FlashMessageContainer>
  );
};

export default FlashMessage;
