/*
function Home(){
    return <h1>Tudo posso naquele que me fortalece!</h1>
}

export default Home;

*/
import Image from 'next/image';

export default function Home() {
    return (
        <div>
            <h1>Tudo posso naquele que me fortalece!</h1>
            
            {/* Adicionando a imagem */}
            <Image 
                src="/minha-foto.jpeg" 
                alt="Descrição da imagem" 
                width={300} 
                height={200} 
            />
        </div>
    );
}
