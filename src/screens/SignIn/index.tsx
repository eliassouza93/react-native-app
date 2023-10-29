import { useNavigation } from '@react-navigation/native'
import {
    Container,
    InputArea,
    CustmButton,
    CustomButtonText,
    SignInMessageButton,
    SignMessageButtonText,
    SignMessageButtonBold
} from './styles'
import BarberLogo from '../../assets/barber.svg'
import SignInput from '../../components/SignInput'
import EmailIcon from '../../assets/email.svg'
import LockIcon from '../../assets/lock.svg'
import { useState } from 'react'
import Api from '../../Api'



export default () => {
    const [email, setEmail] = useState<string | any>();
    const [senha, setSenha] = useState<string | any>();

    const navigation: any = useNavigation()

    const Login = async () => {
        if (email != '' && senha != '') {

            let json: any = await Api.signIn(email, senha)
            console.log(json)
            if (json.token) {
                alert('deu certo')
            } else {
                alert('email ou senha errados!')
            }

        } else {
            alert('Preencha os campos!')
        }
    }
    const Cadastrar = () => {
        navigation.reset({
            routes: [{ name: 'SignUp' }]
        })

    }

    return (
        <Container>
            <BarberLogo width='100%' height={160} />
            <InputArea>

                <SignInput
                    IconSvg={EmailIcon}
                    placeholder='Digite seu Email'
                    value={email}
                    onChangeText={(t: string | number) => setEmail(t)}
                />

                <SignInput
                    IconSvg={LockIcon}
                    placeholder='Digite sua senha'
                    value={senha}
                    onChangeText={(t: string | number) => setSenha(t)}
                    password={true}
                />

                <CustmButton onPress={Login}>
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustmButton>
            </InputArea>

            <SignInMessageButton onPress={Cadastrar}>
                <SignMessageButtonText>
                    Ainda não possui uma conta?
                </SignMessageButtonText>
                <SignMessageButtonBold>Cadastre-se</SignMessageButtonBold>
            </SignInMessageButton>
        </Container>
    )
}

function alert(arg0: string) {
    throw new Error('Function not implemented.')
}
