import { useState } from 'react';
import { Link } from 'react-router-dom'
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';

// import { useAuth } from '../../hooks/auth';

 import { Container, Hero, LoginWrapper, Form} from './styles';

export function SignIn() {
    //}
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');

    // const { signIn } = useAuth();

    // function handleSignIn() {
    //     signIn({ email, password });
    // }

    return (
        <Container>

            <Hero>
                <h1><span>nG.</span>Forum</h1>
                <p>Um fórum criado especialmente para os alunos do programa <a href='#'>Nova Geração</a> do <a>Instituto Caldeira</a>!</p>

                <p>Projeto em pre-alpha, confira nosso <a href="#">Github</a>!</p>
            </Hero>

            <LoginWrapper>  


                <h1>Login</h1>

                <Form>

                    <Input 
                        title={"E-mail"}
                        placeholder="seuemail@email.com"
                        type="text"
                        // onChange={e => setEmail(e.target.value)}
                        />
                    <Input 
                        title={"Senha"}
                        placeholder="sua senha"
                        type="password"
                        // onChange={e => setPassword(e.target.value)}
                    />

                    <Button 
                        title="Entrar"
                        // onClick={handleSignIn}
                    />

                </Form>

                <ButtonText 
                    className="button-text"
                    title="Criar uma conta"
                    to="/register"
                />

            </LoginWrapper>

        </Container>
    )
}