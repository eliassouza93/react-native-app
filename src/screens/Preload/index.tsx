import React, { useEffect } from 'react'
import { Container, LoadingIcon } from './styles'
import BarberLogo from '../../assets/barber.svg'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'

export default ({navigation}:any) => {

  //  const navigation: any = useNavigation()

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token')
            if (token) {

            } else {
                navigation.navigate('SignIn')
            }
        }
        checkToken()
    }, [])

    return (
        <Container>
            <BarberLogo width='100%' height='160' />
            <LoadingIcon size='large' color='white' />
        </Container>
    )
}