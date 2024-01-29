const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'f2751bc5e4f6c675a49a292d0a662697',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;