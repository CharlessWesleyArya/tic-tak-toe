import React from 'react';
import { Button, Form } from 'react-bootstrap';
const arr=['player1','player2'];
function getFormData(formData){
  return arr.reduce((acc,key)=>{
    acc[key]=formData.get(key);
    return acc;
  },{});
}

function Info({updateGame,isGameOn}) {

    function handleSubmit  (e){
        e.preventDefault();
        var formData=new FormData(e.target);
        var playersInfo=getFormData(formData)
        //TODO: i need to set the game is on.
        updateGame(true,undefined,undefined,playersInfo);
        e.target.reset();

    }
    return (
        <form onSubmit={handleSubmit}>
            <h3>Players Information</h3>
            <Form.Group>
                <Form.Label>Player 1 name:</Form.Label>
                <Form.Control name="player1"  type="text"></Form.Control>
            </Form.Group>
            <Form.Group>
                <Form.Label>Player 2 name:</Form.Label>
                <Form.Control name="player2"  type="text"></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary"  disabled={isGameOn}>
                Start the Game
            </Button>
        </form>
    );
}


export default Info;