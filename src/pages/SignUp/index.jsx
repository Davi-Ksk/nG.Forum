import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
// import { Logo } from '../../components/Logo';

// import { useAuth } from '../../hooks/auth';

 import { Container, Form, LoginWrapper} from './styles';

export function SignUp() {
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const { signIn } = useAuth();

    // function handleSignIn() {
    //     signIn({ email, password });
    // }

    return (
        <Container>
            {/* <Logo id="logo"/> */}

        <LoginWrapper>  


            <h1>Crie sua conta</h1>

            <Form>

                
                <Input 
                    title="Seu nome"
                    placeholder="Exemplo: Maria da Silva"
                    type="password"
                    // onChange={e => setPassword(e.target.value)}
                />

                <Input 
                    title="E-mail"
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text"
                    // onChange={e => setEmail(e.target.value)}
                    />
                <Input 
                    title="Senha"
                    placeholder="No mínimo 8 caracteres"
                    type="password"
                    // onChange={e => setPassword(e.target.value)}
                />

                <Button 
                    title="Criar conta"
                    // onClick={handleSignIn}
                />

            </Form>

            <ButtonText 
                  title="Já tenho uma conta"
                  to="/"
            />

        </LoginWrapper>

        </Container>
    )
}