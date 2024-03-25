
export const fetchUserGithub = async () => {
    try {
        const response = await fetch(`https://api.github.com/users/wallace2001`);
        const userData = await response.json();
        return userData;
      } catch (error) {
        console.error('Erro ao buscar informações do usuário do GitHub:', error);
        throw error;
      }
};