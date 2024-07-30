import React, { useEffect, useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  Form,
  FormGroup,
  Label,
  Button,
  Link,
  Error,
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import {
  loginRequest,
  loginReset,
} from "../../core/presentation/redux/actions/loginActions";
import { RootState } from "../../core/presentation/redux/store";
import FlashMessage from "../Alert";
import { Input } from "../Input";
import { useNavigate } from "react-router-dom";

interface LoginModalProps {
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { user, error, load } = useSelector((state: RootState) => state?.auth);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(
      loginRequest({
        email: email,
        password: password,
      })
    );
  };

  useEffect(() => {
    if (user) onClose();
  }, [user]);

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Form onSubmit={handleSubmit}>
          <Label>Login</Label>
          <FormGroup>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="E-mail"
              placeholder="Digite seu e-mail"
            />
            {errors.email && <Error>{errors.email}</Error>}
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Senha"
              placeholder="Digite sua senha"
            />
            {errors.password && <Error>{errors.password}</Error>}
          </FormGroup>
          <Button
            type="submit"
            disabled={email.length === 0 || password.length === 0}
          >
            Continuar
          </Button>
        </Form>
        <Link href="/user">Criar uma conta</Link>
      </ModalContent>

      {error !== "" && (
        <FlashMessage message={error} onClose={() => dispatch(loginReset())} />
      )}
    </ModalOverlay>
  );
};

export default LoginModal;
