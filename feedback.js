const userCount = 50;
const messageTemplate = document.querySelector('#fdb-msg').content;
const usersPlace = document.querySelector('.feedback-messages');
const users = [];
async function fetchArray() {
	let f = await fetch('https://jsonplaceholder.typicode.com/comments')
		.then((response) => response.json())
		.then((data) => {
			data = data.slice(0, userCount);
			data.map((el) => {
				users.push(el);
			});
		});
}
fetchArray().then(() => {
	for (let i = 0; i < userCount; i++) {
		const clone = messageTemplate.cloneNode(true);
		clone.querySelector('.email').textContent = users[i].email;
		clone.querySelector('.msg').textContent = users[i].body;

		usersPlace.appendChild(clone);
	}
});
