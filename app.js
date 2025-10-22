// Retrieve token from localStorage
const token = localStorage.getItem("access_token");

// Always wrap inside an async function or async handler
async function getLoginData() {
  try {
    const res = await fetch('http://127.0.0.1:5000/api/login', {
      method: 'GET', // or 'POST' depending on your endpoint
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!res.ok) {
      throw new Error('Request failed: ' + res.status);
    }

    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error('Error:', err);
  }
}

// Run the function
getLoginData();
