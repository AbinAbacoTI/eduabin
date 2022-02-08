export interface IAuthor {
  name: string;
}

export interface IDetailCourse{
  comments: any[];
  author: IAuthor;
  modules: any[];
  student_no: number;
  total_modules: number;
  total_duration: string;
  image_url: string;
  course_name: string;
  main_image: string;
  description: string;
  valoration: number;
  price: string;
  objectives: string;
  last_update: Date;
  state: string;
  course_uuid: string;
}

export interface ICourses {
  course_name: string;
  course_uuid: string;
  student_no: number;
  author: IAuthor;
  price: string;
  image_url: string;
}

export interface ISectorCourse {
  sector_uuid: string;
  sector_name: string;
  featured_courses: ICourses[];
  sector_image: string;
}

export interface DataCourse {
  course_uuid: string;
  course_name: string;
  student_no: number;
  author: IAuthor;
  price: string;
  main_image: string;
  description: string;
  total_modules: number;
}

export interface ISectorCourseById {
  data: DataCourse[];
  sector_name: string;
  total_students: number;
}
