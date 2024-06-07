const category = document.getElementById('category');
const availability = document.getElementById('availability');
const experience = document.getElementById('experience');
const postsContainer = document.getElementById('id-cards');

function filterPosts() {
  const selectedCategory = category.value;
  const selectedAvailability = availability.value;
  const selectedExperience = experience.value;
  const posts = [...postsContainer.children];
  posts.forEach((post) => {
    console.log(post.classList);
    if (selectedCategory === '') {
      post.style.display = 'block';
    } else if (post.classList.contains(selectedCategory) && post.classList.contains(selectedAvailability) && post.classList.contains(selectedExperience)) {
      post.style.display = 'block';
    } else {
      post.style.display = 'none';
    }
  });
}