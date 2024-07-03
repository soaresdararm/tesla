import React, { useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Link,
  Error,
} from "./styles";

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    let tempErrors: { [key: string]: string } = {};
    if (!email) tempErrors.email = "Email is required";
    if (!password) tempErrors.password = "Password is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log({ email, password });
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <Error>{errors.email}</Error>}
          </FormGroup>
          <FormGroup>
            <Label>Senha</Label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <Error>{errors.password}</Error>}
          </FormGroup>
          <Button type="submit">Login</Button>
        </Form>
        <Link href="/user">Register</Link>
      </ModalContent>
    </ModalOverlay>
  );
};

export default LoginModal;
