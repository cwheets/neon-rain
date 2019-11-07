import React, { Component } from "react";
import "./style.css";
import enemies from "../../enemy.json"
import DeckBrain from "../../components/deck-managment"
class BattlePage extends Component {

    state = {
        userHealth: 100,
        userArmor: 0,
        enemyHealth: enemies[0].health,
        enemyArmor: 0,
        winCount: 0,
        playedCards: []
      };
    
    
    
      cardChoice = (id) => {

        switch (id) {
          case 1:
            this.userAttack(5);
            return;
    
          case 2:
            this.armor(3);
            return;
        }
      };
    
    winRound = () => {
    let newWinCount=(this.state.winCount+1)
    this.setState=({
      winCount:newWinCount
    })
    
    
    
    }
    
    
    
    
      userAttack = (damage) => {
        let newArmor;
        let newHealth;
        let gameWon = false;

        if (this.state.enemyArmor >= damage) {
          let tempArmor = this.state.enemyArmor;
          newArmor = tempArmor - damage;
        } else {
          let newDamage = damage - this.state.enemyArmor;
          let tempHealth = this.state.enemyHealth;
          newHealth = tempHealth - newDamage;
          if(newHealth<=0) {
            gameWon = true;
          }
    
        }
        return {
          newArmor,
          newHealth,
          gameWon
        }

      };
    
      armor = armor => {
        let newArmor = this.state.userArmor + armor;
        return newArmor;
      };
    
    
    
     
    
    setEnemyValues = enemies => {
      this.setState({
        enemyHealth: enemies[this.state.winCount].health,
        enemyArmor: enemies[this.state.winCount].armor
      })
    }
    
    
    handlePlayedCards = (playedCards) => {
        let tempPlayed = playedCards
     
        // let self = this

    
        //   setTimeout(()=>{
      //       self.cardChoice(tempPlayed[0].id)

      // }, 20)
      //   setTimeout(function(){
      //       self.cardChoice(tempPlayed[1].id)

      // },10)

      let damage = 0;
      let armor = this.state.userArmor;

      playedCards.forEach((card) => {
          switch (card.id) {
            case 1:
            damage += card.damage;
           
            break
      
            case 2:
              armor += card.armor
              return;
          }
      });
      const {newArmor, newHealth, gameWon} = this.userAttack(damage)
      this.setState({
        enemyArmor: newArmor,
        enemyHealth: newHealth,
        userArmor: armor

      })


    //   this.cardChoice(tempPlayed[1].id)

      
      

    }
    
    
      firstEnemyAction = id => {
        let possibleEnemyActions=[]
        let newEnemyAttack=0
        let newEnemyArmor=0
        for (let k = 0; k < enemies.length; k++) {
           if(id===this.state.winCount){
             newEnemyAttack=enemies[k].attack 
             newEnemyArmor=enemies[k].armor 
            possibleEnemyActions=enemies[k].actions
           }
          
        }
    
        let randomAction;
        randomAction = Math.floor(Math.random() * possibleEnemyActions.length);
    
        switch (randomAction) {
          case 1:
          
    
            if (this.state.userArmor >= newEnemyAttack) {
              let newArmor = this.state.userArmor - newEnemyAttack;
              this.setState({
                userArmor: newArmor
              });
            } else {
              let newAttack = newEnemyAttack - this.state.userAttack;
              let newHealth = this.state.userHealth - newAttack;
              this.setState({
                userHealth: newHealth,
                userArmor: 0
              });
            }
          case 2:
            let newArmor = this.state.enemyArmor + newEnemyArmor;
            this.setState({
              enemyArmor: newArmor
            });
        }
      };


      



    render() {
     
        return (
            <div className= "d-flex justify-content-center">
            <DeckBrain readPlayed={this.handlePlayedCards}/>
            </div>
        )}

}

export default BattlePage;