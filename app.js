// alert('하이')

// 이미지1 태그를 선택
const img1 = document.querySelector('.img1');
const img2 = document.querySelector('.img2');
const h1 = document.querySelector('h1');

// 랜덤 번호
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

img1.setAttribute('src', 'images/dice' + randomNumber1 + '.png');
img2.setAttribute('src', 'images/dice' + randomNumber2 + '.png');

// console.log(randomNumber1)
// console.log(randomNumber2)

// h1.innerText = '🚩'

// if else문으로 player1, 2 중 누가 이겼는지 표시

if (randomNumber1 > randomNumber2) {
    h1.innerText = 'Player1 승리'
} else if (randomNumber1 < randomNumber2) {
    h1.innerText = 'Player2 승리'
} else {
    h1.innerText = 'Draw'
}

