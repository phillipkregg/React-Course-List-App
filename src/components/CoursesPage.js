import React, { useState, useEffect } from 'react';
import courseStore from '../stores/CourseStore';
import CourseList from './CourseList';
import { Link } from 'react-router-dom';
import { loadCourses, deleteCourse } from '../actions/courseActions';
import { toast } from 'react-toastify';

function CoursesPage() {
  const [courses, setCourses] = useState(courseStore.getCourses());

  useEffect(() => {
    courseStore.addChangeListener(onChange);
    if (courseStore.getCourses().length === 0) loadCourses();
    return () => courseStore.removeChangelistener(onChange);
  }, []);

  function onChange() {
    setCourses(courseStore.getCourses());
  }

  function handleDelete(course) {
    let answer = window.confirm('Delete this course?');
    if (answer) {
      deleteCourse(course).then(() => {
        toast.success(`The ${course.title} course was deleted`);
      });
      onChange();
    } else {
    }
  }

  return (
    <>
      <h2>Courses</h2>
      <Link className="btn btn-primary" to={'/course'}>
        Add Course
      </Link>
      <CourseList
        courses={courses}
        onDelete={handleDelete}
        onChange={onChange}
      />
    </>
  );
}

export default CoursesPage;
