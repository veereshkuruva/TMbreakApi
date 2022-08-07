import React from 'react'

const CharItem = ({ ele }) => {
    //  getting each element
    console.log(ele)
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={ele.img} alt='' />
                </div>
                <div className='card-back'>
                    <h1>{ele.name}</h1>
                    <ul>
                        <li>
                            <strong>ActorName :</strong> {ele.portrayed}
                        </li>
                        <li>
                            <strong>NickName :</strong> {ele.nickname}
                        </li>
                        <li>
                            <strong>Birthday :</strong> {ele.birthday}
                        </li>
                        <li>
                            <strong>Status :</strong> {ele.status}
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default CharItem