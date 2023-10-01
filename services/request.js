export async function loginRequest(userData) {
  const response = await fetch("https://api-hrsm.onrender.com/v1/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });



  return response;
}

export async function session(data) {
  if (data) {
    sessionStorage.setItem("token", JSON.stringify(data));
  } else {
    return JSON.parse(sessionStorage.getItem("token"));
  }
}

export async function getUser(token) {
  const response = await fetch("https://api-hrsm.onrender.com/v1/get_user", {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  });

  const data = await response.json();

  return data;
}

export async function addedUserLocation(token) {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      async function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        if (token) {
          const response = await fetch(
            "https://api-hrsm.onrender.com/v1/add_location",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + token,
              },
              body: JSON.stringify({longitude, latitude}),
            }
          );         
        }
      },
      function (error) {
        console.error("Error getting location: " + error.message);
      }
    );
  } else {
    console.log("Geolocation is not available in this browser.");
  }
}


export async function signup(data){
    const response = await fetch("https://api-hrsm.onrender.com/v1/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response

}
export async function getHospitals(token){
    const response = await fetch(
      "https://api-hrsm.onrender.com/v1/get_hospitals",
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + token,
        },
      }
    );

    const data  =  await response.json();



    return  data

}
export function  pagination(totalItems){
  const data = Array.from(
    { length: Math.ceil(totalItems.length / 3) },
    (_, index) => totalItems.slice(index * 3, (index + 1) * 3)
  );
 return data
}