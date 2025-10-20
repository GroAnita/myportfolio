// views
import Students from "../pages/students.js";
import Home from "../pages/home.js";
import Results from "../pages/results.js";
import School from "../pages/school.js";
import About from "../pages/about.js";
import studentResults from "../pages/student-results.js";
import AdminDashboard from "../pages/admin-dashboard.js";
import TeacherDashboard from "../pages/teacher-dashboard.js";
import TeacherEditProfile from "../pages/teacher-editprofile.js";
import signUp from "../pages/signup.js";
import studentEditProfile from "../pages/student-editprofile.js";
import AddStudent from "../pages/add-student.js";
import AddTeacher from "../pages/add-teacher.js";
import AddSchool from "../pages/add-school.js";
import AdminProfileEdit from "../pages/admin-profile-edit.js";
import studentProfile from "../pages/student-profile.js";
import Login from "../pages/login.js";
import teacherProfile from "../pages/profile-card-teacher.js";
import studentResultsTeacherView from "../pages/student-results-teacher-view.js";
import ManageUserTeacher from "../pages/manage-user-teacher.js";
import TopStudentResult from "../pages/topstudentresult.js";
import StudentManageUser from "../pages/student-manage-user.js";

const routes = [
  { path: "/", view: Home },
  { path: "/results", view: Results },
  { path: "/about", view: About },
  { path: "/school", view: School },
  { path: "/signup", view: signUp },
  { path: "/student", view: Students },
  { path: "/student/results", view: studentResults },
  { path: "/student/profile", view: studentProfile },
  { path : "/student/profile/edit", view: studentEditProfile },
  { path: "/login", view: Login },
  { path: "/students/top", view: TopStudentResult, options: { pageHandlesFooter: true } },
  { path: "/teacher", view: TeacherDashboard },
  { path: "/teacher/profile", view: teacherProfile },
  { path: "/teacher/profile/edit", view: TeacherEditProfile },
  { path: "/admin", view: AdminDashboard },
  { path: "/teacher-editprofile", view: TeacherEditProfile },
  { path: "/admin/addStudents", view: AddStudent },
  { path: "/admin/addTeachers", view: AddTeacher },
  { path: "/admin/addSchool", view: AddSchool },
  { path: "/admin/profile/edit", view: AdminProfileEdit },
  { path: "/admin/manage/student", view: StudentManageUser},
  { path: "/teacher/results", view: studentResultsTeacherView },
  { path: "/admin/manage/teacher", view: ManageUserTeacher },
];

export default routes;