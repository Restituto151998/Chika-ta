const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');
let timeout;
let typing = false;


 
const { username } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

const socket = io();

// Join chatroom
socket.emit('joinRoom', { username});
socket.on('roomUsers', ({  users }) => {
    // outputRoomName(room);
    outputUsers(users);
  });
  socket.on('message', (message) => {
    outputMessage(message);
  
   
  });

  
  // Message submit
 
chatForm.addEventListener('submit', (e) => {
    e.preventDefault();
  
    // Get message text
    let msg = e.target.elements.msg.value;
    msg = msg.trim();
  
  
    if (!msg) {
      return false;
    }
    socket.on("typing", (msg) => {
      socket.broadcast.emit("typing", msg);
    });
  
    // Emit message to server
    socket.emit('chatMessage', msg);
  
    // Clear input
    e.target.elements.msg.value = '';
    e.target.elements.msg.focus();
  });
  // Add room name to DOM
// function outputRoomName(room) {
//     roomName.innerText = room;
//   }
  // Add users to DOM
function outputUsers(users) {
    userList.innerHTML = '';
    users.forEach((user) => {
      const li = document.createElement('li');
      li.innerText = user.username + '';
    
      userList.appendChild(li);

    // if(username == user.username){
    //   $('#users').append(`<li>${user.username}</li><br>`);
    // }else{
    //   $('#users').append(`<li>${user.username} <a href="private.html" class="btn float-right" style="background-color: palevioletred;color:white;">Send Mail</a></li><br>`);
    //   $('#receiver').html(`${user.username}`);
    // }
     });
  }


//display messages
  function outputMessage(message) {
    if(username == message.username){
      $('.messages').append(`<p class="senderOutput"> ${message.username} ${message.time} <br><strong> ${message.text}</strong></p>`);
    }else{
      $('.messages').append(`<p class="receiverOutput">${message.username} ${message.time} <br> <strong> ${message.text}</strong></p>`);
    
    }

  }

  //typing
function timeoutFunc(){
  typing = false;
  socket.emit("typing", false);
}
$('#msg').keyup(function(){
  typing = true;
  socket.emit('typing', username + ' is typing...');
  clearTimeout(timeout);
  timeout = setTimeout(timeoutFunc,1000);
});

socket.on('typing',function(data){
  if(data){
    $('#typing').html(data);

  }else{
    $('#typing').html("");
  }
});

  //Prompt the user before leave chat room
document.getElementById('leave-btn').addEventListener('click', () => {
  const leaveRoom = confirm('Are you sure you want to logout?');

  if (leaveRoom) {
    window.location = '../index.html';
  }
});


  
$('#1').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#1').html());

});

$('#2').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#2').html());

});

$('#3').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#3').html());

});

$('#4').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#4').html());

});
$('#5').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#5').html());

});
$('#6').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#6').html());

});
$('#7').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#7').html());

});
$('#8').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#8').html());

});
$('#26').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#26').html());

});
$('#9').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#9').html());

});
$('#10').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#10').html());

});
$('#11').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#11').html());

});
$('#12').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#12').html());

});
$('#13').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#13').html());

});
$('#14').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#14').html());

});
$('#15').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#15').html());

});
$('#16').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#16').html());

});
$('#17').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#17').html());

});
$('#18').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#18').html());

});
$('#19').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#19').html());

});
$('#20').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#20').html());

});
$('#21').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#21').html());

});
$('#22').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#22').html());

});
$('#23').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#23').html());

});
$('#24').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#24').html());

});
$('#25').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#25').html());

});
$('#27').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#27').html());

});
$('#28').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#28').html());

});
$('#29').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#29').html());

});
$('#30').click(function(){
  
  // $('#haha').clone().append('#msg');
  $('#msg').val($('#msg').val() + $('#30').html());

});

  
