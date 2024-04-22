/*
1. Домашнее задание №1*/


const schedules = [
  {
    title: "Силовая подготовка",
    time: "11:30 ",
    maxParticipants: 20,
    currentParticipants: 9,
  },
  {
    title: "Кросс на 5 км",
    time: "13:40 ",
    maxParticipants: 20,
    currentParticipants: 12,
  },
  {
    title: "Игра в футбол",
    time: "16:30 ",
    maxParticipants: 4,
    currentParticipants: 3,
  },
];

/**
 * Отображает расписания на веб-странице.
 *
 * @param {none}
 * @return {none}
 */

function renderSchedules() {
  const scheduleContainer = document.getElementById("schedule");
  scheduleContainer.innerHTML = "";

  schedules.forEach((schedule) => {
    const scheduleCard = document.createElement("div");
    scheduleCard.classList.add("card", "mb-3");

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardHeader.textContent = schedule.title;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const time = document.createElement("p");
    time.classList.add("card-text");
    time.textContent = `Время: ${schedule.time}`;

    const participants = document.createElement("p");
    participants.classList.add("card-text");
    participants.textContent = `Количество участников: ${schedule.currentParticipants}/${schedule.maxParticipants}`;

    const signUpButton = document.createElement("button");
    signUpButton.classList.add("btn", "btn-primary");
    signUpButton.textContent = "Записаться";

    if (schedule.currentParticipants < schedule.maxParticipants) {
      signUpButton.addEventListener("click", () => {
        schedule.currentParticipants++;
        renderSchedules();
      });
    } else {
      signUpButton.disabled = true;
    }

    const cancelSignUpButton = document.createElement("button");
    cancelSignUpButton.classList.add("btn", "btn-danger");
    cancelSignUpButton.textContent = "Отменить запись";

    cancelSignUpButton.addEventListener("click", () => {
      if (schedule.currentParticipants > 0) {
        schedule.currentParticipants--;
        renderSchedules();
      }
    });

    cardBody.appendChild(time);
    cardBody.appendChild(participants);
    cardBody.appendChild(signUpButton);
    cardBody.appendChild(cancelSignUpButton);

    scheduleCard.appendChild(cardHeader);
    scheduleCard.appendChild(cardBody);
    scheduleContainer.appendChild(scheduleCard);
  });
}

renderSchedules();
