import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
    return(
        <div className={styles.comment}>
            <img src="https://avatars.githubusercontent.com/u/92993184?v=4"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>João Phillipe Fernandes</strong>
                            <time dateTime='2024-01-22 12:37:00' >Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar Comentários'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    <p>Muito bom, parabéns!!!!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}

