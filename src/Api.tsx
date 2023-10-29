const BASE_API = 'https://api.b7web.com.br/devbarber/api';

export default {
    checkToken: async (token: string) => {
        const req = await fetch(`${BASE_API}/auth/refresh`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ token }),
        });
        const json = await req.json();
        return json;
    },
    signIn: async (email: string, senha: string) => {
        try {
            const req = await fetch(`${BASE_API}/auth/login`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, senha }),
            });

            if (!req.ok) {
                throw new Error(`Erro na solicitação: ${req.status}`);
            }

            const json = await req.json();
            return json;
        } catch (error) {
            console.error('Erro na solicitação:', error);
            throw error;
        }
    },
    signUp: async (name: string, email: string, senha: string) => {
        try {
            const req = await fetch(`${BASE_API}/user`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, senha, name }),
            });

            if (!req.ok) {
                throw new Error(`Erro na solicitação: ${req.status}`);
            }

            const json = await req.json();
            return json;
        } catch (error) {
            console.error('Erro na solicitação:', error);
            throw error;
        }
    },
};
