const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    { sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Bro T" },
    { sectionNum: 2, roomNum: "STC 347", enrolled: 28, days: "TTh", instructor: "Sis A" }
  ],
  changeEnrollment: function (sectionNum, add = true) {
    const Index = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (Index >= 0) {
      if (add) {
        this.sections[Index].enrolled++;
      } else {
        this.sections[Index].enrolled--;
      }
      renderSections(this.sections);
    }
  }
};

function renderHeader(course) {
  const nameEl = document.querySelector("#courseName");
  const codeEl = document.querySelector("#courseCode");
  nameEl.textContent = course.name;
  codeEl.textContent = course.code;
}

function sectionTemplate(section) {
  return `<tr>
    <td>${section.sectionNum}</td>
    <td>${section.roomNum}</td>
    <td>${section.enrolled}</td>
    <td>${section.days}</td>
    <td>${section.instructor}</td></tr>`;
}

function renderSections(sections) {
  const sectionsEl = document.querySelector("#sections");
  const html = sections.map(sectionTemplate);
  sectionsEl.innerHTML = sections.map(sectionTemplate).join("");
}

renderHeader(aCourse);
renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", () => {
  const sectionInput = document.querySelector("#sectionNumber");
  aCourse.changeEnrollment(Number(sectionInput.value), true);
});

document.querySelector("#dropStudent").addEventListener("click", () => {
  const sectionInput = document.querySelector("#sectionNumber");
  aCourse.changeEnrollment(Number(sectionInput.value), false);
});
