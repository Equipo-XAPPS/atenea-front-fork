import axios from "axios";
const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: { Accept: "*/*" },
});

const getAllTeachers = async () => {
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .get("api/v1/user/get-teachers/")
    .then((response) => {
      console.log(response.data);
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

const getUserByID = async (user) => {
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .get(`api/v1/user/get-user/?id=${user}`)
    .then((response) => {
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

const disableTeacher = async (teacher) => {
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .put("api/v1/user/delete-user/", {
      uid: teacher,
      enable: true,
    })
    .then((response) => {
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

const enableTeacher = async (teacher) => {
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .put("api/v1/user/delete-user/", {
      uid: teacher,
      enable: false,
    })
    .then((response) => {
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

//Los roles son: admin, docente, director
const updateRol = async (teacher, rol) => {
  console.log(teacher, rol);
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .put(`api/v1/user/update-user-rol/?id=${teacher}&type=${rol}`)
    .then((response) => {
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

const getAllStudents = async () => {
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .get("api/v1/student/getall-students/")
    .then((response) => {
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

const getStudentsByGrade = async (grade) => {
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .get(`api/v1/student/getone-bygrade/${grade}`)
    .then((response) => {
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

const getStudentByID = async (student) => {
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .get(`api/v1/student/getone-student/${student}`)
    .then((response) => {
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

const createStudent = async (studentObject) => {
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .post("api/v1/student/create-student/", studentObject)
    .then((response) => {
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

const updateStudent = async (studentObject, idStudent) => {
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .put(`api/v1/student/update-student/${idStudent}`, studentObject)
    .then((response) => {
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

const disableStudent = async (student) => {
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .put("api/v1/student/delete-student/", {
      uid: student,
      enable: false,
    })
    .then((response) => {
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

const enableStudent = async (student) => {
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .put("api/v1/student/delete-student/", {
      uid: student,
      enable: true,
    })
    .then((response) => {
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

const getAllBoletines = async () => {
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .get("api/v1/boletin/getAll-boletin")
    .then((response) => {
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

const getInformation = (responseToReturn) => {
  if (responseToReturn.status === undefined) {
    responseToReturn = responseToReturn.response.data;
  } else {
    responseToReturn = responseToReturn.data;
  }
  return responseToReturn;
};

const getEnabledTeachers = async () => {
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .get("api/v1/user/get-enabled-teachers")
    .then((response) => {
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

const getdisableTeachers = async () => {
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .get("api/v1/user/get-disabled-teachers")
    .then((response) => {
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

const getAllGrades = async () => {
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .get("api/v1/grade/getall-grades")
    .then((response) => {
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

const createGrade = async (gradeNameInput, teacherRefInput, levelRefInput) => {
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .post("api/v1/grade/add-grade", {
      grade_name: gradeNameInput,
      teacherRef: teacherRefInput,
      levelRef: levelRefInput,
    })
    .then((response) => {
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

const updateGrade = async (
  gradeNameInput,
  teacherRefInput,
  levelRefInput,
  idGrade
) => {
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .put(`api/v1/grade/update-grade/${idGrade}`, {
      grade_name: gradeNameInput,
      teacherRef: teacherRefInput,
      levelRef: levelRefInput,
    })
    .then((response) => {
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

const deleteGrade = async (idGrade) => {
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .put(`api/v1/grade/delete-grade/${idGrade}`)
    .then((response) => {
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

const GetOneTeacherByID = async (idTeacher) => {
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .get(`api/v1/user/get-teacher/${idTeacher}`)
    .then((response) => {
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

const DisableTeacher = async (idTeacher) => {
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .put(`api/v1/user/disable-teacher/${idTeacher}`)
    .then((response) => {
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

const EnableTeacher = async (idTeacher) => {
  let responseToReturn;
  api.defaults.headers.common["Content-Type"] = "application/json";
  await api
    .put(`api/v1/user/enable-teacher/${idTeacher}`)
    .then((response) => {
      responseToReturn = response;
    })
    .catch((error) => {
      responseToReturn = error;
    });
  return getInformation(responseToReturn);
};

const getMyStudentsByID = async (idTeacher) => {
    let responseToReturn;
    api.defaults.headers.common["Content-Type"] = "application/json";
    await api
      .get(`api/v1/attendence/get-mystudents/${idTeacher}`)
      .then((response) => {
        responseToReturn = response;
      })
      .catch((error) => {
        responseToReturn = error;
      });
    return getInformation(responseToReturn);
  };

export {
  EnableTeacher,
  DisableTeacher,
  GetOneTeacherByID,
  getAllTeachers,
  getUserByID,
  disableTeacher,
  enableTeacher,
  updateRol,
  getAllStudents,
  getStudentsByGrade,
  getStudentByID,
  createStudent,
  updateStudent,
  disableStudent,
  enableStudent,
  getAllBoletines,
  getEnabledTeachers,
  getdisableTeachers,
  getAllGrades,
  createGrade,
  updateGrade,
  deleteGrade,
  getMyStudentsByID
};
