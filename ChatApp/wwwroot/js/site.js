// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var createRoomBtn = document.getElementById('create-room-btn')
var createRoomModal = document.getElementById('create-room-modal')
createRoomBtn.addEventListener('click', function () {
    createRoomModal.classList.add('active')
})

function closeModal() {
    createRoomModal.classList.remove('active')
}