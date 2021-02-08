import axios from 'axios'

export default function commonFunctions() {
	let status = false

	function getStatus() {
		axios.get('/api/status').then(
			result => {
				console.log(status)
				if (result.status === 200) status = true
			},
			error => {
				console.error(error)
				me.serverStatus = false
			}
		)
	}
	return { getStatus, status }
	// function getStatus() {
	// 	fetch(`https://jsonplaceholder.typicode.com/posts`)
	// 		.then(response => response.json())
	// 		.then(data => (posts.value = data));
	// }

	// function fetchPost(postId) {
	// 	fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
	// 		.then(response => response.json())
	// 		.then(data => (post.value = data))
	// 		.then(data => fetchUser(data.userId));
	// }

	// function fetchUser(userId) {
	// 	fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
	// 		.then(response => response.json())
	// 		.then(data => (user.value = data))
	// }
}