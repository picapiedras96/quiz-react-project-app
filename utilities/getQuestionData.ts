const getToken = async () => {
    const tokenUrl = "https://opentdb.com/api_token.php?command=request"
    try {
        const response = await fetch(tokenUrl);
        const data = await response.json();
        return data.token;
    } catch (error) {
        console.error("Error getting token:", error);
        return null;
    }
}

const resetToken = async (token: string) => {
    const resetTokenUrl = "https://opentdb.com/api_token.php?command=reset&token=" + token;
    try {
        const response = await fetch(resetTokenUrl);
        const data = await response.json();
        return data.token;
    } catch (error) {
        console.error("Error resetting token:", error);
        return null;
    }
}

const getQuestionData = async () => {
    const baseUrl = "https://opentdb.com/api.php?amount=5&difficulty=medium&type=multiple&token=";
    const token = await getToken();
    if (!token) {
        console.error("No token found");
        return null;
    }
    console.log("Token:", token);

    try {
        const response = await fetch(baseUrl + token);
        const data = await response.json();
        console.log("Data:", data);

        if (data.response_code === 4) {
            const refreshedToken = await resetToken(token);

            if (refreshedToken) {
                const response = await fetch(baseUrl + refreshedToken);
                const data = await response.json();
                console.log("Data:", data);
                return data.results;
            }
        }
        return data.results;
    } catch (error) {
        console.error("Error getting question data:", error);
        return null;
    }
}

export default getQuestionData;