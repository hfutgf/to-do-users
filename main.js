const users = document.querySelector('.users');

const select = document.getElementById('select');

const sorted = document.getElementById('sorted');

const editClone = document.getElementById('edition');

function openMenu(element) {
  element.classList.toggle('display')
}
function onHigh(user) {
  let email = user.split('$')[0]
  let status = user.split('$')[1]
  data.find((elem) => elem?.email === email).priority = status
  users.innerHTML = ''
  renderUsers(data)
}


const colorFunc = (name) => {
  let color1 = 'green'
  let color2 = 'red'
  let color3 = 'yellow'

  if (String(name) === 'normal') {
    return color1
  } else if (String(name) === 'high') {
    return color2
  } else if (String(name) === 'low') {
    return color3
  }
}





const renderUsers = (array) => {

  array.forEach((user, index) => {

    const card = document.createElement('div');
    card.className = "user p-4 d-flex";

    card.innerHTML = `
              <div class="user-imgage">
                <img src="${user.ava}" alt="user-img" class="user__image-i " width="44" height="44">
              </div>
              <div class="user-j ">
                <h4 class="user-job__paragraph">
                  ${user.email}
                </h4>
                <span class="user__span">
                  ${user.phone}
                </span>
              </div>
              <div class="user-info">
                <h4 class="user-info__name">
                  ${user.name}
                </h4>
                <span class="user__span">
                  ${user.date_of_onliine}
                </span>
              </div>
              <div class="user-date">
                <h4 class="user-date__day">
                  ${user.date_of_register}
                </h4>
                <span class="user__span">
                  ${user.time}
                </span>
              </div>
              <div class="user-level">
                <h5 class="user-level__l text-light ${colorFunc(user.priority)}" id ="level">${user.priority}</h5>
              </div>
              <div class="user-edit" onClick={openMenu(edition${index})}>
                <ul class="user-edit__down" id="edition${index}">
                  <li onClick={onHigh('${user?.email + '$high'}')}>High</li>
                  <li onClick={onHigh('${user?.email + '$low'}')}>Low</li>
                  <li onClick={onHigh('${user?.email + '$normal'}')}>Normal</li>
                </ul>
                <span class="span"></span>
                <span class = "span"></span>
                <span class = "span"></span>
              </div>      
 `
    users.appendChild(card);


  })


}



renderUsers(data);

select.addEventListener('change', (e) => {
  const filteredUser = [];
  users.textContent = '';
  data.filter((user) => {
    if (user.priority.includes(select.value)) {
      filteredUser.push(user);
    }
  })
  renderUsers(filteredUser);

})

sorted.addEventListener('click', () => {
  const nmadir = data.sort((a, b) => a.name.localeCompare(b.name));
  users.innerHTML = '';
  renderUsers(nmadir);
})