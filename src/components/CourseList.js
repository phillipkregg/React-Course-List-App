import React from 'react';
import PropTypes from 'prop-types';

function CourseList(props) {
  const courses = props.courses;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Authors ID</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {courses.map(course => {
          return (
            <tr key={course.id}>
              <td>{course.title}</td>
              <td>{course.authorId}</td>
              <td>{course.category}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      authorId: PropTypes.number.isRequired,
      category: PropTypes.string.isRequired
    })
  )
};

CourseList.defaultProps = {
  courses: []
};

export default CourseList;
