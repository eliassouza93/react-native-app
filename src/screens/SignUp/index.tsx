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
import PersonIcon from '../../assets/person.svg'
import LockIcon from '../../assets/lock.svg'
import { useState } from 'react'
import Api from '../../Api'



export default () => {
    const [email, setEmail] = useState<string | any>();
    const [senha, setSenha] = useState<string | any>();
    const [name, setNeme] = useState<string | any>();

    const navigation: any = useNavigation()

    const Cadastrar = async () => {
        if (name != '' && email != '' && senha != '') {
            let res = await Api.signUp(name, email, senha)
            console.log(res)

            if (res.token) {
                alert('deu certo')
            }
            else {
                alert('Erro:' + res.error)
            }
        } else {
            alert('preencha os campos!')
        }

    }


    const Logar = () => {
        navigation.reset({
            routes: [{ name: 'SignIn' }]
        })
    }

    return (
        <Container>
            <BarberLogo width='100%' height={160} />
            <InputArea>

                <SignInput
                    IconSvg={PersonIcon}
                    placeholder='Digite seu Nome'
                    value={name}
                    onChangeText={(t: string | number) => setNeme(t)}
                />

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

                <CustmButton onPress={Cadastrar}>
                    <CustomButtonText>Cadastrar</CustomButtonText>
                </CustmButton>
            </InputArea>

            <SignInMessageButton onPress={Logar}>
                <SignMessageButtonText>
                    Já possui uma conta?
                </SignMessageButtonText>
                <SignMessageButtonBold>Faça Login</SignMessageButtonBold>
            </SignInMessageButton>
        </Container>
    )
}

function alert(arg0: string) {
    throw new Error('Function not implemented.')
}
