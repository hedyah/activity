function getActivity() {
    axios.request({
        method : "GET",
        url :"http://www.boredapi.com/api/activity?participants"
    }).then(activitySucess).catch(activityError);
}

function activitySucess(response) {
    console.log(response);
    console.log(response.data.activity);
    let activity = response.data.activity;
    document.getElementById('activity').innerText=activity;
    console.log(response.data.participants);
    let participants = response.data.participants;
    document.getElementById('participants').innerHTML=participants;
}

function activityError(error) {
    console.log(error);
}

document.getElementById('get').addEventListener('click', getActivity);