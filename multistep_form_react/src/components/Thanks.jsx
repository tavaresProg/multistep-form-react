import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill
} from 'react-icons/bs';

import './Thanks.css'

const emojiData = {
    unsatisfied: < BsFillEmojiFrownFill />,
    neutral: <BsFillEmojiNeutralFill />,
    satisfied: <BsFillEmojiSmileFill />,
    very_satisfied: <BsFillEmojiHeartEyesFill />
}

const Thanks = ({ data }) => {
    return (
        <div className='thanks-container'>
            <h2>Falta pouco!</h2>
            <p>A sua opinião é muito importante, em breve você receberá um cumpom de 10% de desconto para sua próxima compra</p>
            <p>Para concluir a avaliação clique no botão de Enviar abaixo.</p>
            <h3>Confira sua avaliação, {data.name}</h3>
            <p className="review-data">
                <span>Satisfação com o produto:</span>
                {emojiData[data.review]}
            </p>
            <p className="review-data">
                <span>Comentário: {data.comment}</span>
            </p>
        </div>
    )
}

export default Thanks