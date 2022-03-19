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
  discount: null;
  image_url: string;
  discount_price: null;
}

export interface ISector {
  name: string;
  sector_uuid: string;
  sector_image: string;
  related_course: ICourses[];
}
export interface ICategory {
  category_uuid: string;
  category_name: string;
  featured_sectors: ISector[];
  category_image: string;
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

export interface ISection {
  name_section: string;
  section_uuid: string;
  section_image: string;
  related_category: number[];
}

export interface Topic {
  id: number;
  length: string;
  topic_name: string;
  objectives: string;
  files: any[];
  sub_topics: number[];
}
export interface Module {
  id: number;
  module_name: string;
  topics: Topic[];
  total_duration: string;
}
export interface ICourseDetail {
  comments: Comment[];
  author: IAuthor;
  modules: Module[];
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
  discount: null;
}
