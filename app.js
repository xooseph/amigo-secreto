let friends = [];

function addFriend() {
    let friendInput = document.getElementById('friend').value;

    if (friendInput === '') {
        alert('Por favor, inserte un nombre.');
    } else {
        friends.push(friendInput);
        document.getElementById('friend').value = '';

        updateFriendList();
    }

    return;
}

function updateFriendList() {
    let friendList = document.getElementById('friendList');
    friendList.innerHTML = '';

    for (let i = 0; i < friends.length; i++) {
        let li = document.createElement('li');
        li.textContent = friends[i];
        friendList.appendChild(li);
    }

    return;
}

function drawFriend() {
    if (friends.length < 2) {
        alert('Necesita al menos dos amigos para realizar el sorteo del Amigo Secreto.');
        return;
    }

    let index = Math.floor(Math.random() * friends.length);

    let selectedFriend = friends[index];

    let resultFriend = document.getElementById('result');
    
    resultFriend.innerHTML = selectedFriend;
}