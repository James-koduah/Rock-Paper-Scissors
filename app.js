function setup(){
    let player_option = document.getElementById('player_option')
    let player_option_pos = player_option.getBoundingClientRect()
    let computer_option = document.getElementById('computer_option')
    let computer_option_pos = computer_option.getBoundingClientRect()

    let player_choice;
    let computer_choice;
    let computer_options = document.getElementsByClassName('computer_option')
    let player_options = document.getElementsByClassName('option')
    let player_score = 0;
    let computer_score = 0;
    let player_score_dis = document.getElementById('player_score')
    let computer_score_dis = document.getElementById('computer_score')
    let announce = document.getElementById('announce')


    function clearscreen(){
        let all = document.getElementsByClassName('float')
        for (let elem of all){
            elem.style.top = '1000px'
            setTimeout(() => {
                elem.remove()
            }, 150);
        }
    }

    for (let elem of player_options){
        let pos = elem.getBoundingClientRect()
        elem.addEventListener('click', ()=>{
            let fresh = elem.cloneNode(true)
            player_choice = fresh.dataset.option
            clearscreen()
            fresh.classList.add('float')
            fresh.style.position = 'fixed'
            fresh.style.top = `${pos.y}px`
            fresh.style.left = `${pos.x}px`
            document.body.appendChild(fresh)
            computer()
            setTimeout(() => {
                fresh.style.top = `${player_option_pos.y}px`
                fresh.style.left = `${player_option_pos.x}px`
            }, 100);
        })
    }

    function computer(){
        const randomInteger = Math.floor(Math.random() * 3);
        let elem = computer_options[randomInteger]
        let pos = elem.getBoundingClientRect()
        let fresh = elem.cloneNode(true)
        computer_choice = fresh.dataset.option
        fresh.classList.add('float')
        fresh.style.position = 'fixed'
        fresh.style.top = `${pos.y}px`
        fresh.style.left = `${pos.x}px`
        document.body.appendChild(fresh)
        setTimeout(() => {
            fresh.style.top = `${computer_option_pos.y}px`
            fresh.style.left = `${computer_option_pos.x}px`
            game()
        }, 50);
    }

    function win(who){
        if (who === 'player'){
            player_score += 1;
            player_score_dis.innerText = player_score;
        }
        if (who === 'computer'){
            computer_score += 1;
            computer_score_dis.innerText = computer_score
        }
    }

    function game(){
        if (player_choice === 'rock' && computer_choice === 'rock'){
            console.log('draw')
            announce.innerHTML = 'Draw'
        }
        if (player_choice === 'rock' && computer_choice === 'paper'){
            win('computer')
            announce.innerHTML = 'You Lose<br>Paper wraps your Rock'
        }
        if (player_choice === 'rock' && computer_choice === 'scissors'){
            win('player')
            announce.innerHTML = 'You Win<br>Rock smash Scissors'
        }

        if (player_choice === 'paper' && computer_choice === 'paper'){
            console.log('draw')
            announce.innerHTML = 'Draw'
        }
        if (player_choice === 'paper' && computer_choice === 'scissors'){
            win('computer')
            announce.innerHTML = 'You Lose<br>Scissors cuts Paper'
        }
        if (player_choice === 'paper' && computer_choice === 'rock'){
            win('player')
            announce.innerHTML = 'You Win<br>Paper wraps Rock'
        }

        if (player_choice === 'scissors' && computer_choice === 'scissors'){
            console.log('draw')
            announce.innerHTML = 'Draw'
        }
        if (player_choice === 'scissors' && computer_choice === 'rock'){
            win('computer')
            announce.innerHTML = 'You Lose<br>Rock Smash Sissors'
        }
        if (player_choice === 'scissors' && computer_choice === 'paper'){
            win('player')
            announce.innerHTML = 'You Win<br>Scissors cuts Paper'
        }
    }

    // for (let elem of computer_options){
    //     let pos = elem.getBoundingClientRect()
    //     elem.style.top = `${pos.y}px`
    //     elem.style.left = `${pos.x}px`
    //     let moved = false
    //     elem.addEventListener('click', ()=>{
    //         let fresh = document.createElement('div')
    //         fresh.className = 'option_new'
    //         fresh.style.position = 'fixed'
    //         fresh.style.top = `${pos.y}px`
    //         fresh.style.left = `${pos.x}px`
    //         document.body.appendChild(fresh)
    //         setTimeout(() => {
    //             fresh.style.top = `${computer_option_pos.y}px`
    //             fresh.style.left = `${computer_option_pos.x}px`
    //             fresh.style.background = 'green'
    //         }, 100);
    //     })
    // }
}
setup()




function teardown(){

}