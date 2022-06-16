import { useState } from 'react'
function CommentsPage() {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    const fetchComments = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)
    }

    const submitComment = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
        fetchComments()
    }

    const deleteComment = async commentId => {
        const response = await fetch(`/api/comments/${commentId}`, {
            method: 'DELETE'
        })
        const data = await response.json()
        console.log(data)
        fetchComments()
    }

    return (
        <>
            <button className='w-full bg-slate-700 rounded-full p-3 text-white mt-10' onClick={fetchComments}>Load comments</button>

            <div className='mt-10 p-5 border-2'>
                <input className='p-2 border-2 border-blue-200'
                    type='text'
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                />
                <button className='p-2 ml-2 bg-blue-900 text-white rounded-lg' onClick={submitComment}>Submit comment</button>
            </div>

            <hr />

            <div>
                {comments.map(comment => {
                    return (
                        <>
                            <div style={{ 'marginTop': '10px' }} key={comment.id}>
                                {comment.id}. {comment.text}
                                <button style={{ 'marginLeft': '10px' }} onClick={deleteComment}>Delete</button>

                            </div>
                            <hr />
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default CommentsPage