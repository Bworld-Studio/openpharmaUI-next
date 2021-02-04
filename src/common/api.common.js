import { ref } from "vue"
import axios from 'axios'

export default function getStatus() {
	let post = ref({});

	function fetchPosts() {
		fetch(`https://jsonplaceholder.typicode.com/posts`)
			.then(response => response.json())
			.then(data => (posts.value = data));
	}

	function fetchPost(postId) {
		fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
			.then(response => response.json())
			.then(data => (post.value = data))
			.then(data => fetchUser(data.userId));
	}

	function fetchUser(userId) {
		fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
			.then(response => response.json())
			.then(data => (user.value = data))
	}

	return { fetchPosts, fetchPost, fetchUser, post, posts, user }
}