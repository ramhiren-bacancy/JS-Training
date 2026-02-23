// fetch data from URL - https://gorest.co.in/public/v2/users
// Response :
// {
//     "id": 8382881,
//     "name": "Kailash Kaul",
//     "email": "kailash_kaul@luettgen-conn.test",
//     "gender": "male",
//     "status": "active"
//   }


// output:
// [
//   { userId: 8382881, userName: 'Kailash Kaul' },
//   { userId: 8382880, userName: 'Bhagvan Namboothiri' },
//   { userId: 8382879, userName: 'Priyala Sinha' },
//   { userId: 8382874, userName: 'Charuchandra Arora' },
//   { userId: 8382872, userName: 'Chitraksh Sinha' },
//   { userId: 8382871, userName: 'Triloki Nath Malik' },
//   { userId: 8382870, userName: 'Atreyi Mahajan' },
//   { userId: 8382869, userName: 'Sen. Bhardwaj Varrier' }
// ]
getData();


async function getData() {
  try {
    const res = await fetch("https://gorest.co.in/public/v2/users");
   
    const users = await res.json();

    if (!Array.isArray(users)) {
      throw new Error(`Invalid API Response Format`);
    }
    const result = formatting(users);

    if (!result.length) {
      console.warn(`No Active Users Found!`);
    }
    console.log(result);
    return result;
  } catch (e) {
    console.error("Error : ", e);
    return [];
  }
}

function formatting(response) {
  return response
    .filter((user) => user.status == "active")
    .map((user) => ({ userId: user.id, userName: user.name }));
}