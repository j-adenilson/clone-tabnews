/*
function Home(){
    return <h1>Tudo posso naquele que me fortalece!

        <img src="WhatsApp Image 2026-09-26 at 22.39.19.jpeg" alt="Foto tirada em nosso primeiro camping"/>

    </h1>

    
}

export default Home;
*/

function Home(){
    // Usamos crases ( ` ) para o JavaScript entender que isso é um bloco de HTML
    return `
        <h1>Tudo posso naquele que me fortalece!</h1>
        <img src="./imagem.jpeg" alt="Foto tirada em nosso primeiro camping"/>
    `;
}

export default Home;