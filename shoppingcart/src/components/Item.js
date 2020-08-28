import React from 'react';
import './styles/Item.css';


function Item(props) {
    function ChangeBtn(e) {
        // change text of btn
    }
        return (
            <div className="Item-Container">
                <img className="Item-Image" src={props.coverImage} alt="ItemImg" />
                <div className="Item-Title">
                    {props.title}
                </div>
                <div className="Item-Content">
                    {props.price}
                    <button className="Item-btn" onClick={ChangeBtn}>담기</button>
                </div>
            </div>
        );
    };

export default Item;
