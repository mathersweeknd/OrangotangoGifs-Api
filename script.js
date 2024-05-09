/* export default API_KEY = 'TO1QLKjHR8CXFcTovKf1Rgsn8fdvKyxg'
 */
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const gifContainer = document.getElementById('gif-container');
  
    generateBtn.addEventListener('click', async () => {
      const apiKey = 'TO1QLKjHR8CXFcTovKf1Rgsn8fdvKyxg';
      const apiUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}`;
      const randomIndex = Math.floor(Math.random() * 50);
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        const gifUrl = data.data[randomIndex].images.downsized.url;  
        gifContainer.innerHTML = `<img src="${gifUrl}" alt="Random GIF">`;
        } catch (error) {
        console.error('Error fetching GIF:', error);
      }
    });
  });