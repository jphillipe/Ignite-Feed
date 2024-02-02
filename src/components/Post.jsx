import { format, formatDistanceToNow} from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'
import { useState } from 'react';



export function Post({author, publishedAt, content}){
    const [comments, setComments] = useState( [
        "Oi"
    ])

    const [newCommentText, setNewCommentText] = useState('')

    const publishedDateFormatted = format(publishedAt,"d 'de' LLLL 'às' HH:mm'h'",{
        locale: ptBr,
    })

    const publishedDateRelative = formatDistanceToNow(publishedAt, {
        locale: ptBr,
        addSuffix: true

    })

    function handleCreateNewSubmit(e){
        e.preventDefault();
        setComments([...comments, newCommentText]);
        setNewCommentText('');

      
    }

    function handleNewCommentChange(e) {
        event.target.setCustomValidity('')
        setNewCommentText(e.target.value );
        
    }

    function deleteComment(commentToDelete){
        const newCommentList = comments.filter(comment=>{
            return comment != commentToDelete;
        })
        setComments(newCommentList);
    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity('Campo Obrigatório')
    }

    
    return(
    <article className={styles.post}>
        <header>
            <div className={styles.author}>
                <Avatar  
                src={author.avatarUrl}/>
                <div className={styles.authorInfo}>
                    <strong>{author.name}</strong>
                    <span>{author.role}</span>
                </div>
            </div>
            <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()} >
                {publishedDateRelative}
            </time>
        </header>

        <div className={styles.content}>
            {content.map(line =>{
                if (line.type === 'paragraph'){
                    return <p key={line.content}>{line.content}</p>
                }   else if (line.type ==='link'){
                    return <p key={line.content}><a href="#">{line.content}</a></p>
                }
            })}
        </div>

        <form onSubmit = {handleCreateNewSubmit} className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>
            <textarea
                name='comment'
                value={newCommentText}
                placeholder='Deixe seu comentário'  
                onChange={handleNewCommentChange} 
                onInvalid={handleNewCommentInvalid}
                required
            />
            <footer>
                <button type='submit' disabled= {newCommentText.length===0}>Publicar</button>
            </footer>
        </form>

        <div className={styles.commentList}>
           {comments.map((comment)=>{
                
               return <Comment key={comment} content= {comment} onDeleteComment= {deleteComment}/>
           })}
        </div>
    </article>
    )
}